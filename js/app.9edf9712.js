(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0573":function(e,t,a){},"0eba":function(e,t,a){"use strict";var n=a("2a8b"),r=a.n(n);r.a},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},"13ba":function(e,t,a){},14:function(e,t){},15:function(e,t){},16:function(e,t){},2:function(e,t){},"295f":function(e,t,a){},"2a8b":function(e,t,a){},3:function(e,t){},"354c":function(e,t,a){"use strict";var n=a("d420"),r=a.n(n);r.a},4:function(e,t){},"46f4":function(e,t,a){},5:function(e,t){},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"5cd9":function(e,t,a){},6:function(e,t){},"6e9d":function(e,t,a){},7:function(e,t){},"703b":function(e,t,a){},8:function(e,t){},"80cb":function(e,t,a){},"81e7":function(e,t,a){"use strict";var n=a("703b"),r=a.n(n);r.a},9:function(e,t){},"974c":function(e,t,a){"use strict";var n=a("6e9d"),r=a.n(n);r.a},"9c0c":function(e,t,a){},ae3e:function(e,t,a){"use strict";var n=a("46f4"),r=a.n(n);r.a},b89a:function(e,t,a){"use strict";var n=a("13ba"),r=a.n(n);r.a},c520:function(e,t,a){"use strict";var n=a("0573"),r=a.n(n);r.a},c913:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Editor")]),e._v(" | "),a("router-link",{attrs:{to:"/dataset-browser-demo"}},[e._v("Dataset-Browser-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/dataset-editor-demo"}},[e._v("Dataset-Editor-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/editor-demo"}},[e._v("Editor-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),a("router-view")],1)},o=[],i=a("9ab4"),s=a("60a3");let l=class extends s["c"]{mounted(){}};l=i["a"]([s["a"]],l);var u=l,c=u,d=(a("5c0b"),a("2877")),p=Object(d["a"])(c,r,o,!1,null,null,null),h=p.exports,v=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"card",attrs:{id:"va"}},[a("label",{attrs:{for:"s_input"}},[e._v("Resource:")]),a("term-editor",{staticClass:"flexrow",attrs:{id:"s_input","term-types":"['BlankNode', 'NamedNode']"},model:{value:e.s,callback:function(t){e.s=t},expression:"s"}}),e._l(e.entries,(function(t,n){return a("div",{key:t.id,staticClass:"flexrow"},[a("named-node-editor",{model:{value:t.p,callback:function(a){e.$set(t,"p",a)},expression:"entry.p"}}),a("term-editor",{model:{value:t.o,callback:function(a){e.$set(t,"o",a)},expression:"entry.o"}}),a("button",{staticClass:"icon",attrs:{type:"button"},on:{click:function(t){return e.entries.splice(n,1)}}},[a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])])],1)})),a("button",{attrs:{type:"button"},on:{click:e.addRow}},[e._v("Add")]),a("button",{attrs:{type:"button",id:"submit"},on:{click:function(t){return t.preventDefault(),e.submit()}}},[e._v("Submit")])],2)},b=[],f=a("9b92"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.type,staticClass:"te"},[e.value?a("span",[a("button",{staticClass:"icon",style:"html"===e.type?"flex-wrap:wrap;width:26px;":"",attrs:{type:"button"},on:{click:function(t){return e.reset()}}},[a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z"}})]),"html"===e.compType?a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"}})]):e._e(),"label"===e.compType||"langString"===e.type||"literal"===e.type?a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"}})]):e._e(),"IRI"===e.compType?a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}})]):e._e(),"BlankNode"===e.compType?a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}})]):e._e(),"DefaultGraph"===e.compType?a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19.5 17C19.36 17 19.24 17 19.11 17.04L17.5 13.8C17.95 13.35 18.25 12.71 18.25 12C18.25 10.62 17.13 9.5 15.75 9.5C15.61 9.5 15.5 9.5 15.35 9.54L13.74 6.3C14.21 5.84 14.5 5.21 14.5 4.5C14.5 3.12 13.38 2 12 2S9.5 3.12 9.5 4.5C9.5 5.2 9.79 5.84 10.26 6.29L8.65 9.54C8.5 9.5 8.39 9.5 8.25 9.5C6.87 9.5 5.75 10.62 5.75 12C5.75 12.71 6.04 13.34 6.5 13.79L4.89 17.04C4.76 17 4.64 17 4.5 17C3.12 17 2 18.12 2 19.5C2 20.88 3.12 22 4.5 22S7 20.88 7 19.5C7 18.8 6.71 18.16 6.24 17.71L7.86 14.46C8 14.5 8.12 14.5 8.25 14.5C8.38 14.5 8.5 14.5 8.63 14.46L10.26 17.71C9.79 18.16 9.5 18.8 9.5 19.5C9.5 20.88 10.62 22 12 22S14.5 20.88 14.5 19.5C14.5 18.12 13.38 17 12 17C11.87 17 11.74 17 11.61 17.04L10 13.8C10.45 13.35 10.75 12.71 10.75 12C10.75 11.3 10.46 10.67 10 10.21L11.61 6.96C11.74 7 11.87 7 12 7C12.13 7 12.26 7 12.39 6.96L14 10.21C13.54 10.66 13.25 11.3 13.25 12C13.25 13.38 14.37 14.5 15.75 14.5C15.88 14.5 16 14.5 16.13 14.46L17.76 17.71C17.29 18.16 17 18.8 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.12 20.88 17 19.5 17M4.5 20.5C3.95 20.5 3.5 20.05 3.5 19.5S3.95 18.5 4.5 18.5 5.5 18.95 5.5 19.5 5.05 20.5 4.5 20.5M13 19.5C13 20.05 12.55 20.5 12 20.5S11 20.05 11 19.5 11.45 18.5 12 18.5 13 18.95 13 19.5M7.25 12C7.25 11.45 7.7 11 8.25 11S9.25 11.45 9.25 12 8.8 13 8.25 13 7.25 12.55 7.25 12M11 4.5C11 3.95 11.45 3.5 12 3.5S13 3.95 13 4.5 12.55 5.5 12 5.5 11 5.05 11 4.5M14.75 12C14.75 11.45 15.2 11 15.75 11S16.75 11.45 16.75 12 16.3 13 15.75 13 14.75 12.55 14.75 12M19.5 20.5C18.95 20.5 18.5 20.05 18.5 19.5S18.95 18.5 19.5 18.5 20.5 18.95 20.5 19.5 20.05 20.5 19.5 20.5Z"}})]):e._e()]),null!==e.value?a("existing-term-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):e._e()],1):a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]},function(t){return e.typeSelected(t)}]}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Select type")]),e._l(e.options,(function(t,n){return a("option",{key:n},[e._v(e._s(n))])}))],2)])},j=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.type,staticClass:"f"},["html"===e.type?a("html-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"IRI"===e.type?a("named-node-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"BlankNode"===e.type?a("blank-node-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"label"===e.type||"langString"===e.type?a("simple-literal-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"DefaultGraph"===e.type?a("input",{attrs:{disabled:"",value:"Default Graph"}}):a("div",[e._v("No value editor for "+e._s(e.type))])],1)},y=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-editor",{attrs:{value:e.content},on:{input:function(t){return e.fireEvents(t)}}})],1)},w=[],N=a("5873"),C=s["c"].extend({computed:{content:function(){return this.value?this.value.value:""}},methods:{fireEvents:function(e){this.$emit("input",f["literal"](e,f["namedNode"]("http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML")))}},props:["value"],components:{VueEditor:N["a"]}}),O=C,k=(a("e3a1"),Object(d["a"])(O,_,w,!1,null,"153fe86c",null)),L=k.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"language",attrs:{type:"text",size:"2",pattern:"[a-z][a-z]",spellcheck:"false"},domProps:{value:e.lang},on:{input:function(t){t.target.composing||(e.lang=t.target.value)}}})])},E=[],q=s["c"].extend({computed:{content:{get:function(){return this.value?this.value.value:""},set:function(e){this.$emit("input",this.value.language?f["literal"](e,this.value.language):f["literal"](e,f["namedNode"]("http://www.w3.org/2001/XMLSchema#string")))}},lang:{get:function(){return this.value&&this.value.language?this.value.language:""},set:function(e){this.$emit("input",e?f["literal"](this.value.value,e):f["literal"](this.value.value,f["namedNode"]("http://www.w3.org/2001/XMLSchema#string")))}}},props:["value"]}),$=q,T=(a("0eba"),Object(d["a"])($,S,E,!1,null,"a5b01f70",null)),M=T.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("vue-prefixplete",{model:{value:e.iri,callback:function(t){e.iri=t},expression:"iri"}})],1)},H=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("input",{attrs:{type:"text"},on:{input:function(t){return e.fireEvents()}}})])},G=[],V=(a("55ab"),a("bd71")),F=a.n(V),Q=s["c"].extend({model:{prop:"prefixpletevalue",event:"prefixpleteinput"},data:function(){return{prefixplete:null,visitor:"nobody"}},props:["prefixpletevalue"],methods:{fireEvents:function(){this.$emit("prefixpleteinput",this.prefixplete.value)}},watch:{prefixpletevalue:function(e){this.prefixplete.setValue(e)}},mounted:function(){this.prefixplete=new F.a(this.$el.firstElementChild,"https://ontologies.farewellutopia.com/sparql","https://ontologies.farewellutopia.com/");const e=this;this.prefixplete.action=function(){e.$emit("prefixpleteinput",e.prefixplete.value)},this.prefixplete.setValue(this.prefixpletevalue)}}),A=Q,P=(a("e458"),Object(d["a"])(A,D,G,!1,null,null,null)),R=P.exports,I=s["c"].extend({computed:{iri:{get:function(){return this.value?this.value.value:""},set:function(e){this.$emit("input",f["namedNode"](e))}}},props:["value"],components:{VuePrefixplete:R}}),Z=I,J=(a("974c"),Object(d["a"])(Z,B,H,!1,null,"023c5ff6",null)),X=J.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text",size:"5"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})])},K=[];let U=class extends s["c"]{get content(){return this.value?this.value.value:""}set content(e){this.$emit("input",f["blankNode"](e))}};i["a"]([Object(s["b"])()],U.prototype,"value",void 0),U=i["a"]([s["a"]],U);var W=U,Y=W,ee=(a("ae3e"),Object(d["a"])(Y,z,K,!1,null,"267ba02c",null)),te=ee.exports,ae=s["c"].extend({methods:{propagate:function(e){this.$emit("input",e)}},computed:{type:function(){const e={"http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML":"html","http://www.w3.org/2001/XMLSchema#string":"label","http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":"langString"};return"Literal"===this.value.termType?e[this.value.datatype.value]?e[this.value.datatype.value]:"literal":"NamedNode"===this.value.termType?"IRI":"DefaultGraph"===this.value.termType?"DefaultGraph":"BlankNode"}},props:["value"],components:{HtmlEditor:L,SimpleLiteralEditor:M,NamedNodeEditor:X,BlankNodeEditor:te}}),ne=ae,re=(a("81e7"),Object(d["a"])(ne,x,y,!1,null,"bab9f92a",null)),oe=re.exports;let ie=class extends s["c"]{constructor(){super(...arguments),this.type=null,this.previousValues=new Map}created(){const e={html:f["literal"]("",f["namedNode"]("http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML")),label:f["literal"](""),"label with language":f["literal"]("","en"),IRI:f["namedNode"](""),"Blank Node":f["blankNode"](),DefaultGraph:f["defaultGraph"]()};this.options=this.termTypes?Object.fromEntries(Object.entries(e).filter(([e,t])=>this.termTypes.indexOf(t.termType)>-1)):e,console.log("this.type: ",this.type)}get compType(){const e={"http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML":"html","http://www.w3.org/2001/XMLSchema#string":"label","http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":"langString"};return null!==this.value?"Literal"===this.value.termType?e[this.value.datatype.value]?e[this.value.datatype.value]:"literal":"NamedNode"===this.value.termType?"IRI":"DefaultGraph"===this.value.termType?"DefaultGraph":"BlankNode":null}propagate(e){this.$emit("input",e)}typeSelected(e){if(console.log("this.termTypes: ",this.termTypes),console.log("typeSelected: ",e),console.log("this.type: ",this.type),!this.type)return;const t=this.previousValues.get(this.type);t&&t.value.length>0&&window.confirm("Restoring previous value")?this.$emit("input",t):(console.log("maps to: ",this.options[this.type]),this.$emit("input",this.options[this.type]))}reset(){console.log("this.termTypes: ",this.termTypes),console.log("resetting editor",this.value),console.log("this.type: ",this.type),this.previousValues.set(this.compType,this.value),this.type=null,this.$emit("input",null)}};i["a"]([Object(s["b"])()],ie.prototype,"value",void 0),i["a"]([Object(s["b"])()],ie.prototype,"termTypes",void 0),ie=i["a"]([Object(s["a"])({components:{ExistingTermEditor:oe}})],ie);var se=ie,le=se,ue=(a("d841"),Object(d["a"])(le,g,j,!1,null,"d3eaf280",null)),ce=ue.exports;function de(e){switch(e.termType){case"NamedNode":return"<"+e.value+">";case"BlankNode":return"_:"+e.value;case"Literal":const t=e;return'"'+t.value+'"'+(t.datatype&&"http://www.w3.org/2001/XMLSchema#string"!==t.datatype.value&&"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"!==t.datatype.value?"^^<"+t.datatype.value+">":"")+(t.language?"@"+t.language:"");case"Variable":return"?"+e.value;case"DefaultGraph":return e.value}}var pe=n["a"].extend({data(){return{s:f["blankNode"](),counter:2,entries:[{id:0,p:f["namedNode"]("http://schema.org/headline"),o:void 0},{id:1,p:f["namedNode"]("http://schema.org/articleBody"),o:void 0}]}},methods:{addRow:function(){this.entries.push({id:this.counter,p:void 0,o:void 0}),this.counter++},submit:function(){let e=de(this.s),t=e+" ";for(let a of this.entries)if(a.o&&a.p){let e=de(a.p),n=de(a.o);t+=` ${e} ${n} ;\n`}}},components:{NamedNodeEditor:X,TermEditor:ce}});var he=pe,ve=(a("c520"),Object(d["a"])(he,m,b,!1,null,"445f7ffb",null)),me=ve.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._l(e.values,(function(t,n){return a("div",{key:n},[a("hr"),a("term-editor",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"i.value"}}),t.value?a("span",[e._v(" Term-type: "),a("code",[e._v(e._s(t.value.termType))]),a("br")]):e._e(),t.value?a("span",[e._v(" Value: "),a("code",[e._v(e._s(t.value.value))]),a("br")]):e._e(),t.value&&t.value.language?a("span",[e._v(" Language: "),a("code",[e._v(e._s(t.value.language))]),a("br")]):e._e(),t.value&&t.value.datatype?a("span",[e._v(" Datatype: "),a("code",[e._v(e._s(t.value.datatype.value))]),a("br")]):e._e()],1)})),a("hr"),a("pre",[e._v(e._s(e.quad?e.quad:" no valid quad "))]),a("quad-editor",{model:{value:e.quad,callback:function(t){e.quad=t},expression:"quad"}}),a("hr"),a("quad-editor",{attrs:{labels:!0},model:{value:e.quad,callback:function(t){e.quad=t},expression:"quad"}}),a("hr"),a("pre",[e._v(e._s(e.quaddeux?e.quaddeux:" no valid quad "))]),a("quad-editor",{attrs:{labels:!0},model:{value:e.quaddeux,callback:function(t){e.quaddeux=t},expression:"quaddeux"}}),a("hr"),a("pre",[e._v(e._s(e.ds))]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],2)},fe=[],ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g"},[e.labels?a("label",[e._v("Subject:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode']"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e.labels?a("label",[e._v("Predicate:")]):e._e(),a("existing-term-editor",{attrs:{"term-types":"['NamedNode']"},model:{value:e.predicate,callback:function(t){e.predicate=t},expression:"predicate"}}),e.labels?a("label",[e._v("Object:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'Literal']"},model:{value:e.object,callback:function(t){e.object=t},expression:"object"}}),e.labels?a("label",[e._v("Graph:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'DefaultGraph']"},model:{value:e.graph,callback:function(t){e.graph=t},expression:"graph"}})],1)},je=[];const xe=function(e){if(this.subject&&this.predicate&&this.object&&this.graph){const e=f["quad"](this.subject,this.predicate,this.object,this.graph);this.value&&e.equals(this.value)||this.$emit("input",e)}};let ye=class extends s["c"]{constructor(){super(...arguments),this.subject=this.value?this.value.subject:null,this.predicate=this.value?this.value.predicate:f["namedNode"](""),this.object=this.value?this.value.object:null,this.graph=this.value?this.value.graph:null}onValueChanged(e){null!==e&&(this.subject=e.subject,this.predicate=e.predicate,this.object=e.object,this.graph=e.graph)}};i["a"]([Object(s["b"])()],ye.prototype,"value",void 0),i["a"]([Object(s["b"])()],ye.prototype,"labels",void 0),i["a"]([Object(s["d"])("value")],ye.prototype,"onValueChanged",null),ye=i["a"]([Object(s["a"])({components:{TermEditor:ce,ExistingTermEditor:oe},watch:{subject:xe,predicate:xe,object:xe,graph:xe}})],ye);var _e=ye,we=_e,Ne=(a("354c"),Object(d["a"])(we,ge,je,!1,null,"0dfa4444",null)),Ce=Ne.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.orderedQuads,(function(t){return a("span",{key:t.id},[a("quad-editor",{model:{value:t.quad,callback:function(a){e.$set(t,"quad",a)},expression:"t.quad"}})],1)})),e.addedQuad?a("div",[a("quad-editor",{model:{value:e.newQuad,callback:function(t){e.newQuad=t},expression:"newQuad"}})],1):a("div",[a("button",{on:{click:function(t){return e.addQuad()}}},[e._v("Add quad")])])],2)},ke=[],Le=a("d0b4");let Se=0,Ee=class extends s["c"]{constructor(){super(...arguments),this.addedQuad=!1,this.previousHolders=new Map}beforeCreate(){this.uuid=Se.toString(),Se+=1}get newQuad(){return null}set newQuad(e){e&&(this.addedQuad=!1,this.value.add(e),this.$emit("input",Le["dataset"](this.value)))}addQuad(){this.addedQuad=!0}orderQuads(e){let t=new Array,a=this;new Map;for(let s of e){let e=a.previousHolders.get(s);e||(e={id:"",get quad(){return s},set quad(e){a.previousHolders.delete(s),a.value.delete(s),null!=e?a.value.add(e):console.log("removing quad"),s=e,a.previousHolders.set(e,this),a.$emit("input",Le["dataset"](a.value))}}),a.previousHolders.set(s,e),t.push(e)}const n=t.sort((e,t)=>{function a(e){const t=e(),n={then:function(e){return 0===t?a(e):n},finally:function(e){return 0===t?e():t}};return n}function n(a){return()=>e.quad[a].value<t.quad[a].value?-1:e.quad[a].value>t.quad[a].value?1:0}return a(n("graph")).then(n("subject")).then(n("predicate")).finally(n("object"))}),r={id:0},o=n.reduce((e,t)=>e.id>t.id?e:t,r);let i=o.id;return n.forEach(e=>{e.id||(e.id=++i+Math.floor(1e4*Math.random()))}),n}get orderedQuads(){return this.orderQuads(this.value)}};i["a"]([Object(s["b"])()],Ee.prototype,"value",void 0),Ee=i["a"]([Object(s["a"])({components:{QuadEditor:Ce}})],Ee);var qe=Ee,$e=qe,Te=Object(d["a"])($e,Oe,ke,!1,null,null,null),Me=Te.exports;const Be=Le["dataset"]([f["quad"](f["namedNode"]("http://example.org/Bill"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Berta"),f["defaultGraph"]())]);var He={name:"ValueEditorDemo",components:{TermEditor:ce,QuadEditor:Ce,DatasetEditor:Me},data:function(){let e=f["literal"]("<h1>Hello</h1>","http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML");return{values:[{value:e},{value:f["namedNode"]("http://example.org/something")},{value:f["literal"]("A simple label","en")},{value:null}],quad:f["quad"](f["namedNode"]("http://example.org/Bob"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Alice"),f["defaultGraph"]()),quaddeux:null,ds:Be}}},De=He,Ge=Object(d["a"])(De,be,fe,!1,null,null,null),Ve=Ge.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Dataset")]),a("pre",[e._v(e._s(e.ds.quads))]),a("pre",[e._v(e._s(JSON.stringify(e.ds.quads))+e._s(e.console.log("d",JSON.stringify(e.ds))))]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}}),a("h2",[e._v("The same once more")]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],1)},Qe=[];const Ae=Le["dataset"]([f["quad"](f["namedNode"]("http://example.org/Bill"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Berta"),f["defaultGraph"]()),f["quad"](f["namedNode"]("http://example.org/Charlie"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Carl"),f["defaultGraph"]())]);var Pe={name:"DatasetEditorDemo",components:{DatasetEditor:Me},data:function(){return{JSON:JSON,console:console,ds:Ae}}},Re=Pe,Ie=Object(d["a"])(Re,Fe,Qe,!1,null,null,null),Ze=Ie.exports,Je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Browse")]),a("dataset-browser",{attrs:{subject:"http://example.org/Bill",graph:e.defaultGraph},model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}}),a("h1",[e._v("Full Dataset")]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],1)},Xe=[],ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.subjectFilter?a("h2",[e._v(" "+e._s(e.subjectFilter.value)+" "),a("img",{attrs:{src:"images/subj-expand.svg",title:"(Subject)"}})]):e._e(),e.objectFilter?a("h2",{staticStyle:{"text-align":"end"}},[a("img",{attrs:{src:"images/obj-expand.svg",title:"Object:"}}),e._v(" "+e._s(e.objectFilter.value)+" ")]):e._e(),e._l(e.orderedQuads,(function(t){return a("span",{key:t.id},[a("browser-row",{attrs:{fixedSubject:e.subjectFilter,fixedGraph:e.graphFilter,fixedObject:e.objectFilter},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}},model:{value:t.quad,callback:function(a){e.$set(t,"quad",a)},expression:"t.quad"}})],1)})),e.addedQuad?a("div",[a("browser-row",{attrs:{fixedSubject:e.subjectFilter,fixedGraph:e.graphFilter,fixedObject:e.objectFilter},model:{value:e.newQuad,callback:function(t){e.newQuad=t},expression:"newQuad"}})],1):a("div",[a("button",{on:{click:function(t){return e.addQuad()}}},[e._v("Add attribute")])])],2)},Ke=[],Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g"},[e.labels&&!e.fixedSubject?a("label",[e._v("Subject:")]):e._e(),e.fixedSubject?e._e():a("div",{staticClass:"i"},[a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode']"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e.subject&&"Literal"!==e.subject.termType?a("resource-navigator",{attrs:{resource:e.subject},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}}}):e._e()],1),e.labels?a("label",[e._v("Predicate:")]):e._e(),a("existing-term-editor",{attrs:{"term-types":"['NamedNode']"},model:{value:e.predicate,callback:function(t){e.predicate=t},expression:"predicate"}}),e.labels&&!e.fixedObject?a("label",[e._v("Object:")]):e._e(),e.fixedObject?e._e():a("div",{staticClass:"i"},[a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'Literal']"},model:{value:e.object,callback:function(t){e.object=t},expression:"object"}}),e.object&&"Literal"!==e.object.termType?a("resource-navigator",{attrs:{resource:e.object},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}}}):e._e()],1),e.fixedGraph?e._e():a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'DefaultGraph']"},model:{value:e.graph,callback:function(t){e.graph=t},expression:"graph"}})],1)},We=[],Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"icon"},[a("img",{attrs:{src:"images/subj-expand.svg",title:"show properties"},on:{click:function(t){return t.preventDefault(),e.setSubject()}}})]),a("button",{staticClass:"icon"},[a("img",{attrs:{src:"images/obj-expand.svg",title:"show incoming"},on:{click:function(t){return t.preventDefault(),e.setObject()}}})])])},et=[];let tt=class extends s["c"]{setSubject(){this.$emit("subject",this.resource)}setObject(){this.$emit("object",this.resource)}};i["a"]([Object(s["b"])()],tt.prototype,"resource",void 0),tt=i["a"]([Object(s["a"])({components:{}})],tt);var at=tt,nt=at,rt=(a("b89a"),Object(d["a"])(nt,Ye,et,!1,null,"5478fd46",null)),ot=rt.exports;const it=function(e){if(this.subject&&this.predicate&&this.object&&this.graph){const e=f["quad"](this.subject,this.predicate,this.object,this.graph);this.value&&e.equals(this.value)||(console.log("emitting",e),this.$emit("input",e))}};let st=class extends s["c"]{constructor(){super(...arguments),this.subject=this.value?this.value.subject:this.fixedSubject?this.fixedSubject:null,this.predicate=this.value?this.value.predicate:f["namedNode"](""),this.object=this.value?this.value.object:this.fixedObject?this.fixedObject:null,this.graph=this.value?this.value.graph:this.fixedGraph?this.fixedGraph:null}onValueChanged(e){null!==e&&(this.subject=e.subject,this.predicate=e.predicate,this.object=e.object,this.graph=e.graph)}setSubject(e){this.$emit("subject",e)}setObject(e){this.$emit("object",e)}};i["a"]([Object(s["b"])()],st.prototype,"value",void 0),i["a"]([Object(s["b"])()],st.prototype,"fixedSubject",void 0),i["a"]([Object(s["b"])()],st.prototype,"fixedObject",void 0),i["a"]([Object(s["b"])()],st.prototype,"fixedGraph",void 0),i["a"]([Object(s["b"])()],st.prototype,"labels",void 0),i["a"]([Object(s["d"])("value")],st.prototype,"onValueChanged",null),st=i["a"]([Object(s["a"])({components:{TermEditor:ce,ExistingTermEditor:oe,ResourceNavigator:ot},watch:{subject:it,predicate:it,object:it,graph:it}})],st);var lt=st,ut=lt,ct=(a("d7eb"),Object(d["a"])(ut,Ue,We,!1,null,"0b65d0d8",null)),dt=ct.exports;let pt=0,ht=class extends Me{constructor(){super(...arguments),this.subjectFilter=null,this.objectFilter=null}beforeCreate(){this.uuid=pt.toString(),pt++}created(){this.subject&&(this.subject.termType?this.subjectFilter=this.subject:this.subjectFilter=f["namedNode"](this.subject)),this.object&&(this.object.termType?this.objectFilter=this.object:this.objectFilter=f["namedNode"](this.object)),this.graph&&(this.graph.termType?this.graphFilter=this.graph:this.graphFilter=f["namedNode"](this.graph))}get orderedQuads(){const e=this.orderQuads(this.value.match(this.subjectFilter,void 0,this.objectFilter,this.graphFilter));return e}setSubject(e){this.objectFilter=null,this.subjectFilter=e,this.$emit("input",Le["dataset"](this.value))}setObject(e){console.log("setobj"+e),this.objectFilter=e,this.subjectFilter=null,this.$emit("input",Le["dataset"](this.value))}};i["a"]([Object(s["b"])()],ht.prototype,"value",void 0),i["a"]([Object(s["b"])()],ht.prototype,"subject",void 0),i["a"]([Object(s["b"])()],ht.prototype,"object",void 0),i["a"]([Object(s["b"])()],ht.prototype,"graph",void 0),ht=i["a"]([Object(s["a"])({components:{BrowserRow:dt}})],ht);var vt=ht,mt=vt,bt=(a("cd91b"),Object(d["a"])(mt,ze,Ke,!1,null,"e5668792",null)),ft=bt.exports;const gt=Le["dataset"]([f["quad"](f["namedNode"]("http://example.org/Bill"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Berta"),f["defaultGraph"]()),f["quad"](f["namedNode"]("http://example.org/Charlie"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Carl"),f["defaultGraph"]()),f["quad"](f["namedNode"]("http://example.org/Carl"),f["namedNode"]("http://example.org/admires"),f["namedNode"]("http://example.org/Bill"),f["defaultGraph"]()),f["quad"](f["namedNode"]("http://example.org/Berta"),f["namedNode"]("http://example.org/knows"),f["namedNode"]("http://example.org/Charlie"),f["defaultGraph"]())]);var jt={name:"DatasetBrowserDemo",components:{DatasetBrowser:ft,DatasetEditor:Me},data:function(){return{ds:gt,defaultGraph:f["defaultGraph"]()}}},xt=jt,yt=Object(d["a"])(xt,Je,Xe,!1,null,null,null),_t=yt.exports,wt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Nt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],Ct={},Ot=Object(d["a"])(Ct,wt,Nt,!1,null,null,null),kt=Ot.exports;n["a"].use(v["a"]);const Lt=[{path:"/",name:"editor",component:me},{path:"/dataset-browser-demo",name:"dataset-browser-demo",component:_t},{path:"/dataset-editor-demo",name:"dataset-editor-demo",component:Ze},{path:"/editor-demo",name:"editor-demo",component:Ve},{path:"/about",name:"about",component:kt}],St=new v["a"]({mode:"history",base:"/",routes:Lt});var Et=St;n["a"].config.productionTip=!1,new n["a"]({router:Et,render:e=>e(h)}).$mount("#app")},cd91b:function(e,t,a){"use strict";var n=a("295f"),r=a.n(n);r.a},d420:function(e,t,a){},d7eb:function(e,t,a){"use strict";var n=a("80cb"),r=a.n(n);r.a},d841:function(e,t,a){"use strict";var n=a("eac8"),r=a.n(n);r.a},e3a1:function(e,t,a){"use strict";var n=a("5cd9"),r=a.n(n);r.a},e458:function(e,t,a){"use strict";var n=a("c913"),r=a.n(n);r.a},eac8:function(e,t,a){}});
//# sourceMappingURL=app.9edf9712.js.map