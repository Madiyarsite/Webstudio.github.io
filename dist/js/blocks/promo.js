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