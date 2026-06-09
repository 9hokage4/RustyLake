// Получаем ссылки на все экраны
const views = document.querySelectorAll('.view');
let currentViewIndex = 0;

// Функция показа конкретного экрана
function showView(index) {
    // Убираем класс active у всех
    views.forEach(view => view.classList.remove('active'));
    // Добавляем active нужному
    views[index].classList.add('active');
}

// Повернуть направо
function turnRight() {
    currentViewIndex++;
    if (currentViewIndex >= views.length) {
        currentViewIndex = 0; // Зацикливаем
    }
    showView(currentViewIndex);
}

// Повернуть налево
function turnLeft() {
    currentViewIndex--;
    if (currentViewIndex < 0) {
        currentViewIndex = views.length - 1; // Зацикливаем
    }
    showView(currentViewIndex);
}

// Привязываем события к стрелкам
document.getElementById('arrow-left').addEventListener('click', turnLeft);
document.getElementById('arrow-right').addEventListener('click', turnRight);

// Показываем первый экран при запуске
showView(0);