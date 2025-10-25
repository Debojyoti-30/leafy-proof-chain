import { useEffect, useState } from "react";

export function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isPointer ? "scale(1.5)" : "scale(1)"}`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-accent/30 pointer-events-none z-[9998] transition-all duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isPointer ? "scale(1.8)" : "scale(1)"}`,
        }}
      />
    </>
  );
}
