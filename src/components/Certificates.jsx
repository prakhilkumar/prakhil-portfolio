import { motion } from "framer-motion";

const certificates = [
  {
    title: "Software Development Internship Certificate",
    issuer: "MoveInSync",
    year: "2026",
    link: "https://drive.google.com/file/d/1xsUXCdOi9oMnZAFr3XAF8cTA_UjdltBb/view?usp=drive_link",
  },
  {
    title: "Leadership and Team Effectiveness",
    issuer: "IIT Roorkee (NPTEL)",
    year: "2025",
    link: "https://drive.google.com/file/d/1e_ddCLQAAOtoeuWkF28sN3BQnzL3tROW/view?usp=sharing",
  },
  {
    title: "Organizational Behaviour",
    issuer: "IIT Guwahati (NPTEL)",
    year: "2025",
    link: "https://drive.google.com/file/d/1rKGw835vs3leO9dwYoz5IVBSxx2hrNF8/view?usp=drive_link",
  },
  {
    title: "Software Engineering",
    issuer: "IIT Kharagpur (NPTEL)",
    year: "2023",
    link: "https://drive.google.com/file/d/1gMx-87HrKgQ8hyy0duRVHtTwMxxDEvfc/view?usp=drive_link",
  },
  {
    title: "Ethics in Engineering Practices",
    issuer: "IIT Kharagpur (NPTEL)",
    year: "2023",
    link: "https://drive.google.com/file/d/1ZFlyCwCZodmknsUsMxtIrTE38qBh9uGQ/view?usp=drive_link",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="px-6 md:px-20 py-20 bg-gray-950 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-3">
        Certificates
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Certifications and achievements that showcase my learning journey.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-gray-900
              p-6
              rounded-2xl
              border border-gray-800
            "
          >
            <h3 className="text-xl font-semibold">
              {certificate.title}
            </h3>

            <p className="text-blue-400 mt-3">
              {certificate.issuer}
            </p>

            <p className="text-gray-500 mt-1">
              {certificate.year}
            </p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-5
                px-5
                py-2
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              View Certificate →
            </a>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Certificates;