n.d(t, { Z: () => A });
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(979554),
    o = n(311570),
    s = n(681715),
    c = n(481060),
    u = n(727637),
    d = n(100527),
    p = n(906732),
    f = n(597688),
    h = n(237031),
    g = n(616066),
    m = n(22267),
    b = n(956472),
    _ = n(333867),
    O = n(876917),
    E = n(703656),
    y = n(823379),
    v = n(221292),
    I = n(892001),
    C = n(461631),
    S = n(228168),
    T = n(981631),
    N = n(215023),
    j = n(474936),
    P = n(388032),
    x = n(988388);
function A(e) {
    let { item: t, profileOwner: n, wishlistId: A, isOwner: Z } = e,
        w = i.useRef(null),
        L = i.useRef(null),
        R = t.collectiblesItem,
        { analyticsLocations: D } = (0, p.ZP)(),
        k = (0, u.Z)(w),
        M = (0, l.TH)(),
        U = i.useCallback(() => {
            if (M.pathname.startsWith(T.Z5c.COLLECTIBLES_SHOP)) {
                let e = f.Z.getProduct(t.skuId),
                    n = f.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, I.closeUserProfileModal)(),
                        (0, h.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, b.oQ)({ product: e }),
                            analyticsLocations: D,
                            analyticsSource: d.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: N.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, I.closeUserProfileModal)(),
                (0, E.uL)("".concat(T.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [M.pathname, t.skuId, D]),
        G = () => {
            (0, v.Er)({
                wishlistId: A,
                action: S.NW.WISHLIST_ITEM_CLICKED,
                skuId: t.skuId,
                analyticsLocations: D,
            }),
                Z
                    ? U()
                    : (0, _.Z)({
                          skuId: t.skuId,
                          isGift: !0,
                          giftingOrigin: j.Wt.USER_PROFILE_WISHLIST,
                          analyticsLocations: D,
                          giftRecipient: n,
                          variantsReturnStyle: o.v.VARIANTS_GROUP,
                      });
        };
    return (0, r.jsxs)("div", {
        ref: w,
        className: x.container,
        children: [
            (0, r.jsx)(s.u, {
                asContainer: !0,
                text: t.skuName,
                children: (0, r.jsxs)("div", {
                    ref: L,
                    className: x.card,
                    onClick: G,
                    children: [
                        (0, r.jsx)(c.nn4, {
                            children: (0, r.jsx)(c.H, {
                                children: (() => {
                                    let e = R.type;
                                    switch (e) {
                                        case a.Z.AVATAR_DECORATION:
                                            return P.intl.formatToPlainString(P.t.IQQYeX, { itemName: t.skuName });
                                        case a.Z.PROFILE_EFFECT:
                                            return P.intl.formatToPlainString(P.t["x/MGW1"], { itemName: t.skuName });
                                        case a.Z.NAMEPLATE:
                                            return P.intl.formatToPlainString(P.t.eVNt6O, { itemName: t.skuName });
                                        default:
                                            (0, y.vE)(e);
                                    }
                                })(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.cardPreview,
                            children: (() => {
                                switch (R.type) {
                                    case a.Z.PROFILE_EFFECT:
                                        return (0, r.jsx)("div", {
                                            className: x.profileEffectPreview,
                                            children: (0, r.jsx)(O.Z, {
                                                skuId: R.skuId,
                                                isHovering: k,
                                                isPurchased: !1,
                                                removeSetHeight: !0,
                                            }),
                                        });
                                    case a.Z.AVATAR_DECORATION:
                                        return (0, r.jsx)("div", {
                                            className: x.avatarDecorationPreview,
                                            children: (0, r.jsx)(g.R, {
                                                item: R,
                                                user: n,
                                                isHighlighted: k,
                                                isPurchased: !1,
                                                avatarSize: c.EFr.SIZE_80,
                                            }),
                                        });
                                    case a.Z.NAMEPLATE:
                                        return (0, r.jsxs)("div", {
                                            className: x.nameplatePreview,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: x.nameplateTopLeft,
                                                    children: (0, r.jsx)(m.Z, {
                                                        user: n,
                                                        nameplate: R,
                                                        isHighlighted: k,
                                                        showPlaceholderUser: !0,
                                                        showStatus: !0,
                                                        isPurchased: !1,
                                                        nameplatePreviewSize: "default",
                                                        width: 200,
                                                    }),
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: x.nameplateBottomRight,
                                                    "aria-hidden": !0,
                                                    children: (0, r.jsx)(m.Z, {
                                                        user: n,
                                                        nameplate: R,
                                                        isHighlighted: k,
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
                        (0, r.jsx)("div", {
                            className: x.overlay,
                            children: (0, r.jsx)(c.zxk, {
                                focusProps: { ringTarget: L },
                                variant: "primary",
                                size: "sm",
                                text: P.intl.string(Z ? P.t.FdGl5O : P.t.ilhtIS),
                                icon: Z ? void 0 : c.OgN,
                                onClick: (e) => {
                                    e.stopPropagation(), G();
                                },
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            Z &&
                (0, r.jsx)(C.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: A,
                    className: x.removeItemButton,
                }),
        ],
    });
}
