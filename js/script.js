'use strict';

const numberOfFilms = prompt(`Сколько фильмов Вы уже посмотрели?`, "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

document.write(personalMovieDB["count"]);