import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useAvatar } from '../context/AvatarContext';

const Avatar = () => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const { avatar } = useAvatar(); // Desestructuramos el avatar del contexto
  const glbPath = avatar.glbPath; // Ruta del modelo GLB
  const fbxPath = avatar.fbxPath; // Ruta de la animacion FBX
  
  console.log('Avatar:', avatar); // Verifica que el avatar se esté pasando correctamente
  console.log('GLB Path:', glbPath); // Verifica la ruta del modelo GLB en la consola
  console.log('FBX Path:', fbxPath); // Verifica la ruta de la animación FBX en la consola

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.2,
      1000
    );
    camera.position.set(0, 2, 3.5);
    camera.lookAt(0, 0, 0);
  
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(2, 3, 2);
    scene.add(directionalLight);
  
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
  
    const gltfLoader = new GLTFLoader();
    const fbxLoader = new FBXLoader();
  
    let model;
    let mixer;
    let clock = new THREE.Clock();
  
    gltfLoader.load(
      glbPath,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(4, 2.8, 2);
        model.position.set(0, -3.5, 0);
        scene.add(model);
  
        fbxLoader.load(
          fbxPath,
          (fbx) => {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(fbx.animations[0]);
            action.play();
          },
          undefined,
          (error) => console.error('Error cargando animación FBX:', error)
        );
      },
      undefined,
      (error) => console.error('Error cargando modelo GLB:', error)
    );
  
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };
    animate();
  
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
      scene.clear();
    };
  }, [glbPath, fbxPath]); // 👈 AQUI la clave
  

  return (
    <div className='z-30'
      ref={containerRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default Avatar;
