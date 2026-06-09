document.addEventListener('DOMContentLoaded', function() {
    // Находим предмет на сцене и первый слот инвентаря
    const letterObj = document.getElementById('obj-letter');
    const slot0 = document.querySelector('[data-slot="0"]');

    // Если предмет существует, вешаем на него клик
    if (letterObj) {
        letterObj.addEventListener('click', function() {
            console.log("Клик по письму!");
            
            // 1. Прячем предмет со сцены
            letterObj.style.display = 'none';
            
            // 2. Рисуем иконку в первом слоте инвентаря (пока просто белый квадрат)
            slot0.innerHTML = '<div style="width: 80px; height: 60px; background: white; border-radius: 5px;"></div>';
        });
    }
});