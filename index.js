const images = document.querySelectorAll('.carousel--image');
const controls = document.querySelectorAll('.controls');

const aside = document.querySelector('.aside');

const burgerBtn = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.header__close');


    burgerBtn.addEventListener('click', function() {
       aside.classList.toggle('aside');
       console.log('click')
       burgerBtn.innerHTML = 'X';
 });
burgerBtn.addEventListener('click', function() {
    aside.classList.contains('aside');
    console.log("close")
    burgerBtn.innerHTML = burgerBtn;
});
    





let imageIndex = 0;
function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
  
}
function startSlider() {
    intervalId = setInterval(() => {
        let index = imageIndex + 1;
        if (index >= images.length) {
            index = 0;
        }
        show(index);
    }, 10000); // 5 секунд
}

controls.forEach((event) => {
    event.addEventListener('click', (event) => {
        if (event.target.classList.contains("bi-chevron-compact-left")) {
            let index = imageIndex -1;

            if (index < 0) {
                index = images.length -1;
            }

            show(index);
        } else if (event.target.classList.contains('bi-chevron-compact-right'))
         {
let index = imageIndex + 1;
if (index >= images.length) {
    index = 0;
}
show(index);
        }
    })
})

show(imageIndex);

startSlider();

