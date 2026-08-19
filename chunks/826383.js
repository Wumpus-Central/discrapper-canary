n.d(e, { A: () => s });
var l = n(582128),
    r = n(17928),
    i = n(285059),
    a = n(698441);
function s(t, e, n) {
    let s = (0, r.bG)([a.Ay], () => a.Ay.getUserCount(e, n));
    return (
        (0, l.useEffect)(() => {
            null != t && null != e && i.A.getGuildEventUserCounts(t, e, null != n ? [n] : []);
        }, [e, t, n]),
        s
    );
}
