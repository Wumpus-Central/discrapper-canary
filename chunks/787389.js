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
        { data: _ } = (0, o.YY)(t),
        C = (0, u.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        I = (0, u.bG)([s.A], () => s.A.getMainFrame()),
        p = (0, a.X)(_);
    return r.useCallback(async () => {
        if (null == t || null == _) return;
        let e = null != C && C.applicationId === t;
        if (null != I && I.applicationId === t)
            return void l.A.updateFrameLayoutMode({ frameId: I.id, layoutMode: f.y0.FOCUSED });
        if (e) {
            let e = C.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        A?.();
        try {
            p
                ? await l.A.launchFrame({
                      applicationId: t,
                      surface: f.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : _?.bot?.id != null && (await (0, i.Q)({ appId: t, botId: _?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        E?.();
    }, [n, _, t, p, C, I, E, A]);
}
