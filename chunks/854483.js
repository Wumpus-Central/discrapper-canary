var i = n(570596),
    r = n(548828),
    a = n(735471),
    s = n(28886),
    o = TypeError;
e.exports = function (e, t) {
    var n,
        l = s(this),
        u = r(l.get),
        c = r(l.has),
        d = r(l.set),
        f = arguments.length > 2 ? arguments[2] : void 0;
    if (!a(t) && !a(f)) throw new o('At least one callback required');
    return i(c, l, e) ? ((n = i(u, l, e)), a(t) && i(d, l, e, (n = t(n)))) : a(f) && i(d, l, e, (n = f())), n;
};
