var Ht=Object.defineProperty;var Mt=(s,t,e)=>t in s?Ht(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var m=(s,t,e)=>(Mt(s,typeof t!="symbol"?t+"":t,e),e);import{o as Ot}from"./logAllInteractions-7c4f95cf.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=window,Q=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),tt=new WeakMap;let gt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(e,t))}return t}toString(){return this.cssText}};const Rt=s=>new gt(typeof s=="string"?s:s+"",void 0,X),Y=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new gt(e,s,X)},It=(s,t)=>{Q?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=O.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},et=Q?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Rt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const R=window,it=R.trustedTypes,jt=it?it.emptyScript:"",st=R.reactiveElementPolyfillSupport,J={toAttribute(s,t){switch(t){case Boolean:s=s?jt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},yt=(s,t)=>t!==s&&(t==t||s==s),L={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:yt};let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(et(n))}else t!==void 0&&e.push(et(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return It(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var n;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:J).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:J;this._$El=r,this[r]=h.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:A}),((z=R.reactiveElementVersions)!==null&&z!==void 0?z:R.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const I=window,E=I.trustedTypes,nt=E?E.createPolicy("lit-html",{createHTML:s=>s}):void 0,K="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,At="?"+f,zt=`<${At}>`,y=document,T=()=>y.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",bt=Array.isArray,Lt=s=>bt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",B=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,_=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),at=/'/g,lt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Dt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),St=Dt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ct=new WeakMap,g=y.createTreeWalker(y,129,null,!1),Bt=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=x;for(let a=0;a<e;a++){const l=s[a];let p,c,d=-1,v=0;for(;v<l.length&&(o.lastIndex=v,c=o.exec(l),c!==null);)v=o.lastIndex,o===x?c[1]==="!--"?o=rt:c[1]!==void 0?o=ot:c[2]!==void 0?(Et.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=_):c[3]!==void 0&&(o=_):o===_?c[0]===">"?(o=n??x,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,p=c[1],o=c[3]===void 0?_:c[3]==='"'?lt:at):o===lt||o===at?o=_:o===rt||o===ot?o=x:(o=_,n=void 0);const k=o===_&&s[a+1].startsWith("/>")?" ":"";r+=o===x?l+zt:d>=0?(i.push(p),l.slice(0,d)+K+l.slice(d)+f+k):l+f+(d===-2?(i.push(void 0),a):k)}const h=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(h):h,i]};class N{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const h=t.length-1,a=this.parts,[l,p]=Bt(t,e);if(this.el=N.createElement(l,i),g.currentNode=this.el.content,e===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(n=g.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const d of n.getAttributeNames())if(d.endsWith(K)||d.startsWith(f)){const v=p[o++];if(c.push(d),v!==void 0){const k=n.getAttribute(v.toLowerCase()+K).split(f),H=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:H[2],strings:k,ctor:H[1]==="."?Wt:H[1]==="?"?Ft:H[1]==="@"?Jt:j})}else a.push({type:6,index:r})}for(const d of c)n.removeAttribute(d)}if(Et.test(n.tagName)){const c=n.textContent.split(f),d=c.length-1;if(d>0){n.textContent=E?E.emptyScript:"";for(let v=0;v<d;v++)n.append(c[v],T()),g.nextNode(),a.push({type:2,index:++r});n.append(c[d],T())}}}else if(n.nodeType===8)if(n.data===At)a.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(f,c+1))!==-1;)a.push({type:7,index:r}),c+=f.length-1}r++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function C(s,t,e=s,i){var n,r,o,h;if(t===S)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=U(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,i)),i!==void 0?((o=(h=e)._$Co)!==null&&o!==void 0?o:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=C(s,a._$AS(s,t.values),a,i)),t}class Vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);g.currentNode=r;let o=g.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let p;l.type===2?p=new P(o,o.nextSibling,this,t):l.type===1?p=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(p=new Kt(o,this,t)),this._$AV.push(p),l=n[++a]}h!==(l==null?void 0:l.index)&&(o=g.nextNode(),h++)}return g.currentNode=y,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,n){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Lt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=N.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const o=new Vt(r,this),h=o.u(this.options);o.v(i),this.$(h),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new N(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new P(this.k(T()),this.k(T()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}let j=class{constructor(t,e,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=C(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const h=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=C(this,h[i+a],e,a),l===S&&(l=this._$AH[a]),o||(o=!U(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}o&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Wt extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const qt=E?E.emptyScript:"";class Ft extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,qt):this.element.removeAttribute(this.name)}}class Jt extends j{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const n=this._$AH,r=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}let Kt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};const ht=I.litHtmlPolyfillSupport;ht==null||ht(N,P),((D=I.litHtmlVersions)!==null&&D!==void 0?D:I.litHtmlVersions=[]).push("2.7.4");const Zt=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const h=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new P(t.insertBefore(T(),h),h,void 0,e??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,W;let b=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};b.finalized=!0,b._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:b});const dt=globalThis.litElementPolyfillSupport;dt==null||dt({LitElement:b});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.3.2");class Z extends b{get button(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("button"))??null}constructor(){super(),this.score=0,this.dots=0}incrementAndUpdateUI(){++this.score}startUpdateUI(){this.incrementAndUpdateUI(),++this.dots}endUpdateUI(){--this.dots}getDotsString(){if(this.dots==0)return"";const t=Math.min(8,2+this.dots);return".".repeat(t)}render(){const{score:t}=this;return St`
			<div class="score">Score: ${t} ${this.getDotsString()}</div>
			<div class="buttons">
				<button>
					Increment
				</button>
			</div>
		`}}m(Z,"properties",{score:{},dots:{}}),m(Z,"styles",[Y`
		:host {
			display: grid;
			grid-template-rows: 1fr min-content;

			min-height: 8em;
			margin: 1em;

			align-items: center;
			justify-content: center;
		}

		.score {
			text-align:center;
			font-size: 3em;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		
		.buttons {
			display: grid;
			align-items: center;
			justify-content: center;
		}

		button {
			padding: 0.5em;
			font-size: 18px;
		}

		button:active {
			background-color:orange;
		}
	`]);customElements.define("score-keeper",Z);var G,Ct=-1,Gt=function(s){addEventListener("pageshow",function(t){t.persisted&&(Ct=t.timeStamp,s(t))},!0)},wt=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},Qt=function(){var s=wt();return s&&s.activationStart||0},ut=function(s,t){var e=wt(),i="navigate";return Ct>=0?i="back-forward-cache":e&&(i=document.prerendering||Qt()>0?"prerender":document.wasDiscarded?"restore":e.type.replace(/_/g,"-")),{name:s,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},xt=function(s,t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(s)){var i=new PerformanceObserver(function(n){Promise.resolve().then(function(){t(n.getEntries())})});return i.observe(Object.assign({type:s,buffered:!0},e||{})),i}}catch{}},pt=function(s,t,e,i){var n,r;return function(o){t.value>=0&&(o||i)&&((r=t.value-(n||0))||n===void 0)&&(n=t.value,t.delta=r,t.rating=function(h,a){return h>a[1]?"poor":h>a[0]?"needs-improvement":"good"}(t.value,e),s(t))}},Xt=function(s){var t=function(e){e.type!=="pagehide"&&document.visibilityState!=="hidden"||s(e)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},Yt=function(s){document.prerendering?addEventListener("prerenderingchange",function(){return s()},!0):s()},Tt=0,q=1/0,M=0,te=function(s){s.forEach(function(t){t.interactionId&&(q=Math.min(q,t.interactionId),M=Math.max(M,t.interactionId),Tt=M?(M-q)/7+1:0)})},Ut=function(){return G?Tt:performance.interactionCount||0},ee=function(){"interactionCount"in performance||G||(G=xt("event",te,{type:"event",buffered:!0,durationThreshold:0}))},vt=[200,500],Nt=0,$t=function(){return Ut()-Nt},$=[],F={},ft=function(s){var t=$[$.length-1],e=F[s.interactionId];if(e||$.length<10||s.duration>t.latency){if(e)e.entries.push(s),e.latency=Math.max(e.latency,s.duration);else{var i={id:s.interactionId,latency:s.duration,entries:[s]};F[i.id]=i,$.push(i)}$.sort(function(n,r){return r.latency-n.latency}),$.splice(10).forEach(function(n){delete F[n.id]})}},ie=function(s,t){t=t||{},Yt(function(){ee();var e,i=ut("INP"),n=function(o){o.forEach(function(l){l.interactionId&&ft(l),l.entryType==="first-input"&&!$.some(function(p){return p.entries.some(function(c){return l.duration===c.duration&&l.startTime===c.startTime})})&&ft(l)});var h,a=(h=Math.min($.length-1,Math.floor($t()/50)),$[h]);a&&a.latency!==i.value&&(i.value=a.latency,i.entries=a.entries,e())},r=xt("event",n,{durationThreshold:t.durationThreshold||40});e=pt(s,i,vt,t.reportAllChanges),r&&(r.observe({type:"first-input",buffered:!0}),Xt(function(){n(r.takeRecords()),i.value<0&&$t()>0&&(i.value=0,i.entries=[]),e(!0)}),Gt(function(){$=[],Nt=Ut(),i=ut("INP"),e=pt(s,i,vt,t.reportAllChanges)}))})};const se=Y`
.good {
	color: rgb(0, 85, 0);
}

.needs-improvement {
	color: rgb(219, 154, 42);
}

.poor {
	color: rgb(160, 17, 17);
}
`;class w extends b{constructor(){super(),this.metricName="NoName"}render(){const{metricName:t,score:e,rating:i}=this;return St`
			<div class="title">${t}</div>
			<span class=${i}>${e}</span>
			`}connectedCallback(){super.connectedCallback()}}m(w,"properties",{metricName:{},score:{},rating:{}}),m(w,"styles",[se,Y`
		:host {
			display: grid;
			position: relative;
			min-height: 5em;
			min-width: 10em;
			align-items: center;
			justify-content: center;

			border: 1px solid #ddd;
			border-radius: 10px;
			overflow: hidden;
		}

		.title {
			position: absolute;
			top: 0;
			left: 0;
			padding: 0.25em;
		}

		span {
			font-size: 2em;
		}
	`]);class ne extends w{constructor(){super(),this.metricName="INP"}connectedCallback(){super.connectedCallback(),ie(({value:t,rating:e})=>{this.score=Math.round(t),this.rating=e},{reportAllChanges:!0,durationThreshold:0})}}customElements.define("inp-score",ne);class re extends w{constructor(){super(),this.metricName="Interaction"}connectedCallback(){super.connectedCallback(),Ot(({value:t,rating:e})=>{this.score=Math.round(t),this.rating=e})}}customElements.define("interaction-score",re);class Pt extends w{constructor(){super(),this.metricName="Timer",this.rating=""}start(){this.start=performance.now(),this.tick()}tick(){const t=performance.now()-this.start,e=mt(Math.floor(t/1e3)),i=mt(Math.floor(t%1e3/10));this.score=`${e}.${i}`,requestAnimationFrame(()=>this.tick())}connectedCallback(){super.connectedCallback(),this.start()}}m(Pt,"properties",{start:{}});customElements.define("my-timer",Pt);function mt(s){return String(s).padStart(2,"0")}const _t=1e3;class kt extends w{constructor(){super(),this.metricName="FPS",this.frameTimes=[]}get score(){return Math.floor((this.frameTimes.length-1)/_t*1e3)}get rating(){return this.score>40?"good":this.score>20?"needs-improvement":"poor"}start(){requestAnimationFrame(this.tick.bind(this))}addFrameTime(t){this.frameTimes=this.frameTimes.filter(e=>t-e<=_t),this.frameTimes.push(t)}tick(t){this.addFrameTime(t),this.start()}connectedCallback(){super.connectedCallback(),this.start()}}m(kt,"properties",{frameTimes:{}});customElements.define("fps-meter",kt);