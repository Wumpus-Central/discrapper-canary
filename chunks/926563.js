n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(680295),
    i = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    p = n(4517),
    m = n(5192),
    h = n(228168),
    f = n(200051);
function b(e) {
    let { user: t, previewText: n, previewEmoji: b, previewStatus: j, placeHolderText: x, transitionState: S } = e,
        g = (0, i.ZP)(t.id);
    return (0, r.jsxs)(c.Z, {
        user: t,
        displayProfile: g,
        profileType: h.y0.BITE_SIZE,
        className: f.profilePreviewContainer,
        children: [
            (0, r.jsxs)('header', {
                children: [
                    (0, r.jsx)(u.Z, {
                        user: t,
                        displayProfile: g,
                        profileType: h.y0.BITE_SIZE
                    }),
                    (0, r.jsx)('div', {
                        inert: '',
                        children: (0, r.jsx)(o.Z, {
                            user: t,
                            displayProfile: g,
                            profileType: h.y0.BITE_SIZE,
                            previewStatus: j,
                            className: f.avatar
                        })
                    }),
                    (0, r.jsx)(p.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: t,
                        profileType: h.y0.BITE_SIZE,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: x,
                        hasEntered: S === l.Dvm.ENTERED
                    })
                ]
            }),
            (null == g ? void 0 : g.profileEffectId) != null && (0, r.jsx)(a.Z, { profileEffectId: g.profileEffectId }),
            (0, r.jsx)('div', {
                className: f.usernameContainer,
                inert: '',
                children: (0, r.jsx)(d.Z, {
                    user: t,
                    profileType: h.y0.BITE_SIZE,
                    nickname: m.ZP.getName(null, null, t),
                    pronouns: null == g ? void 0 : g.pronouns,
                    tags: (0, r.jsx)(s.Z, {
                        displayProfile: g,
                        profileType: h.y0.BITE_SIZE
                    })
                })
            })
        ]
    });
}
