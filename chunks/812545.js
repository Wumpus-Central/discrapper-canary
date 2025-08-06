l.d(t, { Z: () => r }), l(388685);
var e = l(73800),
    i = l(442837),
    o = l(528963),
    s = l(606956);
let a = +l(70956).Z.Millis.HOUR;
function r(n) {
    let [t, l] = e.useState(!1),
        r = (0, i.e7)([s.Z], () => s.Z.getFollowerStatsForChannel(n), [n]);
    return (
        e.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !t
                ? (l(!0), o.Z.fetchChannelFollowerStats(n))
                : null != r && t && l(!1);
        }, [n, r, t]),
        [r, t]
    );
}
