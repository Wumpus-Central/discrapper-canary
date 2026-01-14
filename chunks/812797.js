n.d(t, {
    Bz: () => f,
    MM: () => u,
    VO: () => d,
    fR: () => p,
    zc: () => c,
}),
    n(388685);
var r = n(442837),
    i = n(353647),
    a = n(26033),
    o = n(594190),
    s = n(621853),
    l = n(158776);
function c(e) {
    let { userIds: t, gameIds: n } = e;
    return (0, r.e7)(
        [i.Z],
        () =>
            t.some((e) => {
                var t;
                return null == (t = i.Z.getUserOutbox(e))
                    ? void 0
                    : t.entries.some((e) => null != e && (0, a.dX)(e) && n.has(e.extra.application_id));
            }),
        [n, t],
    );
}
function u(e) {
    let { userIds: t, guildIdsWithGameStores: n } = e;
    return (0, r.e7)([s.Z], () => {
        for (let e of t) {
            let t = s.Z.getMutualGuilds(e);
            if (null != t) {
                for (let e of t) if (n.has(e.guild.id)) return !0;
            }
        }
        return !1;
    }, [n, t]);
}
function d(e) {
    let { userIds: t, gameIds: n } = e;
    return (0, r.e7)([l.Z], () => {
        for (let e of t)
            for (let t of l.Z.getActivities(e)) if (null != t.application_id && n.has(t.application_id)) return !0;
        return !1;
    }, [n, t]);
}
function f(e) {
    let { gameIds: t } = e;
    return (0, r.e7)([o.ZP], () => o.ZP.getGamesSeen(!1, !1).some((e) => null != e.id && t.has(e.id)), [t]);
}
function p(e) {
    let { gameIds: t } = e;
    return (0, r.e7)(
        [o.ZP],
        () => o.ZP.getRunningGames().some((e) => null != e.id && t.has(e.id) && o.ZP.isDetectionEnabled(e)),
        [t],
    );
}
