n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(429913),
    m = n(183555),
    g = n(287809),
    x = n(111085),
    f = n(146423),
    p = n(121547),
    h = n(460442),
    _ = n(662349),
    A = n(479026),
    I = n(699976),
    j = n(652215),
    v = n(788868),
    E = n(518477),
    T = n(894100);
let b = I.Z.SIZE_133;
function y(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: a,
            style: r,
            isDragging: o,
            dragHandle: c,
            skuPreviewStyle: d,
            isHoveringOrFocusing: u,
            setIsHoveringOrFocusing: g,
            onClick: x,
            wishlistId: A,
            analyticsLocations: I,
            isItemOwned: j,
        } = e,
        v = l.useRef(null),
        y = l.useRef(g),
        [N, C] = l.useState(!1);
    l.useEffect(() => {
        y.current = g;
    }, [g]),
        l.useEffect(() => {
            let e = v.current;
            if (null == e) return;
            let t = () => {
                y.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: S } = (0, m.NJ)(),
        k = l.useCallback(() => {
            null != t.sku &&
                (S({
                    wishlistId: A,
                    action: E.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        R = null != c ? (0, i.jsx)("div", { ref: v, className: T.BU, children: c }) : null,
        { label: w, icon: L } = (0, _.hB)({
            sku: t.sku,
            wishlistOwner: n,
            currentUser: a,
            isOwned: j,
            location: "User Profile Wishlist Item Card",
        });
    return null == t.sku
        ? null
        : (0, i.jsxs)("div", {
              className: T.kL,
              children: [
                  (0, i.jsx)("div", {
                      className: N ? T.B8 : void 0,
                      children: (0, i.jsxs)(f.A, {
                          sku: t.sku,
                          user: n,
                          spec: b,
                          cardStyle: r,
                          skuPreviewStyle: s()(T.ev, { [T.go]: j && !u }, d),
                          disableHoverOrFocus: o,
                          onHoverOrFocusChange: g,
                          onClick: k,
                          children: [
                              (0, i.jsx)(_.AJ, { spec: b, onClick: k, isHoveringOrFocusing: u, label: w, icon: L }),
                              j && (0, i.jsx)(h.gS, { isHoveringOrFocusing: u }),
                          ],
                      }),
                  }),
                  R,
                  n.id === a.id &&
                      (0, i.jsx)(p.A, {
                          wishlistId: A,
                          sku: t.sku,
                          spec: b,
                          analyticsLocations: I,
                          isHoveringOrFocusing: u,
                          onHoverOrFocusChange: C,
                      }),
              ],
          });
}
function N(e) {
    let { item: t, isItemOwned: n, wishlistOwner: a, currentUser: s, analyticsLocations: r, ...o } = e,
        c = (0, u.h)(t.sku?.applicationId),
        d = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = a.id === s.id;
                (0, A.T)({
                    isOwner: e,
                    giftingOrigin: v.vQ.USER_PROFILE_WISHLIST,
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
function C(e) {
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
                t.sku.productLine === j.EZt.COLLECTIBLES &&
                t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
            )
                return T.mn;
        }, [t.sku]),
        m = l.useMemo(
            () => () => {
                if (null == t.sku) return;
                let e = n.id === o.id;
                (0, A._)({
                    isOwner: e,
                    isItemOwned: a,
                    onWishlistItemClick: void 0,
                    profileOwner: n,
                    sku: t.sku,
                    analyticsLocations: s ?? [],
                    giftingOrigin: v.vQ.USER_PROFILE_WISHLIST,
                });
            },
            [t.sku, a, n, o.id, s],
        );
    return (0, i.jsx)(y, {
        item: t,
        wishlistOwner: n,
        isItemOwned: a,
        currentUser: o,
        onClick: m,
        isHoveringOrFocusing: c,
        skuPreviewStyle: c ? u : void 0,
        analyticsLocations: s,
        ...d,
    });
}
function S(e) {
    let { item: t, wishlistOwner: n, wishlistId: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: u } = (0, d.Ay)(
            ...(s ?? []),
            t.sku?.productLine === j.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        m = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        [f, p] = l.useState(!1),
        h = (0, o.bG)([x.A], () => x.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        _ = l.useMemo(() => !0 === t.isOwned || h, [t.isOwned, h]);
    if (null == t.sku || null == m) return null;
    switch (t.sku.productLine) {
        case j.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(N, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: f,
                setIsHoveringOrFocusing: p,
                currentUser: m,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        case j.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: f,
                setIsHoveringOrFocusing: p,
                currentUser: m,
                isItemOwned: _,
                wishlistOwner: n,
                wishlistId: a,
                ...r,
            });
        default:
            return null;
    }
}
