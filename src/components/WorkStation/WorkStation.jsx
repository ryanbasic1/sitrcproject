import React, { useState, useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { MdOutlineOpenInNew } from "react-icons/md";
import { editable as e } from "@theatre/r3f";

export function WorkStation() {
  const [htmlVisible, setHtmlVisible] = useState(false);

  // Render the Html element
  const renderHtml = () => {
    return (
      <Html
        transform
        wrapperClass="browser"
        distanceFactor={0.97}
        position={[0.025, 0.85, -0.65]}
        occlude={true}
      >
        <div className="browser-tab">
          <button
            onClick={() => handleTabClick(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            Aryan
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ryanbasic1/aryanbasic"
            >
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            Riya
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:riyapagar18@gmail.com"
            >
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(3)}
            className={activeTab === 3 ? "active" : ""}
          >
            Deven
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DEVENBORSE"
            >
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(4)}
            className={activeTab === 4 ? "active" : ""}
          >
            Sachin
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sachin13-10"
            >
              <MdOutlineOpenInNew />
            </a>
          </button>
          <button
            onClick={() => handleTabClick(5)}
            className={activeTab === 5 ? "active" : ""}
          >
            Yash
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:yasgpagar@gmail.com"
            >
              <MdOutlineOpenInNew />
            </a>
          </button>
        </div>
        <iframe title={`project ${activeTab}`} src={getIframeSource()} />
      </Html>
    );
  };

  // Use only local assets to avoid runtime crashes from unreachable external URLs
  const chairModel = useGLTF("./models/tempProps/chair-v1-transformed.glb");
  const { nodes, materials } = useGLTF("./models/laptop/laptop.glb");

  // Function to handle tab clicks and update the activeTab state
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Function to get the iframe source URL based on the active tab
  const getIframeSource = () => {
    switch (activeTab) {
      case 1:
        return "/profiles/aryan.html";
      case 2:
        return "/profiles/riya.html";
      case 3:
        return "/profiles/deven.html";
      case 4:
        return "/profiles/sachin.html";
      case 5:
        return "/profiles/yash.html";
      default:
        return "/profiles/aryan.html";
    }
  };

  const screenRef = useRef();
  const [theatreObject, setTheatreObject] = useState(null);

  useEffect(() => {
    if (!theatreObject) return;
    const unsubscribe = theatreObject.onValuesChange((newValues) => {
      if (newValues.foo > 0.79265 && newValues.foo < 0.865) {
        setHtmlVisible(true);
      } else {
        setHtmlVisible(false);
      }
    });

    return unsubscribe;
  }, [theatreObject]);

  return (
    <group position={[1, -0.7, 2]} rotation={[0, -Math.PI + 0.8, 0]}>
      <mesh receiveShadow castShadow position={[0, 0.58, 0.3]}>
        <boxGeometry args={[1.9, 0.07, 1.3]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0.3, 0.3]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh receiveShadow castShadow position={[0.8, 0.3, -0.25]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh receiveShadow castShadow position={[-0.8, 0.3, -0.25]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh receiveShadow castShadow position={[0.8, 0.3, 0.9]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh receiveShadow castShadow position={[-0.8, 0.3, 0.9]}>
        <boxGeometry args={[0.08, 0.55, 0.08]} />
        <meshStandardMaterial color="#5d4735" roughness={0.9} metalness={0} />
      </mesh>
      <mesh
        geometry={chairModel.nodes.SM_Prop_Deckchair_01_1.geometry}
        material={chairModel.materials.PolygonTown_01_A}
        position={[-0.1, 0, 1.25]}
        rotation={[0, 0.2, 0]}
        scale={0.7}
      />
      <group position={[0, 0.75, 0.3]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736.geometry}
          material={materials.mat16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_1.geometry}
          material={materials.mat23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_2.geometry}
          material={materials.mat17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh485226736_3.geometry}
          material={materials.mat15}
        />
        <e.group theatreKey="lid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792.geometry}
            material={materials.mat16}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_1.geometry}
            material={materials.mat23}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_2.geometry}
            material={materials.mat17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh256948792_3.geometry}
            material={materials.mat25}
          />
        </e.group>
        <e.group
          theatreKey="screen"
          ref={screenRef}
          objRef={setTheatreObject}
          additionalProps={{
            foo: 0,
          }}
        >
          {htmlVisible && renderHtml()}
        </e.group>
      </group>
    </group>
  );
}
