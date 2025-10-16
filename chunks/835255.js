n.d(t, {
    Z: () => M,
    w: () => B,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(843611),
    s = n(979554),
    c = n(311570),
    u = n(442837),
    d = n(681715),
    f = n(481060),
    g = n(100527),
    p = n(906732),
    m = n(597688),
    b = n(237031),
    h = n(616066),
    v = n(22267),
    y = n(956472),
    j = n(104505),
    O = n(333867),
    x = n(876917),
    _ = n(703656),
    P = n(89196),
    I = n(602733),
    w = n(823379),
    S = n(51144),
    E = n(221292),
    T = n(892001),
    C = n(461631),
    N = n(228168),
    A = n(981631),
    D = n(215023),
    k = n(474936),
    Z = n(388032),
    R = n(232644),
    L = n(660097);
let G = (e) => {
    let { size: t = f.EFr.SIZE_80 } = e;
    return (0, r.jsx)(f.qEK, {
        className: R.placeholderAvatar,
        src: L,
        size: t,
        "aria-label": Z.intl.string(Z.t.lqaIxM),
    });
};
function B(e) {
    let { size: t = "lg" } = e,
        n = i.useRef(null),
        a = i.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: R.container,
        children: (0, r.jsx)("div", {
            ref: a,
            className: l()(R.card, R.placeholderCard, {
                [R.smallCard]: "sm" === t,
                [R.largeCard]: "lg" === t,
            }),
            children: (0, r.jsx)("div", {
                className: R.cardPreview,
                children: (0, r.jsx)("div", {
                    className: R.avatarDecorationPreview,
                    children: (0, r.jsx)(G, { size: f.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function M(e) {
    let {
            item: t,
            profileOwner: n,
            wishlistId: a,
            isOwner: L,
            size: G = "lg",
            showIcons: B = !1,
            collectibleSource: M = I.lr.WISHLIST,
            disableHoverEffects: F = !1,
            giftingOrigin: U = k.Wt.USER_PROFILE_WISHLIST,
        } = e,
        W = i.useRef(null),
        H = i.useRef(null),
        { isHoveringOrFocusing: z } = (0, j.Z)(H),
        { analyticsLocations: V } = (0, p.ZP)(),
        K = (0, o.TH)(),
        Y = i.useCallback(() => {
            if (K.pathname.startsWith(A.Z5c.COLLECTIBLES_SHOP)) {
                let e = m.Z.getProduct(t.skuId),
                    n = m.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, T.closeUserProfileModal)(),
                        (0, b.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, y.oQ)({ product: e }),
                            analyticsLocations: V,
                            analyticsSource: g.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: D.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, T.closeUserProfileModal)(),
                (0, _.uL)("".concat(A.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [K.pathname, t.skuId, V]),
        X = t.collectiblesItem,
        q = X.type,
        [Q] = (0, u.Wu)([P.Z], () => [P.Z.hasSentGift(t.skuId, n.id)], [t.skuId, n.id]),
        J = !Q && z,
        $ = L ? Z.t.FdGl5O : Z.t.ilhtIS,
        ee = L ? void 0 : f.OgN,
        et = (0, r.jsx)("div", {
            className: R.cardStateIconWrapper,
            children: (0, r.jsx)(f.sV5, {
                size: "custom",
                color: f.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: l()(R.cardStateIcon, R.checkmark),
            }),
        }),
        en = (0, r.jsx)("div", {
            className: R.overlay,
            children: (0, r.jsx)(f.Button, {
                focusProps: { ringTarget: H },
                variant: "primary",
                size: "sm",
                text: Z.intl.string($),
                icon: ee,
                onClick: (e) => {
                    e.stopPropagation(), er();
                },
                fullWidth: !0,
            }),
        }),
        er = () => {
            if (
                (null != a &&
                    (0, E.Er)({
                        wishlistId: a,
                        action: N.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: V,
                    }),
                L)
            )
                Y();
            else {
                if (Q) return;
                (0, O.Z)({
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
        ref: W,
        className: R.container,
        children: [
            (0, r.jsxs)("div", {
                ref: H,
                className: l()(R.card, {
                    [R.giftSent]: Q,
                    [R.smallCard]: "sm" === G,
                    [R.largeCard]: "lg" === G,
                }),
                onClick: er,
                children: [
                    (0, r.jsx)(f.nn4, {
                        children: (0, r.jsx)(f.H, {
                            children: (() => {
                                switch (q) {
                                    case s.Z.AVATAR_DECORATION:
                                        return Z.intl.formatToPlainString(Z.t.IQQYeX, { itemName: t.skuName });
                                    case s.Z.PROFILE_EFFECT:
                                        return Z.intl.formatToPlainString(Z.t["x/MGW1"], { itemName: t.skuName });
                                    case s.Z.NAMEPLATE:
                                        return Z.intl.formatToPlainString(Z.t.eVNt6O, { itemName: t.skuName });
                                    default:
                                        (0, w.vE)(q);
                                }
                            })(),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: R.cardPreview,
                        children: (() => {
                            switch (X.type) {
                                case s.Z.PROFILE_EFFECT:
                                    return (0, r.jsx)("div", {
                                        className: R.profileEffectPreview,
                                        children: (0, r.jsx)(x.Z, {
                                            skuId: X.skuId,
                                            isHighlighted: J,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case s.Z.AVATAR_DECORATION:
                                    return (0, r.jsx)("div", {
                                        className: R.avatarDecorationPreview,
                                        children: (0, r.jsx)(h.R, {
                                            item: X,
                                            user: n,
                                            isHighlighted: J,
                                            isPurchased: !1,
                                            avatarSize: f.EFr.SIZE_80,
                                        }),
                                    });
                                case s.Z.NAMEPLATE:
                                    return (0, r.jsxs)("div", {
                                        className: R.nameplatePreview,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: R.nameplateTopLeft,
                                                children: (0, r.jsx)(v.Z, {
                                                    user: n,
                                                    nameplate: X,
                                                    isHighlighted: J,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === G ? 136 : 200,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: R.nameplateBottomRight,
                                                "aria-hidden": !0,
                                                children: (0, r.jsx)(v.Z, {
                                                    user: n,
                                                    nameplate: X,
                                                    isHighlighted: J,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === G ? 136 : 200,
                                                }),
                                            }),
                                        ],
                                    });
                                default:
                                    return null;
                            }
                        })(),
                    }),
                    Q && et,
                    !Q && !F && en,
                ],
            }),
            B
                ? M === I.lr.WISHLIST
                    ? (0, r.jsx)("div", {
                          className: R.itemIcon,
                          children: (0, r.jsx)(d.u, {
                              text: Z.intl.formatToPlainString(Z.t.p3RmJC, { username: S.ZP.getName(n) }),
                              position: "top",
                              children: (0, r.jsx)(f.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: R.itemIconHeart,
                              }),
                          }),
                      })
                    : M === I.lr.POPULAR
                      ? (0, r.jsx)("div", {
                            className: R.itemIcon,
                            children: (0, r.jsx)(d.u, {
                                text: Z.intl.string(Z.t.Ig6VDA),
                                position: "top",
                                children: (0, r.jsx)(f.EOn, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                    colorClass: R.itemIconShop,
                                }),
                            }),
                        })
                      : null
                : null,
            L &&
                null != a &&
                (0, r.jsx)(C.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: a,
                    className: R.removeItemButton,
                }),
        ],
    });
}
