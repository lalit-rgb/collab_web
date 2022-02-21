import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import randomWord from 'random-words'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// var ci =0;
// const Colors = () => {
//   const c = ['pink', 'black', 'purple', 'red']
//   // const c = ['#293241','#3d5a80', '#98c1d9']
//   var d;
//   if(ci <= c.length){
//     // var i = Math.floor((Math.random()*c.length) + 1)
//     d = c[ci];
//     ci= ci+1
//   }
//   else{
//     ci=0;
//     // var i = Math.floor((Math.random()*c.length) + 1)
//     d = c[ci];
//   }
//   return d;
// }

var ri = 0;
const rand = () => {
  const a = ['Art', 'Collaboration', 'Artist', 'Better', 'Support', 'Grow', 'Platform', 'Ideas', 'Creator', 'Own']
  // var i = Math.floor((Math.random() * a.length) +1) Q3 charectaristic of data ware house
  // console.log(a.length); == 11 Q1 application of data warehouse and datamining Q2 what are the fuctions to manipulate data in exel.
  var b;
  if( ri < a.length){
    b= a[ri];
    ri = ri+1;
  }else{
    ri = 0;
    b=a[ri];
  }

  return b;
}

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? 'black' : "rgb(18,27,39)"), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) {temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), rand()])}
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

const Art3d = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  return (
    <div >
      <Canvas style={{width: windowDimensions.height, height: windowDimensions.height-72}} dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#f5f5f5', 0, 80]} />
        <Cloud count={9} radius={20} />
        <TrackballControls />
      </Canvas>
    </div>
  )
}

export default Art3d;
