n.d(t, {
    A: () => N,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(575593),
    s = n(311907),
    c = n(435371),
    u = n(793574),
    d = n(688810),
    f = n(429913),
    p = n(183555),
    g = n(287809),
    m = n(111085),
    b = n(594832),
    y = n(146423),
    O = n(121547),
    j = n(460442),
    h = n(662349),
    x = n(479026),
    v = n(652215),
    _ = n(788868),
    I = n(518477),
    A = n(894100);

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}

function E(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: i,
            style: o,
            isDragging: s,
            dragHandle: u,
            tooltipConfig: d,
            skuPreviewStyle: f,
            isHoveringOrFocusing: p,
            setIsHoveringOrFocusing: g,
            onClick: m,
            wishlistId: x,
            analyticsLocations: v,
            isItemOwned: _,
        } = e,
        I = l.useRef(null),
        w = l.useRef(g),
        [P, E] = l.useState(!1);
    l.useEffect(() => {
        w.current = g;
    }, [g]),
        l.useEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = () => {
                w.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let S =
            null != u
                ? (0, r.jsx)("div", {
                      ref: I,
                      className: A.BU,
                      children: u,
                  })
                : null,
        T = l.useMemo(() => {
            if (null == t.sku) return null;
            let e = (0, r.jsxs)(y.A, {
                    sku: t.sku,
                    user: n,
                    cardStyle: a()(A.Nr, o),
                    skuPreviewStyle: a()(
                        A.ev,
                        {
                            [A.go]: _ && !p,
                        },
                        f,
                    ),
                    disableHoverOrFocus: s,
                    onHoverOrFocusChange: g,
                    onClick: m,
                    children: [
                        (0, r.jsx)(h.A, {
                            onClick: m,
                            isHoveringOrFocusing: p,
                            currentUser: i,
                            wishlistOwner: n,
                            isOwned: _,
                        }),
                        _ &&
                            (0, r.jsx)(j.g, {
                                isHoveringOrFocusing: p,
                            }),
                    ],
                }),
                l = e;
            if (d.shouldShow)
                if (null != d.title && null == d.body && null == d.renderIcon)
                    l = (0, r.jsx)(c.m_, {
                        text: d.title,
                        position: "top",
                        asContainer: !0,
                        delay: b.Zh,
                        children: e,
                    });
                else {
                    var u, O;
                    l = (0, r.jsx)(c.un, {
                        title: d.title,
                        body: null != (u = d.body) ? u : "",
                        asset: null == (O = d.renderIcon) ? void 0 : O.call(d, t),
                        assetSize: b.Q8,
                        position: "top",
                        asContainer: !0,
                        delay: b.Zh,
                        children: e,
                    });
                }
            return l;
        }, [d, t, s, p, _, m, g, f, o, n, i]);
    return null == t.sku
        ? null
        : (0, r.jsxs)("div", {
              className: A.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: P ? A.B8 : void 0,
                      children: T,
                  }),
                  S,
                  n.id === i.id &&
                      (0, r.jsx)(O.A, {
                          wishlistId: x,
                          sku: t.sku,
                          analyticsLocations: v,
                          isHoveringOrFocusing: p,
                          onHoverOrFocusChange: E,
                      }),
              ],
          });
}

function S(e) {
    var t;
    let { item: n, isItemOwned: i, wishlistOwner: a, currentUser: o, onClick: s, analyticsLocations: c } = e,
        u = P(e, ["item", "isItemOwned", "wishlistOwner", "currentUser", "onClick", "analyticsLocations"]),
        d = (0, f.h)(null == (t = n.sku) ? void 0 : t.applicationId),
        p = l.useMemo(
            () => () => {
                if ((s(), null == n.sku)) return;
                let e = a.id === o.id;
                (0, x.T)({
                    isOwner: e,
                    giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
                    profileOwner: a,
                    isItemOwned: i,
                    application: null != d ? d : void 0,
                    sku: n.sku,
                    analyticsLocations: null != c ? c : [],
                });
            },
            [s, n.sku, a, o.id, i, d, c],
        );
    return (0, r.jsx)(
        E,
        w(
            {
                item: n,
                wishlistOwner: a,
                isItemOwned: i,
                onClick: p,
                analyticsLocations: c,
                currentUser: o,
            },
            u,
        ),
    );
}

function T(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: i,
            analyticsLocations: a,
            currentUser: s,
            onClick: c,
            isHoveringOrFocusing: u,
        } = e,
        d = P(e, [
            "item",
            "wishlistOwner",
            "isItemOwned",
            "analyticsLocations",
            "currentUser",
            "onClick",
            "isHoveringOrFocusing",
        ]),
        f = l.useMemo(() => {
            var e, n;
            if (
                null != t.sku &&
                t.sku.productLine === v.EZt.COLLECTIBLES &&
                (null == (n = t.sku.tenantMetadata) || null == (e = n.collectibles) ? void 0 : e.type) !==
                    o.R.PROFILE_EFFECT
            )
                return A.mn;
        }, [t.sku]),
        p = l.useMemo(
            () => () => {
                if ((c(), null == t.sku)) return;
                let e = n.id === s.id;
                (0, x._)({
                    isOwner: e,
                    isItemOwned: i,
                    onWishlistItemClick: void 0,
                    profileOwner: n,
                    sku: t.sku,
                    analyticsLocations: null != a ? a : [],
                    giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
                });
            },
            [t.sku, i, n, s.id, a, c],
        );
    return (0, r.jsx)(
        E,
        w(
            {
                item: t,
                wishlistOwner: n,
                isItemOwned: i,
                currentUser: s,
                onClick: p,
                isHoveringOrFocusing: u,
                skuPreviewStyle: u ? f : void 0,
                analyticsLocations: a,
            },
            d,
        ),
    );
}

function N(e) {
    var t;
    let { item: n, wishlistOwner: i, wishlistId: a, analyticsLocations: o } = e,
        c = P(e, ["item", "wishlistOwner", "wishlistId", "analyticsLocations"]),
        { analyticsLocations: f } = (0, d.Ay)(
            ...(null != o ? o : []),
            (null == (t = n.sku) ? void 0 : t.productLine) === v.EZt.SOCIAL_LAYER_GAME_ITEM
                ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD
                : [],
        ),
        b = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        [y, O] = l.useState(!1),
        { trackUserProfileWishlistAction: j } = (0, p.NJ)(),
        h = l.useCallback(() => {
            null != n.sku &&
                j({
                    wishlistId: a,
                    action: I.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: n.sku.id,
                    productLines: new Set([n.sku.productLine]),
                });
        }, [n.sku, a, j]),
        x = (0, s.bG)([m.A], () => m.A.hasSentGift(n.skuId, i.id), [i, n.skuId]),
        _ = l.useMemo(() => !0 === n.isOwned || x, [n.isOwned, x]);
    if (null == n.sku || null == b) return null;
    switch (n.sku.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(
                S,
                w(
                    {
                        item: n,
                        analyticsLocations: f,
                        isHoveringOrFocusing: y,
                        setIsHoveringOrFocusing: O,
                        currentUser: b,
                        isItemOwned: _,
                        wishlistOwner: i,
                        onClick: h,
                        wishlistId: a,
                    },
                    c,
                ),
            );
        case v.EZt.COLLECTIBLES:
            return (0, r.jsx)(
                T,
                w(
                    {
                        item: n,
                        analyticsLocations: f,
                        isHoveringOrFocusing: y,
                        setIsHoveringOrFocusing: O,
                        currentUser: b,
                        isItemOwned: _,
                        wishlistOwner: i,
                        onClick: h,
                        wishlistId: a,
                    },
                    c,
                ),
            );
        default:
            return null;
    }
}
