var r = n(640767),
    i = n(393020),
    o = n(493883),
    a = n(755228),
    s = n(383718),
    l = n(713720),
    c = n(1213),
    u = n(124084),
    d = n(581527),
    f = n(192853),
    _ = n(163494),
    p = Object('a'),
    h = 'a' !== p[0] || !(0 in p),
    m = f('String.prototype.split');
e.exports = function (e) {
    var t,
        n = u(this),
        f = c((h && _(n) ? m(n, '') : n).length);
    if (!l(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (t = arguments[1]);
    for (var p = r(n, f), g = 0; g < f; ) {
        var E = d(g);
        if (s(n, E)) {
            var b = i(e, t, [a(n, E), g, n]);
            o(p, E, b);
        }
        g += 1;
    }
    return p;
};
