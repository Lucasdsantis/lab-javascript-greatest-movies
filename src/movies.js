// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map( onlyDirectors => onlyDirectors.director);
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter ( movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return newArray.length;

    
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
 if(moviesArray.length){
    const nArray = moviesArray.map((movie)=> movie.score)
    const averageScore = nArray.reduce((acumulador,score) => acumulador + score,0) /nArray.length   
    //const averageScore= nArray.filter((average) =>  average.score / (average.score).length)
        return Number(averageScore.toFixed(2))  
 }else{
    return 0
 }
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const filterArray= moviesArray.filter((currentyMovie) => currentyMovie.genre.includes("Drama"))
    if(!filterArray.length){
        return 0
    }
    const averageSCore2 =  filterArray.reduce((acc, nArray) => acc + nArray.score, 0) /filterArray.length
    return Number(averageSCore2.toFixed(2)) 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayMap = moviesArray.map((currentyMovie) => currentyMovie)
    const newArray = arrayMap.sort((a,b)=>{
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
     return newArray
        
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayMap = moviesArray.map((currentyMovie) => currentyMovie.title)
       const nArray = arrayMap.sort() 
        return nArray.slice(0,20)
   }
    


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null;
      }
    
      const yearlyRates = {};
      const yearlyAverages = {};
    
      moviesArray.map(function (movie) {
        if (!yearlyRates.hasOwnProperty(movie.year)) {
          yearlyRates[movie.year] = [];
          yearlyRates[movie.year].push(movie.score);
        } else {
          yearlyRates[movie.year].push(movie.score);
        }
      });
    
      console.log(yearlyRates);
    
      const allYears = Object.keys(yearlyRates);
      console.log(allYears);
    
      allYears.map(function (year) {
        
        let avg = yearlyRates[year].reduce(function (
          acc,
          rate,
          index,
          sourceArray
        ) {
          if (index === sourceArray.length - 1) {
            acc += rate;
    
            return acc / sourceArray.length;
          }
    
          return acc + rate;
        });
    
        yearlyAverages[year] = avg;
      });
    
      console.log(yearlyAverages);
    
      const orderedAverages = Object.entries(yearlyAverages).sort(function (a, b) {
        return b[1] - a[1];
      });
    
      console.log(orderedAverages);
    
      return `The best year was ${orderedAverages[0][0]} with an average score of ${orderedAverages[0][1]}`;
}





