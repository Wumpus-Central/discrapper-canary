n.d(t, { Z: () => m });
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
    h = n(474936),
    g = n(232644);
function m(e) {
    let { item: t, user: n, profileOwner: m } = e,
        b = i.useRef(null),
        _ = (0, s.Z)(b),
        O = t.collectiblesItem,
        { analyticsLocations: E } = (0, c.ZP)(),
        y = O.type === l.Z.PROFILE_EFFECT ? O.title : O.label;
    return (0, r.jsx)(o.kL8, {
        className: g.card,
        ref: b,
        onClick: () => {
            (0, p.Z)({
                skuId: t.skuId,
                isGift: !0,
                giftingOrigin: h.Wt.USER_PROFILE_WISHLIST,
                analyticsLocations: E,
                giftRecipient: m,
                variantsReturnStyle: a.v.VARIANTS_GROUP,
            });
        },
        "aria-label": y,
        children: (0, r.jsx)("div", {
            className: g.cardPreview,
            children: (() => {
                switch (O.type) {
                    case l.Z.PROFILE_EFFECT:
                        return (0, r.jsx)("div", {
                            className: g.profileEffectPreview,
                            children: (0, r.jsx)(f.Z, {
                                profileEffectId: O.id,
                                isHovering: _,
                                isPurchased: !1,
                                removeSetHeight: !0,
                            }),
                        });
                    case l.Z.AVATAR_DECORATION:
                        return (0, r.jsx)("div", {
                            className: g.avatarDecorationPreview,
                            children: (0, r.jsx)(u.R, {
                                item: O,
                                user: n,
                                isHighlighted: _,
                                isPurchased: !1,
                                avatarSize: o.EFr.SIZE_80,
                            }),
                        });
                    case l.Z.NAMEPLATE:
                        return (0, r.jsxs)("div", {
                            className: g.nameplatePreview,
                            children: [
                                (0, r.jsx)("div", {
                                    className: g.nameplateTopLeft,
                                    children: (0, r.jsx)(d.Z, {
                                        user: n,
                                        nameplate: O,
                                        isHighlighted: _,
                                        showPlaceholderUser: !0,
                                        showStatus: !0,
                                        isPurchased: !1,
                                        nameplatePreviewSize: "default",
                                        width: 200,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: g.nameplateBottomRight,
                                    children: (0, r.jsx)(d.Z, {
                                        user: n,
                                        nameplate: O,
                                        isHighlighted: _,
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
    });
}
