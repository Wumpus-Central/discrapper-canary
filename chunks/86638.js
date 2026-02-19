n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(311907),
    c = n(435371),
    d = n(793574),
    u = n(688810),
    g = n(429913),
    m = n(183555),
    x = n(287809),
    f = n(111085),
    p = n(594832),
    h = n(146423),
    _ = n(121547),
    A = n(460442),
    I = n(662349),
    j = n(479026),
    v = n(652215),
    E = n(788868),
    T = n(518477),
    b = n(894100);
function y(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: r,
            isDragging: o,
            dragHandle: d,
            tooltipConfig: u,
            skuPreviewStyle: g,
            isHoveringOrFocusing: x,
            setIsHoveringOrFocusing: f,
            onClick: j,
            wishlistId: v,
            analyticsLocations: E,
            isItemOwned: y,
        } = e,
        N = l.useRef(null),
        S = l.useRef(f),
        [C, k] = l.useState(!1);
    l.useEffect(() => {
        S.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = () => {
                S.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: R } = (0, m.NJ)(),
        w = l.useCallback(() => {
            null != t.sku &&
                (R({
                    wishlistId: v,
                    action: T.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                j());
        }, [j, t.sku, v, R]),
        O = null != d ? (0, i.jsx)("div", { ref: N, className: b.BU, children: d }) : null,
        L = l.useMemo(() => {
            if (null == t.sku) return null;
            let e = (0, i.jsxs)(h.Ay, {
                    sku: t.sku,
                    user: n,
                    size: h.yU.LARGE,
                    cardStyle: r,
                    skuPreviewStyle: s()(b.ev, { [b.go]: y && !x }, g),
                    disableHoverOrFocus: o,
                    onHoverOrFocusChange: f,
                    onClick: w,
                    children: [
                        (0, i.jsx)(I.A, {
                            onClick: w,
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
                            ? (0, i.jsx)(c.m_, {
                                  text: u.title,
                                  position: "top",
                                  asContainer: !0,
                                  delay: p.Zh,
                                  children: e,
                              })
                            : (0, i.jsx)(c.un, {
                                  title: u.title,
                                  body: u.body ?? "",
                                  asset: u.renderIcon?.(t),
                                  assetSize: p.Q8,
                                  position: "top",
                                  asContainer: !0,
                                  delay: p.Zh,
                                  children: e,
                              })),
                l
            );
        }, [u, t, o, x, y, w, f, g, r, n, a]);
    return null == t.sku
        ? null
        : (0, i.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, i.jsx)("div", { className: C ? b.B8 : void 0, children: L }),
                  O,
                  n.id === a.id &&
                      (0, i.jsx)(_.A, {
                          wishlistId: v,
                          sku: t.sku,
                          analyticsLocations: E,
                          isHoveringOrFocusing: x,
                          onHoverOrFocusChange: k,
                      }),
              ],
          });
}
function N(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        c = (0, g.h)(t.sku?.applicationId),
        d = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = a.id === s.id;
                (0, j.T)({
                    isOwner: e,
                    giftingOrigin: E.vQ.USER_PROFILE_WISHLIST,
                    profileOwner: a,
                    isItemOwned: n,
                    application: c ?? void 0,
                    sku: t.sku,
                    analyticsLocations: r ?? [],
                });
            },
            [t.sku, a, s.id, n, c, r],
        );
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onClick: d,
        analyticsLocations: r,
        currentUser: s,
        ...o,
    });
}
function S(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: a,
            analyticsLocations: s,
            currentUser: o,
            isHoveringOrFocusing: c,
            ...d
        } = e,
        u = l.useMemo(() => {
            if (
                null != t.sku &&
                t.sku.productLine === v.EZt.COLLECTIBLES &&
                t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
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
                    analyticsLocations: s ?? [],
                    giftingOrigin: E.vQ.USER_PROFILE_WISHLIST,
                });
            },
            [t.sku, a, n, o.id, s],
        );
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: o,
        onClick: g,
        isHoveringOrFocusing: c,
        skuPreviewStyle: c ? u : void 0,
        analyticsLocations: s,
        ...d,
    });
}
function C(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: c } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === v.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        [m, p] = l.useState(!1),
        h = (0, o.bG)([f.A], () => f.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        _ = l.useMemo(() => !0 === t.isOwned || h, [t.isOwned, h]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(N, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: p,
                currentUser: g,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        case v.EZt.COLLECTIBLES:
            return (0, i.jsx)(S, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: p,
                currentUser: g,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        default:
            return null;
    }
}
