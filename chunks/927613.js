n.d(t, {
    W: () => f,
    Z: () => m,
}),
    n(361932),
    n(187205),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(321947),
    o = n(55563),
    s = n(411935),
    l = n(210218),
    c = n(699955),
    u = n(868849),
    d = n(981631);
let f = 6;
function p(e) {
    let { applicationId: t, numItems: n, userIds: o, isEligible: c, includeWishlists: u } = e,
        f = (0, i.e7)([l.Z], () => l.Z.recommendationsByApplicationsAndUsers(t, o));
    r.useEffect(() => {
        c &&
            null != o &&
            0 !== o.length &&
            0 !== n &&
            (0, s.g$)({
                applicationId: t,
                userIds: o,
                maxRecommendations: n,
                includeWishlists: u,
            });
    }, [t, o, c, n, u]);
    let p = r.useMemo(() => (null == f || "success" !== f.state ? [] : f.data.skus.slice(0, n)), [f, n]),
        _ = r.useMemo(
            () =>
                null == f || "success" !== f.state
                    ? []
                    : p.map(
                          (e) =>
                              new a.Z({
                                  sku_id: e.id,
                                  sku_product_line: d.POd.SOCIAL_LAYER_GAME_ITEM,
                                  sku_name: e.name,
                                  sku: e,
                              }),
                      ),
            [p, f],
        );
    return {
        state: r.useMemo(() => (null == f ? "loading" : f.state), [f]),
        recommendations: _,
    };
}
function _(e) {
    let { guildId: t, numItems: n, isEligible: c } = e,
        u = (0, i.e7)([l.Z], () => l.Z.getStorefrontData(t));
    r.useEffect(() => {
        c && null == l.Z.getStorefrontData(t) && 0 !== n && (0, s.YL)(t, !1);
    }, [t, n, c]);
    let f = r.useMemo(() => {
            if (null == u || null == u.storefront || "loading" === u.state || "partially-fetched" === u.state)
                return [];
            let e = u.storefront.pages.flatMap((e) => {
                    var t, n;
                    return [
                        ...e.skuIds,
                        ...(null != (n = null == (t = e.sections) ? void 0 : t.flatMap((e) => e.skuIds)) ? n : []),
                    ];
                }),
                t = [],
                r = new Set();
            for (let i of e) if (!r.has(i) && (t.push(i), r.add(i), t.length >= n)) break;
            return t;
        }, [u, n]),
        p = (0, i.Wu)([o.Z], () => f.map((e) => o.Z.get(e)).filter((e) => null != e), [f]),
        _ = r.useMemo(
            () =>
                p.map(
                    (e) =>
                        new a.Z({
                            sku_id: e.id,
                            sku_product_line: d.POd.SOCIAL_LAYER_GAME_ITEM,
                            sku_name: e.name,
                            sku: e,
                        }),
                ),
            [p],
        );
    return {
        state: r.useMemo(
            () =>
                null == u || "loading" === u.state || "partially-fetched" === u.state || 0 === n
                    ? "loading"
                    : "error" === u.state
                      ? "error"
                      : "success",
            [u, n],
        ),
        recommendations: _,
    };
}
function m(e) {
    let {
            guildId: t,
            numWishlistItems: n = f,
            location: i,
            applicationId: a,
            userIds: o,
            includeWishlists: s = !1,
        } = e,
        l = (0, u.Q)({ location: i }),
        d = (0, c.cZ)({ location: i }),
        m = r.useMemo(() => l && null != o && o.length > 0, [l, o]),
        { state: h, recommendations: g } = _({
            guildId: t,
            numItems: n,
            isEligible: !m && d,
        }),
        { state: E, recommendations: b } = p({
            applicationId: a,
            userIds: o,
            numItems: n,
            isEligible: m && d,
            includeWishlists: s,
        });
    return {
        state: r.useMemo(() => (d && 0 !== n ? (m ? E : h) : "success"), [d, n, m, E, h]),
        recommendations: r.useMemo(() => (d && 0 !== n ? (m ? b : g) : []), [d, n, m, b, g]),
    };
}
