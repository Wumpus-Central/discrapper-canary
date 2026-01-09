n.d(t, {
    W: () => p,
    Z: () => g,
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
    return new o.Z({
        sku_id: e.id,
        sku_product_line: f.POd.SOCIAL_LAYER_GAME_ITEM,
        sku_name: e.name,
        sku: e,
    });
}
function m(e) {
    let { applicationId: t, numItems: n, userIds: a, isEligible: o, includeWishlists: s } = e,
        u = null == a ? void 0 : a.slice(0, l.JR),
        d = (0, i.e7)([c.Z], () => (null != t ? c.Z.recommendationsByApplicationsAndUsers(t, u) : void 0));
    return (
        r.useEffect(() => {
            o &&
                null != t &&
                null != u &&
                0 !== u.length &&
                0 !== n &&
                (0, l.g$)({
                    applicationId: t,
                    userIds: u,
                    maxRecommendations: n,
                    includeWishlists: s,
                });
        }, [t, u, o, n, s]),
        r.useMemo(() => {
            let e = null == d ? "loading" : d.state;
            return null == d || "success" !== d.state
                ? {
                      state: e,
                      recommendations: [],
                      skuIdToUserIdsReasons: {},
                  }
                : {
                      state: e,
                      recommendations: d.data.skus.slice(0, n).map((e) => _(e)),
                      skuIdToUserIdsReasons: d.data.skusToRecommendationReasons,
                  };
        }, [d, n])
    );
}
function h(e) {
    let { guildId: t, numItems: n, isEligible: a } = e,
        o = (0, i.e7)([c.Z], () => (null != t ? c.Z.getStorefrontData(t) : void 0));
    r.useEffect(() => {
        a && null != t && null == c.Z.getStorefrontData(t) && 0 !== n && (0, l.YL)(t, { eager: !1 });
    }, [t, n, a]);
    let u = r.useMemo(() => {
            if (null == o || null == o.storefront || "loading" === o.state || "partially-fetched" === o.state)
                return [];
            let e = o.storefront.pages.flatMap((e) => {
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
        }, [o, n]),
        d = (0, i.Wu)([s.Z], () => u.map((e) => s.Z.get(e)).filter((e) => null != e), [u]),
        f = r.useMemo(() => d.map((e) => _(e)), [d]);
    return {
        state: r.useMemo(
            () =>
                null == o || "loading" === o.state || "partially-fetched" === o.state || 0 === n
                    ? "loading"
                    : "error" === o.state
                      ? "error"
                      : "success",
            [o, n],
        ),
        recommendations: f,
        skuIdToUserIdsReasons: {},
    };
}
function g(e) {
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
        _ = c && null != s && s.length > 0,
        [g, E] = r.useState(s);
    r.useEffect(() => {
        E((e) => (null == e ? s : (0, a.E)(e, s) ? e : s));
    }, [s]);
    let {
            state: b,
            recommendations: y,
            skuIdToUserIdsReasons: O,
        } = m({
            applicationId: o,
            userIds: g,
            numItems: n,
            isEligible: _ && f,
            includeWishlists: l,
        }),
        v = _ && "error" !== b,
        { state: S, recommendations: I } = h({
            guildId: t,
            numItems: n,
            isEligible: !v && f,
        });
    return f && 0 !== n
        ? v
            ? {
                  state: b,
                  recommendations: y,
                  skuIdToUserIdsReasons: O,
              }
            : {
                  state: S,
                  recommendations: I,
                  skuIdToUserIdsReasons: {},
              }
        : {
              state: "success",
              recommendations: [],
              skuIdToUserIdsReasons: {},
          };
}
