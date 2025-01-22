var i = r(882708),
    a = r(821819),
    o = r(668530).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !a(function () {
        var e = Symbol('symbol detection');
        return !o(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && i && i < 41);
    });
