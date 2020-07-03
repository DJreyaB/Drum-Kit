let btnCount = document.querySelectorAll('.drum');

for (let i = 0;i  < btnCount.length;i++){
    btnCount[i].addEventListener('click', function () {
        
        let btnHtml = this.innerHTML;
        soundDrum(btnHtml);
        btnAnimation(btnHtml);

    });
}

document.addEventListener('keydown', function(event){

    soundDrum(event.key);
    btnAnimation(event.key);
});

function soundDrum(key) {
    
    
    switch (key) {
        case 'w':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'a':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 's':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'd':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'j':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'k':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'l':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;           
        default:  alert('there is a problem');
    }
}


function btnAnimation(key) {
    let activeBtn = document.querySelector('.' + key);

    activeBtn.classList.add('pressed');

    setTimeout(function(){
        activeBtn.classList.remove('pressed');
    }, 300);
}