e.d(n, { A: () => c });
var i = e(64700),
    l = e(311907),
    r = e(688810),
    a = e(517164),
    s = e(183555),
    o = e(672385);
function c(t) {
    let { user: n, display: e, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: x } = t,
        { context: p, trackUserProfileAction: f } = (0, s.NJ)(),
        { analyticsLocations: _ } = (0, r.Ay)(),
        m = x ?? _,
        g = (0, l.bG)([a.A], () => a.A.getUserOutbox(n.id));
    return (0, i.useCallback)(
        (t) => {
            let { action: n } = t;
            f({ action: n, analyticsLocations: m }),
                (0, o.Tu)({
                    action: n,
                    display: e,
                    activity: c,
                    entry: u,
                    stream: d,
                    outbox: g,
                    voiceChannelId: A,
                    analyticsLocations: m,
                    ...p,
                });
        },
        [f, p, e, c, d, u, g, A, m],
    );
}
