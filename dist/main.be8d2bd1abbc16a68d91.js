(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,r,o){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}var n=function(){return localStorage.getItem("food")?JSON.parse(localStorage.getItem("food")):[]},c=function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},u=function(e){localStorage.getItem(e)&&localStorage.removeItem(e)},i=n(),a=document.querySelector(".popup__radio-form"),l=function(e){a.innerHTML="",e.forEach((function(e){f(e,a)}))},f=function(e,t){var r=function(e){var t=e.name,r=e.calories,o=e.id,n=document.querySelector("#food-template").content.querySelector(".popup__label").cloneNode(!0);return n.querySelector(".popup__food").textContent=t,n.querySelector(".popup__calories").textContent="".concat(r," ккал / 100 г"),n.querySelector(".popup__radio").value=o,n}(e);t.append(r)},s=function(){var e=c("breakfast"),t=c("lunch"),r=c("dinner"),o=c("nosh");return e.concat(t,r,o)},d=function(){var e=s();return Math.ceil(e.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0))},p=function(e){var t=c(e);return Math.ceil(t.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0))},y=function(e){e.classList.add("popup_opened")},m=function(e){e.classList.remove("popup_opened")};document.querySelectorAll(".popup").forEach((function(e){e.querySelector(".popup__close-button").addEventListener("click",(function(){m(e)}))}));var v=document.querySelector("#popup-new-norm"),b=document.forms.changeNormForm;b.addEventListener("submit",(function(e){e.preventDefault(),P(b.querySelector(".popup__input").value),m(v)}));var S=document.querySelector("#callories"),_=document.querySelector("#hydrocarbons"),g=document.querySelector("#proteins"),h=document.querySelector("#fats"),q=document.querySelector("#norm"),O=document.querySelector(".info__change-norm"),w=localStorage.getItem("norm")?localStorage.getItem("norm"):2200,L=function(){q.textContent="".concat(w," ккал")},P=function(e){w=e,function(e){localStorage.setItem("norm",e)}(e),L()},j=function(){var e;S.textContent=d(),g.textContent=(e=s(),Math.ceil(e.reduce((function(e,t){return e+ +t.proteins*+t.weight/100}),0))),_.textContent=function(){var e=s();return Math.ceil(e.reduce((function(e,t){return e+ +t.hydrocarbons*+t.weight/100}),0))}(),h.textContent=function(){var e=s();return Math.ceil(e.reduce((function(e,t){return e+ +t.fats*+t.weight/100}),0))}()};L(),O.addEventListener("click",(function(){b.reset(),y(v)}));var E=document.querySelector("#popup-new-food"),C=document.forms.newFoodForm;function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}C.addEventListener("submit",(function(e){e.preventDefault();var t=C.querySelectorAll(".popup__input"),o={};t.forEach((function(e){o[e.name]=e.value})),function(e){var t=n();t.push(r(r({},e),{},{id:t.length})),localStorage.setItem("food",JSON.stringify(t))}(o);var c=n();l(c),m(E),y(document.querySelector("#popup-add-food"))}));var D,N=document.forms.addForm,J=document.querySelector("#popup-add-food"),T=document.querySelector(".popup__new-food");N.addEventListener("submit",(function(e){e.preventDefault();var t=N.elements.food.value,r=n().find((function(e){return e.id===+t})),o=+N.querySelector("#weight-input").value;!function(e,t){var r=c(e);r.push(t),localStorage.setItem(e,JSON.stringify(r))}(D,M(M({},r),{},{weight:o})),U(),j(),m(J),d()>w&&alert("Превышена дневная норма калорий")})),T.addEventListener("click",(function(){m(J),y(E),C.reset()}));var F=document.querySelector(".statistics__canvas").getContext("2d"),A=document.querySelector("#statistics-breakfast"),H=document.querySelector("#statistics-lunch"),z=document.querySelector("#statistics-dinner"),B=document.querySelector("#statistics-nosh"),G=function(e,t,r,o,n,c){F.fillStyle=c,F.beginPath(),F.moveTo(e,t),F.arc(e,t,r,o,n),F.closePath(),F.fill()},K=function(){var e=d(),t=p("breakfast"),r=p("lunch"),o=p("dinner");!function(e,t,r,o){A.textContent="".concat(e," ккал"),H.textContent="".concat(t," ккал"),z.textContent="".concat(r," ккал"),B.textContent="".concat(o," ккал")}(t,r,o,p("nosh"));var n=t/e*2*Math.PI,c=n+r/e*2*Math.PI;!function(e,t,r,o){G(150,150,150,0,2*Math.PI,"violet"),G(150,150,150,e,t,"blue"),G(150,150,150,t,r,"orange"),G(150,150,150,r,o,"green"),G(150,150,150,o,2*Math.PI,"yellow")}(0,n,c,c+o/e*2*Math.PI)},Q=document.querySelector(".food__button"),R=document.querySelectorAll(".card"),U=function(){R.forEach((function(e){!function(e){var t=e.querySelector(".card__display"),r=e.querySelector(".card__food"),o=t.querySelector(".card__button"),n=e.id.replace("#",""),u=c(n);if(r.innerHTML="",u.length>0){t.classList.contains("card__display_visible")||t.classList.add("card__display_visible");var i=Math.ceil(u.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0));e.querySelector(".card__calories").textContent="".concat(i," ккал"),u.forEach((function(e){return function(e,t,r){var o=function(e,t){var r=e.name,o=e.calories,n=e.weight,c=document.querySelector("#food-card-template").content.querySelector(".food-card").cloneNode(!0);return c.querySelector(".food-card__name").textContent=r,c.querySelector(".food-card__calories").textContent="".concat(Math.ceil(+o*+n/100)," ккал"),c.querySelector(".food-card__weight").textContent="".concat(+n," г"),c.querySelector(".food-card__delite").addEventListener("click",(function(){V(t,r)})),c}(e,r);t.append(o)}(e,r,n)}))}else t.classList.contains("card__display_visible")&&t.classList.remove("card__display_visible"),r.classList.contains("card__food_visible")&&(r.classList.remove("card__food_visible"),o.classList.remove("card__button_active"))}(e)})),K()},V=function(e,t){!function(e,t){var r=c(e);r=r.filter((function(e){e.name,t.name})),localStorage.setItem(e,JSON.stringify(r))}(e,t),U(),j()};Q.addEventListener("click",(function(){u("breakfast"),u("lunch"),u("dinner"),u("nosh"),U(),j()})),R.forEach((function(e){var t=e.id.replace("#",""),r=e.querySelector(".card__add-button"),o=e.querySelector(".card__button"),n=e.querySelector(".card__food");r.addEventListener("click",(function(){!function(e){y(J),D=e,N.reset()}(t)})),o.addEventListener("click",(function(){n.classList.toggle("card__food_visible"),o.classList.toggle("card__button_active")}))}));var W,X=document.querySelector(".popup__search"),Y=document.querySelector(".popup__select");i.forEach((function(e){f(e,a)})),U(),j(),K(),X.addEventListener("input",(function(){W=""===X.value?i:i.filter((function(e){return e.name.toLowerCase().includes(X.value.toLowerCase())})),l(W)})),Y.addEventListener("change",(function(){!function(e){var t,r;"name"===e.value&&(r="name",t=i.sort((function(e,t){return e[r].toLowerCase()>t[r].toLowerCase()?1:-1}))),"calories"===e.value&&(t=function(e,t){return e.sort((function(e,r){return+e[t]-+r[t]}))}(i,"calories")),l(t)}(Y)}))})();