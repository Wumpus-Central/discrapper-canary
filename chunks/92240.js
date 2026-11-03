e.d(n, { A: () => c });
var l = e(582128),
    i = e(17928),
    a = e(688810),
    r = e(517164),
    s = e(183555),
    o = e(47675);
function c(t) {
    let { user: n, display: e, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: f } = t,
        { context: g, trackUserProfileAction: m } = (0, s.NJ)(),
        { analyticsLocations: p } = (0, a.Ay)(),
        x = f ?? p,
        _ = (0, i.bG)([r.A], () => r.A.getUserOutbox(n.id));
    return (0, l.useCallback)(
        (t) => {
            let { action: n } = t;
            (m({ action: n, analyticsLocations: x }),
                (0, o.Tu)({
                    action: n,
                    display: e,
                    activity: c,
                    entry: u,
                    stream: d,
                    outbox: _,
                    voiceChannelId: A,
                    analyticsLocations: x,
                    ...g,
                }));
        },
        [m, g, e, c, d, u, _, A, x],
    );
}
