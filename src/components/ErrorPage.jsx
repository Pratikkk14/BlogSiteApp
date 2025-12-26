import React from "react";
import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="bg-base-100 p-8 rounded-lg shadow-lg text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-error mb-4">Oops! Something went wrong.</h1>
        <p className="mb-4 text-lg">An unexpected error has occurred.</p>
        
        {error && (
          <div className="text-left space-y-3">
            {error.status && (
              <div className="bg-base-200 p-3 rounded">
                <strong className="text-error">Status:</strong> {error.status} {error.statusText}
              </div>
            )}
            
            {error.message && (
              <div className="bg-base-200 p-3 rounded">
                <strong className="text-error">Message:</strong> {error.message}
              </div>
            )}
            
            {error.data && (
              <div className="bg-base-200 p-3 rounded">
                <strong className="text-error">Details:</strong> {error.data}
              </div>
            )}
            
            {error.stack && (
              <details className="bg-base-300 p-3 rounded">
                <summary className="cursor-pointer font-semibold text-error">Stack Trace</summary>
                <pre className="text-xs mt-2 overflow-x-auto text-error-content whitespace-pre-wrap">
                  {error.stack}
                </pre>
              </details>
            )}
            
            {!error.message && !error.status && (
              <pre className="bg-base-300 p-4 rounded text-error-content overflow-x-auto text-sm">
                {JSON.stringify(error, null, 2)}
              </pre>
            )}
          </div>
        )}
        
        <button className="btn btn-primary mt-6" onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
