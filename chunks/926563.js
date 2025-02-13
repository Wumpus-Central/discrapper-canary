n.d(t, { Z: () => S });
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(680295),
    s = n(687158),
    o = n(899007),
    r = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    h = n(5192),
    f = n(228168),
    p = n(963792);
function S(e) {
    let { user: t, previewText: n, previewEmoji: S, previewStatus: x, placeHolderText: _, transitionState: v } = e,
        j = (0, s.ZP)(t.id);
    return (0, l.jsxs)(c.Z, {
        user: t,
        displayProfile: j,
        profileType: f.y0.BITE_SIZE,
        className: p.profilePreviewContainer,
        children: [
            (0, l.jsxs)('header', {
                children: [
                    (0, l.jsx)(u.Z, {
                        user: t,
                        displayProfile: j,
                        profileType: f.y0.BITE_SIZE
                    }),
                    (0, l.jsx)('div', {
                        inert: '',
                        children: (0, l.jsx)(o.Z, {
                            user: t,
                            displayProfile: j,
                            profileType: f.y0.BITE_SIZE,
                            previewStatus: x,
                            className: p.avatar
                        })
                    }),
                    (0, l.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: t,
                        profileType: f.y0.BITE_SIZE,
                        previewText: n,
                        previewEmoji: S,
                        placeholderText: _,
                        hasEntered: v === a.Dvm.ENTERED
                    })
                ]
            }),
            (null == j ? void 0 : j.profileEffectId) != null && (0, l.jsx)(i.Z, { profileEffectId: j.profileEffectId }),
            (0, l.jsx)('div', {
                className: p.usernameContainer,
                inert: '',
                children: (0, l.jsx)(d.Z, {
                    user: t,
                    profileType: f.y0.BITE_SIZE,
                    nickname: h.ZP.getName(null, null, t),
                    pronouns: null == j ? void 0 : j.pronouns,
                    tags: (0, l.jsx)(r.Z, {
                        displayProfile: j,
                        profileType: f.y0.BITE_SIZE
                    })
                })
            })
        ]
    });
}
