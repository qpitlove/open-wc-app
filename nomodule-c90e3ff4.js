System.register(["./nomodule-95d70700.js"],(function(e,t){var n,i,r,s,a,o,u,l,c,h,p,d,f,v,y,m,_,g,S,w,k,x,b,P,C,N,A,T,E,V,U,M,O,R,F,j,q,z,B,I,L,$,H,W,D,J,G,K,Q,X,Y,Z,ee,te,ne,ie,re,se,ae,oe,ue,le,ce,he,pe,de,fe,ve,ye,me;function _e(){var e=f([":host{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;font-size:calc(10px + 2vmin);color:#1a2b42;max-width:960px;margin:0 auto;text-align:center}main{flex-grow:1}.logo>svg{margin-top:36px;animation:app-logo-spin infinite 20s linear}@keyframes app-logo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}"]);return _e=function(){return e},e}function ge(){var e=f([' <main> <div class="logo">','</div> <h1>My app</h1> <p>Edit <code>src/MyApp.js</code> and save to reload.</p> <a class="app-link" href="https://open-wc.org/developing/#code-examples" target="_blank" rel="noopener noreferrer"> Code examples </a> </main> <p class="app-footer"> 🚽 Made with love by <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>. </p> ']);return ge=function(){return e},e}function Se(){var e=f([' <svg width="244px" height="244px" viewBox="0 0 244 244" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#9B00FF" offset="0%"></stop> <stop stop-color="#0077FF" offset="100%"></stop> </linearGradient> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M205.639259,176.936244 C207.430887,174.217233 209.093339,171.405629 210.617884,168.510161 M215.112174,158.724316 C216.385153,155.50304 217.495621,152.199852 218.433474,148.824851 M220.655293,138.874185 C221.231935,135.482212 221.637704,132.03207 221.863435,128.532919 M222,118.131039 C221.860539,114.466419 221.523806,110.85231 221.000113,107.299021 M218.885321,96.8583653 C218.001583,93.4468963 216.942225,90.1061026 215.717466,86.8461994 M211.549484,77.3039459 C209.957339,74.1238901 208.200597,71.0404957 206.290425,68.0649233 M200.180513,59.5598295 C181.848457,36.6639805 153.655709,22 122.036748,22 C66.7879774,22 22,66.771525 22,122 C22,177.228475 66.7879774,222 122.036748,222 C152.914668,222 180.52509,208.015313 198.875424,186.036326" id="Shape" stroke="url(#linearGradient-1)" stroke-width="42.0804674"></path> </g> </svg> ']);return Se=function(){return e},e}function we(e,t){for(var n=e.element.content,i=e.parts,r=document.createTreeWalker(n,P,null,!1),s=N(i),a=i[s],o=-1,u=0,l=[],c=null;r.nextNode();){o++;var h=r.currentNode;for(h.previousSibling===c&&(c=null),t.has(h)&&(l.push(h),null===c&&(c=h)),null!==c&&u++;void 0!==a&&a.index===o;)a.index=null!==c?-1:a.index-u,a=i[s=N(i,s)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}function ke(e){var t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var i=e.strings.join(m);return void 0===(n=t.keyString.get(i))&&(n=new S(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}return e("_a",void 0),{setters:[function(e){n=e.classCallCheck,i=e.createClass,r=e.createForOfIteratorHelper,s=e.toConsumableArray,a=e.typeof,o=e.createSuper,u=e.inherits,l=e.get,c=e.getPrototypeOf,h=e.wrapNativeSuper,p=e.asyncToGenerator,d=e.regeneratorRuntime,f=e.taggedTemplateLiteral}],execute:function(){v="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,y=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var i=t.nextSibling;e.removeChild(t),t=i}},m="{{lit-".concat(String(Math.random()).slice(2),"}}"),_="\x3c!--".concat(m,"--\x3e"),g=new RegExp("".concat(m,"|").concat(_)),"$lit$",S=function e(t,i){n(this,e),this.parts=[],this.element=i;for(var r=[],s=[],a=document.createTreeWalker(i.content,133,null,!1),o=0,u=-1,l=0,c=t.strings,h=t.values.length;l<h;){var p=a.nextNode();if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var d=p.attributes,f=d.length,v=0,y=0;y<f;y++)w(d[y].name,"$lit$")&&v++;for(;v-- >0;){var _=c[l],S=b.exec(_)[2],k=S.toLowerCase()+"$lit$",P=p.getAttribute(k);p.removeAttribute(k);var C=P.split(g);this.parts.push({type:"attribute",index:u,name:S,strings:C}),l+=C.length-1}}"TEMPLATE"===p.tagName&&(s.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var N=p.data;if(N.indexOf(m)>=0){for(var A=p.parentNode,T=N.split(g),E=T.length-1,V=0;V<E;V++){var U=void 0,M=T[V];if(""===M)U=x();else{var O=b.exec(M);null!==O&&w(O[2],"$lit$")&&(M=M.slice(0,O.index)+O[1]+O[2].slice(0,-"$lit$".length)+O[3]),U=document.createTextNode(M)}A.insertBefore(U,p),this.parts.push({type:"node",index:++u})}""===T[E]?(A.insertBefore(x(),p),r.push(p)):p.data=T[E],l+=E}}else if(8===p.nodeType)if(p.data===m){var R=p.parentNode;null!==p.previousSibling&&u!==o||(u++,R.insertBefore(x(),p)),o=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(r.push(p),u--),l++}else for(var F=-1;-1!==(F=p.data.indexOf(m,F+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=s.pop()}for(var j=0,q=r;j<q.length;j++){var z=q[j];z.parentNode.removeChild(z)}},w=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},k=function(e){return-1!==e.index},x=function(){return document.createComment("")},b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,P=133,C=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,P,null,!1);n.nextNode();)t++;return t},N=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var i=e[n];if(k(i))return n}return-1},A=new WeakMap,T=function(e){return"function"==typeof e&&A.has(e)},E={},V={},U=function(){function e(t,i,r){n(this,e),this.__parts=[],this.template=t,this.processor=i,this.options=r}return i(e,[{key:"update",value:function(e){var t,n=0,i=r(this.__parts);try{for(i.s();!(t=i.n()).done;){var s=t.value;void 0!==s&&s.setValue(e[n]),n++}}catch(e){i.e(e)}finally{i.f()}var a,o=r(this.__parts);try{for(o.s();!(a=o.n()).done;){var u=a.value;void 0!==u&&u.commit()}}catch(e){o.e(e)}finally{o.f()}}},{key:"_clone",value:function(){for(var e,t=v?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1),a=0,o=0,u=r.nextNode();a<i.length;)if(e=i[a],k(e)){for(;o<e.index;)o++,"TEMPLATE"===u.nodeName&&(n.push(u),r.currentNode=u.content),null===(u=r.nextNode())&&(r.currentNode=n.pop(),u=r.nextNode());if("node"===e.type){var l=this.processor.handleTextExpression(this.options);l.insertAfterNode(u.previousSibling),this.__parts.push(l)}else{var c;(c=this.__parts).push.apply(c,s(this.processor.handleAttributeExpressions(u,e.name,e.strings,this.options)))}a++}else this.__parts.push(void 0),a++;return v&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),M=" ".concat(m," "),O=function(){function e(t,i,r,s){n(this,e),this.strings=t,this.values=i,this.type=r,this.processor=s}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,i=0;i<e;i++){var r=this.strings[i],s=r.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===r.indexOf("--\x3e",s+1);var a=b.exec(r);t+=null===a?r+(n?M:_):r.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+m}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),R=function(e){return null===e||!("object"===a(e)||"function"==typeof e)},F=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},j=function(){function e(t,i,r){n(this,e),this.dirty=!0,this.element=t,this.name=i,this.strings=r,this.parts=[];for(var s=0;s<r.length-1;s++)this.parts[s]=this._createPart()}return i(e,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",i=0;i<t;i++){n+=e[i];var s=this.parts[i];if(void 0!==s){var a=s.value;if(R(a)||!F(a))n+="string"==typeof a?a:String(a);else{var o,u=r(a);try{for(u.s();!(o=u.n()).done;){var l=o.value;n+="string"==typeof l?l:String(l)}}catch(e){u.e(e)}finally{u.f()}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),q=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===E||R(e)&&e===this.value||(this.value=e,T(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;T(this.value);){var e=this.value;this.value=E,e(this)}this.value!==E&&this.committer.commit()}}]),e}(),z=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(x()),this.endNode=e.appendChild(x())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=x()),e.__insert(this.endNode=x())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=x()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;T(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}var t=this.__pendingValue;t!==E&&(R(t)?t!==this.value&&this.__commitText(t):t instanceof O?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):F(t)?this.__commitIterable(t):t===V?(this.value=V,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof U&&this.value.template===t)this.value.update(e.values);else{var n=new U(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,i,s=this.value,a=0,o=r(t);try{for(o.s();!(i=o.n()).done;){var u=i.value;void 0===(n=s[a])&&(n=new e(this.options),s.push(n),0===a?n.appendIntoPart(this):n.insertAfterPart(s[a-1])),n.setValue(u),n.commit(),a++}}catch(e){o.e(e)}finally{o.f()}a<s.length&&(s.length=a,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;y(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),B=function(){function e(t,i,r){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=r}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;T(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}if(this.__pendingValue!==E){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=E}}}]),e}(),I=function(e){u(r,e);var t=o(r);function r(e,i,s){var a;return n(this,r),(a=t.call(this,e,i,s)).single=2===s.length&&""===s[0]&&""===s[1],a}return i(r,[{key:"_createPart",value:function(){return new L(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:l(c(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(j),L=function(e){u(i,e);var t=o(i);function i(){return n(this,i),t.apply(this,arguments)}return i}(q),$=!1,function(){try{var e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}(),H=function(){function e(t,i,r){var s=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=i,this.eventContext=r,this.__boundHandleEvent=function(e){return s.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;T(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=E,e(this)}if(this.__pendingValue!==E){var t=this.__pendingValue,n=this.value,i=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),r=null!=t&&(null==n||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=W(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=E}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),W=function(e){return e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},D=new Map,J=new WeakMap,G=function(e,t,n){var i=J.get(t);void 0===i&&(y(t,t.firstChild),J.set(t,i=new z(Object.assign({templateFactory:ke},n))),i.appendInto(t)),i.setValue(e),i.commit()},K=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,i){var r=t[0];return"."===r?new I(e,t.slice(1),n).parts:"@"===r?[new H(e,t.slice(1),i.eventContext)]:"?"===r?[new B(e,t.slice(1),n)]:new j(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new z(e)}}]),e}()),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1"),Q=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return new O(e,n,"html",K)},X=function(e,t){return"".concat(e,"--").concat(t)},Y=!0,void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1),Z=function(e){return function(t){var n=X(t.type,e),i=D.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},D.set(n,i));var r=i.stringsArray.get(t.strings);if(void 0!==r)return r;var s=t.strings.join(m);if(void 0===(r=i.keyString.get(s))){var a=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(a,e),r=new S(t,a),i.keyString.set(s,r)}return i.stringsArray.set(t.strings,r),r}},ee=["html","svg"],te=function(e){ee.forEach((function(t){var n=D.get(X(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),we(e,n)}))}))},ne=new Set,ie=function(e,t,n){ne.add(e);var i=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),s=r.length;if(0!==s){for(var a=document.createElement("style"),o=0;o<s;o++){var u=r[o];u.parentNode.removeChild(u),a.textContent+=u.textContent}te(e);var l=i.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.element.content,r=e.parts;if(null!=n)for(var s=document.createTreeWalker(i,P,null,!1),a=N(r),o=0,u=-1;s.nextNode();){u++;var l=s.currentNode;for(l===n&&(o=C(t),n.parentNode.insertBefore(t,n));-1!==a&&r[a].index===u;){if(o>0){for(;-1!==a;)r[a].index+=o,a=N(r,a);return}a=N(r,a)}}else i.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var h=new Set;h.add(a),we(n,h)}}else window.ShadyCSS.prepareTemplateStyles(i,e)},re=function(e,t,n){if(!n||"object"!==a(n)||!n.scopeName)throw new Error("The `scopeName` option is required.");var i=n.scopeName,r=J.has(t),s=Y&&11===t.nodeType&&!!t.host,o=s&&!ne.has(i),u=o?document.createDocumentFragment():t;if(G(e,u,Object.assign({templateFactory:Z(i)},n)),o){var l=J.get(u);J.delete(u);var c=l.value instanceof U?l.value.template:void 0;ie(i,u,c),y(t,t.firstChild),t.appendChild(u),J.set(t,l)}!r&&s&&window.ShadyCSS.styleElement(t.host)},window.JSCompiler_renameProperty=function(e,t){return e},se={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ae=function(e,t){return t!==e&&(t==t||e==e)},oe={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ae},1,4,8,16,"finalized",ue=function(e){u(c,e);var t,l=o(c);function c(){var e;return n(this,c),(e=l.call(this))._updateState=0,e._instanceProperties=void 0,e._updatePromise=new Promise((function(t){return e._enableUpdatingResolver=t})),e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}return i(c,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var i=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,i)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:oe,i=this.constructor,r=i._attributeNameForProperty(e,n);if(void 0!==r){var s=i._propertyValueToAttribute(t,n);if(void 0===s)return;this._updateState=8|this._updateState,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){var r=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,r),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(t=p(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,e.prev=1,e.next=4,this._updatePromise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:if(null==(t=this.performUpdate())){e.next=12;break}return e.next=12,t;case 12:return e.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(){return t.apply(this,arguments)})},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===a(e)?Symbol():"__".concat(e),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}},{key:"getPropertyDescriptor",value:function(e,t,n){return{get:function(){return this[t]},set:function(n){var i=this[e];this[t]=n,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this._classProperties&&this._classProperties.get(e)||oe}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,i=[].concat(s(Object.getOwnPropertyNames(n)),s("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])),a=r(i);try{for(a.s();!(t=a.n()).done;){var o=t.value;this.createProperty(o,n[o])}}catch(e){a.e(e)}finally{a.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ae;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,i=t.converter||se,r="function"==typeof i?i:i.fromAttribute;return r?r(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,i=t.converter;return(i&&i.toAttribute||se.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,i){var r=e._attributeNameForProperty(i,n);void 0!==r&&(e._attributeToPropertyMap.set(r,i),t.push(r))})),t}}]),c}(h(HTMLElement)),"finalized",ue.finalized=!0,le="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),he=function(){function e(t,i){if(n(this,e),i!==ce)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return i(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(le?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),pe=function(e){if(e instanceof he)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},de=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var r=n.reduce((function(t,n,i){return t+pe(n)+e[i+1]}),e[0]);return new he(r,ce)},(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1"),fe={},(ve=function(e){u(r,e);var t=o(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"initialize",value:function(){l(c(r.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?le?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){l(c(r.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this,n=this.render();l(c(r.prototype),"update",this).call(this,e),n!==fe&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return fe}}],[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){var t=function e(t,n){return t.reduceRight((function(t,n){return Array.isArray(n)?e(n,t):(t.add(n),t)}),n)}(e,new Set),n=[];t.forEach((function(e){return n.unshift(e)})),this._styles=n}else this._styles=[e]}}}]),r}(ue)).finalized=!0,ve.render=re,ye=Q(Se()),me=function(e){u(r,e);var t=o(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"render",value:function(){return Q(ge(),ye)}}],[{key:"properties",get:function(){return{title:{type:String},page:{type:String}}}},{key:"styles",get:function(){return de(_e())}}]),r}(ve),customElements.define("open-wc-app",me)}}}));
