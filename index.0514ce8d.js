const e=document.querySelector("#random-from"),s=document.querySelector("#random-to"),t=document.querySelector("#random-amount"),d=document.querySelector("#sort-type"),n=document.querySelector("#duplicates-checkbox"),o={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")},i=document.querySelector(".randomize__button--generate"),a=document.querySelector(".randomize__button--reset"),r=document.querySelector(".randomize__number-wrapper"),c=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number");let u=[];function m(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function v(){l.textContent="0",r.classList.add("hidden"),e.value=1,s.value=10,t.value=2,d.value="1",n.checked=!1,o.fromRemove.classList.add("randomize__quantity"),o.fromRemove.classList.remove("randomize__quantity--disabled"),o.fromRemove.disabled=!1,o.fromAdd.classList.add("randomize__quantity"),o.fromAdd.classList.remove("randomize__quantity--disabled"),o.fromAdd.disabled=!1,o.toRemove.classList.add("randomize__quantity"),o.toRemove.classList.remove("randomize__quantity--disabled"),o.toRemove.disabled=!1,o.toAdd.classList.add("randomize__quantity"),o.toAdd.classList.remove("randomize__quantity--disabled"),o.toAdd.disabled=!1,o.amountRemove.classList.remove("randomize__quantity"),o.amountRemove.classList.add("randomize__quantity--disabled"),o.amountRemove.disabled=!0,o.amountAdd.classList.add("randomize__quantity"),o.amountAdd.classList.remove("randomize__quantity--disabled"),o.amountAdd.disabled=!1}i.addEventListener("click",(function(){(function(e,s,t){if(s-e<=0)return v(),console.log("error");1===(t=Math.floor(t))&&(console.log("1"),u.push(m(e,s)));if(t>1){if(console.log(">1"),n.checked){console.log("true");for(let d=0;d<t;d+=1)u.push(m(e,s));console.log(u)}else if(!n.checked){if(console.log("false"),s-e+1-t<0)return v(),console.log("error");for(let d=0;d<t;d+=1){let t,d=!0;for(;d;)t=m(e,s),d=u.includes(t);u.push(t)}console.log(u)}!function(e){if("1"===d.value)return console.log("None"),console.log(e);if("2"===d.value)return console.log("Ascending"),e.sort(((e,s)=>e-s)),console.log(e);if("3"===d.value)console.log("Descending"),e.sort(((e,s)=>s-e)),console.log(e)}(u)}r.classList.remove("hidden"),l.textContent=u.join(", "),function(){if(u.length>1)return c.textContent="Your numbers: ";c.textContent="Your number: "}()})(e.value,s.value,t.value),u=[]})),a.addEventListener("click",v);function L(){return o.fromRemove.classList.remove("randomize__quantity"),o.fromRemove.classList.add("randomize__quantity--disabled"),o.fromRemove.disabled=!0}function y(){o.fromRemove.classList.add("randomize__quantity"),o.fromRemove.classList.remove("randomize__quantity--disabled"),o.fromRemove.disabled=!1}function b(){o.fromAdd.classList.remove("randomize__quantity"),o.fromAdd.classList.add("randomize__quantity--disabled"),o.fromAdd.disabled=!0}function _(){o.fromAdd.classList.add("randomize__quantity"),o.fromAdd.classList.remove("randomize__quantity--disabled"),o.fromAdd.disabled=!1}function f(){return o.toRemove.classList.remove("randomize__quantity"),o.toRemove.classList.add("randomize__quantity--disabled"),o.toRemove.disabled=!0}function q(){o.toRemove.classList.add("randomize__quantity"),o.toRemove.classList.remove("randomize__quantity--disabled"),o.toRemove.disabled=!1}function h(){o.toAdd.classList.remove("randomize__quantity"),o.toAdd.classList.add("randomize__quantity--disabled"),o.toAdd.disabled=!0}function z(){o.toAdd.classList.add("randomize__quantity"),o.toAdd.classList.remove("randomize__quantity--disabled"),o.toAdd.disabled=!1}function S(){return o.amountRemove.classList.remove("randomize__quantity"),o.amountRemove.classList.add("randomize__quantity--disabled"),o.amountRemove.disabled=!0}function A(){o.amountRemove.classList.add("randomize__quantity"),o.amountRemove.classList.remove("randomize__quantity--disabled"),o.amountRemove.disabled=!1}function R(){o.amountAdd.classList.remove("randomize__quantity"),o.amountAdd.classList.add("randomize__quantity--disabled"),o.amountAdd.disabled=!0}function k(){o.amountAdd.classList.add("randomize__quantity"),o.amountAdd.classList.remove("randomize__quantity--disabled"),o.amountAdd.disabled=!1}function E(e){["e","E","+","-","."].includes(e.key)&&e.preventDefault()}o.fromRemove.addEventListener("click",(function(){e.value=Number(e.value)-1,0==e.value&&L();e.value<=9998&&_()})),o.fromAdd.addEventListener("click",(function(){e.value=Number(e.value)+1,e.value>=1&&y();9999==e.value&&b()})),o.toRemove.addEventListener("click",(function(){s.value=Number(s.value)-1,1==s.value&&f();s.value<=9999&&z()})),o.toAdd.addEventListener("click",(function(){s.value=Number(s.value)+1,s.value>=2&&q();1e4==s.value&&h()})),o.amountRemove.addEventListener("click",(function(){t.value=Number(t.value)-1,2==t.value&&S();t.value<=99&&k()})),o.amountAdd.addEventListener("click",(function(){t.value=Number(t.value)+1,t.value>=3&&A();100==t.value&&R()})),e.addEventListener("change",(function(){e.value<0&&(e.value=0,L(),_());e.value>9999&&(e.value=9999,y(),b())})),s.addEventListener("change",(function(){s.value<1&&(s.value=1,f(),z());s.value>1e4&&(s.value=1e4,q(),h())})),t.addEventListener("change",(function(){t.value<2&&(t.value=2,S(),k());t.value>100&&(t.value=100,A(),R())})),e.addEventListener("keydown",E),s.addEventListener("keydown",E),t.addEventListener("keydown",E);const g=document.querySelector("#nav-logo"),p=document.querySelector("#nav-number"),w=document.querySelector("#nav-yesno"),N=document.querySelector("#nav-dice"),x=document.querySelector("#nav-coin"),M=document.querySelector("#nav-password"),C=document.querySelector("#section-number"),D=document.querySelector("#section-yesno"),Y=document.querySelector("#section-dice"),j=document.querySelector("#section-coin"),B=document.querySelector("#section-password");g.addEventListener("click",(function(){p.classList.add("current"),w.classList.remove("current"),N.classList.remove("current"),x.classList.remove("current"),M.classList.remove("current"),C.classList.remove("hidden"),D.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),B.classList.add("hidden")})),p.addEventListener("click",(function(){p.classList.add("current"),w.classList.remove("current"),N.classList.remove("current"),x.classList.remove("current"),M.classList.remove("current"),C.classList.remove("hidden"),D.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),B.classList.add("hidden")})),w.addEventListener("click",(function(){p.classList.remove("current"),w.classList.add("current"),N.classList.remove("current"),x.classList.remove("current"),M.classList.remove("current"),C.classList.add("hidden"),D.classList.remove("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),B.classList.add("hidden")})),N.addEventListener("click",(function(){p.classList.remove("current"),w.classList.remove("current"),N.classList.add("current"),x.classList.remove("current"),M.classList.remove("current"),C.classList.add("hidden"),D.classList.add("hidden"),Y.classList.remove("hidden"),j.classList.add("hidden"),B.classList.add("hidden")})),x.addEventListener("click",(function(){p.classList.remove("current"),w.classList.remove("current"),N.classList.remove("current"),x.classList.add("current"),M.classList.remove("current"),C.classList.add("hidden"),D.classList.add("hidden"),Y.classList.add("hidden"),j.classList.remove("hidden"),B.classList.add("hidden")})),M.addEventListener("click",(function(){p.classList.remove("current"),w.classList.remove("current"),N.classList.remove("current"),x.classList.remove("current"),M.classList.add("current"),C.classList.add("hidden"),D.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),B.classList.remove("hidden")}));const F=document.querySelector(".mobile-nav-menu__button--open"),G=document.querySelector(".mobile-nav-menu__button--close"),H=document.querySelector(".mobile-nav-menu__wrapper"),I=document.querySelector("#mobile-nav-number"),J=document.querySelector("#mobile-nav-yesno"),K=document.querySelector("#mobile-nav-dice"),O=document.querySelector("#mobile-nav-coin"),P=document.querySelector("#mobile-nav-password"),Q=document.querySelector("#section-number"),T=document.querySelector("#section-yesno"),U=document.querySelector("#section-dice"),V=document.querySelector("#section-coin"),W=document.querySelector("#section-password");F.addEventListener("click",(function(){H.classList.add("is-open")})),G.addEventListener("click",(function(){H.classList.remove("is-open")})),I.addEventListener("click",(function(){I.classList.add("mobile-current"),J.classList.remove("mobile-current"),K.classList.remove("mobile-current"),O.classList.remove("mobile-current"),P.classList.remove("mobile-current"),Q.classList.remove("hidden"),T.classList.add("hidden"),U.classList.add("hidden"),V.classList.add("hidden"),W.classList.add("hidden"),H.classList.remove("is-open")})),J.addEventListener("click",(function(){I.classList.remove("mobile-current"),J.classList.add("mobile-current"),K.classList.remove("mobile-current"),O.classList.remove("mobile-current"),P.classList.remove("mobile-current"),Q.classList.add("hidden"),T.classList.remove("hidden"),U.classList.add("hidden"),V.classList.add("hidden"),W.classList.add("hidden"),H.classList.remove("is-open")})),K.addEventListener("click",(function(){I.classList.remove("mobile-current"),J.classList.remove("mobile-current"),K.classList.add("mobile-current"),O.classList.remove("mobile-current"),P.classList.remove("mobile-current"),Q.classList.add("hidden"),T.classList.add("hidden"),U.classList.remove("hidden"),V.classList.add("hidden"),W.classList.add("hidden"),H.classList.remove("is-open")})),O.addEventListener("click",(function(){I.classList.remove("mobile-current"),J.classList.remove("mobile-current"),K.classList.remove("mobile-current"),O.classList.add("mobile-current"),P.classList.remove("mobile-current"),Q.classList.add("hidden"),T.classList.add("hidden"),U.classList.add("hidden"),V.classList.remove("hidden"),W.classList.add("hidden"),H.classList.remove("is-open")})),P.addEventListener("click",(function(){I.classList.remove("mobile-current"),J.classList.remove("mobile-current"),K.classList.remove("mobile-current"),O.classList.remove("mobile-current"),P.classList.add("mobile-current"),Q.classList.add("hidden"),T.classList.add("hidden"),U.classList.add("hidden"),V.classList.add("hidden"),W.classList.remove("hidden"),H.classList.remove("is-open")}));
//# sourceMappingURL=index.0514ce8d.js.map
