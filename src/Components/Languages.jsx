import React from "react";
import { BsPcDisplay } from "react-icons/bs";
import { SiEgghead } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { CiMobile4 } from "react-icons/ci";
import { AiOutlineAndroid } from "react-icons/ai";
import { VscRobot } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";
import { IoLogoWindows } from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import rat from "../assets/Images/Rat.png";
import python from "../assets/Images/Python.png";
import jspic from "../assets/Images/jsPic.png";
import CustomButton from "./CustomButton";
import cPlus from "../assets/Images/Cplus.png";

function Languages() {
  return (
    <div className="pb-20">
      <div className="flex flex-col lg:flex-row pt-10 my-10 mx-10">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[50%]">
          <h2 className="text-4xl sm:text-3xl font-semibold text-[#02213d] pb-7">
            We Speak 9 Languages.
          </h2>
          <p className="text-[#597080] text-lg pb-7">
            There's nothing more frustrating than opening an interview prep
            book, only to find a bunch of solutions in a programming language
            that you don't know. That's why all of our questions come with
            complete written solutions in 9 popular languages.
          </p>

          {/* Languages List */}
          <div>
            {[
              {
                icon: <BsPcDisplay />,
                language: "JavaScript",
                description: "for all you Front-End Developers",
              },
              {
                icon: <SiEgghead />,
                language: "TypeScript",
                description: "for all you Edgy JavaScripters",
              },
              {
                icon: <DiPython />,
                language: "Python",
                description: "for all you Data Scientists",
              },
              {
                icon: <CiMobile4 />,
                language: "Swift",
                description: "for all you iOS Engineers",
              },
              {
                icon: <AiOutlineAndroid />,
                language: "Kotlin",
                description: "for all you Androiders",
              },
              {
                icon: <VscRobot />,
                language: "C++",
                description: "for all you Old Schoolers",
              },
              {
                icon: <GiBrain />,
                language: "Java",
                description: "for all you Masochists",
              },
              {
                icon: <IoLogoWindows />,
                language: "C#",
                description: "for all you Microsofters",
              },
              {
                icon: <BsEmojiSunglasses />,
                language: "Go",
                description: "for all you Kool Kidz",
              },
            ].map((lang, index) => (
              <div key={index} className="flex items-center gap-3 pb-4">
                <div className="text-5xl text-[#02213d]">{lang.icon}</div>
                <p className="text-lg text-[#597080]">
                  <b className="text-[#02213d]">{lang.language}</b>,{" "}
                  {lang.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cube Section */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-[50%]">
          <div className="relative w-64 h-64 perspective-[1000px]">
            <div className="cube absolute inset-0 m-auto w-full h-full">
              <div className="face front">
                <img
                  src={python}
                  className="w-full h-full object-cover"
                  alt="Python"
                />
              </div>
              <div className="face back">
                <img
                  src={rat}
                  className="w-full h-full object-cover"
                  alt="Rat"
                />
              </div>
              <div className="face right">
                <img
                  src={cPlus}
                  className="w-full h-full object-cover"
                  alt="C++"
                />
              </div>
              <div className="face left">
                <img
                  src={jspic}
                  className="w-full h-full object-cover"
                  alt="JavaScript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="bg-[#ffffff] py-5 pl-5 mx-10 rounded-md shadow-4xl text-[#597080] text-lg my-5">
        Hey there! Do you want to ace your upcoming coding interviews?
      </div>

      {/* Button Section */}
      <div className="flex gap-5 ml-10 flex-wrap justify-center">
        <div className="bg-white text-center items-center text-lg text-[#597080] rounded-lg">
          <CustomButton
            text={"Of course!"}
            cursor={"pointer"}
            padding={"10px 40px"}
          />
        </div>
        <div className="bg-white text-center items-center text-lg text-[#597080] rounded-lg">
          <CustomButton
            text={"Nope."}
            cursor={"pointer"}
            padding={"10px 40px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Languages;
