"use strict";
const browsers = ["chrome", "firefox", "safari"];
for (const browser of browsers) {
    if (browser === "safari") {
        console.log(browser);
    }
}
for (let i = 0; i < browsers.length; i++) {
    if (browsers.length - 1 === i) {
        console.log(browsers[i]);
    }
}
console.log("safari");
console.log(browsers[browsers.length - 1]);
