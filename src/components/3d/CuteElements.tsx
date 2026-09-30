import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ================= PUFFY 3D CLOUD =================
export const CuteCloud3D: React.FC<{
  position: [number, number, number];
  scale?: number;
  speed?: number;
}> = ({ position, scale = 1, speed = 0.5 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(time * speed) * 0.15;
    groupRef.current.position.x = position[0] + Math.cos(time * speed * 0.6) * 0.2;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Central fluff */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.9, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>
      {/* Left bump */}
      <mesh position={[-0.7, -0.15, 0]}>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshStandardMaterial color="#FFF5F7" roughness={0.9} />
      </mesh>
      {/* Right bump */}
      <mesh position={[0.7, -0.15, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#FFF9FA" roughness={0.9} />
      </mesh>
      {/* Top fluff */}
      <mesh position={[0.2, 0.45, 0.1]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>
      {/* Soft back puff */}
      <mesh position={[-0.3, 0.35, -0.1]}>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color="#FFF0F5" roughness={0.9} />
      </mesh>
    </group>
  );
};

// ================= BOUNCY 3D BALLOON =================
export const CuteBalloon3D: React.FC<{
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
}> = ({ position, color, speed = 1, scale = 1 }) => {
  const balloonRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!balloonRef.current) return;
    const time = state.clock.getElapsedTime();
    balloonRef.current.position.y = position[1] + Math.sin(time * speed * 1.5) * 0.2;
    balloonRef.current.rotation.z = Math.sin(time * speed) * 0.08;
    balloonRef.current.rotation.y = Math.cos(time * speed * 0.7) * 0.15;
  });

  return (
    <group ref={balloonRef} position={position} scale={scale}>
      {/* Balloon Egg Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>
      {/* Balloon Knot */}
      <mesh position={[0, -0.66, 0]}>
        <coneGeometry args={[0.08, 0.12, 16]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
      {/* String */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 1.0]} />
        <meshBasicMaterial color="#E0D0C5" />
      </mesh>
    </group>
  );
};

// ================= 3D STYLIZED SWAYING FLOWER =================
export const CuteFlower3D: React.FC<{
  position: [number, number, number];
  petalColor: string;
  centerColor?: string;
  scale?: number;
  onClick?: () => void;
  isBloomed?: boolean;
}> = ({
  position,
  petalColor,
  centerColor = "#FFD166",
  scale = 1,
  onClick,
  isBloomed = false,
}) => {
  const flowerRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!flowerRef.current) return;
    const time = state.clock.getElapsedTime();
    // Gentle sway in the wind
    flowerRef.current.rotation.z = Math.sin(time * 1.8 + position[0]) * 0.07;
    flowerRef.current.rotation.x = Math.cos(time * 1.4 + position[2]) * 0.05;

    if (headRef.current) {
      const targetScale = isBloomed ? 1.3 : 1;
      headRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group
      ref={flowerRef}
      position={position}
      scale={scale}
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation();
          onClick();
        }
      }}
    >
      {/* Green Stem */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.035, 0.045, 0.9, 16]} />
        <meshStandardMaterial color="#7CB342" roughness={0.6} />
      </mesh>

      {/* Cute Green Leaf */}
      <mesh position={[0.15, 0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.09, 0.28, 16]} />
        <meshStandardMaterial color="#8BC34A" roughness={0.5} />
      </mesh>
      <mesh position={[-0.15, 0.45, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.08, 0.24, 16]} />
        <meshStandardMaterial color="#8BC34A" roughness={0.5} />
      </mesh>

      {/* Flower Head */}
      <group ref={headRef} position={[0, 0.95, 0]}>
        {/* Flower Center */}
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color={centerColor} roughness={0.3} />
        </mesh>

        {/* 6 Petals */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const px = Math.cos(angle) * 0.24;
          const py = Math.sin(angle) * 0.24;
          return (
            <mesh key={i} position={[px, py, 0]} rotation={[0, 0, angle]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color={petalColor} roughness={0.3} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

// ================= FLUTTERING 3D BUTTERFLY =================
export const CuteButterfly3D: React.FC<{
  position: [number, number, number];
  color?: string;
  speed?: number;
}> = ({ position, color = "#FF8FA3", speed = 1.2 }) => {
  const butterflyRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!butterflyRef.current || !leftWingRef.current || !rightWingRef.current) return;
    const time = state.clock.getElapsedTime();

    // Flight orbit
    butterflyRef.current.position.y = position[1] + Math.sin(time * speed * 2) * 0.35;
    butterflyRef.current.position.x = position[0] + Math.cos(time * speed) * 0.5;
    butterflyRef.current.position.z = position[2] + Math.sin(time * speed * 0.7) * 0.4;
    butterflyRef.current.rotation.y = time * speed;

    // Wing flapping
    const flap = Math.sin(time * 18) * 0.75;
    leftWingRef.current.rotation.y = flap;
    rightWingRef.current.rotation.y = -flap;
  });

  return (
    <group ref={butterflyRef} position={position} scale={0.65}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.24]} />
        <meshStandardMaterial color="#4E342E" roughness={0.4} />
      </mesh>
      {/* Left Wing */}
      <mesh ref={leftWingRef} position={[-0.14, 0.04, 0]}>
        <circleGeometry args={[0.15, 16]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} roughness={0.3} />
      </mesh>
      {/* Right Wing */}
      <mesh ref={rightWingRef} position={[0.14, 0.04, 0]}>
        <circleGeometry args={[0.15, 16]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} roughness={0.3} />
      </mesh>
    </group>
  );
};

// ================= PASTEL 3D RAINBOW ARC =================
export const CuteRainbow3D: React.FC<{
  position: [number, number, number];
  scale?: number;
}> = ({ position, scale = 1 }) => {
  const colors = ["#FFB3C6", "#FFE082", "#A5D6A7", "#BAE6FD", "#D8B4FE"];

  return (
    <group position={position} scale={scale} rotation={[0, 0, 0]}>
      {colors.map((c, i) => (
        <mesh key={i} position={[0, 0, -i * 0.04]}>
          <torusGeometry args={[5 + i * 0.3, 0.12, 16, 64, Math.PI]} />
          <meshBasicMaterial color={c} transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
};
