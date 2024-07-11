import { useState } from "react";
import { useAuth } from "../../context/auth";
import "./login.style.scss";
import { Button } from "../../components";

export const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login("Truong Nguyen");
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-title">
        {isLoading ? (
          <p>Logging you in, please wait....</p>
        ) : (
          <>
            <h1>My Reads</h1>
            <p>Please login to view amazing books!</p>
          </>
        )}
      </div>
      <div>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};
