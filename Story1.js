var args = process.argv;

if (args[2] !== "-action") {
    return console.log("[ERROR] - Premier argument doit toujours être \"-action\".");
}

console.time(("start"))

console.timeEnd(("start"))