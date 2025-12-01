var r = n(992174),
    i = Math.floor,
    a = function (e, t) {
        var n = e.length;
        if (n < 8)
            for (var o, s, l = 1; l < n; ) {
                for (s = l, o = e[l]; s && t(e[s - 1], o) > 0; ) e[s] = e[--s];
                s !== l++ && (e[s] = o);
            }
        else
            for (
                var c = i(n / 2), u = a(r(e, 0, c), t), d = a(r(e, c), t), f = u.length, p = d.length, _ = 0, m = 0;
                _ < f || m < p;
            )
                e[_ + m] = _ < f && m < p ? (0 >= t(u[_], d[m]) ? u[_++] : d[m++]) : _ < f ? u[_++] : d[m++];
        return e;
    };
e.exports = a;
