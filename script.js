function romanToInt(){
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let roman = document.querySelector('#roman').value.toUpperCase();
    let number = 0;
    for(let i = 0; i < roman.length; i++){
        let current = roman[i];
        let next = roman[i+1];

        if (next && romanNumbers[next] > romanNumbers[current]){
            number -= romanNumbers[current];
        }
        else{
            number += romanNumbers[current];
        }
    }
    if(isNaN(number)){
        document.querySelector('.result').innerHTML = 'Inválido!';
    }
    else{
        document.querySelector('.result').innerHTML = number;
    }
}