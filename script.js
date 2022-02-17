var i = 0;
var images = [];
var time = 3000;

images[0] = 'slide1.png';
images[1] = 'slide2.png';
images[2] = 'slide3.png';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

var color = ["#EEE8AA", "#FFFFFF", "#D2691E", 'orange', 'powderblue']
var i = 0;

document.querySelector(".btn1").addEventListener("click", function(){
  i = i < color.length ? i++ : 0;
  document.querySelector("body").style.background = color[i]
})

function changeSize(obj, size){
  obj.style.fontSize = size;
};

window.addEventListener('scroll', reveal);

  function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

document.getElementById("btn2").addEventListener("click", function() {
  alert("Sorry, this feature will be available later");
});

function changeColorDarkGreen(obj) {
  if (obj.style.color == 'red') {
  obj.style.color = 'darkgreen';
  }
  else {
  obj.style.color = 'red';
  }
}