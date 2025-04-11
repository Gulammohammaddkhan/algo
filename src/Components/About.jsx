import React from "react";
import CustomButton from "./CustomButton";
import { aboutData } from "./Data";
import { Link } from "react-router-dom";
import Card from "./Card";

function About() {
  return (
    <div className="mb-20">
      <div className="mt-40 justify-items-center">
        <h2 className="font-normal text-4xl pb-6">What is AlgoExpert?</h2>
        <CustomButton
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              class="LpEACC7swKHg17Rad2wu"
              data-icon="play-circle"
              data-prefix="fas"
              viewBox="0 0 512 512"
              alt=""
              height={30}
              width={30}
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8m115.7 272-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42"></path>
            </svg>
          }
          text="Watch the Video"
          border="2px solid black"
          padding="5px"
          hover="#000"
          bgColor="#fff"
          textColor="#000"
        />
      </div>

      <div className="grid grid-cols-3 pt-12 gap-10 mx-10">
        {aboutData?.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default About;
