function podsumuj() {
	var wynikDiv = document.getElementById('wynikKonfiguracji');
	var podsumowanie = document.getElementById('podsumowanie');

    document.getElementById('usunale').innerHTML = '';

	var predkoscSelect = document.getElementById('predkosc');
	var predkoscText = predkoscSelect.options[predkoscSelect.selectedIndex].text;
	var predkoscCena = 0;
	switch (predkoscSelect.value) {
		case '10': predkoscCena = 10; break;
		case '100': predkoscCena = 100; break;
		case '200': predkoscCena = 200; break;
		case '300': predkoscCena = 300; break;
	}

	var typRadio = document.querySelector('input[name="typ"]:checked');
	var typText = '';
	var typCena = 0;
	if (typRadio) {
		switch (typRadio.value) {
			case 'rezonans': typText = 'Rezonans Schumanna'; typCena = 200; break;
			case 'satelitarne': typText = 'Łącze satelitarne'; typCena = 300; break;
			case 'dial-up': typText = 'Dial-up'; typCena = 100; break;
		}
	}

	var dodatki = [];
	var dodatkiCena = 0;
	var dodatkiMap = [
		{ id: 'dodatek1', label: 'Wsparcie techniczne', price: 150 },
		{ id: 'dodatek2', label: 'Comiesięczne statystyki prędkości', price: 50 },
		{ id: 'dodatek3', label: 'Pakiet telewizyjny "Zamrożone Mazdy"', price: 100 },
		{ id: 'dodatek4', label: 'Karta SIM (Rozmowy i SMS bez limitu, 2GB Internetu)', price: 100 },
		{ id: 'dodatek5', label: 'Pakiet muzyczny stworzony przez youifjw "To jest szlembark Vol.2"', price: 50 },
		{ id: 'dodatek6', label: 'Karnet bojowy (dostęp do filmów jaworskich)', price: 75 },
	];
	for (var i = 0; i < dodatkiMap.length; i++) {
		var el = document.getElementById(dodatkiMap[i].id);
		if (el && el.checked) {
			dodatki.push(dodatkiMap[i].label + ' - ' + dodatkiMap[i].price + 'zł');
			dodatkiCena += dodatkiMap[i].price;
		}
	}

	var imie = document.getElementById('imie').value;
	var nazwisko = document.getElementById('nazwisko').value;
	var adres = document.getElementById('adres').value;
	var email = document.getElementById('email').value;
	var telefon = document.getElementById('telefon').value;

	if (!imie || !nazwisko || !adres || !email || !telefon) {
		alert('Uzupełnij wszystkie wymagane pola!');
		return false;
	}

	var suma = predkoscCena + typCena + dodatkiCena;

    document.getElementById('usunale').innerHTML = '';
	var html = '<h3>Wybrana prędkość:</h3><p>' + predkoscText + '</p>';
	html += '<h3>Typ łącza:</h3><p>' + typText + ' (' + typCena + 'zł)</p>';
	html += '<h3>Dodatki:</h3>';
	if (dodatki.length > 0) {
		html += '<ul>';
		for (var j = 0; j < dodatki.length; j++) {
			html += '<li>' + dodatki[j] + '</li>';
		}
		html += '</ul>';
	} else {
		html += '<p>Brak</p>';
	}
	html += '<h3>Dane osobowe:</h3>';
	html += '<ul>';
	html += '<li>Imię: ' + imie + '</li>';
	html += '<li>Nazwisko: ' + nazwisko + '</li>';
	html += '<li>Adres: ' + adres + '</li>';
	html += '<li>Email: ' + email + '</li>';
	html += '<li>Telefon: ' + telefon + '</li>';
	html += '</ul>';
	html += '<h3>Łączna cena: <span style="color: yellow;">' + suma + 'zł na miesiąc</span></h3>';
	html += '<button onclick="alert(\'Dziękujemy za konfigurację! Technik powinien zjawić się w twoim domu w ciągu 24 godzin.\'); window.location.href=\'index.html\';" style="padding: 10px 20px; font-size: 20px; background-color: rgb(0, 0, 0); color: white; border: none; border-radius: 10px; cursor: pointer;"><b>Zatwierdź zamówienie</b></button>';

	wynikDiv.innerHTML = html;
	podsumowanie.scrollIntoView({ behavior: 'smooth' });
	return false;
}

document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('#about form');
	if (form) {
		form.onsubmit = function() { return podsumuj(); };
	}
});
