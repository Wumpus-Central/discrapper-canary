t.d(n, { Z: () => r }), t(388685);
var s = t(647438),
    l = t(442837),
    o = t(528963),
    i = t(606956);
let a = +t(70956).Z.Millis.HOUR;
function r(e) {
    let [n, t] = s.useState(!1),
        r = (0, l.e7)([i.Z], () => i.Z.getFollowerStatsForChannel(e), [e]);
    return (
        s.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n
                ? (t(!0), o.Z.fetchChannelFollowerStats(e))
                : null != r && n && t(!1);
        }, [e, r, n]),
        [r, n]
    );
}
