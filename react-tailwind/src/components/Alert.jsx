import React from "react";

const Alert = () => {
  return (
    <div className="p-10 px-40">
      <button className="text-white bg-blue-600 text-s font-bold rounded-lg px-5 py-2">
        Button one
      </button>
      <div className="border border-red-600 rounded text-red-700 px-5 py-3 my-5 bg-red-100">
        <strong>Alert! </strong>
        <span>This is awesome!</span>
      </div>
    </div>
  );
};

export default Alert;
