(n = { value: !0 }), (t.stringSimilarity = void 0);
var n,
    i = function (e, t, n, i) {
        if ((void 0 === n && (n = 2), void 0 === i && (i = !1), i || ((e = e.toLowerCase()), (t = t.toLowerCase())), e.length < n || t.length < n)) return 0;
        for (var r = new Map(), a = 0; a < e.length - (n - 1); a++) {
            var s = e.substr(a, n);
            r.set(s, r.has(s) ? r.get(s) + 1 : 1);
        }
        for (var o = 0, l = 0; l < t.length - (n - 1); l++) {
            var u = t.substr(l, n),
                c = r.has(u) ? r.get(u) : 0;
            c > 0 && (r.set(u, c - 1), o++);
        }
        return (2 * o) / (e.length + t.length - (n - 1) * 2);
    };
(t.stringSimilarity = i), t.stringSimilarity;
