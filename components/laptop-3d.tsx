"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Bounds, useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/laptop.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/models/laptop.glb");

export function Laptop3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Model />
          </Bounds>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -1.1, 0]} opacity={0.4} scale={8} blur={2} far={2} />

        {/* Click + drag to rotate. Zoom/pan disabled so it feels like a fixed showcase, not a full 3D navigator */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}