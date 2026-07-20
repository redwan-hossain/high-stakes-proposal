import { useState } from "react";

export default function MovingButton({
  onEscape,
  onReject,
  alwaysEscape = false,
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const randomMove = () => {
    const isMobile = window.innerWidth < 640;

    const maxX = isMobile ? 70 : 120;
    const maxY = isMobile ? 30 : 45;

    const x = (Math.random() - 0.5) * maxX;
    const y = (Math.random() - 0.5) * maxY;

    setPosition({ x, y });

    onEscape?.();
  };

  const handleClick = (e) => {
    if (alwaysEscape) {
      e.preventDefault();
      randomMove();
      return;
    }

    onReject?.();
  };

  return (
    <button
      onMouseEnter={randomMove}
      onMouseMove={randomMove}
      onClick={handleClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="btn btn-error absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 whitespace-nowrap"
    >
      💔 না
    </button>
  );
}