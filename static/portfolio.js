{
  /* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>; */
}

//  Setup and start animation!
// var typed = new Typed('#element', {
// strings: ['Web Developer.', '&amp; Video Editor.','Web Developer.', '&amp; Video Editor.','Web Developer.', '&amp; Video Editor.'],
// typeSpeed: 80,
// });

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  var options = {
    strings: ["Web Developer.", " Video Editor.",'AI learner'],
    typeSpeed: 120,
    loop: true,
  };

  var typed = new Typed("#element", options);
});
// Ensure the function is defined in the global scope
function dark() {
  const darkMode = document.getElementById('imgIcon');
  document.body.classList.toggle('DarkTheme');
  console.log('Dark theme toggled');
  if (document.body.classList.contains('DarkTheme')) {
    console.log('Switching to day mode icon');
    darkMode.src = 'img/day-mode.png';
  } else {
    console.log('Switching to sleep mode icon');
    darkMode.src = 'img/sleep-mode.png';
  }
}

// Ensure the DOM is fully loaded before running any script
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

