var i = n(447093),
    r = Math.max;
e.exports = function (e, t, n) {
    return (
        (t = r(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var s = arguments, a = -1, o = r(s.length - t, 0), l = Array(o); ++a < o; ) l[a] = s[t + a];
            a = -1;
            for (var u = Array(t + 1); ++a < t; ) u[a] = s[a];
            return (u[t] = n(l)), i(e, this, u);
        }
    );
};
