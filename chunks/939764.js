n.d(t, { V: () => d });
var a = n(64700),
    l = n(223273),
    i = n(871123),
    r = n(594832),
    s = n(631784),
    o = n(287809),
    c = n(705751);
function d(e) {
    let t = o.default.getCurrentUser()?.id,
        n = a.useMemo(() => (null != t ? [t] : []), [t]),
        d = a.useMemo(() => {
            if (null != e && e.type === c.S7.GAME)
                return e.linkedGames?.find((e) => e.type === l.Mh.OFFICIAL && (0, i.Xg)(e.application))?.application;
        }, [e]),
        u = a.useMemo(() => (d?.id != null ? [d.id] : []), [d]),
        { recommendations: m, status: x } = (0, s.XQ)({
            applicationIds: u,
            userIds: n,
            numItems: 6,
            source: r.B5.USER_PROFILE,
        });
    return {
        socialLayerStorefrontRecommendationsData: a.useMemo(
            () =>
                null == d || null == d.guildId || "success" !== x || 0 === m.length
                    ? null
                    : { application: d, skuIds: m.map((e) => e.id), guildId: d.guildId },
            [d, x, m],
        ),
    };
}
