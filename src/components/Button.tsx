import React from "react";
interface prop {
  children: string;
  color?: "primary" | "warning" | "danger" | "success" | "info";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: prop) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
