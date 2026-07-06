"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    s = n(688810),
    a = n(517164),
    o = n(183555),
    l = n(47675);
function u(e) {
    let { user: t, display: n, activity: u, entry: c, stream: d, voiceChannelId: _, analyticsLocations: h } = e,
        { context: f, trackUserProfileAction: E } = (0, o.NJ)(),
        { analyticsLocations: p } = (0, s.Ay)(),
        m = h ?? p,
        g = (0, r.bG)([a.A], () => a.A.getUserOutbox(t.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: t } = e;
            E({ action: t, analyticsLocations: m }),
                (0, l.Tu)({
                    action: t,
                    display: n,
                    activity: u,
                    entry: c,
                    stream: d,
                    outbox: g,
                    voiceChannelId: _,
                    analyticsLocations: m,
                    ...f,
                });
        },
        [E, f, n, u, d, c, g, _, m],
    );
}
