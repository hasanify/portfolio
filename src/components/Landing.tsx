import useCats from "@/hooks/useCats";

const Landing = () => {
  const { cat } = useCats();

  return (
    <main className="h-[100dvh] p-8 pantonbold sm:text-4xl lg:text-6xl text-2xl text-center w-screen gap-4 flex justify-center lg:justify-evenly lg:flex-row items-center flex-col">
      <div className="flex flex-col">
        <p>
          Writing <span className="">good</span> code
        </p>
        <p className="highlight sm:text-2xl lg:text-4xl text-base">
          only if the paycheck is{" "}
          <span className="underline decoration-foreground">equally good!</span>
        </p>
      </div>

      <img src={cat} alt="cat" className="size-32 lg:size-64 object-cover" />
    </main>
  );
};

export default Landing;
