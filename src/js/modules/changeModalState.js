const changeModalState = (state) => {
    const picSize = document.querySelectorAll('#size'),
          picMaterial = document.querySelectorAll('#material'),
          picOptions = document.querySelectorAll('#options'),
          picPromo = document.querySelectorAll('.promocode');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SELECT' :
                        let index = item.selectedIndex;
                        if (item.selectedIndex !== 0) {
                            state.total = document.querySelector('.calc-price').getAttribute('value');
                            state[prop] = item[index].textContent;
                        } else {
                            state.total = document.querySelector('.calc-price').getAttribute('value');
                            state[prop] = "";
                        }
                        break;
                    case 'INPUT': 
                        if (item.value === "IWANTPOPART") {
                            state[prop] = true;
                        } else {
                            state[prop] = false;
                        }
                    break;
                }
                console.log(state);
            });
        });
    }
    
    bindActionToElems('change', picSize, 'size');
    bindActionToElems('change', picMaterial, 'material');
    bindActionToElems('change', picOptions, 'options');
    bindActionToElems('input', picPromo, 'promocode');
};

export default changeModalState;