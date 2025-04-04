var r = n(689933),
    o = Math.floor,
    a = function (e, t) {
        var n = e.length;
        if (n < 8)
            for (var i, s, c = 1; c < n; ) {
                for (s = c, i = e[c]; s && t(e[s - 1], i) > 0; ) e[s] = e[--s];
                s !== c++ && (e[s] = i);
            }
        else for (var l = o(n / 2), u = a(r(e, 0, l), t), d = a(r(e, l), t), p = u.length, h = d.length, f = 0, m = 0; f < p || m < h; ) e[f + m] = f < p && m < h ? (0 >= t(u[f], d[m]) ? u[f++] : d[m++]) : f < p ? u[f++] : d[m++];
        return e;
    };
e.exports = a;
