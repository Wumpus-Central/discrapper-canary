var r = n(804336),
    i = n(201187),
    a = n(34533),
    o = n(622788),
    s = n(261768),
    l = n(983018),
    c = n(154605),
    u = n(255914),
    d = n(848894),
    _ = n(166691),
    f = n(934660),
    p = Object('a'),
    h = 'a' !== p[0] || !(0 in p),
    m = _('String.prototype.split');
e.exports = function (e) {
    var t,
        n = u(this),
        _ = c((h && f(n) ? m(n, '') : n).length);
    if (!l(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (t = arguments[1]);
    for (var p = r(n, _), g = 0; g < _; ) {
        var E = d(g);
        if (s(n, E)) {
            var b = i(e, t, [o(n, E), g, n]);
            a(p, E, b);
        }
        g += 1;
    }
    return p;
};
