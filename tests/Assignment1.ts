const browsers : string[] = [ "chrome", "firefox" , "safari" , "edge"];

for (const browser of browsers){
   
    console.log(`Run smoke test in ${browser}`);

console.log(browsers[2]);
}

for (let index = 0; index < browsers.length; index++){
    console.log(index, browsers[index]);
}

console.log(browsers[browsers.length - 1]);


