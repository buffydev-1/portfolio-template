document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic Validation
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            const formGroup = input.parentElement;
            const errorDisplay = formGroup.querySelector('.form-error');
            
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                formGroup.classList.add('error');
                if (errorDisplay) errorDisplay.textContent = 'This field is required';
            } else if (input.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
                isValid = false;
                formGroup.classList.add('error');
                if (errorDisplay) errorDisplay.textContent = 'Please enter a valid email';
            } else {
                formGroup.classList.remove('error');
            }
        });

        if (isValid) {
            // Simulate API call
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                successMessage.classList.add('fade-in', 'visible');
            }, 1500);
        }
    });

    // Real-time validation removal
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.parentElement;
            if (formGroup.classList.contains('error')) {
                formGroup.classList.remove('error');
            }
        });
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
