i.d(t, { A: () => A });
var r = i(627968),
    s = i(64700),
    n = i(688810),
    l = i(713517),
    u = i(532794),
    o = i(976860),
    a = i(607123),
    d = i(594832),
    c = i(662349),
    I = i(474090),
    h = i(657331),
    m = i(798048),
    S = i(652215),
    g = i(788868),
    L = i(913110);
let f = new Set([m.Y.MEDIUM, m.Y.LARGE, m.Y.FLEX]);
function A(e) {
    let {
            item: t,
            profileOwner: i,
            wishlistId: A,
            isOwner: E,
            cardSize: x = m.Y.MEDIUM,
            showOverlayButton: k = !0,
            source: M = d.uS.WISHLIST,
            giftingOrigin: v = g.vQ.USER_PROFILE_WISHLIST,
            onWishlistItemClick: C,
            analyticsLocations: j,
            isDragging: p = !1,
            dragHandle: w,
        } = e,
        { analyticsLocations: R } = (0, n.Ay)(...(j ?? [])),
        O = s.useRef(null),
        { isHoveringOrFocusing: y } = (0, l.A)(O),
        _ = E && (0, I.ki)(i, g.WN[t.skuId]),
        { label: b, icon: T } = (0, c.h)({
            sku: t.sku,
            wishlistOwner: i,
            isOwned: _,
            location: "PremiumWishlistItemCard",
        }),
        U = s.useCallback(() => {
            E
                ? ((0, h.closeUserProfileModal)(), (0, o.pX)(S.BVt.APPLICATION_STORE))
                : (C?.(),
                  (0, u.A)({
                      isGift: !0,
                      giftRecipient: i,
                      giftingOrigin: v,
                      subscriptionTier: t.skuId,
                      analyticsLocations: R,
                  }));
        }, [E, i, v, t.skuId, R, C]),
        P = y && !p && f.has(x),
        N = s.useCallback(
            () =>
                (0, r.jsx)("div", {
                    className: L.MO,
                    children: (0, r.jsx)(a.JY, { eventTargetRef: O, assetClassName: P ? L.iR : void 0 }),
                }),
            [P],
        );
    return (0, r.jsx)(m.A, {
        item: t,
        wishlistId: A,
        isOwner: E,
        cardSize: x,
        showOverlayButton: k,
        cardRef: O,
        accessibleLabel: t.sku.name,
        onCardClick: U,
        buttonCTALabel: b,
        buttonIcon: T,
        isOwned: _,
        renderItemPreview: N,
        dragHandle: w,
        giftingOrigin: v,
        source: M,
    });
}
