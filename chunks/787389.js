n.d(t, { A: () => A });
var r = n(582128),
    u = n(17928),
    l = n(522305),
    i = n(627363),
    o = n(625180),
    s = n(91242),
    a = n(25451),
    d = n(933958),
    c = n(748975),
    f = n(165610);
function A(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: A, runAfterLaunchAttempt: E } = e,
        { data: _ } = (0, i.YY)(t),
        C = (0, u.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        p = (0, u.bG)([s.A], () => s.A.getMainFrame()),
        I = (0, a.X)(_);
    return r.useCallback(async () => {
        if (null == t || null == _) return;
        let e = null != C && C.applicationId === t;
        if (null != p && p.applicationId === t)
            return void o.A.updateFrameLayoutMode({ frameId: p.id, layoutMode: f.y0.FOCUSED });
        if (e) {
            let e = C.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
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
    }, [n, _, t, I, C, p, E, A]);
}
