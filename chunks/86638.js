n.d(t, {
    A: () => C,
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
    w = n(894100);

function A(e) {
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
            isHoveringOrFocusing: g,
            setIsHoveringOrFocusing: m,
            onClick: x,
            wishlistId: v,
            analyticsLocations: _,
            isItemOwned: A,
        } = e,
        P = l.useRef(null),
        E = l.useRef(m),
        [S, T] = l.useState(!1);
    l.useEffect(() => {
        E.current = m;
    }, [m]),
        l.useEffect(() => {
            let e = P.current;
            if (null == e) return;
            let t = () => {
                E.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: C } = (0, p.NJ)(),
        N = l.useCallback(() => {
            null != t.sku &&
                (C({
                    wishlistId: v,
                    action: I.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, v, C]),
        k =
            null != u
                ? (0, r.jsx)("div", {
                      ref: P,
                      className: w.BU,
                      children: u,
                  })
                : null,
        R = l.useMemo(() => {
            if (null == t.sku) return null;
            let e = (0, r.jsxs)(y.A, {
                    sku: t.sku,
                    user: n,
                    cardStyle: a()(w.Nr, o),
                    skuPreviewStyle: a()(
                        w.ev,
                        {
                            [w.go]: A && !g,
                        },
                        f,
                    ),
                    disableHoverOrFocus: s,
                    onHoverOrFocusChange: m,
                    onClick: N,
                    children: [
                        (0, r.jsx)(h.A, {
                            onClick: N,
                            isHoveringOrFocusing: g,
                            currentUser: i,
                            wishlistOwner: n,
                            isOwned: A,
                        }),
                        A &&
                            (0, r.jsx)(j.gS, {
                                isHoveringOrFocusing: g,
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
                    var u, p;
                    l = (0, r.jsx)(c.un, {
                        title: d.title,
                        body: null != (u = d.body) ? u : "",
                        asset: null == (p = d.renderIcon) ? void 0 : p.call(d, t),
                        assetSize: b.Q8,
                        position: "top",
                        asContainer: !0,
                        delay: b.Zh,
                        children: e,
                    });
                }
            return l;
        }, [d, t, s, g, A, N, m, f, o, n, i]);
    return null == t.sku
        ? null
        : (0, r.jsxs)("div", {
              className: w.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: S ? w.B8 : void 0,
                      children: R,
                  }),
                  k,
                  n.id === i.id &&
                      (0, r.jsx)(O.A, {
                          wishlistId: v,
                          sku: t.sku,
                          analyticsLocations: _,
                          isHoveringOrFocusing: g,
                          onHoverOrFocusChange: T,
                      }),
              ],
          });
}

function S(e) {
    var t;
    let { item: n, isItemOwned: i, wishlistOwner: a, currentUser: o, analyticsLocations: s } = e,
        c = P(e, ["item", "isItemOwned", "wishlistOwner", "currentUser", "analyticsLocations"]),
        u = (0, f.h)(null == (t = n.sku) ? void 0 : t.applicationId),
        d = l.useMemo(
            () => () => {
                if (null == n.sku) return;
                let e = a.id === o.id;
                (0, x.T)({
                    isOwner: e,
                    giftingOrigin: _.vQ.USER_PROFILE_WISHLIST,
                    profileOwner: a,
                    isItemOwned: i,
                    application: null != u ? u : void 0,
                    sku: n.sku,
                    analyticsLocations: null != s ? s : [],
                });
            },
            [n.sku, a, o.id, i, u, s],
        );
    return (0, r.jsx)(
        E,
        A(
            {
                item: n,
                wishlistOwner: a,
                isItemOwned: i,
                onClick: d,
                analyticsLocations: s,
                currentUser: o,
            },
            c,
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
            isHoveringOrFocusing: c,
        } = e,
        u = P(e, ["item", "wishlistOwner", "isItemOwned", "analyticsLocations", "currentUser", "isHoveringOrFocusing"]),
        d = l.useMemo(() => {
            var e, n;
            if (
                null != t.sku &&
                t.sku.productLine === v.EZt.COLLECTIBLES &&
                (null == (n = t.sku.tenantMetadata) || null == (e = n.collectibles) ? void 0 : e.type) !==
                    o.R.PROFILE_EFFECT
            )
                return w.mn;
        }, [t.sku]),
        f = l.useMemo(
            () => () => {
                if (null == t.sku) return;
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
            [t.sku, i, n, s.id, a],
        );
    return (0, r.jsx)(
        E,
        A(
            {
                item: t,
                wishlistOwner: n,
                isItemOwned: i,
                currentUser: s,
                onClick: f,
                isHoveringOrFocusing: c,
                skuPreviewStyle: c ? d : void 0,
                analyticsLocations: a,
            },
            u,
        ),
    );
}

function C(e) {
    var t;
    let { item: n, wishlistOwner: i, wishlistId: a, analyticsLocations: o } = e,
        c = P(e, ["item", "wishlistOwner", "wishlistId", "analyticsLocations"]),
        { analyticsLocations: f } = (0, d.Ay)(
            ...(null != o ? o : []),
            (null == (t = n.sku) ? void 0 : t.productLine) === v.EZt.SOCIAL_LAYER_GAME_ITEM
                ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD
                : [],
        ),
        p = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        [b, y] = l.useState(!1),
        O = (0, s.bG)([m.A], () => m.A.hasSentGift(n.skuId, i.id), [i, n.skuId]),
        j = l.useMemo(() => !0 === n.isOwned || O, [n.isOwned, O]);
    if (null == n.sku || null == p) return null;
    switch (n.sku.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, r.jsx)(
                S,
                A(
                    {
                        item: n,
                        analyticsLocations: f,
                        isHoveringOrFocusing: b,
                        setIsHoveringOrFocusing: y,
                        currentUser: p,
                        isItemOwned: j,
                        wishlistOwner: i,
                        wishlistId: a,
                    },
                    c,
                ),
            );
        case v.EZt.COLLECTIBLES:
            return (0, r.jsx)(
                T,
                A(
                    {
                        item: n,
                        analyticsLocations: f,
                        isHoveringOrFocusing: b,
                        setIsHoveringOrFocusing: y,
                        currentUser: p,
                        isItemOwned: j,
                        wishlistOwner: i,
                        wishlistId: a,
                    },
                    c,
                ),
            );
        default:
            return null;
    }
}
