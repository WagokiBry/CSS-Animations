const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop');
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
  modalDiv.classList.toggle('close')
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);