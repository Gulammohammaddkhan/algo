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
import cPlus from "../assets/Images/C++.png";
import python from "../assets/Images/Python.png";
import jspic from "../assets/Images/jsPic.png";
import CustomButton from "./CustomButton";

function Languages() {
  return (
    <div className="pb-20">
      <div className="flex pt-10 my-10 mx-10 ">
        <div className="flex flex-col  w-[50%]">
          <h2 className="text-4xl font-semibold text-[#02213d] pb-7">
            We Speak 9 Languages.
          </h2>
          <p className="text-[#597080] text-lg pb-7">
            There's nothing more frustrating than opening an interview prep
            book, only to find a bunch of solutions in a programming language
            that you don't know. That's why all of our questions come with
            complete written solutions in 9 popular languages.
          </p>
          <div>
            <div>
              <div className="flex items-center gap-3 pb-5">
                <div className="text-5xl  text-[#02213d]">
                  <BsPcDisplay />
                </div>
                <p className="text-lg text-[#597080]">
                  <b>JavaScript</b>, for all you Front-End Developers
                </p>
              </div>
              <div className="flex  items-center gap-3 pb-5">
                <div className="text-5xl  text-[#02213d]">
                  <SiEgghead />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">TypeScript</b>, for all you
                  Edgy JavaScripters
                </p>
              </div>
              <div className="flex   items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <DiPython />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">Python</b>, for all you Data
                  Scientists
                </p>
              </div>
              <div className="flex  items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <CiMobile4 />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">Swift</b>, for all you iOS
                  Engineers
                </p>
              </div>
              <div className="flex   items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <AiOutlineAndroid />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">Kotlin</b>, for all you
                  Androiders
                </p>
              </div>
              <div className="flex  items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <VscRobot />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">C++</b>, for all you Old
                  Schoolers
                </p>
              </div>
              <div className="flex items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <GiBrain />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">Java</b>, for all you
                  Masochists
                </p>
              </div>
              <div className="flex items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <IoLogoWindows />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">C#</b>, for all you
                  Microsofters
                </p>
              </div>
              <div className="flex items-center gap-3 pb-4">
                <div className="text-6xl  text-[#02213d]">
                  <BsEmojiSunglasses />
                </div>
                <p className="text-lg text-[#597080]">
                  <b className=" text-[#02213d]">Go</b>, for all you Kool Kidz
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div class="relative w-64 h-64 perspective-[1000px]">
            <div class="cube absolute inset-0 m-auto w-full h-full">
              <div class="face front">
                <img src={python} class="w-full h-full object-cover" />
              </div>
              <div class="face back">
                <img src={rat} class="w-full h-full object-cover" />
              </div>
              <div class="face right">
                <img src={cPlus} class="w-full h-full object-cover" />
              </div>
              <div class="face left">
                <img src={jspic} class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#ffffff] py-5 pl-5 mx-10 rounded-md shadow-4xl text-[#597080] text-lg my-5">
        Hey there! Do you want to ace your upcoming coding interviews?
      </div>
      <div className=" flex gap-5 ml-10">
        <div className=" bg-white  text-center items-center text-lg  text-[#597080] rounded-lg">
          <CustomButton
            text={"Of course!"}
            cursor={"pointer"}
            padding={"10px 40px 10px 40px"}
          />
        </div>
        <div className=" bg-white  text-center items-center   text-lg  text-[#597080] rounded-lg">
          <CustomButton
            text={"Nope."}
            cursor={"pointer"}
            padding={"10px 40px 10px 40px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Languages;
