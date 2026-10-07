n.d(t, { A: () => A });
var r = n(582128),
    u = n(17928),
    i = n(522305),
    o = n(627363),
    l = n(625180),
    s = n(91242),
    a = n(25451),
    d = n(933958),
    c = n(748975),
    f = n(165610);
function A(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: A, runAfterLaunchAttempt: E } = e,
        { data: C } = (0, o.YY)(t),
        p = (0, u.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        _ = (0, u.bG)([s.A], () => s.A.getMainFrame()),
        I = (0, a.X)(C);
    return r.useCallback(async () => {
        if (null == t || null == C) return;
        let e = null != p && p.applicationId === t;
        if (null != _ && _.applicationId === t)
            return void l.A.updateFrameLayoutMode({ frameId: _.id, layoutMode: f.y0.FOCUSED });
        if (e) {
            let e = p.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        A?.();
        try {
            I
                ? await l.A.launchFrame({
                      applicationId: t,
                      surface: f.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : C?.bot?.id != null && (await (0, i.Q)({ appId: t, botId: C?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        E?.();
    }, [n, C, t, I, p, _, E, A]);
}
