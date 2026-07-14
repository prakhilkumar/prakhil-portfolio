import { motion } from "framer-motion";
import { SiLeetcode, SiHackerrank, SiCodeforces } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    username: "Prakhil_kumar",
    link: "https://leetcode.com/u/Prakhil_kumar/",
    icon: SiLeetcode,
  },
  {
    name: "HackerRank",
    username: "5 Star Java",
    link: "https://www.hackerrank.com/profile/prakhilkumar2745",
    icon: SiHackerrank,
  },
  {
    name: "Codeforces",
    username: "prakhil_kumar",
    link: "https://codeforces.com/profile/prakhil_kumar",
    icon: SiCodeforces,
  },
];

function CodingProfiles() {
  return (
    <section
      id="coding"
      className="px-6 md:px-20 py-20 bg-gray-950 text-white"
    >

      <h2 className="text-4xl font-bold text-center mb-3">
        Coding Profiles
      </h2>


      <p className="text-center text-gray-400 mb-12">
        Problem solving profiles and competitive programming journey.
      </p>


      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {profiles.map((profile, index) => {

          const Icon = profile.icon;

          return (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"

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
                delay: index * 0.15,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                bg-gray-900
                border border-gray-800
                rounded-2xl
                p-8
                text-center
                hover:border-blue-500
                transition
              "
            >

              <Icon className="text-5xl mx-auto mb-5 text-blue-400" />


              <h3 className="text-2xl font-semibold">
                {profile.name}
              </h3>


              <p className="text-gray-400 mt-3">
                {profile.username}
              </p>


              <p className="mt-5 text-blue-400">
                View Profile →
              </p>


            </motion.a>
          );

        })}

      </div>

    </section>
  );
}

export default CodingProfiles;