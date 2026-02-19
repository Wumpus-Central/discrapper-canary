"use strict";
i.d(t, { A: () => L, O: () => b });
var n = i(627968),
    s = i(64700),
    r = i(575593),
    l = i(311907),
    a = i(435371),
    o = i(587895),
    d = i(576030),
    u = i(954571),
    c = i(427262),
    m = i(178213),
    h = i(594832),
    _ = i(146423),
    f = i(460442),
    p = i(754804),
    I = i(479026),
    g = i(652215),
    S = i(788868),
    C = i(985018),
    A = i(804810);
let w = S.vQ.DM_CHANNEL_WISHLIST,
    x = _.yU.LARGE;
function b() {
    return (0, n.jsx)(_.$8, { size: x });
}
function j(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: r,
            wishlistOwner: l,
            tooltipInfo: o,
            wishlistId: d,
            source: c,
            hasMultipleSources: I,
            totalUnownedWishlistItems: S,
            index: C,
            skuPreviewStyle: A,
        } = e,
        w = (0, m.G)("wishlist_banner"),
        b = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        j = (0, h.Yu)(w),
        T = C === j - 1 && S > j,
        O = S - j + 1,
        L = s.useCallback(() => {
            if (T) return void r();
            let e = c === h.uS.WISHLIST ? "wishlist" : "shop";
            u.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === h.uS.WISHLIST ? d : null,
                product_line: t.productLine,
            }),
                i?.();
        }, [i, d, c, t.id, t.productLine, r, T]),
        k = s.useMemo(() => {
            let e = (0, n.jsxs)(_.Ay, {
                sku: t,
                user: l,
                size: x,
                skuPreviewStyle: A,
                options: b,
                onClick: L,
                children: [
                    I && c === h.uS.POPULAR && (0, n.jsx)(p.o, {}),
                    I && c === h.uS.WISHLIST && (0, n.jsx)(p.k, {}),
                    T && (0, n.jsx)(f.Yb, { count: O }),
                ],
            });
            return o.shouldShow
                ? null != o.title && null == o.body && null == o.icon
                    ? (0, n.jsx)(a.m_, { text: o.title, position: "top", asContainer: !0, delay: h.Zh, children: e })
                    : (0, n.jsx)(a.un, {
                          title: o.title,
                          body: o.body ?? "",
                          asset: o.icon,
                          assetSize: h.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: h.Zh,
                          children: e,
                      })
                : e;
        }, [t, l, L, c, I, b, o.shouldShow, o.title, o.body, o.icon, O, A, T]);
    return (0, n.jsx)("div", { children: k });
}
function T(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: r,
            onClick: a,
            hasMultipleTypes: u,
            hasMultipleSources: m,
            source: _,
            ...f
        } = e,
        p = (0, l.bG)([o.A], () => o.A.getApplication(t.applicationId)),
        g = s.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    _ === h.uS.WISHLIST
                        ? C.intl.formatToPlainString(C.t.p3RmJF, { username: e })
                        : C.intl.string(C.t.Ig6VDH);
            return u || m
                ? !u && m
                    ? { title: t, icon: (0, n.jsx)(d.mW, { application: p }), shouldShow: !0 }
                    : u && !m
                      ? {
                            title: C.intl.string(C.t["4yiU7x"]),
                            icon: (0, n.jsx)(d.mW, { application: p }),
                            shouldShow: !0,
                        }
                      : {
                            title: C.intl.string(C.t["4yiU7x"]),
                            body: t,
                            icon: (0, n.jsx)(d.mW, { application: p }),
                            shouldShow: !0,
                        }
                : { title: C.intl.string(C.t["4yiU7x"]), shouldShow: !1 };
        }, [_, u, m, p, i]),
        S = s.useCallback(() => {
            a?.(),
                (0, I.T)({
                    isOwner: !1,
                    giftingOrigin: w,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: p ?? void 0,
                    sku: t,
                    analyticsLocations: r ?? [],
                });
        }, [t, i, p, r, a]);
    return (0, n.jsx)(j, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: S,
        hasMultipleTypes: u,
        hasMultipleSources: m,
        tooltipInfo: g,
        source: _,
        ...f,
    });
}
function O(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: a,
            hasMultipleTypes: o,
            hasMultipleSources: u,
            source: m,
            ..._
        } = e,
        f = s.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    m === h.uS.WISHLIST
                        ? C.intl.formatToPlainString(C.t.p3RmJF, { username: e })
                        : C.intl.string(C.t.Ig6VDH);
            return o || u
                ? !o && u
                    ? { title: t, shouldShow: !0 }
                    : o && !u
                      ? { title: C.intl.string(C.t.HFhcqh), icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                      : { title: C.intl.string(C.t.HFhcqh), body: t, icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                : { title: C.intl.string(C.t.HFhcqh), shouldShow: !1 };
        }, [m, o, u, i]),
        p = s.useMemo(
            () =>
                null != t.bundledSkus && t.bundledSkus.length > 0
                    ? A.E
                    : t.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE
                      ? A.q
                      : void 0,
            [t.bundledSkus, t.tenantMetadata?.collectibles?.type],
        ),
        g = s.useMemo(
            () => () => {
                (0, I._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: a,
                    profileOwner: i,
                    sku: t,
                    analyticsLocations: l ?? [],
                    giftingOrigin: w,
                });
            },
            [t, i, a, l],
        );
    return (0, n.jsx)(j, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: g,
        hasMultipleTypes: o,
        hasMultipleSources: u,
        tooltipInfo: f,
        source: m,
        skuPreviewStyle: p,
        ..._,
    });
}
function L(e) {
    let { sku: t, ...i } = e;
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(T, { sku: t, ...i });
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(O, { sku: t, ...i });
        default:
            return null;
    }
}
