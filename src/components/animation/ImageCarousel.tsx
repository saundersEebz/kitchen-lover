// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import kitchenOne from "@/assets/images/kitchen_lover_1.jpg";
// import kitchenTwo from "@/assets/images/kitchen_lover_2.jpg";
// import kitchenThree from "@/assets/images/kitchen_lover_3.jpg";

// const images = [
//   {
//     src: kitchenOne.src,
//     alt: "kitchen lover image",
//   },
//   {
//     src: kitchenTwo.src,
//     alt: "kitchen lover image",
//   },
//   {
//     src: kitchenThree.src,
//     alt: "kitchen lover image",
//   },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const interval = 3000;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative h-150 w-screen">
//       {images.map((image, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: currentIndex === index ? 1 : 0,
//             zIndex: currentIndex === index ? 1 : 0,
//           }}
//           transition={{ duration: 1 }}
//           className="absolute top-0 left-0 w-full h-full">
//           <Image
//             src={image.src}
//             alt={image.alt}
//             width={100000}
//             height={100000}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// }
