import ReactPlayer from "react-player/lazy";

export default function Index() {
  return (
    <div className="video-player">
      <ReactPlayer
        playing={true}
        muted
        width="100%"
        height="auto"
        controls={true}
        url={["/assets/videos/Capture One.mp4"]}
      />

      <style jsx>{`
        .video-player {
          
          height: calc(100% - 200px);
        }
        `}</style>
    </div>
  );
}
