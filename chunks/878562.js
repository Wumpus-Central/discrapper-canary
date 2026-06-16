"use strict";
var i = n(428427);
e.exports = function () {
    return String.prototype.trim &&
        "\u200B" === "\u200B".trim() &&
        "\u180E" === "\u180E".trim() &&
        "_\u180E" === "_\u180E".trim() &&
        "\u180E_" === "\u180E_".trim()
        ? String.prototype.trim
        : i;
};
