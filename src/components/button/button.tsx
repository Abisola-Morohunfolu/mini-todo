import React from "react";
import { lightEffectClass } from "../../utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color: "primary" | "danger";
  variant: "rounded" | "square";
  additonalClass?: string;
}

const Button = ({
  label,
  color,
  variant,
  additonalClass,
  ...props
}: ButtonProps) => {
  const colorClass =
    color === "primary"
      ? "bg-btn-blue border-btn-blue"
      : "bg-btn-red border-btn-red";

  const radiusClass =
    variant === "rounded"
      ? "rounded-full after:rounded-full before:rounded-full"
      : "rounded-lg after:rounded-lg before:rounded-lg";
  return (
    <button
      {...props}
      className={`relative ${colorClass} text-white px-6 py-3 ${radiusClass} shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 ${lightEffectClass} ${
        additonalClass || ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
