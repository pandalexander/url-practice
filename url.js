const url = require("node:url");

const myUrl = new URL("https://myexample.com");

myUrl.pathname = "/a/path/name";

// console.log(myUrl.href);

const newUrl = new URL("/print/me", "https://secondexample.com");

console.log(newUrl.href);
