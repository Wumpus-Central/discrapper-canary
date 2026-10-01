n.d(e, { A: () => c });
var l = n(582128),
    i = n(17928),
    a = n(688810),
    r = n(517164),
    s = n(183555),
    o = n(47675);
function c(t) {
    let { user: e, display: n, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: f } = t,
        { context: p, trackUserProfileAction: g } = (0, s.NJ)(),
        { analyticsLocations: m } = (0, a.Ay)(),
        x = f ?? m,
        _ = (0, i.bG)([r.A], () => r.A.getUserOutbox(e.id));
    return (0, l.useCallback)(
        (t) => {
            let { action: e } = t;
            (g({ action: e, analyticsLocations: x }),
                (0, o.Tu)({
                    action: e,
                    display: n,
                    activity: c,
                    entry: u,
                    stream: d,
                    outbox: _,
                    voiceChannelId: A,
                    analyticsLocations: x,
                    ...p,
                }));
        },
        [g, p, n, c, d, u, _, A, x],
    );
}
