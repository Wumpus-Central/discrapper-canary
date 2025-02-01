var r = a(299623),
    n = a(980855),
    o = a(49693),
    _ = function (t) {
        return function (e, a, _) {
            var i,
                c = r(e),
                s = o(c),
                E = n(_, s);
            if (t && a != a) {
                for (; s > E; ) if ((i = c[E++]) != i) return !0;
            } else for (; s > E; E++) if ((t || E in c) && c[E] === a) return t || E || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: _(!0),
    indexOf: _(!1)
};
