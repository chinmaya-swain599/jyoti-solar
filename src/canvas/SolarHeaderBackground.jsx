import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const SolarWave = ({ radius, speed, color }) => {
  const ref = useRef();
  
  useFrame((state) => {
    const scale = 1 + (state.clock.getElapsedTime() * speed) % 1.5;
    if (ref.current) {
      ref.current.scale.set(scale, scale, 1);
      ref.current.material.opacity = Math.max(0, (2.5 - scale) * 0.12);
    }
  });

  return (
    <Torus ref={ref} args={[radius, 0.015, 8, 64]} rotation={[0, 0, 0]}>
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </Torus>
  );
};

const Photons = ({ count = 120 }) => {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() - 0.5) * Math.PI * 0.4; // Fan out to the left
      const speed = 0.8 + Math.random() * 1.5;
      const x = 0; // Start at center of sun (relative coordinate is 0 since parent group is shifted)
      const y = 0;
      const z = (Math.random() - 0.5) * 2;
      temp.push({ angle, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.x -= Math.cos(p.angle) * p.speed * 0.05;
      p.y += Math.sin(p.angle) * p.speed * 0.05;

      // Reset photon when it travels far left
      if (p.x < -16) {
        p.x = 0;
        p.y = 0;
      }

      posAttr.setXYZ(i, p.x, p.y, p.z);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#f97316"
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SolarHeaderBackground = () => {
  const sunRef = useRef();

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group position={[5, 0, 0]}> {/* Positioned on the right side of header */}
      <ambientLight intensity={0.7} />
      
      {/* Mini Sun */}
      <group ref={sunRef}>
        <Sphere args={[1.0, 32, 32]}>
          <meshBasicMaterial color="#f97316" />
        </Sphere>
        <Sphere args={[1.15, 16, 16]}>
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.25} wireframe />
        </Sphere>
      </group>
      
      {/* Concentric Solar Waves */}
      <SolarWave radius={1.2} speed={0.4} color="#f97316" />
      <SolarWave radius={2.2} speed={0.4} color="#fbbf24" />
      <SolarWave radius={3.2} speed={0.4} color="#f97316" />

      {/* Particle streams moving left (towards text content) */}
      <Photons count={120} />
    </group>
  );
};

export default SolarHeaderBackground;
