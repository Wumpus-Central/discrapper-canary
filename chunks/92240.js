"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(688810),
    s = n(517164),
    l = n(183555),
    o = n(47675);
function d(e) {
    let { user: t, display: n, activity: d, entry: c, stream: u, voiceChannelId: _, analyticsLocations: E } = e,
        { context: A, trackUserProfileAction: h } = (0, l.NJ)(),
        { analyticsLocations: I } = (0, a.Ay)(),
        f = E ?? I,
        p = (0, r.bG)([s.A], () => s.A.getUserOutbox(t.id));
    return (0, i.useCallback)(
        (e) => {
            let { action: t } = e;
            h({ action: t, analyticsLocations: f }),
                (0, o.Tu)({
                    action: t,
                    display: n,
                    activity: d,
                    entry: c,
                    stream: u,
                    outbox: p,
                    voiceChannelId: _,
                    analyticsLocations: f,
                    ...A,
                });
        },
        [h, A, n, d, u, c, p, _, f],
    );
}
