import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const GlassHeartMesh: React.FC<{ isClicked: boolean }> = ({ isClicked }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate a smooth 3D heart shape
  const heartGeometry = useMemo(() => {
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    heartShape.moveTo(x + 0.25, y + 0.25);
    heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
    heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
    heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 1.0);
    heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
    heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
    heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    const geom = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { pointer } = state;

    // Elegant, slow rotational sway with mouse parallax
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x * 0.45,
      delta * 3
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      Math.PI + -pointer.y * 0.3,
      delta * 3
    );

    const targetScale = isClicked ? 1.25 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh
        ref={meshRef}
        geometry={heartGeometry}
        rotation={[Math.PI, 0, 0]}
        scale={1.3}
      >
        {/* Glossy Translucent Glass Material */}
        <meshPhysicalMaterial
          color="#FFD6DF"
          transmission={0.88}
          opacity={1}
          transparent
          roughness={0.12}
          ior={1.45}
          thickness={1.2}
          specularIntensity={1}
          specularColor="#FFFFFF"
          emissive="#FFAAA6"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

export const GlassHeart3D: React.FC<{ isClicked?: boolean }> = ({ isClicked = false }) => {
  return (
    <div className="w-full h-64 sm:h-72 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} color="#FFF5F5" />
        <directionalLight position={[3, 5, 4]} intensity={2.0} color="#FFFFFF" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#FF9AA2" />
        <pointLight position={[3, 2, -2]} intensity={0.8} color="#D8B4E2" />
        <GlassHeartMesh isClicked={isClicked} />
      </Canvas>
    </div>
  );
};
