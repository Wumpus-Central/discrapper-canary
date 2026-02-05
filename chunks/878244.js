i.d(t, { A: () => j });
var n = i(627968),
    r = i(64700),
    l = i(575593),
    s = i(311907),
    a = i(435371),
    o = i(587895),
    u = i(576030),
    d = i(954571),
    c = i(427262),
    m = i(594832),
    p = i(146423),
    _ = i(460442),
    f = i(754804),
    h = i(479026),
    g = i(652215),
    I = i(788868),
    S = i(985018),
    x = i(804810);
let C = I.vQ.DM_CHANNEL_WISHLIST;
function w(e) {
    let {
            sku: t,
            onClick: i,
            onOpenWishlist: l,
            wishlistOwner: s,
            tooltipInfo: o,
            wishlistId: u,
            source: c,
            hasMultipleSources: h,
            totalUnownedWishlistItems: I,
            index: S,
            skuPreviewStyle: C,
        } = e,
        w = r.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        T = S === m.pl - 1 && I > m.pl,
        b = I - m.pl + 1,
        j = r.useCallback(() => {
            if (T) return void l();
            let e = c === m.uS.WISHLIST ? "wishlist" : "shop";
            d.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: t.id,
                item_source: e,
                wishlist_id: c === m.uS.WISHLIST ? u : null,
                product_line: t.productLine,
            }),
                i?.();
        }, [i, u, c, t.id, t.productLine, l, T]),
        A = r.useMemo(() => {
            let e = (0, n.jsxs)(p.A, {
                sku: t,
                user: s,
                cardStyle: x.Nr,
                skuPreviewStyle: C,
                options: w,
                onClick: j,
                children: [
                    h && c === m.uS.POPULAR && (0, n.jsx)(f.o, {}),
                    h && c === m.uS.WISHLIST && (0, n.jsx)(f.k, {}),
                    T && (0, n.jsx)(_.Yb, { count: b }),
                ],
            });
            return o.shouldShow
                ? null != o.title && null == o.body && null == o.icon
                    ? (0, n.jsx)(a.m_, { text: o.title, position: "top", asContainer: !0, delay: m.Zh, children: e })
                    : (0, n.jsx)(a.un, {
                          title: o.title,
                          body: o.body ?? "",
                          asset: o.icon,
                          assetSize: m.Q8,
                          position: "top",
                          asContainer: !0,
                          delay: m.Zh,
                          children: e,
                      })
                : e;
        }, [t, s, j, c, h, w, o.shouldShow, o.title, o.body, o.icon, b, C, T]);
    return (0, n.jsx)("div", { children: A });
}
function T(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: l,
            onClick: a,
            hasMultipleTypes: d,
            hasMultipleSources: p,
            source: _,
            ...f
        } = e,
        g = (0, s.bG)([o.A], () => o.A.getApplication(t.applicationId)),
        I = r.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    _ === m.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, { username: e })
                        : S.intl.string(S.t.Ig6VDH);
            return d || p
                ? !d && p
                    ? { title: t, icon: (0, n.jsx)(u.mW, { application: g }), shouldShow: !0 }
                    : d && !p
                      ? {
                            title: S.intl.string(S.t["4yiU7x"]),
                            icon: (0, n.jsx)(u.mW, { application: g }),
                            shouldShow: !0,
                        }
                      : {
                            title: S.intl.string(S.t["4yiU7x"]),
                            body: t,
                            icon: (0, n.jsx)(u.mW, { application: g }),
                            shouldShow: !0,
                        }
                : { title: S.intl.string(S.t["4yiU7x"]), shouldShow: !1 };
        }, [_, d, p, g, i]),
        x = r.useCallback(() => {
            a?.(),
                (0, h.T)({
                    isOwner: !1,
                    giftingOrigin: C,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: g ?? void 0,
                    sku: t,
                    analyticsLocations: l ?? [],
                });
        }, [t, i, g, l, a]);
    return (0, n.jsx)(w, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: l,
        onClick: x,
        hasMultipleTypes: d,
        hasMultipleSources: p,
        tooltipInfo: I,
        source: _,
        ...f,
    });
}
function b(e) {
    let {
            sku: t,
            wishlistOwner: i,
            analyticsLocations: s,
            onClick: a,
            hasMultipleTypes: o,
            hasMultipleSources: d,
            source: p,
            ..._
        } = e,
        f = r.useMemo(() => {
            let e = c.Ay.getName(i),
                t =
                    p === m.uS.WISHLIST
                        ? S.intl.formatToPlainString(S.t.p3RmJF, { username: e })
                        : S.intl.string(S.t.Ig6VDH);
            return o || d
                ? !o && d
                    ? { title: t, shouldShow: !0 }
                    : o && !d
                      ? { title: S.intl.string(S.t.HFhcqh), icon: (0, n.jsx)(u.mW, {}), shouldShow: !0 }
                      : { title: S.intl.string(S.t.HFhcqh), body: t, icon: (0, n.jsx)(u.mW, {}), shouldShow: !0 }
                : { title: S.intl.string(S.t.HFhcqh), shouldShow: !1 };
        }, [p, o, d, i]),
        g = r.useMemo(
            () =>
                null != t.bundledSkus && t.bundledSkus.length > 0
                    ? x.Eo
                    : t.tenantMetadata?.collectibles?.type === l.R.NAMEPLATE
                      ? x.qF
                      : void 0,
            [t.bundledSkus, t.tenantMetadata?.collectibles?.type],
        ),
        I = r.useMemo(
            () => () => {
                (0, h._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: a,
                    profileOwner: i,
                    sku: t,
                    analyticsLocations: s ?? [],
                    giftingOrigin: C,
                });
            },
            [t, i, a, s],
        );
    return (0, n.jsx)(w, {
        sku: t,
        wishlistOwner: i,
        analyticsLocations: s,
        onClick: I,
        hasMultipleTypes: o,
        hasMultipleSources: d,
        tooltipInfo: f,
        source: p,
        skuPreviewStyle: g,
        ..._,
    });
}
function j(e) {
    let { sku: t, ...i } = e;
    switch (t.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(T, { sku: t, ...i });
        case g.EZt.COLLECTIBLES:
            return (0, n.jsx)(b, { sku: t, ...i });
        default:
            return null;
    }
}
