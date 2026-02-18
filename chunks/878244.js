"use strict";
i.d(t, { A: () => E });
var n = i(627968),
    s = i(64700),
    r = i(575593),
    l = i(311907),
    a = i(435371),
    o = i(587895),
    d = i(576030),
    c = i(954571),
    u = i(427262),
    _ = i(594832),
    m = i(146423),
    I = i(460442),
    f = i(754804),
    p = i(479026),
    g = i(652215),
    h = i(788868),
    S = i(985018),
    A = i(804810);
let T = h.vQ.DM_CHANNEL_WISHLIST;
function b(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: r,
            wishlistOwner: l,
            tooltipInfo: o,
            wishlistId: d,
            source: u,
            hasMultipleSources: p,
            totalUnownedWishlistItems: h,
            index: S,
            skuPreviewStyle: T,
        } = e,
        b = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        L = S === _.pl - 1 && h > _.pl,
        C = h - _.pl + 1,
        E = s.useCallback(() => {
            if (L) return void r();
            let e = u === _.uS.WISHLIST ? "wishlist" : "shop";
            c.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: u === _.uS.WISHLIST ? d : null,
                product_line: t.productLine,
            }),
                i?.();
        }, [i, d, u, t.id, t.productLine, r, L]),
        O = s.useMemo(() => {
            let e = (0, n.jsxs)(m.A, {
                sku: t,
                user: l,
                cardStyle: A.Nr,
                skuPreviewStyle: T,
                options: b,
                onClick: E,
                children: [
                    p && u === _.uS.POPULAR && (0, n.jsx)(f.o, {}),
                    p && u === _.uS.WISHLIST && (0, n.jsx)(f.k, {}),
                    L && (0, n.jsx)(I.Yb, { count: C }),
                ],
            });
            return o.shouldShow
                ? null != o.title && null == o.body && null == o.icon
                    ? (0, n.jsx)(a.m_, { text: o.title, position: "top", asContainer: !0, delay: _.Zh, children: e })
                    : (0, n.jsx)(a.un, {
                          title: o.title,
                          body: o.body ?? "",
                          asset: o.icon,
                          assetSize: _.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: _.Zh,
                          children: e,
                      })
                : e;
        }, [t, l, E, u, p, b, o.shouldShow, o.title, o.body, o.icon, C, T, L]);
    return (0, n.jsx)("div", { children: O });
}
function L(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: r,
            onClick: a,
            hasMultipleTypes: c,
            hasMultipleSources: m,
            source: I,
            ...f
        } = e,
        g = (0, l.bG)([o.A], () => o.A.getApplication(t.applicationId)),
        h = s.useMemo(() => {
            let e = u.Ay.getName(i),
                t =
                    I === _.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, { username: e })
                        : S.intl.string(S.t.Ig6VDH);
            return c || m
                ? !c && m
                    ? { title: t, icon: (0, n.jsx)(d.mW, { application: g }), shouldShow: !0 }
                    : c && !m
                      ? {
                            title: S.intl.string(S.t["4yiU7x"]),
                            icon: (0, n.jsx)(d.mW, { application: g }),
                            shouldShow: !0,
                        }
                      : {
                            title: S.intl.string(S.t["4yiU7x"]),
                            body: t,
                            icon: (0, n.jsx)(d.mW, { application: g }),
                            shouldShow: !0,
                        }
                : { title: S.intl.string(S.t["4yiU7x"]), shouldShow: !1 };
        }, [I, c, m, g, i]),
        A = s.useCallback(() => {
            a?.(),
                (0, p.T)({
                    isOwner: !1,
                    giftingOrigin: T,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: g ?? void 0,
                    sku: t,
                    analyticsLocations: r ?? [],
                });
        }, [t, i, g, r, a]);
    return (0, n.jsx)(b, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: A,
        hasMultipleTypes: c,
        hasMultipleSources: m,
        tooltipInfo: h,
        source: I,
        ...f,
    });
}
function C(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: a,
            hasMultipleTypes: o,
            hasMultipleSources: c,
            source: m,
            ...I
        } = e,
        f = s.useMemo(() => {
            let e = u.Ay.getName(i),
                t =
                    m === _.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, { username: e })
                        : S.intl.string(S.t.Ig6VDH);
            return o || c
                ? !o && c
                    ? { title: t, shouldShow: !0 }
                    : o && !c
                      ? { title: S.intl.string(S.t.HFhcqh), icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                      : { title: S.intl.string(S.t.HFhcqh), body: t, icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                : { title: S.intl.string(S.t.HFhcqh), shouldShow: !1 };
        }, [m, o, c, i]),
        g = s.useMemo(
            () =>
                null != t.bundledSkus && t.bundledSkus.length > 0
                    ? A.Eo
                    : t.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE
                      ? A.qF
                      : void 0,
            [t.bundledSkus, t.tenantMetadata?.collectibles?.type],
        ),
        h = s.useMemo(
            () => () => {
                (0, p._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: a,
                    profileOwner: i,
                    sku: t,
                    analyticsLocations: l ?? [],
                    giftingOrigin: T,
                });
            },
            [t, i, a, l],
        );
    return (0, n.jsx)(b, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: h,
        hasMultipleTypes: o,
        hasMultipleSources: c,
        tooltipInfo: f,
        source: m,
        skuPreviewStyle: g,
        ...I,
    });
}
function E(e) {
    let { sku: t, ...i } = e;
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(L, { sku: t, ...i });
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(C, { sku: t, ...i });
        default:
            return null;
    }
}
