n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(522305),
    l = n(627363),
    s = n(625180),
    E = n(91242),
    _ = n(375802),
    o = n(933958),
    u = n(748975),
    A = n(165610);
function d(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: d, runAfterLaunchAttempt: c } = e,
        { data: I } = (0, l.YY)(t),
        T = (0, r.bG)([o.Ay], () => o.Ay.getCurrentEmbeddedActivity()),
        N = (0, r.bG)([E.A], () => E.A.getConnectedFrame()),
        S = (0, _.e)(I);
    return i.useCallback(async () => {
        if (null == t || null == I) return;
        let e = null != T && T.applicationId === t;
        if (null != N && N.applicationId === t)
            return void s.A.updateFrameLayoutMode({ applicationId: N.applicationId, layoutMode: A.y.FOCUSED });
        if (e) {
            let e = T.location;
            (0, u.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        d?.();
        try {
            S
                ? await s.A.launchFrame({ applicationId: t })
                : I?.bot?.id != null && (await (0, a.Q)({ appId: t, botId: I?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        c?.();
    }, [n, I, t, S, T, N, c, d]);
}
