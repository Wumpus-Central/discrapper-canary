n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(44724),
    o = n(317560),
    c = n(563988),
    d = n(409626),
    u = n(305080),
    m = n(954506),
    h = n(652215),
    f = n(985018);
function _(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: _ } = (0, u.c)(),
        { analyticsLocations: g } = (0, r.Ay)([i.A.GAME_PROFILE]),
        p = a.useCallback(() => {
            n?.guildId != null && (t(d.Ws.GameShop), _(), (0, s.default)({ guildId: n.guildId }));
        }, [n, t, _]),
        x = a.useCallback(
            (e, l) => {
                let a = n?.guildId;
                null != a &&
                    (t(d.Ws.GameShopItem),
                    (0, o.R)({
                        skuId: e,
                        applicationId: l,
                        isStorefront: !1,
                        analyticsLocations: g,
                        onClose: () => {
                            location.pathname.indexOf(h.BVt.CHANNELS_GAME_SHOP(a)) >= 0 && _();
                        },
                    }));
            },
            [t, _, g, n],
        );
    if (null == n) return null;
    let { skuIds: E } = n;
    return (0, l.jsx)(m.A, {
        title: f.intl.string(f.t.WDdlUb),
        onClickViewAll: p,
        children: (0, l.jsx)(c.R, { skuIds: E, analyticsLocations: g, onCardClick: x }),
    });
}
