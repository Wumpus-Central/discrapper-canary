n.d(t, { A: () => E });
var r = n(582128),
    u = n(17928),
    i = n(522305),
    o = n(627363),
    l = n(625180),
    s = n(91242),
    a = n(25451),
    c = n(933958),
    d = n(748975),
    f = n(165610);
function E(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: E, runAfterLaunchAttempt: A } = e,
        { data: _ } = (0, o.YY)(t),
        C = (0, u.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        I = (0, u.bG)([s.A], () => s.A.getMainFrame()),
        T = (0, a.X)(_);
    return r.useCallback(async () => {
        if (null == t || null == _) return;
        let e = null != C && C.applicationId === t;
        if (null != I && I.applicationId === t)
            return void l.A.updateFrameLayoutMode({ frameId: I.id, layoutMode: f.y0.FOCUSED });
        if (e) {
            let e = C.location;
            (0, d.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        E?.();
        try {
            T
                ? await l.A.launchFrame({
                      applicationId: t,
                      surface: f.sd,
                      analyticsContext: { isStart: !0, analyticsLocations: n },
                  })
                : _?.bot?.id != null && (await (0, i.Q)({ appId: t, botId: _?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        A?.();
    }, [n, _, t, T, C, I, A, E]);
}
