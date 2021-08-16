const changeImages = (imgSelector, src, defaultSrc) => {
    const blocks = document.querySelectorAll('.sizes-block');
    
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            const p = block.querySelectorAll('.size, .starting-price, .final-price'),
                  img = block.querySelectorAll(imgSelector);
            
            img.forEach(item => item.setAttribute('src', src));

            p.forEach(item => item.style.visibility = 'hidden');
        });

        block.addEventListener('mouseout', () => {
            const p = block.querySelectorAll('.size, .starting-price, .final-price'),
                  img = block.querySelectorAll(imgSelector);
            
            img.forEach(item => item.setAttribute('src', defaultSrc));

            p.forEach(item => item.style.visibility = '');
        });
    });
};

export default changeImages;

/* сonst changeImages = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        // something.png => something-1.png
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        // something-1.png => something.png
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default changeImages; */