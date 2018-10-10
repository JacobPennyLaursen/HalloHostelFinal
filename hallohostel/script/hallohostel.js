
/*questionmark button*/
document.getElementById('q-button').addEventListener('click',
function() {
  document.querySelector('.info').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.info').style.display = 'none';
});

/* event 1 join button*/
document.querySelector('.j-icon1').addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'flex';
});

document.querySelector('.j-close').addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'none';
});

/* event 2 join button*/
document.querySelector('.j-icon2').addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'flex';
});

document.querySelector('.j-close').addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'none';
});


/* event 1 participants button*/
document.querySelector('.p-icon1').addEventListener('click',
function() {
  document.querySelector('.p-popup').style.display = 'flex';
});

document.querySelector('.p-close').addEventListener('click',
function() {
  document.querySelector('.p-popup').style.display = 'none';
});

/* event 2 participants button*/
document.querySelector('.p-icon2').addEventListener('click',
function() {
  document.querySelector('.p-popup').style.display = 'flex';
});

document.querySelector('.p-close').addEventListener('click',
function() {
  document.querySelector('.p-popup').style.display = 'none';
});


/*var join = document.getElementsByClassName('j-icon')

console.log(join)

Array.from(join).addEventListener('click',
function() {
  document.querySelector('.j-popup').style.display = 'flex';
})

document.getElementsByClassName('j-icon').addEventListener('click',
function() {
  document.getElementsByClassName('j-popup').style.display = 'flex'
})

document.getElementById('j-close').addEventListener('click',
function() {
  document.getElementsByClassName('j-popup').style.display = 'none';
});*/
