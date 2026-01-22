n.d(t, { A: () => p });
var r = n(64700),
    i = n(311907),
    a = n(522305),
    s = n(627363),
    o = n(625180),
    l = n(91242),
    c = n(207371),
    u = n(933958),
    d = n(748975),
    f = n(165610);
function p(e) {
    let { applicationId: t, analyticsLocations: n, runBeforeLaunchAttempt: p, runAfterLaunchAttempt: _ } = e,
        { data: h } = (0, s.YY)(t),
        m = (0, i.bG)([u.Ay], () => u.Ay.getCurrentEmbeddedActivity()),
        g = (0, i.bG)([l.A], () => l.A.getConnectedFrame()),
        E = (0, c.e)(h);
    return r.useCallback(async () => {
        if (null == t || null == h) return;
        let e = null != m && m.applicationId === t;
        if (null != g && g.applicationId === t)
            return void o.A.updateFrameLayoutMode({
                applicationId: g.applicationId,
                layoutMode: f.y.FOCUSED,
            });
        if (e) {
            let e = m.location;
            (0, d.A)("guild_id" in e ? e.guild_id : null, e);
            return;
        }
        null == p || p();
        try {
            if (E) await o.A.launchFrame({ applicationId: t });
            else {
                var r, i;
                (null == h || null == (r = h.bot) ? void 0 : r.id) != null &&
                    (await (0, a.Q)({
                        appId: t,
                        botId: null == h || null == (i = h.bot) ? void 0 : i.id,
                        analyticsLocations: null != n ? n : [],
                    }));
            }
        } catch (e) {}
        null == _ || _();
    }, [n, h, t, E, m, g, _, p]);
}
