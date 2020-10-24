import ReactPlayer from "react-player/lazy";

import { Player, BigPlayButton } from "video-react";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [playerState, setPLayerState] = useState(() => Player);
  const [vplayerState, setVPLayerState] = useState(false);

  const play = () => {
    setVPLayerState(true);
    playerState.actions.mute(false);
    playerState.actions.seek(0);
    playerState.actions.play();
  };

  const stop = () => {
    setVPLayerState(false);
    playerState.actions.mute(true);
  };

  return (
    <div className="test">
      <div className="video-player">
        <Player
          ref={(player) => {
            setPLayerState(player);
          }}
          fluid
          muted={true}
          playsInline={true}
          autoPlay={true}
          width={10}
        >
          <BigPlayButton position="center" />
          <source src={"/assets/videos/Capture One.mp4"} />
        </Player>

        <div className="overlay"></div>
        <div className="overlay-content">
          <button onClick={() => play()}>Play</button>
          <button onClick={() => stop()}>Stop</button>
        </div>
      </div>

      <style jsx>{`
        .test {
          display: flex;
          justify-content: center;
          width: 100%;
          position: relative;
        }

        .video-player {
          width: 60%;
        }

        .overlay {
          display: ${vplayerState ? "none" : "block"};
          width: 100%;
          position: absolute;
          top: 0;
          height: 100%;
          left: 0;
          background-color: rgba(12, 13, 17, 0.75);
        }

        .overlay-content {
          width: 100%;
          position: absolute;
          top: 0;
          height: 100%;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
