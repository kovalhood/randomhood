const e=document.querySelector("#nav-logo"),t=document.querySelector("#nav-number"),s=document.querySelector("#nav-yesno"),d=document.querySelector("#nav-dice"),n=document.querySelector("#nav-coin"),o=document.querySelector("#nav-password"),i=document.querySelector("#section-number"),a=document.querySelector("#section-yesno"),c=document.querySelector("#section-dice"),r=document.querySelector("#section-coin"),l=document.querySelector("#section-password");e.addEventListener("click",(function(){t.classList.add("current"),s.classList.remove("current"),d.classList.remove("current"),n.classList.remove("current"),o.classList.remove("current"),i.classList.remove("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),t.addEventListener("click",(function(){t.classList.add("current"),s.classList.remove("current"),d.classList.remove("current"),n.classList.remove("current"),o.classList.remove("current"),i.classList.remove("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),s.addEventListener("click",(function(){t.classList.remove("current"),s.classList.add("current"),d.classList.remove("current"),n.classList.remove("current"),o.classList.remove("current"),i.classList.add("hidden"),a.classList.remove("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),d.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),d.classList.add("current"),n.classList.remove("current"),o.classList.remove("current"),i.classList.add("hidden"),a.classList.add("hidden"),c.classList.remove("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),n.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),d.classList.remove("current"),n.classList.add("current"),o.classList.remove("current"),i.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),r.classList.remove("hidden"),l.classList.add("hidden")})),o.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),d.classList.remove("current"),n.classList.remove("current"),o.classList.add("current"),i.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),r.classList.add("hidden"),l.classList.remove("hidden")}));const u=document.querySelector(".mobile-nav-menu__button--open"),m=document.querySelector(".mobile-nav-menu__button--close"),v=document.querySelector(".mobile-nav-menu__wrapper"),L=document.querySelector("#mobile-nav-number"),f=document.querySelector("#mobile-nav-yesno"),b=document.querySelector("#mobile-nav-dice"),y=document.querySelector("#mobile-nav-coin"),h=document.querySelector("#mobile-nav-password"),q=document.querySelector("#section-number"),_=document.querySelector("#section-yesno"),S=document.querySelector("#section-dice"),A=document.querySelector("#section-coin"),k=document.querySelector("#section-password"),z=document.querySelector('meta[name="theme-color"]');u.addEventListener("click",(function(){v.classList.add("is-open"),z.setAttribute("content","#6b48f2")})),m.addEventListener("click",(function(){v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),L.addEventListener("click",(function(){L.classList.add("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.remove("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),f.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.add("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.remove("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),b.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.add("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.remove("hidden"),A.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),y.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.add("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),A.classList.remove("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),h.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.add("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),A.classList.add("hidden"),k.classList.remove("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")}));const E=document.querySelector("#random-from"),R=document.querySelector("#random-to"),g=document.querySelector("#random-amount"),p=document.querySelector("#sort-type"),w=document.querySelector("#duplicates-checkbox"),N={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")},x=document.querySelector("#amount-switcher"),M=document.querySelector(".randomize__multiple");let C=!1;function D(){return N.fromRemove.classList.remove("randomize__quantity"),N.fromRemove.classList.add("randomize__quantity--disabled"),N.fromRemove.disabled=!0}function Y(){N.fromRemove.classList.add("randomize__quantity"),N.fromRemove.classList.remove("randomize__quantity--disabled"),N.fromRemove.disabled=!1}function j(){N.fromAdd.classList.remove("randomize__quantity"),N.fromAdd.classList.add("randomize__quantity--disabled"),N.fromAdd.disabled=!0}function B(){N.fromAdd.classList.add("randomize__quantity"),N.fromAdd.classList.remove("randomize__quantity--disabled"),N.fromAdd.disabled=!1}function F(){return N.toRemove.classList.remove("randomize__quantity"),N.toRemove.classList.add("randomize__quantity--disabled"),N.toRemove.disabled=!0}function G(){N.toRemove.classList.add("randomize__quantity"),N.toRemove.classList.remove("randomize__quantity--disabled"),N.toRemove.disabled=!1}function H(){N.toAdd.classList.remove("randomize__quantity"),N.toAdd.classList.add("randomize__quantity--disabled"),N.toAdd.disabled=!0}function I(){N.toAdd.classList.add("randomize__quantity"),N.toAdd.classList.remove("randomize__quantity--disabled"),N.toAdd.disabled=!1}function J(){return N.amountRemove.classList.remove("randomize__quantity"),N.amountRemove.classList.add("randomize__quantity--disabled"),N.amountRemove.disabled=!0}function K(){N.amountRemove.classList.add("randomize__quantity"),N.amountRemove.classList.remove("randomize__quantity--disabled"),N.amountRemove.disabled=!1}function O(){N.amountAdd.classList.remove("randomize__quantity"),N.amountAdd.classList.add("randomize__quantity--disabled"),N.amountAdd.disabled=!0}function P(){N.amountAdd.classList.add("randomize__quantity"),N.amountAdd.classList.remove("randomize__quantity--disabled"),N.amountAdd.disabled=!1}x.addEventListener("click",(function(){C=!C,console.log(C),!0===C&&(M.classList.remove("hidden"),g.value=2);!1===C&&(M.classList.add("hidden"),g.value=1)}));const Q=document.querySelector(".randomize__button--generate"),T=document.querySelector(".randomize__button--reset"),U=document.querySelector(".randomize__number-wrapper"),V=document.querySelector(".randomize__number-text"),W=document.querySelector(".randomize__number");let X=[];function Z(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function $(){W.textContent="0",U.classList.add("hidden"),E.value=1,R.value=10,g.value=C?2:1,p.value="1",w.checked=!1,Y(),B(),G(),I(),J(),P()}Q.addEventListener("click",(function(){(function(e,t,s){if(t-e<=0)return $(),console.log("error");1===(s=Math.floor(s))&&(console.log("1"),X.push(Z(e,t)));if(s>1){if(console.log(">1"),w.checked){console.log("true");for(let d=0;d<s;d+=1)X.push(Z(e,t));console.log(X)}else if(!w.checked){if(console.log("false"),t-e+1-s<0)return $(),console.log("error");for(let d=0;d<s;d+=1){let s,d=!0;for(;d;)s=Z(e,t),d=X.includes(s);X.push(s)}console.log(X)}!function(e){if("1"===p.value)return console.log("None"),console.log(e);if("2"===p.value)return console.log("Ascending"),e.sort(((e,t)=>e-t)),console.log(e);if("3"===p.value)console.log("Descending"),e.sort(((e,t)=>t-e)),console.log(e)}(X)}U.classList.remove("hidden"),W.textContent=X.join(", "),function(){if(X.length>1)return V.textContent="Your numbers: ";V.textContent="Your number: "}()})(E.value,R.value,g.value),X=[]})),T.addEventListener("click",$);function ee(e){["e","E","+","-","."].includes(e.key)&&e.preventDefault()}N.fromRemove.addEventListener("click",(function(){E.value=Number(E.value)-1,0==E.value&&D();E.value<=9998&&B()})),N.fromAdd.addEventListener("click",(function(){E.value=Number(E.value)+1,E.value>=1&&Y();9999==E.value&&j()})),N.toRemove.addEventListener("click",(function(){R.value=Number(R.value)-1,1==R.value&&F();R.value<=9999&&I()})),N.toAdd.addEventListener("click",(function(){R.value=Number(R.value)+1,R.value>=2&&G();1e4==R.value&&H()})),N.amountRemove.addEventListener("click",(function(){g.value=Number(g.value)-1,2==g.value&&J();g.value<=99&&P()})),N.amountAdd.addEventListener("click",(function(){g.value=Number(g.value)+1,g.value>=3&&K();100==g.value&&O()})),E.addEventListener("change",(function(){E.value<=0&&(E.value=0,D(),B());E.value>=9999&&(E.value=9999,Y(),j())})),R.addEventListener("change",(function(){R.value<=1&&(R.value=1,F(),I());R.value>=1e4&&(R.value=1e4,G(),H())})),g.addEventListener("change",(function(){g.value<=2&&(g.value=2,J(),P());g.value>=100&&(g.value=100,K(),O())})),E.addEventListener("keydown",ee),R.addEventListener("keydown",ee),g.addEventListener("keydown",ee);
//# sourceMappingURL=index.250d9693.js.map
