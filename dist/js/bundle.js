/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks/designer.js":
/*!***********************************!*
  !*** ./src/js/blocks/designer.js ***!
  \***********************************/
/***/ ((module) => {

function rgb(){
    
    let wrp = document.querySelectorAll(".designer__item"),
        wrpX = document.querySelector(".designer__items"),
    clr = document.querySelectorAll(".designer__item_color"),
    ftr = document.querySelector('.designer__foot'),
    des = document.querySelector('.designer'),
        line = document.querySelectorAll(".designer__line");
    let check = false;
line.forEach((item)=> item.addEventListener("mousedown", function(){
check = true;

}));
line.forEach((item)=> item.addEventListener("mouseup", function(){
check = false;
}));

wrp.forEach((item, i)=> item.addEventListener('mousemove', function(event){
    let media = document.body.clientWidth,
        wrpr = wrpX.getBoundingClientRect().right + 3,
        end = Math.floor(media - wrpr);
    if(check == true){
    let poi = event.clientX - end ;    
    if(poi > wrpr){
        poi = wrpr;
    }
    console.log(poi);
    clr[i].style.width = poi + 'px';
    let red = clr[0].style.width ,
        green = clr[1].style.width,
        blue = clr[2].style.width; 
    des.style.background = `linear-gradient(to left, rgba(${red.replace(/px/ig, '')}, ${green.replace(/px/ig, '')}, ${blue.replace(/px/ig, '')}, 1), #fff, rgba(${red.replace(/px/ig, '')}, ${green.replace(/px/ig, '')}, ${blue.replace(/px/ig, '')}, 1))`; 
    ftr.style.background = `linear-gradient(to left, rgba(${red.replace(/px/ig, '')}, ${green.replace(/px/ig, '')}, ${blue.replace(/px/ig, '')}, 1), #fff )`;
}
}));

}
module.exports = rgb;


/***/ }),

/***/ "./src/js/blocks/header.js":
/*!*********************************!*
  !*** ./src/js/blocks/header.js ***!
  \*********************************/
/***/ ((module) => {

function header(){
    let openBtn = document.querySelector(".navbar__btn"),
        overlay = document.querySelector(".overlay"),
        content = document.querySelector(".overlay__header");
    openBtn.addEventListener('click', ()=>{
        overlay.classList.toggle('overlay__none');
        content.classList.toggle('overlay__off');
    });
}
module.exports = header;

/***/ }),

/***/ "./src/js/blocks/promo.js":
/*!********************************!*
  !*** ./src/js/blocks/promo.js ***!
  \********************************/
/***/ ((module) => {

function curx(){
    let media = document.body.clientWidth;
    console.log(media);
    if(media > 1010){

    
   let wrp = document.querySelector(".promo"),
    site = document.querySelector(".promo__site");
wrp.addEventListener("mousemove", function(event){
    let poi = event.clientX;
    site.style.width = poi + 'px';
    if(poi < 500){
        site.style.width = '505px';
    }else if(poi > 1010){
        site.style.width = '1020px';
    }
});
} 
}
module.exports = curx;

/***/ }),

/***/ "./src/js/blocks/timer.js":
/*!********************************!*
  !*** ./src/js/blocks/timer.js ***!
  \********************************/
/***/ ((module) => {

function timer(){
    let deadline = '2020-12-14';
    let getTimeRemaning = (endtime)=>{
        let t = Date.parse(endtime) - Date.parse(new Date()),
        secundes = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours' : hours,
            'secundes' : secundes,
            'minutes' : minutes
        };
    
    };
    function setTime(id, endtime){
        let timer = document.getElementById(id),
            secundes = timer.querySelector(".timer__item_secunds"),
            minutes = timer.querySelector(".timer__item_minutes"),
            hours = timer.querySelector(".timer__item_hour"),
            interval = setInterval(timeUpDate, 1000);
            function timeUpDate(){
                let t = getTimeRemaning(endtime);
                let addZero = (num)=>{
                    if(num <= 9){
                        return '0' + num;
                    }else{
                        return num;
                    }
                };
                secundes.textContent = addZero(t.secundes);
                minutes.textContent = addZero(t.minutes);
                hours.textContent = addZero(t.hours);
                if(t.total <= 0){
                    clearInterval(interval);
                }
            }
        
    }

setTime('timer', deadline);
}
module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**************************!*
  !*** ./src/js/script.js ***!
  \**************************/
document.addEventListener('DOMContentLoaded', function(){
let promo = __webpack_require__(/*! ./blocks/promo */ "./src/js/blocks/promo.js"),
    rgb = __webpack_require__(/*! ./blocks/designer */ "./src/js/blocks/designer.js"),
    timer = __webpack_require__(/*! ./blocks/timer */ "./src/js/blocks/timer.js"),
    header = __webpack_require__(/*! ./blocks/header */ "./src/js/blocks/header.js");



promo();
header();
rgb();
timer();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map