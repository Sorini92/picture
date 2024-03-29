import {postData} from '../services/requests'; 

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input', 'textarea'),
          upload = document.querySelectorAll('[name="upload"]'),
          textAreas = document.querySelectorAll('textarea');

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

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
        textAreas.forEach(item => {
            item.value = '';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
           //console.log(item.files[0]); //вывод 1 файла
           let dots;
           const arr = item.files[0].name.split('.');
           arr[0].length > 6 ? dots = "..." : dots = '.';
           const name = arr[0].substring(0, 6) + dots + arr[1];
           item.previousElementSibling.textContent = name;
        });
    });

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
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            for (let key in state) {
                formData.append(key, state[key]);
            }

            postData(api, formData)
            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            })
            .catch(() => {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
            })
            .finally(()  => {
                clearInputs();
                for (const prop of Object.getOwnPropertyNames(state)) {
                    delete state[prop];
                }
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('animate__fadeOutUp');
                    item.classList.add('animate__fadeInUp');
                }, 10000);
            });
        });
    });
};

export default forms;