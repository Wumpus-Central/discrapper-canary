"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    s = n(522305),
    a = n(627363),
    o = n(625180),
    l = n(91242),
    u = n(207371),
    c = n(933958),
    d = n(748975),
    _ = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: p } = e,
        { data: h } = (0, a.YY)(t),
        E = (0, i.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        m = (0, i.bG)([l.A], () => l.A.getConnectedFrame()),
        g = (0, u.e)(h);
    return r.useCallback(async () => {
        if (null == t || null == h) return;
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
                : h?.bot?.id != null && (await (0, s.Q)({ appId: t, botId: h?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        p?.();
    }, [n, h, t, g, E, m, p, f]);
}
