n.d(t, {
    W: () => p,
    Z: () => h,
}),
    n(361932),
    n(187205),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(902704),
    o = n(321947),
    s = n(55563),
    l = n(411935),
    c = n(210218),
    u = n(699955),
    d = n(868849),
    f = n(981631);
let p = 6;
function _(e) {
    let { applicationId: t, numItems: n, userIds: a, isEligible: s, includeWishlists: u } = e,
        d = null == a ? void 0 : a.slice(0, l.JR),
        p = (0, i.e7)([c.Z], () => (null != t ? c.Z.recommendationsByApplicationsAndUsers(t, d) : void 0));
    r.useEffect(() => {
        s &&
            null != t &&
            null != d &&
            0 !== d.length &&
            0 !== n &&
            (0, l.g$)({
                applicationId: t,
                userIds: d,
                maxRecommendations: n,
                includeWishlists: u,
            });
    }, [t, d, s, n, u]);
    let _ = r.useMemo(() => (null == p || "success" !== p.state ? [] : p.data.skus.slice(0, n)), [p, n]),
        m = r.useMemo(
            () =>
                null == p || "success" !== p.state
                    ? []
                    : _.map(
                          (e) =>
                              new o.Z({
                                  sku_id: e.id,
                                  sku_product_line: f.POd.SOCIAL_LAYER_GAME_ITEM,
                                  sku_name: e.name,
                                  sku: e,
                              }),
                      ),
            [_, p],
        );
    return {
        state: r.useMemo(() => (null == p ? "loading" : p.state), [p]),
        recommendations: m,
        skuIdToUserIdsReasons: r.useMemo(
            () => (null == p || "success" !== p.state ? {} : p.data.skusToRecommendationReasons),
            [p],
        ),
    };
}
function m(e) {
    let { guildId: t, numItems: n, isEligible: a } = e,
        u = (0, i.e7)([c.Z], () => (null != t ? c.Z.getStorefrontData(t) : void 0));
    r.useEffect(() => {
        a && null != t && null == c.Z.getStorefrontData(t) && 0 !== n && (0, l.YL)(t, { eager: !1 });
    }, [t, n, a]);
    let d = r.useMemo(() => {
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
        p = (0, i.Wu)([s.Z], () => d.map((e) => s.Z.get(e)).filter((e) => null != e), [d]),
        _ = r.useMemo(
            () =>
                p.map(
                    (e) =>
                        new o.Z({
                            sku_id: e.id,
                            sku_product_line: f.POd.SOCIAL_LAYER_GAME_ITEM,
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
        skuIdToUserIdsReasons: {},
    };
}
function h(e) {
    let {
            guildId: t,
            numWishlistItems: n = p,
            location: i,
            applicationId: o,
            userIds: s,
            includeWishlists: l = !1,
        } = e,
        c = (0, d.Q)({ location: i }),
        f = (0, u.cZ)({ location: i }),
        [h, g] = r.useState(s);
    r.useEffect(() => {
        g((e) => (null == e ? s : (0, a.E)(e, s) ? e : s));
    }, [s]);
    let E = r.useMemo(() => c && null != s && s.length > 0, [c, s]),
        {
            state: b,
            recommendations: y,
            skuIdToUserIdsReasons: O,
        } = _({
            applicationId: o,
            userIds: h,
            numItems: n,
            isEligible: E && f,
            includeWishlists: l,
        }),
        v = r.useMemo(() => "error" !== b && E, [E, b]),
        { state: S, recommendations: I } = m({
            guildId: t,
            numItems: n,
            isEligible: !v && f,
        });
    return {
        state: r.useMemo(() => (f && 0 !== n ? (v ? b : S) : "success"), [f, n, v, b, S]),
        recommendations: r.useMemo(() => (f && 0 !== n ? (v ? y : I) : []), [f, n, v, y, I]),
        skuIdToUserIdsReasons: O,
    };
}
