n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(979554),
    c = n(311570),
    u = n(442837),
    d = n(681715),
    p = n(481060),
    f = n(727637),
    h = n(100527),
    g = n(906732),
    m = n(597688),
    b = n(237031),
    _ = n(616066),
    O = n(22267),
    E = n(956472),
    v = n(333867),
    y = n(876917),
    I = n(703656),
    S = n(89196),
    C = n(823379),
    T = n(221292),
    N = n(892001),
    j = n(461631),
    P = n(228168),
    x = n(981631),
    A = n(215023),
    Z = n(474936),
    w = n(388032),
    L = n(232644);
function R(e) {
    let { item: t, profileOwner: n, wishlistId: l, isOwner: R } = e,
        D = i.useRef(null),
        k = i.useRef(null),
        M = t.collectiblesItem,
        { analyticsLocations: U } = (0, g.ZP)(),
        G = (0, o.TH)(),
        [B] = (0, u.Wu)([S.Z], () => [S.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]),
        H = (0, f.Z)(D) && !B,
        V = B ? void 0 : t.skuName,
        F = R ? w.t.FdGl5O : w.t.ilhtIS,
        z = R ? void 0 : p.OgN,
        W = (0, r.jsx)("div", {
            className: L.cardStateIconWrapper,
            children: (0, r.jsx)(p.sV5, {
                size: "custom",
                color: p.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(L.cardStateIcon, L.checkmark),
            }),
        }),
        q = (0, r.jsx)("div", {
            className: L.overlay,
            children: (0, r.jsx)(p.zxk, {
                focusProps: { ringTarget: k },
                variant: "primary",
                size: "sm",
                text: w.intl.string(F),
                icon: z,
                onClick: (e) => {
                    e.stopPropagation(), K();
                },
                fullWidth: !0,
            }),
        }),
        Y = i.useCallback(() => {
            if (G.pathname.startsWith(x.Z5c.COLLECTIBLES_SHOP)) {
                let e = m.Z.getProduct(t.skuId),
                    n = m.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, N.closeUserProfileModal)(),
                        (0, b.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, E.oQ)({ product: e }),
                            analyticsLocations: U,
                            analyticsSource: h.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: A.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, N.closeUserProfileModal)(),
                (0, I.uL)("".concat(x.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [G.pathname, t.skuId, U]),
        K = () => {
            if (
                ((0, T.Er)({
                    wishlistId: l,
                    action: P.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: U,
                }),
                R)
            )
                Y();
            else {
                if (B) return;
                (0, v.Z)({
                    skuId: t.skuId,
                    isGift: !0,
                    giftingOrigin: Z.Wt.USER_PROFILE_WISHLIST,
                    analyticsLocations: U,
                    giftRecipient: n,
                    variantsReturnStyle: c.v.VARIANTS_GROUP,
                });
            }
        };
    return (0, r.jsxs)("div", {
        ref: D,
        className: L.container,
        children: [
            (0, r.jsx)(d.u, {
                asContainer: !0,
                text: V,
                children: (0, r.jsxs)("div", {
                    ref: k,
                    className: a()(L.card, { [L.giftSent]: B }),
                    onClick: K,
                    children: [
                        (0, r.jsx)(p.nn4, {
                            children: (0, r.jsx)(p.H, {
                                children: (() => {
                                    let e = M.type;
                                    switch (e) {
                                        case s.Z.AVATAR_DECORATION:
                                            return w.intl.formatToPlainString(w.t.IQQYeX, { itemName: t.skuName });
                                        case s.Z.PROFILE_EFFECT:
                                            return w.intl.formatToPlainString(w.t["x/MGW1"], { itemName: t.skuName });
                                        case s.Z.NAMEPLATE:
                                            return w.intl.formatToPlainString(w.t.eVNt6O, { itemName: t.skuName });
                                        default:
                                            (0, C.vE)(e);
                                    }
                                })(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: L.cardPreview,
                            children: (() => {
                                switch (M.type) {
                                    case s.Z.PROFILE_EFFECT:
                                        return (0, r.jsx)("div", {
                                            className: L.profileEffectPreview,
                                            children: (0, r.jsx)(y.Z, {
                                                skuId: M.skuId,
                                                isHovering: H,
                                                isPurchased: !1,
                                                removeSetHeight: !0,
                                            }),
                                        });
                                    case s.Z.AVATAR_DECORATION:
                                        return (0, r.jsx)("div", {
                                            className: L.avatarDecorationPreview,
                                            children: (0, r.jsx)(_.R, {
                                                item: M,
                                                user: n,
                                                isHighlighted: H,
                                                isPurchased: !1,
                                                avatarSize: p.EFr.SIZE_80,
                                            }),
                                        });
                                    case s.Z.NAMEPLATE:
                                        return (0, r.jsxs)("div", {
                                            className: L.nameplatePreview,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: L.nameplateTopLeft,
                                                    children: (0, r.jsx)(O.Z, {
                                                        user: n,
                                                        nameplate: M,
                                                        isHighlighted: H,
                                                        showPlaceholderUser: !0,
                                                        showStatus: !0,
                                                        isPurchased: !1,
                                                        nameplatePreviewSize: "default",
                                                        width: 200,
                                                    }),
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: L.nameplateBottomRight,
                                                    "aria-hidden": !0,
                                                    children: (0, r.jsx)(O.Z, {
                                                        user: n,
                                                        nameplate: M,
                                                        isHighlighted: H,
                                                        showPlaceholderUser: !0,
                                                        showStatus: !0,
                                                        isPurchased: !1,
                                                        nameplatePreviewSize: "default",
                                                        width: 200,
                                                    }),
                                                }),
                                            ],
                                        });
                                    default:
                                        return null;
                                }
                            })(),
                        }),
                        B && W,
                        !B && q,
                    ],
                }),
            }),
            R &&
                (0, r.jsx)(j.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: l,
                    className: L.removeItemButton,
                }),
        ],
    });
}
