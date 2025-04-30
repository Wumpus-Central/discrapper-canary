s.d(n, { Z: () => r }), s(388685);
var t = s(192379),
    l = s(442837),
    i = s(528963),
    o = s(606956);
let a = +s(70956).Z.Millis.HOUR;
function r(e) {
    let [n, s] = t.useState(!1),
        r = (0, l.e7)([o.Z], () => o.Z.getFollowerStatsForChannel(e), [e]);
    return (
        t.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n ? (s(!0), i.Z.fetchChannelFollowerStats(e)) : null != r && n && s(!1);
        }, [e, r, n]),
        [r, n]
    );
}
