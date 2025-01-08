r.d(t, {
    Z: function () {
        return u;
    }
});
var a = r(665352),
    n = r(181568),
    o = r(605700),
    s = r(372528),
    i = r(560281),
    c = r(37484);
function u(e, t, r) {
    if (((e = (0, n.Z)(e)), 2 == arguments.length && 'object' === (0, c.dt)(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) u(e, r, t[r]);
    } else {
        'function' == typeof r && (r = r((0, o.Z)(e, t)));
        let { space: n, index: c } = a.Z.resolveCoord(t, e.space),
            u = (0, s.Z)(e, n);
        (u[c] = r), (0, i.Z)(e, n, u);
    }
    return e;
}
u.returns = 'color';
