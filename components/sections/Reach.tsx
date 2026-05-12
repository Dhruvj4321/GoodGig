"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

function Earth() {
  const meshRef = useRef<any>(null);
  const texture = useTexture("/textures/earth.png");

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
        color="#6366f1"
        transparent
        opacity={0.12}
        side={2}
      />
    </mesh>
  );
}

export default function Reach() {
  return (
    <section className="py-32 relative bg-white overflow-hidden">
      <h2 className="text-4xl font-montserrat font-bold text-brand text-center mb-0">
        Our Global Reach
      </h2>

      <div className="h-[500px] w-full relative z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 3, 5]} intensity={1} />
          <directionalLight position={[-5, -3, -5]} intensity={0.4} />

          <Earth />
          <Atmosphere />

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      </div>
 <h2 className="text-4xl font-montserrat font-bold text-[#0978c8] text-center mb-8">
  <span className="mr-6">55+ Projects</span>
  <span>15+ Clients</span>
</h2>
      {/* Added at bottom */}
      <p className="max-w-3xl mx-auto font-montserrat font-semibold text-center text-black tracking-wide relative z-10 text-[0.88rem] leading-[1.95]">
        Our expertise is shared by remarkable organisations we serve. Through our
        client base, we have had the privilege of carrying out programme
        assessments and policy research spanning across 22 states in India and
        13 countries in Asia, Africa, and Latin America.
      </p>
      
    </section>
  );
}