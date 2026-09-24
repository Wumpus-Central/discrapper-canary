n.d(t, { A: () => f });
var i = n(582128),
    r = n(17928),
    s = n(522305),
    o = n(627363),
    u = n(625180),
    a = n(91242),
    l = n(207371),
    d = n(933958),
    c = n(748975),
    C = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: A } = e,
        { data: E } = (0, o.YY)(t),
        p = (0, r.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        I = (0, r.bG)([a.A], () => a.A.getMainFrame()),
        m = (0, l.x)(E);
    return i.useCallback(async () => {
        if (null == t || null == E) return;
        let e = null != p && p.applicationId === t;
        if (null != I && I.applicationId === t)
            return void u.A.updateFrameLayoutMode({ frameId: I.id, layoutMode: C.y0.FOCUSED });
        if (e) {
            let e = p.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            m
                ? await u.A.launchFrame({
                      applicationId: t,
                      surface: C.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : E?.bot?.id != null && (await (0, s.Q)({ appId: t, botId: E?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        A?.();
    }, [n, E, t, m, p, I, A, f]);
}
