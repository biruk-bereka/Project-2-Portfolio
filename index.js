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

const projectSection = document.querySelector('.second-section');
const projectCardsContainer = document.createElement('div');


projectCardsContainer.classList.add('project-cards-container');
projectSection.append(projectCardsContainer);

const projectCards = [
  {
    closePopup: './Icons/Enabled.png',
    name: 'Multi Post Stories',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['css','html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 1',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 2',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 3',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 4',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 5',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

  {
    closePopup: './Icons/Enabled.png',
    name: 'Profesional Art Printing Data 6',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: ['See Project', 'See Live', 'See Source'],
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
    target: '_blank',
    icon: ['./Icons/Icon-Export.png', './Icons/Group.png'],
  },

];

// creating cards
for (let i = 0; i < projectCards.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('project-card', 'card-1');

  const projectName = document.createElement('h2');
  projectName.append(projectCards[i].name);

  projectName.className = 'project-title';
  const projectDiscription = document.createElement('p');
  projectDiscription.append(projectCards[i].discription);
  projectDiscription.classList.add('project-discription');

  const projectTechnologies = document.createElement('ul');
  projectTechnologies.className = 'technologies';

  for (let j = 0; j < projectCards[i].technologies.length; j += 1) {
    const technologyList = document.createElement('li');
    technologyList.append(projectCards[i].technologies[j]);
    projectTechnologies.append(technologyList);
  }

  const seeProject = document.createElement('button');
  seeProject.append(projectCards[i].buttonName[0]);
  seeProject.className = 'button';

  card.append(projectName, projectDiscription, projectTechnologies, seeProject);
  projectCardsContainer.append(card);
}
// end of creating card

const seeProjectButton = document.querySelectorAll('.button');

function displayPopup(m) {
  
  const sectionPopup = document.createElement('section');
  sectionPopup.className = 'default';
  document.body.appendChild(sectionPopup);

  const popupHeader = document.createElement('div');
  popupHeader.className = 'popup-header';
  const popupTitle = document.createElement('div');
  popupTitle.className = 'title-style';
  popupTitle.append(projectCards[m].name);
  const popupClose = document.createElement('img');
  popupClose.className = 'close-icon';
  popupClose.src = projectCards[m].closePopup;
  popupHeader.append(popupTitle, popupClose);

  const popupTechnologies = document.createElement('ul');
  popupTechnologies.className = 'technologies';
  popupTechnologies.setAttribute('id', 'projectTech');

  for (let j = 0; j < projectCards[m].technologies.length; j += 1) {
    const technologyList = document.createElement('li');
    technologyList.append(projectCards[0].technologies[j]);
    popupTechnologies.append(technologyList);
  }

  const popupDiscription = document.createElement('div');
  popupDiscription.className = 'popup-image';
  const popupImage = document.createElement('img');
  popupImage.className = 'popup-image';
  popupImage.src = projectCards[m].image;
  const popupInformation = document.createElement('div');
  popupInformation.className = 'popup-information';
  const projectDiscription = document.createElement('div');
  projectDiscription.setAttribute('id', 'projectDiscription');
  let projectContent = document.createElement('p');
  projectContent = projectCards[m].discription;
  projectDiscription.append(projectContent);
  const buttonInformation = document.createElement('div');
  buttonInformation.setAttribute('id', 'infoButton');
  const liveLink = document.createElement('a');
  liveLink.href = projectCards[m].seeLiveLink;
  liveLink.target = projectCards[m].target;
  const buttonLive = document.createElement('button');
  buttonLive.classList.add('button', 'popupButton');
  buttonLive.textContent = projectCards[m].buttonName[1];
  const liveIcon = document.createElement('img');
  liveIcon.src = projectCards[m].icon[0];
  liveIcon.className = 'icon-info';
  buttonLive.append(liveIcon);
  liveLink.append(buttonLive);
  const sourceLink = document.createElement('a');
  sourceLink.href = projectCards[m].sourceLink;
  sourceLink.target = projectCards[m].target;
  const buttonSource = document.createElement('button');
  buttonSource.classList.add('button', 'popupButton');
  buttonSource.textContent = projectCards[m].buttonName[2];
  const sourceIcon = document.createElement('img');
  sourceIcon.src = projectCards[m].icon[1];
  sourceIcon.className = 'icon-info';
  buttonSource.append(sourceIcon);
  sourceLink.append(buttonSource);
  buttonInformation.append(liveLink, sourceLink);
  popupInformation.append(projectDiscription, buttonInformation);
  popupDiscription.append(popupImage, popupInformation);

  sectionPopup.append(popupHeader, popupTechnologies, popupDiscription);
  sectionPopup.classList.toggle('popup');

  popupClose.addEventListener('click', () => {
    sectionPopup.classList.toggle('popup');
  });
}

for (let i = 0; i < seeProjectButton.length; i += 1) {
  seeProjectButton[i].addEventListener('click', () => {
    displayPopup(i - 1);
  });
}
