var r = n(447093),
    i = Math.max;
e.exports = function (e, t, n) {
    return (
        (t = i(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var a = arguments, s = -1, o = i(a.length - t, 0), l = Array(o); ++s < o; ) l[s] = a[t + s];
            s = -1;
            for (var c = Array(t + 1); ++s < t; ) c[s] = a[s];
            return (c[t] = n(l)), r(e, this, c);
        }
    );
};
