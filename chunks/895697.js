n.d(t, { Z: () => A });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(592125),
    s = n(944486),
    l = n(246946),
    c = n(5192),
    u = n(621853),
    d = n(172351),
    f = n(648052),
    _ = n(483424),
    p = n(681837),
    h = n(678738),
    m = n(530),
    g = n(871604),
    E = n(53558),
    b = n(827313),
    y = n(420654),
    v = n(166584),
    O = n(915014),
    I = n(228168),
    S = n(388032),
    T = n(773714),
    N = n(200669);
function A(e) {
    let { user: t, currentUser: n, displayProfile: A, guild: C, isHovering: R, onOpenProfile: P, channelId: w, onClose: D } = e,
        L = c.ZP.getName(null == C ? void 0 : C.id, w, t),
        x = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        M = (0, i.e7)([a.Z, s.Z], () => a.Z.getChannel(s.Z.getChannelId())),
        k = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(m.Z, {
                user: t,
                profileType: I.y0.BITE_SIZE,
                onOpenProfile: P,
                nickname: L,
                pronouns: null == A ? void 0 : A.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: A,
                    profileType: I.y0.BITE_SIZE,
                    onClose: D
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Z, { userId: t.id }),
                        !k &&
                            (0, r.jsx)(b.Z, {
                                userId: t.id,
                                isHovering: R,
                                onOpenProfile: P
                            })
                    ]
                })
            }),
            (0, r.jsx)(O.Z, {
                user: t,
                onOpenProfile: (e) => (null == P ? void 0 : P({ section: e }))
            }),
            (0, r.jsxs)('div', {
                className: T.buttons,
                children: [
                    (0, r.jsx)(g.Z, {
                        user: t,
                        className: T.button,
                        closePopout: D
                    }),
                    (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        className: T.button
                    })
                ]
            }),
            (0, r.jsx)(y.Z, {
                user: t,
                bio: null == A ? void 0 : A.bio,
                hidePersonalInformation: k,
                onClose: D
            }),
            (0, r.jsx)(_.Z, {
                user: t,
                currentUser: n,
                displayProfile: A,
                guildId: null == C ? void 0 : C.id,
                onClose: D,
                className: N.activity
            }),
            (null == x ? void 0 : x.popularApplicationCommandIds) != null &&
                null != M &&
                (0, r.jsx)(d.Z, {
                    applicationId: x.id,
                    commandIds: x.popularApplicationCommandIds,
                    channel: M,
                    guildId: null == C ? void 0 : C.id,
                    onClick: D
                }),
            null != C &&
                (0, r.jsx)(h.Z, {
                    heading: S.NW.string(S.t.LPJmLy),
                    children: (0, r.jsx)(v.Z, {
                        user: t,
                        currentUser: n,
                        guild: C
                    })
                })
        ]
    });
}
