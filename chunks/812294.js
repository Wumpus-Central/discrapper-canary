var r = n(123166),
    i = n(503628),
    a = n(860511).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
        var e = Symbol("symbol detection");
        return !a(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
