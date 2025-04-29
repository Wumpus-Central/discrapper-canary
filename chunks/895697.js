n.d(t, { Z: () => R });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(592125),
    s = n(944486),
    l = n(246946),
    c = n(5192),
    u = n(621853),
    d = n(209698),
    f = n(172351),
    _ = n(648052),
    p = n(483424),
    h = n(681837),
    m = n(678738),
    g = n(638970),
    E = n(530),
    b = n(871604),
    y = n(53558),
    O = n(827313),
    v = n(420654),
    I = n(166584),
    S = n(915014),
    T = n(228168),
    A = n(388032),
    N = n(773714),
    C = n(200669);
function R(e) {
    let { user: t, currentUser: n, displayProfile: R, guild: P, isHovering: w, onOpenProfile: D, channelId: L, onClose: x } = e,
        M = c.ZP.getName(null == P ? void 0 : P.id, L, t),
        k = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        j = (0, i.e7)([a.Z, s.Z], () => a.Z.getChannel(s.Z.getChannelId())),
        U = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        G = (0, d.b)({ location: 'BotUserProfilePopoutBody' });
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: C.body,
        children: [
            (0, r.jsx)(E.Z, {
                user: t,
                onOpenProfile: D,
                nickname: M,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: R,
                    themeType: T.lY.POPOUT,
                    onClose: x
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(O.Z, {
                                userId: t.id,
                                isHovering: w,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            (0, r.jsx)(S.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
            }),
            (0, r.jsxs)('div', {
                className: N.buttons,
                children: [
                    (0, r.jsx)(b.Z, {
                        user: t,
                        className: N.button,
                        closePopout: x
                    }),
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guildId: null == P ? void 0 : P.id,
                        className: N.button
                    })
                ]
            }),
            (0, r.jsx)(v.Z, {
                user: t,
                bio: null == R ? void 0 : R.bio,
                hidePersonalInformation: U,
                onClose: x
            }),
            (0, r.jsx)(p.Z, {
                user: t,
                currentUser: n,
                displayProfile: R,
                guildId: null == P ? void 0 : P.id,
                onClose: x
            }),
            G
                ? (0, r.jsx)(g.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: R,
                      guildId: null == P ? void 0 : P.id,
                      onOpenUserProfileModal: D,
                      onClose: x
                  })
                : (0, r.jsx)(p.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: R,
                      guildId: null == P ? void 0 : P.id,
                      onClose: x
                  }),
            (null == k ? void 0 : k.popularApplicationCommandIds) != null &&
                null != j &&
                (0, r.jsx)(f.Z, {
                    applicationId: k.id,
                    commandIds: k.popularApplicationCommandIds,
                    channel: j,
                    guildId: null == P ? void 0 : P.id,
                    onClick: x
                }),
            null != P &&
                (0, r.jsx)(m.Z, {
                    heading: A.intl.string(A.t.LPJmLy),
                    children: (0, r.jsx)(I.Z, {
                        user: t,
                        currentUser: n,
                        guild: P
                    })
                })
        ]
    });
}
