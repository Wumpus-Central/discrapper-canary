n.d(t, { A: () => O });
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
    h = n(46537),
    _ = n(146423),
    A = n(121547),
    I = n(460442),
    j = n(662349),
    v = n(479026),
    E = n(699976),
    T = n(652215),
    b = n(788868),
    y = n(518477),
    S = n(738878);
let N = E.Z.SIZE_133;
function C(e) {
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
            onClick: v,
            wishlistId: E,
            analyticsLocations: T,
            isItemOwned: b,
        } = e,
        C = l.useRef(null),
        k = l.useRef(f),
        [R, O] = l.useState(!1);
    l.useEffect(() => {
        k.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = () => {
                k.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: w } = (0, m.NJ)(),
        L = l.useCallback(() => {
            null != t.sku &&
                (w({
                    wishlistId: E,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                v());
        }, [v, t.sku, E, w]),
        P = null != d ? (0, i.jsx)("div", { ref: C, className: S.BU, children: d }) : null,
        { label: D, icon: G } = (0, j.hB)({
            sku: t.sku,
            wishlistOwner: n,
            currentUser: a,
            isOwned: b,
            location: "User Profile Wishlist Item Card",
        }),
        U = l.useMemo(() => {
            if (null == t.sku) return null;
            let e = (0, i.jsxs)(_.A, {
                    sku: t.sku,
                    user: n,
                    spec: N,
                    cardStyle: r,
                    skuPreviewStyle: s()(S.ev, { [S.go]: b && !x }, g),
                    disableHoverOrFocus: o,
                    onHoverOrFocusChange: f,
                    onClick: L,
                    children: [
                        (0, i.jsx)(j.AJ, { spec: N, onClick: L, isHoveringOrFocusing: x, label: D, icon: G }),
                        b && (0, i.jsx)(I.gS, { isHoveringOrFocusing: x }),
                    ],
                }),
                l = e;
            return (
                u.shouldShow &&
                    (l = (0, h.Qc)(u)
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
        }, [t, n, r, b, x, g, o, f, L, D, G, u]);
    return null == t.sku
        ? null
        : (0, i.jsxs)("div", {
              className: S.kL,
              children: [
                  (0, i.jsx)("div", { className: R ? S.B8 : void 0, children: U }),
                  P,
                  n.id === a.id &&
                      (0, i.jsx)(A.A, {
                          wishlistId: E,
                          sku: t.sku,
                          spec: N,
                          analyticsLocations: T,
                          isHoveringOrFocusing: x,
                          onHoverOrFocusChange: O,
                      }),
              ],
          });
}
function k(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        c = (0, g.h)(t.sku?.applicationId),
        d = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = a.id === s.id;
                (0, v.T)({
                    isOwner: e,
                    giftingOrigin: b.vQ.USER_PROFILE_WISHLIST,
                    profileOwner: a,
                    isItemOwned: n,
                    application: c ?? void 0,
                    sku: t.sku,
                    analyticsLocations: r ?? [],
                });
            },
            [t.sku, a, s.id, n, c, r],
        );
    return (0, i.jsx)(C, {
        item: t,
        wishlistOwner: a,
        isItemOwned: n,
        onClick: d,
        analyticsLocations: r,
        currentUser: s,
        ...o,
    });
}
function R(e) {
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
                t.sku.productLine === T.EZt.COLLECTIBLES &&
                t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
            )
                return S.mn;
        }, [t.sku]),
        g = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = n.id === o.id;
                (0, v._)({
                    isOwner: e,
                    isItemOwned: a,
                    onWishlistItemClick: void 0,
                    profileOwner: n,
                    sku: t.sku,
                    analyticsLocations: s ?? [],
                    giftingOrigin: b.vQ.USER_PROFILE_WISHLIST,
                });
            },
            [t.sku, a, n, o.id, s],
        );
    return (0, i.jsx)(C, {
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
function O(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: c } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        [m, p] = l.useState(!1),
        h = (0, o.bG)([f.A], () => f.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        _ = l.useMemo(() => !0 === t.isOwned || h, [t.isOwned, h]);
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(k, {
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
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(R, {
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
