r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(906732),
    s = r(353647),
    l = r(785717),
    u = r(221292);
function c(e) {
    let { user: n, display: r, activity: c, entry: d, stream: f, analyticsLocations: p } = e,
        { context: h, trackUserProfileAction: _ } = (0, l.KZ)(),
        { analyticsLocations: m } = (0, o.ZP)(),
        g = null != p ? p : m,
        E = (0, a.e7)([s.Z], () => s.Z.getUserOutbox(n.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: n } = e;
            _({
                action: n,
                analyticsLocations: g
            }),
                (0, u.z7)({
                    action: n,
                    display: r,
                    activity: c,
                    entry: d,
                    stream: f,
                    outbox: E,
                    analyticsLocations: g,
                    ...h
                });
        },
        [_, h, r, c, f, d, E, g]
    );
}
