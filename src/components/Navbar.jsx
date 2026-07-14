import { Link } from "react-scroll";

const links = [
  "experience",
  "projects",
  "skills",
  "achievements",
  "contact",
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D1117]/90 backdrop-blur-md border-b border-gray-800">
      <div className="container h-20 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-white">
          Prakhil
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 capitalize">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;