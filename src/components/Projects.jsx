import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl "
      >
        Projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex felx-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded"
                src={projects.image}
                width={150}
                height={150}
                alt="projects.title"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {projects.title}{" "}
                <a
                  href={projects.link}
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    color: "blueviolet",
                  }}
                >
                  <FaExternalLinkAlt />
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 bg-neutral-950 text-sm font-medium text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
