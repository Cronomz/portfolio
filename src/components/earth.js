import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function Earth(props) {
    // // This reference will give us direct access to the mesh
    // const mesh = useRef()
    // // Set up state for the hovered and active state
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    // // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // // Return view, these are regular three.js elements expressed in JSX
   
    const materials = useLoader(MTLLoader, "../../public/assets/3d/Earth.mtl");
    const obj = useLoader(OBJLoader, '../../public/assets/3d/Earth.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
      });
    obj.position.set(0,0,100);
    console.log(obj)
    return <primitive object={obj} scale={0.2} />

    // const fbx = useLoader(FBXLoader, "../../public/assets/3d/Earth.fbx");

    // return <primitive object={fbx} scale={0.05} />;
    
    // return (
    //   <mesh
    //     {...props}
    //     ref={mesh}
    //     scale={active ? 1.5 : 1}
    //     onClick={(event) => setActive(!active)}
    //     onPointerOver={(event) => setHover(true)}
    //     onPointerOut={(event) => setHover(false)}>
        
    //     <boxGeometry args={[1, 1, 1]} />
    //     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    //   </mesh>
    // )
  }

  useGLTF.preload('../../public/assets/3d/Earth.glb');
  export default Earth;