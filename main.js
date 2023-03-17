import './style.css'
import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const buttonLogin = document.querySelector('.login__button');
const loginScreen = document.querySelector('.loginScreen');
const greyScreen = document.querySelector('.greyScreen');
const form = document.querySelector('.form');

buttonLogin.onclick = () => {
  loginScreen.style.visibility = "visible";
  greyScreen.style.visibility = "visible";
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

greyScreen.onclick = () => {
  loginScreen.style.visibility = "hidden";
  greyScreen.style.visibility = "hidden";
  fout.style.visibility = "hidden";
  form.reset();
  document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

const buttonLoginConfirm = document.querySelector('.loginScreen__loginConfirm');
const fout = document.querySelector('.loginScreen--Tekst');

buttonLoginConfirm.onclick = () => {
  if (fout.style.visibility = "hidden"){
  fout.style.visibility = "visible";
  }
}


const hamNav = document.getElementsByClassName('hamNav');
const hamButton = document.querySelector('.hamCont');
const menu = document.getElementsByClassName('sidebar__bar__tekst');

//(sorry voor dit gedrogt)
hamButton.onclick = () =>{
  if (menu[0].style.display === "none"){
    hamNav[0].style.transform = "scale(1.1)";
    hamNav[1].style.transform = "scale(1.1)";
    hamNav[2].style.transform = "scale(1.1)";
    menu[0].style.display = "block";
    menu[1].style.display = "block";
    menu[2].style.display = "block";
    menu[3].style.display = "block";
  } else if(menu[0].style.display = "block"){
    hamNav[0].style.transform = "scale(1.0)";
    hamNav[1].style.transform = "scale(1.0)";
    hamNav[2].style.transform = "scale(1.0)";
    menu[0].style.display = "none";
    menu[1].style.display = "none";
    menu[2].style.display = "none";
    menu[3].style.display = "none";
  }
}

//const accesToken = 'pk.eyJ1IjoiYXB5YW5uaWNrIiwiYSI6ImNsZW1udHMzdTBiN2ozc21xeHNoOWRmN2EifQ.l4PorYBjX7EXhhPpRhj6dQ';



function location() {
    setTimeout(() => {
      getAddressFromCoordinates();
    }, 2800);
}

function error(){
  document.getElementById('address').textContent = "error: can't fetch data";
  document.getElementById('address').style.color = "rgb(198, 66, 66)";
}

 const getAddressFromCoordinates = async () =>{
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/4.5138331623733166,51.29360659645906.json?access_token=pk.eyJ1IjoiYXB5YW5uaWNrIiwiYSI6ImNsZW1udHMzdTBiN2ozc21xeHNoOWRmN2EifQ.l4PorYBjX7EXhhPpRhj6dQ`);
    const data = await response.json();
    try{
      const address = data.features[0].place_name;
      document.getElementById('address').textContent = address;
      document.getElementById('address').style.animation = 'none';
    } catch(err){
      error();
    }
}

location();





