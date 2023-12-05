import { useState } from "react";

export default function useHover() {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
}
