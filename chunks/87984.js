s.r(i), s.d(i, { default: () => ek });
var l = s(627968),
    n = s(64700),
    d = s(503698),
    r = s.n(d),
    o = s(922139),
    t = s(17928),
    a = s(717421),
    u = s(477782),
    c = s(305866),
    p = s(140735),
    A = s(707554),
    f = s(80682),
    h = s(793574),
    x = s(688810),
    I = s(480335),
    j = s(31956),
    P = s(361628),
    O = s(744808),
    g = s(875741),
    m = s(915089),
    y = s(713517),
    T = s(645507),
    v = s(267102),
    C = s(71393),
    E = s(562153),
    U = s(183555),
    N = s(47675),
    k = s(628779),
    _ = s(999291),
    b = s(679492),
    R = s(975732),
    F = s(718019),
    S = s(915614),
    w = s(439053),
    G = s(312381),
    L = s(946356),
    M = s(587168),
    V = s(193738),
    q = s(713608),
    z = s(901472),
    B = s(985925),
    H = s(468689),
    W = s(474397),
    D = s(378570),
    K = s(495544),
    X = s(309010),
    Y = s(993401),
    $ = s(652215),
    J = s(746080),
    Q = s(486974),
    Z = s(375708);
function ee(e) {
    let { user: i, guildId: s, channelId: n, onClose: d, appContext: r } = e,
        { newestAnalyticsLocation: o } = (0, x.Ay)(),
        a = (0, v.aL)(),
        u = (0, t.bG)([K.default], () => K.default.getId() === i?.id),
        c = (0, B.q)(s ?? null),
        p = (0, t.bG)([X.A], () => n ?? X.A.getChannelId(s, !0), [n, s]);
    return null == s || !c || u
        ? null
        : (0, l.jsx)(Y.br, {
              action: "PRESS_MOD_VIEW",
              icon: q.q,
              tooltipText: Z.intl.string(Z.t.kj3tz2),
              onClick: () => {
                  H.A.close(),
                      null != p && (0, D.iN)(p),
                      (0, W.A)(r),
                      a.dispatch($.jej.POPOUT_CLOSE),
                      (0, z.z)(s, i.id, p ?? J.VV.MEMBER_SAFETY, { modViewPanel: Q.g.INFO, sourceLocation: o }),
                      d?.();
              },
          });
}
var ei = s(700174),
    es = s(983495),
    el = s(364522),
    en = s(695366),
    ed = s(661531),
    er = s(922590),
    eo = s(93246),
    et = s(994500),
    ea = s(351906),
    eu = s(428262),
    ec = s(803362),
    ep = s(744753),
    eA = s(559506),
    ef = s(931481),
    eh = s(501193),
    ex = s(383448),
    eI = s(900179),
    ej = s(646986),
    eP = s(349419),
    eO = s(878555),
    eg = s(243166),
    em = s(442228),
    ey = s(192867),
    eT = s(403369),
    ev = s(360563),
    eC = s(996988),
    eE = s(656884);
function eU(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: n,
            guild: d,
            isHoveringOrFocusing: r,
            onOpenProfile: o,
            channelId: a,
            onClose: u,
        } = e,
        c = E.Ay.useName(d?.id, a, i),
        { relationshipType: p, originApplicationId: A } = (0, t.cf)([et.A], () => ({
            relationshipType: et.A.getRelationshipType(i.id),
            originApplicationId: et.A.getOriginApplicationId(i.id),
        })),
        f = (0, er.fi)(i.id),
        h = (0, t.bG)([ea.A], () => ea.A.hidePersonalInformation),
        x = i.id === s.id,
        I = n?.widgets != null && n.widgets.length > 0,
        j = (0, eu.TW)(s);
    return (0, l.jsxs)(el.Ip, {
        fade: !0,
        className: eE.rf,
        children: [
            (0, l.jsx)(eA.A, { userId: i.id }),
            (0, l.jsx)(eO.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: o,
                displayNameTrailing: h ? null : (0, l.jsx)(eg.A, { userId: i.id, isVisible: r, onOpenProfile: o }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, l.jsx)(ey.A, { user: i, nickname: c }),
                trailing: (0, l.jsx)(ec.A, { displayProfile: n, themeType: eC.d.POPOUT, onClose: u }),
            }),
            p === $.eA$.PENDING_INCOMING &&
                (0, l.jsx)(L.A.Overlay, {
                    children: (0, l.jsx)(ef.A, { user: i, guildId: d?.id, channelId: a, applicationId: A }),
                }),
            f.map((e) =>
                (0, l.jsx)(
                    L.A.Overlay,
                    {
                        children: (0, l.jsx)(ef.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(ex.A, { user: i }),
            !x && (0, l.jsx)(ev.A, { user: i, onOpenProfile: (e) => o?.({ tabSection: e }) }),
            n?.private && (0, l.jsx)(L.A.Overlay, { children: (0, l.jsx)(eh.A, { username: c }) }),
            x && (0, l.jsx)(ep.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, l.jsx)(L.A.Overlay, {
                      className: eE.Nr,
                      children: (0, l.jsx)(eI.A, {
                          heading: Z.intl.string(Z.t.Iyka0U),
                          headingIcon: (0, l.jsx)(en.E, { size: "xxs", color: ed.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, l.jsx)(eo.T, { userId: i.id }),
                      }),
                  })
                : (0, l.jsx)(em.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: h, onClose: u }),
            I && (0, l.jsx)(eP.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: o }),
            (0, l.jsx)(ej.A, { user: i, currentUser: s, guildId: d?.id, onOpenUserProfileModal: o, onClose: u }),
            null != d && (0, l.jsx)(eT.A, { userId: i.id, guild: d }),
        ],
    });
}
var eN = s(920947);
function ek(e) {
    let {
            user: i,
            currentUser: s,
            guildId: d,
            channelId: q,
            messageId: z,
            roleId: B,
            openedAt: H,
            closePopout: W,
            setPopoutRef: D,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: X = [],
            appContext: Y,
            disableAutoFocus: J = !1,
            onClickContainer: Q,
        } = e,
        { analyticsLocations: el } = (0, x.Ay)([...X, h.A.USER_PROFILE_POPOUT]),
        en = (0, v.aL)(),
        ed = (0, U.pb)({ layout: "POPOUT", userId: i.id, guildId: d, channelId: q, messageId: z, roleId: B }),
        er = (0, t.bG)([C.A], () => (null != d ? C.A.getGuild(d) : null)),
        eo = n.useMemo(() => (null != d ? { [d]: [i.id] } : {}), [d, i.id]);
    (0, f.Eq)(eo, "UserProfilePopout");
    let et = n.useRef(null),
        ea = (0, _.Ay)(i.id, d),
        { isHoveringOrFocusing: eu, isHovering: ec } = (0, y.A)(et),
        ep = (0, b.fC)(),
        eA = (0, P.A)(ea?.profileFrame?.skuId, "UserProfilePopout"),
        { profileFrameStyle: ef, profileFrameClassName: eh } = (0, g.A)(ea?.profileFrame?.skuId),
        ex = (0, k.$)("UserProfilePopout");
    (0, j.A)({ skuId: ea?.profileFrame?.skuId, openedAt: H, context: ed, analyticsLocations: el });
    let eI = (0, a.z)({ opacity: +(null != ep.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        D?.(et?.current);
    }, [et, D, eA?.skuId]);
    let ej = n.useRef(null),
        eP = i.id === s.id,
        eO = n.useMemo(() => (0, T.A)(), []),
        eg = (e) => {
            W?.(),
                en.dispatch($.jej.POPOUT_CLOSE),
                (0, R.openUserProfileModal)({
                    sourceAnalyticsLocations: el,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eO,
                    ...ed,
                    ...e,
                    appContext: Y,
                });
        },
        em = J ? "div" : c.l,
        ey = (0, m.GV)(),
        eT = E.Ay.useName(er?.id, q, i);
    return (0, l.jsx)(x.f5, {
        value: el,
        children: (0, l.jsx)(U.of, {
            value: ed,
            openedAt: H,
            fetchStartedAt: ea?.fetchStartedAt,
            fetchEndedAt: ea?.fetchEndedAt,
            isLoaded: ea?.isLoaded,
            children: (0, l.jsx)(b.Hl, {
                value: ep,
                children: (0, l.jsxs)(em, {
                    ref: et,
                    "aria-labelledby": ey,
                    onClick: Q,
                    children: [
                        (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(A.H, { id: ey, children: Z.intl.format(Z.t.KRe1Fk, { name: eT }) }),
                        }),
                        (0, l.jsx)(A.F, {
                            children: (0, l.jsxs)(L.A, {
                                user: i,
                                displayProfile: ea,
                                themeType: eC.d.POPOUT,
                                className: r()(eE.BK, eh, ex && "user-profile-sidebar-redesign"),
                                style: ef,
                                isPrivate: ea?.private === !0,
                                children: [
                                    ea?.private === !0 && (0, l.jsx)(G.A, {}),
                                    null != ep.interactionType &&
                                        (0, l.jsx)(o.animated.div, { style: eI, className: eE.tB }),
                                    (0, l.jsxs)(M.A, {
                                        children: [
                                            (0, l.jsx)(ee, {
                                                shouldShowTooltip: null === ep.interactionType,
                                                user: i,
                                                guildId: d,
                                                channelId: q,
                                                onClose: W,
                                                appContext: Y,
                                            }),
                                            (0, l.jsx)(V.A, { themeType: eC.d.POPOUT, user: i }),
                                            !eP &&
                                                (0, l.jsx)(ei.yo, {
                                                    user: i,
                                                    guildId: d,
                                                    viewProfileItem: K
                                                        ? null
                                                        : (0, l.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: Z.intl.string(Z.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eg(),
                                                                      (0, N.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: el,
                                                                          ...ed,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: Y,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: eE.wx,
                                        children: [
                                            (0, l.jsx)(S.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: d,
                                                themeType: eC.d.POPOUT,
                                                specOverrides: ex ? { themePadding: 1 } : void 0,
                                            }),
                                            (0, l.jsx)(w.A, { userId: i.id, className: eE.oR, onClose: W }),
                                            (0, l.jsx)(F.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: d,
                                                channelId: q,
                                                themeType: eC.d.POPOUT,
                                                onOpenProfile: K ? void 0 : eg,
                                            }),
                                            (0, l.jsx)(es.A, {
                                                ref: ej,
                                                user: i,
                                                guildId: d,
                                                channelId: q,
                                                themeType: eC.d.POPOUT,
                                                onCloseProfile: W,
                                                prompt: eO,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(eU, {
                                        user: i,
                                        currentUser: s,
                                        displayProfile: ea,
                                        guild: er,
                                        isHoveringOrFocusing: null == ep.interactionType && eu,
                                        onOpenProfile: K ? void 0 : eg,
                                        channelId: q,
                                        onClose: W,
                                    }),
                                    (0, l.jsx)(eN.A, {
                                        user: i,
                                        guildId: d,
                                        channelId: q,
                                        onClose: W,
                                        appContext: Y,
                                        disableAutoFocus: J,
                                    }),
                                    ea?.profileEffect != null &&
                                        (0, l.jsx)(I.A, { skuId: ea?.profileEffect?.skuId, isHovering: ec }),
                                    null != eA && (0, l.jsx)(O.A, { frame: eA }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
