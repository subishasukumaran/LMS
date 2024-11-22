import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import "@fontsource/dm-sans"; 

const validateName = (name) => /^[a-zA-Z\s]+$/.test(name); // Only letters and spaces allowed
const validatePassword = (password) => {
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[@$!%*?&#]/.test(password),
  };

  return {
    valid: Object.values(rules).every(Boolean),
    rules,
  };
};

const LoginMethod = ({ setNameValid, setPasswordValid }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (!validateName(newName)) {
      setNameValid(false);
      setNameError("Name should only contain letters and spaces.");
    } else {
      setNameValid(true);
      setNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const { valid, rules } = validatePassword(newPassword);
    if (!valid) {
      setPasswordValid(false);
      setPasswordError(
        "Password must include: " +
        (!rules.length ? "at least 8 characters, " : "") +
        (!rules.uppercase ? "an uppercase letter, " : "") +
        (!rules.number ? "a number, " : "") +
        (!rules.specialChar ? "a special character." : "")
      );
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }
  };

  return (
    <Box>
      <Typography variant="h5"
        sx={{
          marginBottom: "10px",
          color: "rgba(235, 86, 143, 1)",  
          fontFamily: "'DM Serif Display', serif", 
          fontSize: "32px", 
          lineHeight: "26.24px", 
          fontWeight: 600,  
        }}>
        Let’s get started
      </Typography>
      <Typography variant="body2"
        sx={{
          marginBottom: "20px",
          color: "rgba(60, 59, 96, 0.67)", 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: "18px", 
          fontWeight: 400,  
          lineHeight: "31px", 
        }}>
        Enter your Username & Password
      </Typography>

      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        error={!!nameError}
        helperText={nameError}
        sx={{
          marginBottom: "20px",
          "& .MuiInputBase-input": {
            fontSize: "18px", // Set the input font size
            fontFamily: "'DM Sans', sans-serif", // Set the input font family
            fontWeight: 500, // Set the input font weight
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "600px", // Apply border radius to the root
          },
        }}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
        sx={{
          marginBottom: "20px",
          "& .MuiInputBase-input": {
            fontSize: "18px", // Set the input font size
            fontFamily: "'DM Sans', sans-serif", // Set the input font family
            fontWeight: 500, // Set the input font weight
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "600px", // Apply border radius to the root
          },
        }}
        fullWidth
      />
    </Box>
  );
};

export default LoginMethod;
