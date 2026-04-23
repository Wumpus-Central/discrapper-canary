let l;
n.d(t, { Ul: () => w, XQ: () => k, rg: () => T });
var a = n(64700),
    i = n(735438),
    r = n(17928),
    s = n(171491),
    o = n(841595),
    c = n(576622),
    d = n(495544),
    u = n(927813),
    m = n(403362),
    h = n(808247),
    f = n(228366),
    _ = n(773669);
function g(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let p = {};
function x() {
    if (l === _.default.locale) return !1;
    (p = {}), (l = _.default.locale);
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(_.default), this.syncWith([_.default], x), (l = _.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return p[g(e, t)];
    }
}
let v = new E(f.h, {
    LOGOUT: function () {
        p = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let l = g(t, n);
        p = { ...p, [l]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: l } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = g(t, n);
        p = { ...p, [a]: { state: "success", data: l, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let l = g(t, n);
        if (p[l]?.state === "success") return !1;
        p = { ...p, [l]: { state: "error", fetchedAt: Date.now() } };
    },
});
var A = n(310209),
    I = n(96203),
    b = n(760716),
    j = n(652215);
function C(e) {
    let t = (0, I.A)({ userId: e }),
        n = (0, b.i)((e) => e.recommendationApplicationIds);
    return a.useMemo(() => (0, i.uniq)([j.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
var N = n(594832);
let S = 30 * u.A.Millis.MINUTE,
    y = { state: "success", data: new A.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function R(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: l,
            source: o = N.B5.USER_PROFILE,
            filterByApplicationIds: c = !1,
        } = e,
        u = (function (e) {
            let { userIds: t, numItems: n, applicationIds: l } = e,
                i = (0, r.bG)([v], () => v.getRecommendations(t, l));
            return (a.useEffect(() => {
                if (0 === t.length || 0 === l.length) return;
                let e = v.getRecommendations(t, l);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - S,
                        l = "success" === e.state && e.data.skus.length >= n;
                    if (!t && l) return;
                }
                h.A.fetchWishlistRecommendations(l, t, n);
            }, [t, l, n]),
            0 === t.length || 0 === l.length)
                ? y
                : i;
        })({
            userIds: a.useMemo(
                () =>
                    t.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [t],
            ),
            numItems: n,
            applicationIds: l,
        }),
        {
            sortedWishlistSkus: f,
            wishlistSkuIdToSku: _,
            wishlistSkusToUserAndReasonMap: g,
            wishlistsAreFetching: p,
            wishlistErrors: x,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: l } = e,
                i = (0, r.bG)([d.default], () => d.default.getId()),
                { wishlists: s, isFetching: o, errors: c } = (0, N.sv)({ wishlistIdsAndUsers: t, source: n }),
                u = a.useMemo(() => {
                    let e = s.filter(m.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == l || l.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: A.j.WISHLIST });
                    return t;
                }, [s, l]),
                h = a.useMemo(
                    () =>
                        Object.fromEntries(
                            s
                                .filter(m.Vq)
                                .flatMap((e) => e.items)
                                .filter(
                                    (e) =>
                                        null != e &&
                                        null != e.sku &&
                                        !e.isOwned &&
                                        (null == l || l.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [s, l],
                );
            return {
                sortedWishlistSkus: a.useMemo(
                    () =>
                        Object.keys(h)
                            .sort((e, t) => {
                                let n = u[t] ?? {},
                                    l = u[e] ?? {},
                                    a = Object.keys(n).length - Object.keys(l).length;
                                if (0 !== a) return a;
                                let r = !!n[i];
                                return Number(!!l[i]) - Number(r);
                            })
                            .map((e) => h[e]),
                    [i, h, u],
                ),
                wishlistSkuIdToSku: h,
                wishlistSkusToUserAndReasonMap: u,
                wishlistsAreFetching: o,
                wishlistErrors: c,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: c ? l : void 0 }),
        { filteredRecommendations: E, skusToUserAndReasonRecommendations: I } = a.useMemo(
            () =>
                null == u || "success" !== u.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: u.data.skus.filter((e) => !(e.id in _)),
                          skusToUserAndReasonRecommendations: u.data.skusToUserAndReason,
                      },
            [u, _],
        ),
        { combinedSkus: b, combinedSkusToUserAndReason: j } = a.useMemo(() => {
            let e = { ...I };
            for (let [t, n] of Object.entries(g)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...f, ...E], combinedSkusToUserAndReason: e };
        }, [f, E, g, I]),
        C = a.useMemo(
            () =>
                p || null == u || (null != u && "loading" === u.state)
                    ? "loading"
                    : x.filter(m.Vq).length > 0 || "error" === u.state
                      ? "error"
                      : "success",
            [p, u, x],
        ),
        R = a.useMemo(() => (0, i.uniq)([...E.map((e) => e.id), ...b.map((e) => e.id)]), [E, b]);
    return (
        (0, s.j)({ skuIds: R, location: "useWishlistRecommendationsWithWishlists" }),
        { recommendations: E, wishlistAndRecommendations: b, skusToUserAndReason: j, status: C }
    );
}
function L(e) {
    a.useEffect(() => {
        (0, c.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, r.cf)([o.A], () => ({ defaultWishlistId: o.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: a.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function T(e) {
    let { userId: t, numItems: n, source: l = N.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i, defaultWishlistId: r } = L(t),
        {
            wishlistAndRecommendations: s,
            skusToUserAndReason: o,
            status: c,
        } = R({ userIdsAndWishlistIds: i, applicationIds: C(t), numItems: n, source: l }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: u } = (function (e) {
            let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: l, numItems: i } = e;
            return {
                totalUnownedWishlistItemCount: a.useMemo(
                    () => t.filter((e) => null != n[e.id] && n[e.id][l] === A.j.WISHLIST).length,
                    [t, l, n],
                ),
                slicedWishlistAndRecommendations: a.useMemo(() => t.slice(0, i), [t, i]),
            };
        })({ wishlistAndRecommendations: s, skusToUserAndReason: o, userId: t, numItems: n });
    return {
        wishlistAndRecommendations: u,
        skusToUserAndReason: o,
        status: c,
        defaultWishlistId: r,
        totalUnownedWishlistItemCount: d,
    };
}
function k(e) {
    var t;
    let n,
        { applicationIds: l, userIds: i, numItems: s, source: d = N.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: m,
            status: h,
        } = R({
            userIdsAndWishlistIds:
                ((t = a.useMemo(() => i?.slice(0, 5), [i])),
                a.useEffect(() => {
                    t.forEach((e) => {
                        (0, c.A)(e);
                    });
                }, [t]),
                (n = (0, r.yK)([o.A], () => t.map((e) => o.A.getFirstWishlistId(e) ?? null))),
                a.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: l,
            numItems: s,
            source: d,
            filterByApplicationIds: !0,
        });
    return { recommendations: a.useMemo(() => u.slice(0, s), [u, s]), skusToUserAndReason: m, status: h };
}
function w(e) {
    let { userId: t, numItems: n, source: l = N.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i } = L(t),
        {
            recommendations: r,
            skusToUserAndReason: s,
            status: o,
        } = R({ userIdsAndWishlistIds: i, applicationIds: C(t), numItems: n, source: l });
    return { recommendations: a.useMemo(() => r.slice(0, n), [r, n]), skusToUserAndReason: s, status: o };
}
