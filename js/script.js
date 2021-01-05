'use strict';

let numberOfFilms;

// Запрашиваем у пользователя, сколько фильмов он просмотрел. Если введенное пользователем не является числом, либо пользователь нажал "Отмена", либо поле для ввода осталось пустым - задаем вопрос повторно
function start() {
    numberOfFilms = +prompt(`Сколько фильмов Вы уже посмотрели?`);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько фильмов Вы уже посмотрели?`);
    }
}

// Вызываем функцию start
start();

// Вводим объект для хранения данных, введенных пользователем
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Через цикл запрашиваем у пользователя о двух последних просмотренных фильмах
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Один из последних просмотренных фильмов?`, ''),
              b = prompt(`На сколько Вы оцените его?`, '');
    
        // Проверяем, что пользователь не нажимал кнопку "Отмена", ответил на все вопросы и длину введенных пользователем названий фильмов. Если условия выполняются, данные записываются. Если хотя бы одно условие не выполняется - производится возвращение на шаг назад      
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

// В зависимости от количества просмотренных фильмов (введенного пользователем) выводится соответствующее сообщение
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// Предлагаем пользователю ввести 3 его любимых жанра и записываем в соответствующий массив
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// Если свойство privat = false, выводим информацию из основного объекта
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
