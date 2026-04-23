"use strict";
var r = n(123166),
    i = n(503628),
    s = n(860511).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
        var e = Symbol("symbol detection");
        return !s(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
