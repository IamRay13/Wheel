const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');

spinButton.addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 360 + 3600);
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    
    setTimeout(() => {
        const actualDegree = randomDegree % 360;
        const winningSegment = Math.floor(actualDegree / 60);
        alert(`You won: ${document.querySelectorAll('.segment')[winningSegment].textContent}`);
    }, 4000);
});
