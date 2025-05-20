t.d(n, { Z: () => r }), t(388685);
var l = t(73800),
    s = t(442837),
    i = t(528963),
    o = t(606956);
let a = +t(70956).Z.Millis.HOUR;
function r(e) {
    let [n, t] = l.useState(!1),
        r = (0, s.e7)([o.Z], () => o.Z.getFollowerStatsForChannel(e), [e]);
    return (
        l.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n ? (t(!0), i.Z.fetchChannelFollowerStats(e)) : null != r && n && t(!1);
        }, [e, r, n]),
        [r, n]
    );
}
