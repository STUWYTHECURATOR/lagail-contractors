document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbTitle = document.getElementById('lbTitle');
    const lbDesc = document.getElementById('lbDesc');
    const lbClose = document.getElementById('lbClose');
    if (lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                lbImg.src = img.src;
                lbTitle.textContent = item.getAttribute('data-title');
                lbDesc.textContent = item.getAttribute('data-desc');
                lightbox.classList.add('open');
            });
        });
        lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    }

    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    const serviceSelect = document.getElementById('serviceSelect');
    if (serviceParam && serviceSelect) { serviceSelect.value = serviceParam; }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cName').value.trim();
            const email = document.getElementById('cEmail').value.trim();
            const phone = document.getElementById('cPhone').value.trim();
            const service = document.getElementById('serviceSelect').value;
            const message = document.getElementById('cMessage').value.trim();
            const whatsappNumber = '260977576244';
            const text = `Hello Lagail Contractors,%0A%0A*New Website Enquiry*%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Details:* ${encodeURIComponent(message)}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
            document.getElementById('formFeedback').style.display = 'block';
            contactForm.reset();
        });
    }
});
