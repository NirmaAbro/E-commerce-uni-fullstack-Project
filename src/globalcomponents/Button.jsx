import React from "react";

function Button({ data }) {
  const handleclick = () => {
    console.log("button clicked");
  };

  return (
    <div>
      <button onClick={handleclick} className="bg-yellow-600 p-2 rounded-lg mt-1 text-white">{data}</button>
    </div>
  );
}

export default Button;
