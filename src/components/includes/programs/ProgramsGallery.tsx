"use client";

import { images } from "@/data/programImages";
import Image from "next/image";


interface ProgramsGalleryProps {
  activeTab: string;
}

const ProgramsGallery = ({ activeTab }: ProgramsGalleryProps) => {
  const filteredImages = 
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full">
      {filteredImages.map((img, index) => {
        const columnClass = index < 3 
          ? "col-span-2" 
          : (index === 3 || index === 4) 
            ? "col-span-3" 
            : "col-span-2";
            
        return (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg cursor-pointer ${columnClass} w-full h-50 md:h-100`}
          >
            <Image
              src={img.src}
              alt={`Event ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        );
      })}
    </div>
  );
};


export default ProgramsGallery;