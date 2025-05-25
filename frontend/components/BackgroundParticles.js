import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0d1117" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.4,
          },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default BackgroundParticles;
