!function(){var e=document.querySelector(".randomize__button--generate"),n=document.querySelector(".randomize__button--clear"),t=document.querySelector("#random-from"),r=document.querySelector("#random-to"),o=document.querySelector("#random-amount"),u=document.querySelector(".randomize__number-wrapper"),c=document.querySelector(".randomize__number-text"),a=document.querySelector(".randomize__number"),d=[];function m(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}function i(){a.textContent="0",u.classList.add("hidden")}e.addEventListener("click",(function(){(function(e,n,t){if(n-t<0)return i(),console.log("error");u.classList.remove("hidden");for(var r=0;r<t;r++){for(var o=!0;o;)number=m(e,n),o=d.includes(number);d.push(number),a.textContent=d.join(", ")}!function(){if(d.length>1)return c.textContent="Your numbers: ";c.textContent="Your number: "}()})(t.value,r.value,o.value),d=[]})),n.addEventListener("click",i)}();
//# sourceMappingURL=index.aa2c1cc3.js.map