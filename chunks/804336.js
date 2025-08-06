var r = n(745872)('%Symbol.species%', !0),
    i = n(815329),
    o = n(637255),
    a = n(452716),
    s = n(622788),
    l = n(485110),
    c = n(540032),
    u = n(951575);
e.exports = function (e, t) {
    if (!o(t) || t < 0) throw new i('Assertion failed: length must be an integer >= 0');
    if (!l(e)) return a(t);
    var n = s(e, 'constructor');
    if ((r && u(n) && null === (n = s(n, r)) && (n = void 0), void 0 === n)) return a(t);
    if (!c(n)) throw new i('C must be a constructor');
    return new n(t);
};
