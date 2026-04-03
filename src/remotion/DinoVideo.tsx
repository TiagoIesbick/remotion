import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const COLOR = "#1a1a1a";
const DINO_SIZE = 90;

export const DinoVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Dino falls from above with a bouncy spring landing
  const springProgress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 120, mass: 1 },
  });

  // Starts off-screen above (-900), settles at 0 (resting just above the 'o')
  const dinoY = interpolate(springProgress, [0, 1], [-900, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 64,
        }}
      >
        {/* amigoDino — split to position the dino above the 'o' after 'g' */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontFamily: "sans-serif",
            fontSize: 96,
            fontWeight: 900,
            color: COLOR,
            lineHeight: 1,
          }}
        >
          <span>amig</span>

          {/* The 'o' that the dino lands on */}
          <span style={{ position: "relative" }}>
            <Img
              src={staticFile("Dino-8.png")}
              style={{
                position: "absolute",
                width: DINO_SIZE,
                bottom: "100%",
                left: "50%",
                transform: `translateX(-50%) translateY(${dinoY}px)`,
              }}
            />
            o
          </span>

          <span>Dino</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 28,
            fontWeight: 300,
            color: COLOR,
            letterSpacing: "0.12em",
            marginTop: 8,
          }}
        >
          a wild idea
        </div>
      </div>
    </AbsoluteFill>
  );
};
