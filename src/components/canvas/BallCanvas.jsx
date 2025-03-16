import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Ball from "./Ball";
import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // Changed from 'always' to reduce load
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* Ball is SAFELY inside Canvas */}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
