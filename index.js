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
const windowSize = window.matchMedia('(min-width: 992px)');

function displayProjectCard(i) {
  let projectTitle = projectCard[i].children[0];
  const projectTechnologies = projectCard[1].children[3];

  if (i === 0) {
    projectTitle = document.querySelector('#project-title-1');
  }

  const project = [{
    closePopup: './Icons/Enabled.png',
    title: `${projectTitle.innerHTML}`,
    technologies: `${projectTechnologies.innerHTML}`,
    popupImage: './images/popup-image.png',
    description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a 
                      type specimen book. It has survived not only five centuries, but also the leap 
                      into electronic typesetting, remaining essent</p>`,

  }];

  if (windowSize.matches) {
    project[0].closePopup = './Icons/Disabled.png';
    project[0].popupImage = './images/desktop-popup-image.png';
    project[0].title = '<h1>Keeping track of hundreds of components website</h1>';
  }

  const htmlMarkup = `
     <div class="popup-header"> 
      <div class="title-style">${project[0].title}</div> 
      <img class="close-icon" src=${project[0].closePopup}>
     </div>
    <div id="projectTech" class="technologies">${project[0].technologies}</div> 
    <div class="popup-discription"> 
    <img class="popup-image" src= ${project[0].popupImage}>
    <div class="popup-information">
    <div id="projectDiscription">${project[0].description}</div>
    <div id="infoButton">
    <button class="button popupButton"> See Live<img class="icon-info" src="./Icons/Icon-Export.png"></button>
    <button class="button popupButton"> See Live<img class="icon-info" src="./Icons/Group.png"></button>
    </div>
    <div>
    </div>
    
  `;

  const section = document.createElement('section');
  section.className = 'default';
  document.body.appendChild(section);
  section.innerHTML = htmlMarkup;

  const closeIcon = document.querySelector('.close-icon');

  function display() {
    section.classList.toggle('popup');
    window.location.reload();
  }

  closeIcon.addEventListener('click', display);
  section.classList.toggle('popup');
}

for (let i = 0; i < seeProjectButton.length; i += 1) {
  seeProjectButton[i].addEventListener('click', () => {
    if (i === 6) { displayProjectCard(i - 1); } else { displayProjectCard(i); }
  });
}