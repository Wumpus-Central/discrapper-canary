var i = n(175440),
    r = Math.floor,
    a = function (e, t) {
        var n = e.length,
            l = r(n / 2);
        return n < 8 ? s(e, t) : o(e, a(i(e, 0, l), t), a(i(e, l), t), t);
    },
    s = function (e, t) {
        for (var n, i, r = e.length, a = 1; a < r; ) {
            for (i = a, n = e[a]; i && t(e[i - 1], n) > 0; ) e[i] = e[--i];
            i !== a++ && (e[i] = n);
        }
        return e;
    },
    o = function (e, t, n, i) {
        for (var r = t.length, a = n.length, s = 0, o = 0; s < r || o < a; ) e[s + o] = s < r && o < a ? (0 >= i(t[s], n[o]) ? t[s++] : n[o++]) : s < r ? t[s++] : n[o++];
        return e;
    };
e.exports = a;
