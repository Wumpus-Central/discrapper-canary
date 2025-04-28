var e = r(146063),
    o = r(201390),
    i = r(914331),
    u = function (t) {
        return function (n, r, u) {
            var c,
                a = e(n),
                f = i(a);
            if (0 === f) return !t && -1;
            var s = o(u, f);
            if (t && r != r) {
                for (; f > s; ) if ((c = a[s++]) != c) return !0;
            } else for (; f > s; s++) if ((t || s in a) && a[s] === r) return t || s || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: u(!0),
    indexOf: u(!1)
};
