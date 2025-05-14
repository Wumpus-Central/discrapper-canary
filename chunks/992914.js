var e = r(992174),
    o = Math.floor,
    i = function (t, n) {
        var r = t.length;
        if (r < 8)
            for (var u, c, a = 1; a < r; ) {
                for (c = a, u = t[a]; c && n(t[c - 1], u) > 0; ) t[c] = t[--c];
                c !== a++ && (t[c] = u);
            }
        else for (var f = o(r / 2), s = i(e(t, 0, f), n), l = i(e(t, f), n), p = s.length, d = l.length, _ = 0, h = 0; _ < p || h < d; ) t[_ + h] = _ < p && h < d ? (0 >= n(s[_], l[h]) ? s[_++] : l[h++]) : _ < p ? s[_++] : l[h++];
        return t;
    };
t.exports = i;
