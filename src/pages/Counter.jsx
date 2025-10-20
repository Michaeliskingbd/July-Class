import { useState } from "react";

const Counter = () => {
  let nameOfStore = "Olamide's store";

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center">{nameOfStore}</h1>
      <div className="space-x-4 text-center mt-24 ">
        <button
          onClick={decrease}
          className="w-24 bg-red-300 h-10 text-white text-3xl rounded-lg"
        >
          -
        </button>
        <span className="font-bold text-4xl">{count}</span>
        <button
          onClick={increase}
          className="w-24 bg-green-300 h-10 text-white text-3xl rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

//Usestate is a React Hook
// that lets you add state to a functional components
