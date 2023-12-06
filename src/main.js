import './style.css'
import 'flowbite';

const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const education = document.querySelector('#education');
const educationList = document.querySelector('#education-list');
const experienceList = document.querySelector('#experience-list');
const skillsList = document.querySelector('#skills-list');

skills.addEventListener('click', (event) => {
  event.preventDefault();
  skillsList.classList.toggle('hidden');
  if (!skillsList.classList.contains('hidden')) {
    experienceList.classList.add('hidden');
    educationList.classList.add('hidden');
  }
});

experience.addEventListener('click', (event) => {
  event.preventDefault();
  experienceList.classList.toggle('hidden');
  if (!experienceList.classList.contains('hidden')) {
    skillsList.classList.add('hidden');
    educationList.classList.add('hidden');
  }
});

education.addEventListener('click', (event) => {
  event.preventDefault();
  educationList.classList.toggle('hidden');
  if (!educationList.classList.contains('hidden')) {
    skillsList.classList.add('hidden');
    experienceList.classList.add('hidden');
  }
});
