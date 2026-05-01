e.d(n, { A: () => c });
var i = e(64700),
    l = e(17928),
    a = e(688810),
    r = e(517164),
    s = e(183555),
    o = e(47675);
function c(t) {
    let { user: n, display: e, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: x } = t,
        { context: p, trackUserProfileAction: f } = (0, s.NJ)(),
        { analyticsLocations: _ } = (0, a.Ay)(),
        m = x ?? _,
        T = (0, l.bG)([r.A], () => r.A.getUserOutbox(n.id));
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
                    outbox: T,
                    voiceChannelId: A,
                    analyticsLocations: m,
                    ...p,
                });
        },
        [f, p, e, c, d, u, T, A, m],
    );
}
