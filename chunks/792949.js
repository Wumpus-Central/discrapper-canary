var r = n(804336),
    i = n(201187),
    o = n(34533),
    a = n(622788),
    s = n(261768),
    l = n(983018),
    c = n(154605),
    u = n(255914),
    d = n(848894),
    f = n(166691),
    _ = n(934660),
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
