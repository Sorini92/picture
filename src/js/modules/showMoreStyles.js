const showMoreStyles = () => {
    const btn = document.querySelector('.button-styles'),
          styles = document.querySelectorAll('.styles-block');

    btn.addEventListener('click', () => {
        styles.forEach((item) => {
            item.parentElement.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.parentElement.classList.add('animate__animated', 'animate__fadeIn','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });

};

export default showMoreStyles;