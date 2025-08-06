r.d(t, { Z: () => a });
var n = r(186082),
    o = Math.max;
let a = function (e, t, r) {
    return (
        (t = o(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var a = arguments, i = -1, l = o(a.length - t, 0), s = Array(l); ++i < l; ) s[i] = a[t + i];
            i = -1;
            for (var u = Array(t + 1); ++i < t; ) u[i] = a[i];
            return (u[t] = r(s)), (0, n.Z)(e, this, u);
        }
    );
};
