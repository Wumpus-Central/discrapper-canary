l.r(i), l.d(i, { default: () => eU });
var s = l(477900),
    n = l(582128),
    d = l(296704),
    r = l(17928),
    o = l(717421),
    a = l(477782),
    t = l(305866),
    u = l(140735),
    c = l(707554),
    p = l(80682),
    A = l(793574),
    f = l(688810),
    I = l(480335),
    h = l(577390),
    x = l(372320),
    j = l(31956),
    P = l(744808),
    O = l(915089),
    g = l(713517),
    m = l(645507),
    y = l(267102),
    v = l(71393),
    T = l(562153),
    C = l(183555),
    E = l(47675),
    U = l(342053),
    k = l(999291),
    N = l(679492),
    _ = l(975732),
    b = l(718019),
    R = l(915614),
    S = l(439053),
    F = l(312381),
    w = l(946356),
    L = l(587168),
    G = l(193738),
    M = l(713608),
    V = l(901472),
    z = l(985925),
    q = l(468689),
    B = l(474397),
    H = l(378570),
    W = l(280450),
    D = l(309010),
    K = l(993401),
    Y = l(652215),
    X = l(746080),
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
                      t.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, V.z)(l, i.id, p ?? X.VV.MEMBER_SAFETY, { modViewPanel: $.g.INFO, sourceLocation: a }),
                      d?.();
              },
          });
}
var Z = l(133385),
    ee = l(983495),
    ei = l(364522),
    el = l(695366),
    es = l(922590),
    en = l(93246),
    ed = l(994500),
    er = l(351906),
    eo = l(158045),
    ea = l(681331),
    et = l(744753),
    eu = l(559506),
    ec = l(931481),
    ep = l(501193),
    eA = l(383448),
    ef = l(900179),
    eI = l(646986),
    eh = l(460987),
    ex = l(465829),
    ej = l(243166),
    eP = l(442228),
    eO = l(192867),
    eg = l(403369),
    em = l(360563),
    ey = l(996988),
    ev = l(47453);
function eT(e) {
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
        c = T.Ay.useName(d?.id, t, i),
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([ed.A], () => ({
            relationshipType: ed.A.getRelationshipType(i.id),
            originApplicationId: ed.A.getOriginApplicationId(i.id),
        })),
        f = (0, es.fi)(i.id),
        I = (0, r.bG)([er.A], () => er.A.hidePersonalInformation),
        h = i.id === l.id,
        x = n?.widgets != null && n.widgets.length > 0,
        j = (0, eo.TW)(l);
    return (0, s.jsxs)(ei.Ip, {
        fade: !0,
        className: ev.rf,
        children: [
            (0, s.jsx)(eu.A, { userId: i.id }),
            (0, s.jsx)(ex.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: I ? null : (0, s.jsx)(ej.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eO.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(ea.A, { displayProfile: n, themeType: ey.d.POPOUT, onClose: u }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, s.jsx)(w.A.Overlay, {
                    children: (0, s.jsx)(ec.A, { user: i, guildId: d?.id, channelId: t, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    w.A.Overlay,
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
            !h && (0, s.jsx)(em.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(w.A.Overlay, { children: (0, s.jsx)(ep.A, { username: c }) }),
            h && (0, s.jsx)(et.A, { isPremiumUser: j, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(w.A.Overlay, {
                      className: ev.Nr,
                      children: (0, s.jsx)(ef.A, {
                          heading: J.intl.string(J.t.Iyka0U),
                          headingIcon: el.E,
                          headingColor: "text-strong",
                          children: (0, s.jsx)(en.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eP.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: I, onClose: u }),
            x && (0, s.jsx)(eh.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: a }),
            (0, s.jsx)(eI.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: a, onClose: u }),
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
            guildId: M,
            channelId: V,
            messageId: z,
            roleId: q,
            openedAt: B,
            closePopout: H,
            setPopoutRef: W,
            disableUserProfileLink: D = __OVERLAY__,
            newAnalyticsLocations: K = [],
            appContext: X,
            disableAutoFocus: $ = !1,
            onClickContainer: ei,
        } = e,
        { analyticsLocations: el } = (0, f.Ay)([...K, A.A.USER_PROFILE_POPOUT]),
        es = (0, y.aL)(),
        en = (0, C.pb)({ layout: "POPOUT", userId: i.id, guildId: M, channelId: V, messageId: z, roleId: q }),
        ed = (0, r.bG)([v.A], () => (null != M ? v.A.getGuild(M) : null)),
        er = n.useMemo(() => (null != M ? { [M]: [i.id] } : {}), [M, i.id]);
    (0, p.Eq)(er, "UserProfilePopout");
    let eo = n.useRef(null),
        ea = (0, k.Ay)(i.id, M),
        { isHoveringOrFocusing: et, isHovering: eu } = (0, g.A)(eo),
        ec = (0, N.fC)(),
        ep = (0, x.A)(ea?.profileFrame?.skuId, "UserProfilePopout"),
        eA = (0, h.A)(ea?.profileFrame?.skuId);
    (0, j.A)({ skuId: ea?.profileFrame?.skuId, openedAt: B, context: en, analyticsLocations: el });
    let ef = (0, o.z)({ opacity: +(null != ec.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        W?.(eo?.current);
    }, [eo, W, ep?.skuId]);
    let eI = n.useRef(null),
        eh = i.id === l.id,
        ex = (0, U.g)("UserProfilePopout"),
        ej = n.useMemo(() => (0, m.A)(), []);
    function eP(e) {
        H?.(),
            es.dispatch(Y.jej.POPOUT_CLOSE),
            (0, _.openUserProfileModal)({
                sourceAnalyticsLocations: el,
                hideRestrictedProfile: !0,
                customStatusPrompt: ej,
                ...en,
                ...e,
                appContext: X,
            });
    }
    let eO = $ ? "div" : t.l,
        eg = (0, O.GV)(),
        em = T.Ay.useName(ed?.id, V, i);
    return (0, s.jsx)(f.f5, {
        value: el,
        children: (0, s.jsx)(C.of, {
            value: en,
            openedAt: B,
            fetchStartedAt: ea?.fetchStartedAt,
            fetchEndedAt: ea?.fetchEndedAt,
            isLoaded: ea?.isLoaded,
            children: (0, s.jsx)(N.Hl, {
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
                                themeType: ey.d.POPOUT,
                                className: ev.BK,
                                isPrivate: ea?.private === !0,
                                children: [
                                    ea?.private === !0 && (0, s.jsx)(F.A, {}),
                                    null != ec.interactionType &&
                                        (0, s.jsx)(d.animated.div, { style: ef, className: ev.tB }),
                                    (0, s.jsxs)(L.A, {
                                        children: [
                                            (0, s.jsx)(Q, {
                                                shouldShowTooltip: null === ec.interactionType,
                                                user: i,
                                                guildId: M,
                                                channelId: V,
                                                onClose: H,
                                                appContext: X,
                                            }),
                                            (0, s.jsx)(G.A, { themeType: ey.d.POPOUT, user: i }),
                                            (!eh || ex) &&
                                                (0, s.jsx)(Z.yo, {
                                                    user: i,
                                                    guildId: M,
                                                    viewProfileItem: eh
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
                                                    appContext: X,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: ev.wx,
                                        children: [
                                            (0, s.jsx)(R.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: M,
                                                themeType: ey.d.POPOUT,
                                            }),
                                            (0, s.jsx)(S.A, { userId: i.id, className: ev.oR, onClose: H }),
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: ea,
                                                guildId: M,
                                                channelId: V,
                                                avatarSize: eE.T[ey.d.POPOUT].avatarSize,
                                                onOpenProfile: D ? void 0 : eP,
                                            }),
                                            (0, s.jsx)(ee.A, {
                                                ref: eI,
                                                user: i,
                                                guildId: M,
                                                channelId: V,
                                                themeType: ey.d.POPOUT,
                                                onCloseProfile: H,
                                                prompt: ej,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eT, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: ea,
                                        guild: ed,
                                        isHoveringOrFocusing: null == ec.interactionType && et,
                                        onOpenProfile: D ? void 0 : eP,
                                        channelId: V,
                                        onClose: H,
                                    }),
                                    (0, s.jsx)(eC.A, {
                                        user: i,
                                        guildId: M,
                                        channelId: V,
                                        onClose: H,
                                        appContext: X,
                                        disableAutoFocus: $,
                                    }),
                                    ea?.profileEffect != null &&
                                        (0, s.jsx)(I.A, { skuId: ea?.profileEffect?.skuId, isHovering: eu }),
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
