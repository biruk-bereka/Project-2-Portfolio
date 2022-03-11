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

  const projectSection = document.querySelector(".second-section");
  const projectCardsContainer = document.createElement('div');
  
  projectCardsContainer.classList.add('project-cards-container');
  projectSection.append(projectCardsContainer);
  
  function displayProjectCards(i) {
       
    const projectCards= [
      {
         name: "Profesional Art Printing Data",
         discription: "A daily selection of privately personalized reads; no account or sign-ups required. has been the industry's standard ",
         technologies: ["html", "Bootstrap", "Ruby on rails"], 
         buttonName: "See Project",
         liveVersionLink: "https://biruk-bereka.github.io/Project-2-Portfolio/",
         sourceLink: "https://github.com/biruk-bereka/Project-2-Portfolio"        
      }
    ]
    
 
    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    projectCardsContainer.append(card);
    card.append(h2);

    
  }
   
  displayProjectCards(0);
// Popup window end
