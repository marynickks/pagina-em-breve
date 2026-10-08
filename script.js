// =========================
// DATA DO LANÇAMENTO
// =========================

// O lançamento acontecerá daqui a 25 dias

const dataLancamento = new Date();

dataLancamento.setDate(
    dataLancamento.getDate() + 25
);


// =========================
// CONTADOR
// =========================

function contador() {

    // Data e hora atual

    const agora = new Date().getTime();


    // Calcula quanto tempo falta

    const distancia =
        dataLancamento.getTime() - agora;


    // =========================
    // DIAS
    // =========================

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    // =========================
    // HORAS
    // =========================

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    // =========================
    // MINUTOS
    // =========================

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );


    // =========================
    // SEGUNDOS
    // =========================

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );


    // =========================
    // MOSTRA NA TELA
    // =========================

    document.getElementById("dias").innerHTML =
        dias < 10 ? "0" + dias : dias;


    document.getElementById("horas").innerHTML =
        horas < 10 ? "0" + horas : horas;


    document.getElementById("minutos").innerHTML =
        minutos < 10 ? "0" + minutos : minutos;


    document.getElementById("segundos").innerHTML =
        segundos < 10 ? "0" + segundos : segundos;


    // =========================
    // QUANDO CHEGAR A ZERO
    // =========================

    if (distancia < 0) {

        clearInterval(intervalo);

        document.getElementById("dias").innerHTML = "00";

        document.getElementById("horas").innerHTML = "00";

        document.getElementById("minutos").innerHTML = "00";

        document.getElementById("segundos").innerHTML = "00";
    }

}


// =========================
// INICIA O CONTADOR
// =========================

contador();


// Atualiza os números a cada 1 segundo

const intervalo = setInterval(
    contador,
    1000
);