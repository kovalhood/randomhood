!function(){var e=document.querySelector(".randomize__button--generate"),s=document.querySelector(".randomize__button--clear"),t=document.querySelector(".randomize__button--reset"),c=document.querySelector("#random-from"),d=document.querySelector("#random-to"),r=document.querySelector("#random-amount"),n=(document.querySelector("#sort-type"),document.querySelector("#duplicates-checkbox")),i=document.querySelector(".randomize__number-wrapper"),o=document.querySelector(".randomize__number-text"),a=document.querySelector(".randomize__number"),l=[];function u(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}function m(){a.textContent="0",i.classList.add("hidden")}e.addEventListener("click",(function(){(function(e,s,t){if(n.checked){console.log("true");for(var c=0;c<t;c+=1)l.push(u(e,s));console.log(l)}else if(!n.checked){if(console.log("false"),s-e+1-t<0)return m(),console.log("error");for(var d=0;d<t;d+=1){for(var r=!0,L=void 0;r;)L=u(e,s),r=l.includes(L);l.push(L)}console.log(l)}i.classList.remove("hidden"),a.textContent=l.join(", "),function(){if(l.length>1)return o.textContent="Your numbers: ";o.textContent="Your number: "}()})(c.value,d.value,r.value),l=[]})),s.addEventListener("click",m),t.addEventListener("click",(function(){a.textContent="0",i.classList.add("hidden"),c.value=1,d.value=10,r.value=1}));var L=document.querySelector("#nav-logo"),v=document.querySelector("#nav-number"),h=document.querySelector("#nav-yesno"),b=document.querySelector("#nav-dice"),y=document.querySelector("#nav-coin"),q=document.querySelector("#nav-password"),S=document.querySelector("#section-number"),f=document.querySelector("#section-yesno"),p=document.querySelector("#section-dice"),k=document.querySelector("#section-coin"),_=document.querySelector("#section-password");L.addEventListener("click",(function(){v.classList.add("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),f.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden")})),v.addEventListener("click",(function(){v.classList.add("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.remove("hidden"),f.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden")})),h.addEventListener("click",(function(){v.classList.remove("current"),h.classList.add("current"),b.classList.remove("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),f.classList.remove("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.add("hidden")})),b.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.add("current"),y.classList.remove("current"),q.classList.remove("current"),S.classList.add("hidden"),f.classList.add("hidden"),p.classList.remove("hidden"),k.classList.add("hidden"),_.classList.add("hidden")})),y.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.add("current"),q.classList.remove("current"),S.classList.add("hidden"),f.classList.add("hidden"),p.classList.add("hidden"),k.classList.remove("hidden"),_.classList.add("hidden")})),q.addEventListener("click",(function(){v.classList.remove("current"),h.classList.remove("current"),b.classList.remove("current"),y.classList.remove("current"),q.classList.add("current"),S.classList.add("hidden"),f.classList.add("hidden"),p.classList.add("hidden"),k.classList.add("hidden"),_.classList.remove("hidden")}));var E=document.querySelector(".mobile-nav-menu__button--open"),g=document.querySelector(".mobile-nav-menu__button--close"),x=document.querySelector(".mobile-nav-menu__wrapper"),w=document.querySelector("#mobile-nav-number"),z=document.querySelector("#mobile-nav-yesno"),C=document.querySelector("#mobile-nav-dice"),M=document.querySelector("#mobile-nav-coin"),Y=document.querySelector("#mobile-nav-password"),j=document.querySelector("#section-number"),A=document.querySelector("#section-yesno"),B=document.querySelector("#section-dice"),D=document.querySelector("#section-coin"),F=document.querySelector("#section-password");E.addEventListener("click",(function(){x.classList.add("is-open")})),g.addEventListener("click",(function(){x.classList.remove("is-open")})),w.addEventListener("click",(function(){w.classList.add("mobile-current"),z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.remove("hidden"),A.classList.add("hidden"),B.classList.add("hidden"),D.classList.add("hidden"),F.classList.add("hidden"),x.classList.remove("is-open")})),z.addEventListener("click",(function(){w.classList.remove("mobile-current"),z.classList.add("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.remove("hidden"),B.classList.add("hidden"),D.classList.add("hidden"),F.classList.add("hidden"),x.classList.remove("is-open")})),C.addEventListener("click",(function(){w.classList.remove("mobile-current"),z.classList.remove("mobile-current"),C.classList.add("mobile-current"),M.classList.remove("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),B.classList.remove("hidden"),D.classList.add("hidden"),F.classList.add("hidden"),x.classList.remove("is-open")})),M.addEventListener("click",(function(){w.classList.remove("mobile-current"),z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.add("mobile-current"),Y.classList.remove("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),B.classList.add("hidden"),D.classList.remove("hidden"),F.classList.add("hidden"),x.classList.remove("is-open")})),Y.addEventListener("click",(function(){w.classList.remove("mobile-current"),z.classList.remove("mobile-current"),C.classList.remove("mobile-current"),M.classList.remove("mobile-current"),Y.classList.add("mobile-current"),j.classList.add("hidden"),A.classList.add("hidden"),B.classList.add("hidden"),D.classList.add("hidden"),F.classList.remove("hidden"),x.classList.remove("is-open")}))}();
//# sourceMappingURL=index.00e702c3.js.map
