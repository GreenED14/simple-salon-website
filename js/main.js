document.addEventListener('DOMContentLoaded', function() {
    // Active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Booking form handling
    const bookingForm = document.getElementById('booking-form');
    const formMessage = document.getElementById('form-message');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (!name || !email || !phone || !service || !date || !time) {
                showMessage('Vänligen fyll i alla obligatoriska fält.', 'error');
                return;
            }

            // Simulate form submission
            setTimeout(() => {
                showMessage('Tack för din bokningsförfrågan! Vi återkommer till dig inom kort för att bekräfta din tid.', 'success');
                bookingForm.reset();
            }, 1000);
        });
    }

    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
        }
    }
});