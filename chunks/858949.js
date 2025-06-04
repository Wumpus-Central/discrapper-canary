var r = n(146063),
    i = n(201390),
    a = n(914331),
    o = function (e) {
        return function (t, n, o) {
            var s,
                l = r(t),
                c = a(l);
            if (0 === c) return !e && -1;
            var u = i(o, c);
            if (e && n != n) {
                for (; c > u; ) if ((s = l[u++]) != s) return !0;
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: o(!0),
    indexOf: o(!1)
};
