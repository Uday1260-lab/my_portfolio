import React, { useEffect, useState } from "react";
import BallCanvas from "./canvas/Ball"; // Import the merged file
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            // Render small image for mobile devices
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain bg-white rounded-lg violet-gradient p-[1px]"
            />
          ) : (
            // Render BallCanvas for non-mobile devices
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");