import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function LastChanceButton() {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const [pos, setPos] = useState({ x: 150, y: 60 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const move = (e) => {
      const wrapper = wrapperRef.current;
      const button = buttonRef.current;

      if (!wrapper || !button) return;

      const wrapRect = wrapper.getBoundingClientRect();
      const btnRect = button.getBoundingClientRect();

      // Button Center
      const btnX = btnRect.left + btnRect.width / 2;
      const btnY = btnRect.top + btnRect.height / 2;

      // Mouse
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const dx = mouseX - btnX;
      const dy = mouseY - btnY;

      const distance = Math.sqrt(dx * dx + dy * dy);


      if (distance < 170) {
        const angle = Math.atan2(dy, dx);

        let newX = pos.x - Math.cos(angle) * 140;
        let newY = pos.y - Math.sin(angle) * 140;

        const padding = 20;

        newX = Math.max(
          padding,
          Math.min(wrapRect.width - btnRect.width - padding, newX)
        );

        newY = Math.max(
          padding,
          Math.min(wrapRect.height - btnRect.height - padding, newY)
        );

        setPos({
          x: newX,
          y: newY,
        });
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [pos]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-[260px] md:w-[340px] h-[170px]"
    >
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);

          if (count >= 3) {
            Swal.fire({
              background: "#0f172a",
              color: "#fff",
              iconHtml: `
    <div style="font-size:80px;animation:heartbeat 1.5s infinite;">
      💔
    </div>
  `,
              title: "<span style='font-size:30px'>আহ...! 🥺</span>",
              text: "মনটা ভেঙে গেল...",
              confirmButtonText: "💙",
              confirmButtonColor: "#3b82f6",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            setCount(0);
            return;
          };

        }}
        style={{
          left: pos.x,
          top: pos.y,
          transition: "all .05s linear",
        }}
        className="btn btn-error absolute whitespace-nowrap select-none"
      >
        💔 না
      </button>
    </div>
  );
}