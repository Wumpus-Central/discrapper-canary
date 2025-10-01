n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(311570),
    o = n(481060),
    s = n(727637),
    c = n(906732),
    u = n(616066),
    d = n(22267),
    p = n(333867),
    f = n(876917),
    h = n(703656),
    g = n(221292),
    m = n(892001),
    b = n(461631),
    _ = n(228168),
    O = n(981631),
    E = n(474936),
    y = n(388032),
    v = n(988388);
function I(e) {
    let { item: t, profileOwner: n, wishlistId: I, isOwner: S } = e,
        C = i.useRef(null),
        T = (0, s.Z)(C),
        N = t.collectiblesItem,
        { analyticsLocations: j } = (0, c.ZP)(),
        P = () => {
            (0, g.Er)({
                wishlistId: I,
                action: _.NW.WISHLIST_ITEM_CLICKED,
                skuId: t.skuId,
                analyticsLocations: j,
            }),
                S
                    ? ((0, m.closeUserProfileModal)(),
                      (0, h.uL)("".concat(O.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t.skuId)))
                    : (0, p.Z)({
                          skuId: t.skuId,
                          isGift: !0,
                          giftingOrigin: E.Wt.USER_PROFILE_WISHLIST,
                          analyticsLocations: j,
                          giftRecipient: n,
                          variantsReturnStyle: a.v.VARIANTS_GROUP,
                      });
        };
    return (0, r.jsxs)("div", {
        className: v.container,
        children: [
            (0, r.jsxs)(o.P3F, {
                className: v.card,
                innerRef: C,
                onClick: P,
                "aria-label": t.skuName,
                children: [
                    (0, r.jsx)("div", {
                        className: v.cardPreview,
                        children: (() => {
                            switch (N.type) {
                                case l.Z.PROFILE_EFFECT:
                                    return (0, r.jsx)("div", {
                                        className: v.profileEffectPreview,
                                        children: (0, r.jsx)(f.Z, {
                                            skuId: N.skuId,
                                            isHovering: T,
                                            isPurchased: !1,
                                            removeSetHeight: !0,
                                        }),
                                    });
                                case l.Z.AVATAR_DECORATION:
                                    return (0, r.jsx)("div", {
                                        className: v.avatarDecorationPreview,
                                        children: (0, r.jsx)(u.R, {
                                            item: N,
                                            user: n,
                                            isHighlighted: T,
                                            isPurchased: !1,
                                            avatarSize: o.EFr.SIZE_80,
                                        }),
                                    });
                                case l.Z.NAMEPLATE:
                                    return (0, r.jsxs)("div", {
                                        className: v.nameplatePreview,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: v.nameplateTopLeft,
                                                children: (0, r.jsx)(d.Z, {
                                                    user: n,
                                                    nameplate: N,
                                                    isHighlighted: T,
                                                    showPlaceholderUser: !0,
                                                    showStatus: !0,
                                                    isPurchased: !1,
                                                    nameplatePreviewSize: "default",
                                                    width: 200,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: v.nameplateBottomRight,
                                                children: (0, r.jsx)(d.Z, {
                                                    user: n,
                                                    nameplate: N,
                                                    isHighlighted: T,
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
                    T &&
                        (0, r.jsx)("div", {
                            className: v.overlay,
                            children: (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: y.intl.string(S ? y.t.FdGl5O : y.t.ilhtIS),
                                icon: S ? void 0 : o.OgN,
                                onClick: (e) => {
                                    e.stopPropagation(), P();
                                },
                                fullWidth: !0,
                            }),
                        }),
                ],
            }),
            S &&
                (0, r.jsx)(b.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: I,
                    className: v.removeItemButton,
                }),
        ],
    });
}
