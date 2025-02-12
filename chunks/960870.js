n.d(t, { Z: () => u });
var i = n(192379),
    r = n(442837),
    a = n(906732),
    s = n(353647),
    o = n(785717),
    l = n(221292);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, voiceChannelId: f, analyticsLocations: _ } = e,
        { context: p, trackUserProfileAction: h } = (0, o.KZ)(),
        { analyticsLocations: m } = (0, a.ZP)(),
        g = null != _ ? _ : m,
        E = (0, r.e7)([s.Z], () => s.Z.getUserOutbox(t.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: t } = e;
            h({
                action: t,
                analyticsLocations: g
            }),
                (0, l.z7)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: E,
                    voiceChannelId: f,
                    analyticsLocations: g,
                    ...p
                });
        },
        [h, p, n, u, d, c, E, f, g]
    );
}
