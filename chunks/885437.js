n.d(t, { p: () => a });
var i = n(976860),
    l = n(734057),
    s = n(332456);
function a(e) {
    let t = (0, s.C)(l.A.getChannel(e), !0),
        n = t?.location ?? (0, i.PR)();
    return { ...(t ?? {}), ...(null != n ? { location: n } : {}) };
}
