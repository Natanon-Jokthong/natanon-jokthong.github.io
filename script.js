// navbar scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the corresponding nav link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};