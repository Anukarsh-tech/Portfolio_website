import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import logo from "../assets/logo-white.png";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 text-white">
      <nav className="flex flex-shrink-0 items-center">
        <img className="mx-5 h-10 w-10" src={logo} alt="logo" />
      </nav>

      <div className=" flex items-center justify-center gap-3 text-1xl">
        <a href="https://x.com/pratap_anukarsh.com">
          <FaTwitterSquare size={30} color="skyblue" style={{ margin: "10px" }} />
        </a>

        <a href="https://www.instagram.com/anukarsh_pratap/">
          <FaInstagram size={30} color="pink" style={{ margin: "10px" }} />
        </a>
        <a href="https://github.com/Anukarsh-tech">
          <FaGithub size={30} color="" style={{ margin: "10px" }} />
        </a>
        <a href="https://www.linkedin.com/in/anukarshpratap1619/">
          <FaLinkedin size={30} color="blue" style={{ margin: "10px" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
