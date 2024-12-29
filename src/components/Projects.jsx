import React from "react";
import responsiveWebpage from "../assets/portfolio/responsive.jpg";
import stopWatch from "../assets/portfolio/watch.jpg";
import taskMaster from "../assets/portfolio/tasks.jpg";
import reactWeather from "../assets/portfolio/weather.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: responsiveWebpage,
      sourceLink: "https://github.com/srinidhi-2005/responsive-webpage",
    },
    {
      id: 2,
      src: stopWatch,
      sourceLink: "https://github.com/srinidhi-2005/stop-watch",
    },
    {
      id: 3,
      src: taskMaster,
      sourceLink: "https://github.com/srinidhi-2005/task-master",
    },
    {
      id: 4,
      src: reactWeather,
      sourceLink: "https://github.com/srinidhi-2005/weather-widget",
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6">Check out some of my work right here :</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, sourceLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-500 text-white rounded-md"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
