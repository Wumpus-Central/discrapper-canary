n.d(t, { A: () => f });
var r = n(582128),
    u = n(17928),
    l = n(452295),
    i = n(627363),
    o = n(625180),
    s = n(91242),
    a = n(933958),
    c = n(748975),
    d = n(165610);
function f(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: A } = e,
        { data: E } = (0, i.YY)(t),
        T = (0, u.bG)([a.Ay], () => a.Ay.getCurrentEmbeddedActivity()),
        _ = (0, u.bG)([s.A], () => s.A.getMainFrame());
    return r.useCallback(async () => {
        if (null == t || null == E) return;
        let e = null != T && T.applicationId === t;
        if (null != _ && _.applicationId === t)
            return void o.A.updateFrameLayoutMode({ frameId: _.id, layoutMode: d.y0.FOCUSED });
        if (e) {
            let e = T.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        f?.();
        try {
            await l.A.launch({ applicationId: t, analyticsLocations: n });
        } catch (e) {}
        A?.();
    }, [n, E, t, T, _, A, f]);
}
