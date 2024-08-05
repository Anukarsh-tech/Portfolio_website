import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5, FaPython } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { x: -100, opacity: 0 },
  animate: {
    x: [10, -10],
    transition: {
      duration: duration,
      erase: "linear",
      repeat: Infinity,
      repeatype: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-400" />
        </div>

        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoGoogleCloud className="text-7xl text-red-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

/*
variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
 */
