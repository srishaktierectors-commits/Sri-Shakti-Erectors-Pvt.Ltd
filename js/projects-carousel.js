// ============================================
// PROJECT CAROUSEL NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('projects-prev');
    const nextBtn = document.getElementById('projects-next');
    const pageIndicator = document.getElementById('projects-page-indicator');

    if (projectCards.length > 0 && prevBtn && nextBtn) {
        const projectsPerPage = 6;
        const totalPages = Math.ceil(projectCards.length / projectsPerPage);
        let currentPage = 1;

        // Function to show projects for current page
        const showProjectsPage = (page) => {
            const startIndex = (page - 1) * projectsPerPage;
            const endIndex = startIndex + projectsPerPage;

            projectCards.forEach((card, index) => {
                if (index >= startIndex && index < endIndex) {
                    card.style.display = '';
                    // Add fade-in animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, (index - startIndex) * 50);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });

            // Update page indicator
            if (pageIndicator) {
                pageIndicator.textContent = `${page} / ${totalPages}`;
            }

            // Update button states
            prevBtn.disabled = page === 1;
            nextBtn.disabled = page === totalPages;

            // Update button opacity based on state
            prevBtn.style.opacity = page === 1 ? '0.3' : '1';
            nextBtn.style.opacity = page === totalPages ? '0.3' : '1';
            prevBtn.style.cursor = page === 1 ? 'not-allowed' : 'pointer';
            nextBtn.style.cursor = page === totalPages ? 'not-allowed' : 'pointer';
        };

        // Previous button click handler
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showProjectsPage(currentPage);
                // Scroll to projects section
                document.getElementById('projects-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Next button click handler
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showProjectsPage(currentPage);
                // Scroll to projects section
                document.getElementById('projects-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Initialize first page
        showProjectsPage(currentPage);
    }
});
