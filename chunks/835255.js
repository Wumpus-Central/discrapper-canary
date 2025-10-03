n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(979554),
    o = n(311570),
    s = n(481060),
    c = n(727637),
    u = n(100527),
    d = n(906732),
    p = n(597688),
    f = n(237031),
    h = n(616066),
    g = n(22267),
    m = n(956472),
    b = n(333867),
    _ = n(876917),
    O = n(703656),
    E = n(823379),
    v = n(221292),
    y = n(892001),
    I = n(461631),
    S = n(228168),
    C = n(981631),
    T = n(215023),
    N = n(474936),
    j = n(388032),
    P = n(232644);
function x(e) {
    let { item: t, profileOwner: n, wishlistId: x, isOwner: A } = e,
        Z = i.useRef(null),
        w = i.useRef(null),
        L = t.collectiblesItem,
        { analyticsLocations: R } = (0, d.ZP)(),
        D = (0, c.Z)(Z),
        k = (0, l.TH)(),
        M = i.useCallback(() => {
            if (k.pathname.startsWith(C.Z5c.COLLECTIBLES_SHOP)) {
                let e = p.Z.getProduct(t.skuId),
                    n = p.Z.getCategoryForProduct(t.skuId);
                if (null != e && null != n) {
                    (0, y.closeUserProfileModal)(),
                        (0, f.T)({
                            product: e,
                            category: n,
                            shouldCheckoutWithOrbs: (0, m.oQ)({ product: e }),
                            analyticsLocations: R,
                            analyticsSource: u.Z.USER_PROFILE_WISHLIST,
                            returnRef: void 0,
                            tab: void 0,
                            variantType: T.Ch.DEFAULT,
                        });
                    return;
                }
            }
            (0, y.closeUserProfileModal)(),
                (0, O.uL)("".concat(C.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId));
        }, [k.pathname, t.skuId, R]),
        U = () => {
            (0, v.Er)({
                wishlistId: x,
                action: S.NW.WISHLIST_ITEM_CLICKED,
                skuId: t.skuId,
                analyticsLocations: R,
            }),
                A
                    ? M()
                    : (0, b.Z)({
                          skuId: t.skuId,
                          isGift: !0,
                          giftingOrigin: N.Wt.USER_PROFILE_WISHLIST,
                          analyticsLocations: R,
                          giftRecipient: n,
                          variantsReturnStyle: o.v.VARIANTS_GROUP,
                      });
        };
    return (0, r.jsxs)("div", {
        ref: Z,
        className: P.container,
        children: [
            (0, r.jsxs)("div", {
                ref: w,
                className: P.card,
                onClick: U,
                children: [
                    (0, r.jsx)(s.nn4, {
                        children: (0, r.jsx)(s.H, {
                            children: (() => {
                                let e = L.type;
                                switch (e) {
                                    case a.Z.AVATAR_DECORATION:
                                        return j.intl.formatToPlainString(j.t.IQQYeX, { itemName: t.skuName });
                                    case a.Z.PROFILE_EFFECT:
                                        return j.intl.formatToPlainString(j.t["x/MGW1"], { itemName: t.skuName });
                                    case a.Z.NAMEPLATE:
                                        return j.intl.formatToPlainString(j.t.eVNt6O, { itemName: t.skuName });
                                    default:
                                        (0, E.vE)(e);
                                }
                            })(),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: P.cardPreview,
                        children: (() => {
                            switch (L.type) {
                                case a.Z.PROFILE_EFFECT:
                                    return (0, r.jsx)("div", {
                                        className: P.profileEffectPreview,
                                        children: (0, r.jsx)(_.Z, {
                                            skuId: L.skuId,
                                            isHovering: D,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case a.Z.AVATAR_DECORATION:
                                    return (0, r.jsx)("div", {
                                        className: P.avatarDecorationPreview,
                                        children: (0, r.jsx)(h.R, {
                                            item: L,
                                            user: n,
                                            isHighlighted: D,
                                            isPurchased: !1,
                                            avatarSize: s.EFr.SIZE_80,
                                        }),
                                    });
                                case a.Z.NAMEPLATE:
                                    return (0, r.jsxs)("div", {
                                        className: P.nameplatePreview,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: P.nameplateTopLeft,
                                                children: (0, r.jsx)(g.Z, {
                                                    user: n,
                                                    nameplate: L,
                                                    isHighlighted: D,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: 200,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: P.nameplateBottomRight,
                                                "aria-hidden": !0,
                                                children: (0, r.jsx)(g.Z, {
                                                    user: n,
                                                    nameplate: L,
                                                    isHighlighted: D,
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
                        className: P.overlay,
                        children: (0, r.jsx)(s.zxk, {
                            focusProps: { ringTarget: w },
                            variant: "primary",
                            size: "sm",
                            text: j.intl.string(A ? j.t.FdGl5O : j.t.ilhtIS),
                            icon: A ? void 0 : s.OgN,
                            onClick: (e) => {
                                e.stopPropagation(), U();
                            },
                            fullWidth: !0,
                        }),
                    }),
                ],
            }),
            A &&
                (0, r.jsx)(I.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: x,
                    className: P.removeItemButton,
                }),
        ],
    });
}
