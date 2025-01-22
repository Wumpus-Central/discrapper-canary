var i = r(570596),
    a = r(548828),
    o = r(735471),
    s = r(28886),
    l = TypeError;
e.exports = function (e, n) {
    var r,
        u = s(this),
        c = a(u.get),
        d = a(u.has),
        f = a(u.set),
        p = arguments.length > 2 ? arguments[2] : void 0;
    if (!o(n) && !o(p)) throw new l('At least one callback required');
    return i(d, u, e) ? ((r = i(c, u, e)), o(n) && i(f, u, e, (r = n(r)))) : o(p) && i(f, u, e, (r = p())), r;
};
