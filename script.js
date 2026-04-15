const hearts = document.querySelectorAll('.heart-button');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {

        this.classList.toggle('is-active');

        if (this.classList.contains('fa-regular')) {
            this.classList.replace('fa-regular', 'fa-solid');
        } else {
            this.classList.replace('fa-solid', 'fa-regular');
        }
    });
});