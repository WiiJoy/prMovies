'use strict';

const numberOfFilms = prompt(`Сколько фильмов Вы уже посмотрели?`, "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt(`Один из последних просмотренных фильмов?`, "Название фильма"),
      b = prompt(`На сколько Вы оцените его?`, "Оценка от 0 до 10"),
      c = prompt(`Один из последних просмотренных фильмов?`, "Название фильма"),
      d = prompt(`На сколько Вы оцените его?`, "Оценка от 0 до 10");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
      
console.log(personalMovieDB);