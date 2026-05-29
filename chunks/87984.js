l.r(i), l.d(i, { default: () => eN });
var s = l(627968),
    n = l(64700),
    d = l(503698),
    r = l.n(d),
    o = l(922139),
    t = l(17928),
    a = l(717421),
    u = l(477782),
    c = l(305866),
    p = l(140735),
    A = l(707554),
    x = l(80682),
    f = l(793574),
    h = l(688810),
    j = l(480335),
    I = l(31956),
    P = l(361628),
    O = l(744808),
    m = l(875741),
    g = l(915089),
    y = l(713517),
    T = l(645507),
    v = l(267102),
    C = l(71393),
    E = l(562153),
    U = l(183555),
    N = l(47675),
    k = l(999291),
    _ = l(679492),
    b = l(975732),
    R = l(718019),
    F = l(915614),
    S = l(439053),
    w = l(312381),
    G = l(946356),
    L = l(587168),
    M = l(193738),
    V = l(713608),
    q = l(901472),
    z = l(985925),
    H = l(468689),
    W = l(474397),
    B = l(378570),
    D = l(495544),
    K = l(309010),
    X = l(993401),
    Y = l(652215),
    $ = l(746080),
    J = l(486974),
    Q = l(375708);
function Z(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: r } = e,
        { newestAnalyticsLocation: o } = (0, h.Ay)(),
        a = (0, v.aL)(),
        u = (0, t.bG)([D.default], () => D.default.getId() === i?.id),
        c = (0, z.q)(l ?? null),
        p = (0, t.bG)([K.A], () => n ?? K.A.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(X.br, {
              action: "PRESS_MOD_VIEW",
              icon: V.q,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  H.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, W.A)(r),
                      a.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, q.z)(l, i.id, p ?? $.VV.MEMBER_SAFETY, { modViewPanel: J.g.INFO, sourceLocation: o }),
                      d?.();
              },
          });
}
var ee = l(700174),
    ei = l(983495),
    el = l(364522),
    es = l(695366),
    en = l(661531),
    ed = l(922590),
    er = l(93246),
    eo = l(994500),
    et = l(351906),
    ea = l(428262),
    eu = l(328296),
    ec = l(744753),
    ep = l(559506),
    eA = l(931481),
    ex = l(501193),
    ef = l(383448),
    eh = l(900179),
    ej = l(646986),
    eI = l(349419),
    eP = l(878555),
    eO = l(243166),
    em = l(442228),
    eg = l(192867),
    ey = l(403369),
    eT = l(360563),
    ev = l(996988),
    eC = l(656884);
function eE(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: d,
            isHoveringOrFocusing: r,
            onOpenProfile: o,
            channelId: a,
            onClose: u,
        } = e,
        c = E.Ay.useName(d?.id, a, i),
        { relationshipType: p, originApplicationId: A } = (0, t.cf)([eo.A], () => ({
            relationshipType: eo.A.getRelationshipType(i.id),
            originApplicationId: eo.A.getOriginApplicationId(i.id),
        })),
        x = (0, ed.fi)(i.id),
        f = (0, t.bG)([et.A], () => et.A.hidePersonalInformation),
        h = i.id === l.id,
        j = n?.widgets != null && n.widgets.length > 0,
        I = (0, ea.TW)(l);
    return (0, s.jsxs)(el.Ip, {
        fade: !0,
        className: eC.rf,
        children: [
            (0, s.jsx)(ep.A, { userId: i.id }),
            (0, s.jsx)(eP.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: o,
                displayNameTrailing: f ? null : (0, s.jsx)(eO.A, { userId: i.id, isVisible: r, onOpenProfile: o }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(eu.A, { displayProfile: n, themeType: ev.d.POPOUT, onClose: u }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, s.jsx)(G.A.Overlay, {
                    children: (0, s.jsx)(eA.A, { user: i, guildId: d?.id, channelId: a, applicationId: A }),
                }),
            x.map((e) =>
                (0, s.jsx)(
                    G.A.Overlay,
                    {
                        children: (0, s.jsx)(eA.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(ef.A, { user: i }),
            !h && (0, s.jsx)(eT.A, { user: i, onOpenProfile: (e) => o?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(G.A.Overlay, { children: (0, s.jsx)(ex.A, { username: c }) }),
            h && (0, s.jsx)(ec.A, { isPremiumUser: I, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(G.A.Overlay, {
                      className: eC.Nr,
                      children: (0, s.jsx)(eh.A, {
                          heading: Q.intl.string(Q.t.Iyka0U),
                          headingIcon: (0, s.jsx)(es.E, { size: "xxs", color: en.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(er.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(em.A, { user: i, bio: n?.bio, hidePersonalInformation: f, onClose: u }),
            j && (0, s.jsx)(eI.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: o }),
            (0, s.jsx)(ej.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: o, onClose: u }),
            null != d && (0, s.jsx)(ey.A, { userId: i.id, guild: d }),
        ],
    });
}
var eU = l(920947);
function eN(e) {
    let {
            user: i,
            currentUser: l,
            guildId: d,
            channelId: V,
            messageId: q,
            roleId: z,
            openedAt: H,
            closePopout: W,
            setPopoutRef: B,
            disableUserProfileLink: D = __OVERLAY__,
            newAnalyticsLocations: K = [],
            appContext: X,
            disableAutoFocus: $ = !1,
            onClickContainer: J,
        } = e,
        { analyticsLocations: el } = (0, h.Ay)([...K, f.A.USER_PROFILE_POPOUT]),
        es = (0, v.aL)(),
        en = (0, U.pb)({ layout: "POPOUT", userId: i.id, guildId: d, channelId: V, messageId: q, roleId: z }),
        ed = (0, t.bG)([C.A], () => (null != d ? C.A.getGuild(d) : null)),
        er = n.useMemo(() => (null != d ? { [d]: [i.id] } : {}), [d, i.id]);
    (0, x.Eq)(er, "UserProfilePopout");
    let eo = n.useRef(null),
        et = (0, k.Ay)(i.id, d),
        { isHoveringOrFocusing: ea, isHovering: eu } = (0, y.A)(eo),
        ec = (0, _.fC)(),
        ep = (0, P.A)(et?.profileFrame?.skuId, "UserProfilePopout"),
        { profileFrameStyle: eA, profileFrameClassName: ex } = (0, m.A)(et?.profileFrame?.skuId);
    (0, I.A)({ skuId: et?.profileFrame?.skuId, openedAt: H, context: en, analyticsLocations: el });
    let ef = (0, a.z)({ opacity: +(null != ec.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        B?.(eo?.current);
    }, [eo, B, ep?.skuId]);
    let eh = n.useRef(null),
        ej = i.id === l.id,
        eI = n.useMemo(() => (0, T.A)(), []),
        eP = (e) => {
            W?.(),
                es.dispatch(Y.jej.POPOUT_CLOSE),
                (0, b.openUserProfileModal)({
                    sourceAnalyticsLocations: el,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eI,
                    ...en,
                    ...e,
                    appContext: X,
                });
        },
        eO = $ ? "div" : c.l,
        em = (0, g.GV)(),
        eg = E.Ay.useName(ed?.id, V, i);
    return (0, s.jsx)(h.f5, {
        value: el,
        children: (0, s.jsx)(U.of, {
            value: en,
            openedAt: H,
            fetchStartedAt: et?.fetchStartedAt,
            fetchEndedAt: et?.fetchEndedAt,
            isLoaded: et?.isLoaded,
            children: (0, s.jsx)(_.Hl, {
                value: ec,
                children: (0, s.jsxs)(eO, {
                    ref: eo,
                    "aria-labelledby": em,
                    onClick: J,
                    children: [
                        (0, s.jsx)(p.A, {
                            children: (0, s.jsx)(A.H, { id: em, children: Q.intl.format(Q.t.KRe1Fk, { name: eg }) }),
                        }),
                        (0, s.jsx)(A.F, {
                            children: (0, s.jsxs)(G.A, {
                                user: i,
                                displayProfile: et,
                                themeType: ev.d.POPOUT,
                                className: r()(eC.BK, ex),
                                style: eA,
                                isPrivate: et?.private === !0,
                                children: [
                                    et?.private === !0 && (0, s.jsx)(w.A, {}),
                                    null != ec.interactionType &&
                                        (0, s.jsx)(o.animated.div, { style: ef, className: eC.tB }),
                                    (0, s.jsxs)(L.A, {
                                        children: [
                                            (0, s.jsx)(Z, {
                                                shouldShowTooltip: null === ec.interactionType,
                                                user: i,
                                                guildId: d,
                                                channelId: V,
                                                onClose: W,
                                                appContext: X,
                                            }),
                                            (0, s.jsx)(M.A, { themeType: ev.d.POPOUT, user: i }),
                                            !ej &&
                                                (0, s.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: d,
                                                    viewProfileItem: D
                                                        ? null
                                                        : (0, s.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: Q.intl.string(Q.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eP(),
                                                                      (0, N.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: el,
                                                                          ...en,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eC.wx,
                                        children: [
                                            (0, s.jsx)(F.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: d,
                                                themeType: ev.d.POPOUT,
                                            }),
                                            (0, s.jsx)(S.A, { userId: i.id, className: eC.oR, onClose: W }),
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: d,
                                                channelId: V,
                                                themeType: ev.d.POPOUT,
                                                onOpenProfile: D ? void 0 : eP,
                                            }),
                                            (0, s.jsx)(ei.A, {
                                                ref: eh,
                                                user: i,
                                                guildId: d,
                                                channelId: V,
                                                themeType: ev.d.POPOUT,
                                                onCloseProfile: W,
                                                prompt: eI,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eE, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: et,
                                        guild: ed,
                                        isHoveringOrFocusing: null == ec.interactionType && ea,
                                        onOpenProfile: D ? void 0 : eP,
                                        channelId: V,
                                        onClose: W,
                                    }),
                                    (0, s.jsx)(eU.A, {
                                        user: i,
                                        guildId: d,
                                        channelId: V,
                                        onClose: W,
                                        appContext: X,
                                        disableAutoFocus: $,
                                    }),
                                    et?.profileEffect != null &&
                                        (0, s.jsx)(j.A, { skuId: et?.profileEffect?.skuId, isHovering: eu }),
                                    null != ep && (0, s.jsx)(O.A, { frame: ep }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
