i.d(t, { A: () => k, O: () => L });
var n = i(627968),
    s = i(64700),
    l = i(575593),
    r = i(311907),
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
    S = i(699976),
    g = i(652215),
    A = i(788868),
    C = i(985018),
    x = i(607216);
let w = A.vQ.DM_CHANNEL_WISHLIST,
    T = S.Z.SIZE_133;
function L() {
    return (0, n.jsx)(f.$, { spec: T });
}
function b(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: l,
            wishlistOwner: r,
            tooltipInfo: a,
            wishlistId: d,
            source: c,
            hasMultipleSources: I,
            totalUnownedWishlistItems: S,
            index: A,
            skuPreviewStyle: C,
        } = e,
        x = (0, m.G)("wishlist_banner"),
        w = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        L = (0, _.KQ)(x),
        b = A === L - 1 && S > L,
        j = S - L + 1,
        O = s.useCallback(() => {
            if (b) return void l();
            let e = c === _.uS.WISHLIST ? "wishlist" : "shop";
            u.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === _.uS.WISHLIST ? d : null,
                product_line: t.productLine,
            }),
                i?.();
        }, [i, d, c, t.id, t.productLine, l, b]),
        k = s.useMemo(() => {
            let e = (0, n.jsxs)(f.A, {
                sku: t,
                user: r,
                spec: T,
                skuPreviewStyle: C,
                options: w,
                onClick: O,
                children: [
                    I && c === _.uS.POPULAR && (0, n.jsx)(p.oX, { spec: T }),
                    I && c === _.uS.WISHLIST && (0, n.jsx)(p.kp, { spec: T }),
                    b && (0, n.jsx)(h.Yb, { count: j }),
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
        }, [t, r, O, c, I, w, a.shouldShow, a.title, a.body, a.icon, j, C, b]);
    return (0, n.jsx)("div", { children: k });
}
function j(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: o,
            hasMultipleTypes: u,
            hasMultipleSources: m,
            source: f,
            ...h
        } = e,
        p = (0, r.bG)([a.A], () => a.A.getApplication(t.applicationId)),
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
                    giftingOrigin: w,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: p ?? void 0,
                    sku: t,
                    analyticsLocations: l ?? [],
                });
        }, [t, i, p, l, o]);
    return (0, n.jsx)(b, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: g,
        hasMultipleTypes: u,
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
            analyticsLocations: r,
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
                    ? x.E
                    : t.tenantMetadata?.collectibles?.type === l.R.NAMEPLATE
                      ? x.q
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
                    analyticsLocations: r ?? [],
                    giftingOrigin: w,
                });
            },
            [t, i, o, r],
        );
    return (0, n.jsx)(b, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: S,
        hasMultipleTypes: a,
        hasMultipleSources: u,
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
            return (0, n.jsx)(j, { sku: t, ...i });
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(O, { sku: t, ...i });
        default:
            return null;
    }
}
