const wheel = document.querySelector('.wheel');
const spinButton = document.getElementById('spin-button');

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360);
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
