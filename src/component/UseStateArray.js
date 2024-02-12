import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    { id: 0, name: "jaya", age: 25 },
    { id: 1, name: "jaishree", age: 26 },

    { id: 2, name: "poonam", age: 28 },
  ];
  const [myArray, setMyArray] = useState(bioData);

  const handleDelete = () => {
    setMyArray([]);
  };
  return (
    <div className="h-full w-full bg-slate-500 flex justify-center items-center">
      <div>
        {myArray.map((curElem) => (
          <div className="rounded-full bg-black m-10" key={curElem}>
            <h1 className="text-2xl text-white p-5">
              Name: {curElem.name}& Age:{curElem.age}
            </h1>
          </div>
        ))}
      </div>
      <div className="">
        <button
          className="bg-white text-black p-5 text-2xl rounded-full"
          onClick={handleDelete}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default UseStateArray;
