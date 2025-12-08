import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'

function RotatingModel({ url }) {
  const { scene } = useGLTF(url)
  const ref = useRef()

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Center>
      <primitive ref={ref} object={scene.clone()} />
    </Center>
  )
}

export default function ModelViewer({ glbUrl }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{
        antialias: true,
        powerPreference: 'low-power',
        failIfMajorPerformanceCaveat: false,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} />
      <RotatingModel url={glbUrl} />
    </Canvas>
  )
}
