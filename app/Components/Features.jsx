import React from "react"

const Features = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-center text-teal-100 selection:bg-teal-100 md:text-left">
              What's different about me?
            </h2>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <ListItem
              number={"01"}
              title={"Full Stack Expertise"}
              body={`As a Full Stack Developer, I possess a deep understanding of both
                    front-end and back-end technologies. My ability to seamlessly bridge the
                    gap between these two areas allows me to create cohesive and fully
                    functional web applications that exceed expectations.`}
            />
            <ListItem
              number={"02"}
              title={"Passion for Innovation"}
              body={`What sets me apart is my unyielding passion for innovation. 
                    I am constantly exploring cutting-edge technologies and industry trends
                    to integrate the latest advancements into my projects. This drive for staying
                    ahead of the curve ensures that your digital solutions will be at the forefront of technology.`}
            />
            <ListItem
              number={"03"}
              title={"User-Centric Approach"}
              body={`My development philosophy revolves around putting the user at the center of everything. 
                    I meticulously design and develop applications that prioritize user experience, ensuring intuitive navigation,
                    and a visually engaging interface that keeps users coming back for more.`}
            />
          </div>
        </div>
      </section>
    </>
  )
}

const ListItem = ({ number, title, body }) => (
  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
    <div className="rounded-l-full bg-teal-100 md:bg-transparent">
      <div className="flex items-center space-x-2">
        <div className="px-4 py-2 text-primary rounded-full bg-accent md:py-1">
          {number}
        </div>
        <h3 className="text-base font-bold text-darkGray md:mb-4 md:hidden">
          {title}
        </h3>
      </div>
    </div>
    <div>
      <h3 className="hidden mb-4 text-lg font-bold md:block">{title}</h3>

      <p className="text-primary text-md">{body}</p>
    </div>
  </div>
)

export default Features
