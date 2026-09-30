import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraTarget {
  pos: [number, number, number];
  lookAt: [number, number, number];
}

const SCENE_CAMERA_TARGETS: Record<number, CameraTarget> = {
  0: { pos: [0, 0, 7.5], lookAt: [0, 0, 0] },
  1: { pos: [0, 1.2, 5.2], lookAt: [0, 0.3, 0] },
  2: { pos: [0, 0.2, 5.4], lookAt: [0, 0.1, 0] },
  3: { pos: [0, 0.1, 6.5], lookAt: [0, 0, 0] },
  4: { pos: [0, 0.3, 5.8], lookAt: [0, 0.1, 0] },
  5: { pos: [0, 0.1, 6.2], lookAt: [0, 0, 0] },
  6: { pos: [0, 0.2, 5.5], lookAt: [0, 0.1, 0] },
  7: { pos: [0, 0.2, 5.2], lookAt: [0, 0, 0] },
  8: { pos: [0, 0.2, 5.6], lookAt: [0, 0.1, 0] },
};

interface CameraControllerProps {
  currentScene: number;
  isFlyingThrough?: boolean;
}

export const CameraController: React.FC<CameraControllerProps> = ({
  currentScene,
  isFlyingThrough = false,
}) => {
  const { camera, size, pointer } = useThree();
  const currentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const targetLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const targetPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 7.5));

  const isMobile = size.width < 768;

  useEffect(() => {
    const config = SCENE_CAMERA_TARGETS[currentScene] || SCENE_CAMERA_TARGETS[0];
    const mobileZOffset = isMobile ? 1.5 : 0;

    if (isFlyingThrough && currentScene === 0) {
      // Fly directly through the particle heart
      targetPosRef.current.set(0, 0, -1.5);
      targetLookAtRef.current.set(0, 0, -5);
    } else {
      targetPosRef.current.set(
        config.pos[0],
        config.pos[1],
        config.pos[2] + mobileZOffset
      );
      targetLookAtRef.current.set(
        config.lookAt[0],
        config.lookAt[1],
        config.lookAt[2]
      );
    }
  }, [currentScene, isFlyingThrough, isMobile]);

  useFrame((_, delta) => {
    // Subtle mouse/gyro parallax
    const parallaxX = pointer.x * (isMobile ? 0.15 : 0.35);
    const parallaxY = -pointer.y * (isMobile ? 0.1 : 0.25);

    const desiredX = targetPosRef.current.x + parallaxX;
    const desiredY = targetPosRef.current.y + parallaxY;
    const desiredZ = targetPosRef.current.z;

    // Smooth lerp to camera position
    const lerpSpeed = isFlyingThrough ? 3.5 : 2.5;
    camera.position.x += (desiredX - camera.position.x) * (lerpSpeed * delta);
    camera.position.y += (desiredY - camera.position.y) * (lerpSpeed * delta);
    camera.position.z += (desiredZ - camera.position.z) * (lerpSpeed * delta);

    // Smooth lerp to lookAt target
    currentLookAtRef.current.lerp(targetLookAtRef.current, lerpSpeed * delta);
    camera.lookAt(currentLookAtRef.current);
  });

  return null;
};
