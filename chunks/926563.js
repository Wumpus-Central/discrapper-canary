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
    h = n(228168),
    p = n(200051);
function b(t) {
    let { user: e, previewText: n, previewEmoji: b, previewStatus: S, placeHolderText: j, transitionState: g, label: O } = t,
        x = (0, i.ZP)(e.id);
    return (0, l.jsxs)(c.Z, {
        user: e,
        displayProfile: x,
        themeType: h.lY.POPOUT,
        className: p.profilePreviewContainer,
        children: [
            (0, l.jsxs)('header', {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: e,
                        displayProfile: x,
                        themeType: h.lY.POPOUT
                    }),
                    (0, l.jsx)('div', {
                        inert: !0,
                        children: (0, l.jsx)(o.Z, {
                            user: e,
                            displayProfile: x,
                            themeType: h.lY.POPOUT,
                            previewStatus: S,
                            className: p.avatar
                        })
                    }),
                    (0, l.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: e,
                        themeType: h.lY.POPOUT,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: j,
                        hasEntered: g === a.Dvm.ENTERED,
                        previewLabel: O
                    })
                ]
            }),
            (null == x ? void 0 : x.profileEffectId) != null && (0, l.jsx)(r.Z, { profileEffectId: x.profileEffectId }),
            (0, l.jsx)('div', {
                className: p.usernameContainer,
                inert: !0,
                children: (0, l.jsx)(d.Z, {
                    user: e,
                    nickname: f.ZP.getName(null, null, e),
                    pronouns: null == x ? void 0 : x.pronouns,
                    tags: (0, l.jsx)(s.Z, {
                        displayProfile: x,
                        themeType: h.lY.POPOUT
                    })
                })
            })
        ]
    });
}
