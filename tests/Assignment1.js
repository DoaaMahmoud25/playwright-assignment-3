"use strict";
const browsers = ["chrome", "firefox", "safari"];
for (const browser of browsers) {
    console.log(`Run smoke test in ${browser}`);
}
for (let index = 0; index < browsers.length; index++) {
    console.log(index, browsers[index]);
}
console.log(browsers[browsers.length - 1]);
