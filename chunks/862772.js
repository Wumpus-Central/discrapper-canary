let n;
s.d(t, { Ul: () => j, XQ: () => L, rg: () => C });
var i = s(582128),
    l = s(435558),
    o = s(17928),
    u = s(435658),
    r = s(321191),
    d = s(903209),
    a = s(280450),
    c = s(927813),
    f = s(403362),
    m = s(808247),
    h = s(820847),
    I = s(73153),
    A = s(773669);
function p(e, t) {
    if (0 === e.length) throw Error("No user IDs provided");
    return [...e, ...t].join(",");
}
let g = {};
function R() {
    if (n === A.default.locale) return !1;
    ((g = {}), (n = A.default.locale));
}
class k extends o.Ay.Store {
    initialize() {
        (this.waitFor(A.default), this.syncWith([A.default], R), (n = A.default.locale));
    }
    getRecommendations(e, t) {
        if (0 !== e.length && 0 !== t.length) return g[p(e, t)];
    }
}
let E = new k(I.h, {
    LOGOUT: function () {
        g = {};
    },
    WISHLIST_RECOMMENDATIONS_FETCH_START: function (e) {
        let { userIds: t, applicationIds: s } = e;
        if (0 === t.length || 0 === s.length) return !1;
        let n = p(t, s);
        g = { ...g, [n]: { state: "loading" } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        let { userIds: t, applicationIds: s, data: n } = e;
        if (0 === t.length || 0 === s.length) return !1;
        let i = p(t, s);
        g = { ...g, [i]: { state: "success", data: n, fetchedAt: Date.now() } };
    },
    WISHLIST_RECOMMENDATIONS_FETCH_FAILURE: function (e) {
        let { userIds: t, applicationIds: s } = e;
        if (0 === t.length || 0 === s.length) return !1;
        let n = p(t, s);
        if (g[n]?.state === "success") return !1;
        g = { ...g, [n]: { state: "error", fetchedAt: Date.now() } };
    },
});
var M = s(310209),
    S = s(96203),
    T = s(760716),
    O = s(652215);
function _(e) {
    let t = (0, S.A)({ userId: e }),
        s = (0, T.i)((e) => e.recommendationApplicationIds);
    return i.useMemo(() => (0, l.uniq)([O.FYj, ...t, ...(s ?? [])]).sort(), [t, s]);
}
var w = s(594832);
let U = 30 * c.A.Millis.MINUTE,
    W = { state: "success", data: new M.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function F(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: s,
            applicationIds: n,
            source: r = h.B.USER_PROFILE,
            filterByApplicationIds: d = !1,
        } = e,
        c = (function (e) {
            let { userIds: t, numItems: s, applicationIds: n } = e,
                l = (0, o.bG)([E], () => E.getRecommendations(t, n));
            return (i.useEffect(() => {
                if (0 === t.length || 0 === n.length) return;
                let e = E.getRecommendations(t, n);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - U,
                        n = "success" === e.state && e.data.skus.length >= s;
                    if (!t && n) return;
                }
                m.A.fetchWishlistRecommendations(n, t, s);
            }, [t, n, s]),
            0 === t.length || 0 === n.length)
                ? W
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
            numItems: s,
            applicationIds: n,
        }),
        {
            sortedWishlistSkus: I,
            wishlistSkuIdToSku: A,
            wishlistSkusToUserAndReasonMap: p,
            wishlistsAreFetching: g,
            wishlistErrors: R,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: s, applicationIdsFilter: n } = e,
                l = (0, o.bG)([a.default], () => a.default.getId()),
                { wishlists: u, isFetching: r, errors: d } = (0, w.sv)({ wishlistIdsAndUsers: t, source: s }),
                c = i.useMemo(() => {
                    let e = u.filter(f.Vq),
                        t = {};
                    for (let s of e)
                        for (let e of s.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == n || n.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [s.userId]: M.j.WISHLIST });
                    return t;
                }, [u, n]),
                m = i.useMemo(
                    () =>
                        Object.fromEntries(
                            u
                                .filter(f.Vq)
                                .flatMap((e) => e.items)
                                .filter(
                                    (e) =>
                                        null != e &&
                                        null != e.sku &&
                                        !e.isOwned &&
                                        (null == n || n.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [u, n],
                );
            return {
                sortedWishlistSkus: i.useMemo(
                    () =>
                        Object.keys(m)
                            .sort((e, t) => {
                                let s = c[t] ?? {},
                                    n = c[e] ?? {},
                                    i = Object.keys(s).length - Object.keys(n).length;
                                if (0 !== i) return i;
                                let o = !!s[l];
                                return Number(!!n[l]) - Number(o);
                            })
                            .map((e) => m[e]),
                    [l, m, c],
                ),
                wishlistSkuIdToSku: m,
                wishlistSkusToUserAndReasonMap: c,
                wishlistsAreFetching: r,
                wishlistErrors: d,
            };
        })({ userIdsAndWishlistIds: t, source: r, applicationIdsFilter: d ? n : void 0 }),
        { filteredRecommendations: k, skusToUserAndReasonRecommendations: S } = i.useMemo(
            () =>
                null == c || "success" !== c.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: c.data.skus.filter((e) => !(e.id in A)),
                          skusToUserAndReasonRecommendations: c.data.skusToUserAndReason,
                      },
            [c, A],
        ),
        { combinedSkus: T, combinedSkusToUserAndReason: O } = i.useMemo(() => {
            let e = { ...S };
            for (let [t, s] of Object.entries(p)) e[t] = { ...e[t], ...s };
            return { combinedSkus: [...I, ...k], combinedSkusToUserAndReason: e };
        }, [I, k, p, S]),
        _ = i.useMemo(
            () =>
                g || null == c || (null != c && "loading" === c.state)
                    ? "loading"
                    : R.filter(f.Vq).length > 0 || "error" === c.state
                      ? "error"
                      : "success",
            [g, c, R],
        ),
        F = i.useMemo(() => (0, l.uniq)([...k.map((e) => e.id), ...T.map((e) => e.id)]), [k, T]);
    return (
        (0, u.j)({ skuIds: F }),
        { recommendations: k, wishlistAndRecommendations: T, skusToUserAndReason: O, status: _ }
    );
}
function b(e) {
    i.useEffect(() => {
        (0, d.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, o.cf)([r.A], () => ({ defaultWishlistId: r.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: i.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function C(e) {
    let { userId: t, numItems: s, source: n = h.B.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l, defaultWishlistId: o } = b(t),
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: r,
            status: d,
        } = F({ userIdsAndWishlistIds: l, applicationIds: _(t), numItems: s, source: n }),
        { totalUnownedWishlistItemCount: a, slicedWishlistAndRecommendations: c } = (function (e) {
            let { wishlistAndRecommendations: t, skusToUserAndReason: s, userId: n, numItems: l } = e;
            return {
                totalUnownedWishlistItemCount: i.useMemo(
                    () => t.filter((e) => null != s[e.id] && s[e.id][n] === M.j.WISHLIST).length,
                    [t, n, s],
                ),
                slicedWishlistAndRecommendations: i.useMemo(() => t.slice(0, l), [t, l]),
            };
        })({ wishlistAndRecommendations: u, skusToUserAndReason: r, userId: t, numItems: s });
    return {
        wishlistAndRecommendations: c,
        skusToUserAndReason: r,
        status: d,
        defaultWishlistId: o,
        totalUnownedWishlistItemCount: a,
    };
}
function L(e) {
    var t;
    let s,
        { applicationIds: n, userIds: l, numItems: u, source: a = h.B.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: c,
            skusToUserAndReason: f,
            status: m,
        } = F({
            userIdsAndWishlistIds:
                ((t = i.useMemo(() => l?.slice(0, 5), [l])),
                i.useEffect(() => {
                    t.forEach((e) => {
                        (0, d.A)(e);
                    });
                }, [t]),
                (s = (0, o.yK)([r.A], () => t.map((e) => r.A.getFirstWishlistId(e) ?? null))),
                i.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: s[t] })), [t, s])),
            applicationIds: n,
            numItems: u,
            source: a,
            filterByApplicationIds: !0,
        });
    return { recommendations: i.useMemo(() => c.slice(0, u), [c, u]), skusToUserAndReason: f, status: m };
}
function j(e) {
    let { userId: t, numItems: s, source: n = h.B.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l } = b(t),
        {
            recommendations: o,
            skusToUserAndReason: u,
            status: r,
        } = F({ userIdsAndWishlistIds: l, applicationIds: _(t), numItems: s, source: n });
    return { recommendations: i.useMemo(() => o.slice(0, s), [o, s]), skusToUserAndReason: u, status: r };
}
