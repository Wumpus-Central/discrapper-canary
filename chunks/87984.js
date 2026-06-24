l.r(i), l.d(i, { default: () => eE });
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
    f = l(688810),
    x = l(480335),
    h = l(577390),
    I = l(31956),
    j = l(361628),
    P = l(744808),
    O = l(915089),
    m = l(713517),
    g = l(645507),
    y = l(267102),
    T = l(71393),
    v = l(562153),
    C = l(183555),
    E = l(47675),
    U = l(999291),
    N = l(679492),
    k = l(975732),
    _ = l(718019),
    R = l(915614),
    b = l(439053),
    F = l(312381),
    S = l(946356),
    w = l(587168),
    G = l(193738),
    L = l(713608),
    M = l(901472),
    V = l(985925),
    q = l(468689),
    z = l(474397),
    B = l(378570),
    H = l(495544),
    W = l(309010),
    D = l(993401),
    K = l(652215),
    X = l(746080),
    Y = l(486974),
    $ = l(375708);
function J(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: o } = e,
        { newestAnalyticsLocation: t } = (0, f.Ay)(),
        a = (0, y.aL)(),
        u = (0, r.bG)([H.default], () => H.default.getId() === i?.id),
        c = (0, V.q)(l ?? null),
        p = (0, r.bG)([W.A], () => n ?? W.A.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(D.br, {
              action: "PRESS_MOD_VIEW",
              icon: L.q,
              tooltipText: $.intl.string($.t.kj3tz2),
              onClick: () => {
                  q.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, z.A)(o),
                      a.dispatch(K.jej.POPOUT_CLOSE),
                      (0, M.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: Y.g.INFO, sourceLocation: t }),
                      d?.();
              },
          });
}
var Q = l(700174),
    Z = l(983495),
    ee = l(364522),
    ei = l(695366),
    el = l(661531),
    es = l(922590),
    en = l(93246),
    ed = l(994500),
    er = l(351906),
    eo = l(428262),
    et = l(795873),
    ea = l(744753),
    eu = l(559506),
    ec = l(931481),
    ep = l(501193),
    eA = l(383448),
    ef = l(900179),
    ex = l(646986),
    eh = l(349419),
    eI = l(878555),
    ej = l(243166),
    eP = l(442228),
    eO = l(192867),
    em = l(403369),
    eg = l(360563),
    ey = l(996988),
    eT = l(656884);
function ev(e) {
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
        c = v.Ay.useName(d?.id, a, i),
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([ed.A], () => ({
            relationshipType: ed.A.getRelationshipType(i.id),
            originApplicationId: ed.A.getOriginApplicationId(i.id),
        })),
        f = (0, es.fi)(i.id),
        x = (0, r.bG)([er.A], () => er.A.hidePersonalInformation),
        h = i.id === l.id,
        I = n?.widgets != null && n.widgets.length > 0,
        j = (0, eo.TW)(l);
    return (0, s.jsxs)(ee.Ip, {
        fade: !0,
        className: eT.rf,
        children: [
            (0, s.jsx)(eu.A, { userId: i.id }),
            (0, s.jsx)(eI.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: t,
                displayNameTrailing: x ? null : (0, s.jsx)(ej.A, { userId: i.id, isVisible: o, onOpenProfile: t }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eO.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(et.A, { displayProfile: n, themeType: ey.d.POPOUT, onClose: u }),
            }),
            p === K.eA$.PENDING_INCOMING &&
                (0, s.jsx)(S.A.Overlay, {
                    children: (0, s.jsx)(ec.A, { user: i, guildId: d?.id, channelId: a, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    S.A.Overlay,
                    {
                        children: (0, s.jsx)(ec.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: a,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(eA.A, { user: i }),
            !h && (0, s.jsx)(eg.A, { user: i, onOpenProfile: (e) => t?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(S.A.Overlay, { children: (0, s.jsx)(ep.A, { username: c }) }),
            h && (0, s.jsx)(ea.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(S.A.Overlay, {
                      className: eT.Nr,
                      children: (0, s.jsx)(ef.A, {
                          heading: $.intl.string($.t.Iyka0U),
                          headingIcon: (0, s.jsx)(ei.E, { size: "xxs", color: el.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(en.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eP.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: x, onClose: u }),
            I && (0, s.jsx)(eh.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: t }),
            (0, s.jsx)(ex.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: t, onClose: u }),
            null != d && (0, s.jsx)(em.A, { userId: i.id, guild: d }),
        ],
    });
}
var eC = l(920947);
function eE(e) {
    let {
            user: i,
            currentUser: l,
            guildId: L,
            channelId: M,
            messageId: V,
            roleId: q,
            openedAt: z,
            closePopout: B,
            setPopoutRef: H,
            disableUserProfileLink: W = __OVERLAY__,
            newAnalyticsLocations: D = [],
            appContext: X,
            disableAutoFocus: Y = !1,
            onClickContainer: ee,
        } = e,
        { analyticsLocations: ei } = (0, f.Ay)([...D, A.A.USER_PROFILE_POPOUT]),
        el = (0, y.aL)(),
        es = (0, C.pb)({ layout: "POPOUT", userId: i.id, guildId: L, channelId: M, messageId: V, roleId: q }),
        en = (0, r.bG)([T.A], () => (null != L ? T.A.getGuild(L) : null)),
        ed = n.useMemo(() => (null != L ? { [L]: [i.id] } : {}), [L, i.id]);
    (0, p.Eq)(ed, "UserProfilePopout");
    let er = n.useRef(null),
        eo = (0, U.Ay)(i.id, L),
        { isHoveringOrFocusing: et, isHovering: ea } = (0, m.A)(er),
        eu = (0, N.fC)(),
        ec = (0, j.A)(eo?.profileFrame?.skuId, "UserProfilePopout"),
        ep = (0, h.A)(eo?.profileFrame?.skuId);
    (0, I.A)({ skuId: eo?.profileFrame?.skuId, openedAt: z, context: es, analyticsLocations: ei });
    let eA = (0, o.z)({ opacity: +(null != eu.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        H?.(er?.current);
    }, [er, H, ec?.skuId]);
    let ef = n.useRef(null),
        ex = i.id === l.id,
        eh = n.useMemo(() => (0, g.A)(), []);
    function eI(e) {
        B?.(),
            el.dispatch(K.jej.POPOUT_CLOSE),
            (0, k.openUserProfileModal)({
                sourceAnalyticsLocations: ei,
                hideRestrictedProfile: !0,
                customStatusPrompt: eh,
                ...es,
                ...e,
                appContext: X,
            });
    }
    let ej = Y ? "div" : a.l,
        eP = (0, O.GV)(),
        eO = v.Ay.useName(en?.id, M, i);
    return (0, s.jsx)(f.f5, {
        value: ei,
        children: (0, s.jsx)(C.of, {
            value: es,
            openedAt: z,
            fetchStartedAt: eo?.fetchStartedAt,
            fetchEndedAt: eo?.fetchEndedAt,
            isLoaded: eo?.isLoaded,
            children: (0, s.jsx)(N.Hl, {
                value: eu,
                children: (0, s.jsxs)(ej, {
                    ref: er,
                    "aria-labelledby": eP,
                    onClick: ee,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: eP, children: $.intl.format($.t.KRe1Fk, { name: eO }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(S.A, {
                                user: i,
                                displayProfile: eo,
                                themeType: ey.d.POPOUT,
                                className: eT.BK,
                                isPrivate: eo?.private === !0,
                                children: [
                                    eo?.private === !0 && (0, s.jsx)(F.A, {}),
                                    null != eu.interactionType &&
                                        (0, s.jsx)(d.animated.div, { style: eA, className: eT.tB }),
                                    (0, s.jsxs)(w.A, {
                                        children: [
                                            (0, s.jsx)(J, {
                                                shouldShowTooltip: null === eu.interactionType,
                                                user: i,
                                                guildId: L,
                                                channelId: M,
                                                onClose: B,
                                                appContext: X,
                                            }),
                                            (0, s.jsx)(G.A, { themeType: ey.d.POPOUT, user: i }),
                                            !ex &&
                                                (0, s.jsx)(Q.yo, {
                                                    user: i,
                                                    guildId: L,
                                                    viewProfileItem: W
                                                        ? null
                                                        : (0, s.jsx)(t.Dr, {
                                                              id: "view-profile",
                                                              label: $.intl.string($.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eI(),
                                                                      (0, E.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: ei,
                                                                          ...es,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: eT.wx,
                                        children: [
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: eo,
                                                guildId: L,
                                                themeType: ey.d.POPOUT,
                                            }),
                                            (0, s.jsx)(b.A, { userId: i.id, className: eT.oR, onClose: B }),
                                            (0, s.jsx)(_.A, {
                                                user: i,
                                                displayProfile: eo,
                                                guildId: L,
                                                channelId: M,
                                                themeType: ey.d.POPOUT,
                                                onOpenProfile: W ? void 0 : eI,
                                            }),
                                            (0, s.jsx)(Z.A, {
                                                ref: ef,
                                                user: i,
                                                guildId: L,
                                                channelId: M,
                                                themeType: ey.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: eh,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(ev, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: eo,
                                        guild: en,
                                        isHoveringOrFocusing: null == eu.interactionType && et,
                                        onOpenProfile: W ? void 0 : eI,
                                        channelId: M,
                                        onClose: B,
                                    }),
                                    (0, s.jsx)(eC.A, {
                                        user: i,
                                        guildId: L,
                                        channelId: M,
                                        onClose: B,
                                        appContext: X,
                                        disableAutoFocus: Y,
                                    }),
                                    eo?.profileEffect != null &&
                                        (0, s.jsx)(x.A, { skuId: eo?.profileEffect?.skuId, isHovering: ea }),
                                    null != ec && (0, s.jsx)(P.A, { frame: ec, fadeIn: ep }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
