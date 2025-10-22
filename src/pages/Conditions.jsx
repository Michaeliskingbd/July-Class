import React, { useState } from "react";

const Conditions = () => {
  const [login, setLogin] = useState(false);

  const ex = () => {
    setLogin(true);
  };

  return (
    <div>
      <button
        onClick={ex}
        className="bg-orange-300 text-white py-2 px-8 rounded-lg hover:bg-orange-200"
      >
        Login
      </button>
      {login && <h1>WELCOME USER</h1>}
    </div>
  );
};

export default Conditions;
