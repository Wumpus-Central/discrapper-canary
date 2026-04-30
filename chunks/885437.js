l.d(t, { p: () => s });
var n = l(976860),
    a = l(734057),
    r = l(332456);
function s(e) {
    let t = (0, r.C)(a.A.getChannel(e), !0),
        l = t?.location ?? (0, n.PR)();
    return { ...(t ?? {}), ...(null != l ? { location: l } : {}) };
}
