// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter the project items
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                    // Add a small delay and then fadeIn for a smooth animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    // Add a delay before hiding the element
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Add animation on scroll
    const animateOnScroll = function() {
        const projectItems = document.querySelectorAll('.project-item');

        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3; // Adjust this value as needed

            if (itemPosition < screenPosition) {
                item.classList.add('fade-in');
            }
        });
    };

    // Initial call to animate on load
    animateOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});