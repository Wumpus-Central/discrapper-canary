n.d(t, { A: () => E });
var r = n(582128),
    u = n(17928),
    i = n(452295),
    o = n(627363),
    l = n(625180),
    s = n(91242),
    a = n(933958),
    c = n(748975),
    d = n(165610);
function E(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: E, runAfterLaunchAttempt: f } = e,
        { data: _ } = (0, o.YY)(t),
        A = (0, u.bG)([a.Ay], () => a.Ay.getCurrentEmbeddedActivity()),
        C = (0, u.bG)([s.A], () => s.A.getMainFrame());
    return r.useCallback(async () => {
        if (null == t || null == _) return;
        let e = null != A && A.applicationId === t;
        if (null != C && C.applicationId === t)
            return void l.A.updateFrameLayoutMode({ frameId: C.id, layoutMode: d.y0.FOCUSED });
        if (e) {
            let e = A.location;
            (0, c.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        E?.();
        try {
            await i.A.launch({ applicationId: t, analyticsLocations: n });
        } catch (e) {}
        f?.();
    }, [n, _, t, A, C, f, E]);
}
