n.d(t, { Z: () => p });
var r = n(200651),
    s = n(192379),
    o = n(442837),
    a = n(70097),
    i = n(359013),
    c = n(120421),
    l = n(401258),
    u = n(477839),
    d = n(805768),
    f = n(18856);
function p(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(null),
        p = (0, o.e7)([c.Z], () => c.Z.getPurchasedUpgradesForItem(u.yN.AT_SOMEONE)),
        m = (0, o.e7)([c.Z], () => c.Z.hasPurchasedUpgrade(u.yN.AT_SOMEONE, u.uv.FULLSCREEN_AT_SOMEONE)),
        g = i.Mq[u.yN.AT_SOMEONE].getPoints(p);
    return (
        (0, s.useEffect)(() => {
            var e, r;
            t ? null == (e = n.current) || e.pause() : null == (r = n.current) || r.play();
        }, [t]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Z, {
                    ref: n,
                    className: m ? d.videoFullscreen : d.video,
                    src: f.Z,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0
                }),
                (0, r.jsx)(l.Z, {
                    itemId: u.yN.AT_SOMEONE,
                    pointsPerInterval: g,
                    interval: 1000,
                    isPaused: t
                })
            ]
        })
    );
}
