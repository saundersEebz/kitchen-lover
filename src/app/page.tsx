"use client";

import {
  MusicPromo,
  Landing,
  Menu,
  MenuButton,
  UpcomingShows,
  ShopButton,
} from "@/components";
import { useAppSelector } from "@/store/hooks/reduxHooks";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const menuIsOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <>
      <ShopButton />
      <MenuButton pos={{ x: "83%", y: 20 }} />

      <AnimatePresence>{menuIsOpen && <Menu />}</AnimatePresence>

      <div className="flex-1">
        <Landing />

        <UpcomingShows />

        <MusicPromo />
      </div>
    </>
  );
}
