function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);
    var resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + ". " + resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.icone-menu');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});