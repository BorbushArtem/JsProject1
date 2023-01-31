const nummberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
 
const PersonalMovieDB= {
    'count': nummberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

nummberOfFilms1 = prompt('Один из последних просмотренных фильмов', '');
nummberOfFilms2 = prompt('Насколько оцените', '');
nummberOfFilms3 = prompt('Один из последних просмотренных фильмов', '');
nummberOfFilms4 = prompt('Насколько оцените', '');
const movies= {};
movies[nummberOfFilms1]= nummberOfFilms2;
movies[nummberOfFilms3]= nummberOfFilms4;
console.log(PersonalMovieDB)
console.log(movies)
