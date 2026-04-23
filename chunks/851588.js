n.r(t), n.d(t, { default: () => ee });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(477782),
    o = n(305866),
    s = n(140735),
    d = n(707554),
    u = n(793574),
    _ = n(688810),
    c = n(915089),
    f = n(713517),
    A = n(267102),
    h = n(71393),
    p = n(562153),
    E = n(183555),
    T = n(47675),
    N = n(999291),
    S = n(975732),
    I = n(718019),
    m = n(915614),
    C = n(946356),
    g = n(984545),
    v = n(587168),
    y = n(983495),
    x = n(364522),
    b = n(734057),
    L = n(696451),
    O = n(309010),
    j = n(351906),
    P = n(841595),
    R = n(570287),
    U = n(383199),
    G = n(694720),
    H = n(559506),
    w = n(900179),
    M = n(646986),
    k = n(878555),
    D = n(570314),
    B = n(571077),
    V = n(243166),
    F = n(442228),
    W = n(568704),
    K = n(403369),
    X = n(360563),
    J = n(996988),
    z = n(985018),
    q = n(454555),
    Q = n(656884);
function Y(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            guild: a,
            isHoveringOrFocusing: o,
            onOpenProfile: s,
            channelId: d,
            onClose: u,
        } = e,
        _ = p.Ay.getName(a?.id, d, t),
        c = (0, r.bG)([P.A], () => P.A.getUserProfile(t.id)?.application),
        f = (0, r.bG)([b.A, O.A], () => b.A.getChannel(O.A.getChannelId())),
        A = (0, r.bG)([L.Ay], () => L.Ay.isMember(a?.id, t.id)),
        h = (0, r.bG)([j.A], () => j.A.hidePersonalInformation),
        E = (0, R.A)(t.id, a?.id);
    return (0, l.jsxs)(x.Ip, {
        fade: !0,
        className: Q.rf,
        children: [
            (0, l.jsx)(H.A, { userId: t.id }),
            (0, l.jsx)(k.Ay, {
                user: t,
                guildId: a?.id,
                displayName: _,
                onClickName: s,
                displayNameTrailing: h ? null : (0, l.jsx)(V.A, { userId: t.id, isVisible: o, onOpenProfile: s }),
                pronouns: i?.pronouns,
                onClose: u,
                trailing: (0, l.jsx)(G.A, { displayProfile: i, themeType: J.d.POPOUT, onClose: u }),
            }),
            (0, l.jsx)(X.A, { user: t, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            E && (0, l.jsx)(W.A, { user: t, onClose: u }),
            (0, l.jsxs)("div", {
                className: q.U,
                children: [
                    (0, l.jsx)(D.A, { user: t, closePopout: u, fullWidth: !0 }),
                    (0, l.jsx)(B.A, { user: t, guildId: a?.id, fullWidth: !0 }),
                ],
            }),
            (0, l.jsx)(F.A, { user: t, bio: i?.bio, hidePersonalInformation: h, onClose: u }),
            (0, l.jsx)(M.A, { user: t, currentUser: n, guildId: a?.id, onOpenUserProfileModal: s, onClose: u }),
            c?.popularApplicationCommandIds != null &&
                null != f &&
                (0, l.jsx)(U.A, {
                    applicationId: c.id,
                    commandIds: c.popularApplicationCommandIds,
                    channel: f,
                    guildId: a?.id,
                    onClick: u,
                }),
            null != a &&
                A &&
                (0, l.jsx)(w.A, {
                    heading: z.intl.string(z.t["LPJmL/"]),
                    children: (0, l.jsx)(K.A, { userId: t.id, guild: a }),
                }),
        ],
    });
}
var $ = n(693955),
    Z = n(652215);
function ee(e) {
    let {
            user: t,
            currentUser: n,
            guildId: x,
            channelId: b,
            messageId: L,
            roleId: O,
            openedAt: j,
            closePopout: P,
            setPopoutRef: R,
            disableUserProfileLink: U = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: H = !1,
            onClickContainer: w,
        } = e,
        { analyticsLocations: M } = (0, _.Ay)([...G, u.A.USER_PROFILE_POPOUT]),
        k = (0, A.aL)(),
        D = (0, E.pb)({ layout: "POPOUT", userId: t.id, guildId: x, channelId: b, messageId: L, roleId: O }),
        B = (0, N.Ay)(t.id, x),
        V = (0, r.bG)([h.A], () => (null != x ? h.A.getGuild(x) : null)),
        F = i.useRef(null),
        { isHoveringOrFocusing: W } = (0, f.A)(F);
    i.useEffect(() => {
        R?.(F?.current);
    }, [F, R]);
    let K = (e) => {
            P?.(),
                k.dispatch(Z.jej.POPOUT_CLOSE),
                (0, S.openUserProfileModal)({ sourceAnalyticsLocations: M, hideRestrictedProfile: !0, ...D, ...e });
        },
        X = H ? "div" : o.l,
        q = (0, c.GV)(),
        ee = p.Ay.useName(x, b, t);
    return (0, l.jsx)(_.f5, {
        value: M,
        children: (0, l.jsx)(E.of, {
            value: D,
            openedAt: j,
            fetchStartedAt: B?.fetchStartedAt,
            fetchEndedAt: B?.fetchEndedAt,
            isLoaded: B?.isLoaded,
            children: (0, l.jsxs)(X, {
                ref: F,
                "aria-labelledby": q,
                onClick: w,
                children: [
                    (0, l.jsx)(s.A, {
                        children: (0, l.jsx)(d.H, { id: q, children: z.intl.format(z.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, l.jsxs)(C.A, {
                        user: t,
                        displayProfile: B,
                        themeType: J.d.POPOUT,
                        children: [
                            (0, l.jsx)(v.A, {
                                children: (0, l.jsx)(g.A, {
                                    user: t,
                                    guildId: x,
                                    viewProfileItem: U
                                        ? null
                                        : (0, l.jsx)(a.Dr, {
                                              id: "view-profile",
                                              label: z.intl.string(z.t["+Xp3hq"]),
                                              action: () => {
                                                  K(),
                                                      (0, T.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: M,
                                                          ...D,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: Q.wx,
                                children: [
                                    (0, l.jsx)(m.A, { user: t, displayProfile: B, guildId: x, themeType: J.d.POPOUT }),
                                    (0, l.jsx)(I.A, {
                                        user: t,
                                        displayProfile: B,
                                        guildId: x,
                                        channelId: b,
                                        themeType: J.d.POPOUT,
                                        onOpenProfile: U ? void 0 : K,
                                    }),
                                    (0, l.jsx)(y.A, {
                                        user: t,
                                        themeType: J.d.POPOUT,
                                        onCloseProfile: P,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(Y, {
                                user: t,
                                currentUser: n,
                                displayProfile: B,
                                guild: V,
                                isHoveringOrFocusing: W,
                                onOpenProfile: U ? void 0 : K,
                                channelId: b,
                                onClose: P,
                            }),
                            (0, l.jsx)($.A, { user: t, guildId: x, channelId: b, onClose: P, disableAutoFocus: H }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
