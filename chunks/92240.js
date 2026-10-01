e.d(n, { A: () => c });
var l = e(582128),
    i = e(17928),
    r = e(688810),
    a = e(517164),
    s = e(183555),
    o = e(47675);
function c(t) {
    let { user: n, display: e, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: x } = t,
        { context: p, trackUserProfileAction: f } = (0, s.NJ)(),
        { analyticsLocations: m } = (0, r.Ay)(),
        _ = x ?? m,
        T = (0, i.bG)([a.A], () => a.A.getUserOutbox(n.id));
    return (0, l.useCallback)(
        (t) => {
            let { action: n } = t;
            (f({ action: n, analyticsLocations: _ }),
                (0, o.Tu)({
                    action: n,
                    display: e,
                    activity: c,
                    entry: u,
                    stream: d,
                    outbox: T,
                    voiceChannelId: A,
                    analyticsLocations: _,
                    ...p,
                }));
        },
        [f, p, e, c, d, u, T, A, _],
    );
}
