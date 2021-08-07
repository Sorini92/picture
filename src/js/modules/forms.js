//import checkNumInputs from './checkNumInputs';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    //checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/ok.png',
        ok: 'assets/img/spinner.gif',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const closeModalAfterSending = (selector, time) => {
        setTimeout(() => closeModal(selector), time);
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animate__animated', 'animate__fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animate__animated', 'animate__fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(statusImg);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') ? api = path.designer : api = path.question;


            postData(api, formData)
            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(()  => {
                clearInputs();
                for (const prop of Object.getOwnPropertyNames(state)) {
                    delete state[prop];
                }
                setTimeout(() => {
                    statusMessage.remove();
                }, 10000);
            });
        });
    });
};

export default forms;