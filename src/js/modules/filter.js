const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animate__animated', 'animate__fadeIn');
        });
        
        no.style.display = 'none';
        no.classList.remove('animate__animated', 'animate__fadeIn');

        if (wrapper.querySelectorAll(markType).length > 0) {
            console.log(wrapper.querySelectorAll(markType));
            wrapper.querySelectorAll(markType).forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animate__animated', 'animate__fadeIn');
            });
        } else {
            console.log(wrapper.querySelectorAll(markType));
            no.style.display = 'block';
            no.classList.add('animate__animated', 'animate__fadeIn');
        }
    };

    function menuButtons (btn, mark) {
        menu.querySelector(btn).addEventListener('click', () => {
            typeFilter(mark);
        });
    }

    menuButtons('.all', '.all');
    menuButtons('.lovers', '.lovers');
    menuButtons('.chef', '.chef');
    menuButtons('.girl', '.girl');
    menuButtons('.guy', '.guy');
    menuButtons('.grandmother');
    menuButtons('.granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;