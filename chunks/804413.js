n.d(t, { Z: () => i });
var a = n(74538),
    l = n(848572),
    r = n(474936);
function i() {
    let e = (0, l.GG)(),
        t = (0, a.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = r.Qh.length - 1; t >= 0; t--) {
        let a = r.vK[r.Qh[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + a.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 604800000) return a.id;
            else break;
    }
    return null;
}
