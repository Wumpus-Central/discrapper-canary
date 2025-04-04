var e = n(517522),
    o = n(829575),
    i = n(839593),
    u = n(914405),
    s = n(213805),
    c = n(394370),
    f = TypeError,
    a = c('toPrimitive');
t.exports = function (t, r) {
    if (!o(t) || i(t)) return t;
    var n,
        c = u(t, a);
    if (c) {
        if ((void 0 === r && (r = 'default'), !o((n = e(c, t, r))) || i(n))) return n;
        throw new f("Can't convert object to primitive value");
    }
    return void 0 === r && (r = 'number'), s(t, r);
};
