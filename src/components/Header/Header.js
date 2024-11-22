import React from 'react';
import { Box } from '@mui/material'; 
import logo from "../../assets/StudyMEDIC_logo.png"; 

const Header = () => {
  return (
    <Box
      sx={{
        padding: "10px 0 40px 20px", 
        display: "flex", 
        justifyContent: "",
      }}
    >
      <img
        src={logo}
        alt="StudyMEDIC Logo"
        style={{
          maxWidth: "150px", 
          width: "100%",
          height: "auto",
        }}
        sx={{
          maxWidth: { xs: "100px", sm: "150px" }, //mob
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default Header;
