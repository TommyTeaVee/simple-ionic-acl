"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6685],{6685:(L,c,h)=>{h.r(c),h.d(c,{KEYBOARD_DID_CLOSE:()=>b,KEYBOARD_DID_OPEN:()=>p,copyVisualViewport:()=>i,keyboardDidClose:()=>n,keyboardDidOpen:()=>y,keyboardDidResize:()=>D,resetKeyboardAssist:()=>u,setKeyboardClose:()=>d,setKeyboardOpen:()=>a,startKeyboardAssist:()=>g,trackViewportChanges:()=>f});const p="ionKeyboardDidShow",b="ionKeyboardDidHide";let r={},t={},o=!1;const u=()=>{r={},t={},o=!1},g=e=>{E(e),e.visualViewport&&(t=i(e.visualViewport),e.visualViewport.onresize=()=>{f(e),y()||D(e)?a(e):n(e)&&d(e)})},E=e=>{e.addEventListener("keyboardDidShow",s=>a(e,s)),e.addEventListener("keyboardDidHide",()=>d(e))},a=(e,s)=>{K(e,s),o=!0},d=e=>{O(e),o=!1},y=()=>!o&&r.width===t.width&&(r.height-t.height)*t.scale>150,D=e=>o&&!n(e),n=e=>o&&t.height===e.innerHeight,K=(e,s)=>{const C=new CustomEvent(p,{detail:{keyboardHeight:s?s.keyboardHeight:e.innerHeight-t.height}});e.dispatchEvent(C)},O=e=>{const s=new CustomEvent(b);e.dispatchEvent(s)},f=e=>{r=Object.assign({},t),t=i(e.visualViewport)},i=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);