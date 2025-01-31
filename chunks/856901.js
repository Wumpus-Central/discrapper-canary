(n.stringSimilarity = void 0),
    (n.stringSimilarity = function (e, n, t, l) {
        if ((void 0 === t && (t = 2), void 0 === l && (l = !1), l || ((e = e.toLowerCase()), (n = n.toLowerCase())), e.length < t || n.length < t)) return 0;
        for (var i = new Map(), s = 0; s < e.length - (t - 1); s++) {
            var a = e.substr(s, t);
            i.set(a, i.has(a) ? i.get(a) + 1 : 1);
        }
        for (var r = 0, o = 0; o < n.length - (t - 1); o++) {
            var u = n.substr(o, t),
                c = i.has(u) ? i.get(u) : 0;
            c > 0 && (i.set(u, c - 1), r++);
        }
        return (2 * r) / (e.length + n.length - (t - 1) * 2);
    }),
    n.stringSimilarity;
