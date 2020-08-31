location.hash = 'main';

function slide() {
  location.hash = 'main';
  window.scrollTo(0, 720);
}

function thankyou(){
  document.getElementById('feedback').innerHTML = "Thank you for giving feedback!"
}

function changeName(){
  let button = document.getElementById('button-name');
  let x = document.getElementById('your-name');
  document.getElementById('hello').innerHTML = "Hello, " + x.value + "!";
  button.remove();
  x.remove();
}
