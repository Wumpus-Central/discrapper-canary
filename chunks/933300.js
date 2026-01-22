var r = n(741623),
    i = n(680135),
    a = n(227106),
    s = n(732937);
e.exports = function (e, t, n) {
    if (!a(e)) throw new r("Assertion failed: Type(O) is not Object");
    if (!s(t)) throw new r("Assertion failed: P is not a Property Key");
    if (!i(e, t, n)) throw new r("unable to create data property");
};
