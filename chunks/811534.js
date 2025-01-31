r.d(t, { Z: () => l });
var a = r(665352),
    n = r(181568),
    s = r(605700),
    o = r(372528),
    i = r(560281),
    c = r(37484);
function l(e, t, r) {
    if (((e = (0, n.Z)(e)), 2 == arguments.length && 'object' === (0, c.dt)(arguments[1]))) {
        let t = arguments[1];
        for (let r in t) l(e, r, t[r]);
    } else {
        'function' == typeof r && (r = r((0, s.Z)(e, t)));
        let { space: n, index: c } = a.Z.resolveCoord(t, e.space),
            l = (0, o.Z)(e, n);
        (l[c] = r), (0, i.Z)(e, n, l);
    }
    return e;
}
l.returns = 'color';
