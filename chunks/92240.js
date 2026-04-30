"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    s = n(688810),
    a = n(517164),
    o = n(183555),
    l = n(47675);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, voiceChannelId: _, analyticsLocations: f } = e,
        { context: h, trackUserProfileAction: p } = (0, o.NJ)(),
        { analyticsLocations: E } = (0, s.Ay)(),
        m = f ?? E,
        g = (0, r.bG)([a.A], () => a.A.getUserOutbox(t.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: t } = e;
            p({ action: t, analyticsLocations: m }),
                (0, l.Tu)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: g,
                    voiceChannelId: _,
                    analyticsLocations: m,
                    ...h,
                });
        },
        [p, h, n, u, d, c, g, _, m],
    );
}
