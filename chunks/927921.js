n.d(t, { Z: () => f });
var r = n(200651),
    s = n(576628),
    o = n(762029),
    a = n(442837),
    i = n(359013),
    c = n(120421),
    l = n(3072),
    u = n(401258),
    d = n(477839);
function f(e) {
    let { isPaused: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getPurchasedUpgradesForItem(d.yN.MUSIC)),
        f = null != n[d.uv.MUSIC_CHANGE],
        p = i.Mq[d.yN.MUSIC].getPoints(n),
        m = f ? o.Z : s.Z;
    return (
        (0, l.is)(m, !1),
        (0, r.jsx)(u.Z, {
            itemId: d.yN.MUSIC,
            isPaused: t,
            interval: 1000,
            pointsPerInterval: p
        })
    );
}
