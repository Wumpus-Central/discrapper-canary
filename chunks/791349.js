var i = r(186082),
    a = Math.max;
function o(e, n, r) {
    return (
        (n = a(void 0 === n ? e.length - 1 : n, 0)),
        function () {
            for (var o = arguments, s = -1, l = a(o.length - n, 0), u = Array(l); ++s < l; ) u[s] = o[n + s];
            s = -1;
            for (var c = Array(n + 1); ++s < n; ) c[s] = o[s];
            return (c[n] = r(u)), (0, i.Z)(e, this, c);
        }
    );
}
n.Z = o;
