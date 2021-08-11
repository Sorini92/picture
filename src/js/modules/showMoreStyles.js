import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    /* btn.addEventListener('click', () => {
        cards.forEach((item) => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('animate__animated', 'animate__fadeIn','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    }); */
    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => {
                const err = document.createElement('div');
                err.innerHTML = `Произошла ошибка: ${error.message}, попробуйте позже`;
                err.style.cssText = `
                    text-align: center;
                    color: red;
                    font-size: 20px;
                    border: 2px solid red;
                    width: 500px;
                    margin: 0 auto 20px auto;
                `;
                document.querySelector('#styles .container').appendChild(err);
            });

        this.remove();    
    });

    function createCards (response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animate__animated', 'animate__fadeIn','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');


            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;