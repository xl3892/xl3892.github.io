let day= new Date().getDay();
console.log('Day:' + day);

if (day==0){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Red';
} else if (day==1){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Orange';
} else if (day==2){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Yellow';
} else if (day==3){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Green';
} else if (day==4){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Blue';
} else if (day==5){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Purple';
} else if (day==6){
	const background=document.querySelector('Body')
	background.style.backgroundColor='Pink';
} else{
	const background=document.querySelector('Body')
	background.style.backgroundColor='White';
}

let images = document.querySelectorAll('main > a > img');

function changeOpacity() {
  images[0].style.opacity = '0.5';
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  images[3].style.opacity = '0.5';
  images[4].style.opacity = '0.5';
  this.style.opacity = '1'; 
}
function resetOpacity() {
  images[0].style.opacity = '1'; 
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
  images[4].style.opacity = '1';
}

images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);
images[3].addEventListener('mouseover', changeOpacity);
images[4].addEventListener('mouseover', changeOpacity);

images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);
images[3].addEventListener('mouseout', resetOpacity);
images[4].addEventListener('mouseout', resetOpacity);