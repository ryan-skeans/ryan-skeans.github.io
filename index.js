import countapi from './node_modules/countapi-js/lib/index';

let picture = document.getElementById('profile-desktop');

setTimeout(function () {
  picture.classList.add('profile-desktop');
}, 200);

countapi.visits().then((result) => {
  console.log(result.value);
});
