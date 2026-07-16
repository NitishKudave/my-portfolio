"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
    if (materialRef.current) {
      const t = state.clock.getElapsedTime();
      const hue = (Math.sin(t * 0.1) * 0.5 + 0.5) * 0.2 + 0.5;
      materialRef.current.color.setHSL(hue, 0.8, 0.5);
      materialRef.current.emissive.setHSL(hue, 0.9, 0.15);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.4, 200, 32, 2, 3]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#00d4ff"
          wireframe={true}
          transparent={true}
          opacity={0.2}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => [
    { radius: 3, tube: 0.01, color: "#00d4ff", speed: 0.3, rotAxis: 'x' as const },
    { radius: 3.5, tube: 0.01, color: "#a855f7", speed: -0.2, rotAxis: 'y' as const },
    { radius: 4, tube: 0.008, color: "#ec4899", speed: 0.15, rotAxis: 'z' as const },
  ], []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group}>
      {rings.map((ring, i) => (
        <FloatingRing key={i} {...ring} index={i} />
      ))}
    </group>
  );
}

function FloatingRing({ radius, tube, color, speed, index }: {
  radius: number; tube: number; color: string; speed: number; rotAxis: 'x' | 'y' | 'z'; index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(t * speed) * Math.PI * 0.5 + index * 0.8;
      ref.current.rotation.z = Math.cos(t * speed * 0.7) * Math.PI * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
      <pointLight position={[0, 10, -5]} intensity={0.5} color="#ec4899" />
      
      <Stars
        radius={80}
        depth={60}
        count={4000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />
      
      <AnimatedTorusKnot />
      <FloatingRings />
    </Canvas>
  );
}
