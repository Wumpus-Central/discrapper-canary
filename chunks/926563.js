n.d(e, { Z: () => p });
var l = n(255367);
n(73800);
var r = n(481060),
    a = n(680295),
    i = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    h = n(228168),
    b = n(200051);
function p(t) {
    let { user: e, previewText: n, previewEmoji: p, previewStatus: S, placeHolderText: j, transitionState: g, label: x } = t,
        O = (0, i.ZP)(e.id);
    return (0, l.jsxs)(c.Z, {
        user: e,
        displayProfile: O,
        themeType: h.lY.POPOUT,
        className: b.profilePreviewContainer,
        children: [
            (0, l.jsxs)('header', {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: e,
                        displayProfile: O,
                        themeType: h.lY.POPOUT
                    }),
                    (0, l.jsx)('div', {
                        inert: !0,
                        children: (0, l.jsx)(o.Z, {
                            user: e,
                            displayProfile: O,
                            themeType: h.lY.POPOUT,
                            previewStatus: S,
                            className: b.avatar
                        })
                    }),
                    (0, l.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: e,
                        themeType: h.lY.POPOUT,
                        previewText: n,
                        previewEmoji: p,
                        placeholderText: j,
                        hasEntered: g === r.Dvm.ENTERED,
                        previewLabel: x
                    })
                ]
            }),
            (null == O ? void 0 : O.profileEffectId) != null && (0, l.jsx)(a.Z, { profileEffectId: O.profileEffectId }),
            (0, l.jsx)('div', {
                className: b.usernameContainer,
                inert: !0,
                children: (0, l.jsx)(d.Z, {
                    user: e,
                    nickname: f.ZP.getName(null, null, e),
                    pronouns: null == O ? void 0 : O.pronouns,
                    tags: (0, l.jsx)(s.Z, {
                        displayProfile: O,
                        themeType: h.lY.POPOUT
                    })
                })
            })
        ]
    });
}
