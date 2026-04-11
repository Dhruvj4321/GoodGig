"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

function Earth() {
  const meshRef = useRef<any>(null);
  const texture = useTexture("/textures/earth.jpg");

  // Smooth auto rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.7, 64, 64]} />
      <meshBasicMaterial
        color="#4f46e5"
        transparent
        opacity={0.2}
        side={2}
      />
    </mesh>
  );
}

export default function Reach() {
  return (
    <section className="py-32 relative">
      <h2 className="text-5xl font-extrabold text-center mb-20">
        Our Global Reach
      </h2>

      <div className="h-[500px] w-full">
        <Canvas camera={{ position: [0, 0, 6] }}>
          
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 3, 5]} intensity={1.2} />

          {/* Earth */}
          <Earth />

          {/* Glow */}
          <Atmosphere />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      </div>
    </section>
  );
}