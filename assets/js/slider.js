const slider = document.getElementById('slider');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        let currentIndex = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        // Auto-slide every 3 seconds
        setInterval(showNextSlide, 5000);