"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    a = n(522305),
    s = n(627363),
    o = n(625180),
    l = n(91242),
    u = n(207371),
    c = n(933958),
    d = n(748975),
    _ = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: p } = e,
        { data: h } = (0, s.YY)(t),
        m = (0, i.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        g = (0, i.bG)([l.A], () => l.A.getConnectedFrame()),
        E = (0, u.e)(h);
    return r.useCallback(async () => {
        if (null == t || null == h) return;
        let e = null != m && m.applicationId === t;
        if (null != g && g.applicationId === t)
            return void o.A.updateFrameLayoutMode({ applicationId: g.applicationId, layoutMode: _.y.FOCUSED });
        if (e) {
            let e = m.location;
            (0, d.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            E
                ? await o.A.launchFrame({ applicationId: t })
                : h?.bot?.id != null && (await (0, a.Q)({ appId: t, botId: h?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        p?.();
    }, [n, h, t, E, m, g, p, f]);
}
