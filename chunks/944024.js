"use strict";
var t = Math.ceil,
    n = Math.floor;
e.exports =
    Math.trunc ||
    function (e) {
        var i = +e;
        return (i > 0 ? n : t)(i);
    };
