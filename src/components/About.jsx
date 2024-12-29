import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Computer Science undergraduate with a strong foundation in creating visually appealing and user-centric web interfaces. 
          My skills in front-end design include responsive layouts, seamless navigation, and interactive elements that enhance user engagement. 
          Leveraging technologies like React.js, Bootstrap, Tailwind CSS, and advanced CSS styling.
        </p>

        <br />

        <p className="text-xl mt-16">
          Passionate about blending creativity with cutting-edge technology, I actively explore innovations in AI and machine learning to solve real-world challenges. 
          I thrive on hands-on opportunities to push the boundaries of my technical expertise, focusing on creating dynamic applications that are both functional and aesthetically outstanding.
        </p>
      </div>
    </div>
  );
};

export default About;
