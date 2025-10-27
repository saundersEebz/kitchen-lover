"use client";

import kitchenAlbum from "@/assets/images/kitchen_album.jpg";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function PromoImages() {
  return (
    <div className="w-95 h-105 px-5 relative z-20">
      <div className="h-60 w-60">
        <Image
          src={kitchenAlbum.src}
          alt="the force inside cover art"
          height={500}
          width={500}
          className="h-full w-full"
        />
      </div>

      <div className="absolute bottom-0 right-5 h-60 w-60 py-2 flex flex-col gap-4 items-center bg-white text-black ">
        <div className="text-center">
          <h3 className="text-2xl font-semibold uppercase">
            THE CIRCUS SIDESHOW DREAM
          </h3>
        </div>

        <a
          href="https://kitchenlover.bandcamp.com/album/the-circus-sideshow-dream"
          target="_blank"
          className="font-semibold text-white bg-black rounded-md px-2 py-1">
          BUY THE ALBUM HERE
        </a>

        <p className="text-center font-semibold">STREAM THE ALBUM HERE</p>

        <div className="flex gap-3">
          <a href="https://open.spotify.com" className="cursor-pointer">
            <FaSpotify size={30} />
          </a>
          <a href="https://open.spotify.com" className="cursor-pointer">
            <SiApplemusic size={30} />
          </a>
          <a href="https://open.spotify.com" className="cursor-pointer">
            <FaAmazon size={30} />
          </a>
          <a href="https://open.spotify.com" className="cursor-pointer">
            <SiYoutubemusic size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
