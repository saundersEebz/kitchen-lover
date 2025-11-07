"use client";

import { MenuButton, Menu } from "@/components";
import { useAppSelector } from "@/store/hooks/reduxHooks";
import { AnimatePresence } from "framer-motion";

export default function MenuWrapper() {
  const menuIsOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <>
      <MenuButton pos={{ x: "83%", y: 20 }} />
      <AnimatePresence>{menuIsOpen && <Menu />}</AnimatePresence>
    </>
  );
}
