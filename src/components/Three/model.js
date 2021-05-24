/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei'
/*
function moveJoint(joint, coordinates){
  let degrees = coordinates.x
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
}
*/

const getAngle = (p1, p2) => {
  return Math.atan2(p2['position']['y'] - p1['position']['y'], p2['position']['x'] - p1['position']['x']);
}

export default function Model(props) {
  let kp;
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../model.glb')

  console.log(nodes.Ch36.skeleton)
  

  useFrame((state, delta) => {
    const coords = {x: 10, y: 10}
    kp = props.getJoints()
    console.log(kp)
    //console.log(getAngle(kp[5], kp[7]))
    
    nodes.Ch36.skeleton.bones[7].rotation.y = - getAngle(kp[5], kp[7])
    nodes.Ch36.skeleton.bones[31].rotation.y = - getAngle(kp[6], kp[8]) - 3.14
    nodes.Ch36.skeleton.bones[9].rotation.x = 1.6
    //moveJoint(nodes.Ch36.skeleton.bones[0], coords)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorig1Hips} />
        <skinnedMesh geometry={nodes.Ch36.geometry} material={materials.Ch36_Body} skeleton={nodes.Ch36.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../model.glb')
