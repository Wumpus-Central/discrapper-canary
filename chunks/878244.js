i.d(t, { A: () => O, O: () => j });
var n = i(627968),
    s = i(64700),
    r = i(575593),
    l = i(311907),
    o = i(435371),
    a = i(587895),
    d = i(576030),
    u = i(954571),
    c = i(427262),
    m = i(178213),
    _ = i(594832),
    f = i(146423),
    h = i(460442),
    p = i(754804),
    I = i(479026),
    S = i(652215),
    g = i(788868),
    C = i(985018),
    A = i(804810);
let x = g.vQ.DM_CHANNEL_WISHLIST,
    w = f.yU.LARGE;
function j() {
    return (0, n.jsx)(f.$8, { size: w });
}
function L(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: r,
            wishlistOwner: l,
            tooltipInfo: a,
            wishlistId: d,
            source: c,
            hasMultipleSources: I,
            totalUnownedWishlistItems: g,
            index: C,
            skuPreviewStyle: A,
        } = e,
        x = (0, m.G)("wishlist_banner"),
        j = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        L = (0, _.Yu)(x),
        T = C === L - 1 && g > L,
        b = g - L + 1,
        O = s.useCallback(() => {
            if (T) return void r();
            let e = c === _.uS.WISHLIST ? "wishlist" : "shop";
            u.default.track(S.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === _.uS.WISHLIST ? d : null,
                product_line: t.productLine,
            }),
                i?.();
        }, [i, d, c, t.id, t.productLine, r, T]),
        k = s.useMemo(() => {
            let e = (0, n.jsxs)(f.Ay, {
                sku: t,
                user: l,
                size: w,
                skuPreviewStyle: A,
                options: j,
                onClick: O,
                children: [
                    I && c === _.uS.POPULAR && (0, n.jsx)(p.o, {}),
                    I && c === _.uS.WISHLIST && (0, n.jsx)(p.k, {}),
                    T && (0, n.jsx)(h.Yb, { count: b }),
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
        }, [t, l, O, c, I, j, a.shouldShow, a.title, a.body, a.icon, b, A, T]);
    return (0, n.jsx)("div", { children: k });
}
function T(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: r,
            onClick: o,
            hasMultipleTypes: u,
            hasMultipleSources: m,
            source: f,
            ...h
        } = e,
        p = (0, l.bG)([a.A], () => a.A.getApplication(t.applicationId)),
        S = s.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    f === _.uS.WISHLIST
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
        }, [f, u, m, p, i]),
        g = s.useCallback(() => {
            o?.(),
                (0, I.T)({
                    isOwner: !1,
                    giftingOrigin: x,
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
        hasMultipleTypes: u,
        hasMultipleSources: m,
        tooltipInfo: S,
        source: f,
        ...h,
    });
}
function b(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: o,
            hasMultipleTypes: a,
            hasMultipleSources: u,
            source: m,
            ...f
        } = e,
        h = s.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    m === _.uS.WISHLIST
                        ? C.intl.formatToPlainString(C.t.p3RmJF, { username: e })
                        : C.intl.string(C.t.Ig6VDH);
            return a || u
                ? !a && u
                    ? { title: t, shouldShow: !0 }
                    : a && !u
                      ? { title: C.intl.string(C.t.HFhcqh), icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                      : { title: C.intl.string(C.t.HFhcqh), body: t, icon: (0, n.jsx)(d.mW, {}), shouldShow: !0 }
                : { title: C.intl.string(C.t.HFhcqh), shouldShow: !1 };
        }, [m, a, u, i]),
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
                    giftingOrigin: x,
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
        hasMultipleSources: u,
        tooltipInfo: h,
        source: m,
        skuPreviewStyle: p,
        ...f,
    });
}
function O(e) {
    let { sku: t, ...i } = e;
    switch (t.productLine) {
        case S.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(T, { sku: t, ...i });
        case S.EZt.COLLECTIBLES:
            return (0, n.jsx)(b, { sku: t, ...i });
        default:
            return null;
    }
}
