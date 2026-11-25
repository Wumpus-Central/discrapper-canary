var l = e(582128),
    i = e(855986),
    a = e(688810),
    r = e(517164),
    s = e(183555),
    o = e(741534);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { user: n, display: e, activity: c, entry: u, stream: d, voiceChannelId: A, analyticsLocations: x } = t,
                { context: m, trackUserProfileAction: f } = (0, s.NJ)(),
                { analyticsLocations: g } = (0, a.Ay)(),
                p = x ?? g,
                _ = (0, i.bG)([r.A], () => r.A.getUserOutbox(n.id));
            return (0, l.useCallback)(
                (t) => {
                    let { action: n } = t;
                    (f({ action: n, analyticsLocations: p }),
                        (0, o.Tu)({
                            action: n,
                            display: e,
                            activity: c,
                            entry: u,
                            stream: d,
                            outbox: _,
                            voiceChannelId: A,
                            analyticsLocations: p,
                            ...m,
                        }));
                },
                [f, m, e, c, d, u, _, A, p],
            );
        },
    },
);
