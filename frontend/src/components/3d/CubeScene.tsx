import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CubeSceneProps {
  className?: string;
}

const CubeScene = ({ className = '' }: CubeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const cubesRef = useRef<THREE.Mesh[]>([]);
  const animationIdRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 0.8, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Create cube geometry and materials
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        transparent: true, 
        opacity: 0.9,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x7c3aed, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x6d28d9, 
        transparent: true, 
        opacity: 0.9,
        shininess: 100
      }),
    ];

    // Create cube formation (similar to the image)
    const cubes: THREE.Mesh[] = [];
    const positions = [
      // Bottom layer
      [-1.5, -1.5, 0], [-0.5, -1.5, 0], [0.5, -1.5, 0], [1.5, -1.5, 0],
      [-1.5, -0.5, 0], [-0.5, -0.5, 0], [0.5, -0.5, 0], [1.5, -0.5, 0],
      [-1.5, 0.5, 0], [-0.5, 0.5, 0], [0.5, 0.5, 0], [1.5, 0.5, 0],
      [-1.5, 1.5, 0], [-0.5, 1.5, 0], [0.5, 1.5, 0], [1.5, 1.5, 0],
      
      // Middle layer
      [-1, -1, 1], [0, -1, 1], [1, -1, 1],
      [-1, 0, 1], [0, 0, 1], [1, 0, 1],
      [-1, 1, 1], [0, 1, 1], [1, 1, 1],
      
      // Top layer
      [-0.5, -0.5, 2], [0.5, -0.5, 2],
      [-0.5, 0.5, 2], [0.5, 0.5, 2],
      
      // Peak
      [0, 0, 3]
    ];

    positions.forEach((position, index) => {
      const material = materials[index % materials.length].clone();
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(position[0], position[1], position[2]);
      cube.castShadow = true;
      cube.receiveShadow = true;
      
      // Add random rotation
      cube.rotation.set(
        Math.random() * 0.3,
        Math.random() * 0.3,
        Math.random() * 0.3
      );
      
      // Store original position for reset
      (cube as any).originalPosition = cube.position.clone();
      (cube as any).originalRotation = cube.rotation.clone();
      (cube as any).velocity = new THREE.Vector3();
      (cube as any).isDislocated = false;
      
      cubes.push(cube);
      scene.add(cube);
    });

    cubesRef.current = cubes;

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouseRef.current = { x: mouse.x, y: mouse.y };
    };

    const onMouseClick = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);

      if (intersects.length > 0) {
        const cube = intersects[0].object as any;
        setIsInteracting(true);
        
        if (!cube.isDislocated) {
          // Dislocate the cube
          cube.isDislocated = true;
          const direction = new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize();
          
          cube.velocity.copy(direction.multiplyScalar(0.1));
          
          // Add some spin
          cube.rotationVelocity = {
            x: (Math.random() - 0.5) * 0.1,
            y: (Math.random() - 0.5) * 0.1,
            z: (Math.random() - 0.5) * 0.1
          };
        } else {
          // Reset cube to original position
          cube.isDislocated = false;
          cube.velocity.set(0, 0, 0);
          cube.rotationVelocity = { x: 0, y: 0, z: 0 };
        }
        
        setTimeout(() => setIsInteracting(false), 200);
      }
    };

    mountRef.current.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('click', onMouseClick);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate the entire formation
      const time = Date.now() * 0.001;
      
      cubes.forEach((cube, index) => {
        const cubeAny = cube as any;
        
        if (cubeAny.isDislocated) {
          // Update dislocated cubes
          cube.position.add(cubeAny.velocity);
          cubeAny.velocity.multiplyScalar(0.98); // Friction
          
          if (cubeAny.rotationVelocity) {
            cube.rotation.x += cubeAny.rotationVelocity.x;
            cube.rotation.y += cubeAny.rotationVelocity.y;
            cube.rotation.z += cubeAny.rotationVelocity.z;
            
            // Slow down rotation
            cubeAny.rotationVelocity.x *= 0.98;
            cubeAny.rotationVelocity.y *= 0.98;
            cubeAny.rotationVelocity.z *= 0.98;
          }
        } else {
          // Smooth return to original position
          const targetPos = cubeAny.originalPosition.clone();
          cube.position.lerp(targetPos, 0.05);
          cube.rotation.x = cubeAny.originalRotation.x + Math.sin(time + index * 0.1) * 0.1;
          cube.rotation.y = cubeAny.originalRotation.y + Math.cos(time + index * 0.1) * 0.1;
          cube.rotation.z = cubeAny.originalRotation.z + Math.sin(time * 0.5 + index * 0.2) * 0.05;
        }
      });

      // Global rotation based on mouse position
      scene.rotation.y = mouseRef.current.x * 0.2;
      scene.rotation.x = -mouseRef.current.y * 0.1;

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
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeEventListener('click', onMouseClick);
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      cubes.forEach(cube => {
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach(material => material.dispose());
        } else {
          cube.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full cursor-pointer ${className}`}
      style={{ minHeight: '400px' }}
    >
      {isInteracting && (
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm animate-fade-in">
          Click cubes to dislocate them!
        </div>
      )}
    </div>
  );
};

export default CubeScene;