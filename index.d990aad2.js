!function(){var e=document.querySelector("#nav-logo"),t=document.querySelector("#nav-number"),s=document.querySelector("#nav-yesno"),n=document.querySelector("#nav-dice"),d=document.querySelector("#nav-coin"),o=document.querySelector("#nav-password"),i=document.querySelector("#section-number"),c=document.querySelector("#section-yesno"),a=document.querySelector("#section-dice"),r=document.querySelector("#section-coin"),l=document.querySelector("#section-password");e.addEventListener("click",(function(){t.classList.add("current"),s.classList.remove("current"),n.classList.remove("current"),d.classList.remove("current"),o.classList.remove("current"),i.classList.remove("hidden"),c.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),t.addEventListener("click",(function(){t.classList.add("current"),s.classList.remove("current"),n.classList.remove("current"),d.classList.remove("current"),o.classList.remove("current"),i.classList.remove("hidden"),c.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),s.addEventListener("click",(function(){t.classList.remove("current"),s.classList.add("current"),n.classList.remove("current"),d.classList.remove("current"),o.classList.remove("current"),i.classList.add("hidden"),c.classList.remove("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),n.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),n.classList.add("current"),d.classList.remove("current"),o.classList.remove("current"),i.classList.add("hidden"),c.classList.add("hidden"),a.classList.remove("hidden"),r.classList.add("hidden"),l.classList.add("hidden")})),d.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),n.classList.remove("current"),d.classList.add("current"),o.classList.remove("current"),i.classList.add("hidden"),c.classList.add("hidden"),a.classList.add("hidden"),r.classList.remove("hidden"),l.classList.add("hidden")})),o.addEventListener("click",(function(){t.classList.remove("current"),s.classList.remove("current"),n.classList.remove("current"),d.classList.remove("current"),o.classList.add("current"),i.classList.add("hidden"),c.classList.add("hidden"),a.classList.add("hidden"),r.classList.add("hidden"),l.classList.remove("hidden")}));var u=document.querySelector(".mobile-nav-menu__button--open"),m=document.querySelector(".mobile-nav-menu__button--close"),v=document.querySelector(".mobile-nav-menu__wrapper"),L=document.querySelector("#mobile-nav-number"),f=document.querySelector("#mobile-nav-yesno"),b=document.querySelector("#mobile-nav-dice"),y=document.querySelector("#mobile-nav-coin"),h=document.querySelector("#mobile-nav-password"),q=document.querySelector("#section-number"),_=document.querySelector("#section-yesno"),S=document.querySelector("#section-dice"),p=document.querySelector("#section-coin"),k=document.querySelector("#section-password"),z=document.querySelector('meta[name="theme-color"]');u.addEventListener("click",(function(){v.classList.add("is-open"),z.setAttribute("content","#6b48f2"),document.body.style.overflow="hidden"})),m.addEventListener("click",(function(){v.classList.remove("is-open"),z.setAttribute("content","#ffffff"),document.body.style.overflow="visible"})),L.addEventListener("click",(function(){L.classList.add("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.remove("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),f.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.add("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.remove("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),b.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.add("mobile-current"),y.classList.remove("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.remove("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),y.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.add("mobile-current"),h.classList.remove("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),p.classList.remove("hidden"),k.classList.add("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")})),h.addEventListener("click",(function(){L.classList.remove("mobile-current"),f.classList.remove("mobile-current"),b.classList.remove("mobile-current"),y.classList.remove("mobile-current"),h.classList.add("mobile-current"),q.classList.add("hidden"),_.classList.add("hidden"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.remove("hidden"),v.classList.remove("is-open"),z.setAttribute("content","#ffffff")}));var E=document.querySelector("#random-from"),A=document.querySelector("#random-to"),g=document.querySelector("#random-amount"),R=document.querySelector("#sort-type"),w=document.querySelector("#duplicates-checkbox"),x=document.querySelector(".randomize__checkbox-label"),C={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add"),toRemove:document.querySelector("#quantity--to-remove"),toAdd:document.querySelector("#quantity--to-add"),amountRemove:document.querySelector("#quantity--amount-remove"),amountAdd:document.querySelector("#quantity--amount-add")},N=document.querySelector("#amount-switcher"),j=document.querySelector(".amount-switcher--text"),M=document.querySelector("#amount-icon--down"),T=document.querySelector("#amount-icon--up"),O=document.querySelector(".randomize__multiple"),B=document.querySelector(".section__title"),D=document.querySelector(".appear-wrapper"),G=document.querySelector(".randomize__number-wrapper"),Y=document.querySelector(".randomize__number"),I=!1;function F(){return C.fromRemove.classList.remove("randomize__quantity"),C.fromRemove.classList.add("randomize__quantity--disabled"),C.fromRemove.disabled=!0}function H(){C.fromRemove.classList.add("randomize__quantity"),C.fromRemove.classList.remove("randomize__quantity--disabled"),C.fromRemove.disabled=!1}function J(){C.fromAdd.classList.remove("randomize__quantity"),C.fromAdd.classList.add("randomize__quantity--disabled"),C.fromAdd.disabled=!0}function K(){C.fromAdd.classList.add("randomize__quantity"),C.fromAdd.classList.remove("randomize__quantity--disabled"),C.fromAdd.disabled=!1}function P(){return C.toRemove.classList.remove("randomize__quantity"),C.toRemove.classList.add("randomize__quantity--disabled"),C.toRemove.disabled=!0}function Q(){C.toRemove.classList.add("randomize__quantity"),C.toRemove.classList.remove("randomize__quantity--disabled"),C.toRemove.disabled=!1}function U(){C.toAdd.classList.remove("randomize__quantity"),C.toAdd.classList.add("randomize__quantity--disabled"),C.toAdd.disabled=!0}function V(){C.toAdd.classList.add("randomize__quantity"),C.toAdd.classList.remove("randomize__quantity--disabled"),C.toAdd.disabled=!1}function W(){return C.amountRemove.classList.remove("randomize__quantity"),C.amountRemove.classList.add("randomize__quantity--disabled"),C.amountRemove.disabled=!0}function X(){C.amountRemove.classList.add("randomize__quantity"),C.amountRemove.classList.remove("randomize__quantity--disabled"),C.amountRemove.disabled=!1}function Z(){C.amountAdd.classList.remove("randomize__quantity"),C.amountAdd.classList.add("randomize__quantity--disabled"),C.amountAdd.disabled=!0}function $(){C.amountAdd.classList.add("randomize__quantity"),C.amountAdd.classList.remove("randomize__quantity--disabled"),C.amountAdd.disabled=!1}N.addEventListener("click",(function(){!0===(I=!I)&&(D.classList.add("appear-wrapper--show"),G.classList.add("hidden"),Y.classList.add("randomize__number--multiple"),B.textContent="Generate random numbers",j.innerText="Single",M.classList.add("hidden-icon"),T.classList.remove("hidden-icon"),g.value=2,setTimeout((function(){O.classList.remove("hidden-multiple")}),100));!1===I&&(O.classList.add("hidden-multiple"),G.classList.add("hidden"),Y.classList.remove("randomize__number--multiple"),B.textContent="Generate random number",j.innerText="Multiple",M.classList.remove("hidden-icon"),T.classList.add("hidden-icon"),setTimeout((function(){D.classList.remove("appear-wrapper--show")}),100),setTimeout((function(){g.value=1}),200))}));var ee=document.querySelector(".randomize__button--generate"),te=document.querySelector(".randomize__button--reset"),se=document.querySelector(".randomize__number-wrapper"),ne=document.querySelector(".randomize__number-text"),de=document.querySelector(".randomize__number"),oe=[];function ie(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function ce(){de.textContent="0",se.classList.add("hidden"),E.value=1,A.value=10,g.value=I?2:1,R.value="1",document.querySelector(".js-fake-input").value="None",document.querySelector(".js-fake-input").classList.remove("sort--selected"),w.checked=!1,x.classList.remove("randomize__checkbox-label--on"),x.textContent="Off",H(),K(),Q(),V(),W(),$()}ee.addEventListener("click",(function(){(function(e,t,s){if(t-e<=0)return ce(),console.log("error");1===(s=Math.floor(s))&&(console.log("1"),oe.push(ie(e,t)));if(s>1){if(console.log(">1"),w.checked){console.log("true");for(var n=0;n<s;n+=1)oe.push(ie(e,t));console.log(oe)}else if(!w.checked){if(console.log("false"),t-e+1-s<0)return ce(),console.log("error");for(var d=0;d<s;d+=1){for(var o=!0,i=void 0;o;)i=ie(e,t),o=oe.includes(i);oe.push(i)}console.log(oe)}!function(e){if("1"===R.value)return console.log("None"),console.log(e);if("2"===R.value)return console.log("Ascending"),e.sort((function(e,t){return e-t})),console.log(e);if("3"===R.value)console.log("Descending"),e.sort((function(e,t){return t-e})),console.log(e)}(oe)}se.classList.remove("hidden"),de.textContent=oe.join(", "),function(){if(oe.length>1)return ne.textContent="Your numbers: ";ne.textContent="Your number: "}()})(E.value,A.value,g.value),oe=[]})),te.addEventListener("click",ce);var ae=9999,re=1e4,le=100;function ue(e){["e","E","+","-","."].includes(e.key)&&e.preventDefault()}C.fromRemove.addEventListener("click",(function(){E.value=Number(E.value)-1,0==E.value&&F();E.value<=9998&&K()})),C.fromAdd.addEventListener("click",(function(){E.value=Number(E.value)+1,E.value>=1&&H();E.value==ae&&J()})),C.toRemove.addEventListener("click",(function(){A.value=Number(A.value)-1,1==A.value&&P();A.value<=9999&&V()})),C.toAdd.addEventListener("click",(function(){A.value=Number(A.value)+1,A.value>=2&&Q();A.value==re&&U()})),C.amountRemove.addEventListener("click",(function(){g.value=Number(g.value)-1,2==g.value&&W();g.value<=99&&$()})),C.amountAdd.addEventListener("click",(function(){g.value=Number(g.value)+1,g.value>=3&&X();g.value==le&&Z()})),E.addEventListener("change",(function(){E.value<=0&&(E.value=0,F(),K());E.value>=ae&&(E.value=ae,H(),J())})),A.addEventListener("change",(function(){A.value<=1&&(A.value=1,P(),V());A.value>=re&&(A.value=re,Q(),U())})),g.addEventListener("change",(function(){g.value<=2&&(g.value=2,W(),$());g.value>=le&&(g.value=le,X(),Z())})),E.addEventListener("keydown",ue),A.addEventListener("keydown",ue),g.addEventListener("keydown",ue);for(var me=function(e){he(e),Le[e].addEventListener("change",(function(){he(e)}))},ve=document.getElementsByClassName("js-fake-input"),Le=document.getElementsByClassName("js-select"),fe=document.querySelector("#sort-type"),be=document.querySelector(".js-fake-input"),ye=0;ye<ve.length;ye++)me(ye);function he(e){ve[e].value=Le[e].options[Le[e].selectedIndex].text}fe.addEventListener("change",(function(){console.log(be.value),"None"===be.value?be.classList.remove("sort--selected"):be.classList.add("sort--selected"),this.blur()})),w.addEventListener("click",(function(){w.checked?(x.classList.add("randomize__checkbox-label--on"),x.textContent="On"):w.checked||(x.classList.remove("randomize__checkbox-label--on"),x.textContent="Off")}))}();
//# sourceMappingURL=index.d990aad2.js.map
