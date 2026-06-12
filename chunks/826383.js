l.d(t, { A: () => a });
var n = l(64700),
    r = l(17928),
    s = l(285059),
    i = l(698441);
function a(e, t, l) {
    let a = (0, r.bG)([i.Ay], () => i.Ay.getUserCount(t, l));
    return (
        (0, n.useEffect)(() => {
            null != e && null != t && s.A.getGuildEventUserCounts(e, t, null != l ? [l] : []);
        }, [t, e, l]),
        a
    );
}
