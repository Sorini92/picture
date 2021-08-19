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
            resultBlock.setAttribute('value',"0");
        } else if (promocodeBlock.value === "IWANTPOPART") {
            let discount = 0.7;
            let sumWithDiscount = Math.round(sum * discount);
            resultBlock.textContent = sumWithDiscount;
            resultBlock.setAttribute('value',sumWithDiscount);
        } else {
            resultBlock.textContent = sum;
            resultBlock.setAttribute('value',sum);
        }
    };

    getResource('assets/db.json')
            .then(res => {
                createSizes(res.options);
                createMaterials(res.options);
                createOptions(res.options);
            })
            .catch(error => console.log(error));

    function createSizes (response) {
        response.forEach(({size, sizeValue}) => {
            let option = document.createElement('option');
            option.setAttribute('value', sizeValue);
            option.innerHTML = `${size}`;

            if (size === undefined || size == "" || size === null) {
                option.remove();
            } else {
                sizeBlock.appendChild(option);
            }
        });
    }

    function createMaterials (response) {
        response.forEach(({material, materialValue, materialTitle}) => {
            let option = document.createElement('option');
            option.setAttribute('value', materialValue);
            option.setAttribute('title', materialTitle);
            option.innerHTML = `${material}`;

            if (material === undefined || material == "" || material === null) {
                option.remove();
            } else {
                materialBlock.appendChild(option);
            }
        });
    }

    function createOptions (response) {
        response.forEach(({extra, extraValue}) => {
            let option = document.createElement('option');
            option.setAttribute('value', extraValue);
            option.innerHTML = `${extra}`;

            if (extra === undefined || extra == "" || extra === null) {
                option.remove();
            } else {
                optionsBlock.appendChild(option);
            }
        });
    }

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;