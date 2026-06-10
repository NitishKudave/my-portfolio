"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedGlobe() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[2, 64, 64]} position={[0, -1, 0]}>
      <meshStandardMaterial
        color="#00f3ff"
        wireframe={true}
        transparent={true}
        opacity={0.15}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00ffcc" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#9d00ff" />
      
      {/* Background Particles */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
      
      {/* Center 3D Object */}
      <AnimatedGlobe />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
