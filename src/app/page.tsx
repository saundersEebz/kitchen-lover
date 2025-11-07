"use client";

import {
  MusicPromo,
  Landing,
  UpcomingShows,
  ShopButton,
} from "@/components";

export default function Home() {
  return (
    <>
      <ShopButton />

      <div className="flex-1">
        <Landing />

        <UpcomingShows />

        <MusicPromo />
      </div>
    </>
  );
}
