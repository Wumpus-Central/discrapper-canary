l.r(i), l.d(i, { default: () => $ });
var d = l(477900),
    s = l(582128),
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
    O = l(975732),
    m = l(718019),
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
    k = l(321191),
    N = l(383199),
    R = l(413492),
    S = l(559506),
    G = l(900179),
    w = l(646986),
    F = l(465829),
    V = l(570314),
    W = l(571077),
    M = l(243166),
    z = l(442228),
    H = l(403369),
    q = l(360563),
    B = l(996988),
    D = l(375708),
    J = l(583235),
    K = l(83260);
function X(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: s,
            guild: r,
            isHoveringOrFocusing: o,
            onOpenProfile: a,
            channelId: t,
            onClose: u,
        } = e,
        c = f.Ay.getName(r?.id, t, i),
        A = (0, n.bG)([k.A], () => k.A.getUserProfile(i.id)?.application),
        p = (0, n.bG)([v.A, E.Ay], () => v.A.getChannel(E.Ay.getChannelId())),
        h = (0, n.bG)([_.Ay], () => _.Ay.isMember(r?.id, i.id)),
        P = (0, n.bG)([L.A], () => L.A.hidePersonalInformation);
    return (0, d.jsxs)(U.Ip, {
        fade: !0,
        className: K.rf,
        children: [
            (0, d.jsx)(S.A, { userId: i.id }),
            (0, d.jsx)(F.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: P ? null : (0, d.jsx)(M.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: s?.pronouns,
                onClose: u,
                trailing: (0, d.jsx)(R.A, { displayProfile: s, themeType: B.d.POPOUT, onClose: u }),
            }),
            (0, d.jsx)(q.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            (0, d.jsxs)("div", {
                className: J.U,
                children: [
                    (0, d.jsx)(V.A, { user: i, closePopout: u, fullWidth: !0 }),
                    (0, d.jsx)(W.A, { user: i, guildId: r?.id, fullWidth: !0 }),
                ],
            }),
            (0, d.jsx)(z.A, { userId: i.id, userBio: s?.bio, hidePersonalInformation: P, onClose: u }),
            (0, d.jsx)(w.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            A?.popularApplicationCommandIds != null &&
                null != p &&
                (0, d.jsx)(N.A, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: p,
                    guildId: r?.id,
                    onClick: u,
                }),
            null != r &&
                h &&
                (0, d.jsx)(G.A, {
                    heading: D.intl.string(D.t["LPJmL/"]),
                    children: (0, d.jsx)(H.A, { userId: i.id, guild: r }),
                }),
        ],
    });
}
var Y = l(848674),
    Q = l(652215),
    Z = l(985253);
function $(e) {
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
            newAnalyticsLocations: S = [],
            disableAutoFocus: G = !1,
            onClickContainer: w,
        } = e,
        { analyticsLocations: F } = (0, c.Ay)([...S, u.A.USER_PROFILE_POPOUT]),
        V = (0, h.aL)(),
        W = (0, j.pb)({ layout: "POPOUT", userId: i.id, guildId: U, channelId: v, messageId: _, roleId: E }),
        M = (0, I.Ay)(i.id, U),
        z = (0, n.bG)([P.A], () => (null != U ? P.A.getGuild(U) : null)),
        H = s.useRef(null),
        { isHoveringOrFocusing: q } = (0, p.A)(H);
    function J(e) {
        k?.(),
            V.dispatch(Q.jej.POPOUT_CLOSE),
            (0, O.openUserProfileModal)({ sourceAnalyticsLocations: F, hideRestrictedProfile: !0, ...W, ...e });
    }
    s.useEffect(() => {
        N?.(H?.current);
    }, [H, N]);
    let $ = G ? "div" : o.l,
        ee = (0, A.GV)(),
        ei = f.Ay.useName(U, v, i);
    return (0, d.jsx)(c.f5, {
        value: F,
        children: (0, d.jsx)(j.of, {
            value: W,
            openedAt: L,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, d.jsxs)($, {
                ref: H,
                "aria-labelledby": ee,
                onClick: w,
                children: [
                    (0, d.jsx)(a.A, {
                        children: (0, d.jsx)(t.H, { id: ee, children: D.intl.format(D.t.KRe1Fk, { name: ei }) }),
                    }),
                    (0, d.jsxs)(y.A, {
                        user: i,
                        displayProfile: M,
                        themeType: B.d.POPOUT,
                        children: [
                            (0, d.jsx)(C.A, {
                                children: (0, d.jsx)(b.A, {
                                    user: i,
                                    guildId: U,
                                    viewProfileItem: R
                                        ? null
                                        : (0, d.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: D.intl.string(D.t["+Xp3hq"]),
                                              action: () => {
                                                  J(),
                                                      (0, x.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: F,
                                                          ...W,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: K.wx,
                                children: [
                                    (0, d.jsx)(g.A, { user: i, displayProfile: M, guildId: U, themeType: B.d.POPOUT }),
                                    (0, d.jsx)(m.A, {
                                        user: i,
                                        displayProfile: M,
                                        guildId: U,
                                        channelId: v,
                                        avatarSize: Z.T[B.d.POPOUT].avatarSize,
                                        onOpenProfile: R ? void 0 : J,
                                    }),
                                    (0, d.jsx)(T.A, {
                                        user: i,
                                        guildId: U,
                                        channelId: v,
                                        themeType: B.d.POPOUT,
                                        onCloseProfile: k,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, d.jsx)(X, {
                                user: i,
                                currentUser: l,
                                displayProfile: M,
                                guild: z,
                                isHoveringOrFocusing: q,
                                onOpenProfile: R ? void 0 : J,
                                channelId: v,
                                onClose: k,
                            }),
                            (0, d.jsx)(Y.A, { user: i, guildId: U, channelId: v, onClose: k, disableAutoFocus: G }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
