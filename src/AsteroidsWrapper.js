import React, { useEffect } from "react";
import postscribe from "postscribe";

function AsteroidsWrapper() {
  // returning an empty div with no children should prevent react from ever updating this
  // element, which leaves it open to be manipulated by our imported asteroids package
  useEffect(() => {
    console.log("fetching asteroids static assets....");
    // should append the script tag behind the div asteroids-container
    postscribe(
      "#asteroids-container",
      '<script type="text/javascript" src="http://localhost:9000/bundle.js"></script>'
    );
  });
  return <div id="asteroids-container"></div>;
}

export default AsteroidsWrapper;
