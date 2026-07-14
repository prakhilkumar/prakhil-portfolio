import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-20 bg-black text-white"
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="max-w-3xl mx-auto text-center"
      >

        <h2 className="text-4xl font-bold mb-4">
          Let's Connect
        </h2>


        <p className="text-gray-400 mb-10 leading-relaxed">
          I'm open to software engineering opportunities and
          collaborations. Feel free to reach out for any
          professional discussion.
        </p>


        <div className="grid md:grid-cols-2 gap-6">


          <a
            href="mailto:prakhilkumar2745@gmail.com"
            className="
              bg-gray-900
              border border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              transition
            "
          >

            <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-4" />

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="text-gray-400 mt-2">
              prakhilkumar2745@gmail.com
            </p>

          </a>



          <a
            href="https://www.linkedin.com/in/prakhil-kumar-6344b0250/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gray-900
              border border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              transition
            "
          >

            <FaLinkedin className="text-4xl text-blue-400 mx-auto mb-4" />

            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 mt-2">
              Connect with me
            </p>

          </a>


        </div>


      </motion.div>

    </section>
  );
}

export default Contact;