n.d(t, { Z: () => l });
var a = n(74538),
    i = n(848572),
    r = n(474936);
function l() {
    let e = (0, i.GG)(),
        t = (0, a.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = r.Qh.length - 1; t >= 0; t--) {
        let a = r.vK[r.Qh[t]],
            i = new Date(e);
        if ((i.setMonth(e.getMonth() + a.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 604800000) return a.id;
            else break;
    }
    return null;
}
