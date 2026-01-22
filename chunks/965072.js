var r = n(410323),
    i = n(703441),
    a = n(339626),
    s = n(647055),
    o = n(304880),
    l = r([].push);
e.exports = function (e) {
    if (a(e)) return e;
    if (i(e)) {
        for (var t = e.length, n = [], r = 0; r < t; r++) {
            var c = e[r];
            "string" == typeof c
                ? l(n, c)
                : ("number" == typeof c || "Number" === s(c) || "String" === s(c)) && l(n, o(c));
        }
        var u = n.length,
            d = !0;
        return function (e, t) {
            if (d) return (d = !1), t;
            if (i(this)) return t;
            for (var r = 0; r < u; r++) if (n[r] === e) return t;
        };
    }
};
