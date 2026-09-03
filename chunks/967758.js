n.d(t, { A: () => i });
var l = n(515718);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        { innerWidth: i, innerHeight: s } = n,
        r = i - (e ? 76 : 24) * 2,
        a = s - 176;
    if (!(0, l.eJ)(t)) return { width: r, height: a };
    let { width: o, height: u } = t,
        c = (0, l.Uj)({ width: o, height: u, maxWidth: r, maxHeight: a }),
        d = (0, l.Uj)({ width: o, height: u, maxWidth: i - 544, maxHeight: s - (e ? 88 : 36) * 2 });
    return c.width >= d.width ? c : d;
}
