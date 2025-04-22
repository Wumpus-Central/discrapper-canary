n.d(t, { Z: () => b });
var l = n(200651);
n(192379);
var a = n(481060),
    r = n(680295),
    i = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    h = n(5192),
    f = n(228168),
    p = n(200051);
function b(e) {
    let { user: t, previewText: n, previewEmoji: b, previewStatus: S, placeHolderText: j, transitionState: g, label: O } = e,
        x = (0, i.ZP)(t.id);
    return (0, l.jsxs)(c.Z, {
        user: t,
        displayProfile: x,
        themeType: f.lY.POPOUT,
        className: p.profilePreviewContainer,
        children: [
            (0, l.jsxs)('header', {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: t,
                        displayProfile: x,
                        themeType: f.lY.POPOUT
                    }),
                    (0, l.jsx)('div', {
                        inert: '',
                        children: (0, l.jsx)(o.Z, {
                            user: t,
                            displayProfile: x,
                            themeType: f.lY.POPOUT,
                            previewStatus: S,
                            className: p.avatar
                        })
                    }),
                    (0, l.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: t,
                        themeType: f.lY.POPOUT,
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
                inert: '',
                children: (0, l.jsx)(d.Z, {
                    user: t,
                    nickname: h.ZP.getName(null, null, t),
                    pronouns: null == x ? void 0 : x.pronouns,
                    tags: (0, l.jsx)(s.Z, {
                        displayProfile: x,
                        themeType: f.lY.POPOUT
                    })
                })
            })
        ]
    });
}
