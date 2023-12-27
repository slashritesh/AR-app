import { useGLTF } from "@react-three/drei";



export function Model(props) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-1/model.gltf"
  );
  return <primitive object={scene} {...props} />;
}
