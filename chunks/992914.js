var r = n(992174),
    i = Math.floor,
    a = function (e, t) {
        var n = e.length;
        if (n < 8)
            for (var o, s, l = 1; l < n; ) {
                for (s = l, o = e[l]; s && t(e[s - 1], o) > 0; ) e[s] = e[--s];
                s !== l++ && (e[s] = o);
            }
        else for (var c = i(n / 2), u = a(r(e, 0, c), t), d = a(r(e, c), t), f = u.length, _ = d.length, p = 0, h = 0; p < f || h < _; ) e[p + h] = p < f && h < _ ? (0 >= t(u[p], d[h]) ? u[p++] : d[h++]) : p < f ? u[p++] : d[h++];
        return e;
    };
e.exports = a;
