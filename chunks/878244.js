"use strict";
i.d(e, { A: () => R, O: () => N });
var n = i(627968),
    s = i(64700),
    a = i(575593),
    l = i(311907),
    r = i(435371),
    o = i(587895),
    c = i(576030),
    d = i(954571),
    _ = i(427262),
    u = i(594832),
    I = i(146423),
    g = i(460442),
    S = i(754804),
    p = i(479026),
    A = i(699976),
    m = i(652215),
    T = i(788868),
    f = i(985018),
    E = i(607216);
let h = T.vQ.DM_CHANNEL_WISHLIST,
    L = A.Z.SIZE_133;
function N(t) {
    let { spec: e = L } = t;
    return (0, n.jsx)(I.$, { spec: e });
}
function G(t) {
    let {
            sku: e,
            onClick: i,
            onOpenWishlist: a,
            wishlistOwner: l,
            tooltipInfo: o,
            wishlistId: c,
            source: _,
            hasMultipleSources: p,
            totalUnownedWishlistItems: A,
            index: T,
            skuPreviewStyle: f,
            maxWishlistLength: E,
            spec: h = L,
        } = t,
        N = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        G = T === E - 1 && A > E,
        b = A - E + 1,
        O = s.useCallback(() => {
            if (G) return void a();
            let t = _ === u.uS.WISHLIST ? "wishlist" : "shop";
            d.default.track(m.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: _ === u.uS.WISHLIST ? c : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, c, _, e.id, e.productLine, a, G]),
        R = s.useMemo(() => {
            let t = (0, n.jsxs)(I.A, {
                sku: e,
                user: l,
                spec: h,
                skuPreviewStyle: f,
                options: N,
                onClick: O,
                children: [
                    p && _ === u.uS.POPULAR && (0, n.jsx)(S.oX, { spec: h }),
                    p && _ === u.uS.WISHLIST && (0, n.jsx)(S.kp, { spec: h }),
                    G && (0, n.jsx)(g.Yb, { count: b }),
                ],
            });
            return o.shouldShow
                ? null != o.title && null == o.body && null == o.icon
                    ? (0, n.jsx)(r.m_, { text: o.title, position: "top", asContainer: !0, delay: u.Zh, children: t })
                    : (0, n.jsx)(r.un, {
                          title: o.title,
                          body: o.body ?? "",
                          asset: o.icon,
                          assetSize: u.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: u.Zh,
                          children: t,
                      })
                : t;
        }, [e, l, O, _, p, N, o.shouldShow, o.title, o.body, o.icon, b, f, G, h]);
    return (0, n.jsx)("div", { children: R });
}
function b(t) {
    let {
            sku: e,
            wishlistOwner: i,
            analyticsLocations: a,
            onClick: r,
            hasMultipleTypes: d,
            hasMultipleSources: I,
            source: g,
            ...S
        } = t,
        A = (0, l.bG)([o.A], () => o.A.getApplication(e.applicationId)),
        m = s.useMemo(() => {
            let t = _.Ay.getName(i),
                e =
                    g === u.uS.WISHLIST
                        ? f.intl.formatToPlainString(f.t.p3RmJF, { username: t })
                        : f.intl.string(f.t.Ig6VDH);
            return d || I
                ? !d && I
                    ? { title: e, icon: (0, n.jsx)(c.mW, { application: A }), shouldShow: !0 }
                    : d && !I
                      ? {
                            title: f.intl.string(f.t["4yiU7x"]),
                            icon: (0, n.jsx)(c.mW, { application: A }),
                            shouldShow: !0,
                        }
                      : {
                            title: f.intl.string(f.t["4yiU7x"]),
                            body: e,
                            icon: (0, n.jsx)(c.mW, { application: A }),
                            shouldShow: !0,
                        }
                : { title: f.intl.string(f.t["4yiU7x"]), shouldShow: !1 };
        }, [g, d, I, A, i]),
        T = s.useCallback(() => {
            r?.(),
                (0, p.T)({
                    isOwner: !1,
                    giftingOrigin: h,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: A ?? void 0,
                    sku: e,
                    analyticsLocations: a ?? [],
                });
        }, [e, i, A, a, r]);
    return (0, n.jsx)(G, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: T,
        hasMultipleTypes: d,
        hasMultipleSources: I,
        tooltipInfo: m,
        source: g,
        ...S,
    });
}
function O(t) {
    let {
            sku: e,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: r,
            hasMultipleTypes: o,
            hasMultipleSources: d,
            source: I,
            ...g
        } = t,
        S = s.useMemo(() => {
            let t = _.Ay.getName(i),
                e =
                    I === u.uS.WISHLIST
                        ? f.intl.formatToPlainString(f.t.p3RmJF, { username: t })
                        : f.intl.string(f.t.Ig6VDH);
            return o || d
                ? !o && d
                    ? { title: e, shouldShow: !0 }
                    : o && !d
                      ? { title: f.intl.string(f.t.HFhcqh), icon: (0, n.jsx)(c.mW, {}), shouldShow: !0 }
                      : { title: f.intl.string(f.t.HFhcqh), body: e, icon: (0, n.jsx)(c.mW, {}), shouldShow: !0 }
                : { title: f.intl.string(f.t.HFhcqh), shouldShow: !1 };
        }, [I, o, d, i]),
        A = s.useMemo(
            () =>
                null != e.bundledSkus && e.bundledSkus.length > 0
                    ? E.E
                    : e.tenantMetadata?.collectibles?.type === a.R.NAMEPLATE
                      ? E.q
                      : void 0,
            [e.bundledSkus, e.tenantMetadata?.collectibles?.type],
        ),
        m = s.useMemo(
            () => () => {
                (0, p._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: r,
                    profileOwner: i,
                    sku: e,
                    analyticsLocations: l ?? [],
                    giftingOrigin: h,
                });
            },
            [e, i, r, l],
        );
    return (0, n.jsx)(G, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: m,
        hasMultipleTypes: o,
        hasMultipleSources: d,
        tooltipInfo: S,
        source: I,
        skuPreviewStyle: A,
        ...g,
    });
}
function R(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case m.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, { sku: e, ...i });
        case m.EZt.COLLECTIBLES:
            return (0, n.jsx)(O, { sku: e, ...i });
        default:
            return null;
    }
}
