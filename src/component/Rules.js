import React, { useState } from "react";

const Rules = () => {
  const [changeName, setName] = useState("Digital Marketing");

  const handleChange = () => {
    // if (changeName === "Digital Marketing") {
    //   setName("Front-End");
    // } else {
    //   setName("Digital Marketing");
    // }

    changeName === "Digital Marketing"
      ? setName("Front-End")
      : setName("Digital Marketing");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-blue-500 p-10">
        <h1 className="text-white text-4xl">My name is: {changeName}</h1>
        <button onClick={handleChange} className="text-black bg-white text-2xl">
          click me
        </button>
      </div>
    </div>
  );
};

export default Rules;
