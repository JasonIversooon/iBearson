import { populateServices } from './about.js';
import { populateProjects } from './projects.js';
import { populateCertificates } from './certificates.js';
import { populateExperience } from './experience.js';
import { initContactForm, initContactItems } from './contact.js';
import { initTabs } from './tabs.js';
import { initFadeIns } from './fadeIn.js';

function init(){
  populateServices();
  populateProjects();
  populateCertificates();
  populateExperience();
  initContactForm();
  initContactItems();
  initTabs();
  initFadeIns();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
