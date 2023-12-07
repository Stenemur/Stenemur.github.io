import './style.css'
import 'flowbite';

const expertise = document.querySelector('#expertise');
const experience = document.querySelector('#experience');
const qualifications = document.querySelector('#qualifications');
const qualificationsionList = document.querySelector('#qualifications-list');
const experienceList = document.querySelector('#experience-list');
const expertiseList = document.querySelector('#expertise-list');
const scrollButton = document.getElementById("scroll-button");
const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLink = document.querySelector('a[href="#contact"]');

expertise.addEventListener('click', (event) => {
  event.preventDefault();
  expertiseList.classList.toggle('hidden');
  if (!expertiseList.classList.contains('hidden')) {
    experienceList.classList.add('hidden');
    qualificationsionList.classList.add('hidden');
  }
});

experience.addEventListener('click', (event) => {
  event.preventDefault();
  experienceList.classList.toggle('hidden');
  if (!experienceList.classList.contains('hidden')) {
    expertiseList.classList.add('hidden');
    qualificationsionList.classList.add('hidden');
  }
});

qualifications.addEventListener('click', (event) => {
  event.preventDefault();
  qualificationsionList.classList.toggle('hidden');
  if (!qualificationsionList.classList.contains('hidden')) {
    expertiseList.classList.add('hidden');
    experienceList.classList.add('hidden');
  }
});

// When you use navbar, you get scrolled to the right place
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    navbarScroll('#home');
  });
  
  aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    navbarScroll('#about');
  });
  
  projectsLink.addEventListener('click', (event) => {
    event.preventDefault();
    navbarScroll('#projects');
  });
  
  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    navbarScroll('#contact');
  });

// When the user clicks on the button, scroll to the top of the page
scrollButton.addEventListener('click', scrollToTopFunction);

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () {
  showButtonOnScroll();
};

function showButtonOnScroll() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTopFunction() {
  const scrollStep = -window.scrollY / (500 / 15); // Scrolling speed

  const scrollInterval = setInterval(() => {
    const scrollTop = window.scrollY;

    if (scrollTop <= 0) {
      clearInterval(scrollInterval);
    }

    window.scrollTo(0, scrollTop + scrollStep);
  }, 15); // Scroll interval 
}

//scroll smoothly to the specific target element on the page from the navbar.
function navbarScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    } }