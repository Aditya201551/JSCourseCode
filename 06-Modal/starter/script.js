let open = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//to open the modal window
for (let i = 0; i < open.length; i++) open[i].addEventListener('click', show);

//to close the modal window
overlay.addEventListener('click', close);
document.querySelector('.close-modal').addEventListener('click', close);
document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') close();
  else console.log('Another key pressed');
});

function show() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}

function close() {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}
