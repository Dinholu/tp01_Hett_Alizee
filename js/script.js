console.log('Hello World!')

// verifier que l'input name est bien correctement rempli

function onSubmit(){
    let name = document.getElementById('name').value;
    let regex = /^[a-zA-Z]+$/;
    if(!regex.test(name)){
        alert('Le nom ne doit contenir que des lettres');
        return false;
    }
    if(name.length < 3){
        alert('Le nom doit contenir au moins 3 caractères');
        return false;
    }
    return true;
}