import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

const FloatingEnvelopeMesh: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const flapRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const { pointer } = state;

    // Subtle, elegant mouse tracking tilt
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.35,
      delta * 4
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.25,
      delta * 4
    );

    // Flap opening rotation
    if (flapRef.current) {
      const targetFlapRot = isOpen ? -Math.PI * 0.85 : 0;
      flapRef.current.rotation.x = THREE.MathUtils.lerp(
        flapRef.current.rotation.x,
        targetFlapRot,
        delta * 6
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.12} floatIntensity={0.25}>
      <group
        ref={groupRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.04 : 1}
      >
        {/* Envelope Body (Clean Warm Ivory with Soft Depth) */}
        <RoundedBox args={[2.8, 1.9, 0.08]} radius={0.04} smoothness={4}>
          <meshStandardMaterial
            color="#FCFAF7"
            roughness={0.4}
            metalness={0.05}
          />
        </RoundedBox>

        {/* Envelope Back Border / Pocket */}
        <mesh position={[0, -0.05, 0.042]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshStandardMaterial
            color="#F7EFE7"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Inner Card / Letter peeking out */}
        <mesh position={[0, isOpen ? 0.45 : 0.05, 0.035]}>
          <planeGeometry args={[2.5, 1.6]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
        </mesh>

        {/* Flap Hinged at Top */}
        <group ref={flapRef} position={[0, 0.95, 0.045]}>
          <mesh position={[0, -0.48, 0]}>
            <coneGeometry args={[1.4, 0.95, 3]} />
            <meshStandardMaterial
              color="#FDF8F3"
              roughness={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Elegant Terracotta Wax Seal */}
          <mesh position={[0, -0.68, 0.04]}>
            <cylinderGeometry args={[0.18, 0.18, 0.03, 24]} />
            <meshStandardMaterial
              color="#D96B5B"
              roughness={0.3}
              metalness={0.1}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

export const HeroEnvelope3D: React.FC<EnvelopeProps> = ({ isOpen, onClick }) => {
  return (
    <div className="w-full h-72 sm:h-84 cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} color="#FFFBF5" />
        <directionalLight position={[4, 5, 3]} intensity={1.8} color="#FFF5EB" />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#FFD7DF" />
        <FloatingEnvelopeMesh isOpen={isOpen} onClick={onClick} />
      </Canvas>
    </div>
  );
};
