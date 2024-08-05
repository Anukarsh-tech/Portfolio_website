import { motion } from "framer-motion";
import { Extracurricular } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const extracurricular = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Extracurricular{" "}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter lg:justify-center"
      >
        <p className="mb-4 wrsp">
          {Extracurricular.Daysprogram}
          <a
            href="https://drive.google.com/file/d/14hm9HtqOhlCZ-TQvgyK2RhEIhSa8BNg9/view?usp=drive_link"
            style={{
              display: "inline-block",
              marginLeft: "5px",
              color: "blueviolet",
            }}
          >
            <FaExternalLinkAlt />
          </a>
        </p>
        <p>
          {Extracurricular.Ready}{" "}
          <a
            href="https://drive.google.com/file/d/1wvCbGA4AaV1lLXjZDsPVzDLDH8n_sSNc/view?usp=drive_link"
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
    </div>
  );
};

export default extracurricular;
