import React from "react";
import CustomButton from "./CustomButton";
import { questionData } from "./Data";
import QuestionsCard from "./QuestionsCard";

function Questions() {
  return (
    <div className="bg-[#02213d] text-white pt-20 pb-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl ">200 Questions Spanning 15 Categories.</h2>
        <div className="flex justify-center items-center">
          <p className="text-center w-[750px] pb-4 ">
            If you want to ace the coding interviews, being well-versed in all
            common data structures and popular problem-solving methods is
            paramount. With 200 questions spanning 15 categories and 4
            difficulty levels, we've got you covered.
          </p>{" "}
        </div>
        <CustomButton
          text={"Explore Questions"}
          bgColor={"#626fe3"}
          padding={"10px 30px"}
          fontWeight={"bold"}
          cursor={"pointer"}
          margin={"0 0 40px 0"}
        ></CustomButton>
      </div>
      <div className="grid grid-cols-3 gap-5 ml-20  ">
        {questionData.map((object) => {
          return <QuestionsCard data={object} />;
        })}
      </div>
    </div>
  );
}

export default Questions;
