n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    a = n(481060),
    o = n(727637),
    s = n(616066),
    c = n(22267),
    u = n(876917),
    d = n(232644);
function p(e) {
    let { item: t, user: n } = e,
        p = i.useRef(null),
        f = (0, o.Z)(p),
        h = t.collectiblesItem,
        g = h.type === l.Z.PROFILE_EFFECT ? h.title : h.label;
    return (0, r.jsx)(a.kL8, {
        className: d.card,
        ref: p,
        onClick: () => {},
        "aria-label": g,
        children: (0, r.jsx)("div", {
            className: d.cardPreview,
            children: (() => {
                switch (h.type) {
                    case l.Z.PROFILE_EFFECT:
                        return (0, r.jsx)("div", {
                            className: d.profileEffectPreview,
                            children: (0, r.jsx)(u.Z, {
                                profileEffectId: h.id,
                                isHovering: f,
                                isPurchased: !1,
                                removeSetHeight: !0,
                            }),
                        });
                    case l.Z.AVATAR_DECORATION:
                        return (0, r.jsx)("div", {
                            className: d.avatarDecorationPreview,
                            children: (0, r.jsx)(s.R, {
                                item: h,
                                user: n,
                                isHighlighted: f,
                                isPurchased: !1,
                                avatarSize: a.EFr.SIZE_80,
                            }),
                        });
                    case l.Z.NAMEPLATE:
                        return (0, r.jsxs)("div", {
                            className: d.nameplatePreview,
                            children: [
                                (0, r.jsx)("div", {
                                    className: d.nameplateTopLeft,
                                    children: (0, r.jsx)(c.Z, {
                                        user: n,
                                        nameplate: h,
                                        isHighlighted: f,
                                        showPlaceholderUser: !0,
                                        showStatus: !0,
                                        isPurchased: !1,
                                        nameplatePreviewSize: "default",
                                        width: 200,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.nameplateBottomRight,
                                    children: (0, r.jsx)(c.Z, {
                                        user: n,
                                        nameplate: h,
                                        isHighlighted: f,
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
