(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var u=a[s];0!==o[u]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0573":function(e,t,a){},"0eba":function(e,t,a){"use strict";var n=a("2a8b"),o=a.n(n);o.a},1:function(e,t){},10:function(e,t){},11:function(e,t){},"11e9":function(e,t,a){"use strict";var n=a("b721"),o=a.n(n);o.a},12:function(e,t){},13:function(e,t){},"13ba":function(e,t,a){},14:function(e,t){},15:function(e,t){},16:function(e,t){},2:function(e,t){},2205:function(e,t,a){},"2a8b":function(e,t,a){},3:function(e,t){},3405:function(e,t,a){"use strict";var n=a("2205"),o=a.n(n);o.a},4:function(e,t){},"46f4":function(e,t,a){},5:function(e,t){},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"5cd9":function(e,t,a){},6:function(e,t){},"6e9d":function(e,t,a){},7:function(e,t){},"7c74":function(e,t,a){},8:function(e,t){},9:function(e,t){},"974c":function(e,t,a){"use strict";var n=a("6e9d"),o=a.n(n);o.a},"9c0c":function(e,t,a){},a618:function(e,t,a){},ae3e:function(e,t,a){"use strict";var n=a("46f4"),o=a.n(n);o.a},b721:function(e,t,a){},b89a:function(e,t,a){"use strict";var n=a("13ba"),o=a.n(n);o.a},c0df:function(e,t,a){"use strict";var n=a("f4e5"),o=a.n(n);o.a},c520:function(e,t,a){"use strict";var n=a("0573"),o=a.n(n);o.a},c709:function(e,t,a){"use strict";var n=a("a618"),o=a.n(n);o.a},c913:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Editor")]),e._v(" | "),a("router-link",{attrs:{to:"/dataset-browser-demo"}},[e._v("Dataset-Browser-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/dataset-editor-demo"}},[e._v("Dataset-Editor-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/editor-demo"}},[e._v("Editor-Demo")]),e._v(" | "),a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),a("router-view")],1)},r=[],i=a("9ab4"),s=a("60a3");let u=class extends s["c"]{mounted(){}};u=i["a"]([s["a"]],u);var l=u,c=l,d=(a("5c0b"),a("2877")),p=Object(d["a"])(c,o,r,!1,null,null,null),h=p.exports,v=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"card",attrs:{id:"va"}},[a("label",{attrs:{for:"s_input"}},[e._v("Resource:")]),a("term-editor",{staticClass:"flexrow",attrs:{id:"s_input","term-types":"['BlankNode', 'NamedNode']"},model:{value:e.s,callback:function(t){e.s=t},expression:"s"}}),e._l(e.entries,(function(t,n){return a("div",{key:t.id,staticClass:"flexrow"},[a("named-node-editor",{model:{value:t.p,callback:function(a){e.$set(t,"p",a)},expression:"entry.p"}}),a("term-editor",{model:{value:t.o,callback:function(a){e.$set(t,"o",a)},expression:"entry.o"}}),a("button",{staticClass:"icon",attrs:{type:"button"},on:{click:function(t){return e.entries.splice(n,1)}}},[a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])])],1)})),a("button",{attrs:{type:"button"},on:{click:e.addRow}},[e._v("Add")]),a("button",{attrs:{type:"button",id:"submit"},on:{click:function(t){return t.preventDefault(),e.submit()}}},[e._v("Submit")])],2)},m=[],b=a("9b92"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.type,staticClass:"te"},[e.value?a("span",[a("button",{staticClass:"icon",attrs:{type:"button"},on:{click:function(t){return e.reset()}}},[a("svg",{attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z"}})])]),null!==e.value?a("existing-term-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):e._e()],1):a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]},function(t){return e.typeSelected(t)}]}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Select type")]),e._l(e.options,(function(t,n){return a("option",{key:n},[e._v(e._s(n))])}))],2)])},j=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.type,staticClass:"f"},["html"===e.type?a("html-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"IRI"===e.type?a("named-node-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"BlankNode"===e.type?a("blank-node-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):"label"===e.type||"langString"===e.type?a("simple-literal-editor",{attrs:{value:e.value},on:{input:function(t){return e.propagate(t)}}}):a("div",[e._v("No value editor for "+e._s(e.type))])],1)},_=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-editor",{attrs:{value:e.content},on:{input:function(t){return e.fireEvents(t)}}})],1)},w=[],N=a("5873"),O=s["c"].extend({computed:{content:function(){return this.value?this.value.value:""}},methods:{fireEvents:function(e){this.$emit("input",b["literal"](e,b["namedNode"]("http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML")))}},props:["value"],components:{VueEditor:N["a"]}}),k=O,E=(a("e3a1"),Object(d["a"])(k,y,w,!1,null,"153fe86c",null)),q=E.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"language",attrs:{type:"text",size:"2",pattern:"[a-z][a-z]",spellcheck:"false"},domProps:{value:e.lang},on:{input:function(t){t.target.composing||(e.lang=t.target.value)}}})])},S=[],T=s["c"].extend({computed:{content:{get:function(){return this.value?this.value.value:""},set:function(e){this.$emit("input",this.value.language?b["literal"](e,this.value.language):b["literal"](e,b["namedNode"]("http://www.w3.org/2001/XMLSchema#string")))}},lang:{get:function(){return this.value&&this.value.language?this.value.language:""},set:function(e){this.$emit("input",e?b["literal"](this.value.value,e):b["literal"](this.value.value,b["namedNode"]("http://www.w3.org/2001/XMLSchema#string")))}}},props:["value"]}),C=T,L=(a("0eba"),Object(d["a"])(C,$,S,!1,null,"a5b01f70",null)),B=L.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("vue-prefixplete",{model:{value:e.iri,callback:function(t){e.iri=t},expression:"iri"}})],1)},G=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("input",{attrs:{type:"text"},on:{input:function(t){return e.fireEvents()}}})])},M=[],P=(a("55ab"),a("bd71")),H=a.n(P),V=s["c"].extend({model:{prop:"prefixpletevalue",event:"prefixpleteinput"},data:function(){return{prefixplete:null,visitor:"nobody"}},props:["prefixpletevalue"],methods:{fireEvents:function(){this.$emit("prefixpleteinput",this.prefixplete.value)}},watch:{prefixpletevalue:function(e){this.prefixplete.setValue(e)}},mounted:function(){this.prefixplete=new H.a(this.$el.firstElementChild,"https://ontologies.farewellutopia.com/sparql","https://ontologies.farewellutopia.com/");const e=this;this.prefixplete.action=function(){e.$emit("prefixpleteinput",e.prefixplete.value)},this.prefixplete.setValue(this.prefixpletevalue)}}),A=V,R=(a("e458"),Object(d["a"])(A,Q,M,!1,null,null,null)),I=R.exports,J=s["c"].extend({computed:{iri:{get:function(){return this.value?this.value.value:""},set:function(e){this.$emit("input",b["namedNode"](e))}}},props:["value"],components:{VuePrefixplete:I}}),z=J,X=(a("974c"),Object(d["a"])(z,D,G,!1,null,"023c5ff6",null)),Z=X.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text",size:"5"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})])},K=[];let U=class extends s["c"]{get content(){return this.value?this.value.value:""}set content(e){this.$emit("input",b["blankNode"](e))}};i["a"]([Object(s["b"])()],U.prototype,"value",void 0),U=i["a"]([s["a"]],U);var W=U,Y=W,ee=(a("ae3e"),Object(d["a"])(Y,F,K,!1,null,"267ba02c",null)),te=ee.exports,ae=s["c"].extend({methods:{propagate:function(e){this.$emit("input",e)}},computed:{type:function(){const e={"http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML":"html","http://www.w3.org/2001/XMLSchema#string":"label","http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":"langString"};return"Literal"===this.value.termType?e[this.value.datatype.value]?e[this.value.datatype.value]:"literal":"NamedNode"===this.value.termType?"IRI":"DefaultGraph"===this.value.termType?"DefaultGraph":"BlankNode"}},props:["value"],components:{HtmlEditor:q,SimpleLiteralEditor:B,NamedNodeEditor:Z,BlankNodeEditor:te}}),ne=ae,oe=(a("11e9"),Object(d["a"])(ne,x,_,!1,null,"155d693d",null)),re=oe.exports,ie=s["c"].extend({data:function(){const e={html:b["literal"]("",b["namedNode"]("http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML")),label:b["literal"](""),"label with language":b["literal"]("","en"),IRI:b["namedNode"](""),"Blank Node":b["blankNode"](),DefaultGraph:b["defaultGraph"]()};return{options:this.termTypes?Object.fromEntries(Object.entries(e).filter(([e,t])=>this.termTypes.indexOf(t.termType)>-1)):e,type:null}},methods:{propagate:function(e){this.$emit("input",e)},typeSelected:function(e){console.log("this.termTypes: ",this.termTypes),console.log("typeSelected: ",e),console.log("this.type: ",this.type),null!==this.type&&(console.log("maps to: ",this.options[this.type]),this.$emit("input",this.options[this.type]))},reset:function(){console.log("this.termTypes: ",this.termTypes),console.log("resetting editor",this.value),this.type=null,this.$emit("input",null)}},props:["value","termTypes"],components:{ExistingTermEditor:re}}),se=ie,ue=(a("c709"),a("c0df"),Object(d["a"])(se,g,j,!1,null,"19cc61ff",null)),le=ue.exports;function ce(e){switch(e.termType){case"NamedNode":return"<"+e.value+">";case"BlankNode":return"_:"+e.value;case"Literal":const t=e;return'"'+t.value+'"'+(t.datatype&&"http://www.w3.org/2001/XMLSchema#string"!==t.datatype.value&&"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"!==t.datatype.value?"^^<"+t.datatype.value+">":"")+(t.language?"@"+t.language:"");case"Variable":return"?"+e.value;case"DefaultGraph":return e.value}}var de=n["a"].extend({data(){return{s:b["blankNode"](),counter:2,entries:[{id:0,p:b["namedNode"]("http://schema.org/headline"),o:void 0},{id:1,p:b["namedNode"]("http://schema.org/articleBody"),o:void 0}]}},methods:{addRow:function(){this.entries.push({id:this.counter,p:void 0,o:void 0}),this.counter++},submit:function(){let e=ce(this.s),t=e+" ";for(let a of this.entries)if(a.o&&a.p){let e=ce(a.p),n=ce(a.o);t+=` ${e} ${n} ;\n`}}},components:{NamedNodeEditor:Z,TermEditor:le}});var pe=de,he=(a("c520"),Object(d["a"])(pe,f,m,!1,null,"445f7ffb",null)),ve=he.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._l(e.values,(function(t,n){return a("div",{key:n},[a("hr"),a("term-editor",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"i.value"}}),t.value?a("span",[e._v(" Term-type: "),a("code",[e._v(e._s(t.value.termType))]),a("br")]):e._e(),t.value?a("span",[e._v(" Value: "),a("code",[e._v(e._s(t.value.value))]),a("br")]):e._e(),t.value&&t.value.language?a("span",[e._v(" Language: "),a("code",[e._v(e._s(t.value.language))]),a("br")]):e._e(),t.value&&t.value.datatype?a("span",[e._v(" Datatype: "),a("code",[e._v(e._s(t.value.datatype.value))]),a("br")]):e._e()],1)})),a("hr"),a("pre",[e._v(e._s(e.quad?e.quad:" no valid quad "))]),a("quad-editor",{model:{value:e.quad,callback:function(t){e.quad=t},expression:"quad"}}),a("hr"),a("quad-editor",{attrs:{labels:!0},model:{value:e.quad,callback:function(t){e.quad=t},expression:"quad"}}),a("hr"),a("pre",[e._v(e._s(e.quaddeux?e.quaddeux:" no valid quad "))]),a("quad-editor",{attrs:{labels:!0},model:{value:e.quaddeux,callback:function(t){e.quaddeux=t},expression:"quaddeux"}}),a("hr"),a("pre",[e._v(e._s(e.ds))]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],2)},me=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g"},[e.labels?a("label",[e._v("Subject:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode']"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e.labels?a("label",[e._v("Predicate:")]):e._e(),a("existing-term-editor",{attrs:{"term-types":"['NamedNode']"},model:{value:e.predicate,callback:function(t){e.predicate=t},expression:"predicate"}}),e.labels?a("label",[e._v("Object:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'Literal']"},model:{value:e.object,callback:function(t){e.object=t},expression:"object"}}),e.labels?a("label",[e._v("Graph:")]):e._e(),a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'DefaultGraph']"},model:{value:e.graph,callback:function(t){e.graph=t},expression:"graph"}})],1)},ge=[];const je=function(e){if(this.subject&&this.predicate&&this.object&&this.graph){const e=b["quad"](this.subject,this.predicate,this.object,this.graph);this.value&&e.equals(this.value)||this.$emit("input",e)}};let xe=class extends s["c"]{constructor(){super(...arguments),this.subject=this.value?this.value.subject:null,this.predicate=this.value?this.value.predicate:b["namedNode"](""),this.object=this.value?this.value.object:null,this.graph=this.value?this.value.graph:null}onValueChanged(e){null!==e&&(this.subject=e.subject,this.predicate=e.predicate,this.object=e.object,this.graph=e.graph)}};i["a"]([Object(s["b"])()],xe.prototype,"value",void 0),i["a"]([Object(s["b"])()],xe.prototype,"labels",void 0),i["a"]([Object(s["d"])("value")],xe.prototype,"onValueChanged",null),xe=i["a"]([Object(s["a"])({components:{TermEditor:le,ExistingTermEditor:re},watch:{subject:je,predicate:je,object:je,graph:je}})],xe);var _e=xe,ye=_e,we=(a("eb9e"),Object(d["a"])(ye,be,ge,!1,null,"7940efda",null)),Ne=we.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.orderedQuads,(function(t){return a("span",{key:t.id},[a("quad-editor",{model:{value:t.quad,callback:function(a){e.$set(t,"quad",a)},expression:"t.quad"}})],1)})),e.addedQuad?a("div",[a("quad-editor",{model:{value:e.newQuad,callback:function(t){e.newQuad=t},expression:"newQuad"}})],1):a("div",[a("button",{on:{click:function(t){return e.addQuad()}}},[e._v("Add quad")])])],2)},ke=[],Ee=a("d0b4");let qe=0,$e=class extends s["c"]{constructor(){super(...arguments),this.addedQuad=!1,this.previousHolders=new Map}beforeCreate(){this.uuid=qe.toString(),qe+=1}get newQuad(){return null}set newQuad(e){e&&(this.addedQuad=!1,this.value.add(e),this.$emit("input",Ee["dataset"](this.value)))}addQuad(){this.addedQuad=!0}orderQuads(e){let t=new Array,a=this;new Map;for(let s of e){let e=a.previousHolders.get(s);e||(e={id:"",get quad(){return s},set quad(e){a.previousHolders.delete(s),a.value.delete(s),null!=e?a.value.add(e):console.log("removing quad"),s=e,a.previousHolders.set(e,this),a.$emit("input",Ee["dataset"](a.value))}}),a.previousHolders.set(s,e),t.push(e)}const n=t.sort((e,t)=>{function a(e){const t=e(),n={then:function(e){return 0===t?a(e):n},finally:function(e){return 0===t?e():t}};return n}function n(a){return()=>e.quad[a].value<t.quad[a].value?-1:e.quad[a].value>t.quad[a].value?1:0}return a(n("graph")).then(n("subject")).then(n("predicate")).finally(n("object"))}),o={id:0},r=n.reduce((e,t)=>e.id>t.id?e:t,o);let i=r.id;return n.forEach(e=>{e.id||(e.id=++i+Math.floor(1e4*Math.random()))}),n}get orderedQuads(){return this.orderQuads(this.value)}};i["a"]([Object(s["b"])()],$e.prototype,"value",void 0),$e=i["a"]([Object(s["a"])({components:{QuadEditor:Ne}})],$e);var Se=$e,Te=Se,Ce=Object(d["a"])(Te,Oe,ke,!1,null,null,null),Le=Ce.exports;const Be=Ee["dataset"]([b["quad"](b["namedNode"]("http://example.org/Bill"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Berta"),b["defaultGraph"]())]);var De={name:"ValueEditorDemo",components:{TermEditor:le,QuadEditor:Ne,DatasetEditor:Le},data:function(){let e=b["literal"]("<h1>Hello</h1>","http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML");return{values:[{value:e},{value:b["namedNode"]("http://example.org/something")},{value:b["literal"]("A simple label","en")},{value:null}],quad:b["quad"](b["namedNode"]("http://example.org/Bob"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Alice"),b["defaultGraph"]()),quaddeux:null,ds:Be}}},Ge=De,Qe=Object(d["a"])(Ge,fe,me,!1,null,null,null),Me=Qe.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Dataset")]),a("pre",[e._v(e._s(e.ds.quads))]),a("pre",[e._v(e._s(JSON.stringify(e.ds.quads))+e._s(e.console.log("d",JSON.stringify(e.ds))))]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}}),a("h2",[e._v("The same once more")]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],1)},He=[];const Ve=Ee["dataset"]([b["quad"](b["namedNode"]("http://example.org/Bill"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Berta"),b["defaultGraph"]()),b["quad"](b["namedNode"]("http://example.org/Charlie"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Carl"),b["defaultGraph"]())]);var Ae={name:"DatasetEditorDemo",components:{DatasetEditor:Le},data:function(){return{JSON:JSON,console:console,ds:Ve}}},Re=Ae,Ie=Object(d["a"])(Re,Pe,He,!1,null,null,null),Je=Ie.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Browse")]),a("dataset-browser",{attrs:{subject:"http://example.org/Bill",graph:e.defaultGraph},model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}}),a("h1",[e._v("Full Dataset")]),a("dataset-editor",{model:{value:e.ds,callback:function(t){e.ds=t},expression:"ds"}})],1)},Xe=[],Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._subject?a("div",[e._v(e._s(e._subject.value))]):e._e(),e._object?a("div",[e._v("<-"+e._s(e._object.value))]):e._e(),e._l(e.orderedQuads,(function(t){return a("span",{key:t.id},[a("browser-row",{attrs:{fixedSubject:e._subject,fixedGraph:e._graph,fixedObject:e._object},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}},model:{value:t.quad,callback:function(a){e.$set(t,"quad",a)},expression:"t.quad"}})],1)})),e.addedQuad?a("div",[a("browser-row",{attrs:{fixedSubject:e._subject,fixedGraph:e._graph,fixedObject:e._object},model:{value:e.newQuad,callback:function(t){e.newQuad=t},expression:"newQuad"}})],1):a("div",[a("button",{on:{click:function(t){return e.addQuad()}}},[e._v("Add attribute")])])],2)},Fe=[],Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g"},[e.labels&&!e.fixedSubject?a("label",[e._v("Subject:")]):e._e(),e.fixedSubject?e._e():a("div",{staticClass:"i"},[a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode']"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e.subject&&"Literal"!==e.subject.termType?a("resource-navigator",{attrs:{resource:e.subject},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}}}):e._e()],1),e.labels?a("label",[e._v("Predicate:")]):e._e(),a("existing-term-editor",{attrs:{"term-types":"['NamedNode']"},model:{value:e.predicate,callback:function(t){e.predicate=t},expression:"predicate"}}),e.labels&&!e.fixedObject?a("label",[e._v("Object:")]):e._e(),e.fixedObject?e._e():a("div",{staticClass:"i"},[a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'Literal']"},model:{value:e.object,callback:function(t){e.object=t},expression:"object"}}),e.object&&"Literal"!==e.object.termType?a("resource-navigator",{attrs:{resource:e.object},on:{subject:function(t){return e.setSubject(t)},object:function(t){return e.setObject(t)}}}):e._e()],1),e.fixedGraph?e._e():a("term-editor",{attrs:{"term-types":"['BlankNode', 'NamedNode', 'DefaultGraph']"},model:{value:e.graph,callback:function(t){e.graph=t},expression:"graph"}})],1)},Ue=[],We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"icon"},[a("img",{attrs:{src:"images/subj-expand.svg",title:"show properties"},on:{click:function(t){return t.preventDefault(),e.setSubject()}}})]),a("button",{staticClass:"icon"},[a("img",{attrs:{src:"images/obj-expand.svg",title:"show incoming"},on:{click:function(t){return t.preventDefault(),e.setObject()}}})])])},Ye=[];let et=class extends s["c"]{setSubject(){this.$emit("subject",this.resource)}setObject(){this.$emit("object",this.resource)}};i["a"]([Object(s["b"])()],et.prototype,"resource",void 0),et=i["a"]([Object(s["a"])({components:{}})],et);var tt=et,at=tt,nt=(a("b89a"),Object(d["a"])(at,We,Ye,!1,null,"5478fd46",null)),ot=nt.exports;const rt=function(e){if(this.subject&&this.predicate&&this.object&&this.graph){const e=b["quad"](this.subject,this.predicate,this.object,this.graph);this.value&&e.equals(this.value)||(console.log("emitting",e),this.$emit("input",e))}};let it=class extends s["c"]{constructor(){super(...arguments),this.subject=this.value?this.value.subject:this.fixedSubject?this.fixedSubject:null,this.predicate=this.value?this.value.predicate:b["namedNode"](""),this.object=this.value?this.value.object:this.fixedObject?this.fixedObject:null,this.graph=this.value?this.value.graph:this.fixedGraph?this.fixedGraph:null}onValueChanged(e){null!==e&&(this.subject=e.subject,this.predicate=e.predicate,this.object=e.object,this.graph=e.graph)}setSubject(e){this.$emit("subject",e)}setObject(e){this.$emit("object",e)}};i["a"]([Object(s["b"])()],it.prototype,"value",void 0),i["a"]([Object(s["b"])()],it.prototype,"fixedSubject",void 0),i["a"]([Object(s["b"])()],it.prototype,"fixedObject",void 0),i["a"]([Object(s["b"])()],it.prototype,"fixedGraph",void 0),i["a"]([Object(s["b"])()],it.prototype,"labels",void 0),i["a"]([Object(s["d"])("value")],it.prototype,"onValueChanged",null),it=i["a"]([Object(s["a"])({components:{TermEditor:le,ExistingTermEditor:re,ResourceNavigator:ot},watch:{subject:rt,predicate:rt,object:rt,graph:rt}})],it);var st=it,ut=st,lt=(a("3405"),Object(d["a"])(ut,Ke,Ue,!1,null,"2c1506e7",null)),ct=lt.exports;let dt=0,pt=class extends Le{beforeCreate(){this.uuid=dt.toString(),dt++}created(){this.subject&&(this.subject.termType?this._subject=this.subject:this._subject=b["namedNode"](this.subject)),this.object&&(this.object.termType?this._object=this.object:this._object=b["namedNode"](this.object)),this.graph&&(this.graph.termType?this._graph=this.graph:this._graph=b["namedNode"](this.graph))}get orderedQuads(){const e=this.orderQuads(this.value.match(this._subject,void 0,this._object,this._graph));return e}setSubject(e){this._object=void 0,this._subject=e,this.$emit("input",Ee["dataset"](this.value))}setObject(e){console.log("setobj"+e),this._object=e,this._subject=void 0,this.$emit("input",Ee["dataset"](this.value))}};i["a"]([Object(s["b"])()],pt.prototype,"value",void 0),i["a"]([Object(s["b"])()],pt.prototype,"subject",void 0),i["a"]([Object(s["b"])()],pt.prototype,"object",void 0),i["a"]([Object(s["b"])()],pt.prototype,"graph",void 0),pt=i["a"]([Object(s["a"])({components:{BrowserRow:ct}})],pt);var ht=pt,vt=ht,ft=Object(d["a"])(vt,Ze,Fe,!1,null,null,null),mt=ft.exports;const bt=Ee["dataset"]([b["quad"](b["namedNode"]("http://example.org/Bill"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Berta"),b["defaultGraph"]()),b["quad"](b["namedNode"]("http://example.org/Charlie"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Carl"),b["defaultGraph"]()),b["quad"](b["namedNode"]("http://example.org/Carl"),b["namedNode"]("http://example.org/admires"),b["namedNode"]("http://example.org/Bill"),b["defaultGraph"]()),b["quad"](b["namedNode"]("http://example.org/Berta"),b["namedNode"]("http://example.org/knows"),b["namedNode"]("http://example.org/Charlie"),b["defaultGraph"]())]);var gt={name:"DatasetBrowserDemo",components:{DatasetBrowser:mt,DatasetEditor:Le},data:function(){return{ds:bt,defaultGraph:b["defaultGraph"]()}}},jt=gt,xt=Object(d["a"])(jt,ze,Xe,!1,null,null,null),_t=xt.exports,yt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},wt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],Nt={},Ot=Object(d["a"])(Nt,yt,wt,!1,null,null,null),kt=Ot.exports;n["a"].use(v["a"]);const Et=[{path:"/",name:"editor",component:ve},{path:"/dataset-browser-demo",name:"dataset-browser-demo",component:_t},{path:"/dataset-editor-demo",name:"dataset-editor-demo",component:Je},{path:"/editor-demo",name:"editor-demo",component:Me},{path:"/about",name:"about",component:kt}],qt=new v["a"]({mode:"history",base:"/",routes:Et});var $t=qt;n["a"].config.productionTip=!1,new n["a"]({router:$t,render:e=>e(h)}).$mount("#app")},e3a1:function(e,t,a){"use strict";var n=a("5cd9"),o=a.n(n);o.a},e458:function(e,t,a){"use strict";var n=a("c913"),o=a.n(n);o.a},eb9e:function(e,t,a){"use strict";var n=a("7c74"),o=a.n(n);o.a},f4e5:function(e,t,a){}});
//# sourceMappingURL=app.3ff1d3c6.js.map