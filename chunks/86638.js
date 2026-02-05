n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(575593),
    o = n(311907),
    d = n(435371),
    c = n(793574),
    u = n(688810),
    g = n(429913),
    m = n(183555),
    x = n(287809),
    f = n(111085),
    h = n(594832),
    p = n(146423),
    _ = n(121547),
    A = n(460442),
    I = n(662349),
    j = n(479026),
    v = n(652215),
    T = n(788868),
    E = n(518477),
    b = n(894100);
function y(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: s,
            isDragging: o,
            dragHandle: c,
            tooltipConfig: u,
            skuPreviewStyle: g,
            isHoveringOrFocusing: x,
            setIsHoveringOrFocusing: f,
            onClick: j,
            wishlistId: v,
            analyticsLocations: T,
            isItemOwned: y,
        } = e,
        C = l.useRef(null),
        N = l.useRef(f),
        [S, w] = l.useState(!1);
    l.useEffect(() => {
        N.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = () => {
                N.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: k } = (0, m.NJ)(),
        R = l.useCallback(() => {
            null != t.sku &&
                (k({
                    wishlistId: v,
                    action: E.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                j());
        }, [j, t.sku, v, k]),
        O = null != c ? (0, i.jsx)("div", { ref: C, className: b.BU, children: c }) : null,
        L = l.useMemo(() => {
            if (null == t.sku) return null;
            let e = (0, i.jsxs)(p.A, {
                    sku: t.sku,
                    user: n,
                    cardStyle: r()(b.Nr, s),
                    skuPreviewStyle: r()(b.ev, { [b.go]: y && !x }, g),
                    disableHoverOrFocus: o,
                    onHoverOrFocusChange: f,
                    onClick: R,
                    children: [
                        (0, i.jsx)(I.A, {
                            onClick: R,
                            isHoveringOrFocusing: x,
                            currentUser: a,
                            wishlistOwner: n,
                            isOwned: y,
                        }),
                        y && (0, i.jsx)(A.gS, { isHoveringOrFocusing: x }),
                    ],
                }),
                l = e;
            return (
                u.shouldShow &&
                    (l =
                        null != u.title && null == u.body && null == u.renderIcon
                            ? (0, i.jsx)(d.m_, {
                                  text: u.title,
                                  position: "top",
                                  asContainer: !0,
                                  delay: h.Zh,
                                  children: e,
                              })
                            : (0, i.jsx)(d.un, {
                                  title: u.title,
                                  body: u.body ?? "",
                                  asset: u.renderIcon?.(t),
                                  assetSize: h.Q8,
                                  position: "top",
                                  asContainer: !0,
                                  delay: h.Zh,
                                  children: e,
                              })),
                l
            );
        }, [u, t, o, x, y, R, f, g, s, n, a]);
    return null == t.sku
        ? null
        : (0, i.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, i.jsx)("div", { className: S ? b.B8 : void 0, children: L }),
                  O,
                  n.id === a.id &&
                      (0, i.jsx)(_.A, {
                          wishlistId: v,
                          sku: t.sku,
                          analyticsLocations: T,
                          isHoveringOrFocusing: x,
                          onHoverOrFocusChange: w,
                      }),
              ],
          });
}
function C(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: r, analyticsLocations: s, ...o } = e,
        d = (0, g.h)(t.sku?.applicationId),
        c = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = a.id === r.id;
                (0, j.T)({
                    isOwner: e,
                    giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                    profileOwner: a,
                    isItemOwned: n,
                    application: d ?? void 0,
                    sku: t.sku,
                    analyticsLocations: s ?? [],
                });
            },
            [t.sku, a, r.id, n, d, s],
        );
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onClick: c,
        analyticsLocations: s,
        currentUser: r,
        ...o,
    });
}
function N(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: r,
            currentUser: o,
            isHoveringOrFocusing: d,
            ...c
        } = e,
        u = l.useMemo(() => {
            if (
                null != t.sku &&
                t.sku.productLine === v.EZt.COLLECTIBLES &&
                t.sku.tenantMetadata?.collectibles?.type !== s.R.PROFILE_EFFECT
            )
                return b.mn;
        }, [t.sku]),
        g = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = n.id === o.id;
                (0, j._)({
                    isOwner: e,
                    isItemOwned: a,
                    onWishlistItemClick: void 0,
                    profileOwner: n,
                    sku: t.sku,
                    analyticsLocations: r ?? [],
                    giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                });
            },
            [t.sku, a, n, o.id, r],
        );
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: o,
        onClick: g,
        isHoveringOrFocusing: d,
        skuPreviewStyle: d ? u : void 0,
        analyticsLocations: r,
        ...c,
    });
}
function S(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: r, ...s } = e,
        { analyticsLocations: d } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        [m, h] = l.useState(!1),
        p = (0, o.bG)([f.A], () => f.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        _ = l.useMemo(() => !0 === t.isOwned || p, [t.isOwned, p]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(C, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: h,
                currentUser: g,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...s,
            });
        case v.EZt.COLLECTIBLES:
            return (0, i.jsx)(N, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: h,
                currentUser: g,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...s,
            });
        default:
            return null;
    }
}
