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
    name: 'Profesional Art Printing Data 1',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
  },

  {
    name: 'Profesional Art Printing Data 2',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
  },

  {
    name: 'Profesional Art Printing Data 3',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
  },

  {
    name: 'Profesional Art Printing Data 4',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
  },

  {
    name: 'Profesional Art Printing Data 5',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
  },

  {
    name: 'Profesional Art Printing Data 6',
    discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/background-image.png',
    buttonName: 'See Project',
    liveVersionLink: 'https://biruk-bereka.github.io/Project-2-Portfolio/',
    sourceLink: 'https://github.com/biruk-bereka/Project-2-Portfolio',
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
  seeProject.append(projectCards[i].buttonName);
  seeProject.className = 'button';

  card.append(projectName, projectDiscription, projectTechnologies, seeProject);
  projectCardsContainer.append(card);
}

// creating popup

// function displayPopup(){
//   projectCardsContainer.classList.toggle('popup');
//   window.location.reload();
// }

//  const seeProjectButton = document.querySelectorAll('.button');

//  seeProjectButton.addEventListener('click', ()=> {
//    for(let i=0; i<seeProjectButton.length; i+=1){
//      seeProjectButton[i]
//    }
//  })
