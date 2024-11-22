import React from "react";
import { CssBaseline, Box } from "@mui/material"; 
import Header from "./components/Header/Header.js";
import LoginBox from "./components/LoginBox/loginBox.js";
function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#EFF9FF",       
        // overflow: "hidden",
      }}
    >
      <CssBaseline /> 
      <Header />
      <LoginBox />
    </Box>
  );
}

export default App;
