"use strict";
var i = n(123166),
    r = n(503628),
    s = n(860511).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !r(function () {
        var e = Symbol("symbol detection");
        return !s(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && i && i < 41);
    });
