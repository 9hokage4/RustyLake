document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на все экраны
    const views = document.querySelectorAll('.view');
    let currentViewIndex = 0;

    // Функция показа конкретного экрана
    function showView(index) {
        views.forEach(view => view.classList.remove('active'));
        views[index].classList.add('active');
    }

    // Повернуть направо
    function turnRight() {
        currentViewIndex++;
        if (currentViewIndex >= views.length) {
            currentViewIndex = 0;
        }
        showView(currentViewIndex);
    }

    // Повернуть налево
    function turnLeft() {
        currentViewIndex--;
        if (currentViewIndex < 0) {
            currentViewIndex = views.length - 1;
        }
        showView(currentViewIndex);
    }

    // Привязываем события к стрелкам
    document.getElementById('arrow-left').addEventListener('click', turnLeft);
    document.getElementById('arrow-right').addEventListener('click', turnRight);

    // Показываем первый экран при запуске
    showView(0);
});