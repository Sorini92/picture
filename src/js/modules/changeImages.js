const changeImages = (imgSelector, src, defaultSrc) => {
    const blocks = document.querySelectorAll('.sizes-block');
    
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            const p = block.querySelectorAll('p'),
                  img = block.querySelectorAll(imgSelector);
            
            img.forEach(item => {
                item.setAttribute('src', src);
            });

            p.forEach((item, i) => {
                if (i === 3) {
                    item.style.visibility = '';
                } 
                item.style.visibility = 'hidden';
            });
        });

        block.addEventListener('mouseout', () => {
            const p = block.querySelectorAll('p'),
                  img = block.querySelectorAll(imgSelector);
            
            img.forEach(item => {
                item.setAttribute('src', defaultSrc);
            });

            p.forEach(item => {
                item.style.visibility = '';
            });
        });
    });
};

export default changeImages;