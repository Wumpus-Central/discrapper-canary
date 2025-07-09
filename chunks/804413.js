n.d(t, { Z: () => l });
var i = n(792481),
    r = n(74538),
    s = n(848572),
    a = n(474936);
function l() {
    let e = (0, s.GG)(),
        t = i.X.useExperiment({ location: 'useRecentlyLeveledTenureBadge' }).bypassTimeLimit,
        n = (0, r.EK)();
    if (null == e || !n) return null;
    let l = new Date().getTime();
    for (let n = a.Qh.length - 1; n >= 0; n--) {
        let i = a.vK[a.Qh[n]],
            r = new Date(e);
        if ((r.setMonth(e.getMonth() + i.tenureReqNumMonths), r.setHours(r.getHours() + 30), l > r.getTime()))
            if (l - r.getTime() < 604800000 || t) return i.id;
            else break;
    }
    return null;
}
