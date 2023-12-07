import './style.css'
import 'flowbite';

const expertise = document.querySelector('#expertise');
const experience = document.querySelector('#experience');
const qualifications = document.querySelector('#qualifications');
const qualificationsionList = document.querySelector('#qualifications-list');
const experienceList = document.querySelector('#experience-list');
const expertiseList = document.querySelector('#expertise-list');

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
