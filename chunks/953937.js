var r = n(192819),
    i = Math.floor,
    a = function (e, t) {
        var n = e.length;
        if (n < 8)
            for (var s, o, l = 1; l < n; ) {
                for (o = l, s = e[l]; o && t(e[o - 1], s) > 0; ) e[o] = e[--o];
                o !== l++ && (e[o] = s);
            }
        else
            for (
                var c = i(n / 2), u = a(r(e, 0, c), t), d = a(r(e, c), t), f = u.length, p = d.length, _ = 0, h = 0;
                _ < f || h < p;
            )
                e[_ + h] = _ < f && h < p ? (0 >= t(u[_], d[h]) ? u[_++] : d[h++]) : _ < f ? u[_++] : d[h++];
        return e;
    };
e.exports = a;
