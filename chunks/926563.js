n.d(e, { Z: () => b });
var l = n(255367);
n(73800);
var a = n(481060),
    r = n(680295),
    i = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    p = n(228168),
    h = n(200051);
function b(t) {
    let {
            user: e,
            previewText: n,
            previewEmoji: b,
            previewStatus: S,
            placeHolderText: g,
            transitionState: j,
            label: O,
        } = t,
        v = (0, i.ZP)(e.id);
    return (0, l.jsxs)(c.Z, {
        user: e,
        displayProfile: v,
        themeType: p.lY.POPOUT,
        className: h.profilePreviewContainer,
        children: [
            (0, l.jsxs)("header", {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: e,
                        displayProfile: v,
                        themeType: p.lY.POPOUT,
                    }),
                    (0, l.jsx)("div", {
                        inert: !0,
                        children: (0, l.jsx)(o.Z, {
                            user: e,
                            displayProfile: v,
                            themeType: p.lY.POPOUT,
                            previewStatus: S,
                            className: h.avatar,
                        }),
                    }),
                    (0, l.jsx)(m.Z, {
                        location: "CustomStatusUserProfilePreview",
                        user: e,
                        themeType: p.lY.POPOUT,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: g,
                        hasEntered: j === a.Dvm.ENTERED,
                        previewLabel: O,
                    }),
                ],
            }),
            (null == v ? void 0 : v.profileEffectId) != null && (0, l.jsx)(r.Z, { profileEffectId: v.profileEffectId }),
            (0, l.jsx)("div", {
                className: h.usernameContainer,
                inert: !0,
                children: (0, l.jsx)(d.Z, {
                    user: e,
                    nickname: f.ZP.getName(null, null, e),
                    pronouns: null == v ? void 0 : v.pronouns,
                    tags: (0, l.jsx)(s.Z, {
                        displayProfile: v,
                        themeType: p.lY.POPOUT,
                    }),
                }),
            }),
        ],
    });
}
