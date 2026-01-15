n.d(t, { Z: () => A });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(592125),
    s = n(944486),
    l = n(246946),
    c = n(5192),
    u = n(621853),
    d = n(172351),
    f = n(648052),
    p = n(407699),
    _ = n(678738),
    m = n(638970),
    h = n(530),
    g = n(871604),
    E = n(53558),
    b = n(827313),
    y = n(420654),
    O = n(166584),
    v = n(915014),
    S = n(671955),
    I = n(388032),
    T = n(773008),
    C = n(155493);
function A(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: A,
            guild: N,
            isHoveringOrFocusing: P,
            onOpenProfile: R,
            channelId: w,
            onClose: D,
        } = e,
        x = c.ZP.getName(null == N ? void 0 : N.id, w, t),
        L = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t.id)) ? void 0 : e.application;
        }),
        j = (0, i.e7)([o.Z, s.Z], () => o.Z.getChannel(s.Z.getChannelId())),
        M = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: C.body,
        children: [
            (0, r.jsx)(p.Z, { userId: t.id }),
            (0, r.jsx)(h.Z, {
                user: t,
                guildId: null == N ? void 0 : N.id,
                onOpenProfile: R,
                nickname: x,
                pronouns: null == A ? void 0 : A.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: A,
                    themeType: S.l.POPOUT,
                    onClose: D,
                }),
                nicknameIcons: M
                    ? null
                    : (0, r.jsx)(b.Z, {
                          userId: t.id,
                          isVisible: P,
                          onOpenProfile: R,
                      }),
            }),
            (0, r.jsx)(v.Z, {
                user: t,
                onOpenProfile: (e) => (null == R ? void 0 : R({ tabSection: e })),
            }),
            (0, r.jsxs)("div", {
                className: T.buttons,
                children: [
                    (0, r.jsx)(g.Z, {
                        user: t,
                        closePopout: D,
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == N ? void 0 : N.id,
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, r.jsx)(y.Z, {
                user: t,
                bio: null == A ? void 0 : A.bio,
                hidePersonalInformation: M,
                onClose: D,
            }),
            (0, r.jsx)(m.Z, {
                user: t,
                currentUser: n,
                guildId: null == N ? void 0 : N.id,
                onOpenUserProfileModal: R,
                onClose: D,
            }),
            (null == L ? void 0 : L.popularApplicationCommandIds) != null &&
                null != j &&
                (0, r.jsx)(d.Z, {
                    applicationId: L.id,
                    commandIds: L.popularApplicationCommandIds,
                    channel: j,
                    guildId: null == N ? void 0 : N.id,
                    onClick: D,
                }),
            null != N &&
                (0, r.jsx)(_.Z, {
                    heading: I.intl.string(I.t["LPJmL/"]),
                    children: (0, r.jsx)(O.Z, {
                        userId: t.id,
                        guild: N,
                    }),
                }),
        ],
    });
}
