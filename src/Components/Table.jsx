import React from "react";
import Tick from "./Tick";
import TickC from "./Tick copy";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { aboutData } from "./Data";
import { FaReact } from "react-icons/fa";

function Table() {
  return (
    <div className="mx-5">
      <div className="flex justify-center text-4xl pb-5">
        <h2>A Better Way to Prep for Coding Interviews.</h2>
      </div>
      <div>
        <div className=" flex gap-[57px] bg-white  font-bold text-xl  text-[#445d6e] mb-[2px]">
          <div className=" w-[230px] "></div>
          <div className="items-center self-center py-10 w-[280px]">
            Cracking the Coding Interview
          </div>
          <div className="text-center flex items-center justify-center py-10 w-[280px]">
            <span className="w-[100%] text-center ">Leetcode</span>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#626fe3] text-white w-[280px]">
            <div className="flex justify-center items-center text-center ">
              <FaReact className="w-[27px] h-[27px]" />
              AlgoExpert
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          100+ Practice Questions
        </div>

        <Tick type="true" />
        <Tick type="true" />
        {/* <Tick type="true" /> */}
        <TickC
          color="#ebf7ee"
          icon={<FcCheckmark className="w-[27px] h-[27px]" />}
        />
      </div>

      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Data Structures Content
        </div>
        <Tick type="true" />
        <Tick type="true" />
        <Tick type="true" />
        {/* <TickC
          icon={<RxCross2 className="w-[27px] h-[27px]" />}
          color="#000000"
        /> */}
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Guided Format
        </div>
        <Tick type="true" />
        <Tick type="" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Coding Workspace
        </div>
        <Tick type="" />
        <Tick type="true" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Multiple Programming Languages
        </div>
        <Tick type="" />
        <Tick type="true" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          High-Quality Solutions
        </div>
        <Tick type="true" />
        <Tick type="" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Video Explanations
        </div>
        <Tick type="" />
        <Tick type="" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          Mock Interviews
        </div>
        <Tick type="" />
        <Tick type="" />
        <Tick type="true" />
      </div>
      <div className="flex justify-between  mb-[2px] bg-white">
        <div className=" w-[220px] font-semibold text-l px-5 self-center">
          All-In-One Platform
        </div>
        <Tick type="" />
        <Tick type="" />
        <Tick type="true" />
      </div>
    </div>
  );
}

export default Table;

// https://media.istockphoto.com/id/1150603622/photo/transparent-x-ray-asterisk-sign-3d.jpg?s=1024x1024&w=is&k=20&c=XKIShH5pq_fWSPUNpjH8Gu4xHXd3AXRrwLzOQvRRGFU=
