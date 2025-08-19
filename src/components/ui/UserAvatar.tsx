import React from "react";

interface UserAvatarProps {
  initial: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  initial,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-lg",
    md: "w-10 h-10 text-[23px]",
    lg: "w-12 h-12 text-2xl",
  };

  return (
    <div
      className={`flex justify-center items-center relative box-border bg-white px-0 py-[5px] rounded-[200px] ${sizeClasses[size]} ${className}`}
    >
      <div className="text-black text-center font-medium leading-[29.9px] absolute h-[30px] box-border">
        {initial}
      </div>
    </div>
  );
};
