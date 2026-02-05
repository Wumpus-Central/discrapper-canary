n.d(t, { A: () => l });
var a = n(927578),
    s = n(112848),
    i = n(788868);
function l() {
    let e = (0, s.Xb)(),
        t = (0, a.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = i.sp.length - 1; t >= 0; t--) {
        let a = i.VD[i.sp[t]],
            s = new Date(e);
        if ((s.setMonth(e.getMonth() + a.tenureReqNumMonths), s.setHours(s.getHours() + 30), n > s.getTime()))
            if (n - s.getTime() < 6048e5) return a.id;
            else break;
    }
    return null;
}
