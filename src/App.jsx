import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Sceen from "./Sceen";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 34 }}>
        <OrbitControls />
        <ambientLight />
        <Sceen />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.7} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="w-full bg-current py-3">
        <h1 className="text-zinc-300 border-zinc-500  p-16 m-2 text-center">
          frontend ok we coders were artista. we make to best fill
        </h1>
      </div>
    </>
  );
};

export default App;
