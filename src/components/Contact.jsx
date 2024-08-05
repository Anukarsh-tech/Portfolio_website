import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FcAddressBook } from "react-icons/fc";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch{" "}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p>
          {CONTACT.address}{" "}
        </p>
        <p>{CONTACT.address2}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>  <a
            style={{
              display: "inline-block",
              marginLeft: "5px",
              color: "red",
            }}
          >
            <FcAddressBook />
          </a> {CONTACT.email}</p>
      </motion.div>
    </div>
  );
};

export default Contact;
