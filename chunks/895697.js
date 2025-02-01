n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(944486),
    l = n(246946),
    u = n(5192),
    c = n(621853),
    d = n(172351),
    f = n(648052),
    _ = n(483424),
    p = n(681837),
    h = n(678738),
    m = n(530),
    g = n(871604),
    E = n(53558),
    v = n(827313),
    y = n(420654),
    I = n(166584),
    T = n(915014),
    b = n(228168),
    S = n(388032),
    A = n(410344),
    N = n(591156);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: R, isHovering: O, onOpenProfile: D, channelId: x, onClose: L } = e,
        P = u.ZP.getName(null == R ? void 0 : R.id, x, t),
        w = (0, r.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        M = (0, r.e7)([s.Z, o.Z], () => s.Z.getChannel(o.Z.getChannelId())),
        k = (0, r.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, i.jsxs)(a.Ttm, {
        fade: !0,
        className: N.body,
        children: [
            (0, i.jsx)(m.Z, {
                user: t,
                profileType: b.y0.BITE_SIZE,
                onOpenProfile: D,
                nickname: P,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, i.jsx)(f.Z, {
                    displayProfile: C,
                    profileType: b.y0.BITE_SIZE,
                    onClose: L
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(p.Z, { userId: t.id }),
                        !k &&
                            (0, i.jsx)(v.Z, {
                                userId: t.id,
                                isHovering: O,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            (0, i.jsx)(T.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
            }),
            (0, i.jsxs)('div', {
                className: A.buttons,
                children: [
                    (0, i.jsx)(g.Z, {
                        user: t,
                        className: A.button,
                        closePopout: L
                    }),
                    (0, i.jsx)(E.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        className: A.button
                    })
                ]
            }),
            (0, i.jsx)(y.Z, {
                user: t,
                bio: null == C ? void 0 : C.bio,
                hidePersonalInformation: k,
                onClose: L
            }),
            (0, i.jsx)(_.Z, {
                user: t,
                currentUser: n,
                displayProfile: C,
                guildId: null == R ? void 0 : R.id,
                onClose: L,
                className: N.activity
            }),
            (null == w ? void 0 : w.popularApplicationCommandIds) != null &&
                null != M &&
                (0, i.jsx)(d.Z, {
                    applicationId: w.id,
                    commandIds: w.popularApplicationCommandIds,
                    channel: M,
                    guildId: null == R ? void 0 : R.id,
                    onClick: L
                }),
            null != R &&
                (0, i.jsx)(h.Z, {
                    heading: S.intl.string(S.t.LPJmLy),
                    children: (0, i.jsx)(I.Z, {
                        user: t,
                        currentUser: n,
                        guild: R
                    })
                })
        ]
    });
}
