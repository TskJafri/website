"use client";

import { useState, useEffect } from "react";
import styles from "./CursorGradient.module.css";

export default function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener
    window.addEventListener("mousemove", updatePosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []); // Empty dependency array so this runs once on mount

  return (
    <div
      className={styles.gradient}
      style={{
        // We use transform to move the div.
        // This is more performant than changing 'left' and 'top'.
        // We subtract 50% of the width/height to center the gradient on the cursor.
        transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
      }}
    />
  );
}