'use strickt';


let nummberOfFilms;
function start() {
    nummberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
    while (nummberOfFilms == '' || nummberOfFilms == null || isNaN(nummberOfFilms)) {
        nummberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
    
    }
    return nummberOfFilms;
}
start()
 
const PersonalMovieDB= {
    'count': nummberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};



function ShowMyDB(hidden) {
    let check = PersonalMovieDB['privat'];
    
    if (check === false) {
        console.log(PersonalMovieDB);
    }

}

ShowMyDB(PersonalMovieDB)
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        let nummberOfFilms1 = prompt('Один из последних просмотренных фильмов', '');
        let nummberOfFilms2 = prompt('Насколько оцените', '');
        if (nummberOfFilms1 != '' && nummberOfFilms2 != '' && nummberOfFilms2 != null && nummberOfFilms1 != null && nummberOfFilms1.length <51) {
            PersonalMovieDB['movies'][nummberOfFilms1]= nummberOfFilms2;
                
             }
        else {
            i--;
        
    }
    } 
}
rememberMyFilms();


function detectPersonalLevl(){
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


}
detectPersonalLevl()




function writeYourJenres(){
    for (let i = 0; i <=2; i++) {
        let answer = prompt(`Ващ любимый жанр под номером ${i+1}`);
        PersonalMovieDB['genres'][i] = answer;
    }
}
writeYourJenres(PersonalMovieDB['genres']);

