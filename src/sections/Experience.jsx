import experience from "../data/experience";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-28">

      <SectionTitle
        title="Experience"
        subtitle="Professional journey"
      />

      {experience.map((job) => (

        <motion.div

          key={job.company}

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="bg-[#161B22] border border-gray-800 rounded-2xl p-8"

        >

          <h3 className="text-2xl font-bold">
            {job.role}
          </h3>

          <p className="text-blue-400 mt-2">
            {job.company}
          </p>

          <p className="text-gray-500 mb-6">
            {job.duration}
          </p>

          <ul className="space-y-3 list-disc list-inside text-gray-300">

            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}

          </ul>

        </motion.div>

      ))}

    </section>
  );
};

export default Experience;