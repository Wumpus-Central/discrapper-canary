t.d(l, { A: () => r });
var n = t(64700),
    s = t(311907),
    i = t(285059),
    a = t(698441);
function r(e, l, t) {
    let r = (0, s.bG)([a.Ay], () => a.Ay.getUserCount(l, t));
    return (
        (0, n.useEffect)(() => {
            null != e && null != l && i.A.getGuildEventUserCounts(e, l, null != t ? [t] : []);
        }, [l, e, t]),
        r
    );
}
