function form(){
    let inputNome = document.getElementById("nome-azienda").value;
    let inputEmail = document.getElementById("email-aziendale").value;


    let stampa = "";

    if(inputNome.trim() === ""){
        alert("*ERROR*/// inserisci il nome dell'azienda!");
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

    var newP = document.createElement("p");
    newP.textContent = "La richiesta è stata inviata con successo";
    newP.id = "messaggio";
    invio.parentNode.replaceChildren(newP);

}

let invio = document.getElementById("pulsante");
invio.addEventListener("click", form, false);