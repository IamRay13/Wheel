const names = [
    "Miricar Ross Amasa Abregana",
    "Jade Judilla Tan",
    "Gladys Owatan Miñoza",
    "Ramon Mangubat Tariao",
    "Harben De Castro",
    "Mariejo Rondero Anglit Indoy",
    "Stefano Luis Ibaseta Arriola",
    "Floravee Rama Tampos",
    "Kimberly Tajado Silagpo",
    "Huervo Sanchez Baculi",
    "Jovelyn Escora Capuno",
    "Hanefah Mamarinta Ameril",
    "Liberty Balagtas Fajardo",
    "Windy Lapon Aniñon",
    "Jean Ivey Oyao",
    "Shannen Claire Capuyan Tumulak",
    "Tim Joverl Espinosa Bahena",
    "Reyk Javik Jr. Talisay Mendoza",
    "Ranzel Dulotan Padayao",
    "Rizza Mae Sampaga Mabuan",
    "Danica Tampipi Sayson",
    "Loreto Jr. Omas Iwayan",
    "Ailene Maribojoc Tequillo",
    "Juliana Faye Gutierrez Catamco"
];

const colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8B00FF'  // Violet
];

const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const segments = names.length;
const arcSize = 2 * Math.PI / segments;

function drawWheel() {
    for (let i = 0; i < segments; i++) {
        const angle = i * arcSize;
        ctx.beginPath();
        ctx.arc(250, 250, 250, angle, angle + arcSize, false);
        ctx.lineTo(250, 250);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.save();

        ctx.translate(250, 250);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.rotate(Math.PI / 2);
        ctx.fillText(names[i], 0, -230);
        ctx.restore();
    }
}

function spinWheel() {
    const spinAngle = Math.random() * 10 + 5;
    const spinDuration = Math.random() * 2000 + 2000;
    const winnerIndex = Math.floor(Math.random() * segments);
    const winnerAngle = winnerIndex * arcSize + arcSize / 2;

    let currentRotation = 0;
    const start = Date.now();

    function animate() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / spinDuration, 1);
        const easing = progress * (2 - progress);
        currentRotation = (spinAngle * easing + winnerAngle) % (2 * Math.PI);

        ctx.clearRect(0, 0, 500, 500);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(currentRotation);
        ctx.translate(-250, -250);
        drawWheel();
        ctx.restore();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            document.getElementById('winner-message').innerText = `Congratulations, ${names[winnerIndex]}!`;
        }
    }

    animate();
}

drawWheel();
