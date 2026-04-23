n.d(t, { A: () => s });
var l = n(64700),
    i = n(17928),
    r = n(285059),
    a = n(698441);
function s(e, t, n) {
    let s = (0, i.bG)([a.Ay], () => a.Ay.getUserCount(t, n));
    return (
        (0, l.useEffect)(() => {
            null != e && null != t && r.A.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        s
    );
}
