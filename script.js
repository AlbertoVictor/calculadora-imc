const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');
const elemento = document.getElementById('body');


const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau 3!';
    if(imc > 35) return 'Obesidade grau 2!';
    if(imc > 30) return 'Obesidade grau 1!';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc >= 18.5) return 'Peso ideal';
    if(imc < 5) return 'Morreu!!!!';
    if(imc < 15) return 'Desnutrido!';
    if(imc < 18.5) return 'Abaixo do peso';
}

const imcCalc = () => {
    const valorImc = (+peso.value / (+altura.value * +altura.value).toFixed(1));
    resultado.textContent = `${nome.value} - ${getText(valorImc)} IMC - ${valorImc.toFixed(1)}`;
    if(!altura.value || !peso.value || !nome.value){
        resultado.innerHTML = 'Preencha todos os dados'
    }
    if(valorImc > 18.5){     
        elemento.style.background = 'linear-gradient(90deg, rgb(5, 192, 36), rgb(0, 255, 85), rgb(0, 255, 255))';
        elemento.style.backgroundSize = '180% 180%';
        elemento.style.animation = 'gradient-animation 5s ease infinite';
        button.style.background = 'rgb(0, 255, 98)';
    }
    if(valorImc > 25){     
        elemento.style.background = 'linear-gradient(90deg, rgb(149, 91, 0),rgb(255, 175, 54) , rgb(149, 93, 0))';
        elemento.style.backgroundSize = '180% 180%';
        elemento.style.animation = 'gradient-animation 3s ease infinite';
        button.style.background = 'orange';
    }
    if(valorImc > 30){     
        elemento.style.background = 'linear-gradient(90deg, rgb(100, 0, 0),rgb(153, 0, 0) , rgb(255, 0, 0))';
        elemento.style.backgroundSize = '180% 180%';
        elemento.style.animation = 'gradient-animation 2s ease infinite';
        button.style.background = 'red';
    }
    if(valorImc < 18.5){     
        elemento.style.background = 'linear-gradient(90deg, rgb(189, 91, 0),rgb(255, 175, 54) , rgb(255, 153, 0))';
        elemento.style.backgroundSize = '180% 180%';
        elemento.style.animation = 'gradient-animation 3s ease infinite';
        button.style.background = 'orange';
    }
    if(valorImc < 15){     
        elemento.style.background = 'linear-gradient(90deg, rgb(100, 0, 0),rgb(153, 0, 0) , rgb(255, 0, 0))';
        elemento.style.backgroundSize = '180% 180%';
        elemento.style.animation = 'gradient-animation 2s ease infinite';
        button.style.background = 'red';
    }
}
button.addEventListener('click', imcCalc);