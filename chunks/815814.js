var i = n(640767),
    r = n(393020),
    a = n(493883),
    s = n(755228),
    o = n(383718),
    l = n(713720),
    u = n(1213),
    c = n(124084),
    d = n(581527),
    f = n(192853),
    _ = n(163494),
    p = Object('a'),
    h = 'a' !== p[0] || !(0 in p),
    m = f('String.prototype.split');
e.exports = function (e) {
    var t,
        n = c(this),
        f = u((h && _(n) ? m(n, '') : n).length);
    if (!l(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (t = arguments[1]);
    for (var p = i(n, f), g = 0; g < f; ) {
        var E = d(g);
        if (o(n, E)) {
            var v = r(e, t, [s(n, E), g, n]);
            a(p, E, v);
        }
        g += 1;
    }
    return p;
};
