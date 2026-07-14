import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Coding", href: "#coding" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <nav className="
      fixed top-0 w-full z-50
      bg-black/70 backdrop-blur-md
      border-b border-gray-800
    ">

      <div className="
        max-w-6xl mx-auto
        px-6 py-4
        flex justify-between items-center
      ">


        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="text-2xl font-bold text-white"
        >
          Prakhil
        </button>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-400
                hover:text-white
                transition
              "
            >
              {link.name}
            </a>
          ))}


          <a
            href="https://github.com/prakhilkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/prakhil-kumar-6344b0250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaLinkedin />
          </a>

        </div>



        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>


      </div>


      {/* Mobile Menu */}

      {open && (

        <div className="
          md:hidden
          bg-black
          border-t border-gray-800
          px-6 py-5
          flex flex-col gap-5
        ">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-gray-300
                hover:text-white
              "
            >
              {link.name}
            </a>

          ))}


          <div className="flex gap-6 text-xl">

            <a
              href="https://github.com/prakhilkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/prakhil-kumar-6344b0250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>


        </div>

      )}

    </nav>
  );
};

export default Navbar;