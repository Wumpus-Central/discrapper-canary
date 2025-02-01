n.d(t, { Z: () => a });
var i = n(186082),
    r = Math.max;
let a = function (e, t, n) {
    return (
        (t = r(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var a = arguments, s = -1, o = r(a.length - t, 0), l = Array(o); ++s < o; ) l[s] = a[t + s];
            s = -1;
            for (var u = Array(t + 1); ++s < t; ) u[s] = a[s];
            return (u[t] = n(l)), (0, i.Z)(e, this, u);
        }
    );
};
