var i = r(640767),
    a = r(393020),
    o = r(493883),
    s = r(755228),
    l = r(383718),
    u = r(713720),
    c = r(1213),
    d = r(124084),
    f = r(581527),
    p = r(192853),
    h = r(163494),
    _ = Object('a'),
    m = 'a' !== _[0] || !(0 in _),
    g = p('String.prototype.split');
e.exports = function (e) {
    var n,
        r = d(this),
        p = c((m && h(r) ? g(r, '') : r).length);
    if (!u(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (n = arguments[1]);
    for (var _ = i(r, p), E = 0; E < p; ) {
        var v = f(E);
        if (l(r, v)) {
            var y = a(e, n, [s(r, v), E, r]);
            o(_, v, y);
        }
        E += 1;
    }
    return _;
};
