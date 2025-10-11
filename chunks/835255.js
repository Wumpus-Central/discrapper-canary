n.d(t, { Z: () => D }), n(388685);
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
    f = n(100527),
    h = n(906732),
    g = n(597688),
    m = n(237031),
    b = n(616066),
    _ = n(22267),
    O = n(956472),
    E = n(104505),
    v = n(333867),
    y = n(876917),
    I = n(703656),
    C = n(89196),
    S = n(602733),
    T = n(823379),
    N = n(221292),
    j = n(892001),
    P = n(461631),
    x = n(228168),
    A = n(981631),
    Z = n(215023),
    w = n(474936),
    L = n(388032),
    R = n(232644);
function D(e) {
    let {
            item: t,
            profileOwner: n,
            wishlistId: l,
            isOwner: D,
            size: k = "lg",
            showIcons: M = !1,
            collectibleSource: U = S.lr.WISHLIST,
        } = e,
        G = i.useRef(null),
        B = i.useRef(null),
        { isHoveringOrFocusing: H } = (0, E.Z)(B),
        V = t.collectiblesItem,
        { analyticsLocations: F } = (0, h.ZP)(),
        z = (0, o.TH)(),
        W = V.type,
        [Y] = (0, u.Wu)([C.Z], () => [C.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]),
        q = !Y && H,
        K = Y ? void 0 : t.skuName,
        Q = D ? L.t.FdGl5O : L.t.ilhtIS,
        X = D ? void 0 : p.OgN,
        J = (0, r.jsx)("div", {
            className: R.cardStateIconWrapper,
            children: (0, r.jsx)(p.sV5, {
                size: "custom",
                color: p.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(R.cardStateIcon, R.checkmark),
            }),
        }),
        $ = (0, r.jsx)("div", {
            className: R.overlay,
            children: (0, r.jsx)(p.Button, {
                focusProps: { ringTarget: B },
                variant: "primary",
                size: "sm",
                text: L.intl.string(Q),
                icon: X,
                onClick: (e) => {
                    e.stopPropagation(), et();
                },
                fullWidth: !0,
            }),
        }),
        ee = i.useCallback(() => {
            if (z.pathname.startsWith(A.Z5c.COLLECTIBLES_SHOP)) {
                let e = g.Z.getProduct(t.skuId),
                    n = g.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, j.closeUserProfileModal)(),
                        (0, m.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, O.oQ)({ product: e }),
                            analyticsLocations: F,
                            analyticsSource: f.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: Z.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, j.closeUserProfileModal)(),
                (0, I.uL)("".concat(A.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [z.pathname, t.skuId, F]),
        et = () => {
            if (
                ((0, N.Er)({
                    wishlistId: l,
                    action: x.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: F,
                }),
                D)
            )
                ee();
            else {
                if (Y) return;
                (0, v.Z)({
                    skuId: t.skuId,
                    isGift: !0,
                    giftingOrigin: w.Wt.USER_PROFILE_WISHLIST,
                    analyticsLocations: F,
                    giftRecipient: n,
                    variantsReturnStyle: c.v.VARIANTS_GROUP,
                });
            }
        };
    return (0, r.jsxs)("div", {
        ref: G,
        className: R.container,
        children: [
            (0, r.jsxs)(d.u, {
                asContainer: !0,
                text: K,
                children: [
                    (0, r.jsxs)("div", {
                        ref: B,
                        className: a()(R.card, {
                            [R.giftSent]: Y,
                            [R.smallCard]: "sm" === k,
                            [R.largeCard]: "lg" === k,
                        }),
                        onClick: et,
                        children: [
                            (0, r.jsx)(p.nn4, {
                                children: (0, r.jsx)(p.H, {
                                    children: (() => {
                                        switch (W) {
                                            case s.Z.AVATAR_DECORATION:
                                                return L.intl.formatToPlainString(L.t.IQQYeX, { itemName: t.skuName });
                                            case s.Z.PROFILE_EFFECT:
                                                return L.intl.formatToPlainString(L.t["x/MGW1"], {
                                                    itemName: t.skuName,
                                                });
                                            case s.Z.NAMEPLATE:
                                                return L.intl.formatToPlainString(L.t.eVNt6O, { itemName: t.skuName });
                                            default:
                                                (0, T.vE)(W);
                                        }
                                    })(),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: R.cardPreview,
                                children: (() => {
                                    switch (V.type) {
                                        case s.Z.PROFILE_EFFECT:
                                            return (0, r.jsx)("div", {
                                                className: R.profileEffectPreview,
                                                children: (0, r.jsx)(y.Z, {
                                                    skuId: V.skuId,
                                                    isHighlighted: q,
                                                    isPurchased: !1,
                                                    removeSetHeight: !0,
                                                }),
                                            });
                                        case s.Z.AVATAR_DECORATION:
                                            return (0, r.jsx)("div", {
                                                className: R.avatarDecorationPreview,
                                                children: (0, r.jsx)(b.R, {
                                                    item: V,
                                                    user: n,
                                                    isHighlighted: q,
                                                    isPurchased: !1,
                                                    avatarSize: p.EFr.SIZE_80,
                                                }),
                                            });
                                        case s.Z.NAMEPLATE:
                                            return (0, r.jsxs)("div", {
                                                className: R.nameplatePreview,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: R.nameplateTopLeft,
                                                        children: (0, r.jsx)(_.Z, {
                                                            user: n,
                                                            nameplate: V,
                                                            isHighlighted: q,
                                                            showPlaceholderUser: !0,
                                                            showStatus: !0,
                                                            isPurchased: !1,
                                                            nameplatePreviewSize: "default",
                                                            width: "sm" === k ? 136 : 200,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: R.nameplateBottomRight,
                                                        "aria-hidden": !0,
                                                        children: (0, r.jsx)(_.Z, {
                                                            user: n,
                                                            nameplate: V,
                                                            isHighlighted: q,
                                                            showPlaceholderUser: !0,
                                                            showStatus: !0,
                                                            isPurchased: !1,
                                                            nameplatePreviewSize: "default",
                                                            width: "sm" === k ? 136 : 200,
                                                        }),
                                                    }),
                                                ],
                                            });
                                        default:
                                            return null;
                                    }
                                })(),
                            }),
                            Y && J,
                            !Y && $,
                        ],
                    }),
                    M
                        ? U === S.lr.WISHLIST
                            ? (0, r.jsx)("div", {
                                  className: R.itemIcon,
                                  children: (0, r.jsx)(p.h_8, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      colorClass: R.itemIconHeart,
                                  }),
                              })
                            : U === S.lr.POPULAR
                              ? (0, r.jsx)("div", {
                                    className: R.itemIcon,
                                    children: (0, r.jsx)(p.EOn, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "white",
                                    }),
                                })
                              : null
                        : null,
                ],
            }),
            D &&
                (0, r.jsx)(P.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: l,
                    className: R.removeItemButton,
                }),
        ],
    });
}
