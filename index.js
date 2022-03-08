const menuIcon = document.querySelector('#menu');

menuIcon.addEventListener('click', () => {
    const menuList = document.getElementById('list-items');
    document.getElementById('menu').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.querySelector('.header').style.display = 'block';
    document.getElementById('menu-list').style.display = 'block';
    document.getElementById('mail-icon').style.display = 'none';
    menuList.classList.add('list-item');
});