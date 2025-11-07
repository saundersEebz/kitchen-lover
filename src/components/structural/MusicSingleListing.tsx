"use client";
import Image from "next/image";
import { FaAmazon, FaSpotify } from "react-icons/fa";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";

type Listing = {
  title: string;
  spotifyLink: string;
  appleLink: string;
  amazonLink: string;
  youtubeLink: string;
  imgUrl: string;
};

export default function musicSingleListing({ listing }: { listing: Listing }) {
  const { title, spotifyLink, appleLink, amazonLink, youtubeLink, imgUrl } =
    listing;

  return (
    <div className="">
      <div className="w-[360px] h-[360px] relative" role="single-listing-img">
        <Image 
          src={imgUrl} 
          fill
          className="object-cover"
          alt={`${title} cover art`} 
        />
      </div>
      <h3 className="text-3xl">{title}</h3>
      <div className="flex gap-2 mt-2">
        <a href={spotifyLink} className="cursor-pointer">
          <FaSpotify size={30} />
        </a>
        <a href={appleLink} className="cursor-pointer">
          <SiApplemusic size={30} />
        </a>
        <a href={amazonLink} className="cursor-pointer">
          <FaAmazon size={30} />
        </a>
        {youtubeLink && (
          <a href={youtubeLink} className="cursor-pointer">
            <SiYoutubemusic size={30} />
          </a>
        )}
      </div>
    </div>
  );
}
