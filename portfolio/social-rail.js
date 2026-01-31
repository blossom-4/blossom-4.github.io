const socialRail = document.querySelector('.social-rail');
let lastScrollY = 0;

if (window.innerWidth <= 768) {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Check if user has scrolled past the fold (reduced threshold)
        if (currentScrollY > windowHeight * 0.2) {
            // Move to bottom
            socialRail.style.top = 'auto';
            socialRail.style.bottom = '0';
        } else {
            // Keep at top
            socialRail.style.top = '0';
            socialRail.style.bottom = 'auto';
        }
        
        lastScrollY = currentScrollY;
    });
}
