var r = n(146063),
    i = n(201390),
    o = n(914331),
    a = function (e) {
        return function (t, n, a) {
            var s,
                l = r(t),
                c = o(l);
            if (0 === c) return !e && -1;
            var u = i(a, c);
            if (e && n != n) {
                for (; c > u; ) if ((s = l[u++]) != s) return !0;
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: a(!0),
    indexOf: a(!1)
};
