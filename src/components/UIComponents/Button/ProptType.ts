import React from "react";

interface PropTypes {
  children: React.ReactChild;
  className?: string;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
}

export default PropTypes;
