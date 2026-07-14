import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl"
      >
        <p className="text-blue-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Prakhil Kumar
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Software Engineer
        </p>

        <p className="mt-3 text-lg text-gray-400">
          Java • Spring Boot • Microservices • AI Integration
        </p>

        <p className="mt-6 text-gray-500 leading-relaxed">
          B.Tech graduate passionate about building scalable backend
          systems, REST APIs, and AI-powered applications using Java,
          Spring Boot, and modern technologies.
        </p>


        <div className="flex flex-wrap justify-center gap-4 mt-10">

  <Button href="#projects">
    View Projects
  </Button>


  <Button
    href="/Prakhil_Kumar_Resume.pdf"
    primary={false}
    download={true}
  >
    Download Resume
  </Button>

</div>


        <div className="flex justify-center gap-6 mt-10 text-3xl text-gray-400">

          <a
            href="https://github.com/prakhilkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/prakhil-kumar-6344b0250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;