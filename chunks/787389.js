n.d(t, { A: () => A });
var r = n(582128),
    u = n(17928),
    l = n(522305),
    i = n(627363),
    o = n(625180),
    s = n(91242),
    a = n(25451),
    c = n(933958),
    d = n(748975),
    f = n(165610);
function A(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: A, runAfterLaunchAttempt: E } = e,
        { data: _ } = (0, i.YY)(t),
        p = (0, u.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        C = (0, u.bG)([s.A], () => s.A.getMainFrame()),
        I = (0, a.X)(_);
    return r.useCallback(async () => {
        if (null == t || null == _) return;
        let e = null != p && p.applicationId === t;
        if (null != C && C.applicationId === t)
            return void o.A.updateFrameLayoutMode({ frameId: C.id, layoutMode: f.y0.FOCUSED });
        if (e) {
            let e = p.location;
            (0, d.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        A?.();
        try {
            I
                ? await o.A.launchFrame({
                      applicationId: t,
                      surface: f.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : _?.bot?.id != null && (await (0, l.Q)({ appId: t, botId: _?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        E?.();
    }, [n, _, t, I, p, C, E, A]);
}
