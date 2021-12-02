let picture = document.getElementById('profile-desktop');

setTimeout(function () {
  picture.classList.add('profile-desktop');
}, 200);

function liveViews(response) {
  console.log(response.value);
}
