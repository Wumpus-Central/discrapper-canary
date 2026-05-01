var n = e(123166),
    o = e(503628),
    i = e(860511).String;
r.exports =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
        var r = Symbol("symbol detection");
        return !i(r) || !(Object(r) instanceof Symbol) || (!Symbol.sham && n && n < 41);
    });
