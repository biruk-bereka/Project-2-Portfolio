const menuIcon = document.querySelector('#menu');
const menuItem = document.querySelector('#list-items');

menuIcon.addEventListener('click', () => {
  const menuList = document.getElementById('list-items');
  const listItems = document.getElementsByClassName('menu-item');

  document.getElementById('menu').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.querySelector('.header').style.display = 'block';
  document.getElementById('menu-list').style.display = 'block';
  document.getElementById('mail-icon').style.display = 'none';

  menuList.classList.add('list-item');
  listItems.classList.add('menu-item-style');
});

menuItem.addEventListener('click', () => {
  menuItem.style.display = 'none';
  document.getElementById('menu').style.display = 'flex';
  document.getElementById('logo').style.display = 'flex';
  window.location.reload();
});

// Popup window 

const seeProjectButton = document.querySelectorAll('.button');
const projectCard = document.querySelectorAll('.project-card');

for(let i=0; i<seeProjectButton.length; i++){
    seeProjectButton[i].addEventListener('click', () => {
    displayProjectCard(i); 
});
}


function displayProjectCard(i){
  // const card = document.getElementById(`project-${i}`);
  const projectTitle = projectCard[i].children[0];
  console.log(projectTitle);

  const project = [{
    closePopup: './images/popup-cancel.png',
    projectTitle: `${projectTitle.innerHTML}`,
  }];
  
  const htmlMarkup = `
  <img class="close-icon" src=${project[0].closePopup}>
  <br>
  ${project[0].projectTitle}
  `;
 
  const section = document.createElement('section');
  section.className = 'default';
  document.body.appendChild(section);
  section.innerHTML = htmlMarkup;

  const closeIcon = document.querySelector('.close-icon');

  function display() {
    section.classList.toggle('popup');
    window.location.reload();
  };
  
  closeIcon.addEventListener('click', display) 
    section.classList.toggle('popup');
  
  
}


