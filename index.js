let x = document.querySelector(".loading-text");
let bg = document.querySelector(".container");
let info = document.querySelector(".info-icon");

info.addEventListener("click", redirect);

let load = 0;
let y = 100;

timeout = setInterval(blurring, 30);

function blurring() {
    if(load === 99)
    {
      clearTimeout(timeout);
    }
    load++;
    x.innerHTML = load + '%';
    x.style.opacity = (100 - load)/100;
    y = 100 - load;
    console.log('blur('+y+'px)');
    bg.style.filter = 'blur('+y/6+'px)';
}

function redirect(){
  location.href = "https://github.com/bradtraversy/50projects50days";
}
