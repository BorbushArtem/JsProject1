const nummberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
 
const PersonalMovieDB= {
    'count': nummberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};
const movies= {};


for (let i = 0; i < 2; i++) {
    let nummberOfFilms1 = prompt('Один из последних просмотренных фильмов', '');
    let nummberOfFilms2 = prompt('Насколько оцените', '');
    if (nummberOfFilms1 != '' && nummberOfFilms2 != '' && nummberOfFilms2 != null && nummberOfFilms1 != null && nummberOfFilms1.length <51) {
            movies[nummberOfFilms1]= nummberOfFilms2;
            
         }
    else {
        i--;
    
}
}

if (PersonalMovieDB['count'] < 10) {
    console.log('Просмотрено довольно мало фильмов');
}
else if (10 < PersonalMovieDB['count'] && PersonalMovieDB['count'] < 30) {
    console.log('Вы класический зритель');
}
else if (PersonalMovieDB['count'] > 30) {
    console.log('Вы киноман');
}
else {
    console.log('Ошибка');
}
console.log(PersonalMovieDB)
console.log(movies)




