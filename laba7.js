let popup = document.getElementById('mypopup'),
        popupToggle = document.getElementById('myBtn'),
        popupClose = document.querySelector('.close');
        
        popupToggle.onclick = function(){
            popup.style.display="block";
        }

        popupClose.onclick = function(){
            popup.style.display = "none";
        }

        window.onclick = function(e){
            if(e.target == popup) {
                popup.style.display ="none";
            }
        }
let offset =0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
    offset = offset + 500;
    if (offset > 1500){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click',function(){
    offset = offset - 500;
    if (offset < 0){
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
});
var color = 'green';
document.querySelector('button').onclick = function(){
    console.log(this)  // теперь this это кнопка
    this.style.background = "red";
}

