import React from "react";

const LoadButton = ({ className = "", data, ...props }) => {
  return (
    <button className={`${className}`} {...props}>
      {data}
    </button>
  );
};

export default LoadButton;
