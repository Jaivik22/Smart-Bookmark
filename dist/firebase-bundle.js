const zc=()=>{};var ho={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Hc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,l=u?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,g=o>>2,I=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,S=f&63;h||(S=64,u||(w=64)),r.push(e[g],e[I],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ta(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Hc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||I==null)throw new Gc;const w=o<<2|l>>4;if(r.push(w),f!==64){const S=l<<4&240|f>>2;if(r.push(S),I!==64){const b=f<<6&192|I;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kc=function(n){const t=Ta(n);return va.encodeByteArray(t,!0)},tr=function(n){return Kc(n).replace(/\./g,"")},Qc=function(n){try{return va.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=()=>Wc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof ho>"u")return;const n=ho.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qc(n[1]);return t&&JSON.parse(t)},Vs=()=>{try{return zc()||Xc()||Yc()||Jc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zc=n=>{var t,e;return(e=(t=Vs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},tl=n=>{const t=Zc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ia=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){return n.endsWith(".cloudworkstations.dev")}async function nl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tr(JSON.stringify(e)),tr(JSON.stringify(u)),""].join(".")}const sn={};function sl(){const n={prod:[],emulator:[]};for(const t of Object.keys(sn))sn[t]?n.emulator.push(t):n.prod.push(t);return n}function il(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let fo=!1;function ol(n,t){if(typeof window>"u"||typeof document>"u"||!bs(window.location.host)||sn[n]===t||sn[n]||fo)return;sn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=sl().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{fo=!0,u()},w}function g(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function I(){const w=il(r),S=e("text"),b=document.getElementById(S)||document.createElement("span"),k=e("learnmore"),D=document.getElementById(k)||document.createElement("a"),G=e("preprendIcon"),B=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;l(z),g(D,k);const tt=f();h(B,G),z.append(B,b,D,tt),document.body.appendChild(z)}o?(b.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ul(){var n;const t=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cl(){return!ul()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function hl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="FirebaseError";class Ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=dl,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?fl(o,r):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new Ne(i,l,r)}}function fl(n,t){return n.replace(ml,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ml=/\{\$([^}]+)}/g;function ln(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(mo(o)&&mo(u)){if(!ln(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function mo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){return n&&n._delegate?n._delegate:n}class dn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new el;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_l(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=oe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oe){return this.instances.has(t)}getOptions(t=oe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oe){return this.component?this.component.multipleInstances?t:oe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gl(n){return n===oe?void 0:n}function _l(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new pl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const El={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Tl=$.INFO,vl={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Il=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=vl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wa{constructor(t){this.name=t,this._logLevel=Tl,this._logHandler=Il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?El[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Al=(n,t)=>t.some(e=>n instanceof e);let po,go;function wl(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rl(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ra=new WeakMap,us=new WeakMap,Ca=new WeakMap,ts=new WeakMap,Ds=new WeakMap;function Cl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ht(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Ra.set(e,n)}).catch(()=>{}),Ds.set(t,n),t}function Pl(n){if(us.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});us.set(n,t)}let cs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return us.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ca.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Sl(n){cs=n(cs)}function Vl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(es(this),t,...e);return Ca.set(r,t.sort?t.sort():[t]),Ht(r)}:Rl().includes(n)?function(...t){return n.apply(es(this),t),Ht(Ra.get(this))}:function(...t){return Ht(n.apply(es(this),t))}}function bl(n){return typeof n=="function"?Vl(n):(n instanceof IDBTransaction&&Pl(n),Al(n,wl())?new Proxy(n,cs):n)}function Ht(n){if(n instanceof IDBRequest)return Cl(n);if(ts.has(n))return ts.get(n);const t=bl(n);return t!==n&&(ts.set(n,t),Ds.set(t,n)),t}const es=n=>Ds.get(n);function Dl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),l=Ht(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Ht(u.result),h.oldVersion,h.newVersion,Ht(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Nl=["get","getKey","getAll","getAllKeys","count"],kl=["put","add","delete","clear"],ns=new Map;function _o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ns.get(t))return ns.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=kl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Nl.includes(e)))return;const o=async function(u,...l){const h=this.transaction(u,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&h.done]))[0]};return ns.set(t,o),o}Sl(n=>({...n,get:(t,e,r)=>_o(t,e)||n.get(t,e,r),has:(t,e)=>!!_o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ol(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ol(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ls="@firebase/app",yo="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new wa("@firebase/app"),Ml="@firebase/app-compat",Ll="@firebase/analytics-compat",Fl="@firebase/analytics",Ul="@firebase/app-check-compat",Bl="@firebase/app-check",jl="@firebase/auth",ql="@firebase/auth-compat",$l="@firebase/database",zl="@firebase/data-connect",Hl="@firebase/database-compat",Gl="@firebase/functions",Kl="@firebase/functions-compat",Ql="@firebase/installations",Wl="@firebase/installations-compat",Xl="@firebase/messaging",Yl="@firebase/messaging-compat",Jl="@firebase/performance",Zl="@firebase/performance-compat",th="@firebase/remote-config",eh="@firebase/remote-config-compat",nh="@firebase/storage",rh="@firebase/storage-compat",sh="@firebase/firestore",ih="@firebase/ai",oh="@firebase/firestore-compat",ah="firebase",uh="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]",ch={[ls]:"fire-core",[Ml]:"fire-core-compat",[Fl]:"fire-analytics",[Ll]:"fire-analytics-compat",[Bl]:"fire-app-check",[Ul]:"fire-app-check-compat",[jl]:"fire-auth",[ql]:"fire-auth-compat",[$l]:"fire-rtdb",[zl]:"fire-data-connect",[Hl]:"fire-rtdb-compat",[Gl]:"fire-fn",[Kl]:"fire-fn-compat",[Ql]:"fire-iid",[Wl]:"fire-iid-compat",[Xl]:"fire-fcm",[Yl]:"fire-fcm-compat",[Jl]:"fire-perf",[Zl]:"fire-perf-compat",[th]:"fire-rc",[eh]:"fire-rc-compat",[nh]:"fire-gcs",[rh]:"fire-gcs-compat",[sh]:"fire-fst",[oh]:"fire-fst-compat",[ih]:"fire-vertex","fire-js":"fire-js",[ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map,lh=new Map,ds=new Map;function Eo(n,t){try{n.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function nr(n){const t=n.name;if(ds.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,n);for(const e of er.values())Eo(e,n);for(const e of lh.values())Eo(e,n);return!0}function hh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function dh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Aa("app","Firebase",fh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=uh;function Pa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hs,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=Ia()),!e)throw Gt.create("no-options");const o=er.get(i);if(o){if(ln(e,o.options)&&ln(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const u=new yl(i);for(const h of ds.values())u.addComponent(h);const l=new mh(e,r,u);return er.set(i,l),l}function gh(n=hs){const t=er.get(n);if(!t&&n===hs&&Ia())return Pa();if(!t)throw Gt.create("no-app",{appName:n});return t}function Ie(n,t,e){var r;let i=(r=ch[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}nr(new dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="firebase-heartbeat-database",yh=1,fn="firebase-heartbeat-store";let rs=null;function Sa(){return rs||(rs=Dl(_h,yh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),rs}async function Eh(n){try{const e=(await Sa()).transaction(fn),r=await e.objectStore(fn).get(Va(n));return await e.done,r}catch(t){if(t instanceof Ne)Lt.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(e.message)}}}async function To(n,t){try{const r=(await Sa()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,Va(n)),await r.done}catch(e){if(e instanceof Ne)Lt.warn(e.message);else{const r=Gt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(r.message)}}}function Va(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=1024,vh=30;class Ih{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>vh){const u=Rh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:r,unsentEntries:i}=Ah(this._heartbeatsCache.heartbeats),o=tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lt.warn(e),""}}}function vo(){return new Date().toISOString().substring(0,10)}function Ah(n,t=Th){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Io(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Io(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class wh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Eh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return To(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return To(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Io(n){return tr(JSON.stringify({version:2,heartbeats:n})).length}function Rh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){nr(new dn("platform-logger",t=>new xl(t),"PRIVATE")),nr(new dn("heartbeat",t=>new Ih(t),"PRIVATE")),Ie(ls,yo,n),Ie(ls,yo,"esm2017"),Ie("fire-js","")}Ch("");var Ph="firebase",Sh="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(Ph,Sh,"app");var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,ba;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,A){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var A=T.g[3],p=m+(A^_&(E^A))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[2]+606105819&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[6]+2821735955&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[10]+4294925233&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[14]+2792965006&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^A&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[11]+643717713&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[15]+3634488961&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[3]+4107603335&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[7]+1735328473&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^A)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[11]+1839030562&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[7]+4139469664&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[3]+3572445317&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[15]+530742520&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~A))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[14]+2878612391&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[10]+4293915773&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[6]+2734768916&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[2]+718787259&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=_;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(y[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<m;)if(y[E++]=T[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var A=T[E]|0;y&&A==m||(_[E]=A,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return D(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=I,E=0;E<T.length;E+=8){var A=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var I=h(0),w=h(1),S=h(16777216);n=u.prototype,n.m=function(){if(k(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(k(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=tt(_,m).g;_=G(_,E.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,b(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=G(this,T),k(T)?-1:b(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(w)}n.abs=function(){return k(this)?D(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var A=y+(this.i(E)&65535)+(T.i(E)&65535),p=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,A&=65535,p&=65535,_[E]=p<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(D(m))}n.j=function(T){if(b(this)||b(T))return I;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var A=this.i(y)>>>16,p=this.i(y)&65535,kt=T.i(E)>>>16,Le=T.i(E)&65535;_[2*y+2*E]+=p*Le,B(_,2*y+2*E),_[2*y+2*E+1]+=A*Le,B(_,2*y+2*E+1),_[2*y+2*E+1]+=p*kt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=A*kt,B(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function tt(T,m){if(b(m))throw Error("division by zero");if(b(T))return new z(I,I);if(k(T))return m=tt(D(T),m),new z(D(m.g),D(m.h));if(k(m))return m=tt(T,D(m)),new z(D(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=m;0>=y.l(T);)_=Nt(_),y=Nt(y);var E=ot(_,1),A=ot(y,1);for(y=ot(y,2),_=ot(_,2);!b(y);){var p=A.add(y);0>=p.l(T)&&(E=E.add(_),A=p),y=ot(y,1),_=ot(_,1)}return m=G(T,E.j(m)),new z(E,m)}for(E=I;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),p=A.j(m);k(p)||0<p.l(T);)_-=y,A=f(_),p=A.j(m);b(A)&&(A=w),E=E.add(A),T=G(T,p)}return new z(E,T)}n.A=function(T){return tt(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Nt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],A=0;A<y;A++)E[A]=0<m?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ba=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,Kt=u}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});var $n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Da,tn,Na,Qn,fs,ka,xa,Oa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $n=="object"&&$n];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var v=s[d];if(!(v in c))break t;c=c[v]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,v={next:function(){if(!d&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,c){return s.call.apply(s.bind,arguments)}function I(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,d),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function w(s,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,w.apply(null,arguments)}function S(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function b(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,v,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return a.prototype[v].apply(d,V)}}function k(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function D(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const v=s.length||0,R=d.length||0;s.length=v+R;for(let V=0;V<R;V++)s[v+V]=d[V]}else s.push(d)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function tt(s){return tt[" "](s),s}tt[" "]=function(){};var Nt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ot(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function T(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(c in d)s[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function A(s){l.setTimeout(()=>{throw s},0)}function p(){var s=br;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,c){const d=Le.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Le=new G(()=>new cc,s=>s.reset());class cc{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,br=new kt,hi=()=>{const s=l.Promise.resolve(void 0);Fe=()=>{s.then(lc)}};var lc=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(c){A(c)}var a=Le;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ue=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var hc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s}();function Be(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Nt){t:{try{tt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:dc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Be.aa.h.call(this)}}b(Be,ht);var dc={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),fc=0;function mc(s,a,c,d,v){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=v,this.key=++fc,this.da=this.fa=!1}function Rn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Cn(s){this.src=s,this.g={},this.h=0}Cn.prototype.add=function(s,a,c,d,v){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=Nr(s,a,d,v);return-1<V?(a=s[V],c||(a.fa=!1)):(a=new mc(a,this.src,R,!!d,v),a.fa=c,s.push(a)),a};function Dr(s,a){var c=a.type;if(c in s.g){var d=s.g[c],v=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=v)&&Array.prototype.splice.call(d,v,1),R&&(Rn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Nr(s,a,c,d){for(var v=0;v<s.length;++v){var R=s[v];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==d)return v}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),xr={};function di(s,a,c,d,v){if(Array.isArray(a)){for(var R=0;R<a.length;R++)di(s,a[R],c,d,v);return null}return c=pi(c),s&&s[wn]?s.K(a,c,f(d)?!!d.capture:!1,v):pc(s,a,c,!1,d,v)}function pc(s,a,c,d,v,R){if(!a)throw Error("Invalid event type");var V=f(v)?!!v.capture:!!v,Q=Mr(s);if(Q||(s[kr]=Q=new Cn(s)),c=Q.add(a,c,d,V,R),c.proxy)return c;if(d=gc(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)hc||(v=V),v===void 0&&(v=!1),s.addEventListener(a.toString(),d,v);else if(s.attachEvent)s.attachEvent(mi(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gc(){function s(c){return a.call(s.src,s.listener,c)}const a=_c;return s}function fi(s,a,c,d,v){if(Array.isArray(a))for(var R=0;R<a.length;R++)fi(s,a[R],c,d,v);else d=f(d)?!!d.capture:!!d,c=pi(c),s&&s[wn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=Nr(R,c,d,v),-1<c&&(Rn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=Mr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Nr(a,c,d,v)),(c=-1<s?a[s]:null)&&Or(c))}function Or(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[wn])Dr(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(mi(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=Mr(a))?(Dr(c,s),c.h==0&&(c.src=null,a[kr]=null)):Rn(s)}}}function mi(s){return s in xr?xr[s]:xr[s]="on"+s}function _c(s,a){if(s.da)s=!0;else{a=new Be(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&Or(s),s=c.call(d,a)}return s}function Mr(s){return s=s[kr],s instanceof Cn?s:null}var Lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(s){return typeof s=="function"?s:(s[Lr]||(s[Lr]=function(a){return s.handleEvent(a)}),s[Lr])}function dt(){Bt.call(this),this.i=new Cn(this),this.M=this,this.F=null}b(dt,Bt),dt.prototype[wn]=!0,dt.prototype.removeEventListener=function(s,a,c,d){fi(this,s,a,c,d)};function yt(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(d,s),y(a,v)}if(v=!0,c)for(var R=c.length-1;0<=R;R--){var V=a.g=c[R];v=Pn(V,d,!0,a)&&v}if(V=a.g=s,v=Pn(V,d,!0,a)&&v,v=Pn(V,d,!1,a)&&v,c)for(R=0;R<c.length;R++)V=a.g=c[R],v=Pn(V,d,!1,a)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)Rn(c[d]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},dt.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function Pn(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,R=0;R<a.length;++R){var V=a[R];if(V&&!V.da&&V.capture==c){var Q=V.listener,at=V.ha||V.src;V.fa&&Dr(s.i,V),v=Q.call(at,d)!==!1&&v}}return v&&!d.defaultPrevented}function gi(s,a,c){if(typeof s=="function")c&&(s=w(s,c));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function _i(s){s.g=gi(()=>{s.g=null,s.i&&(s.i=!1,_i(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class yc extends Bt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(s){Bt.call(this),this.h=s,this.g={}}b(je,Bt);var yi=[];function Ei(s){ot(s.g,function(a,c){this.g.hasOwnProperty(c)&&Or(a)},s),s.g={}}je.prototype.N=function(){je.aa.N.call(this),Ei(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=l.JSON.stringify,Ec=l.JSON.parse,Tc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Ur(){}Ur.prototype.h=null;function Ti(s){return s.h||(s.h=s.i())}function vi(){}var qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ht.call(this,"d")}b(Br,ht);function jr(){ht.call(this,"c")}b(jr,ht);var ne={},Ii=null;function Sn(){return Ii=Ii||new dt}ne.La="serverreachability";function Ai(s){ht.call(this,ne.La,s)}b(Ai,ht);function $e(s){const a=Sn();yt(a,new Ai(a))}ne.STAT_EVENT="statevent";function wi(s,a){ht.call(this,ne.STAT_EVENT,s),this.stat=a}b(wi,ht);function Et(s){const a=Sn();yt(a,new wi(a,s))}ne.Ma="timingevent";function Ri(s,a){ht.call(this,ne.Ma,s),this.size=a}b(Ri,ht);function ze(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function He(){this.g=!0}He.prototype.xa=function(){this.g=!1};function vc(s,a,c,d,v,R){s.info(function(){if(s.g)if(R)for(var V="",Q=R.split("&"),at=0;at<Q.length;at++){var H=Q[at].split("=");if(1<H.length){var ft=H[0];H=H[1];var mt=ft.split("_");V=2<=mt.length&&mt[1]=="type"?V+(ft+"="+H+"&"):V+(ft+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+a+`
`+c+`
`+V})}function Ic(s,a,c,d,v,R,V){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+a+`
`+c+`
`+R+" "+V})}function me(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+wc(s,c)+(d?" "+d:"")})}function Ac(s,a){s.info(function(){return"TIMEOUT: "+a})}He.prototype.info=function(){};function wc(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var v=d[1];if(Array.isArray(v)&&!(1>v.length)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return Fr(c)}catch{return a}}var Vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qr;function bn(){}b(bn,Ur),bn.prototype.g=function(){return new XMLHttpRequest},bn.prototype.i=function(){return{}},qr=new bn;function jt(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pi}function Pi(){this.i=null,this.g="",this.h=!1}var Si={},$r={};function zr(s,a,c){s.L=1,s.v=xn(xt(a)),s.m=c,s.P=!0,Vi(s,null)}function Vi(s,a){s.F=Date.now(),Dn(s),s.A=xt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),$i(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Pi,s.g=ao(s.j,c?a:null,!s.m),0<s.O&&(s.M=new yc(w(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(yi[0]=v.toString()),v=yi);for(var R=0;R<v.length;R++){var V=di(c,v[R],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),$e(),vc(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ot(s)==3?a.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const _e=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Xi(this.g)))){this.J||mt!=4||a==7||(a==8||0>=_e?$e(3):$e(2)),Hr(this);var c=this.g.Z();this.X=c;e:if(bi(this)){var d=Xi(this.g);s="";var v=d.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Ge(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==v-1)});d.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,Ic(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var H=Q;break e}}H=null}if(c=H)me(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gr(this,c);else{this.o=!1,this.s=3,Et(12),re(this),Ge(this);break t}}if(this.P){c=!0;let wt;for(;!this.J&&this.C<V.length;)if(wt=Rc(this,V),wt==$r){mt==4&&(this.s=4,Et(14),c=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Si){this.s=4,Et(15),me(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else me(this.i,this.l,wt,null),Gr(this,wt);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)me(this.i,this.l,V,"[Invalid Chunked Response]"),re(this),Ge(this);else if(0<V.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Jr(ft),ft.M=!0,Et(11))}}else me(this.i,this.l,V,null),Gr(this,V);mt==4&&re(this),this.o&&!this.J&&(mt==4?ro(this.j,this):(this.o=!1,Dn(this)))}else qc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),re(this),Ge(this)}}}catch{}finally{}};function bi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Rc(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?$r:(c=Number(a.substring(c,d)),isNaN(c)?Si:(d+=1,d+c>a.length?$r:(a=a.slice(d,d+c),s.C=d+c,a)))}jt.prototype.cancel=function(){this.J=!0,re(this)};function Dn(s){s.S=Date.now()+s.I,Di(s,s.I)}function Di(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(w(s.ba,s),a)}function Hr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ac(this.i,this.A),this.L!=2&&($e(),Et(17)),re(this),this.s=2,Ge(this)):Di(this,this.S-s)};function Ge(s){s.j.G==0||s.J||ro(s.j,s)}function re(s){Hr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ei(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Gr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Kr(c.h,s))){if(!s.K&&Kr(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Bn(c),Fn(c);else break t;Yr(c),Et(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=ze(w(c.Za,c),6e3));if(1>=xi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((s.K||c.g==s)&&Bn(c),!B(a))for(v=c.Da.g.parse(a),a=0;a<v.length;a++){let H=v[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const ft=H[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=H[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const _e=H[5];_e!=null&&typeof _e=="number"&&0<_e&&(d=1.5*_e,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const wt=s.g;if(wt){const qn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qn){var R=d.h;R.g||qn.indexOf("spdy")==-1&&qn.indexOf("quic")==-1&&qn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Qr(R,R.h),R.h=null))}if(d.D){const Zr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zr&&(d.ya=Zr,W(d.I,d.D,Zr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=s;if(d.qa=oo(d,d.J?d.ia:null,d.W),V.K){Oi(d.h,V);var Q=V,at=d.L;at&&(Q.I=at),Q.B&&(Hr(Q),Dn(Q)),d.g=V}else eo(d);0<c.i.length&&Un(c)}else H[0]!="stop"&&H[0]!="close"||ie(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ie(c,7):Xr(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}$e(4)}catch{}}var Cc=class{constructor(s,a){this.g=s,this.map=a}};function Ni(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ki(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function xi(s){return s.h?1:s.g?s.g.size:0}function Kr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Qr(s,a){s.g?s.g.add(a):s.h=a}function Oi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ni.prototype.cancel=function(){if(this.i=Mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Mi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return k(s.i)}function Pc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function Sc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function Li(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Sc(s),d=Pc(s),v=d.length,R=0;R<v;R++)a.call(void 0,d[R],c&&c[R],s)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vc(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),v=null;if(0<=d){var R=s[c].substring(0,d);v=s[c].substring(d+1)}else R=s[c];a(R,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,Nn(this,s.j),this.o=s.o,this.g=s.g,kn(this,s.s),this.l=s.l;var a=s.i,c=new We;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ui(this,c),this.m=s.m}else s&&(a=String(s).match(Fi))?(this.h=!1,Nn(this,a[1]||"",!0),this.o=Ke(a[2]||""),this.g=Ke(a[3]||"",!0),kn(this,a[4]),this.l=Ke(a[5]||"",!0),Ui(this,a[6]||"",!0),this.m=Ke(a[7]||"")):(this.h=!1,this.i=new We(null,this.h))}se.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Qe(a,Bi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Qe(a,Bi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Qe(c,c.charAt(0)=="/"?Nc:Dc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Qe(c,xc)),s.join("")};function xt(s){return new se(s)}function Nn(s,a,c){s.j=c?Ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function kn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ui(s,a,c){a instanceof We?(s.i=a,Oc(s.i,s.h)):(c||(a=Qe(a,kc)),s.i=new We(a,s.h))}function W(s,a,c){s.i.set(a,c)}function xn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,bc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function bc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Bi=/[#\/\?@]/g,Dc=/[#\?:]/g,Nc=/[#\?]/g,kc=/[#\?@]/g,xc=/#/g;function We(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Vc(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=We.prototype,n.add=function(s,a){qt(this),this.i=null,s=pe(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function ji(s,a){qt(s),a=pe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function qi(s,a){return qt(s),a=pe(s,a),s.g.has(a)}n.forEach=function(s,a){qt(this),this.g.forEach(function(c,d){c.forEach(function(v){s.call(a,v,d,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const v=s[d];for(let R=0;R<v.length;R++)c.push(a[d])}return c},n.V=function(s){qt(this);let a=[];if(typeof s=="string")qi(this,s)&&(a=a.concat(this.g.get(pe(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return qt(this),this.i=null,s=pe(this,s),qi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function $i(s,a,c){ji(s,a),0<c.length&&(s.i=null,s.g.set(pe(s,a),k(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const R=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var v=R;V[d]!==""&&(v+="="+encodeURIComponent(String(V[d]))),s.push(v)}}return this.i=s.join("&")};function pe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Oc(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(c,d){var v=d.toLowerCase();d!=v&&(ji(this,d),$i(this,v,c))},s)),s.j=a}function Mc(s,a){const c=new He;if(l.Image){const d=new Image;d.onload=S($t,c,"TestLoadImage: loaded",!0,a,d),d.onerror=S($t,c,"TestLoadImage: error",!1,a,d),d.onabort=S($t,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=S($t,c,"TestLoadImage: timeout",!1,a,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Lc(s,a){const c=new He,d=new AbortController,v=setTimeout(()=>{d.abort(),$t(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(v),R.ok?$t(c,"TestPingServer: ok",!0,a):$t(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),$t(c,"TestPingServer: error",!1,a)})}function $t(s,a,c,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(c)}catch{}}function Fc(){this.g=new Tc}function Uc(s,a,c){const d=c||"";try{Li(s,function(v,R){let V=v;f(v)&&(V=Fr(v)),a.push(d+R+"="+encodeURIComponent(V))})}catch(v){throw a.push(d+"type="+encodeURIComponent("_badmap")),v}}function On(s){this.l=s.Ub||null,this.j=s.eb||!1}b(On,Ur),On.prototype.g=function(){return new Mn(this.l,this.j)},On.prototype.i=function(s){return function(){return s}}({});function Mn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Mn,dt),n=Mn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ye(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function zi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Xe(this):Ye(this),this.readyState==3&&zi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},n.Qa=function(s){this.g&&(this.response=s,Xe(this))},n.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ye(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Hi(s){let a="";return ot(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function Wr(s,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Hi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):W(s,a,c))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(J,dt);var Bc=/^https?$/i,jc=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?Ti(this.o):Ti(qr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Gi(this,R);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)c.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),v=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jc,a,void 0))||d||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Gi(this,R)}};function Gi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ki(s),Ln(s)}function Ki(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),Ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ln(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qi(this):this.bb())},n.bb=function(){Qi(this)};function Qi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)gi(s.Ea,0,s);else if(yt(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=V===0){var v=String(s.D).match(Fi)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),d=!Bc.test(v?v.toLowerCase():"")}c=d}if(c)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var R=2<Ot(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Ki(s)}}finally{Ln(s)}}}}function Ln(s,a){if(s.g){Wi(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{c.onreadystatechange=d}catch{}}}function Wi(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ec(a)}};function Xi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function qc(s){const a={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(B(s[d]))continue;var c=E(s[d]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[v]||[];a[v]=R,R.push(c)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Yi(s){this.Aa=0,this.i=[],this.j=new He,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(s&&s.concurrentRequestLimit),this.Da=new Fc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yi.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){Et(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=oo(this,null,this.W),Un(this)};function Xr(s){if(Ji(s),s.G==3){var a=s.U++,c=xt(s.I);if(W(c,"SID",s.K),W(c,"RID",a),W(c,"TYPE","terminate"),Ze(s,c),a=new jt(s,s.j,a),a.L=2,a.v=xn(xt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=ao(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Dn(a)}io(s)}function Fn(s){s.g&&(Jr(s),s.g.cancel(),s.g=null)}function Ji(s){Fn(s),s.u&&(l.clearTimeout(s.u),s.u=null),Bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Un(s){if(!ki(s.h)&&!s.s){s.s=!0;var a=s.Ga;Fe||hi(),Ue||(Fe(),Ue=!0),br.add(a,s),s.B=0}}function $c(s,a){return xi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(w(s.Ga,s,a),so(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new jt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(v.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=to(this,v,a),c=xt(this.I),W(c,"RID",s),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Ze(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Hi(R)))+"&"+a:this.m&&Wr(c,this.m,R)),Qr(this.h,v),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",a),W(c,"SID","null"),v.T=!0,zr(v,c,null)):zr(v,c,a),this.G=2}}else this.G==3&&(s?Zi(this,s):this.i.length==0||ki(this.h)||Zi(this))};function Zi(s,a){var c;a?c=a.l:c=s.U++;const d=xt(s.I);W(d,"SID",s.K),W(d,"RID",c),W(d,"AID",s.T),Ze(s,d),s.m&&s.o&&Wr(d,s.m,s.o),c=new jt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=to(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Qr(s.h,c),zr(c,d,a)}function Ze(s,a){s.H&&ot(s.H,function(c,d){W(a,d,c)}),s.l&&Li({},function(c,d){W(a,d,c)})}function to(s,a,c){c=Math.min(s.i.length,c);var d=s.l?w(s.l.Na,s.l,s):null;t:{var v=s.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=v[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let Q=!0;for(let at=0;at<c;at++){let H=v[at].g;const ft=v[at].map;if(H-=R,0>H)R=Math.max(0,v[at].g-100),Q=!1;else try{Uc(ft,V,"req"+H+"_")}catch{d&&d(ft)}}if(Q){d=V.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,d}function eo(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Fe||hi(),Ue||(Fe(),Ue=!0),br.add(a,s),s.v=0}}function Yr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(w(s.Fa,s),so(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,no(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Fn(this),no(this))};function Jr(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function no(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=xt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ze(s,a),s.m&&s.o&&Wr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=xn(xt(a)),c.m=null,c.P=!0,Vi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Fn(this),Yr(this),Et(19))};function Bn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ro(s,a){var c=null;if(s.g==a){Bn(s),Jr(s),s.g=null;var d=2}else if(Kr(s.h,a))c=a.D,Oi(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;d=Sn(),yt(d,new Ri(d,c)),Un(s)}else eo(s);else if(v=a.s,v==3||v==0&&0<a.X||!(d==1&&$c(s,a)||d==2&&Yr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),v){case 1:ie(s,5);break;case 4:ie(s,10);break;case 3:ie(s,6);break;default:ie(s,2)}}}function so(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function ie(s,a){if(s.j.info("Error code "+a),a==2){var c=w(s.fb,s),d=s.Xa;const v=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Nn(d,"https"),xn(d),v?Mc(d.toString(),c):Lc(d.toString(),c)}else Et(2);s.G=0,s.l&&s.l.sa(a),io(s),Ji(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function io(s){if(s.G=0,s.ka=[],s.l){const a=Mi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function oo(s,a,c){var d=c instanceof se?xt(c):new se(c);if(d.g!="")a&&(d.g=a+"."+d.g),kn(d,d.s);else{var v=l.location;d=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var R=new se(null);d&&Nn(R,d),a&&(R.g=a),v&&kn(R,v),c&&(R.l=c),d=R}return c=s.D,a=s.ya,c&&a&&W(d,c,a),W(d,"VER",s.la),Ze(s,d),d}function ao(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new On({eb:c})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uo(){}n=uo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jn(){}jn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){dt.call(this),this.g=new Yi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ge(this)}b(vt,dt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Xr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Fr(s),s=c);a.i.push(new Cc(a.Ya++,s)),a.G==3&&Un(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Xr(this.g),delete this.g,vt.aa.N.call(this)};function co(s){Br.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}b(co,Br);function lo(){jr.call(this),this.status=1}b(lo,jr);function ge(s){this.g=s}b(ge,uo),ge.prototype.ua=function(){yt(this.g,"a")},ge.prototype.ta=function(s){yt(this.g,new co(s))},ge.prototype.sa=function(s){yt(this.g,new lo)},ge.prototype.ra=function(){yt(this.g,"b")},jn.prototype.createWebChannel=jn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Oa=function(){return new jn},xa=function(){return Sn()},ka=ne,fs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,Qn=Vn,Ci.COMPLETE="complete",Na=Ci,vi.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,tn=vi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Da=J}).apply(typeof $n<"u"?$n:typeof self<"u"?self:typeof window<"u"?window:{});const wo="@firebase/firestore",Ro="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new wa("@firebase/firestore");function ye(){return ue.logLevel}function N(n,...t){if(ue.logLevel<=$.DEBUG){const e=t.map(Ns);ue.debug(`Firestore (${ke}): ${n}`,...e)}}function Ft(n,...t){if(ue.logLevel<=$.ERROR){const e=t.map(Ns);ue.error(`Firestore (${ke}): ${n}`,...e)}}function we(n,...t){if(ue.logLevel<=$.WARN){const e=t.map(Ns);ue.warn(`Firestore (${ke}): ${n}`,...e)}}function Ns(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ma(n,r,e)}function Ma(n,t,e){let r=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ft(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ma(t,i,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class bh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Dh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Mt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Mt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new La(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Nh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Nh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Co(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Oh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function ms(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return U(r,i);{const o=Fa(),u=Mh(o.encode(Po(n,e)),o.encode(Po(t,e)));return u!==0?u:U(r,i)}}e+=r>65535?2:1}return U(n.length,t.length)}function Po(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Mh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Re(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=-62135596800,Vo=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Vo);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<So)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-So;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new rt(0,0))}static max(){return new L(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),i=Ct.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):ms(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class X extends Ct{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Lh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ct{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return Lh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bo}static keyField(){return new ct([bo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(r+=l,i++):(o(),i++)}if(o(),u)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=-1;function Fh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new Wt(i,O.empty(),t)}function Uh(n){return new Wt(n.readTime,n.key,mn)}class Wt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Wt(L.min(),O.empty(),mn)}static max(){return new Wt(L.max(),O.empty(),mn)}}function Bh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==jh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,u=!1;t.forEach(l=>{++i,l.next(()=>{++o,u&&o===i&&e()},h=>r(h))}),u=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++l,l===o&&r(u)},g=>i(g))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function $h(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Oe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}pr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=-1;function gr(n){return n==null}function rr(n){return n===0&&1/n==-1/0}function zh(n){return typeof n=="number"&&Number.isInteger(n)&&!rr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="";function Hh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Do(t)),t=Gh(n.get(e),t);return Do(t)}function Gh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ba:e+="";break;default:e+=o}}return e}function Do(n){return n+Ba+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ja(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zn(this.root,t,this.comparator,!0)}}class zn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ko(this.data.getIterator())}getIteratorFrom(t){return new ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new st(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qa("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Kh.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="server_timestamp",za="__type__",Ha="__previous_value__",Ga="__local_write_time__";function xs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[za])===null||e===void 0?void 0:e.stringValue)===$a}function _r(n){const t=n.mapValue.fields[Ha];return xs(t)?_r(t):t}function pn(n){const t=Xt(n.mapValue.fields[Ga].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,r,i,o,u,l,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=g}}const sr="(default)";class gn{constructor(t,e){this.projectId=t,this.database=e||sr}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===sr}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="__type__",Wh="__max__",Hn={mapValue:{}},Qa="__vector__",ir="value";function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xs(n)?4:Yh(n)?9007199254740991:Xh(n)?10:11:M(28295,{value:n})}function bt(n,t){if(n===t)return!0;const e=Jt(n);if(e!==Jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pn(n).isEqual(pn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Xt(i.timestampValue),l=Xt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Yt(i.bytesValue).isEqual(Yt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),l=Z(o.doubleValue);return u===l?rr(u)===rr(l):isNaN(u)&&isNaN(l)}return!1}(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(No(u)!==No(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!bt(u[h],l[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function _n(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function Ce(n,t){if(n===t)return 0;const e=Jt(n),r=Jt(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,u){const l=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return xo(n.timestampValue,t.timestampValue);case 4:return xo(pn(n),pn(t));case 5:return ms(n.stringValue,t.stringValue);case 6:return function(o,u){const l=Yt(o),h=Yt(u);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),h=u.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=U(l[f],h[f]);if(g!==0)return g}return U(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const l=U(Z(o.latitude),Z(u.latitude));return l!==0?l:U(Z(o.longitude),Z(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Oo(n.arrayValue,t.arrayValue);case 10:return function(o,u){var l,h,f,g;const I=o.fields||{},w=u.fields||{},S=(l=I[ir])===null||l===void 0?void 0:l.arrayValue,b=(h=w[ir])===null||h===void 0?void 0:h.arrayValue,k=U(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((g=b==null?void 0:b.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:Oo(S,b)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Hn.mapValue&&u===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(u===Hn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const w=ms(h[I],g[I]);if(w!==0)return w;const S=Ce(l[h[I]],f[g[I]]);if(S!==0)return S}return U(h.length,g.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function xo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=Xt(n),r=Xt(t),i=U(e.seconds,r.seconds);return i!==0?i:U(e.nanos,r.nanos)}function Oo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ce(e[i],r[i]);if(o)return o}return U(e.length,r.length)}function Pe(n){return ps(n)}function ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Xt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Yt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${ps(e.fields[u])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function Wn(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=_r(n);return t?16+Wn(t):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Wn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return le(r.fields,(o,u)=>{i+=o.length+Wn(u)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function gs(n){return!!n&&"integerValue"in n}function Os(n){return!!n&&"arrayValue"in n}function Mo(n){return!!n&&"nullValue"in n}function Lo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xn(n){return!!n&&"mapValue"in n}function Xh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ka])===null||e===void 0?void 0:e.stringValue)===Qa}function on(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return le(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=on(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=ct.emptyPath(),r={},i=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}u?r[l.lastSegment()]=on(u):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Xn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){le(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new At(on(this.value))}}function Wa(n){const t=[];return le(n.fields,(e,r)=>{const i=new ct([e]);if(Xn(r)){const o=Wa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),At.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.position=t,this.inclusive=e}}function Fo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=Ce(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{}class nt extends Xa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new td(t,e,r):e==="array-contains"?new rd(t,r):e==="in"?new sd(t,r):e==="not-in"?new id(t,r):e==="array-contains-any"?new od(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ed(t,r):new nd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ce(e,this.value)):e!==null&&Jt(this.value)===Jt(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Xa{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Dt(t,e)}matches(t){return Ya(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Ya(n){return n.op==="and"}function Ja(n){return Zh(n)&&Ya(n)}function Zh(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function _s(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Pe(n.value);if(Ja(n))return n.filters.map(t=>_s(t)).join(",");{const t=n.filters.map(e=>_s(e)).join(",");return`${n.op}(${t})`}}function Za(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,l)=>o&&Za(u,i.filters[l]),!0):!1}(n,t):void M(19439)}function tu(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(tu).join(" ,")+"}"}(n):"Filter"}class td extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class ed extends nt{constructor(t,e){super(t,"in",e),this.keys=eu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class nd extends nt{constructor(t,e){super(t,"not-in",e),this.keys=eu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function eu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class rd extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Os(e)&&_n(e.arrayValue,this.value)}}class sd extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class id extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_n(this.value.arrayValue,e)}}class od extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Os(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_n(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,e=null,r=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Ie=null}}function Bo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new ad(n,t,e,r,i,o,u)}function Ms(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>_s(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Pe(r)).join(",")),t.Ie=e}return t.Ie}function Ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Za(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Uo(n.startAt,t.startAt)&&Uo(n.endAt,t.endAt)}function ys(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e=null,r=[],i=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ud(n,t,e,r,i,o,u,l){return new yr(n,t,e,r,i,o,u,l)}function Fs(n){return new yr(n)}function jo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cd(n){return n.collectionGroup!==null}function an(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new st(ct.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new ar(o,r))}),e.has(ct.keyField().canonicalString())||t.Ee.push(new ar(ct.keyField(),r))}return t.Ee}function Pt(n){const t=F(n);return t.de||(t.de=ld(t,an(n))),t.de}function ld(n,t){if(n.limitType==="F")return Bo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ar(i.field,o)});const e=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return Bo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Es(n,t,e){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Er(n,t){return Ls(Pt(n),Pt(t))&&n.limitType===t.limitType}function nu(n){return`${Ms(Pt(n))}|lt:${n.limitType}`}function Ee(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>tu(i)).join(", ")}]`),gr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Pe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Pe(i)).join(",")),`Target(${r})`}(Pt(n))}; limitType=${n.limitType})`}function Tr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of an(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,l,h){const f=Fo(u,l,h);return u.inclusive?f<=0:f<0}(r.startAt,an(r),i)||r.endAt&&!function(u,l,h){const f=Fo(u,l,h);return u.inclusive?f>=0:f>0}(r.endAt,an(r),i))}(n,t)}function hd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ru(n){return(t,e)=>{let r=!1;for(const i of an(n)){const o=dd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function dd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,l){const h=u.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Ce(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ja(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Y(O.comparator);function Ut(){return fd}const su=new Y(O.comparator);function en(...n){let t=su;for(const e of n)t=t.insert(e.key,e);return t}function iu(n){let t=su;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ae(){return un()}function ou(){return un()}function un(){return new he(n=>n.toString(),(n,t)=>n.isEqual(t))}const md=new Y(O.comparator),pd=new st(O.comparator);function j(...n){let t=pd;for(const e of n)t=t.add(e);return t}const gd=new st(U);function _d(){return gd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rr(t)?"-0":t}}function au(n){return{integerValue:""+n}}function yd(n,t){return zh(t)?au(t):Us(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function Ed(n,t,e){return n instanceof ur?function(i,o){const u={fields:{[za]:{stringValue:$a},[Ga]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&xs(o)&&(o=_r(o)),o&&(u.fields[Ha]=o),{mapValue:u}}(e,t):n instanceof Se?cu(n,t):n instanceof yn?lu(n,t):function(i,o){const u=uu(i,o),l=qo(u)+qo(i.Re);return gs(u)&&gs(i.Re)?au(l):Us(i.serializer,l)}(n,t)}function Td(n,t,e){return n instanceof Se?cu(n,t):n instanceof yn?lu(n,t):e}function uu(n,t){return n instanceof cr?function(r){return gs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ur extends vr{}class Se extends vr{constructor(t){super(),this.elements=t}}function cu(n,t){const e=hu(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class yn extends vr{constructor(t){super(),this.elements=t}}function lu(n,t){let e=hu(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class cr extends vr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function qo(n){return Z(n.integerValue||n.doubleValue)}function hu(n){return Os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e){this.field=t,this.transform=e}}function Id(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Se&&i instanceof Se||r instanceof yn&&i instanceof yn?Re(r.elements,i.elements,bt):r instanceof cr&&i instanceof cr?bt(r.Re,i.Re):r instanceof ur&&i instanceof ur}(n.transform,t.transform)}class Ad{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ir{}function du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bs(n.key,St.none()):new En(n.key,n.data,St.none());{const e=n.data,r=At.empty();let i=new st(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new de(n.key,r,new Rt(i.toArray()),St.none())}}function wd(n,t,e){n instanceof En?function(i,o,u){const l=i.value.clone(),h=zo(i.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(n,t,e):n instanceof de?function(i,o,u){if(!Yn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=zo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(fu(i)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function cn(n,t,e,r){return n instanceof En?function(o,u,l,h){if(!Yn(o.precondition,u))return l;const f=o.value.clone(),g=Ho(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof de?function(o,u,l,h){if(!Yn(o.precondition,u))return l;const f=Ho(o.fieldTransforms,h,u),g=u.data;return g.setAll(fu(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,u,l){return Yn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(n,t,e)}function Rd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=uu(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function $o(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Re(r,i,(o,u)=>Id(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class En extends Ir{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class de extends Ir{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function fu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function zo(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,l=t.data.field(o.field);r.set(o.field,Td(u,l,e[i]))}return r}function Ho(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Ed(o,u,t))}return r}class Bs extends Ir{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cd extends Ir{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&wd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ou();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const h=du(u,l);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,r)=>$o(e,r))&&Re(this.baseMutations,t.baseMutations,(e,r)=>$o(e,r))}}class js{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let i=function(){return md}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new js(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,q;function bd(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function mu(n){if(n===void 0)return Ft("GRPC error has no .code"),P.UNKNOWN;switch(n){case et.OK:return P.OK;case et.CANCELLED:return P.CANCELLED;case et.UNKNOWN:return P.UNKNOWN;case et.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case et.INTERNAL:return P.INTERNAL;case et.UNAVAILABLE:return P.UNAVAILABLE;case et.UNAUTHENTICATED:return P.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case et.NOT_FOUND:return P.NOT_FOUND;case et.ALREADY_EXISTS:return P.ALREADY_EXISTS;case et.PERMISSION_DENIED:return P.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case et.ABORTED:return P.ABORTED;case et.OUT_OF_RANGE:return P.OUT_OF_RANGE;case et.UNIMPLEMENTED:return P.UNIMPLEMENTED;case et.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(q=et||(et={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Kt([4294967295,4294967295],0);function Go(n){const t=Fa().encode(n),e=new ba;return e.update(t),new Uint8Array(e.digest())}function Ko(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,r],0),new Kt([i,o],0)]}class qs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Kt.fromNumber(this.pe)}we(t,e,r){let i=t.add(e.multiply(Kt.fromNumber(r)));return i.compare(Dd)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Go(t),[r,i]=Ko(e);for(let o=0;o<this.hashCount;o++){const u=this.we(r,i,o);if(!this.Se(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new qs(o,i,e);return r.forEach(l=>u.insert(l)),u}insert(t){if(this.pe===0)return;const e=Go(t),[r,i]=Ko(e);for(let o=0;o<this.hashCount;o++){const u=this.we(r,i,o);this.be(u)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ar(L.min(),i,new Y(U),Ut(),j())}}class Tn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Tn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,r,i){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=i}}class pu{constructor(t,e){this.targetId=t,this.Ce=e}}class gu{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Qo{constructor(){this.Fe=0,this.Me=Wo(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),r=j();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}}),new Tn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Wo()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Nd{constructor(t){this.ze=t,this.je=new Map,this.He=Ut(),this.Je=Gn(),this.Ye=Gn(),this.Ze=new Y(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,r=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(ys(o))if(r===0){const u=new O(o.path);this.tt(e,u,_t.newNoDocument(u,L.min()))}else K(r===1,20013,{expectedCount:r});else{const u=this.ut(e);if(u!==r){const l=this.ct(t),h=l?this.lt(l,t,u):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=Yt(r).toUint8Array()}catch(h){if(h instanceof qa)return we("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new qs(u,i,o)}catch(h){return we(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.pe===0?null:l}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.ze.Pt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,u)=>{const l=this._t(u);if(l){if(o.current&&ys(l.target)){const h=new O(l.target.path);this.Et(h).has(u)||this.dt(u,h)||this.tt(u,h,_t.newNoDocument(h,t))}o.Le&&(e.set(u,o.qe()),o.Qe())}});let r=j();this.Ye.forEach((o,u)=>{let l=!0;u.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.He.forEach((o,u)=>u.setReadTime(t));const i=new Ar(t,e,this.Ze,this.He,r);return this.He=Ut(),this.Je=Gn(),this.Ye=Gn(),this.Ze=new Y(U),i}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Qo,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new st(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Qo),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Gn(){return new Y(O.comparator)}function Wo(){return new Y(O.comparator)}const kd={asc:"ASCENDING",desc:"DESCENDING"},xd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Od={and:"AND",or:"OR"};class Md{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ts(n,t){return n.useProto3Json||gr(t)?t:{value:t}}function lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _u(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ld(n,t){return lr(n,t.toTimestamp())}function Vt(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=Xt(e);return new rt(r.seconds,r.nanos)}(n))}function $s(n,t){return vs(n,t).canonicalString()}function vs(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function yu(n){const t=X.fromString(n);return K(Au(t),10190,{key:t.toString()}),t}function Is(n,t){return $s(n.databaseId,t.path)}function ss(n,t){const e=yu(t);if(e.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Tu(e))}function Eu(n,t){return $s(n.databaseId,t)}function Fd(n){const t=yu(n);return t.length===4?X.emptyPath():Tu(t)}function As(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xo(n,t,e){return{name:Is(n,t),fields:e.value.mapValue.fields}}function Ud(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(K(g===void 0||typeof g=="string",58123),lt.fromBase64String(g||"")):(K(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),lt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const g=f.code===void 0?P.UNKNOWN:mu(f.code);return new x(g,f.message||"")}(u);e=new gu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ss(n,r.document.name),o=Vt(r.document.updateTime),u=r.document.createTime?Vt(r.document.createTime):L.min(),l=new At({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(i,o,u,l),f=r.targetIds||[],g=r.removedTargetIds||[];e=new Jn(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ss(n,r.document),o=r.readTime?Vt(r.readTime):L.min(),u=_t.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Jn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ss(n,r.document),o=r.removedTargetIds||[];e=new Jn([],o,i,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Vd(i,o),l=r.targetId;e=new pu(l,u)}}return e}function Bd(n,t){let e;if(t instanceof En)e={update:Xo(n,t.key,t.value)};else if(t instanceof Bs)e={delete:Is(n,t.key)};else if(t instanceof de)e={update:Xo(n,t.key,t.data),updateMask:Wd(t.fieldMask)};else{if(!(t instanceof Cd))return M(16599,{ft:t.type});e={verify:Is(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const l=u.transform;if(l instanceof ur)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Se)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cr)return{fieldPath:u.field.canonicalString(),increment:l.Re};throw M(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ld(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function jd(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(i,o){let u=i.updateTime?Vt(i.updateTime):Vt(o);return u.isEqual(L.min())&&(u=Vt(o)),new Ad(u,i.transformResults||[])}(e,t))):[]}function qd(n,t){return{documents:[Eu(n,t.path)]}}function $d(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Eu(n,i);const o=function(f){if(f.length!==0)return Iu(Dt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(w){return{field:Te(w.field),direction:Gd(w.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Ts(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function zd(n){let t=Fd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(I){const w=vu(I);return w instanceof Dt&&Ja(w)?w.getFilters():[w]}(e.where));let u=[];e.orderBy&&(u=function(I){return I.map(w=>function(b){return new ar(ve(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(e.orderBy));let l=null;e.limit&&(l=function(I){let w;return w=typeof I=="object"?I.value:I,gr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(I){const w=!!I.before,S=I.values||[];return new or(S,w)}(e.startAt));let f=null;return e.endAt&&(f=function(I){const w=!I.before,S=I.values||[];return new or(S,w)}(e.endAt)),ud(t,i,u,o,l,"F",h,f)}function Hd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ve(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ve(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ve(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>vu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Gd(n){return kd[n]}function Kd(n){return xd[n]}function Qd(n){return Od[n]}function Te(n){return{fieldPath:n.canonicalString()}}function ve(n){return ct.fromServerFormat(n.fieldPath)}function Iu(n){return n instanceof nt?function(e){if(e.op==="=="){if(Lo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:Kd(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(i=>Iu(i));return r.length===1?r[0]:{compositeFilter:{op:Qd(e.op),filters:r}}}(n):M(54877,{filter:n})}function Wd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Au(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,r,i,o=L.min(),u=L.min(),l=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.wt=t}}function Yd(n){const t=zd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Es(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.Cn=new Zd}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Wt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Zd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wu=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(wu,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ve(0)}static lr(){return new Ve(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="LruGarbageCollector",tf=1048576;function Zo([n,t],[e,r]){const i=U(n,e);return i===0?U(t,r):i}class ef{constructor(t){this.Er=t,this.buffer=new st(Zo),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Zo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class nf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(Jo,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?N(Jo,"Ignoring IndexedDB error during garbage collection: ",e):await xe(e)}await this.mr(3e5)})}}class rf{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(pr.le);const r=new ef(e);return this.gr.forEachTarget(t,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Yo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yo):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,i,o,u,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(r=I,l=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(f=Date.now(),ye()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function sf(n,t){return new rf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&cn(r.mutation,i,Rt.empty(),rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=ae();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=en();return o.forEach((l,h)=>{u=u.insert(l,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,r,i){let o=Ut();const u=un(),l=function(){return un()}();return e.forEach((h,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof de)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),cn(g.mutation,f,g.mutation.getFieldMask(),rt.now())):u.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var I;return l.set(f,new af(g,(I=u.get(f))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(t,e){const r=un();let i=new Y((u,l)=>u-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||Rt.empty();g=l.applyToLocalView(f,g),r.set(h,g);const I=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,I)})}).next(()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,I=ou();g.forEach(w=>{if(!o.has(w)){const S=du(e.get(w),r.get(w));S!==null&&I.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,I))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):cd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ae());let l=mn,h=o;return u.next(f=>C.forEach(f,(g,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(w=>{h=h.insert(g,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(g=>({batchId:l,changes:iu(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=en();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,h=>{const f=function(I,w){return new yr(w,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(g=>{g.forEach((I,w)=>{u=u.insert(I,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,_t.newInvalidDocument(g)))});let l=en();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&cn(g.mutation,f,Rt.empty(),rt.now()),Tr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return C.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(i){return{name:i.name,query:Yd(i.bundledQuery),readTime:Vt(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.overlays=new Y(O.comparator),this.Qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ae();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.bt(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ae(),o=e.length+1,u=new O(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=ae(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=i)););return C.resolve(l)}bt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Sd(e,r));let o=this.Qr.get(e);o===void 0&&(o=j(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.$r=new st(it.Ur),this.Kr=new st(it.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new it(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new it(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new O(new X([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.Kr.forEachInRange([r,i],u=>{this.zr(u),o.push(u.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new O(new X([])),r=new it(e,t),i=new it(e,t+1);let o=j();return this.Kr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return O.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new st(it.Ur)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Pd(o,e,r,i);this.mutationQueue.push(u);for(const l of i)this.Xr=this.Xr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ti(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ks:this.nr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],u=>{const l=this.ei(u.Zr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(U);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,u],l=>{r=r.add(l.Zr)})}),C.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new it(new O(o),0);let l=new st(U);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Zr)),!0)},u),C.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(r=>{const i=this.ei(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){K(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return C.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new it(e,0),i=this.Xr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.ii=t,this.docs=function(){return new Y(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ut();const u=e.path,l=new O(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Bh(Uh(g),r)<=0||(i.has(g.key)||Tr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}si(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new mf(this)}getSize(t){return C.resolve(this.size)}}class mf extends of{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.persistence=t,this.oi=new he(e=>Ms(e),Ls),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new zs,this.targetCount=0,this.ui=Ve.cr()}forEachTarget(t,e){return this.oi.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),C.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Tr(e),C.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.oi.forEach((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.oi.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e){this.ci={},this.overlays={},this.li=new pr(0),this.hi=!1,this.hi=!0,this.Pi=new hf,this.referenceDelegate=t(this),this.Ti=new pf(this),this.indexManager=new Jd,this.remoteDocumentCache=function(i){return new ff(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Xd(e),this.Ei=new cf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new df(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new gf(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return C.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class gf extends qh{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Vi=new zs,this.mi=null}static fi(t){return new Hs(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,r=>{const i=O.fromPath(r);return this.pi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return C.or([()=>C.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class hr{constructor(t,e){this.persistence=t,this.yi=new he(r=>Hh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=sf(this,e)}static fi(t,e){return new hr(t,e)}di(){}Ai(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}Sr(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return C.forEach(this.yi,(r,i)=>this.Dr(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(t,u=>this.Dr(t,u,e).next(l=>{l||(r++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Wn(t.data.value)),e}Dr(t,e,r){return C.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.yi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ds=r,this.As=i}static Rs(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Gs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return cl()?8:$h(al())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ws(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Ss(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new _f;return this.bs(t,e,u).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,u,l.size)})}).next(()=>o.result)}Ds(t,e,r,i){return r.documentReadCount<this.gs?(ye()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(ye()<=$.DEBUG&&N("QueryEngine","Query:",Ee(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ye()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):C.resolve())}ws(t,e){if(jo(e))return C.resolve(null);let r=Pt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Es(e,null,"F"),r=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=j(...o);return this.ys.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.vs(e,l);return this.Cs(e,f,u,h.readTime)?this.ws(t,Es(e,null,"F")):this.Fs(t,f,e,h)}))})))}Ss(t,e,r,i){return jo(e)||i.isEqual(L.min())?C.resolve(null):this.ys.getDocuments(t,r).next(o=>{const u=this.vs(e,o);return this.Cs(e,u,r,i)?C.resolve(null):(ye()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.Fs(t,u,e,Fh(i,mn)).next(l=>l))})}vs(t,e){let r=new st(ru(t));return e.forEach((i,o)=>{Tr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(t,e,r){return ye()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.ys.getDocumentsMatchingQuery(t,e,Wt.min(),r)}Fs(t,e,r,i){return this.ys.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="LocalStore",Ef=3e8;class Tf{constructor(t,e,r,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new Y(U),this.Os=new he(o=>Ms(o),Ls),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uf(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function vf(n,t,e,r){return new Tf(n,t,e,r)}async function Cu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],l=[];let h=j();for(const f of i){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({ks:f,removedBatchIds:u,addedBatchIds:l}))})})}function If(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,g){const I=f.batch,w=I.keys();let S=C.resolve();return w.forEach(b=>{S=S.next(()=>g.getEntry(h,b)).next(k=>{const D=f.docVersions.get(b);K(D!==null,48541),k.version.compareTo(D)<0&&(I.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),g.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Pu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Af(n,t){const e=F(n),r=t.snapshotVersion;let i=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Bs.newChangeBuffer({trackRemovals:!0});i=e.xs;const l=[];t.targetChanges.forEach((g,I)=>{const w=i.get(I);if(!w)return;l.push(e.Ti.removeMatchingKeys(o,g.removedDocuments,I).next(()=>e.Ti.addMatchingKeys(o,g.addedDocuments,I)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),i=i.insert(I,S),function(k,D,G){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ef?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(w,S,g)&&l.push(e.Ti.updateTargetData(o,S))});let h=Ut(),f=j();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(wf(o,u,t.documentUpdates).next(g=>{h=g.qs,f=g.Qs})),!r.isEqual(L.min())){const g=e.Ti.getLastRemoteSnapshotVersion(o).next(I=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(g)}return C.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=i,o))}function wf(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ut();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):N(Ks,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{qs:u,Qs:i}})}function Rf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Cf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ti.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Ti.allocateTargetId(r).next(u=>(i=new zt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function ws(n,t,e){const r=F(n),i=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Oe(u))throw u;N(Ks,`Failed to update sequence numbers for target ${t}: ${u}`)}r.xs=r.xs.remove(t),r.Os.delete(i.target)}function ta(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const I=F(h),w=I.Os.get(g);return w!==void 0?C.resolve(I.xs.get(w)):I.Ti.getTargetData(f,g)}(r,u,Pt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(u,l.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j())).next(l=>(Pf(r,hd(t),l),{documents:l,$s:o})))}function Pf(n,t,e){let r=n.Ns.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class ea{constructor(){this.activeTargetIds=_d()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sf{constructor(){this.xo=new ea,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new ea,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="ConnectivityMonitor";class ra{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(na,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(na,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=null;function Rs(){return Kn===null?Kn=function(){return 268435456+Math.round(2147483648*Math.random())}():Kn++,"0x"+Kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="RestConnection",bf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Df{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===sr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(t,e,r,i,o){const u=Rs(),l=this.jo(t,e.toUriEncodedString());N(is,`Sending RPC '${t}' ${u}:`,l,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:f}=new URL(l),g=bs(f);return this.Jo(t,l,h,r,g).then(I=>(N(is,`Received RPC '${t}' ${u}: `,I),I),I=>{throw we(is,`RPC '${t}' ${u} failed with error: `,I,"url: ",l,"request:",r),I})}Yo(t,e,r,i,o,u){return this.zo(t,e,r,i,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const r=bf[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class kf extends Df{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const u=Rs();return new Promise((l,h)=>{const f=new Da;f.setWithCredentials(!0),f.listenOnce(Na.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Qn.NO_ERROR:const I=f.getResponseJson();N(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(I)),l(I);break;case Qn.TIMEOUT:N(pt,`RPC '${t}' ${u} timed out`),h(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case Qn.HTTP_ERROR:const w=f.getStatus();if(N(pt,`RPC '${t}' ${u} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S==null?void 0:S.error;if(b&&b.status&&b.message){const k=function(G){const B=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(b.status);h(new x(k,b.message))}else h(new x(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new x(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:u,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{N(pt,`RPC '${t}' ${u} completed.`)}});const g=JSON.stringify(i);N(pt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",g,r,15)})}T_(t,e,r){const i=Rs(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Oa(),l=xa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");N(pt,`Creating RPC '${t}' stream ${i}: ${g}`,h);const I=u.createWebChannel(g,h);let w=!1,S=!1;const b=new Nf({Zo:D=>{S?N(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(w||(N(pt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),w=!0),N(pt,`RPC '${t}' stream ${i} sending:`,D),I.send(D))},Xo:()=>I.close()}),k=(D,G,B)=>{D.listen(G,z=>{try{B(z)}catch(tt){setTimeout(()=>{throw tt},0)}})};return k(I,tn.EventType.OPEN,()=>{S||(N(pt,`RPC '${t}' stream ${i} transport opened.`),b.__())}),k(I,tn.EventType.CLOSE,()=>{S||(S=!0,N(pt,`RPC '${t}' stream ${i} transport closed`),b.u_())}),k(I,tn.EventType.ERROR,D=>{S||(S=!0,we(pt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),b.u_(new x(P.UNAVAILABLE,"The operation could not be completed")))}),k(I,tn.EventType.MESSAGE,D=>{var G;if(!S){const B=D.data[0];K(!!B,16349);const z=B,tt=(z==null?void 0:z.error)||((G=z[0])===null||G===void 0?void 0:G.error);if(tt){N(pt,`RPC '${t}' stream ${i} received error:`,tt);const Nt=tt.status;let ot=function(_){const y=et[_];if(y!==void 0)return mu(y)}(Nt),T=tt.message;ot===void 0&&(ot=P.INTERNAL,T="Unknown error status: "+Nt+" with message "+tt.message),S=!0,b.u_(new x(ot,T)),I.close()}else N(pt,`RPC '${t}' stream ${i} received:`,B),b.c_(B)}}),k(l,ka.STAT_EVENT,D=>{D.stat===fs.PROXY?N(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===fs.NOPROXY&&N(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}}function os(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){return new Md(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,r=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.I_=r,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="PersistentStream";class Vu{constructor(t,e,r,i,o,u,l,h){this.xi=t,this.y_=r,this.w_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Su(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===e&&this.K_(r,i)},r=>{t(()=>{const i=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(t,e){const r=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return N(sa,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(N(sa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xf extends Vu{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}G_(t,e){return this.connection.T_("Listen",t,e)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const e=Ud(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Vt(u.readTime):L.min()}(t);return this.listener.j_(e,r)}H_(t){const e={};e.database=As(this.serializer),e.addTarget=function(o,u){let l;const h=u.target;if(l=ys(h)?{documents:qd(o,h)}:{query:$d(o,h).gt},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=_u(o,u.resumeToken);const f=Ts(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=lr(o,u.snapshotVersion.toTimestamp());const f=Ts(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Hd(this.serializer,t);r&&(e.labels=r),this.L_(e)}J_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.L_(e)}}class Of extends Vu{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=jd(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.ea(r,e)}ta(){const t={};t.database=As(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Bd(this.serializer,r))};this.L_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{}class Lf extends Mf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.zo(t,vs(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())})}Yo(t,e,r,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Yo(t,vs(e,r),i,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(P.UNKNOWN,u.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Ff{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ft(e),this.oa=!1):N("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="RemoteStore";class Uf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(u=>{r.enqueueAndForget(async()=>{fe(this)&&(N(ce,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.Ta.add(4),await vn(f),f.da.set("Unknown"),f.Ta.delete(4),await Rr(f)}(this))})}),this.da=new Ff(r,i)}}async function Rr(n){if(fe(n))for(const t of n.Ia)await t(!0)}async function vn(n){for(const t of n.Ia)await t(!1)}function bu(n,t){const e=F(n);e.Pa.has(t.targetId)||(e.Pa.set(t.targetId,t),Ys(e)?Xs(e):Me(e).M_()&&Ws(e,t))}function Qs(n,t){const e=F(n),r=Me(e);e.Pa.delete(t),r.M_()&&Du(e,t),e.Pa.size===0&&(r.M_()?r.N_():fe(e)&&e.da.set("Unknown"))}function Ws(n,t){if(n.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).H_(t)}function Du(n,t){n.Aa.Ke(t),Me(n).J_(t)}function Xs(n){n.Aa=new Nd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Pa.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.da._a()}function Ys(n){return fe(n)&&!Me(n).F_()&&n.Pa.size>0}function fe(n){return F(n).Ta.size===0}function Nu(n){n.Aa=void 0}async function Bf(n){n.da.set("Online")}async function jf(n){n.Pa.forEach((t,e)=>{Ws(n,t)})}async function qf(n,t){Nu(n),Ys(n)?(n.da.ca(t),Xs(n)):n.da.set("Unknown")}async function $f(n,t,e){if(n.da.set("Online"),t instanceof gu&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Pa.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Pa.delete(l),i.Aa.removeTarget(l))}(n,t)}catch(r){N(ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(n,r)}else if(t instanceof Jn?n.Aa.Xe(t):t instanceof pu?n.Aa.ot(t):n.Aa.nt(t),!e.isEqual(L.min()))try{const r=await Pu(n.localStore);e.compareTo(r)>=0&&await function(o,u){const l=o.Aa.It(u);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Pa.get(f);g&&o.Pa.set(f,g.withResumeToken(h.resumeToken,u))}}),l.targetMismatches.forEach((h,f)=>{const g=o.Pa.get(h);if(!g)return;o.Pa.set(h,g.withResumeToken(lt.EMPTY_BYTE_STRING,g.snapshotVersion)),Du(o,h);const I=new zt(g.target,h,f,g.sequenceNumber);Ws(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){N(ce,"Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,t,e){if(!Oe(t))throw t;n.Ta.add(1),await vn(n),n.da.set("Offline"),e||(e=()=>Pu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(ce,"Retrying IndexedDB access"),await e(),n.Ta.delete(1),await Rr(n)})}function ku(n,t){return t().catch(e=>dr(n,e,t))}async function Cr(n){const t=F(n),e=Zt(t);let r=t.ha.length>0?t.ha[t.ha.length-1].batchId:ks;for(;zf(t);)try{const i=await Rf(t.localStore,r);if(i===null){t.ha.length===0&&e.N_();break}r=i.batchId,Hf(t,i)}catch(i){await dr(t,i)}xu(t)&&Ou(t)}function zf(n){return fe(n)&&n.ha.length<10}function Hf(n,t){n.ha.push(t);const e=Zt(n);e.M_()&&e.Y_&&e.Z_(t.mutations)}function xu(n){return fe(n)&&!Zt(n).F_()&&n.ha.length>0}function Ou(n){Zt(n).start()}async function Gf(n){Zt(n).ta()}async function Kf(n){const t=Zt(n);for(const e of n.ha)t.Z_(e.mutations)}async function Qf(n,t,e){const r=n.ha.shift(),i=js.from(r,t,e);await ku(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Cr(n)}async function Wf(n,t){t&&Zt(n).Y_&&await async function(r,i){if(function(u){return bd(u)&&u!==P.ABORTED}(i.code)){const o=r.ha.shift();Zt(r).O_(),await ku(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Cr(r)}}(n,t),xu(n)&&Ou(n)}async function ia(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N(ce,"RemoteStore received new credentials");const r=fe(e);e.Ta.add(3),await vn(e),r&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await Rr(e)}async function Xf(n,t){const e=F(n);t?(e.Ta.delete(2),await Rr(e)):t||(e.Ta.add(2),await vn(e),e.da.set("Unknown"))}function Me(n){return n.Ra||(n.Ra=function(e,r,i){const o=F(e);return o.ra(),new xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:Bf.bind(null,n),n_:jf.bind(null,n),i_:qf.bind(null,n),j_:$f.bind(null,n)}),n.Ia.push(async t=>{t?(n.Ra.O_(),Ys(n)?Xs(n):n.da.set("Unknown")):(await n.Ra.stop(),Nu(n))})),n.Ra}function Zt(n){return n.Va||(n.Va=function(e,r,i){const o=F(e);return o.ra(),new Of(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Gf.bind(null,n),i_:Wf.bind(null,n),X_:Kf.bind(null,n),ea:Qf.bind(null,n)}),n.Ia.push(async t=>{t?(n.Va.O_(),await Cr(n)):(await n.Va.stop(),n.ha.length>0&&(N(ce,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,l=new Js(t,e,u,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),Oe(n))return new x(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static emptySet(t){return new Ae(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.ma=new Y(O.comparator)}track(t){const e=t.doc.key,r=this.ma.get(e);r?t.type!==0&&r.type===3?this.ma=this.ma.insert(e,t):t.type===3&&r.type!==1?this.ma=this.ma.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ma=this.ma.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ma=this.ma.remove(e):t.type===1&&r.type===2?this.ma=this.ma.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,fa:r}):this.ma=this.ma.insert(e,t)}ga(){const t=[];return this.ma.inorderTraversal((e,r)=>{t.push(r)}),t}}class be{constructor(t,e,r,i,o,u,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new be(t,e,Ae.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class Jf{constructor(){this.queries=aa(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=aa(),o.forEach((u,l)=>{for(const h of l.ya)h.onError(r)})})(this,new x(P.ABORTED,"Firestore shutting down"))}}function aa(){return new he(n=>nu(n),Er)}async function Mu(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.wa()&&t.Sa()&&(r=2):(o=new Yf,r=t.Sa()?0:1);try{switch(r){case 0:o.pa=await e.onListen(i,!0);break;case 1:o.pa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=Zs(u,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.ya.push(t),t.Da(e.onlineState),o.pa&&t.va(o.pa)&&ti(e)}async function Lu(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.ya.indexOf(t);u>=0&&(o.ya.splice(u,1),o.ya.length===0?i=t.Sa()?0:1:!o.wa()&&t.Sa()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Zf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.ya)l.va(i)&&(r=!0);u.pa=i}}r&&ti(e)}function tm(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.ya)o.onError(e);r.queries.delete(t)}function ti(n){n.ba.forEach(t=>{t.next()})}var Cs,ua;(ua=Cs||(Cs={})).Ca="default",ua.Cache="cache";class Fu{constructor(t,e,r){this.query=t,this.Fa=e,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),e=!0):this.Na(t,this.onlineState)&&(this.Ba(t),e=!0),this.xa=t,e}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let e=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),e=!0),e}Na(t,e){if(!t.fromCache||!this.Sa())return!0;const r=e!=="Offline";return(!this.options.La||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const e=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ba(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==Cs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.key=t}}class Bu{constructor(t){this.key=t}}class em{constructor(t,e){this.query=t,this.Ga=e,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=j(),this.mutatedKeys=j(),this.Ha=ru(t),this.Ja=new Ae(this.Ha)}get Ya(){return this.Ga}Za(t,e){const r=e?e.Xa:new oa,i=e?e.Ja:this.Ja;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,I)=>{const w=i.get(g),S=Tr(this.query,I)?I:null,b=!!w&&this.mutatedKeys.has(w.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;w&&S?w.data.isEqual(S.data)?b!==k&&(r.track({type:3,doc:S}),D=!0):this.eu(w,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Ha(S,h)>0||f&&this.Ha(S,f)<0)&&(l=!0)):!w&&S?(r.track({type:0,doc:S}),D=!0):w&&!S&&(r.track({type:1,doc:w}),D=!0,(h||f)&&(l=!0)),D&&(S?(u=u.add(S),o=k?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ja:u,Xa:r,Cs:l,mutatedKeys:o}}eu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const u=t.Xa.ga();u.sort((g,I)=>function(S,b){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:D})}};return k(S)-k(b)}(g.type,I.type)||this.Ha(g.doc,I.doc)),this.tu(r),i=i!=null&&i;const l=e&&!i?this.nu():[],h=this.ja.size===0&&this.current&&!i?1:0,f=h!==this.za;return this.za=h,u.length!==0||f?{snapshot:new be(this.query,t.Ja,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new oa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(e=>this.Ga=this.Ga.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ga=this.Ga.delete(e)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=j(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const e=[];return t.forEach(r=>{this.ja.has(r)||e.push(new Bu(r))}),this.ja.forEach(r=>{t.has(r)||e.push(new Uu(r))}),e}su(t){this.Ga=t.$s,this.ja=j();const e=this.Za(t.documents);return this.applyChanges(e,!0)}ou(){return be.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const ei="SyncEngine";class nm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class rm{constructor(t){this.key=t,this._u=!1}}class sm{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.au={},this.uu=new he(l=>nu(l),Er),this.cu=new Map,this.lu=new Set,this.hu=new Y(O.comparator),this.Pu=new Map,this.Tu=new zs,this.Iu={},this.Eu=new Map,this.du=Ve.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function im(n,t,e=!0){const r=Gu(n);let i;const o=r.uu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ou()):i=await ju(r,t,e,!0),i}async function om(n,t){const e=Gu(n);await ju(e,t,!0,!1)}async function ju(n,t,e,r){const i=await Cf(n.localStore,Pt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await am(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&bu(n.remoteStore,i),l}async function am(n,t,e,r,i){n.Ru=(I,w,S)=>async function(k,D,G,B){let z=D.view.Za(G);z.Cs&&(z=await ta(k.localStore,D.query,!1).then(({documents:T})=>D.view.Za(T,z)));const tt=B&&B.targetChanges.get(D.targetId),Nt=B&&B.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(z,k.isPrimaryClient,tt,Nt);return la(k,D.targetId,ot.ru),ot.snapshot}(n,I,w,S);const o=await ta(n.localStore,t,!0),u=new em(t,o.$s),l=u.Za(o.documents),h=Tn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(l,n.isPrimaryClient,h);la(n,e,f.ru);const g=new nm(t,e,u);return n.uu.set(t,g),n.cu.has(e)?n.cu.get(e).push(t):n.cu.set(e,[t]),f.snapshot}async function um(n,t,e){const r=F(n),i=r.uu.get(t),o=r.cu.get(i.targetId);if(o.length>1)return r.cu.set(i.targetId,o.filter(u=>!Er(u,t))),void r.uu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ws(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Qs(r.remoteStore,i.targetId),Ps(r,i.targetId)}).catch(xe)):(Ps(r,i.targetId),await ws(r.localStore,i.targetId,!0))}async function cm(n,t){const e=F(n),r=e.uu.get(t),i=e.cu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Qs(e.remoteStore,r.targetId))}async function lm(n,t,e){const r=_m(n);try{const i=await function(u,l){const h=F(u),f=rt.now(),g=l.reduce((S,b)=>S.add(b.key),j());let I,w;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=Ut(),k=j();return h.Bs.getEntries(S,g).next(D=>{b=D,b.forEach((G,B)=>{B.isValidDocument()||(k=k.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,b)).next(D=>{I=D;const G=[];for(const B of l){const z=Rd(B,I.get(B.key).overlayedDocument);z!=null&&G.push(new de(B.key,z,Wa(z.value.mapValue),St.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,G,l)}).next(D=>{w=D;const G=D.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(S,D.batchId,G)})}).then(()=>({batchId:w.batchId,changes:iu(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(u,l,h){let f=u.Iu[u.currentUser.toKey()];f||(f=new Y(U)),f=f.insert(l,h),u.Iu[u.currentUser.toKey()]=f}(r,i.batchId,e),await In(r,i.changes),await Cr(r.remoteStore)}catch(i){const o=Zs(i,"Failed to persist write");e.reject(o)}}async function qu(n,t){const e=F(n);try{const r=await Af(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Pu.get(o);u&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u._u=!0:i.modifiedDocuments.size>0?K(u._u,14607):i.removedDocuments.size>0&&(K(u._u,42227),u._u=!1))}),await In(e,r,t)}catch(r){await xe(r)}}function ca(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.uu.forEach((o,u)=>{const l=u.view.Da(t);l.snapshot&&i.push(l.snapshot)}),function(u,l){const h=F(u);h.onlineState=l;let f=!1;h.queries.forEach((g,I)=>{for(const w of I.ya)w.Da(l)&&(f=!0)}),f&&ti(h)}(r.eventManager,t),i.length&&r.au.j_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Pu.get(t),o=i&&i.key;if(o){let u=new Y(O.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const l=j().add(o),h=new Ar(L.min(),new Map,new Y(U),u,l);await qu(r,h),r.hu=r.hu.remove(o),r.Pu.delete(t),ni(r)}else await ws(r.localStore,t,!1).then(()=>Ps(r,t,e)).catch(xe)}async function dm(n,t){const e=F(n),r=t.batch.batchId;try{const i=await If(e.localStore,t);zu(e,r,null),$u(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await In(e,i)}catch(i){await xe(i)}}async function fm(n,t,e){const r=F(n);try{const i=await function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,l).next(I=>(K(I!==null,37113),g=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);zu(r,t,e),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await In(r,i)}catch(i){await xe(i)}}function $u(n,t){(n.Eu.get(t)||[]).forEach(e=>{e.resolve()}),n.Eu.delete(t)}function zu(n,t,e){const r=F(n);let i=r.Iu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Iu[r.currentUser.toKey()]=i}}function Ps(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.cu.get(t))n.uu.delete(r),e&&n.au.Vu(r,e);n.cu.delete(t),n.isPrimaryClient&&n.Tu.Hr(t).forEach(r=>{n.Tu.containsKey(r)||Hu(n,r)})}function Hu(n,t){n.lu.delete(t.path.canonicalString());const e=n.hu.get(t);e!==null&&(Qs(n.remoteStore,e),n.hu=n.hu.remove(t),n.Pu.delete(e),ni(n))}function la(n,t,e){for(const r of e)r instanceof Uu?(n.Tu.addReference(r.key,t),mm(n,r)):r instanceof Bu?(N(ei,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,t),n.Tu.containsKey(r.key)||Hu(n,r.key)):M(19791,{mu:r})}function mm(n,t){const e=t.key,r=e.path.canonicalString();n.hu.get(e)||n.lu.has(r)||(N(ei,"New document in limbo: "+e),n.lu.add(r),ni(n))}function ni(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const t=n.lu.values().next().value;n.lu.delete(t);const e=new O(X.fromString(t)),r=n.du.next();n.Pu.set(r,new rm(e)),n.hu=n.hu.insert(e,r),bu(n.remoteStore,new zt(Pt(Fs(e.path)),r,"TargetPurposeLimboResolution",pr.le))}}async function In(n,t,e){const r=F(n),i=[],o=[],u=[];r.uu.isEmpty()||(r.uu.forEach((l,h)=>{u.push(r.Ru(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const I=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Gs.Rs(h.targetId,f);o.push(I)}}))}),await Promise.all(u),r.au.j_(i),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>C.forEach(f,w=>C.forEach(w.ds,S=>g.persistence.referenceDelegate.addReference(I,w.targetId,S)).next(()=>C.forEach(w.As,S=>g.persistence.referenceDelegate.removeReference(I,w.targetId,S)))))}catch(I){if(!Oe(I))throw I;N(Ks,"Failed to update sequence numbers: "+I)}for(const I of f){const w=I.targetId;if(!I.fromCache){const S=g.xs.get(w),b=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(b);g.xs=g.xs.insert(w,k)}}}(r.localStore,o))}async function pm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N(ei,"User change. New user:",t.toKey());const r=await Cu(e.localStore,t);e.currentUser=t,function(o,u){o.Eu.forEach(l=>{l.forEach(h=>{h.reject(new x(P.CANCELLED,u))})}),o.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await In(e,r.ks)}}function gm(n,t){const e=F(n),r=e.Pu.get(t);if(r&&r._u)return j().add(r.key);{let i=j();const o=e.cu.get(t);if(!o)return i;for(const u of o){const l=e.uu.get(u);i=i.unionWith(l.view.Ya)}return i}}function Gu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hm.bind(null,t),t.au.j_=Zf.bind(null,t.eventManager),t.au.Vu=tm.bind(null,t.eventManager),t}function _m(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fm.bind(null,t),t}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wr(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return vf(this.persistence,new yf,t.initialUser,this.serializer)}yu(t){return new Ru(Hs.fi,this.serializer)}pu(t){return new Sf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class ym extends fr{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){K(this.persistence.referenceDelegate instanceof hr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nf(r,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Ru(r=>hr.fi(r,e),this.serializer)}}class Ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ca(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pm.bind(null,this.syncEngine),await Xf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jf}()}createDatastore(t){const e=wr(t.databaseInfo.databaseId),r=function(o){return new kf(o)}(t.databaseInfo);return function(o,u,l,h){return new Lf(o,u,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,l){return new Uf(r,i,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>ca(this.syncEngine,e,0),function(){return ra.C()?new ra:new Vf}())}createSyncEngine(t,e){return function(i,o,u,l,h,f,g){const I=new sm(i,o,u,l,h,f);return g&&(I.Au=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N(ce,"RemoteStore shutting down."),o.Ta.add(5),await vn(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ss.provider={build:()=>new Ss};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="FirestoreClient";class Em{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{N(te,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(N(te,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function as(n,t){n.asyncQueue.verifyOperationInProgress(),N(te,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ha(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Tm(n);N(te,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ia(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ia(t.remoteStore,i)),n._onlineComponents=t}async function Tm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(te,"Using user provided OfflineComponentProvider");try{await as(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;we("Error using user provided cache. Falling back to memory cache: "+e),await as(n,new fr)}}else N(te,"Using default OfflineComponentProvider"),await as(n,new ym(void 0));return n._offlineComponents}async function Qu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(te,"Using user provided OnlineComponentProvider"),await ha(n,n._uninitializedComponentsProvider._online)):(N(te,"Using default OnlineComponentProvider"),await ha(n,new Ss))),n._onlineComponents}function vm(n){return Qu(n).then(t=>t.syncEngine)}async function Wu(n){const t=await Qu(n),e=t.eventManager;return e.onListen=im.bind(null,t.syncEngine),e.onUnlisten=um.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=om.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cm.bind(null,t.syncEngine),e}function Im(n,t,e={}){const r=new Mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,l,h,f){const g=new Ku({next:w=>{g.Cu(),u.enqueueAndForget(()=>Lu(o,I));const S=w.docs.has(l);!S&&w.fromCache?f.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?f.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),I=new Fu(Fs(l.path),g,{includeMetadataChanges:!0,La:!0});return Mu(o,I)}(await Wu(n),n.asyncQueue,t,e,r)),r.promise}function Am(n,t,e={}){const r=new Mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,l,h,f){const g=new Ku({next:w=>{g.Cu(),u.enqueueAndForget(()=>Lu(o,I)),w.fromCache&&h.source==="server"?f.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),I=new Fu(l,g,{includeMetadataChanges:!0,La:!0});return Mu(o,I)}(await Wu(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,t,e){if(!e)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wm(n,t,e,r){if(t===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fa(n){if(!O.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ma(n){if(O.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function ee(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ri(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firestore.googleapis.com",pa=!0;class ga{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ju,this.ssl=pa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:pa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=wu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<tf)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vh;switch(r.type){case"firstParty":return new kh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=da.get(e);r&&(N("ComponentProvider","Removing Datastore"),da.delete(e),r.terminate())}(this),Promise.resolve()}}function Rm(n,t,e,r={}){var i;n=ee(n,Pr);const o=bs(t),u=n._getSettings(),l=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(nl(`https://${h}`),ol("Firestore",!0)),u.host!==Ju&&u.host!==h&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:r});if(!ln(f,l)&&(n._setSettings(f),r.mockUserToken)){let g,I;if(typeof r.mockUserToken=="string")g=r.mockUserToken,I=gt.MOCK_USER;else{g=rl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(w)}n._authCredentials=new bh(new La(g,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Sr(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Qt extends Sr{constructor(t,e,r){super(t,e,Fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new O(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function Km(n,t,...e){if(n=hn(n),Yu("collection","path",t),n instanceof Pr){const r=X.fromString(t,...e);return ma(r),new Qt(n,null,r)}{if(!(n instanceof It||n instanceof Qt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ma(r),new Qt(n.firestore,null,r)}}function Qm(n,t,...e){if(n=hn(n),arguments.length===1&&(t=Ua.newId()),Yu("doc","path",t),n instanceof Pr){const r=X.fromString(t,...e);return fa(r),new It(n,null,new O(r))}{if(!(n instanceof It||n instanceof Qt))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return fa(r),new It(n.firestore,n instanceof Qt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="AsyncQueue";class ya{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Su(this,"async_queue_retry"),this.ec=()=>{const r=os();r&&N(_a,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=t;const e=os();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=os();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new Mt;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Oe(t))throw t;N(_a,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(r=>{throw this.Ju=r,this.Yu=!1,Ft("INTERNAL UNHANDLED ERROR: ",Ea(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=e,e}enqueueAfterDelay(t,e,r){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const i=Js.createAndSchedule(this,t,e,r,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&M(47125,{_c:Ea(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function Ea(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class An extends Pr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ya,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ya(t),this._firestoreClient=void 0,await t}}}function Cm(n,t){const e=typeof n=="object"?n:gh(),r=typeof n=="string"?n:sr,i=hh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=tl("firestore");o&&Rm(i,...o)}return i}function si(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pm(n),n._firestoreClient}function Pm(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,f,g){return new Qh(l,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Xu(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Em(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(lt.fromBase64String(t))}catch(e){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new De(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=/^__.*__$/;class Vm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new de(t,this.data,this.fieldMask,e,this.fieldTransforms):new En(t,this.data,e,this.fieldTransforms)}}function Zu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{hc:n})}}class Vr{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new Vr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:r,Ec:!1});return i.dc(t),i}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return mr(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(Zu(this.hc)&&Sm.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class bm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||wr(t)}gc(t,e,r,i=!1){return new Vr({hc:t,methodName:e,fc:r,path:ct.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(n){const t=n._freezeSettings(),e=wr(n._databaseId);return new bm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Nm(n,t,e,r,i,o={}){const u=n.gc(o.merge||o.mergeFields?2:0,t,e,i);nc("Data must be an object, but it was:",u,r);const l=tc(r,u);let h,f;if(o.merge)h=new Rt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const w=xm(t,I,e);if(!u.contains(w))throw new x(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Mm(g,w)||g.push(w)}h=new Rt(g),f=u.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=u.fieldTransforms;return new Vm(new At(l),h,f)}function km(n,t,e){return new Vr({hc:3,fc:t.settings.fc,methodName:n._methodName,Ec:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ci extends oi{constructor(t,e){super(t),this.yc=e}_toFieldTransform(t){const e=km(this,t,!0),r=this.yc.map(o=>li(o,e)),i=new Se(r);return new vd(t.path,i)}isEqual(t){return t instanceof ci&&ln(this.yc,t.yc)}}function li(n,t){if(ec(n=hn(n)))return nc("Unsupported field value:",t,n),tc(n,t);if(n instanceof oi)return function(r,i){if(!Zu(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(r,i){const o=[];let u=0;for(const l of r){let h=li(l,i.Rc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=hn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:lr(i.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lr(i.serializer,o)}}if(r instanceof ai)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:_u(i.serializer,r._byteString)};if(r instanceof It){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.Vc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$s(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ui)return function(u,l){return{mapValue:{fields:{[Ka]:{stringValue:Qa},[ir]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw l.Vc("VectorValues must only contain numeric values.");return Us(l.serializer,f)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${ri(r)}`)}(n,t)}function tc(n,t){const e={};return ja(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(n,(r,i)=>{const o=li(i,t.Ic(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ec(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof ai||n instanceof De||n instanceof It||n instanceof oi||n instanceof ui)}function nc(n,t,e){if(!ec(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ri(e);throw r==="an object"?t.Vc(n+" a custom object"):t.Vc(n+" "+r)}}function xm(n,t,e){if((t=hn(t))instanceof ii)return t._internalPath;if(typeof t=="string")return rc(n,t);throw mr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Om=new RegExp("[~\\*/\\[\\]]");function rc(n,t,e){if(t.search(Om)>=0)throw mr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ii(...t.split("."))._internalPath}catch{throw mr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mr(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new x(P.INVALID_ARGUMENT,l+n+h)}function Mm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ic("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Lm extends sc{data(){return super.data()}}function ic(n,t){return typeof t=="string"?rc(n,t):t instanceof ii?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Um{convertValue(t,e="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return le(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[ir].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>Z(u.doubleValue));return new ui(o)}convertGeoPoint(t){return new ai(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=_r(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(pn(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(Au(r),9688,{name:t});const i=new gn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oc extends sc{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ic("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Zn extends oc{data(t={}){return super.data(t)}}class jm{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Zn(this._firestore,this._userDataWriter,r.key,r,new rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(l=>{const h=new Zn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new rn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Zn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new rn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),g=u.indexOf(l.doc.key)),{type:qm(l.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){n=ee(n,It);const t=ee(n.firestore,An);return Im(si(t),n._key).then(e=>$m(t,n,e))}class ac extends Um{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Xm(n){n=ee(n,Sr);const t=ee(n.firestore,An),e=si(t),r=new ac(t);return Fm(n._query),Am(e,n._query).then(i=>new jm(t,r,n,i))}function Ym(n,t,e){n=ee(n,It);const r=ee(n.firestore,An),i=Bm(n.converter,t,e);return uc(r,[Nm(Dm(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,St.none())])}function Jm(n){return uc(ee(n.firestore,An),[new Bs(n._key,St.none())])}function uc(n,t){return function(r,i){const o=new Mt;return r.asyncQueue.enqueueAndForget(async()=>lm(await vm(r),i,o)),o.promise}(si(n),t)}function $m(n,t,e){const r=e.docs.get(t._key),i=new ac(n);return new oc(n,i,t._key,r,new rn(e.hasPendingWrites,e.fromCache),t.converter)}function Zm(...n){return new ci("arrayUnion",n)}(function(t,e=!0){(function(i){ke=i})(ph),nr(new dn("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new An(new Dh(r.getProvider("auth-internal")),new xh(u,r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(f.options.projectId,g)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ie(wo,Ro,t),Ie(wo,Ro,"esm2017")})();const zm={apiKey:"AIzaSyAHZnt4ulqIHlfO9uUvVe_iAsTqWWsIZAA",authDomain:"smart-bookmark-saver.firebaseapp.com",projectId:"smart-bookmark-saver",storageBucket:"smart-bookmark-saver.firebasestorage.app",messagingSenderId:"237111402307",appId:"1:237111402307:web:6ad8f313f909dc874399f6",measurementId:"G-GRPXVBNQE4"},Hm=Pa(zm),tp=Cm(Hm);export{tp as a,Zm as b,Xm as c,Qm as d,Km as e,Jm as f,Wm as g,Ym as s};
