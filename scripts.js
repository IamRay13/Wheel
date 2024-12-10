const names = [
"Capuno, Jovelyn Escora",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Capuno, Jovelyn Escora",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Capuno, Jovelyn Escora",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi",
"Ameril, Hanefah Mamarinta",
"Fajardo, Liberty Balagtas",
"Aniñon, Windy Lapon",
"Oyao, Jean Ivey",
"Tumulak, Shannen Claire Capuyan",
"Bahena, Tim Joverl Espinosa",
"Mendoza, Reyk Javik Talisay",
"Padayao, Ranzel Dulotan",
"Mabuan, Rizza Mae Sampaga",
"Sayson, Danica Tampipi",
"Iwayan, Loreto Jr.",
"Tequillo, Ailene",
"Catamco, Julianna",
"Abregana, Miricar Ross Amasa",
"Tan, Jade Judilla",
"Miñoza, Gladys Owatan",
"Tariao, Ramon Mangubat",
"De Castro, Harben Anglit",
"Indoy, Mariejo Rondero",
"Arriola, Stefano Luis Ibaseta",
"Tampos, Floravee Rama",
"Kim Silagpo",
"Huervo Baculi"

];

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

const drumRollAudio = document.getElementById('drum-roll');
const celebratorySoundAudio = document.getElementById('celebratory-sound');

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
        ctx.font = 'bold 14px Arial';
        ctx.fillText(names[i], 150, 10); // Adjust the radius and position if necessary
        ctx.restore();
    }
}

function spinWheel() {
    drumRollAudio.play();
    const spinAngle = Math.random() * 20 + 10; // Increase the spin angle for faster speed
    const spinDuration = (Math.random() * 5 + 20) * 1000; // Random duration between 20-25 seconds
    const startRotation = Math.random() * 2 * Math.PI; // Random starting point
    const endRotation = startRotation + spinAngle * Math.PI; // Add multiple full spins
    let currentRotation = startRotation;
    const start = Date.now();
    const isPrank = Math.random() < 0.5; // Randomly decide if this spin will have a prank

    function animate() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / spinDuration, 1);

        // Creating a thrilling effect by modulating the speed
        const easing = Math.sin(progress * Math.PI * 2) * 0.5 + 0.5;

        currentRotation = (startRotation + (endRotation - startRotation) * easing) % (2 * Math.PI);

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
            drumRollAudio.pause();
            drumRollAudio.currentTime = 0;
            celebratorySoundAudio.play();

            if (isPrank) {
                // Prank: Fake stop and restart the spin
                setTimeout(() => {
                    drumRollAudio.play();
                    const prankSpinAngle = Math.random() * 10 + 5;
                    const prankSpinDuration = 2000; // 2 seconds for the prank spin
                    const prankStart = Date.now();
                    const prankStartRotation = currentRotation;
                    const prankEndRotation = prankStartRotation + prankSpinAngle * Math.PI;

                    function prankAnimate() {
                        const prankElapsed = Date.now() - prankStart;
                        const prankProgress = Math.min(prankElapsed / prankSpinDuration, 1);
                        const prankEasing = prankProgress * (2 - prankProgress);

                        currentRotation = (prankStartRotation + (prankEndRotation - prankStartRotation) * prankEasing) % (2 * Math.PI);

                        ctx.clearRect(0, 0, 600, 600);
                        ctx.save();
                        ctx.translate(300, 300);
                        ctx.rotate(currentRotation);
                        ctx.translate(-300, -300);
                        drawWheel();
                        ctx.restore();

                        if (prankProgress < 1) {
                            requestAnimationFrame(prankAnimate);
                        } else {
                            drumRollAudio.pause();
                            drumRollAudio.currentTime = 0;
                            celebratorySoundAudio.play();
                        }
                    }

                    prankAnimate();
                }, 1000); // 1 second delay before the prank spin
            }
        }
    }

    animate();
}

drawWheel();
