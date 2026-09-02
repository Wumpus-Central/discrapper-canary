l.r(i), l.d(i, { default: () => eN });
var s = l(477900),
    n = l(582128),
    d = l(221877),
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
    P = l(372320),
    x = l(31956),
    j = l(744808),
    O = l(915089),
    g = l(713517),
    m = l(645507),
    y = l(267102),
    T = l(397562),
    v = l(71393),
    C = l(562153),
    U = l(183555),
    E = l(47675),
    k = l(342053),
    N = l(999291),
    _ = l(679492),
    R = l(402860),
    b = l(718019),
    S = l(915614),
    F = l(439053),
    w = l(312381),
    L = l(946356),
    G = l(587168),
    M = l(193738),
    V = l(713608),
    z = l(901472),
    q = l(985925),
    B = l(468689),
    H = l(474397),
    W = l(378570),
    D = l(280450),
    K = l(309010),
    Y = l(993401),
    X = l(652215),
    $ = l(746080),
    J = l(486974),
    Q = l(375708);
function Z(e) {
    let { user: i, guildId: l, channelId: n, onClose: d, appContext: o } = e,
        { newestAnalyticsLocation: a } = (0, f.Ay)(),
        t = (0, y.aL)(),
        u = (0, r.bG)([D.default], () => D.default.getId() === i?.id),
        c = (0, q.q)(l ?? null),
        p = (0, r.bG)([K.Ay], () => n ?? K.Ay.getChannelId(l, !0), [n, l]);
    return null == l || !c || u
        ? null
        : (0, s.jsx)(Y.br, {
              action: "PRESS_MOD_VIEW",
              icon: V.q,
              tooltipText: Q.intl.string(Q.t.kj3tz2),
              onClick: () => {
                  B.A.close(),
                      null != p && (0, W.iN)(p),
                      (0, H.A)(o),
                      t.dispatch(X.jej.POPOUT_CLOSE),
                      (0, z.z)(l, i.id, p ?? $.VV.MEMBER_SAFETY, { modViewPanel: J.g.INFO, sourceLocation: a }),
                      d?.();
              },
          });
}
var ee = l(133385),
    ei = l(983495),
    el = l(364522),
    es = l(695366),
    en = l(922590),
    ed = l(93246),
    er = l(994500),
    eo = l(351906),
    ea = l(158045),
    et = l(461116),
    eu = l(744753),
    ec = l(559506),
    ep = l(931481),
    eA = l(501193),
    ef = l(383448),
    eI = l(900179),
    eh = l(646986),
    eP = l(657538),
    ex = l(465829),
    ej = l(243166),
    eO = l(442228),
    eg = l(192867),
    em = l(403369),
    ey = l(360563),
    eT = l(996988),
    ev = l(47453);
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
        c = C.Ay.useName(d?.id, t, i),
        { relationshipType: p, originApplicationId: A } = (0, r.cf)([er.A], () => ({
            relationshipType: er.A.getRelationshipType(i.id),
            originApplicationId: er.A.getOriginApplicationId(i.id),
        })),
        f = (0, en.fi)(i.id),
        I = (0, r.bG)([eo.A], () => eo.A.hidePersonalInformation),
        h = i.id === l.id,
        P = n?.widgets != null && n.widgets.length > 0,
        x = (0, ea.TW)(l);
    return (0, s.jsxs)(el.Ip, {
        fade: !0,
        className: ev.rf,
        children: [
            (0, s.jsx)(ec.A, { userId: i.id }),
            (0, s.jsx)(ex.Ay, {
                user: i,
                guildId: d?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: I ? null : (0, s.jsx)(ej.A, { userId: i.id, isVisible: o, onOpenProfile: a }),
                pronouns: n?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(d?.id) && (0, s.jsx)(eg.A, { user: i, nickname: c }),
                trailing: (0, s.jsx)(et.A, { displayProfile: n, themeType: eT.d.POPOUT, onClose: u }),
            }),
            p === X.eA$.PENDING_INCOMING &&
                (0, s.jsx)(L.A.Overlay, {
                    children: (0, s.jsx)(ep.A, { user: i, guildId: d?.id, channelId: t, applicationId: A }),
                }),
            f.map((e) =>
                (0, s.jsx)(
                    L.A.Overlay,
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
            !h && (0, s.jsx)(ey.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(L.A.Overlay, { children: (0, s.jsx)(eA.A, { username: c }) }),
            h && (0, s.jsx)(eu.A, { isPremiumUser: x, onInteraction: u }),
            i.isProvisional
                ? (0, s.jsx)(L.A.Overlay, {
                      className: ev.Nr,
                      children: (0, s.jsx)(eI.A, {
                          heading: Q.intl.string(Q.t.Iyka0U),
                          headingIcon: es.E,
                          headingColor: "text-strong",
                          children: (0, s.jsx)(ed.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eO.A, { userId: i.id, userBio: n?.bio, hidePersonalInformation: I, onClose: u }),
            P && (0, s.jsx)(eP.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: a }),
            (0, s.jsx)(eh.A, { user: i, currentUser: l, guildId: d?.id, onOpenUserProfileModal: a, onClose: u }),
            null != d && (0, s.jsx)(em.A, { userId: i.id, guild: d }),
        ],
    });
}
var eU = l(848674),
    eE = l(518477),
    ek = l(207634);
function eN(e) {
    let {
            user: i,
            currentUser: l,
            guildId: V,
            channelId: z,
            messageId: q,
            roleId: B,
            openedAt: H,
            closePopout: W,
            setPopoutRef: D,
            disableUserProfileLink: K = __OVERLAY__,
            newAnalyticsLocations: Y = [],
            appContext: $,
            disableAutoFocus: J = !1,
            onClickContainer: el,
        } = e,
        { analyticsLocations: es } = (0, f.Ay)([...Y, A.A.USER_PROFILE_POPOUT]),
        en = (0, y.aL)(),
        ed = (0, U.pb)({ layout: "POPOUT", userId: i.id, guildId: V, channelId: z, messageId: q, roleId: B }),
        er = (0, r.bG)([v.A], () => (null != V ? v.A.getGuild(V) : null)),
        eo = n.useMemo(() => (null != V ? { [V]: [i.id] } : {}), [V, i.id]);
    (0, p.Eq)(eo, "UserProfilePopout");
    let ea = n.useRef(null),
        et = (0, N.Ay)(i.id, V);
    (0, T.A)(es, et, eE.R7.POPOUT);
    let { isHoveringOrFocusing: eu, isHovering: ec } = (0, g.A)(ea),
        ep = (0, _.fC)(),
        eA = (0, P.A)(et?.profileFrame?.skuId, "UserProfilePopout"),
        ef = (0, h.A)(et?.profileFrame?.skuId);
    (0, x.A)({ skuId: et?.profileFrame?.skuId, openedAt: H, context: ed, analyticsLocations: es });
    let eI = (0, o.z)({ opacity: +(null != ep.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        D?.(ea?.current);
    }, [ea, D, eA?.skuId]);
    let eh = n.useRef(null),
        eP = i.id === l.id,
        ex = (0, k.g)("UserProfilePopout"),
        ej = n.useMemo(() => (0, m.A)(), []);
    function eO(e) {
        W?.(),
            en.dispatch(X.jej.POPOUT_CLOSE),
            (0, R.openUserProfileModal)({
                sourceAnalyticsLocations: es,
                hideRestrictedProfile: !0,
                customStatusPrompt: ej,
                ...ed,
                ...e,
                appContext: $,
            });
    }
    let eg = J ? "div" : t.l,
        em = (0, O.GV)(),
        ey = C.Ay.useName(er?.id, z, i);
    return (0, s.jsx)(f.f5, {
        value: es,
        children: (0, s.jsx)(U.of, {
            value: ed,
            openedAt: H,
            fetchStartedAt: et?.fetchStartedAt,
            fetchEndedAt: et?.fetchEndedAt,
            isLoaded: et?.isLoaded,
            children: (0, s.jsx)(_.Hl, {
                value: ep,
                children: (0, s.jsxs)(eg, {
                    ref: ea,
                    "aria-labelledby": em,
                    onClick: el,
                    children: [
                        (0, s.jsx)(u.A, {
                            children: (0, s.jsx)(c.H, { id: em, children: Q.intl.format(Q.t.KRe1Fk, { name: ey }) }),
                        }),
                        (0, s.jsx)(c.F, {
                            children: (0, s.jsxs)(L.A, {
                                user: i,
                                displayProfile: et,
                                themeType: eT.d.POPOUT,
                                className: ev.BK,
                                isPrivate: et?.private === !0,
                                children: [
                                    et?.private === !0 && (0, s.jsx)(w.A, {}),
                                    null != ep.interactionType &&
                                        (0, s.jsx)(d.animated.div, { style: eI, className: ev.tB }),
                                    (0, s.jsxs)(G.A, {
                                        children: [
                                            (0, s.jsx)(Z, {
                                                shouldShowTooltip: null === ep.interactionType,
                                                user: i,
                                                guildId: V,
                                                channelId: z,
                                                onClose: W,
                                                appContext: $,
                                            }),
                                            (0, s.jsx)(M.A, { themeType: eT.d.POPOUT, user: i }),
                                            (!eP || ex) &&
                                                (0, s.jsx)(ee.yo, {
                                                    user: i,
                                                    guildId: V,
                                                    viewProfileItem: eP
                                                        ? void 0
                                                        : K
                                                          ? null
                                                          : (0, s.jsx)(a.Dr, {
                                                                id: "view-profile",
                                                                label: Q.intl.string(Q.t["+Xp3hq"]),
                                                                action: () => {
                                                                    eO(),
                                                                        (0, E.Wn)({
                                                                            action: "PRESS_VIEW_PROFILE",
                                                                            analyticsLocations: es,
                                                                            ...ed,
                                                                        });
                                                                },
                                                            }),
                                                    appContext: $,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: ev.wx,
                                        children: [
                                            (0, s.jsx)(S.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: V,
                                                themeType: eT.d.POPOUT,
                                            }),
                                            (0, s.jsx)(F.A, { userId: i.id, className: ev.oR, onClose: W }),
                                            (0, s.jsx)(b.A, {
                                                user: i,
                                                displayProfile: et,
                                                guildId: V,
                                                channelId: z,
                                                avatarSize: ek.T[eT.d.POPOUT].avatarSize,
                                                onOpenProfile: K ? void 0 : eO,
                                            }),
                                            (0, s.jsx)(ei.A, {
                                                ref: eh,
                                                user: i,
                                                guildId: V,
                                                channelId: z,
                                                themeType: eT.d.POPOUT,
                                                onCloseProfile: W,
                                                prompt: ej,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(eC, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: et,
                                        guild: er,
                                        isHoveringOrFocusing: null == ep.interactionType && eu,
                                        onOpenProfile: K ? void 0 : eO,
                                        channelId: z,
                                        onClose: W,
                                    }),
                                    (0, s.jsx)(eU.A, {
                                        user: i,
                                        guildId: V,
                                        channelId: z,
                                        onClose: W,
                                        appContext: $,
                                        disableAutoFocus: J,
                                    }),
                                    et?.profileEffect != null &&
                                        (0, s.jsx)(I.A, { skuId: et?.profileEffect?.skuId, isHovering: ec }),
                                    null != eA && (0, s.jsx)(j.A, { frame: eA, fadeIn: ef }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
