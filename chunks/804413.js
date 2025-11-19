n.d(t, { Z: () => r });
var a = n(74538),
    l = n(848572),
    i = n(474936);
function r() {
    let e = (0, l.GG)(),
        t = (0, a.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = i.Qh.length - 1; t >= 0; t--) {
        let a = i.vK[i.Qh[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + a.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 604800000) return a.id;
            else break;
    }
    return null;
}
