n.d(t, { Z: () => R });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(592125),
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
    T = n(671955),
    A = n(388032),
    C = n(759253),
    N = n(593540);
function R(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: R,
            guild: P,
            isHoveringOrFocusing: w,
            onOpenProfile: D,
            channelId: x,
            onClose: L,
        } = e,
        M = c.ZP.getName(null == P ? void 0 : P.id, x, t),
        j = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        k = (0, i.e7)([o.Z, s.Z], () => o.Z.getChannel(s.Z.getChannelId())),
        U = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        G = (0, d.b)({ location: "BotUserProfilePopoutBody" });
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(E.Z, {
                user: t,
                guildId: null == P ? void 0 : P.id,
                onOpenProfile: D,
                nickname: M,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: R,
                    themeType: T.l.POPOUT,
                    onClose: L,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(O.Z, {
                                userId: t.id,
                                isVisible: w,
                                onOpenProfile: D,
                            }),
                    ],
                }),
            }),
            (0, r.jsx)(S.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ section: e })),
            }),
            (0, r.jsxs)("div", {
                className: C.buttons,
                children: [
                    (0, r.jsx)(b.Z, {
                        user: t,
                        closePopout: L,
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guildId: null == P ? void 0 : P.id,
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, r.jsx)(v.Z, {
                user: t,
                bio: null == R ? void 0 : R.bio,
                hidePersonalInformation: U,
                onClose: L,
            }),
            G
                ? (0, r.jsx)(g.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == P ? void 0 : P.id,
                      onOpenUserProfileModal: D,
                      onClose: L,
                  })
                : (0, r.jsx)(p.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == P ? void 0 : P.id,
                      onClose: L,
                  }),
            (null == j ? void 0 : j.popularApplicationCommandIds) != null &&
                null != k &&
                (0, r.jsx)(f.Z, {
                    applicationId: j.id,
                    commandIds: j.popularApplicationCommandIds,
                    channel: k,
                    guildId: null == P ? void 0 : P.id,
                    onClick: L,
                }),
            null != P &&
                (0, r.jsx)(m.Z, {
                    heading: A.intl.string(A.t["LPJmL/"]),
                    children: (0, r.jsx)(I.Z, {
                        user: t,
                        currentUser: n,
                        guild: P,
                    }),
                }),
        ],
    });
}
