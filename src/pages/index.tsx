import { Player, BigPlayButton, ControlBar } from "video-react";
import {  useState } from "react";

export default function Index() {
  const [playerState, setPLayerState] = useState(() => Player);
  const [vplayerState, setVPLayerState] = useState(false);
  const [controlBar, setcontrolBar] = useState(true);

  const play = () => {
    setVPLayerState(true);
    setcontrolBar(false)
    playerState.actions.mute(false);
    playerState.actions.seek(0);
    playerState.actions.play();
  };

  const stop = () => {
    setVPLayerState(false);
    setcontrolBar(true)
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
          autoPlay
          width={10}
        >
          <BigPlayButton position="center" />
          <ControlBar disableDefaultControls={controlBar} className="my-class" />
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
