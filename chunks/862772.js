"use strict";
let i;
n.d(t, { Ul: () => P, XQ: () => M, rg: () => b });
var r = n(64700),
    a = n(735438),
    s = n(17928),
    l = n(435658),
    o = n(321191),
    d = n(903209),
    c = n(280450),
    u = n(927813),
    _ = n(403362),
    E = n(808247),
    A = n(228366),
    h = n(773669);
function I(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let f = {};
function p() {
    if (i === h.default.locale) return !1;
    (f = {}), (i = h.default.locale);
}
class T extends s.Ay.Store {
    initialize() {
        this.waitFor(h.default), this.syncWith([h.default], p), (i = h.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return f[I(e, t)];
    }
}
let m = new T(A.h, {
    LOGOUT: function () {
        f = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = I(t, n);
        f = { ...f, [i]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: i } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let r = I(t, n);
        f = { ...f, [r]: { state: "success", data: i, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = I(t, n);
        if (f[i]?.state === "success") return !1;
        f = { ...f, [i]: { state: "error", fetchedAt: Date.now() } };
    },
});
var g = n(310209),
    S = n(96203),
    N = n(760716),
    C = n(652215);
function O(e) {
    let t = (0, S.A)({ userId: e }),
        n = (0, N.i)((e) => e.recommendationApplicationIds);
    return r.useMemo(() => (0, a.uniq)([C.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
var R = n(561794);
let L = 30 * u.A.Millis.MINUTE,
    D = { state: "success", data: new g.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function y(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: i,
            source: o = R.B5.USER_PROFILE,
            filterByApplicationIds: d = !1,
        } = e,
        u = (function (e) {
            let { userIds: t, numItems: n, applicationIds: i } = e,
                a = (0, s.bG)([m], () => m.getRecommendations(t, i));
            return (r.useEffect(() => {
                if (0 === t.length || 0 === i.length) return;
                let e = m.getRecommendations(t, i);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - L,
                        i = "success" === e.state && e.data.skus.length >= n;
                    if (!t && i) return;
                }
                E.A.fetchWishlistRecommendations(i, t, n);
            }, [t, i, n]),
            0 === t.length || 0 === i.length)
                ? D
                : a;
        })({
            userIds: r.useMemo(
                () =>
                    t.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [t],
            ),
            numItems: n,
            applicationIds: i,
        }),
        {
            sortedWishlistSkus: A,
            wishlistSkuIdToSku: h,
            wishlistSkusToUserAndReasonMap: I,
            wishlistsAreFetching: f,
            wishlistErrors: p,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: i } = e,
                a = (0, s.bG)([c.default], () => c.default.getId()),
                { wishlists: l, isFetching: o, errors: d } = (0, R.sv)({ wishlistIdsAndUsers: t, source: n }),
                u = r.useMemo(() => {
                    let e = l.filter(_.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == i || i.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: g.j.WISHLIST });
                    return t;
                }, [l, i]),
                E = r.useMemo(
                    () =>
                        Object.fromEntries(
                            l
                                .filter(_.Vq)
                                .flatMap((e) => e.items)
                                .filter(
                                    (e) =>
                                        null != e &&
                                        null != e.sku &&
                                        !e.isOwned &&
                                        (null == i || i.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [l, i],
                );
            return {
                sortedWishlistSkus: r.useMemo(
                    () =>
                        Object.keys(E)
                            .sort((e, t) => {
                                let n = u[t] ?? {},
                                    i = u[e] ?? {},
                                    r = Object.keys(n).length - Object.keys(i).length;
                                if (0 !== r) return r;
                                let s = !!n[a];
                                return Number(!!i[a]) - Number(s);
                            })
                            .map((e) => E[e]),
                    [a, E, u],
                ),
                wishlistSkuIdToSku: E,
                wishlistSkusToUserAndReasonMap: u,
                wishlistsAreFetching: o,
                wishlistErrors: d,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: d ? i : void 0 }),
        { filteredRecommendations: T, skusToUserAndReasonRecommendations: S } = r.useMemo(
            () =>
                null == u || "success" !== u.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: u.data.skus.filter((e) => !(e.id in h)),
                          skusToUserAndReasonRecommendations: u.data.skusToUserAndReason,
                      },
            [u, h],
        ),
        { combinedSkus: N, combinedSkusToUserAndReason: C } = r.useMemo(() => {
            let e = { ...S };
            for (let [t, n] of Object.entries(I)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...A, ...T], combinedSkusToUserAndReason: e };
        }, [A, T, I, S]),
        O = r.useMemo(
            () =>
                f || null == u || (null != u && "loading" === u.state)
                    ? "loading"
                    : p.filter(_.Vq).length > 0 || "error" === u.state
                      ? "error"
                      : "success",
            [f, u, p],
        ),
        y = r.useMemo(() => (0, a.uniq)([...T.map((e) => e.id), ...N.map((e) => e.id)]), [T, N]);
    return (
        (0, l.j)({ skuIds: y }),
        { recommendations: T, wishlistAndRecommendations: N, skusToUserAndReason: C, status: O }
    );
}
function v(e) {
    r.useEffect(() => {
        (0, d.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, s.cf)([o.A], () => ({ defaultWishlistId: o.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function b(e) {
    let { userId: t, numItems: n, source: i = R.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: a, defaultWishlistId: s } = v(t),
        {
            wishlistAndRecommendations: l,
            skusToUserAndReason: o,
            status: d,
        } = y({ userIdsAndWishlistIds: a, applicationIds: O(t), numItems: n, source: i }),
        { totalUnownedWishlistItemCount: c, slicedWishlistAndRecommendations: u } = (function (e) {
            let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: i, numItems: a } = e;
            return {
                totalUnownedWishlistItemCount: r.useMemo(
                    () => t.filter((e) => null != n[e.id] && n[e.id][i] === g.j.WISHLIST).length,
                    [t, i, n],
                ),
                slicedWishlistAndRecommendations: r.useMemo(() => t.slice(0, a), [t, a]),
            };
        })({ wishlistAndRecommendations: l, skusToUserAndReason: o, userId: t, numItems: n });
    return {
        wishlistAndRecommendations: u,
        skusToUserAndReason: o,
        status: d,
        defaultWishlistId: s,
        totalUnownedWishlistItemCount: c,
    };
}
function M(e) {
    var t;
    let n,
        { applicationIds: i, userIds: a, numItems: l, source: c = R.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: _,
            status: E,
        } = y({
            userIdsAndWishlistIds:
                ((t = r.useMemo(() => a?.slice(0, 5), [a])),
                r.useEffect(() => {
                    t.forEach((e) => {
                        (0, d.A)(e);
                    });
                }, [t]),
                (n = (0, s.yK)([o.A], () => t.map((e) => o.A.getFirstWishlistId(e) ?? null))),
                r.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: i,
            numItems: l,
            source: c,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => u.slice(0, l), [u, l]), skusToUserAndReason: _, status: E };
}
function P(e) {
    let { userId: t, numItems: n, source: i = R.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: a } = v(t),
        {
            recommendations: s,
            skusToUserAndReason: l,
            status: o,
        } = y({ userIdsAndWishlistIds: a, applicationIds: O(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => s.slice(0, n), [s, n]), skusToUserAndReason: l, status: o };
}
