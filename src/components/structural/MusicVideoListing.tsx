"use client";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

type VideoListing = {
  title: string;
  youtubeLink: string;
  thumbnailUrl: string;
};

export default function MusicVideoListing({ listing }: { listing: VideoListing }) {
  const { title, youtubeLink, thumbnailUrl } = listing;

  return (
    <div className="">
      <a 
        href={youtubeLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="w-[360px] h-[202px] relative bg-gray-800 flex items-center justify-center" role="video-listing-thumbnail">
          {thumbnailUrl ? (
            <Image 
              src={thumbnailUrl} 
              fill
              className="object-cover"
              alt={`${title} video thumbnail`} 
            />
          ) : (
            <FaYoutube size={80} className="text-gray-600" />
          )}
        </div>
      </a>
      <h3 className="text-3xl mt-2">{title}</h3>
      <a 
        href={youtubeLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer inline-flex items-center gap-2 mt-2 hover:text-kitchen-red transition-colors"
      >
        <FaYoutube size={30} />
        <span>Watch on YouTube</span>
      </a>
    </div>
  );
}
