l.r(i), l.d(i, { default: () => Z });
var s = l(627968),
    d = l(64700),
    n = l(17928),
    r = l(477782),
    o = l(305866),
    a = l(140735),
    t = l(707554),
    u = l(793574),
    c = l(688810),
    p = l(915089),
    A = l(713517),
    P = l(267102),
    h = l(71393),
    f = l(562153),
    j = l(183555),
    x = l(47675),
    m = l(628779),
    I = l(999291),
    O = l(975732),
    g = l(718019),
    y = l(915614),
    b = l(946356),
    C = l(984545),
    U = l(587168),
    v = l(983495),
    T = l(364522),
    _ = l(734057),
    E = l(696451),
    L = l(309010),
    N = l(351906),
    k = l(841595),
    R = l(383199),
    G = l(803362),
    S = l(559506),
    w = l(900179),
    F = l(646986),
    V = l(878555),
    W = l(570314),
    M = l(571077),
    B = l(243166),
    H = l(442228),
    q = l(403369),
    D = l(360563),
    J = l(996988),
    K = l(375708),
    X = l(454555),
    Y = l(656884);
function $(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: d,
            guild: r,
            isHoveringOrFocusing: o,
            onOpenProfile: a,
            channelId: t,
            onClose: u,
        } = e,
        c = f.Ay.getName(r?.id, t, i),
        p = (0, n.bG)([k.A], () => k.A.getUserProfile(i.id)?.application),
        A = (0, n.bG)([_.A, L.A], () => _.A.getChannel(L.A.getChannelId())),
        P = (0, n.bG)([E.Ay], () => E.Ay.isMember(r?.id, i.id)),
        h = (0, n.bG)([N.A], () => N.A.hidePersonalInformation);
    return (0, s.jsxs)(T.Ip, {
        fade: !0,
        className: Y.rf,
        children: [
            (0, s.jsx)(S.A, { userId: i.id }),
            (0, s.jsx)(V.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: h ? null : (0, s.jsx)(B.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: d?.pronouns,
                onClose: u,
                trailing: (0, s.jsx)(G.A, { displayProfile: d, themeType: J.d.POPOUT, onClose: u }),
            }),
            (0, s.jsx)(D.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            (0, s.jsxs)("div", {
                className: X.U,
                children: [
                    (0, s.jsx)(W.A, { user: i, closePopout: u, fullWidth: !0 }),
                    (0, s.jsx)(M.A, { user: i, guildId: r?.id, fullWidth: !0 }),
                ],
            }),
            (0, s.jsx)(H.A, { userId: i.id, userBio: d?.bio, hidePersonalInformation: h, onClose: u }),
            (0, s.jsx)(F.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            p?.popularApplicationCommandIds != null &&
                null != A &&
                (0, s.jsx)(R.A, {
                    applicationId: p.id,
                    commandIds: p.popularApplicationCommandIds,
                    channel: A,
                    guildId: r?.id,
                    onClick: u,
                }),
            null != r &&
                P &&
                (0, s.jsx)(w.A, {
                    heading: K.intl.string(K.t["LPJmL/"]),
                    children: (0, s.jsx)(q.A, { userId: i.id, guild: r }),
                }),
        ],
    });
}
var z = l(920947),
    Q = l(652215);
function Z(e) {
    let {
            user: i,
            currentUser: l,
            guildId: T,
            channelId: _,
            messageId: E,
            roleId: L,
            openedAt: N,
            closePopout: k,
            setPopoutRef: R,
            disableUserProfileLink: G = __OVERLAY__,
            newAnalyticsLocations: S = [],
            disableAutoFocus: w = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: V } = (0, c.Ay)([...S, u.A.USER_PROFILE_POPOUT]),
        W = (0, P.aL)(),
        M = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: T, channelId: _, messageId: E, roleId: L }),
        B = (0, I.Ay)(i.id, T),
        H = (0, m.$)("BotUserProfilePopout"),
        q = (0, n.bG)([h.A], () => (null != T ? h.A.getGuild(T) : null)),
        D = d.useRef(null),
        { isHoveringOrFocusing: X } = (0, A.A)(D);
    d.useEffect(() => {
        R?.(D?.current);
    }, [D, R]);
    let Z = (e) => {
            k?.(),
                W.dispatch(Q.jej.POPOUT_CLOSE),
                (0, O.openUserProfileModal)({ sourceAnalyticsLocations: V, hideRestrictedProfile: !0, ...M, ...e });
        },
        ee = w ? "div" : o.l,
        ei = (0, p.GV)(),
        el = f.Ay.useName(T, _, i);
    return (0, s.jsx)(c.f5, {
        value: V,
        children: (0, s.jsx)(j.of, {
            value: M,
            openedAt: N,
            fetchStartedAt: B?.fetchStartedAt,
            fetchEndedAt: B?.fetchEndedAt,
            isLoaded: B?.isLoaded,
            children: (0, s.jsxs)(ee, {
                ref: D,
                "aria-labelledby": ei,
                onClick: F,
                children: [
                    (0, s.jsx)(a.A, {
                        children: (0, s.jsx)(t.H, { id: ei, children: K.intl.format(K.t.KRe1Fk, { name: el }) }),
                    }),
                    (0, s.jsxs)(b.A, {
                        user: i,
                        displayProfile: B,
                        themeType: J.d.POPOUT,
                        className: H ? "user-profile-sidebar-redesign" : void 0,
                        children: [
                            (0, s.jsx)(U.A, {
                                children: (0, s.jsx)(C.A, {
                                    user: i,
                                    guildId: T,
                                    viewProfileItem: G
                                        ? null
                                        : (0, s.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: K.intl.string(K.t["+Xp3hq"]),
                                              action: () => {
                                                  Z(),
                                                      (0, x.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: V,
                                                          ...M,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: Y.wx,
                                children: [
                                    (0, s.jsx)(y.A, {
                                        user: i,
                                        displayProfile: B,
                                        guildId: T,
                                        themeType: J.d.POPOUT,
                                        specOverrides: H ? { themePadding: 1 } : void 0,
                                    }),
                                    (0, s.jsx)(g.A, {
                                        user: i,
                                        displayProfile: B,
                                        guildId: T,
                                        channelId: _,
                                        themeType: J.d.POPOUT,
                                        onOpenProfile: G ? void 0 : Z,
                                    }),
                                    (0, s.jsx)(v.A, {
                                        user: i,
                                        themeType: J.d.POPOUT,
                                        onCloseProfile: k,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, s.jsx)($, {
                                user: i,
                                currentUser: l,
                                displayProfile: B,
                                guild: q,
                                isHoveringOrFocusing: X,
                                onOpenProfile: G ? void 0 : Z,
                                channelId: _,
                                onClose: k,
                            }),
                            (0, s.jsx)(z.A, { user: i, guildId: T, channelId: _, onClose: k, disableAutoFocus: w }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
