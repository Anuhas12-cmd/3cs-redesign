'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { useRef, useState, useEffect, useCallback, Component } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
function Sculpture() {const group=useRef<THREE.Group>(null);useFrame((state,delta)=>{if(!group.current)return;group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,state.pointer.x*.22+Math.sin(state.clock.elapsedTime*.13)*.1,2,delta);group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,-.14+state.pointer.y*.12,2,delta);group.current.position.y=Math.sin(state.clock.elapsedTime*.5)*.07});return <group ref={group} rotation={[-.14,0,-.35]}><mesh rotation={[Math.PI*.37,0,0]}><torusGeometry args={[1.65,.45,48,128]}/><meshStandardMaterial color="#b6b6a9" metalness={1} roughness={.18}/></mesh><mesh rotation={[-.32,1.2,.3]}><torusGeometry args={[1.65,.45,48,128]}/><meshStandardMaterial color="#c4c6b6" metalness={1} roughness={.19}/></mesh><mesh rotation={[.6,-.7,1.2]}><torusGeometry args={[1.65,.21,32,128]}/><meshStandardMaterial color="#def260" metalness={.78} roughness={.24}/></mesh></group>}
class SceneBoundary extends Component<{children:React.ReactNode;onError:()=>void},{failed:boolean}> {state={failed:false};static getDerivedStateFromError(){return {failed:true}}componentDidCatch(){this.props.onError()}render(){return this.state.failed?null:this.props.children}}

/** Show WebGL only after its first frame; context loss exposes the permanent CSS orbit. */
function FrameHealth({onReady,onLost}:{onReady:()=>void;onLost:()=>void}) {
 const gl=useThree(state=>state.gl);
 const reported=useRef(false);
 const frame=useRef(0);
 useFrame(()=>{
  if(reported.current || gl.getContext().isContextLost()) return;
  reported.current=true;
  frame.current=requestAnimationFrame(onReady);
 });
 useEffect(()=>{
  const canvas=gl.domElement;
  canvas.addEventListener('webglcontextlost',onLost);
  return()=>{canvas.removeEventListener('webglcontextlost',onLost);cancelAnimationFrame(frame.current);reported.current=false};
 },[gl,onLost]);
 return null;
}
export default function HeroScene(){
 const reduced=useReducedMotion();
 const [enabled,setEnabled]=useState(false);
 const [compact,setCompact]=useState(false);
 const [ready,setReady]=useState(false);
 const [visible,setVisible]=useState(true);
 const holder=useRef<HTMLDivElement>(null);
 const onReady=useCallback(()=>setReady(true),[]);
 const onLost=useCallback(()=>{setReady(false);setEnabled(false)},[]);
 useEffect(()=>{
  const mobile=window.matchMedia('(max-width: 600px)');
  const update=()=>setCompact(mobile.matches);
  update();
  setEnabled(true);
  mobile.addEventListener('change',update);
  const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting));
  if(holder.current)observer?.observe(holder.current);
  return()=>{mobile.removeEventListener('change',update);observer?.disconnect()};
 },[]);
 return <div ref={holder} className="sculpture sculpture-webgl" data-ready={ready && enabled && !reduced} aria-hidden="true">
  {enabled&&!reduced&&<SceneBoundary onError={onLost}><Canvas dpr={compact?1:[1,1.5]} camera={{position:[0,0,7.8],fov:40}} frameloop={visible?'always':'never'} gl={{alpha:true,antialias:true,powerPreference:'low-power'}}>
   <ambientLight intensity={.5}/><directionalLight position={[2,5,4]} intensity={3}/><Sculpture/>
   <Environment resolution={compact?64:128}><Lightformer intensity={5} position={[-4,3,3]} scale={[3,8,1]}/><Lightformer intensity={4} position={[4,0,3]} scale={[2,7,1]}/><Lightformer color="#edff85" intensity={2} position={[0,-4,2]} scale={[6,2,1]}/></Environment>
   <FrameHealth onReady={onReady} onLost={onLost}/>
  </Canvas></SceneBoundary>}
 </div>
}
