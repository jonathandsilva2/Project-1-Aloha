var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options
});
const input = document.querySelector('#text-input');
const button = document.querySelector('#click-button');

button.addEventListener('click', function (event) {
  if (input.value.includes('@')) {
    alert('Thank you for subscribing');
  } else {
    alert('Please enter a valid email address.');
  }
});
