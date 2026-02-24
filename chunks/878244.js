i.d(t, { A: () => k, O: () => T });
var n = i(627968),
    s = i(64700),
    r = i(575593),
    l = i(311907),
    o = i(435371),
    a = i(587895),
    d = i(576030),
    c = i(954571),
    u = i(427262),
    m = i(178213),
    _ = i(594832),
    f = i(146423),
    h = i(460442),
    p = i(754804),
    I = i(479026),
    S = i(699976),
    g = i(652215),
    C = i(788868),
    x = i(985018),
    A = i(804810);
let w = C.vQ.DM_CHANNEL_WISHLIST,
    j = S.Z.SIZE_133;
function T() {
    return (0, n.jsx)(f.$, { spec: j });
}
function L(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: r,
            wishlistOwner: l,
            tooltipInfo: a,
            wishlistId: d,
            source: u,
            hasMultipleSources: I,
            totalUnownedWishlistItems: S,
            index: C,
            skuPreviewStyle: x,
        } = e,
        A = (0, m.G)("wishlist_banner"),
        w = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        T = (0, _.KQ)(A),
        L = C === T - 1 && S > T,
        b = S - T + 1,
        O = s.useCallback(() => {
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
        k = s.useMemo(() => {
            let e = (0, n.jsxs)(f.A, {
                sku: t,
                user: l,
                spec: j,
                skuPreviewStyle: x,
                options: w,
                onClick: O,
                children: [
                    I && u === _.uS.POPULAR && (0, n.jsx)(p.o, { spec: j }),
                    I && u === _.uS.WISHLIST && (0, n.jsx)(p.k, { spec: j }),
                    L && (0, n.jsx)(h.Yb, { count: b }),
                ],
            });
            return a.shouldShow
                ? null != a.title && null == a.body && null == a.icon
                    ? (0, n.jsx)(o.m_, { text: a.title, position: "top", asContainer: !0, delay: _.Zh, children: e })
                    : (0, n.jsx)(o.un, {
                          title: a.title,
                          body: a.body ?? "",
                          asset: a.icon,
                          assetSize: _.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: _.Zh,
                          children: e,
                      })
                : e;
        }, [t, l, O, u, I, w, a.shouldShow, a.title, a.body, a.icon, b, x, L]);
    return (0, n.jsx)("div", { children: k });
}
function b(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: r,
            onClick: o,
            hasMultipleTypes: c,
            hasMultipleSources: m,
            source: f,
            ...h
        } = e,
        p = (0, l.bG)([a.A], () => a.A.getApplication(t.applicationId)),
        S = s.useMemo(() => {
            let e = u.Ay.getName(i),
                t =
                    f === _.uS.WISHLIST
                        ? x.intl.formatToPlainString(x.t.p3RmJF, { username: e })
                        : x.intl.string(x.t.Ig6VDH);
            return c || m
                ? !c && m
                    ? { title: t, icon: (0, n.jsx)(d.mW, { application: p }), shouldShow: !0 }
                    : c && !m
                      ? {
                            title: x.intl.string(x.t["4yiU7x"]),
                            icon: (0, n.jsx)(d.mW, { application: p }),
                            shouldShow: !0,
                        }
                      : {
                            title: x.intl.string(x.t["4yiU7x"]),
                            body: t,
                            icon: (0, n.jsx)(d.mW, { application: p }),
                            shouldShow: !0,
                        }
                : { title: x.intl.string(x.t["4yiU7x"]), shouldShow: !1 };
        }, [f, c, m, p, i]),
        g = s.useCallback(() => {
            o?.(),
                (0, I.T)({
                    isOwner: !1,
                    giftingOrigin: w,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: p ?? void 0,
                    sku: t,
                    analyticsLocations: r ?? [],
                });
        }, [t, i, p, r, o]);
    return (0, n.jsx)(L, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: g,
        hasMultipleTypes: c,
        hasMultipleSources: m,
        tooltipInfo: S,
        source: f,
        ...h,
    });
}
function O(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: o,
            hasMultipleTypes: a,
            hasMultipleSources: c,
            source: m,
            ...f
        } = e,
        h = s.useMemo(() => {
            let e = u.Ay.getName(i),
                t =
                    m === _.uS.WISHLIST
                        ? x.intl.formatToPlainString(x.t.p3RmJF, { username: e })
                        : x.intl.string(x.t.Ig6VDH);
            return a || c
                ? !a && c
                    ? { title: t, shouldShow: !0 }
                    : a && !c
                      ? { title: x.intl.string(x.t.HFhcqh), icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                      : { title: x.intl.string(x.t.HFhcqh), body: t, icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                : { title: x.intl.string(x.t.HFhcqh), shouldShow: !1 };
        }, [m, a, c, i]),
        p = s.useMemo(
            () =>
                null != t.bundledSkus && t.bundledSkus.length > 0
                    ? A.E
                    : t.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE
                      ? A.q
                      : void 0,
            [t.bundledSkus, t.tenantMetadata?.collectibles?.type],
        ),
        S = s.useMemo(
            () => () => {
                (0, I._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: o,
                    profileOwner: i,
                    sku: t,
                    analyticsLocations: l ?? [],
                    giftingOrigin: w,
                });
            },
            [t, i, o, l],
        );
    return (0, n.jsx)(L, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: S,
        hasMultipleTypes: a,
        hasMultipleSources: c,
        tooltipInfo: h,
        source: m,
        skuPreviewStyle: p,
        ...f,
    });
}
function k(e) {
    let { sku: t, ...i } = e;
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(b, { sku: t, ...i });
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(O, { sku: t, ...i });
        default:
            return null;
    }
}
