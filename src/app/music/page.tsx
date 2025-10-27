"use client";

import {
  Menu,
  MenuButton,
  MusicPromo,
  MusicSingleListing,
  PromoImages,
} from "@/components";
import { useAppSelector } from "@/store/hooks/reduxHooks";
import { AnimatePresence } from "framer-motion";
import musicSingleArr from "@/utils/musicSingleArr";

export default function page() {
  const menuIsOpen = useAppSelector((state) => state.menu.isOpen);
  return (
    <>
      <MenuButton pos={{ x: "83%", y: 20 }} />

      <AnimatePresence>{menuIsOpen && <Menu />}</AnimatePresence>

      <div className="flex-1 flex flex-col gap-10 items-center">
        {/* DEBUT ALBUM blah blah */}
        <MusicPromo />

        <span
          className="w-[95%] border-2 border-kitchen-red"
          role="separator"
        />
        {/* each of da singlz release ordah*/}

        <div className="" role="single-container">
          {musicSingleArr.map((listing) => (
            <MusicSingleListing listing={listing} key={listing.title} />
          ))}
        </div>
        {/* something similar to main page but with link to vidya */}
      </div>
    </>
  );
}
