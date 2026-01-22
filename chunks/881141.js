n.d(t, {
    A: () => r,
});
var a = n(927578),
    l = n(112848),
    i = n(788868);

function r() {
    let e = (0, l.Xb)(),
        t = (0, a.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = i.sp.length - 1; t >= 0; t--) {
        let a = i.VD[i.sp[t]],
            l = new Date(e);
        if ((l.setMonth(e.getMonth() + a.tenureReqNumMonths), l.setHours(l.getHours() + 30), n > l.getTime()))
            if (n - l.getTime() < 6048e5) return a.id;
            else break;
    }
    return null;
}
