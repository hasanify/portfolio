"use client";

import useCats from "@/hooks/useCats";
import Image from "next/image";

const Cat = () => {
  const cat = useCats();
  return (
    <div className="overflow-hidden size-32 lg:size-64">
      {cat?.src ? (
        <Image
          width={cat.width}
          height={cat.height}
          src={cat.src}
          alt="cat"
          quality={"100"}
          className="object-cover size-full"
          priority
          unoptimized
        />
      ) : (
        <div className="size-full bg-foreground/10 animate-pulse" />
      )}
    </div>
  );
};

export default Cat;
