import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="text-blue-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-extrabold">
          Prakhil Kumar
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Software Engineer
        </p>

        <p className="mt-2 text-gray-500">
          Java • Spring Boot • Microservices
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Button href="#projects">
            View Projects
          </Button>

          <Button
            href="/resume.pdf"
            primary={false}
          >
            Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-3xl">
          <a
            href="https://github.com/prakhilkumar"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prakhil-kumar-6344b0250/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;