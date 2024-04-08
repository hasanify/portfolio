import Cat from "@/components/Cat";
import { fondest, pantonBold } from "@/utils/fonts";

const Landing = () => {
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
      <Cat />
    </main>
  );
};

export default Landing;
