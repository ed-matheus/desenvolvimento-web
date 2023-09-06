// Elementos selecionados
const heightElement = document.querySelector('#altura');
const weightElement = document.querySelector('#peso');
const submit = document.querySelector('#submit');

const imcResult = document.querySelector('#IMC h1');
const idealWeightElement = document.querySelector('#idealWeight h1');
const imcInfo = document.querySelector('#imcInfo');
const genderMale = document.querySelector('#man')
const genderFem = document.querySelector('#woman')

// Envia os dados preenchidos
const submitData = () => {
    const height = heightElement.value;
    const weight = weightElement.value;

    const result = calc(weight, height)
    const info = condition(result);
    const idealWeight = idealWeightCalc(height)

    showInfo(result, info, idealWeight)
}

// Calcula o IMC (Índice de Massa Corporal)
const calc = (weight, height) => {
    const newHeight = height/100
    const imc = weight / (newHeight**2)
    
    return imc
}

// Mostra as informações na tela
const showInfo = (result, info, idealWeightInfo) => {
    imcInfo.innerText = info
    imcResult.innerText = `${result.toFixed(1)} kg/m²`
    idealWeightElement.innerText = idealWeightInfo
}

// Condição de IMC
const condition = result => {

    if(result < 18.5) {
        info = 'Abaixo do Peso'
    } else if(result >= 18.5 && result <= 24.9) {
        info = 'Peso normal'
    } else if(result > 24.9 && result <= 30) {
        info = 'Acima do Peso'
    } else {
        info = 'Obesidade'
    }

    return info

}

// Calcula o peso ideal de acordo com a altura(cm)
const idealWeightCalc = height => {

    if(height >= 152 && height <= 155) {
        idealWeightInfo = "44 a 58kg";

    } else if(height >= 156 && height <= 160) {
        idealWeightInfo = "47 a 61kg";

    } else if(height >= 161 && height <= 165) {
        idealWeightInfo = "50 a 65kg";

    } else if(height >= 166 && height <= 170) {
        idealWeightInfo = "54 a 69kg";

    } else if(height >= 171 && height <= 175) {
        idealWeightInfo = "57 a 74kg";

    } else if(height >= 176 && height <= 180) {
        idealWeightInfo = "60 a 78kg";

    } else if(height >= 181 && height <= 185) {
        idealWeightInfo = "64 a 83kg";

    } else if(height >= 186 && height <= 190) {
        idealWeightInfo = "67 a 87kg";

    } else {
        idealWeightInfo = "71 a 89kg";
    }

    return idealWeightInfo

}

// Eventos dos botões de gênero
genderMale.addEventListener("click", (e) => {
    e.preventDefault()

    genderFem.setAttribute("style", "box-shadow: none; background-color: #cccccc;")
    genderMale.removeAttribute("style")
})

genderFem.addEventListener("click", (e) => {
    e.preventDefault()

    genderMale.setAttribute("style", "box-shadow: none; background-color: #cccccc;")
    genderFem.removeAttribute("style")
})