'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

let lastBtn = null;

function openModal(event) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  lastBtn = event.target;
  modal.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  if (lastBtn) {
    lastBtn.focus();
  }
}

for (let i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// basic accessibility
modal.setAttribute('role', 'dialog');
modal.setAttribute('aria-modal', 'true');
closeBtn.setAttribute('aria-label', 'Close modal');
