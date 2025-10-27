"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch } from "@/store/hooks/reduxHooks";
import { setButtonRect, toggleMenu } from "@/store/reducers/menuReducer";
import { useEffect, useRef } from "react";

interface Props {
  pos: { x: number | string; y: number | string };
}

export default function MenuButton({ pos }: Props) {
  const dispatch = useAppDispatch();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Function to update the rect
    const updateRect = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current?.getBoundingClientRect().toJSON();
        dispatch(setButtonRect(buttonRect));
      }
    };

    // Initial update
    updateRect();

    // Update on resize
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  });

  return (
    <button
      ref={buttonRef}
      className="fixed h-12 w-12 p-2 cursor-pointer z-50 text-white rounded-full"
      style={{
        top: pos.y,
        left: pos.x,
      }}
      onClick={() => dispatch(toggleMenu())}>
      <GiHamburgerMenu className="h-full w-full drop-shadow-[0_0_1px_black]" />
    </button>
  );
}
