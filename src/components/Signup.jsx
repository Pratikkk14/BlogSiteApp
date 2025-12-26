import { Form, redirect } from "react-router";
import React from "react";
import InputBox from "./Input";
import authService from "../appwrite/Auth";
import { useAuthStore } from "../store/useStore";

function Signup() {
  const login = useAuthStore((state) => state.login);

  let emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM4.5,3h15c1.084,0,2.043,.506,2.686,1.283l-7.691,7.692c-.662,.661-1.557,1.025-2.497,1.025-.914-.017-1.826-.36-2.492-1.025L1.814,4.283c.643-.777,1.601-1.283,2.686-1.283Zm18.5,14.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-.477,.097-.931,.271-1.346l7.528,7.528c.851,.851,1.98,1.318,3.177,1.318s2.375-.467,3.226-1.318l7.528-7.528c.174,.415,.271,.869,.271,1.346v11Z" />
    </svg>
  );
  let keyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M7.505,24A7.5,7.5,0,0,1,5.469,9.283,7.368,7.368,0,0,1,9.35,9.235l7.908-7.906A4.5,4.5,0,0,1,20.464,0h0A3.539,3.539,0,0,1,24,3.536a4.508,4.508,0,0,1-1.328,3.207L22,7.415A2.014,2.014,0,0,1,20.586,8H19V9a2,2,0,0,1-2,2H16v1.586A1.986,1.986,0,0,1,15.414,14l-.65.65a7.334,7.334,0,0,1-.047,3.88,7.529,7.529,0,0,1-6.428,5.429A7.654,7.654,0,0,1,7.505,24Zm0-13a5.5,5.5,0,1,0,5.289,6.99,5.4,5.4,0,0,0-.1-3.3,1,1,0,0,1,.238-1.035L14,12.586V11a2,2,0,0,1,2-2h1V8a2,2,0,0,1,2-2h1.586l.672-.672A2.519,2.519,0,0,0,22,3.536,1.537,1.537,0,0,0,20.465,2a2.52,2.52,0,0,0-1.793.743l-8.331,8.33a1,1,0,0,1-1.036.237A5.462,5.462,0,0,0,7.5,11ZM5,18a1,1,0,1,0,1-1A1,1,0,0,0,5,18Z" />
    </svg>
  );
  let userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
    >
      <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
      <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
    </svg>
  );
  let usernameIcon = (<svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m10.5 17c-.276 0-.5-.224-.5-.5 0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .276-.224.5-.5.5zm-.5-7.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5 1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-1 0c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zm15 8v-11c0-2.481-2.019-4.5-4.5-4.5h-15c-2.481 0-4.5 2.019-4.5 4.5v11c0 2.481 2.019 4.5 4.5 4.5h15c2.481 0 4.5-2.019 4.5-4.5zm-4.5-14.5c1.93 0 3.5 1.57 3.5 3.5v11c0 1.93-1.57 3.5-3.5 3.5h-15c-1.93 0-3.5-1.57-3.5-3.5v-11c0-1.93 1.57-3.5 3.5-3.5zm.5 5.5c0-.276-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5s.224.5.5.5h6c.276 0 .5-.224.5-.5zm0 4c0-.276-.224-.5-.5-.5h-6c-.276 0-.5.224-.5.5s.224.5.5.5h6c.276 0 .5-.224.5-.5zm-2 4c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5z"/></svg>)
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="absolute top-8 text-center w-full text-4xl font-bold mt-25">
        <h2>Welcome to MegaBlogSite!</h2>
      </div>
      <Form
        method="post"
        className="w-full max-w-sm p-8 space-y-6 bg-base-100 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">SignUp</h2>
        <InputBox
          title="Name"
          type="text"
          name="name"
          placeholder="Patrick"
          className="input input-bordered w-full"
          svgIcon={userIcon}
          required
        />
        <InputBox
          title="username"
          type="text"
          name="username"
          placeholder="any unique_username"
          className="input input-bordered w-full"
          svgIcon={usernameIcon}
          required
        />
        <InputBox
          title="Email"
          type="email"
          name="email"
          placeholder="example@xyz.com"
          className="input input-bordered w-full"
          svgIcon={emailIcon}
          required
        />
        <InputBox
          title="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          svgIcon={keyIcon}
          autoComplete="new-password"
          required
        />
        <button type="submit" className="btn btn-primary w-full mt-2">
          SignUp
        </button>
      </Form>
    </div>
  );
}

async function signupAction({ request }) {
  const formData = await request.formData();
  let name = formData.get("name");
  name = name.split(" ")[0];
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  
  try {
    const res = await authService.createAccount({
      username,
      name,
      email,
      password,
    });

    // Update Zustand state
    useAuthStore.getState().login(res.userData, res.sessionId);
    
    // Wait a tick to ensure localStorage write completes
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Redirect to home
    return redirect("/home");
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}

export { Signup, signupAction };