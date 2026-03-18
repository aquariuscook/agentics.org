import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "w-10 h-10", color = "#FF6321" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 50" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Triple line infinity symbol - Refined for exact match */}
        {/* Outer path */}
        <path d="M50 25 C68 4 96 4 96 25 C96 46 68 46 50 25 C32 4 4 4 4 25 C4 46 32 46 50 25" />
        {/* Middle path */}
        <path d="M50 25 C66 10 87 10 87 25 C87 40 66 40 50 25 C34 10 13 10 13 25 C13 40 34 40 50 25" />
        {/* Inner path */}
        <path d="M50 25 C63 16 79 16 79 25 C79 34 63 34 50 25 C37 16 21 16 21 25 C21 34 37 34 50 25" />
      </g>
    </svg>
  );
}
