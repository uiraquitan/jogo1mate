const gerarNumero = document.querySelectorAll("button");

//VISOR
const numeroVisorUm = document.querySelector("span.numeroVisorUm");
const operador = document.querySelector("span.operador");
const numeroVisorDois = document.querySelector("span.numeroVisorDois");
const numeroVisorResult = document.querySelector("span.numeroVisorResult");
const btnTrocar = document.querySelector(".btnShow");
const btnChecar = document.querySelector(".btnChecar");


// FORMULAS
const formulas = document.querySelectorAll(".formulas");

// PONTOS
const h1span = document.querySelector("h1 span");

let ponto = 3;



// NUMERO DIGITADO
const numeroReal = document.querySelector("[data-numeroreal]");

// NUMERO DIGITADO
const msg = document.querySelector(".msg");

//mostrar resultados
const mostrarResult = document.querySelector("[data-mostrarResult]");

// Iniciando com numeros danromicos
numeroRandomico(10, 10);

// Botoes clicados
function btn(e) {
    e.preventDefault();
    switch (e.target.name) {
        case 'btnChecar':
            chutar();
            if (ponto.valueOf() <= 0) {
                disable(e, "Chutar", btnChecar);
                h1span.innerHTML = 0;
            }

            break;

        case 'trocar':
            alterarNumber();
            break;

        case 'btnShow':
            mostrarResultado();

            if (ponto.valueOf() <= 0) {
                disable(e, "Mostrar Resultado", btnTrocar);
                h1span.innerHTML = 0;

            }
            break;
    }


}
// console.log(btnTrocar.innerHTML = 1);


function disable(e, msgs, btnClasse) {
    for (let i = 1; i <= 10; i++) {

        setTimeout(() => {
            btnClasse.innerHTML = i;
            if (btnClasse.innerHTML == 10) {
                enable(e);
                btnClasse.innerHTML = msgs;
            }
        }, 1000 * i);
    }

    e.target.disabled = true;
}

function enable(e) {
    e.target.disabled = false;
}

//Chutar número
function chutar() {
    // setInterval()
    const result = exeFormula(numeroVisorUm.innerHTML, numeroVisorDois.innerHTML, operador.innerHTML)
    if (numeroReal.value != result) {

        if (numeroReal.value == "") {
            return msg.innerHTML = "<span class='bg-error'>Insira um valor </span>";
        }

        msg.innerHTML = "<span class='bg-error'>Você errou</span>";
        (mostrarResult.classList.remove("bg-accept") ?? "");
        (mostrarResult.classList.remove("bg-danger") ?? "");
        (numeroReal.classList.remove("bg-danger") ?? "");
        mostrarResult.classList.add("bg-error");
        ponto--;
        h1span.innerHTML = ponto;

    } else {

        numeroVisorResult.innerHTML = numeroReal.value;
        ponto++;
        msg.innerHTML = "<span class='bg-accept'>Você Acertou</span>";
        h1span.innerHTML = ponto;
        mostrarResult.classList.add("bg-accept");
        numeroReal.value = '';
        setTimeout(() => {
            alterarNumber();
            msg.innerHTML = "";
            (mostrarResult.classList.remove("bg-danger") ?? "");
            (numeroReal.classList.remove("bg-danger") ?? "");
            (mostrarResult.classList.remove("bg-error") ?? "");
            numeroReal.value = '';
        }, 3000);

    }

}

function message(element, classe) {
    element.classList.remove(classe);
}

// CHUTAR
function mostrarResultado() {

    ponto--;
    h1span.innerHTML = ponto;
    numeroReal.value = exeFormula(numeroVisorUm.innerHTML, numeroVisorDois.innerHTML, operador.innerHTML);
    numeroReal.classList.add("bg-danger");
    mostrarResult.classList.add("bg-danger");
    msg.innerHTML = "<span class='bg-danger'>Relaxa, tenta aii de novo</span>";
    setTimeout(() => {
    }, 3000);
}
// setTimeout(() => {
//     mostrarResult();
// }, 3000);


function exeFormula(valor1, valor2, formulas) {
    switch (formulas) {
        case '*':
            return +valor1 * +valor2;

        case '/':
            const salarioHora = (+valor1 / +valor2 != "Infinity" ? +valor1 / +valor2 : 0);

            const total = salarioHora.toFixed(2);
            ponto+2;

            return total;

        case '+':
            return +valor1 + +valor2;

        case '-':
            return +valor1 - +valor2;

    }
}


// Como irá se repertir, criado uma função
function numeroRandomico() {
    numeroVisorUm.innerHTML = Math.floor(Math.random() * 20);
    numeroVisorDois.innerHTML = Math.floor(Math.random() * 20);
    return this;
}



// gerando numero aleatório
function alterarNumber() {

    numeroRandomico()
    msg.innerHTML = "";
    numeroReal.classList.remove("bg-danger");
    (mostrarResult.classList.remove("bg-danger") ?? "");
    (mostrarResult.classList.remove("bg-error") ?? "");
    (mostrarResult.classList.remove("bg-accept") ?? "");
    numeroReal.value = '';
    numeroVisorResult.innerHTML = "0";
}

//Funcão que seleciona a formula
function selecionar(e) {
    operador.innerHTML = e;

}


//Loop que verifica o botão clicado
gerarNumero.forEach((item) => {
    item.addEventListener("click", btn);
});





