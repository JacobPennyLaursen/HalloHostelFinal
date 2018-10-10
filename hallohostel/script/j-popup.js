/*var join = document.getElementsByClassName('j-icon')*/

Array.from(join).forEach(addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'flex';
}));


document.getElementById('j-close').addEventListener('click',
function() {
  document.getElementsByClassName('j-popup').style.display = 'none';
});
