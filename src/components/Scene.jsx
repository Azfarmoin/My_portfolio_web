import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Balls from "./Balls.jsx";

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",     // fixed to viewport
        top: 0,                // start at top
        right: 0,   
        left: 0,              // stick to left
        width: "100%",         // take 50% of viewport width (adjust as needed)
        height: "100%",       // full height
        
        zIndex: -1,            // behind other content
      }}
      camera={{ position: [0, 0, 1], fov: 50 }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} />
      <Balls count={40} spread={8} />
      <Environment preset="studio" />
    </Canvas>
  );
}