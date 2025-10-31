n.d(t, { Z: () => r });
var a = n(74538),
    i = n(848572),
    l = n(474936);
function r() {
    let e = (0, i.GG)(),
        t = (0, a.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = l.Qh.length - 1; t >= 0; t--) {
        let a = l.vK[l.Qh[t]],
            i = new Date(e);
        if ((i.setMonth(e.getMonth() + a.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < 604800000) return a.id;
            else break;
    }
    return null;
}
