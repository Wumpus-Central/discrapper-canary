l.d(t, { A: () => r });
var n = l(64700),
    s = l(311907),
    i = l(285059),
    a = l(698441);
function r(e, t, l) {
    let r = (0, s.bG)([a.Ay], () => a.Ay.getUserCount(t, l));
    return (
        (0, n.useEffect)(() => {
            null != e && null != t && i.A.getGuildEventUserCounts(e, t, null != l ? [l] : []);
        }, [t, e, l]),
        r
    );
}
