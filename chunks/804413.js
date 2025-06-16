n.d(t, { Z: () => a });
var i = n(792481),
    r = n(74538),
    s = n(848572),
    l = n(474936);
function a() {
    let e = (0, s.GG)(),
        t = i.X.useExperiment({ location: 'useRecentlyLeveledTenureBadge' }).bypassTimeLimit,
        n = (0, r.EK)();
    if (null == e || !n) return null;
    let a = new Date().getTime();
    for (let n = l.Qh.length - 1; n >= 0; n--) {
        let i = l.vK[l.Qh[n]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), a > r.getTime()))
            if (a - r.getTime() < 604800000 || t) return i.id;
            else break;
    }
    return null;
}
