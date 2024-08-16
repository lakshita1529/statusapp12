
import React from "react";

interface ButtonLinkProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`button-link ${className}`}>
      {text}
    </button>
  );
};

export default ButtonLink;
