// obrazek najedz zmien ez gg hah
function podmien(jak){
    if(jak==1)
        document.getElementById("obrazek").src="jawornet.jpg";
    else if(jak==2)
        document.getElementById("obrazek").src="jawornet3.jpg";
    else
        document.getElementById("obrazek").src="jawornet2.jpg";
}

window.addEventListener('DOMContentLoaded', function() {
    // funkcja do sloganuw losu losu dzindzindzin referencja
    var slogany = [
        'Jedyny internet, który uczy cierpliwości.',
        'Internet szybki jak pogoda w Jaworkach!',
        'Dołącz do nas i poczuj dreszczyk oczekiwania.',
        'Stabilność? To nie u nas!',
        'Prędkość od 0 do 100 Mbps - codzienna loteria!',
        'Internet, który zaskakuje każdego dnia.',
        'bo po co Ci przewidywalność?'
    ];
    var sloganDiv = document.getElementById('slogan-header');
    if (sloganDiv) {
    var los = Math.floor(Math.random() * slogany.length);
        sloganDiv.innerHTML = slogany[los];
    }

    // funkcja do odyhania
    var baza = {r: 131, g: 199, b: 255};
    var amplytuda = 40; 
    var jestemprendkosciam = 2500;
    function animacjaProstoSygma() {
        var now = Date.now();
        var t = Math.sin((now % jestemprendkosciam) / jestemprendkosciam * 2 * Math.PI);
        var r = Math.min(255, Math.max(0, baza.r + amplytuda * t));
        var g = Math.min(255, Math.max(0, baza.g + amplytuda * t));
        var b = Math.min(255, Math.max(0, baza.b + amplytuda * t));
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        requestAnimationFrame(animacjaProstoSygma);
    }
    animacjaProstoSygma();

    // reklama to leci w dul teraz
    var reklama = document.getElementById('reklama');
    var textReklamy = document.getElementById('textReklamy');
    var pos = reklama.offsetWidth;
    function ruh() {
        pos -= 1;
        if (pos < -textReklamy.offsetWidth) pos = reklama.offsetWidth;
        textReklamy.style.left = pos + 'px';
        requestAnimationFrame(ruh);
    }
    ruh();     
});