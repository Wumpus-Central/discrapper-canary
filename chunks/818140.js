var r = n(729605),
    i = n(223944),
    o = n(474883),
    a = function (e) {
        return function (t, n, a) {
            var s,
                l = r(t),
                c = o(l),
                u = i(a, c);
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
