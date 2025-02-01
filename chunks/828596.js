var i = n(882708),
    r = n(821819),
    a = n(668530).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !r(function () {
        var e = Symbol('symbol detection');
        return !a(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && i && i < 41);
    });
