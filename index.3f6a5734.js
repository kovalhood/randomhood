!function(){var e=document.querySelector(".randomize__button--generate"),s=document.querySelector(".randomize__button--clear"),t=document.querySelector(".randomize__button--reset"),c=document.querySelector("#random-from"),n=document.querySelector("#random-to"),d=document.querySelector("#random-amount"),r=document.querySelector("#sort-type"),i=document.querySelector("#duplicates-checkbox"),o=document.querySelector(".randomize__number-wrapper"),a=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number"),u=[];function m(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function L(){l.textContent="0",o.classList.add("hidden")}e.addEventListener("click",(function(){(function(e,s,t){if(i.checked){console.log("true");for(var c=0;c<t;c+=1)u.push(m(e,s));console.log(u)}else if(!i.checked){if(console.log("false"),s-e+1-t<0)return L(),console.log("error");for(var n=0;n<t;n+=1){for(var d=!0,v=void 0;d;)v=m(e,s),d=u.includes(v);u.push(v)}console.log(u)}(function(e){if("1"===r.value)return console.log("None"),console.log(e);if("2"===r.value)return console.log("Ascending"),e.sort((function(e,s){return e-s})),console.log(e);if("3"===r.value)console.log("Descending"),e.sort((function(e,s){return s-e})),console.log(e)})(u),o.classList.remove("hidden"),l.textContent=u.join(", "),function(){if(u.length>1)return a.textContent="Your numbers: ";a.textContent="Your number: "}()})(c.value,n.value,d.value),u=[]})),s.addEventListener("click",L),t.addEventListener("click",(function(){l.textContent="0",o.classList.add("hidden"),c.value=1,n.value=10,d.value=1}));var v=document.querySelector("#nav-logo"),h=document.querySelector("#nav-number"),b=document.querySelector("#nav-yesno"),y=document.querySelector("#nav-dice"),f=document.querySelector("#nav-coin"),q=document.querySelector("#nav-password"),S=document.querySelector("#section-number"),p=document.querySelector("#section-yesno"),k=document.querySelector("#section-dice"),_=document.querySelector("#section-coin"),g=document.querySelector("#section-password");v.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden"),g.classList.add("hidden")})),h.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden"),g.classList.add("hidden")})),b.addEventListener("click",(function(){h.classList.remove("current"),b.classList.add("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),p.classList.remove("hidden"),k.classList.add("hidden"),_.classList.add("hidden"),g.classList.add("hidden")})),y.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),y.classList.add("current"),f.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.remove("hidden"),_.classList.add("hidden"),g.classList.add("hidden")})),f.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.add("current"),q.classList.remove("current"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.remove("hidden"),g.classList.add("hidden")})),q.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),f.classList.remove("current"),q.classList.add("current"),S.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden"),g.classList.remove("hidden")}));var E=document.querySelector(".mobile-nav-menu__button--open"),x=document.querySelector(".mobile-nav-menu__button--close"),w=document.querySelector(".mobile-nav-menu__wrapper"),z=document.querySelector("#mobile-nav-number"),C=document.querySelector("#mobile-nav-yesno"),M=document.querySelector("#mobile-nav-dice"),Y=document.querySelector("#mobile-nav-coin"),j=document.querySelector("#mobile-nav-password"),A=document.querySelector("#section-number"),D=document.querySelector("#section-yesno"),N=document.querySelector("#section-dice"),B=document.querySelector("#section-coin"),F=document.querySelector("#section-password");E.addEventListener("click",(function(){w.classList.add("is-open")})),x.addEventListener("click",(function(){w.classList.remove("is-open")})),z.addEventListener("click",(function(){z.classList.add("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.remove("mobile-current"),A.classList.remove("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),F.classList.add("hidden"),w.classList.remove("is-open")})),C.addEventListener("click",(function(){z.classList.remove("mobile-current"),C.classList.add("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.remove("mobile-current"),A.classList.add("hidden"),D.classList.remove("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),F.classList.add("hidden"),w.classList.remove("is-open")})),M.addEventListener("click",(function(){z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.add("mobile-current"),Y.classList.remove("mobile-current"),j.classList.remove("mobile-current"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.remove("hidden"),B.classList.add("hidden"),F.classList.add("hidden"),w.classList.remove("is-open")})),Y.addEventListener("click",(function(){z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.add("mobile-current"),j.classList.remove("mobile-current"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.remove("hidden"),F.classList.add("hidden"),w.classList.remove("is-open")})),j.addEventListener("click",(function(){z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("mobile-current"),A.classList.add("hidden"),D.classList.add("hidden"),N.classList.add("hidden"),B.classList.add("hidden"),F.classList.remove("hidden"),w.classList.remove("is-open")}))}();
//# sourceMappingURL=index.3f6a5734.js.map
