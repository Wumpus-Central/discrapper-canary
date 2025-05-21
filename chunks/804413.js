n.d(t, { Z: () => s }), n(388685);
var i = n(848572),
    r = n(474936);
function s() {
    let e = (0, i.GG)();
    if (null == e) return null;
    let t = new Date().getTime();
    for (let n of Object.values(r.vK)) {
        let i = new Date(e);
        if ((i.setMonth(e.getMonth() + n.tenureReqNumMonths), i.setHours(i.getHours() + 30), t < i.getTime())) break;
        if (t - i.getTime() < 604800000) return n.id;
    }
    return null;
}
