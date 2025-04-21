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
    f = n(5192),
    h = n(228168),
    p = n(200051);
function b(e) {
    let { user: t, previewText: n, previewEmoji: b, previewStatus: S, placeHolderText: j, transitionState: g, label: x } = e,
        v = (0, i.ZP)(t.id);
    return (0, l.jsxs)(c.Z, {
        user: t,
        displayProfile: v,
        profileType: h.y0.BITE_SIZE,
        className: p.profilePreviewContainer,
        children: [
            (0, l.jsxs)('header', {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: t,
                        displayProfile: v,
                        profileType: h.y0.BITE_SIZE
                    }),
                    (0, l.jsx)('div', {
                        inert: '',
                        children: (0, l.jsx)(o.Z, {
                            user: t,
                            displayProfile: v,
                            profileType: h.y0.BITE_SIZE,
                            previewStatus: S,
                            className: p.avatar
                        })
                    }),
                    (0, l.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: t,
                        profileType: h.y0.BITE_SIZE,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: j,
                        hasEntered: g === a.Dvm.ENTERED,
                        previewLabel: x
                    })
                ]
            }),
            (null == v ? void 0 : v.profileEffectId) != null && (0, l.jsx)(r.Z, { profileEffectId: v.profileEffectId }),
            (0, l.jsx)('div', {
                className: p.usernameContainer,
                inert: '',
                children: (0, l.jsx)(d.Z, {
                    user: t,
                    profileType: h.y0.BITE_SIZE,
                    nickname: f.ZP.getName(null, null, t),
                    pronouns: null == v ? void 0 : v.pronouns,
                    tags: (0, l.jsx)(s.Z, {
                        displayProfile: v,
                        profileType: h.y0.BITE_SIZE
                    })
                })
            })
        ]
    });
}
