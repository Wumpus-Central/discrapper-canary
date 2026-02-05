"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    a = n(688810),
    s = n(517164),
    o = n(183555),
    l = n(672385);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, voiceChannelId: _, analyticsLocations: f } = e,
        { context: p, trackUserProfileAction: h } = (0, o.NJ)(),
        { analyticsLocations: m } = (0, a.Ay)(),
        g = f ?? m,
        E = (0, i.bG)([s.A], () => s.A.getUserOutbox(t.id));
    return (0, r.useCallback)(
        (e) => {
            let { action: t } = e;
            h({ action: t, analyticsLocations: g }),
                (0, l.Tu)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: E,
                    voiceChannelId: _,
                    analyticsLocations: g,
                    ...p,
                });
        },
        [h, p, n, u, d, c, E, _, g],
    );
}
