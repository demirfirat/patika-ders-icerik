const soundItems = {
    'A' : document.getElementById('soundA'),
    'S' : document.getElementById('soundS'),
    'D' : document.getElementById('soundD'),
    'F' : document.getElementById('soundF'),
    'G' : document.getElementById('soundG'),
    'H' : document.getElementById('soundH'),
    'J' : document.getElementById('soundJ'),
    'K' : document.getElementById('soundK'),
    'L' : document.getElementById('soundL'),
};
console.log('sounditems', soundItems);

document.querySelectorAll('.sound-button').forEach(button =>{
    button.addEventListener('click', function(){
        const key = this.getAttribute('data-key');
        playSound(key);
        animateButton(this);
    });
});
document.addEventListener('keydown',function(event){
    const key = event.key.toUpperCase();
    const button = document.querySelector('.sound-button[data-key="${key}"]');

    if (soundItems[key]){
        playSound(key);
        animateButton(button);
    }
});

function playSound(key) {
    if (soundItems[key]){
        soundItems[key].currentTime = 0;
        soundItems[key].play();
    }
}

function animateButton(button){
    if(button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    }
}