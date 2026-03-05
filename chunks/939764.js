"use strict";
n.d(t, { V: () => x });
var i = n(64700),
    l = n(311907),
    a = n(793574),
    r = n(223273),
    s = n(871123),
    c = n(733391),
    o = n(832163),
    d = n(916023),
    u = n(287809),
    m = n(705751);
function x(e) {
    let t = (0, d.kt)({ location: a.A.GAME_PROFILE }),
        n = u.default.getCurrentUser()?.id,
        x = i.useMemo(() => (null != n ? [n] : []).slice(0, c.g9), [n]),
        h = i.useMemo(() => {
            if (null != e && t && e.type === m.S7.GAME)
                return e.linkedGames?.find((e) => e.type === r.Mh.OFFICIAL && (0, s.Xg)(e.application))?.application;
        }, [e, t]),
        f = (0, l.bG)([o.A], () => (null != h ? o.A.recommendationsByApplicationsAndUsers(h.id, x) : void 0));
    return (
        i.useEffect(() => {
            null != h && 0 !== x.length && (0, c.Xg)({ applicationId: h.id, userIds: x, includeWishlists: !1 });
        }, [h, x]),
        {
            socialLayerStorefrontRecommendationsData: i.useMemo(
                () =>
                    null == h || null == h.guildId || null == f || "success" !== f.state || 0 === f.data.skus.length
                        ? null
                        : { application: h, skuIds: f.data.skus.map((e) => e.id), guildId: h.guildId },
                [h, f],
            ),
        }
    );
}
