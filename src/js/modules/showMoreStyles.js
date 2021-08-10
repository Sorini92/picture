const showMoreStyles = (button, selector) => {
    const btn = document.querySelector(button),
          styles = document.querySelectorAll(selector);

    btn.addEventListener('click', () => {
        styles.forEach((item) => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('animate__animated', 'animate__fadeIn','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });

};

export default showMoreStyles;