import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const Planet = ({ radius, speed, size, color }) => {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * radius;
      ref.current.position.z = Math.cos(t) * radius;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
      {/* Small glowing halo around each energy collector */}
      <Sphere args={[size * 1.3, 16, 16]}>
        <meshBasicMaterial color={color} transparent opacity={0.15} wireframe />
      </Sphere>
    </group>
  );
};

const Orbit = ({ radius, color }) => {
  return (
    <Torus args={[radius, 0.015, 8, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial color={color} transparent opacity={0.25} />
    </Torus>
  );
};

// Moving energy particles representing solar wind
const SolarWind = ({ count = 300 }) => {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const speed = 0.5 + Math.random() * 1.5;
      const dist = Math.random() * 8; // starting distance
      temp.push({ theta, phi, speed, dist });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      // Expand outwards
      let currentDist = (p.dist + time * p.speed) % 15;
      
      const x = currentDist * Math.sin(p.phi) * Math.cos(p.theta);
      const y = currentDist * Math.sin(p.phi) * Math.sin(p.theta);
      const z = currentDist * Math.cos(p.phi);

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.02;
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
        size={0.08}
        color="#f97316"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SolarSystem = () => {
  const sunRef = useRef();
  const coronaRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.1;
    }
    if (coronaRef.current) {
      coronaRef.current.rotation.y = -t * 0.15;
      coronaRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/* Central Sun */}
      <group ref={sunRef}>
        <Sphere args={[1.8, 32, 32]}>
          <meshBasicMaterial color="#f97316" />
        </Sphere>
        <pointLight color="#f97316" intensity={12} distance={30} decay={1.2} />
      </group>

      {/* Sun Corona / Flare glow */}
      <group ref={coronaRef}>
        <Sphere args={[2.0, 32, 32]}>
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.2} wireframe />
        </Sphere>
        <Sphere args={[2.3, 16, 16]}>
          <meshBasicMaterial color="#f97316" transparent opacity={0.1} wireframe />
        </Sphere>
      </group>

      {/* Orbit Rings */}
      <Orbit radius={4.2} color="#f97316" />
      <Orbit radius={6.8} color="#3b82f6" />
      <Orbit radius={9.5} color="#fbbf24" />

      {/* Orbiting Collectors / Energy Spheres */}
      <Planet radius={4.2} speed={0.6} size={0.3} color="#f97316" />
      <Planet radius={6.8} speed={0.4} size={0.4} color="#3b82f6" />
      <Planet radius={9.5} speed={0.25} size={0.5} color="#fbbf24" />

      {/* Solar Wind (flowing particles) */}
      <SolarWind count={300} />
    </group>
  );
};

export default SolarSystem;
