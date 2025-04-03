/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Nick Slough (https://sketchfab.com/BeholderDesign)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vendels-workshop-e1594640fe8f44569d0e5824f1074eb9
Title: Vendel's Workshop
*/

import { useGLTF } from '@react-three/drei'

const ThreeD = (props) => {
        const { nodes, materials } = useGLTF('/models/vendels_workshop.glb')
        return (
            <group {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_2.geometry}
                                material={materials.mat5}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_3.geometry}
                                material={materials.mat8}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_4.geometry}
                                material={materials.mat1}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_5.geometry}
                                material={materials.mat10}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_6.geometry}
                                material={materials.mat11}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_7.geometry}
                                material={materials.mat12}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_8.geometry}
                                material={materials.mat13}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_9.geometry}
                                material={materials.mat14}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_10.geometry}
                                material={materials.mat15}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_11.geometry}
                                material={materials.mat16}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_12.geometry}
                                material={materials.mat16}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_13.geometry}
                                material={materials.mat2}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_14.geometry}
                                material={materials.mat17}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_15.geometry}
                                material={materials.mat17}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_16.geometry}
                                material={materials.mat17}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_17.geometry}
                                material={materials.mat18}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_18.geometry}
                                material={materials.mat18}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_19.geometry}
                                material={materials.mat19}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_20.geometry}
                                material={materials.mat20}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_21.geometry}
                                material={materials.mat20}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_22.geometry}
                                material={materials.mat21}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_23.geometry}
                                material={materials.mat21}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_24.geometry}
                                material={materials.mat22}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_25.geometry}
                                material={materials.mat22}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_26.geometry}
                                material={materials.mat23}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_27.geometry}
                                material={materials.mat24}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_28.geometry}
                                material={materials.mat24}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_29.geometry}
                                material={materials.mat4}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_30.geometry}
                                material={materials.mat7}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_31.geometry}
                                material={materials.mat9}
                            />
                    </group>
            </group>
        )
}

useGLTF.preload('/models/vendels_workshop.glb')

export default ThreeD;