function form(){
    let inputNome = document.getElementById("nome").value;
    let inputCognome = document.getElementById("cognome").value;
    let inputEmail = document.getElementById("email").value;
    let inputOggetto = document.getElementById("oggetto").value;
    let inputLettera = document.getElementById("lettera").value;

    let stampa = "";

    if(inputNome.trim() === ""){
        alert("*ERROR*/// inserisci un nome!");
        return;
    }

    if(inputCognome.trim() === ""){
        alert("*ERROR*/// inserisci un cognome!");
        return;
    }

    if(inputEmail.trim() === ""){
        alert("*ERROR*/// inserisci un'email!");
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

    if(inputOggetto.trim() === ""){
        alert("*ERROR*/// inserisci un oggetto!");
        return;
    }

    if(inputLettera.trim() === ""){
        alert("*ERROR*/// inserisci un testo!");
        return;
    }

    var newP = document.createElement("p");
    newP.textContent = "La lettera di richiamo è stata inviata con successo al dipendente";
    newP.id = "messaggio";
    invio.parentNode.replaceChildren(newP);
}

let invio = document.getElementById("pulsante");
invio.addEventListener("click", form, false);