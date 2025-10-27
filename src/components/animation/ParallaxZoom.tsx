"use client";

import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import pressPics from "@/utils/parallaxImageArr";

export default function ParallaxZoom() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scales = [4, 5, 6, 7, 8, 9, 5, 6, 8, 9, 5, 6, 8].map((value) =>
    useTransform(scrollYProgress, [0.1, 0.9], [value, 1])
  );

  const images = pressPics.map((pic, index) => {
    return { src: pic, scale: scales[index] };
  });

  const headerText = "KITCHEN LOVER".split(" ");

  const headerTransforms = headerText.map((_, index) =>
    useTransform(scrollYProgress, [0.2, 0.5], [0, index === 0 ? -390 : 420])
  );

  return (
    <div className="h-[300vh] w-full relative" ref={container}>
      {headerText.map((text, index) => {
        return (
          <motion.h1
            className="fixed z-20 left-1/2 translate-y-120 translate-x-[-50%] text-[70px] font-[airen] text-[#f5e85e]"
            style={{
              x: headerTransforms[index],
              top: 160 + index * 80,
            }}
            key={index}>
            {text}
          </motion.h1>
        );
      })}
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map(({ src, scale }, index) => {
          return (
            <motion.div
              style={{ scale: scale }}
              key={`para-zoom-${index}`}
              className="element">
              <div className="image-container">
                <Image src={src} alt="image" fill placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
