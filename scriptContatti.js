function form() {
    let inputNome = document.getElementById("nome").value;
    let inputCognome = document.getElementById("cognome").value;
    let inputEmail = document.getElementById("email").value;
    let inputLettera = document.getElementById("messaggio").value;


    let stampa = "";

    if (inputNome.trim() === "") {
        alert("*ERROR*/// inserisci il tuo nome!");
        return;
    }

    if (inputCognome.trim() === "") {
        alert("*ERROR*/// inserisci il tuo cognome!");
        return;
    }

    if (inputEmail.trim() === "") {
        alert("*ERROR*/// inserisci la tua email!");
        return;
    }

    for (let i = 0; i < inputEmail.length; i++) {
        if (inputEmail.charAt(i) == '@') {
            stampa += inputEmail.charAt(i);
        }
        if ((stampa != "") && (inputEmail.charAt(i) == '.')) {
            stampa += inputEmail.charAt(i);
        }
    }

    if ((stampa == '@') || (stampa == "")) {
        alert("*ERROR*/// inserisci un'email valida!");
        return;
    }

    if (inputLettera.trim() === "") {
        alert("*ERROR*/// inserisci il tuo messaggio!");
        return;
    }

    var newP = document.createElement("p");
    newP.textContent = "Abbiamo ricevuto il tuo messaggio, ti contatteremo al più presto!";
    newP.id = "messaggio";
    invio.parentNode.replaceChildren(newP);

}

let invio = document.getElementById("pulsante");
invio.addEventListener("click", form, false);