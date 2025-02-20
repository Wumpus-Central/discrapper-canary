var r = n(882708),
    i = n(821819),
    o = n(668530).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
        var e = Symbol('symbol detection');
        return !o(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
