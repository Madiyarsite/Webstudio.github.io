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