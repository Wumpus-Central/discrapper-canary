n.d(t, {
    Z: () => M,
    w: () => k,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(979554),
    c = n(311570),
    u = n(442837),
    d = n(481060),
    p = n(100527),
    f = n(906732),
    h = n(597688),
    g = n(237031),
    m = n(616066),
    b = n(22267),
    _ = n(956472),
    O = n(104505),
    E = n(333867),
    v = n(876917),
    y = n(703656),
    I = n(89196),
    C = n(602733),
    S = n(823379),
    T = n(221292),
    N = n(892001),
    j = n(461631),
    P = n(228168),
    x = n(981631),
    A = n(215023),
    Z = n(474936),
    w = n(388032),
    L = n(232644),
    R = n(660097);
let D = (e) => {
    let { size: t = d.EFr.SIZE_80 } = e;
    return (0, r.jsx)(d.qEK, {
        className: L.placeholderAvatar,
        src: R,
        size: t,
        "aria-label": w.intl.string(w.t.lqaIxM),
    });
};
function k(e) {
    let { size: t = "lg" } = e,
        n = i.useRef(null),
        l = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: L.container,
        children: (0, r.jsx)("div", {
            ref: l,
            className: a()(L.card, L.placeholderCard, {
                [L.smallCard]: "sm" === t,
                [L.largeCard]: "lg" === t,
            }),
            children: (0, r.jsx)("div", {
                className: L.cardPreview,
                children: (0, r.jsx)("div", {
                    className: L.avatarDecorationPreview,
                    children: (0, r.jsx)(D, { size: d.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function M(e) {
    let {
            item: t,
            profileOwner: n,
            wishlistId: l,
            isOwner: R,
            size: D = "lg",
            showIcons: k = !1,
            collectibleSource: M = C.lr.WISHLIST,
            giftingOrigin: U = Z.Wt.USER_PROFILE_WISHLIST,
        } = e,
        G = i.useRef(null),
        B = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, O.Z)(B),
        { analyticsLocations: V } = (0, f.ZP)(),
        F = (0, o.TH)(),
        z = i.useCallback(() => {
            if (F.pathname.startsWith(x.Z5c.COLLECTIBLES_SHOP)) {
                let e = h.Z.getProduct(t.skuId),
                    n = h.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, N.closeUserProfileModal)(),
                        (0, g.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, _.oQ)({ product: e }),
                            analyticsLocations: V,
                            analyticsSource: p.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: A.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, N.closeUserProfileModal)(),
                (0, y.uL)("".concat(x.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [F.pathname, t.skuId, V]),
        W = t.collectiblesItem,
        Y = W.type,
        [q] = (0, u.Wu)([I.Z], () => [I.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]),
        K = !q && H,
        Q = R ? w.t.FdGl5O : w.t.ilhtIS,
        X = R ? void 0 : d.OgN,
        J = (0, r.jsx)("div", {
            className: L.cardStateIconWrapper,
            children: (0, r.jsx)(d.sV5, {
                size: "custom",
                color: d.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(L.cardStateIcon, L.checkmark),
            }),
        }),
        $ = (0, r.jsx)("div", {
            className: L.overlay,
            children: (0, r.jsx)(d.Button, {
                focusProps: { ringTarget: B },
                variant: "primary",
                size: "sm",
                text: w.intl.string(Q),
                icon: X,
                onClick: (e) => {
                    e.stopPropagation(), ee();
                },
                fullWidth: !0,
            }),
        }),
        ee = () => {
            if (
                ((0, T.Er)({
                    wishlistId: l,
                    action: P.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: V,
                }),
                R)
            )
                z();
            else {
                if (q) return;
                (0, E.Z)({
                    skuId: t.skuId,
                    isGift: !0,
                    giftingOrigin: U,
                    analyticsLocations: V,
                    giftRecipient: n,
                    variantsReturnStyle: c.v.VARIANTS_GROUP,
                });
            }
        };
    return (0, r.jsxs)("div", {
        ref: G,
        className: L.container,
        children: [
            (0, r.jsxs)("div", {
                ref: B,
                className: a()(L.card, {
                    [L.giftSent]: q,
                    [L.smallCard]: "sm" === D,
                    [L.largeCard]: "lg" === D,
                }),
                onClick: ee,
                children: [
                    (0, r.jsx)(d.nn4, {
                        children: (0, r.jsx)(d.H, {
                            children: (() => {
                                switch (Y) {
                                    case s.Z.AVATAR_DECORATION:
                                        return w.intl.formatToPlainString(w.t.IQQYeX, { itemName: t.skuName });
                                    case s.Z.PROFILE_EFFECT:
                                        return w.intl.formatToPlainString(w.t["x/MGW1"], { itemName: t.skuName });
                                    case s.Z.NAMEPLATE:
                                        return w.intl.formatToPlainString(w.t.eVNt6O, { itemName: t.skuName });
                                    default:
                                        (0, S.vE)(Y);
                                }
                            })(),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: L.cardPreview,
                        children: (() => {
                            switch (W.type) {
                                case s.Z.PROFILE_EFFECT:
                                    return (0, r.jsx)("div", {
                                        className: L.profileEffectPreview,
                                        children: (0, r.jsx)(v.Z, {
                                            skuId: W.skuId,
                                            isHighlighted: K,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case s.Z.AVATAR_DECORATION:
                                    return (0, r.jsx)("div", {
                                        className: L.avatarDecorationPreview,
                                        children: (0, r.jsx)(m.R, {
                                            item: W,
                                            user: n,
                                            isHighlighted: K,
                                            isPurchased: !1,
                                            avatarSize: d.EFr.SIZE_80,
                                        }),
                                    });
                                case s.Z.NAMEPLATE:
                                    return (0, r.jsxs)("div", {
                                        className: L.nameplatePreview,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: L.nameplateTopLeft,
                                                children: (0, r.jsx)(b.Z, {
                                                    user: n,
                                                    nameplate: W,
                                                    isHighlighted: K,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === D ? 136 : 200,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: L.nameplateBottomRight,
                                                "aria-hidden": !0,
                                                children: (0, r.jsx)(b.Z, {
                                                    user: n,
                                                    nameplate: W,
                                                    isHighlighted: K,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === D ? 136 : 200,
                                                }),
                                            }),
                                        ],
                                    });
                                default:
                                    return null;
                            }
                        })(),
                    }),
                    q && J,
                    !q && $,
                ],
            }),
            k
                ? M === C.lr.WISHLIST
                    ? (0, r.jsx)("div", {
                          className: L.itemIcon,
                          children: (0, r.jsx)(d.h_8, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              colorClass: L.itemIconHeart,
                          }),
                      })
                    : M === C.lr.POPULAR
                      ? (0, r.jsx)("div", {
                            className: L.itemIcon,
                            children: (0, r.jsx)(d.EOn, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "white",
                            }),
                        })
                      : null
                : null,
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
