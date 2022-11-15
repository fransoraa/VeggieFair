
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');


btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active')
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active')
});

var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
    overlay2 = document.getElementById('overlay'),
    popup2 = document.getElementById('popup'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup');


btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active')
});

btnCerrarPopup.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active')
});

var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
    overlay3 = document.getElementById('overlay'),
    popup3 = document.getElementById('popup'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup');


btnAbrirPopup3.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup3.classList.add('active')
});

btnCerrarPopup.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active')
});