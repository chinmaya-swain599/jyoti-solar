import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const RotatingEarth = () => {
  const earthRef = useRef();

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={earthRef}>
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#07111f"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      {/* Glow */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.1} wireframe />
      </Sphere>
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial color="#7b61ff" transparent opacity={0.05} wireframe />
      </Sphere>
    </group>
  );
};

export default RotatingEarth;
