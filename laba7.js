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


function changeColor() {
    document.querySelectorAll(".button").forEach(v => v.style.backgroundColor = "Black");
    }
              
    let inp = document.querySelector('#tel');


let text = 'Галактионов Максим';

let typeNumber = 3; 
let errorLevel = 'L'; 
let qrDiv = document.getElementById('qr');

let qr1 = qrcode(typeNumber, errorLevel);

qr1.addData(text);
qr1.make();
qrDiv.innerHTML += `my text:<br> '${text}'<br>`;
//qrDiv.innerHTML += qr1.createImgTag(8,10);
qrDiv.innerHTML += qr1.createSvgTag(8,10);
qrDiv.innerHTML += qr1.createTableTag(3,10) + '<br>';
text = qrcode.stringToBytes(text);
qrDiv.innerHTML += text.join(' ')+ '<br>';
qrDiv.innerHTML += String.fromCharCode( ...text);



