import { motion } from "framer-motion";
import { Achievements } from "../constants";

const achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-pink-900 via-slate-500 to-purple-900 bg-clip-text tracking-tight text-transparent"
      >
        Achievements
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" text-center tracking-tighter lg:justify-center"
      >
        <p className="text-1xl"> {Achievements.jee} </p>
        <p className="text-1xl">{Achievements.gate}</p>
        <p className="text-1xl">{Achievements.science}</p>
      </motion.div>
    </div>
  );
};

export default achievements;
