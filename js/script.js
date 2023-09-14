console.log('Hello World!')

// verifier que l'input name est bien correctement rempli

function onSubmit(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z]+$/;
    let regexForEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!regex.test(name)){
        alert('Le nom ne doit contenir que des lettres');
        return false;
    }

    if(!regexForEmail.test(email)){
        alert('L\'email n\'est pas valide');
        return false;
    }
    if(name.length < 3){
        alert('Le nom doit contenir au moins 3 caractères');
        return false;
    }
    return true;
}