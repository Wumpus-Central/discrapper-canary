var r = n(582128),
    u = n(855986),
    i = n(273626),
    l = n(627363),
    o = n(625180),
    a = n(91242),
    s = n(933958),
    c = n(748975),
    d = n(165610);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: f, runAfterLaunchAttempt: A } = e,
                { data: E } = (0, l.YY)(t),
                T = (0, u.bG)([s.Ay], () => s.Ay.getCurrentEmbeddedActivity()),
                _ = (0, u.bG)([a.A], () => a.A.getMainFrame());
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
                    await i.A.launch({ applicationId: t, analyticsLocations: n });
                } catch (e) {}
                A?.();
            }, [n, E, t, T, _, A, f]);
        },
    },
);
