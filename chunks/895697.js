n.d(t, { Z: () => P });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(944486),
    l = n(246946),
    c = n(5192),
    u = n(621853),
    d = n(209698),
    f = n(172351),
    p = n(648052),
    _ = n(483424),
    m = n(407699),
    h = n(678738),
    g = n(638970),
    E = n(530),
    b = n(871604),
    y = n(53558),
    O = n(827313),
    v = n(420654),
    S = n(166584),
    I = n(915014),
    T = n(671955),
    C = n(388032),
    A = n(773008),
    N = n(155493);
function P(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: P,
            guild: R,
            isHoveringOrFocusing: w,
            onOpenProfile: D,
            channelId: x,
            onClose: L,
        } = e,
        j = c.ZP.getName(null == R ? void 0 : R.id, x, t),
        M = (0, i.e7)([u.Z], () => {
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
            (0, r.jsx)(m.Z, { userId: t.id }),
            (0, r.jsx)(E.Z, {
                user: t,
                guildId: null == R ? void 0 : R.id,
                onOpenProfile: D,
                nickname: j,
                pronouns: null == P ? void 0 : P.pronouns,
                tags: (0, r.jsx)(p.Z, {
                    displayProfile: P,
                    themeType: T.l.POPOUT,
                    onClose: L,
                }),
                nicknameIcons: U
                    ? null
                    : (0, r.jsx)(O.Z, {
                          userId: t.id,
                          isVisible: w,
                          onOpenProfile: D,
                      }),
            }),
            (0, r.jsx)(I.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ tabSection: e })),
            }),
            (0, r.jsxs)("div", {
                className: A.buttons,
                children: [
                    (0, r.jsx)(b.Z, {
                        user: t,
                        closePopout: L,
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, r.jsx)(v.Z, {
                user: t,
                bio: null == P ? void 0 : P.bio,
                hidePersonalInformation: U,
                onClose: L,
            }),
            G
                ? (0, r.jsx)(g.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == R ? void 0 : R.id,
                      onOpenUserProfileModal: D,
                      onClose: L,
                  })
                : (0, r.jsx)(_.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == R ? void 0 : R.id,
                      onClose: L,
                  }),
            (null == M ? void 0 : M.popularApplicationCommandIds) != null &&
                null != k &&
                (0, r.jsx)(f.Z, {
                    applicationId: M.id,
                    commandIds: M.popularApplicationCommandIds,
                    channel: k,
                    guildId: null == R ? void 0 : R.id,
                    onClick: L,
                }),
            null != R &&
                (0, r.jsx)(h.Z, {
                    heading: C.intl.string(C.t["LPJmL/"]),
                    children: (0, r.jsx)(S.Z, {
                        user: t,
                        currentUser: n,
                        guild: R,
                    }),
                }),
        ],
    });
}
