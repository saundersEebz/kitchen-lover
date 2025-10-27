"use client";
import Image from "next/image";

type Listing = {
  title: string;
  link: string;
  image: string;
};

export default function musicSingleListing({ listing }: { listing: Listing }) {
  const { title, link, image } = listing;

  return (
    <div className="">
      <div className="w-90 h-90" role="single-listing-img">
        <Image src={image} height={360} width={360} alt="" />
      </div>
      <h3 className="text-3xl">{title}</h3>
      <a
        href={link}
        className="px-2 py-1 bg-white rounded-full text-kitchen-red">
        LISTEN NOW
      </a>
    </div>
  );
}
