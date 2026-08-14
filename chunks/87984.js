l.r(i), l.d(i, { default: () => eN });
var s = l(477900),
    n = l(582128),
    d = l(53466),
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
    U = l(342053),
    N = l(999291),
    k = l(679492),
    _ = l(975732),
    R = l(718019),
    b = l(915614),
    S = l(439053),
    F = l(312381),
    w = l(946356),
    G = l(587168),
    L = l(193738),
    M = l(713608),
    V = l(901472),
    z = l(985925),
    q = l(468689),
    B = l(474397),
    H = l(378570),
    W = l(280450),
    D = l(309010),
    K = l(993401),
    X = l(652215),
    Y = l(746080),
    $ = l(486974),
    J = l(375708);
function Q(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: o } = e,
        { newestAnalyticsLocation: a } = (0, f.Ay)(),
        t = (0, y.aL)(),
        u = (0, r.bG)([W.default], () => W.default.getId() === i?.id),
        c = (0, z.q)(l ?? null),
        p = (0, r.bG)([D.Ay], () => n ?? D.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(K.br, {
              action: "PRESS_MOD_VIEW",
              icon: M.q,
              tooltipText: J.intl.string(J.t.kj3tz2),
              onClick: () => {
                  q.A.close(),
                      null != p && (0, H.iN)(p),
                      (0, B.A)(o),
                      t.dispatch(X.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? Y.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: a }),
                      d?.();
              },
          });
}
var Z = l(133385),
    ee = l(983495),
    ei = l(364522),
    el = l(695366),
    es = l(661531),
    en = l(922590),
    ed = l(93246),
    er = l(994500),
    eo = l(351906),
    ea = l(158045),
    et = l(413492),
    eu = l(744753),
    ec = l(559506),
    ep = l(931481),
    eA = l(501193),
    ef = l(383448),
    ex = l(900179),
    eI = l(646986),
    eh = l(563608),
    ej = l(465829),
    eP = l(243166),
    eO = l(442228),
    eg = l(192867),
    em = l(403369),
    ey = l(360563),
    eT = l(996988),
    ev = l(83260);
function eC(e) {
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
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([er.A], () => ({
            relationshipType: er.A.getRelationshipType(i.id),
            originApplicationId: er.A.getOriginApplicationId(i.id),
        })),
        f = (0, en.fi)(i.id),
        x = (0, r.bG)([eo.A], () => eo.A.hidePersonalInformation),
        I = i.id === l.id,
        h = n?.widgets != null && n.widgets.length > 0,
        j = (0, ea.TW)(l);
    return (0, s.jsxs)(ei.Ip, {
        fade: !0,
        className: ev.rf,
        children: [
            (0, s.jsx)(ec.A, { userId: i.id }),
            (0, s.jsx)(ej.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: x ? null : (0, s.jsx)(eP.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(et.A, { displayProfile: n, themeType: eT.d.POPOUT, onClose: u }),
            }),
            p === X.eA$.PENDING_INCOMING &&
                (0, s.jsx)(w.A.Overlay, {
                    children: (0, s.jsx)(ep.A, { user: i, guildId: d?.id, channelId: t, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    w.A.Overlay,
                    {
                        children: (0, s.jsx)(ep.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: t,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(ef.A, { user: i }),
            !I && (0, s.jsx)(ey.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(w.A.Overlay, { children: (0, s.jsx)(eA.A, { username: c }) }),
            I && (0, s.jsx)(eu.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(w.A.Overlay, {
                      className: ev.Nr,
                      children: (0, s.jsx)(ex.A, {
                          heading: J.intl.string(J.t.Iyka0U),
                          headingIcon: (0, s.jsx)(el.E, { size: "xxs", color: es.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(ed.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eO.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: x, onClose: u }),
            h && (0, s.jsx)(eh.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: a }),
            (0, s.jsx)(eI.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: a, onClose: u }),
            null != d && (0, s.jsx)(em.A, { userId: i.id, guild: d }),
        ],
    });
}
var eE = l(848674),
    eU = l(985253);
function eN(e) {
    let {
            user: i,
            currentUser: l,
            guildId: M,
            channelId: V,
            messageId: z,
            roleId: q,
            openedAt: B,
            closePopout: H,
            setPopoutRef: W,
            disableUserProfileLink: D = __OVERLAY__,
            newAnalyticsLocations: K = [],
            appContext: Y,
            disableAutoFocus: $ = !1,
            onClickContainer: ei,
        } = e,
        { analyticsLocations: el } = (0, f.Ay)([...K, A.A.USER_PROFILE_POPOUT]),
        es = (0, y.aL)(),
        en = (0, C.pb)({ layout: "POPOUT", userId: i.id, guildId: M, channelId: V, messageId: z, roleId: q }),
        ed = (0, r.bG)([T.A], () => (null != M ? T.A.getGuild(M) : null)),
        er = n.useMemo(() => (null != M ? { [M]: [i.id] } : {}), [M, i.id]);
    (0, p.Eq)(er, "UserProfilePopout");
    let eo = n.useRef(null),
        ea = (0, N.Ay)(i.id, M),
        { isHoveringOrFocusing: et, isHovering: eu } = (0, g.A)(eo),
        ec = (0, k.fC)(),
        ep = (0, h.A)(ea?.profileFrame?.skuId, "UserProfilePopout"),
        eA = (0, I.A)(ea?.profileFrame?.skuId);
    (0, j.A)({ skuId: ea?.profileFrame?.skuId, openedAt: B, context: en, analyticsLocations: el });
    let ef = (0, o.z)({ opacity: +(null != ec.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        W?.(eo?.current);
    }, [eo, W, ep?.skuId]);
    let ex = n.useRef(null),
        eI = i.id === l.id,
        eh = (0, U.g)("UserProfilePopout"),
        ej = n.useMemo(() => (0, m.A)(), []);
    function eP(e) {
        H?.(),
            es.dispatch(X.jej.POPOUT_CLOSE),
            (0, _.openUserProfileModal)({
                sourceAnalyticsLocations: el,
                hideRestrictedProfile: !0,
                customStatusPrompt: ej,
                ...en,
                ...e,
                appContext: Y,
            });
    }
    let eO = $ ? "div" : t.l,
        eg = (0, O.GV)(),
        em = v.Ay.useName(ed?.id, V, i);
    return (0, s.jsx)(f.f5, {
        value: el,
        children: (0, s.jsx)(C.of, {
            value: en,
            openedAt: B,
            fetchStartedAt: ea?.fetchStartedAt,
            fetchEndedAt: ea?.fetchEndedAt,
            isLoaded: ea?.isLoaded,
            children: (0, s.jsx)(k.Hl, {
                value: ec,
                children: (0, s.jsxs)(eO, {
                    ref: eo,
                    "aria-labelledby": eg,
                    onClick: ei,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: eg, children: J.intl.format(J.t.KRe1Fk, { name: em }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(w.A, {
                                user: i,
                                displayProfile: ea,
                                themeType: eT.d.POPOUT,
                                className: ev.BK,
                                isPrivate: ea?.private === !0,
                                children: [
                                    ea?.private === !0 && (0, s.jsx)(F.A, {}),
                                    null != ec.interactionType &&
                                        (0, s.jsx)(d.animated.div, { style: ef, className: ev.tB }),
                                    (0, s.jsxs)(G.A, {
                                        children: [
                                            (0, s.jsx)(Q, {
                                                shouldShowTooltip: null === ec.interactionType,
                                                user: i,
                                                guildId: M,
                                                channelId: V,
                                                onClose: H,
                                                appContext: Y,
                                            }),
                                            (0, s.jsx)(L.A, { themeType: eT.d.POPOUT, user: i }),
                                            (!eI || eh) &&
                                                (0, s.jsx)(Z.yo, {
                                                    user: i,
                                                    guildId: M,
                                                    viewProfileItem: eI
                                                        ? void 0
                                                        : D
                                                          ? null
                                                          : (0, s.jsx)(a.Dr, {
                                                                id: "view-profile",
                                                                label: J.intl.string(J.t["+Xp3hq"]),
                                                                action: () => {
                                                                    eP(),
                                                                        (0, E.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: el,
                                                                            ...en,
                                                                        });
                                                                },
                                                            }),
                                                    appContext: Y,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: ev.wx,
                                        children: [
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: M,
                                                themeType: eT.d.POPOUT,
                                            }),
                                            (0, s.jsx)(S.A, { userId: i.id, className: ev.oR, onClose: H }),
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: M,
                                                channelId: V,
                                                avatarSize: eU.T[eT.d.POPOUT].avatarSize,
                                                onOpenProfile: D ? void 0 : eP,
                                            }),
                                            (0, s.jsx)(ee.A, {
                                                ref: ex,
                                                user: i,
                                                guildId: M,
                                                channelId: V,
                                                themeType: eT.d.POPOUT,
                                                onCloseProfile: H,
                                                prompt: ej,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eC, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: ea,
                                        guild: ed,
                                        isHoveringOrFocusing: null == ec.interactionType && et,
                                        onOpenProfile: D ? void 0 : eP,
                                        channelId: V,
                                        onClose: H,
                                    }),
                                    (0, s.jsx)(eE.A, {
                                        user: i,
                                        guildId: M,
                                        channelId: V,
                                        onClose: H,
                                        appContext: Y,
                                        disableAutoFocus: $,
                                    }),
                                    ea?.profileEffect != null &&
                                        (0, s.jsx)(x.A, { skuId: ea?.profileEffect?.skuId, isHovering: eu }),
                                    null != ep && (0, s.jsx)(P.A, { frame: ep, fadeIn: eA }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
