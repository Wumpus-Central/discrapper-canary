n.d(e, { A: () => a });
var l = n(582128),
    r = n(17928),
    i = n(285059),
    s = n(698441);
function a(t, e, n) {
    let a = (0, r.bG)([s.Ay], () => s.Ay.getUserCount(e, n));
    return (
        (0, l.useEffect)(() => {
            null != t && null != e && i.A.getGuildEventUserCounts(t, e, null != n ? [n] : []);
        }, [e, t, n]),
        a
    );
}
