// Story 1 //

var args = process.argv;

if (args[2] !== "-action") {
    return console.log("[ERROR] - Premier argument doit toujours être \"-action\".");
}


// Story 2 //

const fs = require('fs')

let fichier = fs.readFileSync('movies.json')
let movie = JSON.parse(fichier)

let start = new Date().getTime();

for (i = 0; i < movie.length; i++) {
    let date = new Date(movie[i].release_date * 1000);
    let Year = date.getFullYear();
    movie[i].title = movie[i].title + " " + "(" + Year + ")";
}

fs.writeFile('./movies.out.json', JSON.stringify(movie, null, 2), (err) => {
    console.log("Transfert des donnés succesfull !")
    if (err) throw err;
});


// Story 3 //

let stop = new Date().getTime();

console.log("Timing : " + (stop - start) + "ms");
