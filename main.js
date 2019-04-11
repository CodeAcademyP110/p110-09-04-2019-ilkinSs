"use strict",

//     [...document.querySelectorAll('.main-block .block')].forEach((div, i) => {
//     div.onclick = function(){
//         document.querySelector('.main-block .block.active').classList.remove("active");
//         this.classList.add('active');
//     }
// }
//     )


//FIRST TASK


//second TASK

[...document.querySelectorAll('.header .header-box')].forEach((div, i) =>{
    div.onclick = function(){
        document.querySelector('.header .header-box.active').classList.remove('active');
        this.classList.add('active');

         document.querySelector('.footer-box.active').classList.remove('active');

         const id = this.getAttribute('data-id');
         const footerBox = document.querySelector(`.footer-box[data-id="${id}"]`);
         footerBox.classList.add('active');
    }
}



)