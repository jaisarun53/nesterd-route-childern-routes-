import React from "react";
import { Box, Typography } from "@mui/material";
const Headers = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", gap: "2rem" }}>
      <Typography>Home</Typography>
      <Typography>products</Typography>
      <Typography>Users</Typography>
    </Box>
  );
};

export default Headers;
