import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

const FloatingElements = ({ className = '', count = 20 }: FloatingElementsProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create floating elements
    const elements: THREE.Mesh[] = [];
    const geometries = [
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.SphereGeometry(0.05, 8, 6),
      new THREE.TetrahedronGeometry(0.08),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.6 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.4 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        transparent: true, 
        opacity: 0.5 
      }),
    ];

    for (let i = 0; i < count; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const element = new THREE.Mesh(geometry, material);

      element.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );

      element.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store animation properties
      (element as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };

      (element as any).floatSpeed = Math.random() * 0.01 + 0.005;
      (element as any).floatOffset = Math.random() * Math.PI * 2;

      elements.push(element);
      scene.add(element);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      elements.forEach((element, index) => {
        const elementAny = element as any;
        
        // Rotation
        element.rotation.x += elementAny.rotationSpeed.x;
        element.rotation.y += elementAny.rotationSpeed.y;
        element.rotation.z += elementAny.rotationSpeed.z;

        // Floating motion
        element.position.y += Math.sin(time * elementAny.floatSpeed + elementAny.floatOffset) * 0.001;
        element.position.x += Math.cos(time * elementAny.floatSpeed * 0.7 + elementAny.floatOffset) * 0.0005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      elements.forEach(element => {
        element.geometry.dispose();
        if (Array.isArray(element.material)) {
          element.material.forEach(material => material.dispose());
        } else {
          element.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, [count]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default FloatingElements;