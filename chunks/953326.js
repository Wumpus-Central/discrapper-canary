var r = a(299623),
    n = a(980855),
    _ = a(49693),
    o = function (t) {
        return function (e, a, o) {
            var i,
                c = r(e),
                s = _(c),
                E = n(o, s);
            if (t && a != a) {
                for (; s > E; ) if ((i = c[E++]) != i) return !0;
            } else for (; s > E; E++) if ((t || E in c) && c[E] === a) return t || E || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: o(!0),
    indexOf: o(!1)
};
