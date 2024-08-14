import React from "react";

const Card = ({ data }) => {
  const { title, assigment, videos, progress } = data;
  return (
    <div className="w-[456px] h-[222px] p-5 bg-[#F7F7FF]   rounded-2xl relative">
      <h1 className="text-xl w-3/4">{title}</h1>
      <div className="flex gap-2">
        <p>{assigment} Assignment</p>
        <p>{videos} Videos</p>
      </div>
      <button className="btn rounded-full bg-gradient-to-r text-white from-[#4163E9] to-[#BDC9F5] w-[268px] absolute bottom-6">
        Continue Courses
      </button>

      <div
        className="radial-progress absolute right-4 text-[#061758] rotate-90"
        style={{
          "--value": progress,
          "--size": "6rem",
          "--thickness": "1rem",
        }}
        role="progressbar"
      >
        <div className="-rotate-90 font-medium">{progress}% </div>
      </div>
    </div>
  );
};

export default Card;
