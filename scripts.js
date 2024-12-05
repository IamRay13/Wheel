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

// Diverse set of colors
const colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

const wheel = document.getElementById('wheel');
const ctx = wheel.getContext('2d');
const segments = names.length;
const arcSize = 2 * Math.PI / segments;

function drawWheel() {
    for (let i = 0; i < segments; i++) {
        const angle = i * arcSize;
        ctx.beginPath();
        ctx.arc(300, 300, 300, angle, angle + arcSize, false);
        ctx.lineTo(300, 300);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.save();

        ctx.translate(300, 300);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.rotate(Math.PI / 2);
        ctx.fillText(names[i], 0, -280);
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

        ctx.clearRect(0, 0, 600, 600);
        ctx.save();
        ctx.translate(300, 300);
        ctx.rotate(currentRotation);
        ctx.translate(-300, -300);
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
