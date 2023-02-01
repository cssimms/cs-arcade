import React, { useEffect } from "react";
import postscribe from "postscribe";

/**
 * GameWrapper component using postscribe to fetch game assets froms a URL,
 * and insert them into the React app. Note that this componenet requires the inserted script
 * to attach and run inside of a div with id: gameName-runner
 *
 * WARNING - this is a pretty dangerous implementation, from a function API point of view.
 * We shouldn't take input and blindly insert that js script into our app.
 * I mostly wanted to do this just see if it was possible, as an experiment.
 * TODO - maybe implement and allow list via API?
 */
function GameWrapper({ gameName, assetUrl }) {
  const gameId = `${gameName}-runner`;
  useEffect(() => {
    console.log(`Fetching ~~${gameName}~~ assets...`);
    postscribe(
      `#${gameId}`,
      `<script type="text/javascript" src="${assetUrl}"></script>`
    );
  });
  return (
    <div>
      <div id={gameId} />
    </div>
  );
}

export default GameWrapper;
