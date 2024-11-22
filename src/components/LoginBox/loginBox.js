import { useState } from "react";
import { Box, Button } from "@mui/material";
import LoginMethod from "./loginMethod";
import LoginAnotherMethode from "./loginAnotherMethode";

const LoginBox = () => {
  const [login, setLogin] = useState(true);

  // Validation states
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Login function
  const loginFunc = () => {
    if (!login) {
      setLogin(true)
    } else {
      if (!passwordValid || !nameValid) {
        alert("Please correct the errors before logging in.");
        return;
      }
      else {
        window.location.href = "https://studymedic.com/";
      }
    }
    
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: ["90%", "80%", "60%", "50%"],
        maxWidth: "805px",
        height: ["auto", "auto", "auto", "400px"],
        borderRadius: "32px",
        border: "1px solid #D8D8D8",
        backgroundColor: "#ffffff",
        boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        padding: "60px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          minHeight: "200px", // Set a minimum height to keep the container stable
        }}
      >
        {login ? (
          <LoginMethod
            setNameValid={setNameValid}
            setPasswordValid={setPasswordValid}
          />
        ) : (
          <LoginAnotherMethode />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginTop: "40px",
        }}
      >
        <Button
          onClick={loginFunc}
          sx={{
            backgroundColor: "#2c2b83",
            flex: 1,
            color: "#fff",
            height: "50px", // Set the height
            borderRadius: "600px", // Add rounded corners
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => setLogin(false)}
          sx={{
            backgroundColor: "rgba(239, 249, 255, 1)",
            flex: 1,
            color: "#e32d5d",
            height: "50px", // Set the height
            borderRadius: "600px",
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        >
          Login Another Method
        </Button>
      </Box>
    </Box>
  );
};

export default LoginBox;
