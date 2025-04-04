var e = n(306983),
    o = n(779688),
    i = n(424353).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
        var t = Symbol('symbol detection');
        return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && e && e < 41);
    });
