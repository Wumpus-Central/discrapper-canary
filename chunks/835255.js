n.d(t, { Z: () => R }), n(388685);
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
    L = n(232644);
function R(e) {
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
        V = t.collectiblesItem,
        { analyticsLocations: F } = (0, f.ZP)(),
        z = (0, o.TH)(),
        W = V.type,
        [Y] = (0, u.Wu)([I.Z], () => [I.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]),
        q = !Y && H,
        K = R ? w.t.FdGl5O : w.t.ilhtIS,
        Q = R ? void 0 : d.OgN,
        X = (0, r.jsx)("div", {
            className: L.cardStateIconWrapper,
            children: (0, r.jsx)(d.sV5, {
                size: "custom",
                color: d.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(L.cardStateIcon, L.checkmark),
            }),
        }),
        J = (0, r.jsx)("div", {
            className: L.overlay,
            children: (0, r.jsx)(d.Button, {
                focusProps: { ringTarget: B },
                variant: "primary",
                size: "sm",
                text: w.intl.string(K),
                icon: Q,
                onClick: (e) => {
                    e.stopPropagation(), ee();
                },
                fullWidth: !0,
            }),
        }),
        $ = i.useCallback(() => {
            if (z.pathname.startsWith(x.Z5c.COLLECTIBLES_SHOP)) {
                let e = h.Z.getProduct(t.skuId),
                    n = h.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, N.closeUserProfileModal)(),
                        (0, g.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, _.oQ)({ product: e }),
                            analyticsLocations: F,
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
        }, [z.pathname, t.skuId, F]),
        ee = () => {
            if (
                ((0, T.Er)({
                    wishlistId: l,
                    action: P.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: F,
                }),
                R)
            )
                $();
            else {
                if (Y) return;
                (0, E.Z)({
                    skuId: t.skuId,
                    isGift: !0,
                    giftingOrigin: U,
                    analyticsLocations: F,
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
                    [L.giftSent]: Y,
                    [L.smallCard]: "sm" === D,
                    [L.largeCard]: "lg" === D,
                }),
                onClick: ee,
                children: [
                    (0, r.jsx)(d.nn4, {
                        children: (0, r.jsx)(d.H, {
                            children: (() => {
                                switch (W) {
                                    case s.Z.AVATAR_DECORATION:
                                        return w.intl.formatToPlainString(w.t.IQQYeX, { itemName: t.skuName });
                                    case s.Z.PROFILE_EFFECT:
                                        return w.intl.formatToPlainString(w.t["x/MGW1"], { itemName: t.skuName });
                                    case s.Z.NAMEPLATE:
                                        return w.intl.formatToPlainString(w.t.eVNt6O, { itemName: t.skuName });
                                    default:
                                        (0, S.vE)(W);
                                }
                            })(),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: L.cardPreview,
                        children: (() => {
                            switch (V.type) {
                                case s.Z.PROFILE_EFFECT:
                                    return (0, r.jsx)("div", {
                                        className: L.profileEffectPreview,
                                        children: (0, r.jsx)(v.Z, {
                                            skuId: V.skuId,
                                            isHighlighted: q,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case s.Z.AVATAR_DECORATION:
                                    return (0, r.jsx)("div", {
                                        className: L.avatarDecorationPreview,
                                        children: (0, r.jsx)(m.R, {
                                            item: V,
                                            user: n,
                                            isHighlighted: q,
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
                                                    nameplate: V,
                                                    isHighlighted: q,
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
                                                    nameplate: V,
                                                    isHighlighted: q,
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
                    Y && X,
                    !Y && J,
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
