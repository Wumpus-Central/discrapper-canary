"use strict";
n.d(t, { A: () => f });
var i = n(64700),
    r = n(17928),
    s = n(522305),
    a = n(627363),
    o = n(113854),
    l = n(91242),
    u = n(375802),
    c = n(933958),
    d = n(748975),
    _ = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: h } = e,
        { data: p } = (0, a.YY)(t),
        E = (0, r.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        m = (0, r.bG)([l.A], () => l.A.getConnectedFrame()),
        g = (0, u.e)(p);
    return i.useCallback(async () => {
        if (null == t || null == p) return;
        let e = null != E && E.applicationId === t;
        if (null != m && m.applicationId === t)
            return void o.A.updateFrameLayoutMode({ applicationId: m.applicationId, layoutMode: _.y.FOCUSED });
        if (e) {
            let e = E.location;
            (0, d.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            g
                ? await o.A.launchFrame({ applicationId: t })
                : p?.bot?.id != null && (await (0, s.Q)({ appId: t, botId: p?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        h?.();
    }, [n, p, t, g, E, m, h, f]);
}
