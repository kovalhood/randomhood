!function(){var e=document.querySelector(".randomize__button--generate"),s=document.querySelector(".randomize__button--reset"),t=document.querySelector("#random-from"),c=document.querySelector("#random-to"),d=document.querySelector("#random-amount"),r=document.querySelector("#sort-type"),n=document.querySelector("#duplicates-checkbox"),i=document.querySelector(".randomize__number-wrapper"),o=document.querySelector(".randomize__number-text"),l=document.querySelector(".randomize__number"),a={fromRemove:document.querySelector("#quantity--from-remove"),fromAdd:document.querySelector("#quantity--from-add")};a.fromRemove.addEventListener("click",(function(){1==t.value&&(a.fromRemove.disabled=!0);return t.value=Number(t.value)-1})),a.fromAdd.addEventListener("click",(function(){1==t.value&&(a.fromRemove.disabled=!1);return t.value=Number(t.value)+1}));var u=[];function m(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function L(){l.textContent="0",i.classList.add("hidden"),t.value=1,c.value=10,d.value=1,r.value="1",n.checked=!1,r.disabled=!0,n.disabled=!0}e.addEventListener("click",(function(){(function(e,s,t){if(s-e<=0)return L(),console.log("error");1===(t=Math.floor(t))&&(console.log("1"),u.push(m(e,s)));if(t>1){if(console.log(">1"),n.checked){console.log("true");for(var c=0;c<t;c+=1)u.push(m(e,s));console.log(u)}else if(!n.checked){if(console.log("false"),s-e+1-t<0)return L(),console.log("error");for(var d=0;d<t;d+=1){for(var a=!0,v=void 0;a;)v=m(e,s),a=u.includes(v);u.push(v)}console.log(u)}!function(e){if("1"===r.value)return console.log("None"),console.log(e);if("2"===r.value)return console.log("Ascending"),e.sort((function(e,s){return e-s})),console.log(e);if("3"===r.value)console.log("Descending"),e.sort((function(e,s){return s-e})),console.log(e)}(u)}i.classList.remove("hidden"),l.textContent=u.join(", "),function(){if(u.length>1)return o.textContent="Your numbers: ";o.textContent="Your number: "}()})(t.value,c.value,d.value),u=[]})),s.addEventListener("click",L),d.addEventListener("change",(function(){d.value<2&&(r.disabled=!0,n.disabled=!0);d.value>=2&&(r.disabled=!1,n.disabled=!1)}));var v=document.querySelector("#nav-logo"),h=document.querySelector("#nav-number"),b=document.querySelector("#nav-yesno"),f=document.querySelector("#nav-dice"),y=document.querySelector("#nav-coin"),q=document.querySelector("#nav-password"),S=document.querySelector("#section-number"),k=document.querySelector("#section-yesno"),p=document.querySelector("#section-dice"),g=document.querySelector("#section-coin"),E=document.querySelector("#section-password");v.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),E.classList.add("hidden")})),h.addEventListener("click",(function(){h.classList.add("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),E.classList.add("hidden")})),b.addEventListener("click",(function(){h.classList.remove("current"),b.classList.add("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.remove("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),E.classList.add("hidden")})),f.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.add("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.remove("hidden"),g.classList.add("hidden"),E.classList.add("hidden")})),y.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.add("current"),q.classList.remove("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),g.classList.remove("hidden"),E.classList.add("hidden")})),q.addEventListener("click",(function(){h.classList.remove("current"),b.classList.remove("current"),f.classList.remove("current"),y.classList.remove("current"),q.classList.add("current"),S.classList.add("hidden"),k.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),E.classList.remove("hidden")}));var _=document.querySelector(".mobile-nav-menu__button--open"),w=document.querySelector(".mobile-nav-menu__button--close"),x=document.querySelector(".mobile-nav-menu__wrapper"),z=document.querySelector("#mobile-nav-number"),M=document.querySelector("#mobile-nav-yesno"),C=document.querySelector("#mobile-nav-dice"),R=document.querySelector("#mobile-nav-coin"),A=document.querySelector("#mobile-nav-password"),N=document.querySelector("#section-number"),Y=document.querySelector("#section-yesno"),j=document.querySelector("#section-dice"),D=document.querySelector("#section-coin"),B=document.querySelector("#section-password");_.addEventListener("click",(function(){x.classList.add("is-open")})),w.addEventListener("click",(function(){x.classList.remove("is-open")})),z.addEventListener("click",(function(){z.classList.add("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),R.classList.remove("mobile-current"),A.classList.remove("mobile-current"),N.classList.remove("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),x.classList.remove("is-open")})),M.addEventListener("click",(function(){z.classList.remove("mobile-current"),M.classList.add("mobile-current"),C.classList.remove("mobile-current"),R.classList.remove("mobile-current"),A.classList.remove("mobile-current"),N.classList.add("hidden"),Y.classList.remove("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),x.classList.remove("is-open")})),C.addEventListener("click",(function(){z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.add("mobile-current"),R.classList.remove("mobile-current"),A.classList.remove("mobile-current"),N.classList.add("hidden"),Y.classList.add("hidden"),j.classList.remove("hidden"),D.classList.add("hidden"),B.classList.add("hidden"),x.classList.remove("is-open")})),R.addEventListener("click",(function(){z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),R.classList.add("mobile-current"),A.classList.remove("mobile-current"),N.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.remove("hidden"),B.classList.add("hidden"),x.classList.remove("is-open")})),A.addEventListener("click",(function(){z.classList.remove("mobile-current"),M.classList.remove("mobile-current"),C.classList.remove("mobile-current"),R.classList.remove("mobile-current"),A.classList.add("mobile-current"),N.classList.add("hidden"),Y.classList.add("hidden"),j.classList.add("hidden"),D.classList.add("hidden"),B.classList.remove("hidden"),x.classList.remove("is-open")}))}();
//# sourceMappingURL=index.ce573d7e.js.map
