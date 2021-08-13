const changeImages = (src, defaultSrc) => {
    const blocks = document.querySelectorAll('.sizes-block');
    
    blocks.forEach(block => {
        console.log(block);
        block.addEventListener('mouseover', () => {
            const pSize = document.querySelector('.size'),
                    pPrice = document.querySelector('.starting-price'),
                    pFinal = document.querySelector('.final-price'),
                    img = document.querySelector('.size-1');
            
                    img.setAttribute('src', src);
                    pSize.style.visibility = 'hidden';
                    pPrice.style.visibility = 'hidden';
                    pFinal.style.visibility = 'hidden'; 
        });
        block.addEventListener('mouseout', () => {
            const pSize = document.querySelector('.size'),
                    pPrice = document.querySelector('.starting-price'),
                    pFinal = document.querySelector('.final-price'),
                    img = document.querySelector('.size-1');
        
            img.setAttribute('src', defaultSrc);
            pSize.style.visibility = '';
            pPrice.style.visibility = '';
            pFinal.style.visibility = '';
        });
    });
};

export default changeImages;