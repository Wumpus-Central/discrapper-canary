"use strict";
n.d(t, { A: () => E });
var i = n(582128),
    r = n(17928),
    a = n(522305),
    s = n(627363),
    l = n(113854),
    o = n(91242),
    d = n(207371),
    c = n(933958),
    u = n(748975),
    _ = n(165610);
function E(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: E, runAfterLaunchAttempt: A } = e,
        { data: h } = (0, s.YY)(t),
        I = (0, r.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        f = (0, r.bG)([o.A], () => o.A.getConnectedFrame()),
        p = (0, d.x)(h);
    return i.useCallback(async () => {
        if (null == t || null == h) return;
        let e = null != I && I.applicationId === t;
        if (null != f && f.applicationId === t)
            return void l.A.updateFrameLayoutMode({ applicationId: f.applicationId, layoutMode: _.y.FOCUSED });
        if (e) {
            let e = I.location;
            (0, u.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        E?.();
        try {
            p
                ? await l.A.launchFrame({ applicationId: t })
                : h?.bot?.id != null && (await (0, a.Q)({ appId: t, botId: h?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        A?.();
    }, [n, h, t, p, I, f, A, E]);
}
