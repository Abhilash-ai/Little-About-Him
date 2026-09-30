import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const BackgroundParticles: React.FC<{ count?: number }> = ({ count = 260 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate colorful pastel particle positions, colors, and speeds
  const [positions, colors, scales, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const sca = new Float32Array(count);
    const spd = new Float32Array(count);

    const pastelPalette = [
      new THREE.Color("#FF8FA3"), // Rose Pink
      new THREE.Color("#FFB3C6"), // Soft Blush
      new THREE.Color("#FFD166"), // Warm Honey
      new THREE.Color("#06D6A0"), // Mint Sparkle
      new THREE.Color("#118AB2"), // Soft Sky
      new THREE.Color("#CDB4DB"), // Lilac Lavender
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 28;

      const c = pastelPalette[Math.floor(Math.random() * pastelPalette.length)];
      cols[i * 3 + 0] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;

      sca[i] = Math.random() * 2.5 + 1.2;
      spd[i] = Math.random() * 0.4 + 0.15;
    }
    return [pos, cols, sca, spd];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Gentle floating dance (like blossom petals in a warm breeze)
      array[i * 3 + 1] += speeds[i] * 0.012;
      array[i * 3 + 0] += Math.sin(time * 0.8 + i) * 0.008;

      if (array[i * 3 + 1] > 11) {
        array[i * 3 + 1] = -11;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
};
