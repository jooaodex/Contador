function contar(){
    let entrada = document.getElementById('entrada').value;
    let res = document.getElementById('res')
    let contador = 0;

    if(entrada < 0){
        res.innerHTML = 'Valor negativo, tente novamente.'
    }else{
        res.innerText = `Contando de 0 até ${entrada} 

        `
        
        while(contador <= entrada){
            res.innerHTML += `${contador} `
            contador++
        } 
    }
}