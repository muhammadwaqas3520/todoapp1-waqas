import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";


const Header = () => {
  return (
    <div className="w-full p-5 items-center bg-gray-800 flex justify-between">
      <div className="text-white text-xl  item-center p-2 font-bold font-serif">Todo App</div>
      <div className="text-white text-xl p-2">
        <Link
          href="https://github.com/muhammadwaqas3520"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl gap-2 flex items-center" 
        >
          <FaGithub />
          Github
        </Link>
      </div>
    </div>
  );
};

export default Header;
