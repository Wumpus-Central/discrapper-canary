var r = n(517522),
    o = n(691593),
    a = n(971428),
    i = n(921413),
    s = TypeError;
e.exports = function (e, t) {
    var n,
        c = i(this),
        l = o(c.get),
        u = o(c.has),
        d = o(c.set),
        p = arguments.length > 2 ? arguments[2] : void 0;
    if (!a(t) && !a(p)) throw new s('At least one callback required');
    return r(u, c, e) ? ((n = r(l, c, e)), a(t) && r(d, c, e, (n = t(n)))) : a(p) && r(d, c, e, (n = p())), n;
};
