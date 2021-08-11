import {getResource} from "../services/requests";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберете размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    getResource('assets/db.json')
            .then(res => {
                createSizes(res.options);
                createMaterials(res.options);
            })
            .catch(error => console.log(error));

    function createSizes (response) {
        console.log(response);
        response.forEach(({size, sizeValue}) => {
            let option = document.createElement('option');
            option.setAttribute('value', sizeValue);
            option.innerHTML = `${size}`;

            sizeBlock.appendChild(option);
        });
    }

    function createMaterials (response) {
        console.log(response);
        response.forEach(({material, materialValue, materialTitle}) => {
            let option = document.createElement('option');
            option.setAttribute('value', materialValue);
            option.setAttribute('title', materialTitle);
            option.innerHTML = `${material}`;

            materialBlock.appendChild(option);
        });
    }

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;