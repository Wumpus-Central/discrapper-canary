l.r(i), l.d(i, { default: () => eU });
var s = l(477900),
    n = l(582128),
    d = l(682577),
    r = l(17928),
    o = l(717421),
    a = l(477782),
    t = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    A = l(793574),
    f = l(688810),
    x = l(480335),
    I = l(577390),
    h = l(372320),
    j = l(31956),
    P = l(744808),
    O = l(915089),
    g = l(713517),
    m = l(645507),
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
    S = l(312381),
    F = l(946356),
    w = l(587168),
    G = l(193738),
    L = l(713608),
    M = l(901472),
    V = l(985925),
    z = l(468689),
    q = l(474397),
    B = l(378570),
    H = l(280450),
    W = l(309010),
    D = l(993401),
    K = l(652215),
    X = l(746080),
    Y = l(486974),
    $ = l(375708);
function J(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: o } = e,
        { newestAnalyticsLocation: a } = (0, f.Ay)(),
        t = (0, y.aL)(),
        u = (0, r.bG)([H.default], () => H.default.getId() === i?.id),
        c = (0, V.q)(l ?? null),
        p = (0, r.bG)([W.Ay], () => n ?? W.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(D.br, {
              action: "PRESS_MOD_VIEW",
              icon: L.q,
              tooltipText: $.intl.string($.t.kj3tz2),
              onClick: () => {
                  z.A.close(),
                      null != p && (0, B.iN)(p),
                      (0, q.A)(o),
                      t.dispatch(K.jej.POPOUT_CLOSE),
                      (0, M.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: Y.g.INFO, sourceLocation: a }),
                      d?.();
              },
          });
}
var Q = l(133385),
    Z = l(983495),
    ee = l(364522),
    ei = l(695366),
    el = l(661531),
    es = l(922590),
    en = l(93246),
    ed = l(994500),
    er = l(351906),
    eo = l(158045),
    ea = l(413492),
    et = l(744753),
    eu = l(559506),
    ec = l(931481),
    ep = l(501193),
    eA = l(383448),
    ef = l(900179),
    ex = l(646986),
    eI = l(563608),
    eh = l(465829),
    ej = l(243166),
    eP = l(442228),
    eO = l(192867),
    eg = l(403369),
    em = l(360563),
    ey = l(996988),
    eT = l(83260);
function ev(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: d,
            isHoveringOrFocusing: o,
            onOpenProfile: a,
            channelId: t,
            onClose: u,
        } = e,
        c = v.Ay.useName(d?.id, t, i),
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([ed.A], () => ({
            relationshipType: ed.A.getRelationshipType(i.id),
            originApplicationId: ed.A.getOriginApplicationId(i.id),
        })),
        f = (0, es.fi)(i.id),
        x = (0, r.bG)([er.A], () => er.A.hidePersonalInformation),
        I = i.id === l.id,
        h = n?.widgets != null && n.widgets.length > 0,
        j = (0, eo.TW)(l);
    return (0, s.jsxs)(ee.Ip, {
        fade: !0,
        className: eT.rf,
        children: [
            (0, s.jsx)(eu.A, { userId: i.id }),
            (0, s.jsx)(eh.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: x ? null : (0, s.jsx)(ej.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eO.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(ea.A, { displayProfile: n, themeType: ey.d.POPOUT, onClose: u }),
            }),
            p === K.eA$.PENDING_INCOMING &&
                (0, s.jsx)(F.A.Overlay, {
                    children: (0, s.jsx)(ec.A, { user: i, guildId: d?.id, channelId: t, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    F.A.Overlay,
                    {
                        children: (0, s.jsx)(ec.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: t,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(eA.A, { user: i }),
            !I && (0, s.jsx)(em.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(F.A.Overlay, { children: (0, s.jsx)(ep.A, { username: c }) }),
            I && (0, s.jsx)(et.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(F.A.Overlay, {
                      className: eT.Nr,
                      children: (0, s.jsx)(ef.A, {
                          heading: $.intl.string($.t.Iyka0U),
                          headingIcon: (0, s.jsx)(ei.E, { size: "xxs", color: el.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(en.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eP.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: x, onClose: u }),
            h && (0, s.jsx)(eI.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: a }),
            (0, s.jsx)(ex.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: a, onClose: u }),
            null != d && (0, s.jsx)(eg.A, { userId: i.id, guild: d }),
        ],
    });
}
var eC = l(848674),
    eE = l(985253);
function eU(e) {
    let {
            user: i,
            currentUser: l,
            guildId: L,
            channelId: M,
            messageId: V,
            roleId: z,
            openedAt: q,
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
        es = (0, C.pb)({ layout: "POPOUT", userId: i.id, guildId: L, channelId: M, messageId: V, roleId: z }),
        en = (0, r.bG)([T.A], () => (null != L ? T.A.getGuild(L) : null)),
        ed = n.useMemo(() => (null != L ? { [L]: [i.id] } : {}), [L, i.id]);
    (0, p.Eq)(ed, "UserProfilePopout");
    let er = n.useRef(null),
        eo = (0, U.Ay)(i.id, L),
        { isHoveringOrFocusing: ea, isHovering: et } = (0, g.A)(er),
        eu = (0, N.fC)(),
        ec = (0, h.A)(eo?.profileFrame?.skuId, "UserProfilePopout"),
        ep = (0, I.A)(eo?.profileFrame?.skuId);
    (0, j.A)({ skuId: eo?.profileFrame?.skuId, openedAt: q, context: es, analyticsLocations: ei });
    let eA = (0, o.z)({ opacity: +(null != eu.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        H?.(er?.current);
    }, [er, H, ec?.skuId]);
    let ef = n.useRef(null),
        ex = i.id === l.id,
        eI = n.useMemo(() => (0, m.A)(), []);
    function eh(e) {
        B?.(),
            el.dispatch(K.jej.POPOUT_CLOSE),
            (0, k.openUserProfileModal)({
                sourceAnalyticsLocations: ei,
                hideRestrictedProfile: !0,
                customStatusPrompt: eI,
                ...es,
                ...e,
                appContext: X,
            });
    }
    let ej = Y ? "div" : t.l,
        eP = (0, O.GV)(),
        eO = v.Ay.useName(en?.id, M, i);
    return (0, s.jsx)(f.f5, {
        value: ei,
        children: (0, s.jsx)(C.of, {
            value: es,
            openedAt: q,
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
                            children: (0, s.jsxs)(F.A, {
                                user: i,
                                displayProfile: eo,
                                themeType: ey.d.POPOUT,
                                className: eT.BK,
                                isPrivate: eo?.private === !0,
                                children: [
                                    eo?.private === !0 && (0, s.jsx)(S.A, {}),
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
                                                        : (0, s.jsx)(a.Dr, {
                                                              id: "view-profile",
                                                              label: $.intl.string($.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eh(),
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
                                                avatarSize: eE.T[ey.d.POPOUT].avatarSize,
                                                onOpenProfile: W ? void 0 : eh,
                                            }),
                                            (0, s.jsx)(Z.A, {
                                                ref: ef,
                                                user: i,
                                                guildId: L,
                                                channelId: M,
                                                themeType: ey.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: eI,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(ev, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: eo,
                                        guild: en,
                                        isHoveringOrFocusing: null == eu.interactionType && ea,
                                        onOpenProfile: W ? void 0 : eh,
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
                                        (0, s.jsx)(x.A, { skuId: eo?.profileEffect?.skuId, isHovering: et }),
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
