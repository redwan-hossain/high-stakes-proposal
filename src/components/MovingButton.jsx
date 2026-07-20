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


    const maxX = isMobile ? 140 : 120;
    const maxY = isMobile ? 60 : 45;

    const x = (Math.random() - 0.5) * maxX;
    const y = (Math.random() - 0.5) * maxY;

    setPosition({ x, y });

    onEscape?.();
  };

  const escape = (e) => {
    e.preventDefault();
    e.stopPropagation();

    randomMove();

    if (navigator.vibrate) {
      navigator.vibrate(8);
    }
  };

  const handleClick = (e) => {
    if (alwaysEscape) {
      escape(e);
      return;
    }

    onReject?.();
  };

  return (
    <button
      onMouseEnter={escape}
      onMouseMove={escape}

      onPointerEnter={escape}
      onPointerMove={escape}

      onTouchStart={escape}
      onTouchMove={escape}

      onClick={handleClick}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="btn btn-error absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      rounded-full whitespace-nowrap
      transition-all duration-100
      select-none touch-none"
    >
      💔 না
    </button>
  );
}