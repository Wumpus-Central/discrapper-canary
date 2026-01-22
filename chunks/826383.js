n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    a = n(285059),
    s = n(698441);
function o(e, t, n) {
    let o = (0, i.bG)([s.Ay], () => s.Ay.getUserCount(t, n));
    return (
        (0, r.useEffect)(() => {
            null != e && null != t && a.A.getGuildEventUserCounts(e, t, null != n ? [n] : []);
        }, [t, e, n]),
        o
    );
}
