n.d(t, { Z: () => u });
var i = n(192379),
    r = n(442837),
    a = n(906732),
    s = n(353647),
    o = n(785717),
    l = n(221292);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, analyticsLocations: f } = e,
        { context: _, trackUserProfileAction: p } = (0, o.KZ)(),
        { analyticsLocations: h } = (0, a.ZP)(),
        m = null != f ? f : h,
        g = (0, r.e7)([s.Z], () => s.Z.getUserOutbox(t.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: t } = e;
            p({
                action: t,
                analyticsLocations: m
            }),
                (0, l.z7)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: g,
                    analyticsLocations: m,
                    ..._
                });
        },
        [p, _, n, u, d, c, g, m]
    );
}
