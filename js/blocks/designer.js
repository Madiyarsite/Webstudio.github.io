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
