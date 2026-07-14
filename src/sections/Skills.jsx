import skills from "../data/skills";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
  return (
    <section id="skills" className="py-28">

      <SectionTitle
        title="Skills"
        subtitle="Technologies I work with"
      />

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(skills).map(([category, items]) => (

          <div
            key={category}
            className="bg-[#161B22] border border-gray-800 rounded-2xl p-6"
          >

            <h3 className="text-xl font-bold mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">

              {items.map((item) => (

                <span
                  key={item}
                  className="bg-[#21262D] px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;