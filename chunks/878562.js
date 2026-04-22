"use strict";
var r = n(428427);
e.exports = function () {
    return String.prototype.trim && "​" === "​".trim() && "᠎" === "᠎".trim() && "_᠎" === "_᠎".trim() && "᠎_" === "᠎_".trim()
        ? String.prototype.trim
        : r;
};
