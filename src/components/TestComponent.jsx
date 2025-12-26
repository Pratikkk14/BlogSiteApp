import React, { useState } from "react";
import { useUIStore, useAuthStore } from "../store/useStore";
import authService from "../appwrite/Auth";
import { userService } from "../appwrite/Tables";

export default function TestComponent() {
  // Theme selector
  const theme = useUIStore((state) => state.theme);
  const ThemeList = useUIStore((state) => state.ThemeList);
  const setTheme = useUIStore((state) => state.setTheme);

  // Auth store
  const userData = useAuthStore((state) => state.userData);
  const token = useAuthStore((state) => state.token);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // Backend test states
  const [currentUser, setCurrentUser] = useState(null);
  const [dbUserData, setDbUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testUserId, setTestUserId] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginResponse, setLoginResponse] = useState(null);

  // Test: Login
  const handleTestLogin = async () => {
    setLoading(true);
    setError(null);
    if (!loginEmail || !loginPassword) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }
    try {
      const response = await authService.login({ 
        email: loginEmail, 
        password: loginPassword 
      });
      setLoginResponse(response);
      // Update auth store
      useAuthStore.getState().login(response.userData, response.sessionId);
      console.log("Login Response:", response);
    } catch (err) {
      setError(err.message || "Login failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Test: Get current user from Appwrite Auth
  const handleGetCurrentUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await authService.getCurrentUser();
      setCurrentUser(user);
      console.log("Current User:", user);
    } catch (err) {
      setError(err.message || "Failed to get current user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Test: Get user data from database
  const handleGetUserData = async () => {
    setLoading(true);
    setError(null);
    const userId = testUserId || currentUser?.$id || user?.userId;
    if (!userId) {
      setError("No user ID available. Get current user first or enter a user ID.");
      setLoading(false);
      return;
    }
    try {
      const data = await userService.getUserById(userId);
      setDbUserData(data);
      console.log("User Data from DB:", data);
    } catch (err) {
      setError(err.message || "Failed to get user data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Test: Logout
  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await authService.logout();
      useAuthStore.getState().logout();
      setCurrentUser(null);
      setDbUserData(null);
      console.log("Logged out successfully");
    } catch (err) {
      setError(err.message || "Failed to logout");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Backend Testing Component</h1>

      {/* Theme Selector */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Theme Selector</h2>
          <select
            className="select select-bordered w-full max-w-xs"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {ThemeList.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Auth Store State */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Auth Store State</h2>
          <div className="bg-base-200 p-4 rounded">
            <p><strong>Is Authenticated:</strong> {isLoggedIn ? "Yes" : "No"}</p>
            <p><strong>Session ID:</strong> {token || "None"}</p>
            <p><strong>User ID:</strong> {userData?.$id || "None"}</p>
            <p><strong>Username:</strong> {userData?.username || "None"}</p>
            <p><strong>First Name:</strong> {userData?.firstName || "None"}</p>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {/* Auth Testing */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login Testing</h2>
          <div className="flex gap-2 items-end flex-wrap">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="email@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Enter password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button 
              className="btn btn-success" 
              onClick={handleTestLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "Test Login"}
            </button>
          </div>
          {loginResponse && (
            <div className="bg-base-200 p-4 rounded mt-4">
              <h3 className="font-bold mb-2">Login Response:</h3>
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(loginResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Auth Testing */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Auth Service Testing</h2>
          <div className="flex gap-2 flex-wrap">
            <button 
              className="btn btn-primary" 
              onClick={handleGetCurrentUser}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Current User"}
            </button>
            <button 
              className="btn btn-error" 
              onClick={handleLogout}
              disabled={loading}
            >
              Logout
            </button>
          </div>
          {currentUser && (
            <div className="bg-base-200 p-4 rounded mt-4">
              <h3 className="font-bold mb-2">Current User (Auth):</h3>
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(currentUser, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* User Service Testing */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">User Service Testing</h2>
          <div className="flex gap-2 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User ID (optional - uses current user if empty)</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Enter user ID"
                value={testUserId}
                onChange={(e) => setTestUserId(e.target.value)}
              />
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleGetUserData}
              disabled={loading}
            >
              Get User Data
            </button>
          </div>
          {dbUserData && (
            <div className="bg-base-200 p-4 rounded mt-4">
              <h3 className="font-bold mb-2">User Data (Database):</h3>
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(dbUserData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Direct getUserById Testing */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Direct getUserById Testing</h2>
          <div className="flex gap-2 items-end">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Enter User ID</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="694aa440003df8fd7748"
                value={testUserId}
                onChange={(e) => setTestUserId(e.target.value)}
              />
            </div>
            <button 
              className="btn btn-primary" 
              onClick={async () => {
                if (!testUserId) {
                  setError("Please enter a user ID");
                  return;
                }
                setLoading(true);
                setError(null);
                try {
                  const data = await userService.getUserById(testUserId);
                  setDbUserData(data);
                  console.log("Direct getUserById result:", data);
                } catch (err) {
                  setError(err.message || "Failed to get user");
                  console.error(err);
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get User"}
            </button>
          </div>
          {dbUserData && (
            <div className="bg-base-200 p-4 rounded mt-4">
              <h3 className="font-bold mb-2">User Data:</h3>
              <pre className="text-xs overflow-x-auto">
                {JSON.stringify(dbUserData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
