var e = n(882708),
    o = n(821819),
    i = n(668530).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
        var t = Symbol('symbol detection');
        return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && e && e < 41);
    });
