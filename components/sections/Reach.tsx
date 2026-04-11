"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

function Earth() {
  const meshRef = useRef<any>(null);
  const texture = useTexture("/textures/earth.jpg");

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
        color="#6366f1" // softer indigo
        transparent
        opacity={0.12} // reduced for light mode
        side={2}
      />
    </mesh>
  );
}

export default function Reach() {
  return (
    <section className="py-32 relative bg-white overflow-hidden">
      
     

      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-20 relative z-10">
        Our Global Reach
      </h2>

      <div className="h-[500px] w-full relative z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          
          {/* Balanced lighting for light UI */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 3, 5]} intensity={1} />
          <directionalLight position={[-5, -3, -5]} intensity={0.4} />

          {/* Earth */}
          <Earth />

          {/* Subtle glow */}
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