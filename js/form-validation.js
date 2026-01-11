// ============================================
// FORM VALIDATION - SRI SHAKTI ERECTORS
// Contact form validation and submission
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {

        // ============================================
        // VALIDATION RULES
        // ============================================
        const validationRules = {
            name: {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z\s]+$/,
                errorMessages: {
                    required: 'Name is required',
                    minLength: 'Name must be at least 2 characters',
                    pattern: 'Name can only contain letters and spaces'
                }
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                errorMessages: {
                    required: 'Email is required',
                    pattern: 'Please enter a valid email address'
                }
            },
            phone: {
                required: true,
                pattern: /^[0-9]{10}$/,
                errorMessages: {
                    required: 'Phone number is required',
                    pattern: 'Please enter a valid 10-digit phone number'
                }
            },
            company: {
                required: false,
                minLength: 2,
                errorMessages: {
                    minLength: 'Company name must be at least 2 characters'
                }
            },
            message: {
                required: true,
                minLength: 10,
                errorMessages: {
                    required: 'Message is required',
                    minLength: 'Message must be at least 10 characters'
                }
            }
        };

        // ============================================
        // VALIDATION FUNCTIONS
        // ============================================

        function validateField(field) {
            const fieldName = field.getAttribute('name');
            const fieldValue = field.value.trim();
            const rules = validationRules[fieldName];

            if (!rules) return true;

            const formGroup = field.closest('.form-group');
            const errorElement = formGroup.querySelector('.form-error');

            // Clear previous errors
            formGroup.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }

            // Required validation
            if (rules.required && !fieldValue) {
                showError(formGroup, errorElement, rules.errorMessages.required);
                return false;
            }

            // Skip other validations if field is empty and not required
            if (!fieldValue && !rules.required) {
                return true;
            }

            // Min length validation
            if (rules.minLength && fieldValue.length < rules.minLength) {
                showError(formGroup, errorElement, rules.errorMessages.minLength);
                return false;
            }

            // Pattern validation
            if (rules.pattern && !rules.pattern.test(fieldValue)) {
                showError(formGroup, errorElement, rules.errorMessages.pattern);
                return false;
            }

            return true;
        }

        function showError(formGroup, errorElement, message) {
            formGroup.classList.add('error');
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        function validateForm() {
            let isValid = true;
            const fields = contactForm.querySelectorAll('input, textarea, select');

            fields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        // ============================================
        // REAL-TIME VALIDATION
        // ============================================

        const formFields = contactForm.querySelectorAll('input, textarea, select');

        formFields.forEach(field => {
            // Validate on blur
            field.addEventListener('blur', function () {
                validateField(this);
            });

            // Clear error on input
            field.addEventListener('input', function () {
                const formGroup = this.closest('.form-group');
                if (formGroup.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // ============================================
        // FORM SUBMISSION
        // ============================================

        contactForm.addEventListener('submit', function (e) {
            // Validate all fields before submission
            if (!validateForm()) {
                e.preventDefault();

                // Scroll to first error
                const firstError = contactForm.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // If validation passes, let Netlify handle the submission
            // The form will submit naturally with method="POST" netlify attribute
            // Netlify will show a success page and store the submission

            // Optional: Show loading state (form will redirect after submission)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Form will submit to Netlify automatically
            // No e.preventDefault() here - let it submit naturally
        });

        // ============================================
        // SUCCESS/ERROR MESSAGES
        // ============================================

        function showSuccessMessage() {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'form-message success';
            messageDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
      `;

            showMessage(messageDiv);
        }

        function showErrorMessage(message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'form-message error';
            messageDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <span>${message}</span>
      `;

            showMessage(messageDiv);
        }

        function showMessage(messageDiv) {
            // Remove any existing messages
            const existingMessage = document.querySelector('.form-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            // Insert message after form
            contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Remove message after 5 seconds
            setTimeout(() => {
                messageDiv.style.opacity = '0';
                setTimeout(() => messageDiv.remove(), 300);
            }, 5000);
        }

    }

});

// ============================================
// FORM MESSAGE STYLES (injected dynamically)
// ============================================
const formMessageStyles = `
  .form-message {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    transition: opacity 0.3s ease;
  }
  
  .form-message.success {
    background-color: #E8F5E9;
    color: #2E7D32;
    border: 2px solid #4CAF50;
  }
  
  .form-message.error {
    background-color: #FFEBEE;
    color: #C62828;
    border: 2px solid #F44336;
  }
  
  .form-message svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = formMessageStyles;
document.head.appendChild(styleSheet);
