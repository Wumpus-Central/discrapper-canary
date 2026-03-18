n.d(t, { V: () => u });
var a = n(64700),
    l = n(311907),
    i = n(223273),
    r = n(832163),
    s = n(594832),
    o = n(631784),
    c = n(287809),
    d = n(705751);
function u(e) {
    let t = c.default.getCurrentUser()?.id,
        n = a.useMemo(() => (null != t ? [t] : []), [t]),
        u = (0, l.bG)([r.A], () => r.A.getStorefrontDetectableGameAndApplicationIds()),
        m = a.useMemo(() => {
            if (null != e && e.type === d.S7.GAME)
                return e.linkedGames?.find(
                    (e) => e.type === i.Mh.OFFICIAL && null != e.application && u.has(e.application.id),
                )?.application;
        }, [e, u]),
        x = a.useMemo(() => (m?.id != null ? [m.id] : []), [m]),
        { recommendations: f, status: h } = (0, o.XQ)({
            applicationIds: x,
            userIds: n,
            numItems: 6,
            source: s.B5.USER_PROFILE,
        });
    return {
        socialLayerStorefrontRecommendationsData: a.useMemo(
            () =>
                null == m || null == m.guildId || "success" !== h || 0 === f.length
                    ? null
                    : { application: m, skuIds: f.map((e) => e.id), guildId: m.guildId },
            [m, h, f],
        ),
    };
}
