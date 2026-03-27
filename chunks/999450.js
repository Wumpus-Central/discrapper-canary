n.d(t, { A: () => h });
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    c = n(317560),
    o = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    x = n(985018);
function h(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n } = (0, u.c)(),
        { analyticsLocations: h } = (0, r.Ay)([i.A.GAME_PROFILE]),
        f = l.useCallback(() => {
            n?.guildId != null && (t(d.Ws.GameShop), (0, s.default)({ guildId: n.guildId }));
        }, [n, t]),
        g = l.useCallback(
            (e, n) => {
                t(d.Ws.GameShopItem), (0, c.R)({ skuId: e, applicationId: n, isStorefront: !1, analyticsLocations: h });
            },
            [t, h],
        );
    if (null == n) return null;
    let { skuIds: p } = n;
    return (0, a.jsx)(m.A, {
        title: x.intl.string(x.t.WDdlUb),
        onClickViewAll: f,
        children: (0, a.jsx)(o.R, { skuIds: p, analyticsLocations: h, onCardClick: g }),
    });
}
