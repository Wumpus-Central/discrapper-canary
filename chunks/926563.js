n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var a = n(481060),
    l = n(680295),
    i = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    p = n(228168),
    h = n(483208);
function S(e) {
    let { user: t, previewText: n, previewEmoji: S, previewStatus: b, placeHolderText: j, transitionState: g } = e,
        v = (0, i.ZP)(t.id);
    return (0, r.jsxs)(c.Z, {
        user: t,
        displayProfile: v,
        profileType: p.y0.BITE_SIZE,
        className: h.profilePreviewContainer,
        children: [
            (0, r.jsxs)('header', {
                children: [
                    (0, r.jsx)(u.Z, {
                        user: t,
                        displayProfile: v,
                        profileType: p.y0.BITE_SIZE
                    }),
                    (0, r.jsx)('div', {
                        inert: '',
                        children: (0, r.jsx)(o.Z, {
                            user: t,
                            displayProfile: v,
                            profileType: p.y0.BITE_SIZE,
                            previewStatus: b,
                            className: h.avatar
                        })
                    }),
                    (0, r.jsx)(m.Z, {
                        location: 'CustomStatusUserProfilePreview',
                        user: t,
                        profileType: p.y0.BITE_SIZE,
                        previewText: n,
                        previewEmoji: S,
                        placeholderText: j,
                        hasEntered: g === a.Dvm.ENTERED
                    })
                ]
            }),
            (null == v ? void 0 : v.profileEffectId) != null && (0, r.jsx)(l.Z, { profileEffectId: v.profileEffectId }),
            (0, r.jsx)('div', {
                className: h.usernameContainer,
                inert: '',
                children: (0, r.jsx)(d.Z, {
                    user: t,
                    profileType: p.y0.BITE_SIZE,
                    nickname: f.ZP.getName(null, null, t),
                    pronouns: null == v ? void 0 : v.pronouns,
                    tags: (0, r.jsx)(s.Z, {
                        displayProfile: v,
                        profileType: p.y0.BITE_SIZE
                    })
                })
            })
        ]
    });
}
