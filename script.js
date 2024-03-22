function form(){
    let inputNome = document.getElementById("nome").value;
    let inputCognome = document.getElementById("cognome").value;
    let inputEmail = document.getElementById("email").value;
    let checkPrivacy = document.getElementById("privacy").checked;

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

    if(checkPrivacy == false){
        alert("*ERROR*/// devi accettare l'informativa sulla privacy!");
        return;
    }

    if(checkPrivacy == false){
        alert("*ERROR*/// devi accettare l'informativa sulla privacy!");
        return;
    }

    var newP = document.createElement("p");
    newP.textContent = "Lettera di richiamo inviata con successo";
    newP.id = "messaggio";
    invio.parentNode.replaceChildren(newP);
}

let invio = document.getElementById("pulsante");
invio.addEventListener("click", form, false);