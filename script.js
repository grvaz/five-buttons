const audio = new Audio('click.mp3');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (!e.target.classList.contains('active')) {
            return;
        }

        const inactiveButtons = [...buttons].filter(b => {
            return !b.classList.contains('active');
        });

        e.target.classList.remove('active');

        inactiveButtons[Math.floor(Math.random() * inactiveButtons.length)]
            .classList.add('active');    
         
        audio.play();    
    });
});