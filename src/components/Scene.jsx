import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import Balls from "./Balls.jsx";

export default function Scene() {
 

  return (
    <Canvas
      className="Scene  "
      style={{
        background: "#003366",

        zIndex: -1,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
      }}
      camera={{ position: [0, 0, 1], fov: 50 }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} />

      {/* Pass scrollY to Balls to move them */}
      <Balls count={40} spread={8}  />

      <Environment preset="studio" />
    </Canvas>
  );
}