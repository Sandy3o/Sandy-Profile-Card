import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";
import profile from "../assets/profile.jpg";

const CardScreen = () => {
  return (
    <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto bg-[#ee8282] rounded-[5px] grid grid-cols-1 md:grid-cols-2 p-4">
      {/* Profile Image */}
      <div className="col-span-1 flex justify-center items-center">
        <img
          className="w-[60%] sm:w-[70%] md:w-[90% ] h-auto object-cover rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]"
          src={profile}
          alt="Profile"
        />
      </div>
      {/* Profile Details */}
      <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 p-4">
        <h1 className="text-[22px] sm:text-[20px] md:text-[26px] font-bold text-center md:text-left">
          Sankaranarayanan
        </h1>
        <div className="col-span-1 flex flex-col justify-center item-center md:items-start gap-2 p-2">
          <h5 className="text-[20px] sm:text-[18px] md:text-[20px] font-bold text-center md:text-left">
            SRM University
          </h5>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineWorkHistory size={26} />
          <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px]">
            MSc Information Technology
          </p>
        </div>
        <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-center md:text-left">
          💻 Full Stack Developer in Python | 🎮 Gamer
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-3">
          <a href="https://www.instagram.com/_sanx_xy/">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/Sandy3o/">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sankaranarayanan-s-901330252/">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <SiGmail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardScreen;
