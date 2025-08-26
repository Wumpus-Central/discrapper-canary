n.d(t, { Z: () => s });
var r = n(74538),
    i = n(848572),
    o = n(474936);
let a = 604800000;
function s() {
    let e = (0, i.GG)(),
        t = (0, r.EK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = o.Qh.length - 1; t >= 0; t--) {
        let r = o.vK[o.Qh[t]],
            i = new Date(e);
        if ((i.setMonth(e.getMonth() + r.tenureReqNumMonths), i.setHours(i.getHours() + 30), n > i.getTime()))
            if (n - i.getTime() < a) return r.id;
            else break;
    }
    return null;
}
