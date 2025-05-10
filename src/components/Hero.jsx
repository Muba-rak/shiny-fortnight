import React from "react";

// onclick, onsumb
// mobile first

const Hero = () => {
  const handleClick = () => {
    alert("Welcome user");
  };
  return (
    <div>
      <h1 className="text-lg md:text-2xl lg:text-4xl">EVENT HANDLING</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Hero;
