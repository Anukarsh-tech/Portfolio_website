import { Education } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>

      <div>
        {Education.map((edu, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb:2  text-neutral-400">{edu.college}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 font-semibold">{edu.degree}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 font-semibold">
                {edu.grade}{" "}
                <a
                  href={edu.link}
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    color: "blueviolet",
                  }}
                >
                  <FaExternalLinkAlt />
                </a>
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              // className="w-full lg:w-1/4"
            >
              <p className="mb-2 font-semibold">{edu.year}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default education;
