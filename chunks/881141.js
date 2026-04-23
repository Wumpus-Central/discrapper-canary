n.d(t, { A: () => a });
var i = n(927578),
    s = n(112848),
    l = n(788868);
function a() {
    let e = (0, s.Xb)(),
        t = (0, i.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = l.sp.length - 1; t >= 0; t--) {
        let i = l.VD[l.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + i.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return i.id;
            else break;
    }
    return null;
}
