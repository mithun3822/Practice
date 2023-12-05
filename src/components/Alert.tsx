import React, { ReactNode } from "react";
interface prop {
  children: ReactNode;
}
const Alert = ({ children }: prop) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
