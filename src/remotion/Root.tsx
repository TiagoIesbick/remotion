import { Composition } from "remotion";
import { DinoVideo } from "./DinoVideo";

export const RemotionRoot = () => {
  return (
    <Composition
      id="DinoVideo"
      component={DinoVideo}
      durationInFrames={90}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
