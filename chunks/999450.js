n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    l = n(877227),
    r = n(793574),
    s = n(688810),
    c = n(44724),
    o = n(317560),
    d = n(563988),
    u = n(409626),
    m = n(305080),
    x = n(954506),
    h = n(652215),
    f = n(985018);
function g(e) {
    let { trackAction: t } = e,
        { socialLayerStorefrontRecommendationsData: n, closeModal: g } = (0, m.c)(),
        { analyticsLocations: _ } = (0, s.Ay)([r.A.GAME_PROFILE]),
        p = i.useCallback(() => {
            n?.guildId != null && (t(u.Ws.GameShop), g(), (0, c.default)({ guildId: n.guildId }));
        }, [n, t, g]),
        v = i.useCallback(
            (e, a) => {
                let i = n?.guildId;
                null != i &&
                    (t(u.Ws.GameShopItem),
                    g(),
                    (0, o.R)({
                        skuId: e,
                        applicationId: a,
                        isStorefront: !1,
                        analyticsLocations: _,
                        onClose: () => {
                            (0, l.JK)().location.pathname.indexOf(h.BVt.CHANNELS_GAME_SHOP(i)) >= 0 && g();
                        },
                    }));
            },
            [t, g, _, n],
        );
    if (null == n) return null;
    let { skuIds: A } = n;
    return (0, a.jsx)(x.A, {
        title: f.intl.string(f.t.WDdlUb),
        onClickViewAll: p,
        children: (0, a.jsx)(d.R, { skuIds: A, analyticsLocations: _, onCardClick: v }),
    });
}
