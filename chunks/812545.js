s.d(n, { Z: () => r }), s(47120);
var t = s(192379),
    l = s(442837),
    o = s(528963),
    i = s(237904);
let a = +s(70956).Z.Millis.HOUR;
function r(e) {
    let [n, s] = t.useState(!1),
        r = (0, l.e7)([i.Z], () => i.Z.getFollowerStatsForChannel(e), [e]);
    return (
        t.useEffect(() => {
            (null == r || Date.now() - r.lastFetched > a) && !n ? (s(!0), o.Z.fetchChannelFollowerStats(e)) : null != r && n && s(!1);
        }, [e, r, n]),
        [r, n]
    );
}
