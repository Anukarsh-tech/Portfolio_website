import { CODING } from "../constants";
import { motion } from "framer-motion";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa6";
import { SiHackerrank } from "react-icons/si";

const coding = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 text-xl">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Coding
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p>
          {CODING.leetcode}{" "}
          <a
            href="https://leetcode.com/u/Anukarsh_Pratap"
            style={{
              display: "inline-block",
              marginLeft: "5px",
              color: "yellow",
            }}
          >
            <TbBrandLeetcode />
          </a>
        </p>
        <p>
          {CODING.gfg}{" "}
          <a
            href="https://www.geeksforgeeks.org/user/anukarshpratap2000"
            style={{
              display: "inline-block",
              marginLeft: "5px",
              color: "green",
            }}
          >
            <SiGeeksforgeeks />
          </a>
        </p>
        <p>
          {CODING.codeforces}{" "}
          <a
            href="https://codeforces.com/profile/Anukarsh_pratap"
            style={{
              display: "inline-block",
              marginLeft: "5px",
              color: "red",
            }}
          >
            <SiCodeforces />
          </a>
        </p>
        <p>
          {CODING.codingninja}{" "}
          <a
            href="https://www.naukri.com/code360/profile/Anukarshpratap"
            style={{
              display: "inline-block",
              marginLeft: "5px",

              color: "orange",
            }}
          >
            <SiCodingninjas />
          </a>
        </p>
        <p>
          {CODING.hackerrank}{" "}
          <a
            href="https://www.hackerrank.com/profile/anukarshpratap21"
            style={{
              display: "inline-block",
              marginLeft: "5px",

              color: "green",
            }}
          >
            <SiHackerrank />
          </a>
        </p>

        <p>
          {CODING.overall}{" "}
          <a
            href="https://codolio.com/profile/anukarshpratap"
            style={{
              display: "inline-block",
              marginLeft: "5px",

              color: "#FF8C00",
            }}
          >
            <FaEarlybirds />
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default coding;
