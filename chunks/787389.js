n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    a = n(522305),
    l = n(627363),
    s = n(625180),
    o = n(91242),
    u = n(375802),
    _ = n(933958),
    E = n(748975),
    A = n(165610);
function c(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: c, runAfterLaunchAttempt: d } = e,
        { data: I } = (0, l.YY)(t),
        T = (0, r.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
        N = (0, r.bG)([o.A], () => o.A.getConnectedFrame()),
        S = (0, u.e)(I);
    return i.useCallback(async () => {
        if (null == t || null == I) return;
        let e = null != T && T.applicationId === t;
        if (null != N && N.applicationId === t)
            return void s.A.updateFrameLayoutMode({ applicationId: N.applicationId, layoutMode: A.y.FOCUSED });
        if (e) {
            let e = T.location;
            (0, E.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        c?.();
        try {
            S
                ? await s.A.launchFrame({ applicationId: t })
                : I?.bot?.id != null && (await (0, a.Q)({ appId: t, botId: I?.bot?.id, analyticsLocations: n ?? [] }));
        } catch (e) {}
        d?.();
    }, [n, I, t, S, T, N, d, c]);
}
