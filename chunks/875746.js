"use strict";
var n = e(738538),
    o = e(486816),
    s = e(308227).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
        var t = Symbol("symbol detection");
        return !s(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && n && n < 41);
    });
