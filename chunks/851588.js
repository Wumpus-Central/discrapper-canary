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
    A = l(915089),
    p = l(713517),
    h = l(267102),
    P = l(71393),
    f = l(562153),
    j = l(183555),
    x = l(47675),
    I = l(999291),
    m = l(975732),
    O = l(718019),
    g = l(915614),
    y = l(946356),
    b = l(984545),
    C = l(587168),
    T = l(983495),
    U = l(364522),
    v = l(734057),
    _ = l(696451),
    E = l(309010),
    L = l(351906),
    k = l(841595),
    N = l(383199),
    R = l(795873),
    G = l(559506),
    S = l(900179),
    w = l(646986),
    F = l(878555),
    V = l(570314),
    W = l(571077),
    M = l(243166),
    H = l(442228),
    q = l(403369),
    B = l(360563),
    D = l(996988),
    J = l(375708),
    K = l(454555),
    X = l(656884);
function Y(e) {
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
        A = (0, n.bG)([k.A], () => k.A.getUserProfile(i.id)?.application),
        p = (0, n.bG)([v.A, E.A], () => v.A.getChannel(E.A.getChannelId())),
        h = (0, n.bG)([_.Ay], () => _.Ay.isMember(r?.id, i.id)),
        P = (0, n.bG)([L.A], () => L.A.hidePersonalInformation);
    return (0, s.jsxs)(U.Ip, {
        fade: !0,
        className: X.rf,
        children: [
            (0, s.jsx)(G.A, { userId: i.id }),
            (0, s.jsx)(F.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: P ? null : (0, s.jsx)(M.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: d?.pronouns,
                onClose: u,
                trailing: (0, s.jsx)(R.A, { displayProfile: d, themeType: D.d.POPOUT, onClose: u }),
            }),
            (0, s.jsx)(B.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            (0, s.jsxs)("div", {
                className: K.U,
                children: [
                    (0, s.jsx)(V.A, { user: i, closePopout: u, fullWidth: !0 }),
                    (0, s.jsx)(W.A, { user: i, guildId: r?.id, fullWidth: !0 }),
                ],
            }),
            (0, s.jsx)(H.A, { userId: i.id, userBio: d?.bio, hidePersonalInformation: P, onClose: u }),
            (0, s.jsx)(w.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            A?.popularApplicationCommandIds != null &&
                null != p &&
                (0, s.jsx)(N.A, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: p,
                    guildId: r?.id,
                    onClick: u,
                }),
            null != r &&
                h &&
                (0, s.jsx)(S.A, {
                    heading: J.intl.string(J.t["LPJmL/"]),
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
            guildId: U,
            channelId: v,
            messageId: _,
            roleId: E,
            openedAt: L,
            closePopout: k,
            setPopoutRef: N,
            disableUserProfileLink: R = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: S = !1,
            onClickContainer: w,
        } = e,
        { analyticsLocations: F } = (0, c.Ay)([...G, u.A.USER_PROFILE_POPOUT]),
        V = (0, h.aL)(),
        W = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: U, channelId: v, messageId: _, roleId: E }),
        M = (0, I.Ay)(i.id, U),
        H = (0, n.bG)([P.A], () => (null != U ? P.A.getGuild(U) : null)),
        q = d.useRef(null),
        { isHoveringOrFocusing: B } = (0, p.A)(q);
    function K(e) {
        k?.(),
            V.dispatch(Q.jej.POPOUT_CLOSE),
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: F, hideRestrictedProfile: !0, ...W, ...e });
    }
    d.useEffect(() => {
        N?.(q?.current);
    }, [q, N]);
    let Z = S ? "div" : o.l,
        $ = (0, A.GV)(),
        ee = f.Ay.useName(U, v, i);
    return (0, s.jsx)(c.f5, {
        value: F,
        children: (0, s.jsx)(j.of, {
            value: W,
            openedAt: L,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, s.jsxs)(Z, {
                ref: q,
                "aria-labelledby": $,
                onClick: w,
                children: [
                    (0, s.jsx)(a.A, {
                        children: (0, s.jsx)(t.H, { id: $, children: J.intl.format(J.t.KRe1Fk, { name: ee }) }),
                    }),
                    (0, s.jsxs)(y.A, {
                        user: i,
                        displayProfile: M,
                        themeType: D.d.POPOUT,
                        children: [
                            (0, s.jsx)(C.A, {
                                children: (0, s.jsx)(b.A, {
                                    user: i,
                                    guildId: U,
                                    viewProfileItem: R
                                        ? null
                                        : (0, s.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: J.intl.string(J.t["+Xp3hq"]),
                                              action: () => {
                                                  K(),
                                                      (0, x.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: F,
                                                          ...W,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                className: X.wx,
                                children: [
                                    (0, s.jsx)(g.A, { user: i, displayProfile: M, guildId: U, themeType: D.d.POPOUT }),
                                    (0, s.jsx)(O.A, {
                                        user: i,
                                        displayProfile: M,
                                        guildId: U,
                                        channelId: v,
                                        themeType: D.d.POPOUT,
                                        onOpenProfile: R ? void 0 : K,
                                    }),
                                    (0, s.jsx)(T.A, {
                                        user: i,
                                        themeType: D.d.POPOUT,
                                        onCloseProfile: k,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(Y, {
                                user: i,
                                currentUser: l,
                                displayProfile: M,
                                guild: H,
                                isHoveringOrFocusing: B,
                                onOpenProfile: R ? void 0 : K,
                                channelId: v,
                                onClose: k,
                            }),
                            (0, s.jsx)(z.A, { user: i, guildId: U, channelId: v, onClose: k, disableAutoFocus: S }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
