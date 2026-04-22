var r = n(655405),
    i = n(31202);
e.exports = function (e, t, n, s) {
    var a = n.length,
        o = a,
        l = !s;
    if (null == e) return !o;
    for (e = Object(e); a--; ) {
        var u = n[a];
        if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
    }
    for (; ++a < o; ) {
        var d = (u = n[a])[0],
            c = e[d],
            _ = u[1];
        if (l && u[2]) {
            if (void 0 === c && !(d in e)) return !1;
        } else {
            var f = new r();
            if (s) var E = s(c, _, d, e, t, f);
            if (!(void 0 === E ? i(_, c, 3, s, f) : E)) return !1;
        }
    }
    return !0;
};
