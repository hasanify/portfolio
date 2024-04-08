"use client";

import useCats from "@/hooks/useCats";
import { fondest, pantonBold } from "@/utils/fonts";
import Image from "next/image";

const Landing = () => {
  const cat = useCats();

  return (
    <main
      className={`h-[100dvh] p-8 sm:text-4xl lg:text-6xl text-2xl text-center w-screen gap-4 flex justify-center lg:justify-evenly lg:flex-row items-center flex-col ${pantonBold}`}
    >
      <div className="flex flex-col">
        <p>Writing good code</p>
        <p className={`text-base highlight sm:text-2xl lg:text-4xl ${fondest}`}>
          only if the paycheck is{" "}
          <span className="underline decoration-foreground">equally good!</span>
        </p>
      </div>
      <div className="size-32 lg:size-64 overflow-hidden">
        {cat?.src ? (
          <Image
            width={cat.width}
            height={cat.height}
            src={cat.src}
            alt="cat"
            quality={"100"}
            className="object-cover size-full"
            priority
          />
        ) : (
          <div className="size-full bg-foreground/10 animate-pulse" />
        )}
      </div>
    </main>
  );
};

export default Landing;
