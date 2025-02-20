var r = n(570596),
    i = n(548828),
    o = n(735471),
    a = n(28886),
    s = TypeError;
e.exports = function (e, t) {
    var n,
        l = a(this),
        c = i(l.get),
        u = i(l.has),
        d = i(l.set),
        f = arguments.length > 2 ? arguments[2] : void 0;
    if (!o(t) && !o(f)) throw new s('At least one callback required');
    return r(u, l, e) ? ((n = r(c, l, e)), o(t) && r(d, l, e, (n = t(n)))) : o(f) && r(d, l, e, (n = f())), n;
};
