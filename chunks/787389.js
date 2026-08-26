n.d(t, { A: () => f });
var i = n(582128),
    r = n(17928),
    s = n(522305),
    o = n(627363),
    l = n(625180),
    a = n(91242),
    u = n(207371),
    d = n(933958),
    c = n(748975),
    C = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: E } = e,
        { data: m } = (0, o.YY)(t),
        p = (0, r.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        A = (0, r.bG)([a.A], () => a.A.getMainFrame()),
        T = (0, u.x)(m);
    return i.useCallback(async () => {
        if (null == t || null == m) return;
        let e = null != p && p.applicationId === t;
        if (null != A && A.applicationId === t)
            return void l.A.updateFrameLayoutMode({ frameId: A.id, layoutMode: C.y0.FOCUSED });
        if (e) {
            let e = p.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            T
                ? await l.A.launchFrame({ applicationId: t, surface: C.sd })
                : m?.bot?.id != null && (await (0, s.Q)({ appId: t, botId: m?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        E?.();
    }, [n, m, t, T, p, A, E, f]);
}
