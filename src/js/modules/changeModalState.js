const changeModalState = (state) => {
    const picSize = document.querySelectorAll('#size'),
          picMaterial = document.querySelectorAll('#material'),
          picOptions = document.querySelectorAll('#options');

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
                }
                console.log(state);
            });
        });
    }
    
    bindActionToElems('change', picSize, 'size');
    bindActionToElems('change', picMaterial, 'material');
    bindActionToElems('change', picOptions, 'extra');
};

export default changeModalState;