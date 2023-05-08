import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleDeckForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
}

window.addEventListener("load", function() {
  document.querySelector("#deck-checker-form").addEventListener("submit", handleDeckForm);
});
