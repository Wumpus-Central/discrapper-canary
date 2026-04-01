i.d(t, { A: () => L });
var r = i(627968),
    s = i(64700),
    n = i(688810),
    l = i(713517),
    u = i(532794),
    o = i(87719),
    a = i(607123),
    d = i(594832),
    c = i(662349),
    I = i(474090),
    h = i(657331),
    m = i(798048),
    g = i(788868),
    S = i(913110);
let f = new Set([m.Y.MEDIUM, m.Y.LARGE, m.Y.FLEX]);
function L(e) {
    let {
            item: t,
            profileOwner: i,
            wishlistId: L,
            isOwner: A,
            cardSize: E = m.Y.MEDIUM,
            showOverlayButton: x = !0,
            source: k = d.uS.WISHLIST,
            giftingOrigin: M = g.vQ.USER_PROFILE_WISHLIST,
            onWishlistItemClick: v,
            analyticsLocations: j,
            isDragging: w = !1,
            dragHandle: C,
        } = e,
        { analyticsLocations: p } = (0, n.Ay)(...(j ?? [])),
        R = s.useRef(null),
        { isHoveringOrFocusing: y } = (0, l.A)(R),
        O = A && (0, I.ki)(i, g.WN[t.skuId]),
        { label: _, icon: b } = (0, c.h)({
            sku: t.sku,
            wishlistOwner: i,
            isOwned: O,
            location: "PremiumWishlistItemCard",
        }),
        U = s.useCallback(() => {
            A
                ? ((0, h.closeUserProfileModal)(), (0, o.x)())
                : (v?.(),
                  (0, u.A)({
                      isGift: !0,
                      giftRecipient: i,
                      giftingOrigin: M,
                      subscriptionTier: t.skuId,
                      analyticsLocations: p,
                  }));
        }, [A, i, M, t.skuId, p, v]),
        T = y && !w && f.has(E),
        P = s.useCallback(
            () =>
                (0, r.jsx)("div", {
                    className: S.MO,
                    children: (0, r.jsx)(a.JY, { eventTargetRef: R, assetClassName: T ? S.iR : void 0 }),
                }),
            [T],
        );
    return (0, r.jsx)(m.A, {
        item: t,
        wishlistId: L,
        isOwner: A,
        cardSize: E,
        showOverlayButton: x,
        cardRef: R,
        accessibleLabel: t.sku.name,
        onCardClick: U,
        buttonCTALabel: _,
        buttonIcon: b,
        isOwned: O,
        renderItemPreview: P,
        dragHandle: C,
        giftingOrigin: M,
        source: k,
    });
}
