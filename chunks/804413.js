n.d(t, { Z: () => l });
var r = n(792481),
    i = n(74538),
    a = n(848572),
    o = n(474936);
let s = 604800000;
function l() {
    let e = (0, a.GG)(),
        t = r.X.useExperiment({ location: "useRecentlyLeveledTenureBadge" }).bypassTimeLimit,
        n = (0, i.EK)();
    if (null == e || !n) return null;
    let l = new Date().getTime();
    for (let n = o.Qh.length - 1; n >= 0; n--) {
        let r = o.vK[o.Qh[n]],
            i = new Date(e);
        if ((i.setMonth(e.getMonth() + r.tenureReqNumMonths), i.setHours(i.getHours() + 30), l > i.getTime()))
            if (l - i.getTime() < s || t) return r.id;
            else break;
    }
    return null;
}
