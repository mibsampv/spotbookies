"use client";

import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  outlineBlack?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  outlineBlack,
  small,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseBorderColor = outlineBlack
    ? isHovered
      ? "#b12433"
      : "white"
    : outline
    ? "#b12433"
    : "#b12433";
  const borderWidth = small ? "1px" : "2px";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative
        px-4
        cursor-pointer
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        transition
        w-full

        ${outlineBlack ? "bg-transparent text-white" : ""}
        ${outline ? "bg-white text-[#b12433]" : ""}
        ${!outline && !outlineBlack ? "bg-[#b12433] text-white" : ""}

        hover:bg-[#b12433]
        hover:text-white

        ${small ? "text-md py-2 font-semibold" : "text-md py-2 font-semibold"}
      `}
      style={{
        border: `${borderWidth} solid ${baseBorderColor}`,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
