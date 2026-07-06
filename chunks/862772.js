"use strict";
let i;
n.d(t, { Ul: () => P, XQ: () => w, rg: () => D });
var r = n(64700),
    s = n(735438),
    a = n(17928),
    o = n(435658),
    l = n(321191),
    u = n(903209),
    c = n(280450),
    d = n(927813),
    _ = n(403362),
    h = n(808247),
    f = n(228366),
    E = n(773669);
function p(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let m = {};
function g() {
    if (i === E.default.locale) return !1;
    (m = {}), (i = E.default.locale);
}
class A extends a.Ay.Store {
    initialize() {
        this.waitFor(E.default), this.syncWith([E.default], g), (i = E.default.locale);
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return m[p(e, t)];
    }
}
let I = new A(f.h, {
    LOGOUT: function () {
        m = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = p(t, n);
        m = { ...m, [i]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: n, data: i } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let r = p(t, n);
        m = { ...m, [r]: { state: "success", data: i, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: n } = e;
        if (0 === t.length || 0 === n.length) return !1;
        let i = p(t, n);
        if (m[i]?.state === "success") return !1;
        m = { ...m, [i]: { state: "error", fetchedAt: Date.now() } };
    },
});
var T = n(310209),
    S = n(96203),
    N = n(760716),
    C = n(652215);
function y(e) {
    let t = (0, S.A)({ userId: e }),
        n = (0, N.i)((e) => e.recommendationApplicationIds);
    return r.useMemo(() => (0, s.uniq)([C.FYj, ...t, ...(n ?? [])]).sort(), [t, n]);
}
var O = n(561794);
let R = 30 * d.A.Millis.MINUTE,
    v = { state: "success", data: new T.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function b(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: i,
            source: l = O.B5.USER_PROFILE,
            filterByApplicationIds: u = !1,
        } = e,
        d = (function (e) {
            let { userIds: t, numItems: n, applicationIds: i } = e,
                s = (0, a.bG)([I], () => I.getRecommendations(t, i));
            return (r.useEffect(() => {
                if (0 === t.length || 0 === i.length) return;
                let e = I.getRecommendations(t, i);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - R,
                        i = "success" === e.state && e.data.skus.length >= n;
                    if (!t && i) return;
                }
                h.A.fetchWishlistRecommendations(i, t, n);
            }, [t, i, n]),
            0 === t.length || 0 === i.length)
                ? v
                : s;
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
            sortedWishlistSkus: f,
            wishlistSkuIdToSku: E,
            wishlistSkusToUserAndReasonMap: p,
            wishlistsAreFetching: m,
            wishlistErrors: g,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: i } = e,
                s = (0, a.bG)([c.default], () => c.default.getId()),
                { wishlists: o, isFetching: l, errors: u } = (0, O.sv)({ wishlistIdsAndUsers: t, source: n }),
                d = r.useMemo(() => {
                    let e = o.filter(_.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == i || i.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: T.j.WISHLIST });
                    return t;
                }, [o, i]),
                h = r.useMemo(
                    () =>
                        Object.fromEntries(
                            o
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
                    [o, i],
                );
            return {
                sortedWishlistSkus: r.useMemo(
                    () =>
                        Object.keys(h)
                            .sort((e, t) => {
                                let n = d[t] ?? {},
                                    i = d[e] ?? {},
                                    r = Object.keys(n).length - Object.keys(i).length;
                                if (0 !== r) return r;
                                let a = !!n[s];
                                return Number(!!i[s]) - Number(a);
                            })
                            .map((e) => h[e]),
                    [s, h, d],
                ),
                wishlistSkuIdToSku: h,
                wishlistSkusToUserAndReasonMap: d,
                wishlistsAreFetching: l,
                wishlistErrors: u,
            };
        })({ userIdsAndWishlistIds: t, source: l, applicationIdsFilter: u ? i : void 0 }),
        { filteredRecommendations: A, skusToUserAndReasonRecommendations: S } = r.useMemo(
            () =>
                null == d || "success" !== d.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: d.data.skus.filter((e) => !(e.id in E)),
                          skusToUserAndReasonRecommendations: d.data.skusToUserAndReason,
                      },
            [d, E],
        ),
        { combinedSkus: N, combinedSkusToUserAndReason: C } = r.useMemo(() => {
            let e = { ...S };
            for (let [t, n] of Object.entries(p)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...f, ...A], combinedSkusToUserAndReason: e };
        }, [f, A, p, S]),
        y = r.useMemo(
            () =>
                m || null == d || (null != d && "loading" === d.state)
                    ? "loading"
                    : g.filter(_.Vq).length > 0 || "error" === d.state
                      ? "error"
                      : "success",
            [m, d, g],
        ),
        b = r.useMemo(() => (0, s.uniq)([...A.map((e) => e.id), ...N.map((e) => e.id)]), [A, N]);
    return (
        (0, o.j)({ skuIds: b }),
        { recommendations: A, wishlistAndRecommendations: N, skusToUserAndReason: C, status: y }
    );
}
function L(e) {
    r.useEffect(() => {
        (0, u.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, a.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function D(e) {
    let { userId: t, numItems: n, source: i = O.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s, defaultWishlistId: a } = L(t),
        {
            wishlistAndRecommendations: o,
            skusToUserAndReason: l,
            status: u,
        } = b({ userIdsAndWishlistIds: s, applicationIds: y(t), numItems: n, source: i }),
        { totalUnownedWishlistItemCount: c, slicedWishlistAndRecommendations: d } = (function (e) {
            let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: i, numItems: s } = e;
            return {
                totalUnownedWishlistItemCount: r.useMemo(
                    () => t.filter((e) => null != n[e.id] && n[e.id][i] === T.j.WISHLIST).length,
                    [t, i, n],
                ),
                slicedWishlistAndRecommendations: r.useMemo(() => t.slice(0, s), [t, s]),
            };
        })({ wishlistAndRecommendations: o, skusToUserAndReason: l, userId: t, numItems: n });
    return {
        wishlistAndRecommendations: d,
        skusToUserAndReason: l,
        status: u,
        defaultWishlistId: a,
        totalUnownedWishlistItemCount: c,
    };
}
function w(e) {
    var t;
    let n,
        { applicationIds: i, userIds: s, numItems: o, source: c = O.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: d,
            skusToUserAndReason: _,
            status: h,
        } = b({
            userIdsAndWishlistIds:
                ((t = r.useMemo(() => s?.slice(0, 5), [s])),
                r.useEffect(() => {
                    t.forEach((e) => {
                        (0, u.A)(e);
                    });
                }, [t]),
                (n = (0, a.yK)([l.A], () => t.map((e) => l.A.getFirstWishlistId(e) ?? null))),
                r.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: i,
            numItems: o,
            source: c,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => d.slice(0, o), [d, o]), skusToUserAndReason: _, status: h };
}
function P(e) {
    let { userId: t, numItems: n, source: i = O.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = L(t),
        {
            recommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = b({ userIdsAndWishlistIds: s, applicationIds: y(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: o, status: l };
}
