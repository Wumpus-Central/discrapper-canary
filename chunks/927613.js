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
        d = (0, i.e7)([c.Z], () => (null != t ? c.Z.recommendationsByApplicationsAndUsers(t, a) : void 0));
    r.useEffect(() => {
        s &&
            null != t &&
            null != a &&
            0 !== a.length &&
            0 !== n &&
            (0, l.g$)({
                applicationId: t,
                userIds: a,
                maxRecommendations: n,
                includeWishlists: u,
            });
    }, [t, a, s, n, u]);
    let p = r.useMemo(() => (null == d || "success" !== d.state ? [] : d.data.skus.slice(0, n)), [d, n]),
        _ = r.useMemo(
            () =>
                null == d || "success" !== d.state
                    ? []
                    : p.map(
                          (e) =>
                              new o.Z({
                                  sku_id: e.id,
                                  sku_product_line: f.POd.SOCIAL_LAYER_GAME_ITEM,
                                  sku_name: e.name,
                                  sku: e,
                              }),
                      ),
            [p, d],
        );
    return {
        state: r.useMemo(() => (null == d ? "loading" : d.state), [d]),
        recommendations: _,
    };
}
function m(e) {
    let { guildId: t, numItems: n, isEligible: a } = e,
        u = (0, i.e7)([c.Z], () => (null != t ? c.Z.getStorefrontData(t) : void 0));
    r.useEffect(() => {
        a && null != t && null == c.Z.getStorefrontData(t) && 0 !== n && (0, l.YL)(t, !1);
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
        h = r.useMemo(() => c && null != s && s.length > 0, [c, s]),
        { state: g, recommendations: E } = m({
            guildId: t,
            numItems: n,
            isEligible: !h && f,
        }),
        [b, y] = r.useState(s);
    r.useEffect(() => {
        y((e) => (null == e ? s : (0, a.E)(e, s) ? e : s));
    }, [s]);
    let { state: O, recommendations: v } = _({
        applicationId: o,
        userIds: b,
        numItems: n,
        isEligible: h && f,
        includeWishlists: l,
    });
    return {
        state: r.useMemo(() => (f && 0 !== n ? (h ? O : g) : "success"), [f, n, h, O, g]),
        recommendations: r.useMemo(() => (f && 0 !== n ? (h ? v : E) : []), [f, n, h, v, E]),
    };
}
