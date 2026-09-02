l.r(i), l.d(i, { default: () => ei });
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
    P = l(267102),
    h = l(397562),
    f = l(71393),
    j = l(562153),
    x = l(183555),
    I = l(47675),
    O = l(999291),
    m = l(402860),
    g = l(718019),
    y = l(915614),
    b = l(946356),
    C = l(984545),
    T = l(587168),
    U = l(983495),
    v = l(364522),
    _ = l(734057),
    E = l(696451),
    L = l(309010),
    R = l(351906),
    k = l(321191),
    N = l(383199),
    S = l(988895),
    G = l(559506),
    w = l(900179),
    F = l(646986),
    V = l(465829),
    W = l(570314),
    M = l(571077),
    z = l(243166),
    H = l(442228),
    q = l(403369),
    B = l(360563),
    D = l(996988),
    J = l(375708),
    K = l(96804),
    X = l(47453);
function Y(e) {
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
        c = j.Ay.getName(r?.id, t, i),
        A = (0, n.bG)([k.A], () => k.A.getUserProfile(i.id)?.application),
        p = (0, n.bG)([_.A, L.Ay], () => _.A.getChannel(L.Ay.getChannelId())),
        P = (0, n.bG)([E.Ay], () => E.Ay.isMember(r?.id, i.id)),
        h = (0, n.bG)([R.A], () => R.A.hidePersonalInformation);
    return (0, d.jsxs)(v.Ip, {
        fade: !0,
        className: X.rf,
        children: [
            (0, d.jsx)(G.A, { userId: i.id }),
            (0, d.jsx)(V.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: h ? null : (0, d.jsx)(z.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: s?.pronouns,
                onClose: u,
                trailing: (0, d.jsx)(S.A, { displayProfile: s, themeType: D.d.POPOUT, onClose: u }),
            }),
            (0, d.jsx)(B.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            (0, d.jsxs)("div", {
                className: K.U,
                children: [
                    (0, d.jsx)(W.A, { user: i, closePopout: u, fullWidth: !0 }),
                    (0, d.jsx)(M.A, { user: i, guildId: r?.id, fullWidth: !0 }),
                ],
            }),
            (0, d.jsx)(H.A, { userId: i.id, userBio: s?.bio, hidePersonalInformation: h, onClose: u }),
            (0, d.jsx)(F.A, { user: i, currentUser: l, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
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
                P &&
                (0, d.jsx)(w.A, {
                    heading: J.intl.string(J.t["LPJmL/"]),
                    children: (0, d.jsx)(q.A, { userId: i.id, guild: r }),
                }),
        ],
    });
}
var Q = l(848674),
    Z = l(518477),
    $ = l(652215),
    ee = l(207634);
function ei(e) {
    let {
            user: i,
            currentUser: l,
            guildId: v,
            channelId: _,
            messageId: E,
            roleId: L,
            openedAt: R,
            closePopout: k,
            setPopoutRef: N,
            disableUserProfileLink: S = __OVERLAY__,
            newAnalyticsLocations: G = [],
            disableAutoFocus: w = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: V } = (0, c.Ay)([...G, u.A.USER_PROFILE_POPOUT]),
        W = (0, P.aL)(),
        M = (0, x.pb)({ layout: "POPOUT", userId: i.id, guildId: v, channelId: _, messageId: E, roleId: L }),
        z = (0, O.Ay)(i.id, v);
    (0, h.A)(V, z, Z.R7.POPOUT);
    let H = (0, n.bG)([f.A], () => (null != v ? f.A.getGuild(v) : null)),
        q = s.useRef(null),
        { isHoveringOrFocusing: B } = (0, p.A)(q);
    function K(e) {
        k?.(),
            W.dispatch($.jej.POPOUT_CLOSE),
            (0, m.openUserProfileModal)({ sourceAnalyticsLocations: V, hideRestrictedProfile: !0, ...M, ...e });
    }
    s.useEffect(() => {
        N?.(q?.current);
    }, [q, N]);
    let ei = w ? "div" : o.l,
        el = (0, A.GV)(),
        ed = j.Ay.useName(v, _, i);
    return (0, d.jsx)(c.f5, {
        value: V,
        children: (0, d.jsx)(x.of, {
            value: M,
            openedAt: R,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, d.jsxs)(ei, {
                ref: q,
                "aria-labelledby": el,
                onClick: F,
                children: [
                    (0, d.jsx)(a.A, {
                        children: (0, d.jsx)(t.H, { id: el, children: J.intl.format(J.t.KRe1Fk, { name: ed }) }),
                    }),
                    (0, d.jsxs)(b.A, {
                        user: i,
                        displayProfile: z,
                        themeType: D.d.POPOUT,
                        children: [
                            (0, d.jsx)(T.A, {
                                children: (0, d.jsx)(C.A, {
                                    user: i,
                                    guildId: v,
                                    viewProfileItem: S
                                        ? null
                                        : (0, d.jsx)(r.Dr, {
                                              id: "view-profile",
                                              label: J.intl.string(J.t["+Xp3hq"]),
                                              action: () => {
                                                  K(),
                                                      (0, I.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: V,
                                                          ...M,
                                                      });
                                              },
                                          }),
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: X.wx,
                                children: [
                                    (0, d.jsx)(y.A, { user: i, displayProfile: z, guildId: v, themeType: D.d.POPOUT }),
                                    (0, d.jsx)(g.A, {
                                        user: i,
                                        displayProfile: z,
                                        guildId: v,
                                        channelId: _,
                                        avatarSize: ee.T[D.d.POPOUT].avatarSize,
                                        onOpenProfile: S ? void 0 : K,
                                    }),
                                    (0, d.jsx)(U.A, {
                                        user: i,
                                        guildId: v,
                                        channelId: _,
                                        themeType: D.d.POPOUT,
                                        onCloseProfile: k,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, d.jsx)(Y, {
                                user: i,
                                currentUser: l,
                                displayProfile: z,
                                guild: H,
                                isHoveringOrFocusing: B,
                                onOpenProfile: S ? void 0 : K,
                                channelId: _,
                                onClose: k,
                            }),
                            (0, d.jsx)(Q.A, { user: i, guildId: v, channelId: _, onClose: k, disableAutoFocus: w }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
