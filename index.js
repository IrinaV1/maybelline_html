const images = document.querySelectorAll('.carousel--image');
const controls = document.querySelectorAll('.controls');

const aside = document.querySelector('.aside');

const burgerBtn = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.header__close_menu');
const burgerMenu = document.querySelector('.header__burger_menu');

/*burgerBtn.addEventListener('click', function() {
    // Переключаем класс для бокового меню для его открытия и закрытия
    aside.classList.toggle('aside');
    
    // Переключаем изображение бургер-меню
    if (aside.classList.contains('aside')) {
        burgerBtn.src = 'images/close.png'; // Изображение для закрытия
    } else {
        burgerBtn.src = 'images/burger.png'; // Изображение для открытия
    }
});

// Добавляем обработчик события для кнопки закрытия меню
closeBtn.addEventListener('click', function() {
    // Закрываем боковое меню
    aside.classList.remove('aside');

    // Возвращаем изображение бургер-меню
    burgerBtn.src = 'images/burger.png'; // Изображение для открытия
});*/

   /* burgerBtn.addEventListener('click', function() {
       aside.classList.toggle('aside');
       console.log('click')
       burgerMenu.toggle('close') ;

       
 });
burgerBtn.addEventListener('click', function() {
    aside.classList.contains('aside');
    console.log("close")
    closeMenu.classList.toggle('header__burger_menu');

}); */  
burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
    aside.classList.toggle('aside');
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

