document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                const submenu = this.querySelector('.submenu');
                if (submenu) {
                    e.preventDefault();
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});
