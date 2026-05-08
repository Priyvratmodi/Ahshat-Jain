// Interactive Cyberpunk Effects

document.addEventListener('DOMContentLoaded', () => {
    // Glitch effect on scroll
    const heroTitle = document.querySelector('.hero-title');
    
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll < 500) {
            heroTitle.style.transform = `translateY(${scroll * 0.1}px)`;
            
            // Random glitch intensity
            if (Math.random() > 0.95) {
                heroTitle.style.textShadow = `
                    ${Math.random() * 10}px 0 #ff00ea,
                    ${Math.random() * -10}px 0 #00f2ff
                `;
            } else {
                heroTitle.style.textShadow = 'none';
            }
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Console message
    console.log("%c AKSHAT.EXE SYSTEM INITIALIZED ", "background: #00f2ff; color: #000; font-weight: bold; padding: 5px;");
    console.log("%c [STATUS] Class 8th Intelligence Protocol: ACTIVE", "color: #00f2ff;");
    console.log("%c [STATUS] Marvel Lore Database: SYNCED", "color: #ff00ea;");
    console.log("%c [STATUS] Creative Synthesis Module: ONLINE", "color: #f3ea5f;");
});
