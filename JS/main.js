var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options

});
const input = document.querySelector("#LOL")
const button = document.querySelector("#LOL2");

button.addEventListener("click", function(event) {
 
  console.log(input.value)
  if (input.value.includes("@")){
    alert("Thank you for signing up!")
    
  } else {
   alert("Please enter a valid email address or atleast the @ symbol")
   
}});