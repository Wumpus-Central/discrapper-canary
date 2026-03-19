n.d(t, { A: () => x });
var a = n(627968),
    l = n(64700),
    i = n(793574),
    r = n(688810),
    s = n(317560),
    c = n(563988),
    o = n(305080),
    d = n(954506),
    u = n(818348),
    m = n(985018);
function x() {
    let { socialLayerStorefrontRecommendationsData: e } = (0, o.c)(),
        { analyticsLocations: t } = (0, r.Ay)([i.A.GAME_PROFILE]),
        n = l.useCallback(
            (n) => {
                e?.guildId != null &&
                    (0, s.R)({
                        skuId: n,
                        applicationId: e.application.id,
                        guildId: e.guildId,
                        isStorefront: !1,
                        analyticsLocations: t,
                    });
            },
            [e, t],
        );
    if (null == e) return null;
    let { skuIds: x } = e;
    return (0, a.jsx)(d.A, {
        title: m.intl.string(m.t.WDdlUb),
        onClickViewAll: u.tE,
        children: (0, a.jsx)(c.R, { skuIds: x, analyticsLocations: t, onCardClick: n }),
    });
}
