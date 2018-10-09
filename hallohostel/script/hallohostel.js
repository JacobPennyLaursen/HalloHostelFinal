document.getElementById('button').addEventListener('click',
function() {
  document.querySelector('.info').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.info').style.display = 'none';
});
