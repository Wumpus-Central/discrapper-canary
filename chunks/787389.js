n.d(t, { A: () => f });
var i = n(582128),
    r = n(17928),
    s = n(522305),
    o = n(627363),
    a = n(625180),
    l = n(91242),
    u = n(207371),
    d = n(933958),
    c = n(748975),
    C = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: E } = e,
        { data: m } = (0, o.YY)(t),
        A = (0, r.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        T = (0, r.bG)([l.A], () => l.A.getMainFrame()),
        p = (0, u.x)(m);
    return i.useCallback(async () => {
        if (null == t || null == m) return;
        let e = null != A && A.applicationId === t;
        if (null != T && T.applicationId === t)
            return void a.A.updateFrameLayoutMode({ frameId: T.id, layoutMode: C.y0.FOCUSED });
        if (e) {
            let e = A.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            p
                ? await a.A.launchFrame({
                      applicationId: t,
                      surface: C.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : m?.bot?.id != null && (await (0, s.Q)({ appId: t, botId: m?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        E?.();
    }, [n, m, t, p, A, T, E, f]);
}
