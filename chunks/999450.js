n.d(t, { A: () => f });
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    x = n(652215),
    h = n(985018);
function f(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: f } = (0, u.c)(),
        { analyticsLocations: g } = (0, r.Ay)([i.A.GAME_PROFILE]),
        p = l.useCallback(() => {
            n?.guildId != null && (t(d.Ws.GameShop), f(), (0, s.default)({ guildId: n.guildId }));
        }, [n, t, f]),
        _ = l.useCallback(
            (e, a) => {
                let l = n?.guildId;
                null != l &&
                    (t(d.Ws.GameShopItem),
                    (0, o.R)({
                        skuId: e,
                        applicationId: a,
                        isStorefront: !1,
                        analyticsLocations: g,
                        onClose: () => {
                            location.pathname.indexOf(x.BVt.CHANNELS_GAME_SHOP(l)) >= 0 && f();
                        },
                    }));
            },
            [t, f, g, n],
        );
    if (null == n) return null;
    let { skuIds: v } = n;
    return (0, a.jsx)(m.A, {
        title: h.intl.string(h.t.WDdlUb),
        onClickViewAll: p,
        children: (0, a.jsx)(c.R, { skuIds: v, analyticsLocations: g, onCardClick: _ }),
    });
}
