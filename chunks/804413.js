n.d(t, { Z: () => l });
var i = n(792481),
    r = n(848572),
    s = n(474936);
function l() {
    let e = (0, r.GG)(),
        t = i.X.useExperiment({ location: 'useRecentlyLeveledTenureBadge' }).bypassTimeLimit;
    if (null == e) return null;
    let n = new Date().getTime();
    for (let i = s.Qh.length - 1; i >= 0; i--) {
        let r = s.vK[s.Qh[i]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + r.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 604800000 || t) return r.id;
            else break;
    }
    return null;
}
