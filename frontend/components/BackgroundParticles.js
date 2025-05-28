import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // 👈 behind everything
        },
        background: {
          color: "#0d1117",
        },
        particles: {
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default BackgroundParticles;
