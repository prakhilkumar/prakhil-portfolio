import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Auction Platform",
    description:
      "A full-stack auction platform where users can create auctions, place bids, and manage transactions with membership-based bidding priority.",
    features: [
      "JWT based authentication",
      "Real-time bidding system",
      "Premium membership priority",
      "Wallet and lien based transactions",
    ],
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/prakhilkumar/OnlineAuctionPlatform",
  },
  {
    title: "AI Email Reply Generator",
    description:
      "An AI-powered email assistant that generates smart replies using Spring Boot and Gemini API.",
    features: [
      "Gemini API integration",
      "Spring WebClient communication",
      "AI generated email responses",
      "Chrome extension support",
    ],
    tech: ["Java", "Spring Boot", "Gemini API", "WebClient"],
    github: "https://github.com/prakhilkumar/email-replier",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20"
    >

      <h2 className="text-4xl font-bold text-center mb-3 text-white">
        Featured Projects
      </h2>


      <p className="text-center text-gray-400 mb-12">
        Some projects I built using modern backend and full-stack technologies.
      </p>


      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            whileHover={{
              y: -8
            }}
            className="
              bg-gray-900
              text-white
              p-8
              rounded-2xl
              border border-gray-800
              transition
            "
          >

            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>


            <p className="text-gray-300 leading-relaxed mb-5">
              {project.description}
            </p>


            <ul className="list-disc ml-5 text-gray-300 space-y-2 mb-6">

              {project.features.map((feature, i) => (

                <li key={i}>
                  {feature}
                </li>

              ))}

            </ul>


            <div className="flex flex-wrap gap-3 mb-7">

              {project.tech.map((item) => (

                <span
                  key={item}
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
                  {item}
                </span>

              ))}

            </div>


            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-5
                py-2
                rounded-lg
                bg-white
                text-black
                font-semibold
                hover:bg-gray-200
                transition
              "
            >
              View Code →
            </a>


          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;