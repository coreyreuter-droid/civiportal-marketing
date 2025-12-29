"use client";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400",
    outline:
      "border-2 border-accent-600 text-accent-600 hover:bg-accent-50 focus:ring-accent-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.();
    };

    return (
      <Link
        href={href}
        className={classes}
        onClick={handleLinkClick}
        aria-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
