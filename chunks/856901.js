var n;
(n = { value: !0 }),
    (t.stringSimilarity = void 0),
    (t.stringSimilarity = function (e, t, n, r) {
        if ((void 0 === n && (n = 2), void 0 === r && (r = !1), r || ((e = e.toLowerCase()), (t = t.toLowerCase())), e.length < n || t.length < n)) return 0;
        for (var i = new Map(), o = 0; o < e.length - (n - 1); o++) {
            var a = e.substr(o, n);
            i.set(a, i.has(a) ? i.get(a) + 1 : 1);
        }
        for (var s = 0, l = 0; l < t.length - (n - 1); l++) {
            var c = t.substr(l, n),
                u = i.has(c) ? i.get(c) : 0;
            u > 0 && (i.set(c, u - 1), s++);
        }
        return (2 * s) / (e.length + t.length - (n - 1) * 2);
    }),
    t.stringSimilarity;
