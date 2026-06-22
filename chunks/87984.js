l.r(i), l.d(i, { default: () => eC });
var s = l(627968),
    n = l(64700),
    d = l(308186),
    r = l(17928),
    o = l(717421),
    t = l(477782),
    a = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    A = l(793574),
    x = l(688810),
    h = l(480335),
    f = l(31956),
    j = l(361628),
    I = l(744808),
    P = l(915089),
    O = l(713517),
    g = l(645507),
    m = l(267102),
    y = l(71393),
    T = l(562153),
    v = l(183555),
    C = l(47675),
    E = l(999291),
    U = l(679492),
    N = l(975732),
    k = l(718019),
    _ = l(915614),
    R = l(439053),
    b = l(312381),
    S = l(946356),
    w = l(587168),
    F = l(193738),
    G = l(713608),
    L = l(901472),
    M = l(985925),
    V = l(468689),
    q = l(474397),
    z = l(378570),
    B = l(495544),
    H = l(309010),
    W = l(993401),
    D = l(652215),
    K = l(746080),
    X = l(486974),
    Y = l(375708);
function $(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: o } = e,
        { newestAnalyticsLocation: t } = (0, x.Ay)(),
        a = (0, m.aL)(),
        u = (0, r.bG)([B.default], () => B.default.getId() === i?.id),
        c = (0, M.q)(l ?? null),
        p = (0, r.bG)([H.A], () => n ?? H.A.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(W.br, {
              action: "PRESS_MOD_VIEW",
              icon: G.q,
              tooltipText: Y.intl.string(Y.t.kj3tz2),
              onClick: () => {
                  V.A.close(),
                      null != p && (0, z.iN)(p),
                      (0, q.A)(o),
                      a.dispatch(D.jej.POPOUT_CLOSE),
                      (0, L.z)(l, i.id, p ?? K.VV.MEMBER_SAFETY, { modViewPanel: X.g.INFO, sourceLocation: t }),
                      d?.();
              },
          });
}
var J = l(700174),
    Q = l(983495),
    Z = l(364522),
    ee = l(695366),
    ei = l(661531),
    el = l(922590),
    es = l(93246),
    en = l(994500),
    ed = l(351906),
    er = l(428262),
    eo = l(795873),
    et = l(744753),
    ea = l(559506),
    eu = l(931481),
    ec = l(501193),
    ep = l(383448),
    eA = l(900179),
    ex = l(646986),
    eh = l(349419),
    ef = l(878555),
    ej = l(243166),
    eI = l(442228),
    eP = l(192867),
    eO = l(403369),
    eg = l(360563),
    em = l(996988),
    ey = l(656884);
function eT(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: d,
            isHoveringOrFocusing: o,
            onOpenProfile: t,
            channelId: a,
            onClose: u,
        } = e,
        c = T.Ay.useName(d?.id, a, i),
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([en.A], () => ({
            relationshipType: en.A.getRelationshipType(i.id),
            originApplicationId: en.A.getOriginApplicationId(i.id),
        })),
        x = (0, el.fi)(i.id),
        h = (0, r.bG)([ed.A], () => ed.A.hidePersonalInformation),
        f = i.id === l.id,
        j = n?.widgets != null && n.widgets.length > 0,
        I = (0, er.TW)(l);
    return (0, s.jsxs)(Z.Ip, {
        fade: !0,
        className: ey.rf,
        children: [
            (0, s.jsx)(ea.A, { userId: i.id }),
            (0, s.jsx)(ef.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: t,
                displayNameTrailing: h ? null : (0, s.jsx)(ej.A, { userId: i.id, isVisible: o, onOpenProfile: t }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eP.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(eo.A, { displayProfile: n, themeType: em.d.POPOUT, onClose: u }),
            }),
            p === D.eA$.PENDING_INCOMING &&
                (0, s.jsx)(S.A.Overlay, {
                    children: (0, s.jsx)(eu.A, { user: i, guildId: d?.id, channelId: a, applicationId: A }),
                }),
            x.map((e) =>
                (0, s.jsx)(
                    S.A.Overlay,
                    {
                        children: (0, s.jsx)(eu.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(ep.A, { user: i }),
            !f && (0, s.jsx)(eg.A, { user: i, onOpenProfile: (e) => t?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(S.A.Overlay, { children: (0, s.jsx)(ec.A, { username: c }) }),
            f && (0, s.jsx)(et.A, { isPremiumUser: I, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(S.A.Overlay, {
                      className: ey.Nr,
                      children: (0, s.jsx)(eA.A, {
                          heading: Y.intl.string(Y.t.Iyka0U),
                          headingIcon: (0, s.jsx)(ee.E, { size: "xxs", color: ei.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(es.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eI.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: h, onClose: u }),
            j && (0, s.jsx)(eh.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: t }),
            (0, s.jsx)(ex.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: t, onClose: u }),
            null != d && (0, s.jsx)(eO.A, { userId: i.id, guild: d }),
        ],
    });
}
var ev = l(920947);
function eC(e) {
    let {
            user: i,
            currentUser: l,
            guildId: G,
            channelId: L,
            messageId: M,
            roleId: V,
            openedAt: q,
            closePopout: z,
            setPopoutRef: B,
            disableUserProfileLink: H = __OVERLAY__,
            newAnalyticsLocations: W = [],
            appContext: K,
            disableAutoFocus: X = !1,
            onClickContainer: Z,
        } = e,
        { analyticsLocations: ee } = (0, x.Ay)([...W, A.A.USER_PROFILE_POPOUT]),
        ei = (0, m.aL)(),
        el = (0, v.pb)({ layout: "POPOUT", userId: i.id, guildId: G, channelId: L, messageId: M, roleId: V }),
        es = (0, r.bG)([y.A], () => (null != G ? y.A.getGuild(G) : null)),
        en = n.useMemo(() => (null != G ? { [G]: [i.id] } : {}), [G, i.id]);
    (0, p.Eq)(en, "UserProfilePopout");
    let ed = n.useRef(null),
        er = (0, E.Ay)(i.id, G),
        { isHoveringOrFocusing: eo, isHovering: et } = (0, O.A)(ed),
        ea = (0, U.fC)(),
        eu = (0, j.A)(er?.profileFrame?.skuId, "UserProfilePopout");
    (0, f.A)({ skuId: er?.profileFrame?.skuId, openedAt: q, context: el, analyticsLocations: ee });
    let ec = (0, o.z)({ opacity: +(null != ea.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        B?.(ed?.current);
    }, [ed, B, eu?.skuId]);
    let ep = n.useRef(null),
        eA = i.id === l.id,
        ex = n.useMemo(() => (0, g.A)(), []),
        eh = (e) => {
            z?.(),
                ei.dispatch(D.jej.POPOUT_CLOSE),
                (0, N.openUserProfileModal)({
                    sourceAnalyticsLocations: ee,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ex,
                    ...el,
                    ...e,
                    appContext: K,
                });
        },
        ef = X ? "div" : a.l,
        ej = (0, P.GV)(),
        eI = T.Ay.useName(es?.id, L, i);
    return (0, s.jsx)(x.f5, {
        value: ee,
        children: (0, s.jsx)(v.of, {
            value: el,
            openedAt: q,
            fetchStartedAt: er?.fetchStartedAt,
            fetchEndedAt: er?.fetchEndedAt,
            isLoaded: er?.isLoaded,
            children: (0, s.jsx)(U.Hl, {
                value: ea,
                children: (0, s.jsxs)(ef, {
                    ref: ed,
                    "aria-labelledby": ej,
                    onClick: Z,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: ej, children: Y.intl.format(Y.t.KRe1Fk, { name: eI }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(S.A, {
                                user: i,
                                displayProfile: er,
                                themeType: em.d.POPOUT,
                                className: ey.BK,
                                isPrivate: er?.private === !0,
                                children: [
                                    er?.private === !0 && (0, s.jsx)(b.A, {}),
                                    null != ea.interactionType &&
                                        (0, s.jsx)(d.animated.div, { style: ec, className: ey.tB }),
                                    (0, s.jsxs)(w.A, {
                                        children: [
                                            (0, s.jsx)($, {
                                                shouldShowTooltip: null === ea.interactionType,
                                                user: i,
                                                guildId: G,
                                                channelId: L,
                                                onClose: z,
                                                appContext: K,
                                            }),
                                            (0, s.jsx)(F.A, { themeType: em.d.POPOUT, user: i }),
                                            !eA &&
                                                (0, s.jsx)(J.yo, {
                                                    user: i,
                                                    guildId: G,
                                                    viewProfileItem: H
                                                        ? null
                                                        : (0, s.jsx)(t.Dr, {
                                                              id: "view-profile",
                                                              label: Y.intl.string(Y.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eh(),
                                                                      (0, C.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: ee,
                                                                          ...el,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: K,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: ey.wx,
                                        children: [
                                            (0, s.jsx)(_.A, {
                                                user: i,
                                                displayProfile: er,
                                                guildId: G,
                                                themeType: em.d.POPOUT,
                                            }),
                                            (0, s.jsx)(R.A, { userId: i.id, className: ey.oR, onClose: z }),
                                            (0, s.jsx)(k.A, {
                                                user: i,
                                                displayProfile: er,
                                                guildId: G,
                                                channelId: L,
                                                themeType: em.d.POPOUT,
                                                onOpenProfile: H ? void 0 : eh,
                                            }),
                                            (0, s.jsx)(Q.A, {
                                                ref: ep,
                                                user: i,
                                                guildId: G,
                                                channelId: L,
                                                themeType: em.d.POPOUT,
                                                onCloseProfile: z,
                                                prompt: ex,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eT, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: er,
                                        guild: es,
                                        isHoveringOrFocusing: null == ea.interactionType && eo,
                                        onOpenProfile: H ? void 0 : eh,
                                        channelId: L,
                                        onClose: z,
                                    }),
                                    (0, s.jsx)(ev.A, {
                                        user: i,
                                        guildId: G,
                                        channelId: L,
                                        onClose: z,
                                        appContext: K,
                                        disableAutoFocus: X,
                                    }),
                                    er?.profileEffect != null &&
                                        (0, s.jsx)(h.A, { skuId: er?.profileEffect?.skuId, isHovering: et }),
                                    null != eu && (0, s.jsx)(I.A, { frame: eu }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
