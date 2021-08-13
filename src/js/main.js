import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';
import changeImages from './modules/changeImages';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};
    
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(modalState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    changeModalState(modalState);
    changeImages('assets/img/sizes-1-1.png', 'assets/img/sizes-1.png');
    //changeImages('.size-2','assets/img/sizes-2-2.png', 'assets/img/sizes-2.png');
    //changeImages('.size-3','assets/img/sizes-3-3.png', 'assets/img/sizes-3.png');
    //changeImages('.size-4','assets/img/sizes-4-4.png', 'assets/img/sizes-4.png');
});