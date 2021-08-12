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
                        let index = item.selectedIndex;
                        if (item.selectedIndex == 0) {
                            state[prop] = "";
                        } else {
                            state[prop] = item[index].textContent;
                        }
                        break;
                }
                console.log(picTotal[0].value);
            });
        });
    }

    bindActionToElems('change', picSize, 'size');
    bindActionToElems('change', picMaterial, 'material');
    bindActionToElems('change', picOptions, 'extra');
    bindActionToElems('change', picTotal, 'total');
};

export default changeModalState;