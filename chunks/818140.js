var i = r(729605),
    a = r(223944),
    o = r(474883),
    s = function (e) {
        return function (n, r, s) {
            var l,
                u = i(n),
                c = o(u),
                d = a(s, c);
            if (e && r != r) {
                for (; c > d; ) if ((l = u[d++]) != l) return !0;
            } else for (; c > d; d++) if ((e || d in u) && u[d] === r) return e || d || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: s(!0),
    indexOf: s(!1)
};
