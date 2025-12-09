n.d(t, { Z: () => l });
var a = n(74538),
    r = n(848572),
    i = n(474936);
function l() {
    let e = (0, r.GG)(),
        t = (0, a.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = i.Qh.length - 1; t >= 0; t--) {
        let a = i.vK[i.Qh[t]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + a.tenureReqNumMonths), r.setHours(r.getHours() + 30), n > r.getTime()))
            if (n - r.getTime() < 604800000) return a.id;
            else break;
    }
    return null;
}
