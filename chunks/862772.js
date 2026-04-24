"use strict";
let a;
n.d(t, { Ul: () => M, XQ: () => k, rg: () => L });
var i = n(64700),
    l = n(735438),
    r = n(17928),
    s = n(171491),
    c = n(841595),
    o = n(576622),
    d = n(495544),
    u = n(927813),
    m = n(403362),
    f = n(808247),
    h = n(228366),
    _ = n(773669);
function g(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let p = {};
function x() {
    if (a === _.default.locale) return !1;
    (p = {}), (a = _.default.locale);
}
class b extends r.Ay.Store {
    initialize() {
        this.waitFor(_.default), this.syncWith([_.default], x), (a = _.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return p[g(e, t)];
    }
}
let E = new b(h.h, {
    LOGOUT: function () {
        p = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = g(t, n);
        p = { ...p, [a]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: a } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = g(t, n);
        p = { ...p, [i]: { state: "success", data: a, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let a = g(t, n);
        if (p[a]?.state === "success") return !1;
        p = { ...p, [a]: { state: "error", fetchedAt: Date.now() } };
    },
});
var v = n(310209),
    A = n(96203),
    I = n(760716),
    N = n(652215);
function S(e) {
    let t = (0, A.A)({ userId: e }),
        n = (0, I.i)((e) => e.recommendationApplicationIds);
    return i.useMemo(() => (0, l.uniq)([N.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
var j = n(594832);
let C = 30 * u.A.Millis.MINUTE,
    y = { state: "success", data: new v.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function R(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: a,
            source: c = j.B5.USER_PROFILE,
            filterByApplicationIds: o = !1,
        } = e,
        u = (function (e) {
            let { userIds: t, numItems: n, applicationIds: a } = e,
                l = (0, r.bG)([E], () => E.getRecommendations(t, a));
            return (i.useEffect(() => {
                if (0 === t.length || 0 === a.length) return;
                let e = E.getRecommendations(t, a);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - C,
                        a = "success" === e.state && e.data.skus.length >= n;
                    if (!t && a) return;
                }
                f.A.fetchWishlistRecommendations(a, t, n);
            }, [t, a, n]),
            0 === t.length || 0 === a.length)
                ? y
                : l;
        })({
            userIds: i.useMemo(
                () =>
                    t.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [t],
            ),
            numItems: n,
            applicationIds: a,
        }),
        {
            sortedWishlistSkus: h,
            wishlistSkuIdToSku: _,
            wishlistSkusToUserAndReasonMap: g,
            wishlistsAreFetching: p,
            wishlistErrors: x,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: a } = e,
                l = (0, r.bG)([d.default], () => d.default.getId()),
                { wishlists: s, isFetching: c, errors: o } = (0, j.sv)({ wishlistIdsAndUsers: t, source: n }),
                u = i.useMemo(() => {
                    let e = s.filter(m.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == a || a.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: v.j.WISHLIST });
                    return t;
                }, [s, a]),
                f = i.useMemo(
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
                                        (null == a || a.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [s, a],
                );
            return {
                sortedWishlistSkus: i.useMemo(
                    () =>
                        Object.keys(f)
                            .sort((e, t) => {
                                let n = u[t] ?? {},
                                    a = u[e] ?? {},
                                    i = Object.keys(n).length - Object.keys(a).length;
                                if (0 !== i) return i;
                                let r = !!n[l];
                                return Number(!!a[l]) - Number(r);
                            })
                            .map((e) => f[e]),
                    [l, f, u],
                ),
                wishlistSkuIdToSku: f,
                wishlistSkusToUserAndReasonMap: u,
                wishlistsAreFetching: c,
                wishlistErrors: o,
            };
        })({ userIdsAndWishlistIds: t, source: c, applicationIdsFilter: o ? a : void 0 }),
        { filteredRecommendations: b, skusToUserAndReasonRecommendations: A } = i.useMemo(
            () =>
                null == u || "success" !== u.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: u.data.skus.filter((e) => !(e.id in _)),
                          skusToUserAndReasonRecommendations: u.data.skusToUserAndReason,
                      },
            [u, _],
        ),
        { combinedSkus: I, combinedSkusToUserAndReason: N } = i.useMemo(() => {
            let e = { ...A };
            for (let [t, n] of Object.entries(g)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...h, ...b], combinedSkusToUserAndReason: e };
        }, [h, b, g, A]),
        S = i.useMemo(
            () =>
                p || null == u || (null != u && "loading" === u.state)
                    ? "loading"
                    : x.filter(m.Vq).length > 0 || "error" === u.state
                      ? "error"
                      : "success",
            [p, u, x],
        ),
        R = i.useMemo(() => (0, l.uniq)([...b.map((e) => e.id), ...I.map((e) => e.id)]), [b, I]);
    return (
        (0, s.j)({ skuIds: R, location: "useWishlistRecommendationsWithWishlists" }),
        { recommendations: b, wishlistAndRecommendations: I, skusToUserAndReason: N, status: S }
    );
}
function T(e) {
    i.useEffect(() => {
        (0, o.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, r.cf)([c.A], () => ({ defaultWishlistId: c.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: i.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function L(e) {
    let { userId: t, numItems: n, source: a = j.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l, defaultWishlistId: r } = T(t),
        {
            wishlistAndRecommendations: s,
            skusToUserAndReason: c,
            status: o,
        } = R({ userIdsAndWishlistIds: l, applicationIds: S(t), numItems: n, source: a }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: u } = (function (e) {
            let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: a, numItems: l } = e;
            return {
                totalUnownedWishlistItemCount: i.useMemo(
                    () => t.filter((e) => null != n[e.id] && n[e.id][a] === v.j.WISHLIST).length,
                    [t, a, n],
                ),
                slicedWishlistAndRecommendations: i.useMemo(() => t.slice(0, l), [t, l]),
            };
        })({ wishlistAndRecommendations: s, skusToUserAndReason: c, userId: t, numItems: n });
    return {
        wishlistAndRecommendations: u,
        skusToUserAndReason: c,
        status: o,
        defaultWishlistId: r,
        totalUnownedWishlistItemCount: d,
    };
}
function k(e) {
    var t;
    let n,
        { applicationIds: a, userIds: l, numItems: s, source: d = j.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: m,
            status: f,
        } = R({
            userIdsAndWishlistIds:
                ((t = i.useMemo(() => l?.slice(0, 5), [l])),
                i.useEffect(() => {
                    t.forEach((e) => {
                        (0, o.A)(e);
                    });
                }, [t]),
                (n = (0, r.yK)([c.A], () => t.map((e) => c.A.getFirstWishlistId(e) ?? null))),
                i.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: a,
            numItems: s,
            source: d,
            filterByApplicationIds: !0,
        });
    return { recommendations: i.useMemo(() => u.slice(0, s), [u, s]), skusToUserAndReason: m, status: f };
}
function M(e) {
    let { userId: t, numItems: n, source: a = j.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l } = T(t),
        {
            recommendations: r,
            skusToUserAndReason: s,
            status: c,
        } = R({ userIdsAndWishlistIds: l, applicationIds: S(t), numItems: n, source: a });
    return { recommendations: i.useMemo(() => r.slice(0, n), [r, n]), skusToUserAndReason: s, status: c };
}
