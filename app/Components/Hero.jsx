import React from "react"

const Hero = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col items-center p-6 mx-auto mt-2 md:mt-10 space-y-0 md:space-y-0 md:flex-row ">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-3xl font-bold text-center text-teal-100 md:text-left selection:bg-teal-100">
              Empowering Solutions with MERN Stack and Versatile App Development
            </h1>
            <p className="max-w-sm text-center text-primary md:text-left">
              As a passionate full stack developer, I specialize in the{" "}
              <span className="bg-[#FFDD93] text-darkGray font-black">
                MERN stack
              </span>
              , delivering robust web applications that fuse the power of
              MongoDB, Express, React, and Node.js. My skills extend beyond the
              web realm, as I also craft seamless{" "}
              <span className="bg-[#E5B8F4] text-darkGray font-black">
                Android and desktop applications
              </span>
              . With an unwavering commitment to innovation and user-centric
              design, I'm dedicated to creating cutting-edge solutions that
              empower businesses and individuals alike. Explore my portfolio to
              witness the art of transforming ideas into reality through the
              lens of a versatile developer.
            </p>
          </div>
        </div>
        {/* <div className="shape">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-teal-300"
            ></path>
          </svg>
        </div> */}
      </section>
    </>
  )
}

export default Hero
