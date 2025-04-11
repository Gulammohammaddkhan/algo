import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

function Tick({ type }) {
  return (
    <>
      {type ? (
        <div className="px-29 py-1.5 bg-[#ebf7ee] mt-3 mb-3 ml-2 mr-4 rounded">
          <FcCheckmark className="w-[27px] h-[27px]" />
        </div>
      ) : (
        <div className="px-29 py-1.5 bg-[#ffe6e6] text-[#ff0000] mt-3 mb-3 ml-2 mr-4 rounded">
          <RxCross2 className="w-[27px] h-[27px]" />
        </div>
      )}
    </>
  );
}

export default Tick;
