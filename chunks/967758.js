e.d(t, { A: () => d });
var h = e(515718);
function d(i, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        { innerWidth: d, innerHeight: a } = e,
        n = d - (i ? 76 : 24) * 2,
        r = a - 176;
    if (!(0, h.eJ)(t)) return { width: n, height: r };
    let { width: g, height: s } = t,
        m = (0, h.Uj)({ width: g, height: s, maxWidth: n, maxHeight: r }),
        o = (0, h.Uj)({ width: g, height: s, maxWidth: d - 544, maxHeight: a - (i ? 88 : 36) * 2 });
    return m.width >= o.width ? m : o;
}
