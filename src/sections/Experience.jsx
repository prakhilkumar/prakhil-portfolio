import { motion } from "framer-motion";

function Experience() {
  const technologies = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "REST APIs",
    "JPA / Hibernate",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
    "IntelliJ IDEA",
    "Maven",
    "Docker",
    "AI Assisted Development",
    "GitHub Copilot",
    "Gemini AI",
  ];

  return (
    <section
      id="experience"
      className="px-6 md:px-20 py-20 bg-gray-950 text-white"
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>


      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          max-w-4xl
          mx-auto
          bg-gray-900
          border border-gray-800
          rounded-2xl
          p-8
        "
      >

        <div className="flex flex-col md:flex-row md:justify-between">

          <div>

            <h3 className="text-2xl font-semibold">
              SDE Intern
            </h3>

            <p className="text-blue-400 mt-2 text-lg">
              MoveInSync
            </p>

          </div>


          <p className="text-gray-400 mt-3 md:mt-0">
            2026
          </p>

        </div>


        <p className="text-gray-400 mt-6 leading-relaxed">
          Worked on backend development using Java and Spring Boot,
          developing REST APIs, integrating databases, and contributing
          to scalable application features. Used modern development
          practices and AI-assisted tools to improve productivity,
          debugging, and code quality.
        </p>


        <ul
          className="
            list-disc
            ml-5
            mt-6
            text-gray-300
            space-y-3
          "
        >

          <li>
            Developed and enhanced backend services using Java and Spring Boot.
          </li>

          <li>
            Designed and worked with RESTful APIs for application functionality.
          </li>

          <li>
            Used JPA/Hibernate for database interactions and entity management.
          </li>

          <li>
            Tested and debugged APIs using Postman and followed Git-based workflows.
          </li>

          <li>
            Leveraged AI-assisted development tools like GitHub Copilot and
            Gemini AI for code assistance, debugging, and improving development
            efficiency.
          </li>

        </ul>


        <div className="flex flex-wrap gap-3 mt-8">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-blue-600/20
                text-blue-400
                border border-blue-500/30
              "
            >
              {tech}
            </span>

          ))}

        </div>


      </motion.div>


    </section>
  );
}

export default Experience;