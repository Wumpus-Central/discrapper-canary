i.d(t, {
    Z: () => F,
    w: () => D,
}),
    i(388685);
var l = i(951288),
    s = i(647438),
    r = i(120356),
    n = i.n(r),
    a = i(843611),
    u = i(979554),
    c = i(311570),
    o = i(442837),
    d = i(681715),
    h = i(481060),
    I = i(100527),
    S = i(906732),
    f = i(597688),
    m = i(237031),
    p = i(616066),
    E = i(22267),
    T = i(956472),
    _ = i(104505),
    g = i(333867),
    v = i(876917),
    Z = i(703656),
    k = i(89196),
    w = i(602733),
    P = i(823379),
    x = i(51144),
    L = i(221292),
    W = i(892001),
    y = i(461631),
    C = i(228168),
    N = i(981631),
    A = i(215023),
    H = i(474936),
    j = i(388032),
    R = i(232644),
    U = i(660097);
let O = (e) => {
    let { size: t = h.EFr.SIZE_80 } = e;
    return (0, l.jsx)(h.qEK, {
        className: R.placeholderAvatar,
        src: U,
        size: t,
        "aria-label": j.intl.string(j.t.lqaIxM),
    });
};
function D(e) {
    let { size: t = "lg" } = e,
        i = s.useRef(null),
        r = s.useRef(null);
    return (0, l.jsx)("div", {
        ref: i,
        className: R.container,
        children: (0, l.jsx)("div", {
            ref: r,
            className: n()(R.card, R.placeholderCard, {
                [R.smallCard]: "sm" === t,
                [R.largeCard]: "lg" === t,
            }),
            children: (0, l.jsx)("div", {
                className: R.cardPreview,
                children: (0, l.jsx)("div", {
                    className: R.avatarDecorationPreview,
                    children: (0, l.jsx)(O, { size: h.EFr.SIZE_80 }),
                }),
            }),
        }),
    });
}
function F(e) {
    let {
            item: t,
            profileOwner: i,
            wishlistId: r,
            isOwner: U,
            size: O = "lg",
            showIcons: D = !1,
            collectibleSource: F = w.lr.WISHLIST,
            disableHoverEffects: M = !1,
            giftingOrigin: b = H.Wt.USER_PROFILE_WISHLIST,
        } = e,
        G = s.useRef(null),
        z = s.useRef(null),
        { isHoveringOrFocusing: V } = (0, _.Z)(z),
        { analyticsLocations: B } = (0, S.ZP)(),
        K = (0, a.TH)(),
        Q = s.useCallback(() => {
            if (K.pathname.startsWith(N.Z5c.COLLECTIBLES_SHOP)) {
                let e = f.Z.getProduct(t.skuId),
                    i = f.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != i) {
                    (0, W.closeUserProfileModal)(),
                        (0, m.T)({
                            product: e,
                            category: i,
                            shouldCheckoutWithOrbs: (0, T.oQ)({ product: e }),
                            analyticsLocations: B,
                            analyticsSource: I.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: A.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, W.closeUserProfileModal)(),
                (0, Z.uL)("".concat(N.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [K.pathname, t.skuId, B]),
        q = t.collectiblesItem,
        J = q.type,
        [Y] = (0, o.Wu)([k.Z], () => [k.Z.hasSentGift(t.skuId, i.id)], [t.skuId, i.id]),
        X = !Y && V,
        $ = U ? j.t.FdGl5O : j.t.ilhtIS,
        ee = U ? void 0 : h.OgN,
        et = (0, l.jsx)("div", {
            className: R.cardStateIconWrapper,
            children: (0, l.jsx)(h.sV5, {
                size: "custom",
                color: h.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: n()(R.cardStateIcon, R.checkmark),
            }),
        }),
        ei = (0, l.jsx)("div", {
            className: R.overlay,
            children: (0, l.jsx)(h.Button, {
                focusProps: { ringTarget: z },
                variant: "primary",
                size: "sm",
                text: j.intl.string($),
                icon: ee,
                onClick: (e) => {
                    e.stopPropagation(), el();
                },
                fullWidth: !0,
            }),
        }),
        el = () => {
            if (
                ((0, L.Er)({
                    wishlistId: r,
                    action: C.NW.WISHLIST_ITEM_CLICKED,
                    skuId: t.skuId,
                    analyticsLocations: B,
                }),
                U)
            )
                Q();
            else {
                if (Y) return;
                (0, g.Z)({
                    skuId: t.skuId,
                    isGift: !0,
                    giftingOrigin: b,
                    analyticsLocations: B,
                    giftRecipient: i,
                    variantsReturnStyle: c.v.VARIANTS_GROUP,
                });
            }
        };
    return (0, l.jsxs)("div", {
        ref: G,
        className: R.container,
        children: [
            (0, l.jsxs)("div", {
                ref: z,
                className: n()(R.card, {
                    [R.giftSent]: Y,
                    [R.smallCard]: "sm" === O,
                    [R.largeCard]: "lg" === O,
                }),
                onClick: el,
                children: [
                    (0, l.jsx)(h.nn4, {
                        children: (0, l.jsx)(h.H, {
                            children: (() => {
                                switch (J) {
                                    case u.Z.AVATAR_DECORATION:
                                        return j.intl.formatToPlainString(j.t.IQQYeX, { itemName: t.skuName });
                                    case u.Z.PROFILE_EFFECT:
                                        return j.intl.formatToPlainString(j.t["x/MGW1"], { itemName: t.skuName });
                                    case u.Z.NAMEPLATE:
                                        return j.intl.formatToPlainString(j.t.eVNt6O, { itemName: t.skuName });
                                    default:
                                        (0, P.vE)(J);
                                }
                            })(),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: R.cardPreview,
                        children: (() => {
                            switch (q.type) {
                                case u.Z.PROFILE_EFFECT:
                                    return (0, l.jsx)("div", {
                                        className: R.profileEffectPreview,
                                        children: (0, l.jsx)(v.Z, {
                                            skuId: q.skuId,
                                            isHighlighted: X,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case u.Z.AVATAR_DECORATION:
                                    return (0, l.jsx)("div", {
                                        className: R.avatarDecorationPreview,
                                        children: (0, l.jsx)(p.R, {
                                            item: q,
                                            user: i,
                                            isHighlighted: X,
                                            isPurchased: !1,
                                            avatarSize: h.EFr.SIZE_80,
                                        }),
                                    });
                                case u.Z.NAMEPLATE:
                                    return (0, l.jsxs)("div", {
                                        className: R.nameplatePreview,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: R.nameplateTopLeft,
                                                children: (0, l.jsx)(E.Z, {
                                                    user: i,
                                                    nameplate: q,
                                                    isHighlighted: X,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === O ? 136 : 200,
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: R.nameplateBottomRight,
                                                "aria-hidden": !0,
                                                children: (0, l.jsx)(E.Z, {
                                                    user: i,
                                                    nameplate: q,
                                                    isHighlighted: X,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: "sm" === O ? 136 : 200,
                                                }),
                                            }),
                                        ],
                                    });
                                default:
                                    return null;
                            }
                        })(),
                    }),
                    Y && et,
                    !Y && !M && ei,
                ],
            }),
            D
                ? F === w.lr.WISHLIST
                    ? (0, l.jsx)("div", {
                          className: R.itemIcon,
                          children: (0, l.jsx)(d.u, {
                              text: j.intl.formatToPlainString(j.t.p3RmJC, { username: x.ZP.getName(i) }),
                              position: "top",
                              children: (0, l.jsx)(h.h_8, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  colorClass: R.itemIconHeart,
                              }),
                          }),
                      })
                    : F === w.lr.POPULAR
                      ? (0, l.jsx)("div", {
                            className: R.itemIcon,
                            children: (0, l.jsx)(d.u, {
                                text: j.intl.string(j.t.Ig6VDA),
                                position: "top",
                                children: (0, l.jsx)(h.EOn, {
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
            U &&
                (0, l.jsx)(y.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: r,
                    className: R.removeItemButton,
                }),
        ],
    });
}
