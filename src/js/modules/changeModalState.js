const changeModalState = (state) => {
    const picSize = document.querySelectorAll('#size'),
          picMaterial = document.querySelectorAll('#material'),
          picOptions = document.querySelectorAll('#options'),
          picTotal = document.querySelectorAll('.calc-price');

    
    function bindActionToElems(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                    case 'DIV' :
                        state[prop] = item;
                        break;
                }   
                console.log(state);
            });
        });
    }

    bindActionToElems('change', picSize, 'size');
    bindActionToElems('change', picMaterial, 'material');
    bindActionToElems('change', picOptions, 'extra');
    bindActionToElems('change', picTotal, 'total');
};

export default changeModalState;