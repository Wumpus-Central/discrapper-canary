var i = n(729605),
    r = n(223944),
    a = n(474883),
    s = function (e) {
        return function (t, n, s) {
            var o,
                l = i(t),
                u = a(l),
                c = r(s, u);
            if (e && n != n) {
                for (; u > c; ) if ((o = l[c++]) != o) return !0;
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: s(!0),
    indexOf: s(!1)
};
