let btnCount = document.querySelectorAll('.drum');
let audio    = new Audio('./sounds/tom-1.mp3');

for (let i = 0;i  < btnCount.length;i++){
    btnCount[i].addEventListener('click', function () {
        audio.play();
    });
}
