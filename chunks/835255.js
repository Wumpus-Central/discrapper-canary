n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(311570),
    o = n(681715),
    s = n(481060),
    c = n(727637),
    u = n(906732),
    d = n(616066),
    p = n(22267),
    f = n(333867),
    h = n(876917),
    g = n(703656),
    m = n(823379),
    b = n(221292),
    _ = n(892001),
    O = n(461631),
    E = n(228168),
    y = n(981631),
    v = n(474936),
    I = n(388032),
    S = n(988388);
function C(e) {
    let { item: t, profileOwner: n, wishlistId: C, isOwner: T } = e,
        N = i.useRef(null),
        j = i.useRef(null),
        P = t.collectiblesItem,
        { analyticsLocations: x } = (0, u.ZP)(),
        A = (0, c.Z)(N),
        Z = () => {
            (0, b.Er)({
                wishlistId: C,
                action: E.NW.WISHLIST_ITEM_CLICKED,
                skuId: t.skuId,
                analyticsLocations: x,
            }),
                T
                    ? ((0, _.closeUserProfileModal)(),
                      (0, g.uL)("".concat(y.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId)))
                    : (0, f.Z)({
                          skuId: t.skuId,
                          isGift: !0,
                          giftingOrigin: v.Wt.USER_PROFILE_WISHLIST,
                          analyticsLocations: x,
                          giftRecipient: n,
                          variantsReturnStyle: a.v.VARIANTS_GROUP,
                      });
        };
    return (0, r.jsxs)("div", {
        ref: N,
        className: S.container,
        children: [
            (0, r.jsx)(o.u, {
                asContainer: !0,
                text: t.skuName,
                children: (0, r.jsxs)("div", {
                    ref: j,
                    className: S.card,
                    onClick: Z,
                    children: [
                        (0, r.jsx)(s.nn4, {
                            children: (0, r.jsx)(s.H, {
                                children: (() => {
                                    let e = P.type;
                                    switch (e) {
                                        case l.Z.AVATAR_DECORATION:
                                            return I.intl.formatToPlainString(I.t.IQQYeX, { itemName: t.skuName });
                                        case l.Z.PROFILE_EFFECT:
                                            return I.intl.formatToPlainString(I.t["x/MGW1"], { itemName: t.skuName });
                                        case l.Z.NAMEPLATE:
                                            return I.intl.formatToPlainString(I.t.eVNt6O, { itemName: t.skuName });
                                        default:
                                            (0, m.vE)(e);
                                    }
                                })(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: S.cardPreview,
                            children: (() => {
                                switch (P.type) {
                                    case l.Z.PROFILE_EFFECT:
                                        return (0, r.jsx)("div", {
                                            className: S.profileEffectPreview,
                                            children: (0, r.jsx)(h.Z, {
                                                skuId: P.skuId,
                                                isHovering: A,
                                                isPurchased: !1,
                                                removeSetHeight: !0,
                                            }),
                                        });
                                    case l.Z.AVATAR_DECORATION:
                                        return (0, r.jsx)("div", {
                                            className: S.avatarDecorationPreview,
                                            children: (0, r.jsx)(d.R, {
                                                item: P,
                                                user: n,
                                                isHighlighted: A,
                                                isPurchased: !1,
                                                avatarSize: s.EFr.SIZE_80,
                                            }),
                                        });
                                    case l.Z.NAMEPLATE:
                                        return (0, r.jsxs)("div", {
                                            className: S.nameplatePreview,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: S.nameplateTopLeft,
                                                    children: (0, r.jsx)(p.Z, {
                                                        user: n,
                                                        nameplate: P,
                                                        isHighlighted: A,
                                                        showPlaceholderUser: !0,
                                                        showStatus: !0,
                                                        isPurchased: !1,
                                                        nameplatePreviewSize: "default",
                                                        width: 200,
                                                    }),
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: S.nameplateBottomRight,
                                                    "aria-hidden": !0,
                                                    children: (0, r.jsx)(p.Z, {
                                                        user: n,
                                                        nameplate: P,
                                                        isHighlighted: A,
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
                            className: S.overlay,
                            children: (0, r.jsx)(s.zxk, {
                                focusProps: { ringTarget: j },
                                variant: "primary",
                                size: "sm",
                                text: I.intl.string(T ? I.t.FdGl5O : I.t.ilhtIS),
                                icon: T ? void 0 : s.OgN,
                                onClick: (e) => {
                                    e.stopPropagation(), Z();
                                },
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            T &&
                (0, r.jsx)(O.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: C,
                    className: S.removeItemButton,
                }),
        ],
    });
}
