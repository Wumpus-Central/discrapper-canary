n.d(t, { A: () => ug });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(95362),
    g = n(695366),
    m = n(140735),
    f = n(707554),
    h = n(738188),
    p = n(646514),
    x = n(231723),
    A = n(241524),
    I = n(770178),
    v = n(80682),
    j = n(793574),
    b = n(688810),
    y = n(248284),
    C = n(287809),
    E = n(620632),
    S = n(73153),
    N = n(627784),
    k = n(39418),
    T = n(652215),
    P = n(938595),
    O = n(859226),
    R = n(971217),
    _ = n(577390),
    L = n(287727),
    w = n(31956),
    M = n(744808),
    D = n(875741),
    G = n(915089),
    U = n(713517),
    F = n(645507),
    B = n(922590),
    W = n(821269),
    H = n(397562),
    V = n(433380),
    z = n(634110),
    Y = n(71393),
    K = n(994500),
    q = n(351906),
    X = n(562153),
    Z = n(474090),
    $ = n(448645),
    J = n(183555),
    Q = n(741534),
    ee = n(851767),
    et = n(527212),
    en = n(164636),
    ei = n(370480),
    el = n(773669),
    er = n(101928),
    es = n(837529),
    ea = n(346713),
    eo = n(573648),
    ed = n(429913),
    eu = n(321078),
    ec = n(403362),
    eg = n(484509),
    em = n(487409),
    ef = n(83931),
    eh = n(991988),
    ep = n(917445),
    ex = n(919395),
    eA = n(101058),
    eI = n(696451),
    ev = n(836602),
    ej = n(996988),
    eb = n(207634);
let ey = (0, d.FT)(eb.T[ej.d.MODAL_V2].avatarSize),
    eC = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eE = n(716804),
    eS = n(679492),
    eN = n(554146),
    ek = n(43105),
    eT = n(844222),
    eP = n(381791),
    eO = n(643056),
    eR = n(139523),
    e_ = n(327791),
    eL = n(70283),
    ew = n(982240);
function eM() {
    return (0, a.bG)([C.default, ew.Ay], () => {
        let e = C.default.getCurrentUser()?.id;
        return null != e && (ew.Ay.getBadgeById(eL.$.PREMIUM_TENURE, e)?.auto_unhidden ?? !1);
    });
}
var eD = n(262),
    eG = n(263775),
    eU = n(49999),
    eF = n(792996);
function eB(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        d = (0, eO.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, e_.A)(),
        c =
            ((t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [ew.Ay],
                () => (null != t && ew.Ay.hasCatalogFor(t) ? ew.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, et.Ay)(t)),
            (s = (0, eD.A)(r)),
            n ?? s.length > 0),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id),
        m = (0, eR.V)({ currentUserId: g, enabled: d }),
        f = eM(),
        { reducedMotion: h } = l.useContext(eT.C),
        p = (0, y.A)((e) => e.isOpen),
        x = c && d && !m.isPending && !f,
        [A, I] = (0, eG.kn)(x && !p ? [eN.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []),
        v = A === eN.M.BADGE_CUSTOMIZATION_WEB_COACHMARK;
    return (l.useLayoutEffect(() => {
        if (v)
            return () => {
                y.A.getState().isOpen && I(eU.i.TAKE_ACTION);
            };
    }, [v, I]),
    v)
        ? (0, i.jsx)(ek.A, {
              targetElementRef: o,
              position: "right",
              gradientColor: "blue",
              graphic: { type: "rive", rive: eP.U, props: { dataBinding: { on: !0, reducedMotion: h.enabled } } },
              title: eF.intl.string(eF.t["9JoKQb"]),
              body: eF.intl.string(u ? eF.t.p82vky : eF.t.IDh31t),
              onRequestClose: () => I(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t["4P5I8V"]),
                      onClick: function () {
                          y.A.setState({ isOpen: !0 });
                      },
                  },
              ],
          })
        : null;
}
var eW = n(975571);
function eH(e) {
    let { targetElementRef: t } = e,
        n = eM(),
        [l, r] = (0, eG.kn)(n ? [eN.M.NITRO_BADGE_UNHIDDEN_NOTICE] : [], { bypassAutoDismiss: !0 });
    return l !== eN.M.NITRO_BADGE_UNHIDDEN_NOTICE
        ? null
        : (0, i.jsx)(ek.A, {
              targetElementRef: t,
              position: "right",
              title: eF.intl.string(eF.t.ZRLAIy),
              body: eF.intl.string(eF.t.sEGQaJ),
              onRequestClose: () => r(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t.hvVgAZ),
                      onClick: function () {
                          (r(eU.i.TAKE_ACTION),
                              window.open(
                                  eW.A.getArticleURL(T.MVz.PROFILE_BADGES_MANAGEMENT),
                                  "_blank",
                                  "noopener,noreferrer",
                              ));
                      },
                  },
              ],
          });
}
var eV = n(718019),
    ez = n(56810),
    eY = n(915614),
    eK = n(689233),
    eq = n(834730);
function eX(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eq.E, { variant: "body-sm/normal", children: t });
}
var eZ = n(361311),
    e$ = n(477534),
    eJ = n(439053),
    eQ = n(743987),
    e0 = n(312381),
    e1 = n(501193),
    e6 = n(383448),
    e2 = n(946356),
    e4 = n(804329),
    e3 = n(503026),
    e8 = n(305385),
    e9 = n(109112),
    e5 = n(939249),
    e7 = n(730134),
    te = n(169869),
    tt = n(837057),
    tn = n(310419),
    ti = n(619019),
    tl = n(967198),
    tr = n(488995),
    ts = n(576849);
function ta(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, te.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ts.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e7.A, { user: new ti.A(t.application.bot), size: d._3.SIZE_16 })
                        : (0, i.jsx)(e9.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ts.Hd,
                children: [
                    (0, i.jsxs)(e5.D, {
                        className: ts.OB,
                        onClick: function () {
                            (l?.(),
                                (0, tt.transitionToGlobalDiscovery)({
                                    tab: tr.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: tn.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eq.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: ts.nk,
                                children: eF.intl.format(eF.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: ts.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function to(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, J.NJ)(),
        o = (0, a.bG)([el.default], () => el.default.locale),
        d = (0, a.bG)([tl.A], () => tl.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(ts.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: ts.FI,
                          children: (0, i.jsx)(ta, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), l());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${t}-${e.application.id}`,
                  ),
              ),
          });
}
var td = n(224316),
    tu = n(136969),
    tc = n(738676),
    tg = n(708645),
    tm = n(722868),
    tf = n(982985),
    th = n(666297),
    tp = n(34188),
    tx = n(969935),
    tA = n(993401);
function tI(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, b.Ay)(),
        r = l.useCallback(() => {
            (0, tx.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tA.q3, {
        action: "VISIT_SHOP",
        icon: tp.ShopIcon,
        tooltipText: eF.intl.string(eF.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tv = n(508882),
    tj = n(102951);
function tb(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            originGuildId: r,
            channelId: s,
            displayProfile: a,
            relationshipType: o,
            onClose: d,
        } = e,
        { newestAnalyticsLocation: u } = (0, b.Ay)(),
        c = (0, tm.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: d }),
        {
            gameFriends: g,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: f,
        } = (0, tj.J)({ userId: t.id }),
        h = g.length > 0 || m || f;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tf.e, { userId: t.id, variant: "primary", disabled: !0 }),
                    (0, i.jsx)(tI, {}),
                    (0, i.jsx)(th.Zt, { user: t, guildId: l, viewProfileItem: c }),
                ],
            })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tf.e, { userId: t.id, onClose: tu.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tc.kc, { user: t, guildId: l }),
                      (0, i.jsx)(th.Zt, { user: t, guildId: l, viewProfileItem: c }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tf.e, { userId: t.id, onClose: tu.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tc.kc, { user: t, guildId: l }),
                        (0, i.jsx)(th.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tf.e, { userId: t.id, onClose: tu.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tv.Ef, { user: t, relationshipType: o, analyticsLocation: u }),
                          (0, i.jsx)(tc.kc, { user: t, guildId: l }),
                          (0, i.jsx)(th.Zt, { user: t, guildId: l, viewProfileItem: c }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tf.e, { userId: t.id, onClose: tu.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tv.ES, {
                                user: t,
                                analyticsLocation: u,
                                gameFriends: g,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tc.kc, { user: t, guildId: l }),
                            (0, i.jsx)(th.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tv.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tf.l, { userId: t.id, onClose: tu.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tc.kc, { user: t, guildId: l }),
                            (0, i.jsx)(th.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    });
}
function ty(e) {
    return e.user.id === e.currentUser.id || e.relationshipType === T.eA$.BLOCKED
        ? (0, i.jsx)(tb, { ...e })
        : (0, i.jsx)(tg.ZQ, {
              user: e.user,
              guildId: e.guildId,
              location: "FullProfileShopThisLook",
              children: (0, i.jsx)(tc.vy, { user: e.user, guildId: e.guildId, children: (0, i.jsx)(tb, { ...e }) }),
          });
}
var tC = n(463156),
    tE = n(866665),
    tS = n(28863),
    tN = n(509434),
    tk = n(307301),
    tT = n(149468),
    tP = n(643068),
    tO = n(522978),
    tR = n(129230),
    t_ = n(486020),
    tL = n(889558),
    tw = n(783419);
let tM = "User Profile Modal V2";
function tD(e) {
    let t = eo.A.get(e);
    ((0, tO.A)({ platformType: t.type, location: tM }),
        tR.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: tM,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function tG() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: tD, stackingBehavior: "stack" });
}
function tU(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, ei.An)(r[tw.pK.CREATED_AT], n),
        a = eo.A.get((0, tP.ML)(t.type));
    return (0, i.jsx)(tB, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tE.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eq.E, { variant: "body-sm/normal", className: ts.GW, children: t.name }),
                  })
                : (0, i.jsx)(tS.Anchor, {
                      href: e,
                      className: ts.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`
                              : `${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tT.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, tL.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ts.vi,
                          children: [
                              (0, i.jsx)(tE.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      className: ts.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tN.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: ts.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, te.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, te.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, te.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, te.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, te.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, te.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, te.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function tF(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = t_.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(tB, {
        renderAccountName: function () {
            return (0, i.jsx)(tE.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eq.E, {
                    variant: "body-sm/normal",
                    className: ts.GW,
                    children: n.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: l.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function tB(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: ts.FI,
        children: [
            (0, i.jsx)(tE.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: ts.k_,
                    children: (0, i.jsx)("img", {
                        alt: eF.intl.formatToPlainString(eF.t.rtm15P, { name: l }),
                        className: s()(ts.tV, o ? ts.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ts.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eq.E, {
                                    variant: "body-xs/normal",
                                    children: eF.intl.format(eF.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ts.yu, children: n() }),
                ],
            }),
        ],
    });
}
function tW(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        d = (0, a.bG)([el.default], () => el.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let u = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(ts.kL, o),
        children: [
            u &&
                (0, i.jsxs)("ul", {
                    className: ts.V,
                    children: [
                        t.map((e) => (0, i.jsx)(tU, { account: e, userId: l, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(tF, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e5.D, {
                    className: ts.qG,
                    onClick: tG,
                    children: [
                        (0, i.jsx)(tk.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eF.intl.string(eF.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var tH = n(193885),
    tV = n(408278),
    tz = n(23722);
let tY = { id: "default" },
    tK = l.createContext(null),
    tq = l.createContext(null);
function tX(e) {
    let { children: t } = e,
        [n, r] = l.useState(tY),
        [s, o] = l.useState(null),
        d = (0, tz.A)((e) => {
            r(e);
        }),
        u = l.useCallback(() => {
            r(tY);
        }, []),
        c = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? tY : n,
        m = !c && s?.id === "premiumTryItOut",
        f = l.useCallback(() => {
            o(g);
        }, [g]),
        h = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: f, navigate: d, goBack: u }),
            [g, s, f, d, u],
        );
    return (0, i.jsx)(tq.Provider, { value: m, children: (0, i.jsx)(tK.Provider, { value: h, children: t }) });
}
function tZ() {
    let e = l.useContext(tq);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function t$() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(tK);
        if (null == e)
            throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
        return e;
    })();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    };
}
var tJ = n(194261),
    tQ = n(789645),
    t0 = n(534514),
    t1 = n(403581),
    t6 = n(805251),
    t2 = n(821609),
    t4 = n(39623),
    t3 = n(890377),
    t8 = n(517461),
    t9 = n(609425),
    t5 = n(145359),
    t7 = n(804661),
    ne = n(465794),
    nt = n(468450),
    nn = n(462887),
    ni = n(765178),
    nl = n(736653),
    nr = n(461797),
    ns = n(469054),
    na = n(601298),
    no = n(207803);
function nd() {
    let e = (0, nl.Ay)(),
        t = (0, nn.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nr.Wt)(e);
                (0, no.w5)({
                    banner: (0, na.X)({
                        assetOrigin: ns.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: t ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                    lastPreset: e,
                });
            },
            [t],
        );
    return (
        l.useEffect(() => {
            ev.A.hasTryItOutChanges() || n((0, nr.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = ev.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nr.B$)(e),
                i = (0, nr.Wt)(t);
            (tR.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                ni.O.announce(eF.intl.formatToPlainString(eF.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nu = n(487233),
    nc = n(999618),
    ng = n(317097),
    nm = n(602853),
    nf = n(265872),
    nh = n(508274),
    np = n(654107),
    nx = n(84540),
    nA = n(930349);
function nI(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nm.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, np.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, a.cf)([ev.A, ee.A], () => ({
            pendingAccentColor: ev.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = d ?? u ?? (0, ng.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, nx.p)({ accentColor: e }), []);
    return (0, i.jsx)(nf.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nh.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nA.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eF.intl.string(eF.t["/X3fkf"]),
                editButtonA11yLabel: eF.intl.string(eF.t.kRMJ1v),
                currentValueA11yLabel: (0, ng.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, ng.Hl)(c) } }),
            }),
    });
}
var nv = n(841183),
    nj = n(450373),
    nb = n(317139);
function ny(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nb.o, style: { backgroundColor: t } });
}
function nC(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nb._ });
}
function nE(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nm.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, ng.LX)(s),
        { hex: o } = (0, nj.A)(a),
        d = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != d ? (0, i.jsx)(nC, { src: d, imageDescription: r }) : (0, i.jsx)(ny, { backgroundColor: o });
}
function nS(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eF.intl.string(eF.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nA.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eF.intl.string(eF.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nE, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nN = n(569059);
function nk(e) {
    let { userId: t, guildId: n, disabled: r, errorMessageId: s } = e,
        a = l.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            currentValueA11yLabel: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, t) {
            let n = (0, et.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, en.cf)(
                    [ev.A, C.default, ee.A],
                    () => ({
                        pendingBanner: ev.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: C.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? ee.A.getGuildMemberProfile(e, t)?.banner : ee.A.getUserProfile(e)?.banner,
                    }),
                    [t, e],
                ),
                s = null != t,
                a = s && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === i;
            return {
                displayProfile: n,
                pendingBanner: i,
                bannerChange: o && s && !a ? void 0 : i,
                currentValueA11yLabel: (0, nv.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        f = (0, ex.Ac)(d, g)
            ? {
                  onClick: () => (0, nt.rM)(null, g, (e) => (0, nx.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eF.intl.string(m ? eF.t.jHlJNS : eF.t.tT9n7D),
              }
            : void 0,
        h = (0, nN.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nS, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: u,
        currentValueA11yLabel: c,
        variant: "square",
        affordance: f,
        onClick: h,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var nT = n(259065),
    nP = n(922301),
    nO = n(16371),
    nR = n(523312);
let n_ = "heading-xl/semibold";
function nL(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nR.MC, { [nR.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eq.E, {
                      variant: n_,
                      children: (0, i.jsx)(nO.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nP.G.ANIMATED : nP.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eq.E, { variant: n_, className: nR.kr, children: t }),
    });
}
function nw(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eF.intl.string(eF.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nA.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eF.intl.string(eF.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nL, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function nM(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != n,
        c = (0, a.bG)([eI.Ay], () => (null != n ? (eI.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: h,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ex.B0)(t, n ?? void 0),
        A = u ? p : h,
        I = void 0 !== x,
        v = null === x,
        j = u && null != h,
        y = (0, ex.lw)({ pendingValue: x, userValue: h, guildValue: p, guildId: n ?? void 0 }),
        E = (0, ex.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != y && S
                ? {
                      onClick: () => (0, nx.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(j ? eF.t.en3ogK : eF.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nT.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [d, n, o]);
    return (0, i.jsx)(nw, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nv.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var nD = n(450232),
    nG = n(89851);
function nU(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: nG.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nG.Pf, { [nG.r9]: r }),
                children: [
                    (0, i.jsx)(t0.D, {
                        className: nG.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(nD.A, { className: nG.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: nG.ot, children: o }),
                    null != n && (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
function nF(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nG.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var nB = n(897661),
    nW = n(332560),
    nH = n(659373),
    nV = n(192308),
    nz = n(506988),
    nY = n(211824);
function nK(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, nW.UF)(nz.uF.DISPLAY_NAME_STYLES_SETTINGS, nW.rl.NON_NITRO_CARD, !0);
    let a = (0, nB.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: d } = (0, nH.K)(t),
        u = o ? nY.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, nV.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(249169),
                            n.e(578667),
                            n.e(71866),
                            n.e(587882),
                            n.e(891473),
                            n.e(411938),
                            n.e(198496),
                            n.e(77413),
                            n.e(521332),
                            n.e(267526),
                            n.e(669174),
                            n.e(967062),
                            n.e(408734),
                            n.e(306968),
                            n.e(635014),
                            n.e(653383),
                            n.e(658961),
                            n.e(9796),
                            n.e(952068),
                            n.e(768289),
                            n.e(772565),
                            n.e(169191),
                            n.e(79492),
                            n.e(533781),
                            n.e(328276),
                            n.e(592e3),
                            n.e(524434),
                            n.e(653294),
                            n.e(672402),
                            n.e(226229),
                            n.e(118994),
                            n.e(516497),
                            n.e(24774),
                            n.e(326794),
                            n.e(670870),
                            n.e(684231),
                            n.e(570690),
                            n.e(886631),
                            n.e(435860),
                            n.e(426782),
                            n.e(406322),
                            n.e(942571),
                            n.e(464759),
                            n.e(763343),
                            n.e(775417),
                            n.e(194704),
                            n.e(3942),
                            n.e(274461),
                            n.e(270520),
                            n.e(384054),
                            n.e(731841),
                            n.e(544242),
                            n.e(616090),
                            n.e(796662),
                            n.e(801781),
                            n.e(816348),
                            n.e(109383),
                            n.e(818291),
                            n.e(243794),
                            n.e(301815),
                            n.e(713398),
                            n.e(10985),
                            n.e(171206),
                            n.e(828178),
                            n.e(45036),
                            n.e(974119),
                            n.e(206988),
                            n.e(434683),
                            n.e(920955),
                            n.e(505928),
                            n.e(752657),
                            n.e(747973),
                            n.e(314001),
                            n.e(885251),
                            n.e(857871),
                            n.e(529366),
                            n.e(390430),
                            n.e(990185),
                            n.e(752924),
                            n.e(849162),
                            n.e(660201),
                            n.e(770925),
                            n.e(179301),
                            n.e(918347),
                            n.e(102247),
                            n.e(689521),
                            n.e(237403),
                            n.e(10886),
                            n.e(84993),
                            n.e(592268),
                            n.e(374962),
                            n.e(553627),
                            n.e(887141),
                            n.e(736919),
                            n.e(631323),
                            n.e(464452),
                            n.e(243852),
                            n.e(714144),
                            n.e(458855),
                            n.e(305161),
                            n.e(141648),
                            n.e(17256),
                            n.e(377016),
                            n.e(60268),
                            n.e(598761),
                            n.e(60955),
                            n.e(887093),
                            n.e(393336),
                            n.e(126437),
                            n.e(481647),
                            n.e(749248),
                            n.e(704434),
                            n.e(900361),
                            n.e(21921),
                            n.e(811310),
                            n.e(676418),
                            n.e(166495),
                            n.e(362274),
                            n.e(49782),
                            n.e(570849),
                            n.e(45072),
                            n.e(942724),
                            n.e(139970),
                            n.e(173764),
                            n.e(940258),
                            n.e(161275),
                            n.e(830221),
                            n.e(761253),
                            n.e(357688),
                            n.e(308555),
                            n.e(857467),
                            n.e(508371),
                            n.e(858164),
                            n.e(885434),
                            n.e(586127),
                            n.e(977547),
                            n.e(41250),
                            n.e(179049),
                            n.e(132737),
                            n.e(344502),
                            n.e(146070),
                            n.e(836863),
                            n.e(854622),
                            n.e(834968),
                            n.e(590365),
                            n.e(989088),
                            n.e(37977),
                            n.e(136149),
                            n.e(470068),
                            n.e(817989),
                            n.e(147626),
                            n.e(647177),
                            n.e(613867),
                            n.e(689393),
                            n.e(727779),
                            n.e(412743),
                            n.e(717602),
                            n.e(585503),
                            n.e(891585),
                            n.e(203589),
                            n.e(382465),
                            n.e(294857),
                            n.e(15481),
                            n.e(668802),
                            n.e(631358),
                            n.e(459414),
                            n.e(335395),
                            n.e(882777),
                            n.e(945413),
                            n.e(402026),
                            n.e(163235),
                            n.e(632756),
                            n.e(564850),
                            n.e(941040),
                            n.e(124791),
                            n.e(35771),
                            n.e(648344),
                            n.e(170104),
                            n.e(491793),
                            n.e(102698),
                            n.e(902564),
                            n.e(731751),
                            n.e(30441),
                            n.e(704727),
                            n.e(374916),
                            n.e(214285),
                            n.e(248330),
                            n.e(373004),
                            n.e(803332),
                            n.e(938149),
                            n.e(408362),
                            n.e(741678),
                            n.e(852617),
                            n.e(177102),
                            n.e(256769),
                            n.e(125964),
                            n.e(415266),
                            n.e(737021),
                            n.e(775951),
                            n.e(254506),
                            n.e(874342),
                            n.e(911667),
                            n.e(533015),
                            n.e(976516),
                            n.e(400501),
                            n.e(985794),
                            n.e(695358),
                            n.e(767837),
                            n.e(473384),
                            n.e(432209),
                            n.e(229657),
                            n.e(996868),
                            n.e(368062),
                            n.e(859991),
                            n.e(667092),
                            n.e(709371),
                            n.e(330724),
                            n.e(599719),
                            n.e(987478),
                            n.e(858337),
                            n.e(97210),
                            n.e(260218),
                            n.e(649520),
                            n.e(493014),
                            n.e(935948),
                            n.e(562168),
                            n.e(215920),
                            n.e(24922),
                            n.e(401518),
                            n.e(698547),
                            n.e(355949),
                            n.e(24889),
                            n.e(522261),
                            n.e(213924),
                            n.e(932606),
                            n.e(593020),
                            n.e(338601),
                            n.e(334119),
                            n.e(702813),
                            n.e(39038),
                            n.e(678050),
                            n.e(901922),
                            n.e(557940),
                            n.e(9205),
                            n.e(720590),
                            n.e(68532),
                            n.e(428367),
                            n.e(144989),
                            n.e(179745),
                            n.e(529570),
                            n.e(93286),
                            n.e(763096),
                            n.e(431714),
                            n.e(36947),
                            n.e(225612),
                            n.e(108634),
                            n.e(836150),
                            n.e(365074),
                            n.e(472789),
                            n.e(137937),
                            n.e(100126),
                            n.e(497746),
                            n.e(803191),
                            n.e(111346),
                            n.e(940248),
                            n.e(271217),
                            n.e(396325),
                            n.e(141049),
                            n.e(288688),
                            n.e(238742),
                            n.e(864137),
                            n.e(512162),
                            n.e(866008),
                            n.e(743487),
                            n.e(531158),
                            n.e(482511),
                            n.e(504199),
                            n.e(150200),
                            n.e(285350),
                            n.e(829961),
                            n.e(769369),
                            n.e(311471),
                            n.e(122266),
                            n.e(70008),
                            n.e(655602),
                            n.e(486155),
                            n.e(244645),
                            n.e(561622),
                            n.e(44761),
                            n.e(398254),
                            n.e(207846),
                            n.e(143302),
                            n.e(561454),
                            n.e(886492),
                            n.e(172158),
                            n.e(574252),
                            n.e(298748),
                            n.e(893513),
                        ]).then(n.bind(n, 596016));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsx)(nw, {
        affordance: o ? { onClick: d, type: "remove", accessibleLabel: eF.intl.string(eF.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nv.I9)(u),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: u,
        disabled: r,
    });
}
var nq = n(887988),
    nX = n(366010),
    nZ = n(674658),
    n$ = n(617061),
    nJ = n(203632),
    nQ = n(536572);
let n0 = new Set(),
    n1 = 0;
var n6 = n(993408),
    n2 = n(841702),
    n4 = n(515718),
    n3 = n(94039);
function n8(e) {
    "" !== e.thumbnailPreviewSrc && (0, n4.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var n9 = n(599752),
    n5 = n(249360);
let n7 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    ie =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function it(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        d = (0, nl.Ay)(),
        u = (0, nX.M)(d) ? n7 : ie,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n2.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n6.wo)(r, i), [r, i]),
                a = (0, n3.A)({ enabled: t, isInteracting: n, items: s, preload: n8 });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n1 += 1), n0.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: n9.ti,
            children: [
                (0, i.jsx)("img", { src: u, alt: "", className: n9.QQ }),
                m?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(n9.yY, { [n5.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(R.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nJ.HL.FromStart,
                            isHovering: n,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function ii(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != n,
        c = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        g = (0, ex.N2)({ user: t }),
        m = (0, ex.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, ex.nZ)(n ?? void 0),
        h = void 0 !== f,
        p = null === f || (!h && null == m),
        x = u && null != g,
        A = (0, ex.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: n ?? void 0 }),
        { product: I } = (0, nZ.q)(A?.skuId),
        v = h ? null != f : null != m,
        j =
            null != A && v
                ? {
                      onClick: () => (0, nx.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(x ? eF.t["SQy/Po"] : eF.t.uMuafO),
                  }
                : void 0,
        y = l.useCallback(() => {
            (0, n$.W)({ analyticsLocations: d, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [d, c]);
    return (0, i.jsx)(nA.A, {
        buttonRef: o,
        affordance: p && !x ? "add" : j,
        variant: s,
        onClick: y,
        fieldA11yLabel: eF.intl.string(eF.t.wR5wOo),
        editButtonA11yLabel: eF.intl.string(eF.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t["1M4m8w"] : eF.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, nQ.VG)(I), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(it, { effect: A, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var il = n(163697),
    ir = n(515727),
    is = n(746002);
function ia(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, is.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: is.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n4.NN)(n).catch(() => {});
        });
}
var io = n(715196);
function id(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iu(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        d = (0, nl.Ay)(),
        u = (0, nX.M)(d) ? n7 : ie,
        c = (0, L.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n2.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n6.MG)(r, i), [r, i]);
            return (0, n3.A)({ enabled: t, isInteracting: n, items: s, preload: ia });
        })({ enabled: n && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: h, profileFrameClassName: p } =
            null != f ? (0, il.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != f &&
                (0, i.jsx)("div", {
                    className: s()(io.hm, p, { [n5.O]: m }),
                    style: h,
                    "aria-hidden": m,
                    children: (0, i.jsx)(M.A, { frame: f, filterLayer: id, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(io.ti, { [io.yT]: null == f }),
                children: (0, i.jsx)("img", { src: u, alt: "", className: io.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ic(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        d = null != n,
        u = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        c = (0, ex.Xf)({ user: t }),
        g = (0, ex.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: m } = (0, ex.Tu)(n ?? void 0),
        f = void 0 !== m,
        h = null === m || (!f && null == g),
        p = d && null != c,
        x = (0, ex.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, nZ.q)(x?.skuId),
        I = f ? null != m : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, nx.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(p ? eF.t.j6hZyM : eF.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, ir.w)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, u]);
    return (0, i.jsx)(nA.A, {
        buttonRef: s,
        affordance: h && !p ? "add" : v,
        variant: "square",
        onClick: j,
        fieldA11yLabel: eF.intl.string(eF.t.GWrZOd),
        editButtonA11yLabel: eF.intl.string(eF.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t.yFeGB5 : eF.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nQ.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iu, {
                profileFramePreview: x,
                isEmpty: h,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ig = n(684732),
    im = n(498596),
    ih = n(871524);
function ip(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, ng.Hl)(t)}, ${(0, ng.Hl)(n)})`;
    return (0, i.jsx)("div", { className: ih.D7, style: { background: r }, children: l });
}
function ix(e) {
    let { color: t } = e,
        n = (0, ng.Hl)(t),
        l = (0, ng.bJ)(t, 0xffffff) < im.Tr.NonText;
    return (0, i.jsx)("div", {
        className: ih.OS,
        children: (0, i.jsx)("div", { className: s()(ih.Hy, { [ih.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iA(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e5.D, {
        ...a,
        innerRef: s ?? o,
        className: ih.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(ix, { color: t }),
    });
}
function iI(e) {
    let {
        color: t,
        ariaLabel: n,
        ariaDescribedBy: l,
        suggestedColors: r,
        disabled: s,
        isOpen: a,
        onRequestOpen: o,
        onRequestClose: d,
        onSelect: u,
        buttonRef: c,
    } = e;
    return (0, i.jsx)(nf.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: d,
        renderPopout: (e) => (0, i.jsx)(nh.VN, { ...e, value: t, onChange: u, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iA, {
                color: t,
                onClick: r,
                disabled: s,
                buttonRef: c,
                "aria-label": n,
                "aria-describedby": l,
                ...a,
            });
        },
    });
}
function iv(e) {
    let {
            fieldA11yLabel: t,
            primaryColor: n,
            secondaryColor: r,
            onSelectPrimaryColor: s,
            onSelectSecondaryColor: a,
            suggestedColors: o,
            disabled: d = !1,
            deleteButton: u,
            variant: c = "square",
            initialOpenPopout: g,
        } = e,
        [f, h] = l.useState(null),
        p = l.useRef(null),
        x = l.useRef(null),
        A = (0, ng.Hl)(n),
        I = (0, ng.Hl)(r),
        v = l.useId(),
        j = l.useId();
    l.useEffect(() => {
        if (null == g) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === g ? p : x;
            (e.current?.focus(), h(g));
        });
        return () => cancelAnimationFrame(e);
    }, [g]);
    let b =
        null != u
            ? {
                  ...u,
                  onClick: () => {
                      (u.onClick(), p.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsxs)(nA.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: d,
        deleteButton: b,
        children: [
            (0, i.jsx)(m.A, { id: v, children: eF.intl.formatToPlainString(eF.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(m.A, { id: j, children: eF.intl.formatToPlainString(eF.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(ip, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iI, {
                        color: n,
                        ariaLabel: eF.intl.string(eF.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: d,
                        isOpen: "theme-primary" === f,
                        onRequestOpen: () => h("theme-primary"),
                        onRequestClose: () => h(null),
                        buttonRef: p,
                    }),
                    (0, i.jsx)(iI, {
                        color: r,
                        ariaLabel: eF.intl.string(eF.t.stG76C),
                        ariaDescribedBy: j,
                        suggestedColors: o,
                        onSelect: a,
                        disabled: d,
                        isOpen: "theme-secondary" === f,
                        onRequestOpen: () => h("theme-secondary"),
                        onRequestClose: () => h(null),
                        buttonRef: x,
                    }),
                ],
            }),
        ],
    });
}
function ij(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, et.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, a.cf)([ev.A, ee.A], () => {
            let e = ev.A.getPendingChanges(n ?? void 0),
                i = ee.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (ee.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, eA.V7)({ userId: t.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, er.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        h = (0, nm.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, np.rh)(x, h, !1),
        I = l.useCallback(
            (e) => {
                (0, nx.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ig.l)(d, o)
                ? {
                      onClick: () => (0, nx.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eF.intl.string(eF.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, i.jsx)(iv, {
              fieldA11yLabel: eF.intl.string(eF.t.DMeO2X),
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && I([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && I([m, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: v,
          });
}
var ib = n(629985);
function iy(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(f.F, { children: (0, i.jsx)("div", { className: s()(ib.k, { [ib.V]: n }), children: t }) });
}
var iC = n(516521),
    iE = n(424290);
function iS(e) {
    let { children: t } = e;
    return (0, i.jsx)(iC.zC, { className: iE.X, children: (0, i.jsx)("div", { className: iE.Q, children: t }) });
}
var iN = n(77528),
    ik = n(811611),
    iT = n(976860),
    iP = n(38145);
function iO() {
    return l.useCallback(() => {
        ((0, iT.pX)(T.BVt.NITRO_HOME), (0, iP.M)());
    }, []);
}
var iR = n(423814),
    i_ = n(511484),
    iL = n(682901);
function iw(e) {
    let t = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iR.O)();
    return t
        ? eF.intl.string(eF.t.AfRWI8)
        : (0, i_.U9)(n, iL.pe.TIER_2) && n?.discount.amount != null
          ? eF.intl.formatToPlainString(eF.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iM = n(155053);
function iD() {
    let e = (0, iN.V)();
    return e?.subscriptionTrial?.skuId === iL.pe.TIER_2 ? e : null;
}
function iG() {
    let e = iw(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(ne.A, { subscriptionTier: iL.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iU(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iO(),
        a = (0, $.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, ik.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iM.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iM.qf,
                children: [
                    (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: eF.intl.string(eF.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(t6.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eq.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eF.intl.format(eF.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(ne.A, {
                subscriptionTier: iL.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-muted", className: iM.u8, children: o }),
        ],
    });
}
function iF() {
    let e = iD();
    return null == e ? (0, i.jsx)(iG, {}) : (0, i.jsx)(iU, { trialOffer: e });
}
var iB = n(55619),
    iW = n(848717);
function iH() {
    return (0, i.jsxs)("div", {
        className: iW.k,
        children: [
            (0, i.jsx)(eq.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eF.intl.string(eF.t.JFY17v),
            }),
            (0, i.jsx)(t2.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eF.intl.string(eF.t.R9GHya),
                onClick: function () {
                    return iB.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iV = n(342866),
    iz = n(968475);
function iY(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([ev.A], () => ({
            pendingAvatar: ev.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ev.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iV.A, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nv.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iz.$T : void 0,
    });
}
function iK(e) {
    let { userId: t, ...n } = e,
        l = (0, et.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [ev.A, ee.A],
            () => ({
                pendingBanner: ev.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ev.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: ee.A.getUserProfile(t)?.banner,
            }),
            [t],
        ),
        d = void 0 !== s ? s : r,
        u = null != d ? d.description : void 0,
        c =
            null != u
                ? (function (e) {
                      if (e.length <= 25) return e;
                      let t = e.lastIndexOf(" ", 25),
                          n = t > 0 ? e.slice(0, t) : e.slice(0, 25);
                      return eF.intl.formatToPlainString(eF.t.OIhEjF, { truncatedText: n });
                  })(u)
                : (0, nv.ID)(d, o);
    return (0, i.jsx)(nS, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: u,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: d,
    });
}
function iq(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([ev.A], () => ({
            pendingDisplayNameStyles: ev.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ev.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ev.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([C.default], () => ({ globalName: C.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : l,
        u = (0, ex.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nw, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        currentValueA11yLabel: (0, nv.I9)(d),
        shouldAlwaysAnimate: null == r,
    });
}
function iX(e) {
    let t = (0, et.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([ev.A], () => ({
            tryItOutThemeColors: ev.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ev.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ev.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eA.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, er.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function iZ(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = iX(t),
        d = (0, nm.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, np.rh)(u, d, !1),
        g = l.useCallback((e) => {
            (0, no.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iv, {
              fieldA11yLabel: eF.intl.string(eF.t["/WsW/1"]),
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: s,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, s]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: n,
          });
}
function i$(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = iX(t),
        o = l.useId(),
        d = l.useId();
    if (null == s || null == a) return null;
    let u = (0, ng.Hl)(s),
        c = (0, ng.Hl)(a);
    return (0, i.jsxs)(nA.Y, {
        fieldA11yLabel: eF.intl.string(eF.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(m.A, { id: o, children: eF.intl.formatToPlainString(eF.t.v4X2kc, { colorHex: u }) }),
            (0, i.jsx)(m.A, { id: d, children: eF.intl.formatToPlainString(eF.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(ip, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iA, {
                        color: s,
                        onClick: n,
                        "aria-label": eF.intl.string(eF.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iA, {
                        color: a,
                        onClick: r,
                        "aria-label": eF.intl.string(eF.t.stG76C),
                        "aria-describedby": d,
                    }),
                ],
            }),
        ],
    });
}
var iJ = n(847081);
function iQ(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: d, navigate: u } = t$(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, b.Ay)();
            return l.useCallback(() => {
                (0, nT.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nN._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, nN.P)({ isPremiumTryItOut: !0, returnRef: a }),
        f = "edit" === n;
    return (
        l.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, i.jsxs)("div", {
            className: iJ.T,
            children: [
                (0, i.jsx)(nU, {
                    heading: eF.intl.string(eF.t.NEzEws),
                    children: (0, i.jsx)(iq, {
                        user: t,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nU, {
                    heading: eF.intl.string(eF.t.DMeO2X),
                    children: f
                        ? (0, i.jsx)(iZ, {
                              user: t,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, i.jsx)(i$, {
                              user: t,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nU, {
                    heading: eF.intl.string(eF.t.Vgdusv),
                    children: (0, i.jsx)(iK, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nU, {
                    heading: eF.intl.string(eF.t.Dt3ZUr),
                    children: (0, i.jsx)(iY, {
                        user: t,
                        buttonRef: s,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var i0 = n(847374),
    i1 = n(111159),
    i6 = n(682163),
    i2 = n(711014),
    i4 = n(941030),
    i3 = n(561392),
    i8 = n(286615),
    i9 = n(15626),
    i5 = n(715022),
    i7 = n(44482),
    le = n(470791);
function lt(e) {
    let {
            options: t,
            value: n,
            onSelectionChange: r,
            label: a,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: h,
        } = e,
        {
            isOpen: p,
            setIsOpen: x,
            refs: A,
            floatingStyles: I,
            getReferenceProps: v,
            getFloatingProps: j,
            transitionStyles: b,
        } = (function () {
            let { reducedMotion: e } = l.useContext(eT.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, i3.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, i8.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: t,
                setIsOpen: n,
                refs: i,
                floatingStyles: r,
                getReferenceProps: s,
                getFloatingProps: a,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: y } = A,
        C = l.useContext(i9._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, O] = l.useState(null),
        R = null != P ? (0, i5.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, i5.fI)(e.value, [n])), [n, t]),
        M = l.useCallback(() => {
            u || x(!p);
        }, [u, x, p]),
        D = l.useCallback(
            (e) => {
                p && 0 === e.button && e.preventDefault();
            },
            [p],
        ),
        G = l.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = l.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (p && null != P) {
                        let e = t[P];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    p && x(!1);
                }
            },
            [p, P, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (u) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: B, handleKeyDown: W } = (0, i4.l)(!0, t),
        H = l.useRef(null);
    l.useEffect(() => {
        let e = B !== H.current;
        ((H.current = B), null != B && e && (O(B), p || ((_.current = !0), x(!0))));
    }, [B, p, x]);
    let V = l.useCallback(
            (e) => {
                if (u) return;
                let n = t.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let t = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !p || e.altKey)) {
                            p || x(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + t, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let i = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && p)) {
                            if (null != P) {
                                let e = t[P];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!p) return void x(!0);
                        O((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !p)) return void x(!0);
                        if (null == P || P > n - 1) return;
                        {
                            let e = t[P];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(0), p || ((_.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(n - 1), p || ((_.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (p && null != P) {
                            let e = t[P];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((L.current = !0), x(!1));
                        break;
                    case "Escape":
                        p && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        W(e);
                }
            },
            [u, p, t, P, F, G, r, x, W],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !p || Y.current
            ? p || ((Y.current = !1), O(null), (_.current = !1))
            : ((Y.current = !0), _.current || O(t.length > 0 ? z : null), (_.current = !1), k.current?.focus());
    }, [c, p, z, t.length]);
    let K = {
        id: S,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": p ? N : void 0,
        "aria-expanded": p,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != a ? `${E} ${S}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: D,
        onKeyDown: V,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), A.setReference(e));
        },
        className: o,
        ...v(),
        children: [
            null != a && (0, i.jsx)(m.A, { tag: "label", id: E, htmlFor: S, children: a }),
            h({ buttonRef: k, selectButtonProps: K }),
            !u &&
                p &&
                (0, i.jsx)("div", {
                    ref: y,
                    className: s()(le.S_, d),
                    ...j(),
                    style: { ...I, ...b },
                    children: (0, i.jsx)(i4.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != f ? f(e) : (0, i.jsx)(i7.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var ln = n(216384);
let li = "MAIN_PROFILE";
function ll(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i6.Ay, { className: ln.$f, guild: t, size: i6.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lr(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ln.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: ln.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: ln.qL,
                children: [
                    (0, i.jsx)(eq.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
function ls(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e5.D, {
        innerRef: r,
        className: s()(ln.L5, { [ln.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eq.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: ln.v9,
                children: n,
            }),
            (0, i.jsx)(i0.ChevronSmallDownIcon, {
                className: ln.u4,
                size: "sm",
                color: !0 === l ? p.A.colors.ICON_MUTED : p.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function la(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        d = (0, a.bG)([i2.Ay], () => i2.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([tl.A], () => {
            let e = tl.A.getGuildId();
            return null == e || ev._.has(e) ? null : e;
        }),
        g = (0, a.cf)([eI.Ay, i2.Ay], () => {
            let e = {};
            for (let t of i2.Ay.getFlattenedGuildIds()) {
                let n = eI.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        m = l.useMemo(() => {
            let e = {
                    id: li,
                    label: eF.intl.string(eF.t["2p07FR"]),
                    value: li,
                    leading: (0, i.jsx)(i1.ClydeIcon, { size: "refresh_sm", color: p.A.colors.ICON_DEFAULT }),
                },
                t = n ?? c,
                l = d
                    .map((e) => {
                        if (e === t) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, i.jsx)(ll, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ec.Vq),
                r = null != t ? u[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(ll, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [d, u, n, c, g]),
        f = t ?? li,
        h = m.find((e) => e.value === f) ?? m[0],
        x = l.useCallback(
            (e) => {
                let n = e === li ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lt, {
        className: ln.kL,
        label: eF.intl.string(eF.t.rki38K),
        listboxClassName: ln.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lr, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(ls, { leading: h.value === li ? null : h.leading, label: h.label, disabled: o, ...e }),
    });
}
var lo = n(701256),
    ld = n(288490);
let lu = "profile-editing-nameplate-error",
    lc = "profile-editing-avatar-error",
    lg = "profile-editing-avatar-decoration-error",
    lm = "profile-editing-banner-error",
    lf = "profile-editing-display-name-style-error";
function lh(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(ld.D0, t),
        children: (0, i.jsx)("div", { className: ld.ZN, children: (0, i.jsx)(tJ.LockIcon, { size: "xs" }) }),
    });
}
function lp() {
    let [e, t] = (0, t8.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: ld.X6,
              children: [
                  (0, i.jsx)(eq.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eF.intl.string(eF.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e5.D, {
                      "aria-label": eF.intl.string(eF.t.rSe9ra),
                      className: ld.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(tQ.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lx() {
    let e = iO(),
        t = iw(eF.intl.string(eF.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: ld.eW,
        children: [
            (0, i.jsxs)("div", {
                className: ld.tm,
                children: [
                    (0, i.jsx)(t0.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eF.intl.string(eF.t.bO0TOe),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eF.intl.format(eF.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(ne.A, { subscriptionTier: iL.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lh, { className: ld.nd }),
        ],
    });
}
function lA() {
    return (0, i.jsx)(eq.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: ld.BJ,
        "aria-hidden": !0,
        children: eF.intl.format(eF.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(t1.NitroWheelIcon, { size: "xxs", color: "currentColor", className: ld.qp }),
        }),
    });
}
function lI(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nU, {
        heading: eF.intl.string(eF.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(nq.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lu : void 0 }),
            (0, i.jsx)(nF, { id: lu, message: r }),
        ],
    });
}
function lv(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nU, {
        heading: eF.intl.string(eF.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nu.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lc : void 0 }),
            (0, i.jsx)(nc.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lg : void 0 }),
            (0, i.jsx)(nF, { id: lc, message: (0, nt.d3)(r) }),
            (0, i.jsx)(nF, { id: lg, message: s }),
        ],
    });
}
function lj(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eG.kn)(l ? [] : [eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: d } = (0, ex.B0)(t, n ?? void 0),
        u = (0, t9.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: d,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, t7.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: u,
            disabled: l,
        });
    return (0, i.jsxs)(nU, {
        heading: eF.intl.string(eF.t.NEzEws),
        description: c ? eF.intl.string(lo.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: ld.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(t6.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(nM, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lf : void 0,
                onOpen: o ? () => a(eU.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(nF, { id: lf, message: r }),
        ],
    });
}
function lb(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, t7.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(nU, {
        heading: eF.intl.string(eF.t.NEzEws),
        description: eF.intl.string(lo.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: ld.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(t6.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(nK, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function ly(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nU, {
        heading: eF.intl.string(eF.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(ij, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nk, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lm : void 0 }),
            (0, i.jsx)(nF, { id: lm, message: (0, nt.d3)(s) }),
        ],
    });
}
function lC(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nU, {
        heading: eF.intl.string(eF.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nI, { user: t, disabled: n }),
    });
}
function lE(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nU, {
        heading: eF.intl.string(eF.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ii, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(ic, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lS = "premium-try-it-out-description";
function lN(e) {
    let { user: t } = e,
        n = iO(),
        { navigate: l } = t$();
    return (
        nd(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lS,
            className: ld.DX,
            children: [
                (0, i.jsx)(lh, { className: ld.x$ }),
                (0, i.jsxs)("div", {
                    className: ld.sb,
                    children: [
                        (0, i.jsx)(eq.E, {
                            id: lS,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eF.intl.format(eF.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(t2.$, {
                            variant: "primary",
                            size: "sm",
                            icon: t4.EyeIcon,
                            text: eF.intl.string(eF.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(iQ, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lk(e) {
    let {
            user: t,
            panelId: n,
            selectedGuildId: l,
            originGuildId: r,
            isLoading: s,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        m = (0, tz.A)(c),
        f = null != l,
        h = $.Ay.canUsePremiumProfileCustomization(t),
        p = f && !h,
        x = !h && !f,
        A = (0, t5.Lz)(nY.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === nY.S9.SELECTABLE,
        v = f && !h && !g,
        j = s || o,
        b = (0, a.bG)([ev.A], () => ev.A.getErrors(l)),
        y = b.nameplate?.[0] ?? b.nameplate_sku_id?.[0],
        C = b.avatar?.[0],
        E = b.avatar_decoration_sku_id?.[0],
        S = b.banner?.[0],
        N = b.display_name_font_id?.[0] ?? b.display_name_effect_id?.[0] ?? b.display_name_colors?.[0];
    return (0, i.jsxs)(iy, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: ld.wx,
                children: [
                    (0, i.jsx)(tE.m, {
                        text: eF.intl.string(eF.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tV.K, {
                            buttonRef: d,
                            "aria-label": eF.intl.string(eF.t["l/A351"]),
                            icon: t3.DoubleChevronSmallRightIcon,
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(la, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: m,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iH, {})
                : (0, i.jsx)(iS, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              f && (h ? (0, i.jsx)(lp, {}) : (0, i.jsx)(lx, {})),
                              h && (0, i.jsx)(lA, {}),
                              (0, i.jsx)(lI, { user: t, guildId: l, disabled: j || p, errorMessage: y }),
                              (0, i.jsx)(lv, {
                                  user: t,
                                  guildId: l,
                                  disabled: j || p,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              h || f
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lj, { user: t, guildId: l, disabled: j || p, errorMessage: N }),
                                            (0, i.jsx)(ly, {
                                                user: t,
                                                guildId: l,
                                                disabled: j || p,
                                                canUsePremiumProfileFeatures: h,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lC, { user: t, disabled: j || p }),
                              (0, i.jsx)(lE, { user: t, guildId: l, disabled: j || p }),
                              I && (0, i.jsx)(lb, { user: t, disabled: j }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lN, { user: t }), (0, i.jsx)(iF, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lT = n(156150),
    lP = n(110654);
function lO(e) {
    return null;
}
function lR(e) {
    let { activeSlide: t, direction: n, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(t)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = l.useState(t),
        [g, m] = l.useState(!1),
        f = "forwards" === n ? 1 : -1,
        h = (0, u.p)(
            t,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, n) => {
                    let { item: i } = n;
                    e.finished && i === t && (m(!1), i !== d && (c(t), r()));
                },
            },
            "respect-motion-settings",
        ),
        p = g || t !== d;
    return (0, i.jsx)("div", {
        className: s()(lP.kL, p && lP.ez),
        children: (0, i.jsx)("div", {
            className: lP.u4,
            children: h((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lT.animated.div,
                          {
                              className: lP.M6,
                              style: p
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: p || t !== d,
                              "aria-hidden": p || t !== d,
                              children: r.props.children,
                          },
                          l,
                      );
            }),
        }),
    });
}
var l_ = n(926321),
    lL = n(477155),
    lw = n(561243),
    lM = n(206697),
    lD = n(280406);
let lG = "shuffle-options-a11y-description";
function lU(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(t2.$, {
                icon: l_.DiceIcon,
                text: eF.intl.string(eF.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lG,
                fullWidth: !0,
            }),
            (0, i.jsx)(m.A, { id: lG, children: eF.intl.string(eF.t.bBRdiB) }),
        ],
    });
}
function lF(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nd(),
        s = iD();
    return (0, i.jsxs)(iy, {
        children: [
            (0, i.jsxs)("div", {
                className: lD.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lD.FS,
                        children: (0, i.jsx)(tE.m, {
                            text: eF.intl.string(eF.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(tV.K, {
                                buttonRef: l,
                                "aria-label": eF.intl.string(eF.t["4IYwrw"]),
                                icon: lL.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(t0.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: lD.R_,
                        children: eF.intl.string(eF.t.PxUx8e),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: lD.Ij,
                        children: eF.intl.string(eF.t.X0ir7L),
                    }),
                    (0, i.jsx)(lU, { className: lD.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iS, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iQ, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iU, {
                                trialOffer: s,
                                onSubscribeClick: lM.t,
                                onSubscribeSuccess: lM.T,
                                onSubscribeClose: lw.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lB = n(199016);
let lW = "user-profile-editing-panel",
    lH = "profile-modal-editing-panel-heading";
function lV(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tE.m, {
        text: eF.intl.string(eF.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e5.D, {
            innerRef: l,
            "aria-label": eF.intl.string(eF.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lW,
            className: s()(lB.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(tH.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function lz(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tE.m, {
            text: eF.intl.string(eF.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(tV.K, {
                buttonRef: l,
                "aria-label": eF.intl.string(eF.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lW,
                icon: tH.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lY(e) {
    let {
            selectedGuildId: t,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        h = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { selectedPanel: p, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = t$(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == h)
        ? null
        : (0, i.jsx)("aside", {
              id: lW,
              "aria-labelledby": lH,
              className: s()(lB.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lB.l$,
                  children: [
                      (0, i.jsx)(m.A, {
                          children: (0, i.jsx)(f.H, { id: lH, children: eF.intl.string(eF.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lR, {
                          activeSlide: p.id,
                          direction: "premiumTryItOut" === p.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lO, {
                                  id: "default",
                                  children: (0, i.jsx)(lk, {
                                      panelId: lW,
                                      user: h,
                                      selectedGuildId: t,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, i.jsx)(lO, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lF, { user: h, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var lK = n(425763),
    lq = n(447453),
    lX = n(46653),
    lZ = n(783420),
    l$ = n(874402);
function lJ() {
    let e = tZ(),
        { goBack: t } = t$(),
        n = iw(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(lZ.A, {
        subscriptionTier: iL.pe.TIER_2,
        onClick: lM.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lM.T)(), (0, lw.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(l$.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnShow: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnHide: eF.intl.string(eF.t.ZcyFYa),
                secondaryAction: { text: eF.intl.string(eF.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: t1.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var lQ = n(803306),
    l0 = n(631670),
    l1 = n(682618),
    l6 = n(856383),
    l2 = n(234e3),
    l4 = n(159001),
    l3 = n(933725),
    l8 = n(189916),
    l9 = n(188567),
    l5 = n(435911),
    l7 = n(646976),
    re = n(289173),
    rt = n(958805),
    rn = n(61881),
    ri = n(735321),
    rl = n(624826);
n(321073);
var rr = n(419490),
    rs = n(489496),
    ra = n(132319),
    ro = n(696016),
    rd = n(384377),
    ru = n(518477);
function rc(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, J.NJ)(),
        [r, s] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: u,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: m,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([rn.A], () => rn.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rn.A], () => rn.A.getChangedWidgets()),
                n = (0, a.yK)([rn.A], () => rn.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rn.A], () => ({
                    hasUnsavedWidgets: rn.A.hasUnsavedChanges(),
                    canSaveWidgets: rn.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: p,
            hasBadgeChangesToSave: x,
        } = (0, a.cf)([ev.A], () => ({
            hasUnsavedProfileChanges: ev.A.hasUnsavedChanges(),
            canSubmitProfileChanges: ev.A.canSubmit(),
            hasBadgeChangesToSave: (0, l2.gz)(ev.A.getPendingChanges()),
        })),
        A = m || h || x,
        I = m && !f,
        v = l.useCallback(() => {
            (rt.A.clearPendingWidgets(), (0, no.XQ)());
        }, []),
        j = l.useCallback(async () => {
            if (!ev.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (x) {
                let t = ev.A.getPendingChanges(),
                    n = await (async function (e) {
                        let { displayOrder: t, hiddenBadges: n } = e,
                            i = {
                                ...(null != t ? { display_order: t } : {}),
                                ...(null != n ? { hidden_badges: n } : {}),
                            };
                        if (0 === Object.keys(i).length) return !0;
                        try {
                            return (
                                await E.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0
                            );
                        } catch (e) {
                            return (l6.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, lQ.eO)(e).catch(() => {})), await (0, l1.RS)(), (0, l2.Jp)());
                }
                e = n;
            }
            if (h)
                try {
                    if (null == t) {
                        let t = ev.A.getPendingChanges(),
                            n = (0, l5.Sk)(t),
                            i = (0, l5.yX)(t),
                            l =
                                (0, l8.Jy)(n.displayNameStyles) &&
                                !(0, l8.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l0._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rl.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, nW.Cy)({
                                            perks: [nY.vB.DISPLAY_NAME_STYLE],
                                            content: nz.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: nW.rl.USER_PROFILE,
                                        }),
                                    (0, l0.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, no.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, no.RE)());
                        }
                    } else {
                        let n = ev.A.getPendingChanges(t),
                            i = (0, l5.C5)(n),
                            l = (0, l5.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, l8.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, l8.Jy)(eI.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, l4.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rl.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, nW.Cy)({
                                            perks: [nY.vB.DISPLAY_NAME_STYLE],
                                            content: nz.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: nW.rl.GUILD_PROFILE,
                                        }),
                                    (0, l0.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, no.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, no.RE)());
                        }
                    }
                    let n = (0, l5.yg)(ev.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, l3.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l0.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (m)
                try {
                    let e = (0, ri.BF)();
                    for (let t of (await rt.A.savePendingWidgets(u), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, re.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof l7.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof l7.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rr.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, ra.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rs.Yy)(e, { name: t });
                                    } catch (e) {
                                        ro.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l0.x8)() : (0, rd.XA)(ru.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1));
        }, [h, x, m, u, c, g, n, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                (null != e && clearTimeout(e),
                    s(!0),
                    (e = setTimeout(() => {
                        s(!1);
                    }, 2500)));
            }
            return (
                l9._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (l9._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(l$.$, {
            preventsPopoutDismiss: !0,
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eF.intl.string(eF.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eF.intl.string(eF.t["0Y/qkL"]),
            secondaryAction: { text: eF.intl.string(eF.t.yBZMsQ), onClick: v, disabled: !A || o },
            primaryAction: { text: eF.intl.string(eF.t["R3BPH+"]), onClick: j, loading: o, disabled: !(!I && p) || !A },
        })
    );
}
var rg = n(485745),
    rm = n(893757);
function rf() {
    let e = (0, lK.VU)(),
        t = (0, rg.A)(),
        n = tZ();
    return e ? "dnd" : n ? "premium-try-it-out" : t ? "save" : null;
}
function rh(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([lX.default], () => lX.default.getId() === t),
        d = rf(),
        [u, c] = l.useState(d);
    return (null != d && u !== d && c(d), o)
        ? (0, i.jsx)("div", {
              className: s()(rm.k, r),
              children:
                  "dnd" === u
                      ? (0, i.jsx)(lq.S, { className: rm.W })
                      : "premium-try-it-out" === u
                        ? (0, i.jsx)(lJ, {})
                        : "save" === u
                          ? (0, i.jsx)(rc, { guildId: n })
                          : null,
          })
        : null;
}
var rp = n(34011),
    rx = n(629403),
    rA = n(612630),
    rI = n(404760),
    rv = n(61426);
function rj(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        { loading: u, note: c } = (0, rA.A)(t),
        [g, m] = l.useState(),
        [f, h] = l.useState(),
        p = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (h(void 0), m(e), o?.());
                    try {
                        await rx.A.updateNote(t, e);
                    } catch {
                        h(eF.intl.string(eF.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = u && null == p,
        I = l.useRef(null),
        v = l.useRef(!1);
    if (
        (l.useEffect(() => {
            !r || d || u || v.current || ((v.current = !0), I.current?.focus({ preventScroll: !0 }));
        }, [r, d, u]),
        d)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", className: rv.t, children: p })
            : null;
    return (0, i.jsx)("div", {
        className: s()(rI.kL, n),
        children: (0, i.jsx)(rp.w, {
            inputRef: I,
            value: p ?? "",
            onCommit: x,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: j,
            label: eF.intl.string(eF.t.PbMNh2),
            placeholder: A ? eF.intl.string(eF.t["WLKx/9"]) : eF.intl.string(eF.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: f,
        }),
    });
}
var rb = n(83013),
    ry = n(793222);
function rC(e) {
    let { userId: t } = e,
        n = (0, eE.g)(),
        { trackUserProfileAction: l } = (0, J.NJ)();
    return (0, i.jsx)(rb.A, {
        heading: eF.intl.string(eF.t["mQKv+v"]),
        scrollTargetId: ru.bk.NOTE,
        children: (0, i.jsx)(rj, {
            userId: t,
            className: ry.N,
            autoFocus: n === ru.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rE = n(123292),
    rS = n(667242);
function rN(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: d } = e,
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            d && u.current?.focus();
        }, [d]),
        (0, i.jsx)("div", {
            className: rS.kL,
            children: (0, i.jsxs)("div", {
                className: rS.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rS.Kk, children: t }),
                    (0, i.jsx)(eq.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rS.hP,
                            children: (0, i.jsx)(rE.Q, {
                                buttonRef: u,
                                variant: "primary",
                                textVariant: "body-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: a,
                            }),
                        }),
                ],
            }),
        })
    );
}
var rk = n(346055),
    rT = n(289873),
    rP = n(615019);
function rO(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && ni.O.announce(eF.intl.string(eF.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rk.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rP.f, t && rP.z),
                    children: n && (0, i.jsx)(rT.y, { type: rT.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rR = n(568602);
function r_(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        d = l.useRef(null),
        u = l.useRef(1.4),
        c = (0, a.bG)([rn.A, ev.A], () => rn.A.hasUnsavedChanges() || ev.A.hasUnsavedChanges());
    l.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = l.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        l.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                l9._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    l9._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, i.jsx)(rR.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rL = n(761508),
    rw = n(329921),
    rM = n(945810),
    rD = n(340344);
let rG = { enabled: !1 },
    rU = { 0: rG, 1: { enabled: !0 } },
    rF = (0, rM.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: rG,
        variations: rU,
    });
function rB(e) {
    let { location: t } = e;
    return (rF.useConfig({ location: t }), null);
}
var rW = n(695904),
    rH = n(573238),
    rV = n(107563),
    rz = n(517164),
    rY = n(290863),
    rK = n(894768),
    rq = n(146655),
    rX = n(489379);
function rZ(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, rq.A)(t.id),
        { voiceChannel: d, voiceActivity: u } = (0, rX.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([rz.A], () => rz.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        m = (0, a.bG)([rK.A, rY.A], () => {
            let e = g ? rK.A.getStatus() : rY.A.getStatus(t.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
        }),
        f = r.length > 0 || null != o,
        h = i?.private !== !0 && null == o && null == u && null != d,
        p = s.length > 0;
    return {
        live: r,
        recent: s,
        stream: o,
        voiceActivityChannel: h ? d : null,
        isFetching: c,
        isCurrentUser: g,
        hasCurrentActivity: !m && (f || h),
        hasRecentActivity: p,
    };
}
var r$ = n(939496),
    rJ = n(114212),
    rQ = n(960549),
    r0 = n(637865),
    r1 = n(842241),
    r6 = n(287746),
    r2 = n(435558),
    r4 = n(534890),
    r3 = n(308528),
    r8 = n(780964),
    r9 = n(766075),
    r5 = n(92795);
let r7 = [
        () => eF.intl.string(eF.t.madJdE),
        () => eF.intl.string(eF.t.NYmfoP),
        () => eF.intl.string(eF.t.R2PaCg),
        () => eF.intl.string(eF.t.laSR8h),
        () => eF.intl.string(eF.t.DnsJE8),
    ],
    se = [
        () => eF.intl.string(eF.t.nFSbeE),
        () => eF.intl.string(eF.t.gTcxOz),
        () => eF.intl.string(eF.t["8T0wYj"]),
        () => eF.intl.string(eF.t.BIHl1g),
        () => eF.intl.string(eF.t["jhBm0+"]),
    ],
    st = [
        () => eF.intl.string(eF.t.AyMGXA),
        () => eF.intl.string(eF.t.aAFW7V),
        (e) => eF.intl.formatToPlainString(eF.t.h2g0cM, { name: e }),
        () => eF.intl.string(eF.t.rrYh58),
        () => eF.intl.string(eF.t["HX3K+F"]),
        () => eF.intl.string(eF.t["/yW3aY"]),
        () => eF.intl.string(eF.t["PmL/v0"]),
        () => eF.intl.string(eF.t.IALa3h),
        () => eF.intl.string(eF.t.HRcTFL),
        () => eF.intl.string(eF.t.NuCqPt),
        () => eF.intl.string(eF.t["M1tw+4"]),
        () => eF.intl.string(eF.t.UBm1y2),
        () => eF.intl.string(eF.t.Cu95PQ),
        () => eF.intl.string(eF.t["R/wFuh"]),
        () => eF.intl.string(eF.t.HQPAVT),
        () => eF.intl.string(eF.t.YolGh4),
    ],
    sn = [
        T.fg2.STEAM,
        T.fg2.PLAYSTATION,
        T.fg2.XBOX,
        T.fg2.TWITCH,
        T.fg2.BATTLENET,
        T.fg2.LEAGUE_OF_LEGENDS,
        T.fg2.EPIC_GAMES,
        T.fg2.RIOT_GAMES,
        T.fg2.ROBLOX,
        T.fg2.SPOTIFY,
        T.fg2.YOUTUBE,
        T.fg2.CRUNCHYROLL,
        T.fg2.BUNGIE,
    ];
function si(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: r5.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: r5.FS,
                children: [
                    (0, i.jsx)(t0.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sl() {
    let e = eF.intl.string(eF.t.RnD2yZ),
        [t] = l.useState(() => ((0, r2.sample)(r7) ?? r7[0])());
    return (0, i.jsx)(si, { heading: e, bodyText: t });
}
function sr() {
    let e = eF.intl.string(eF.t.bFgqYJ),
        [t] = l.useState(() => ((0, r2.sample)(se) ?? se[0])());
    return (0, i.jsx)(si, { heading: e, bodyText: t });
}
function ss(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = X.Ay.getName(n, r, t),
        o = eF.intl.formatToPlainString(eF.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, r2.sample)(st) ?? st[0])(a)),
        u = l.useCallback(() => {
            (r3.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(si, {
        heading: o,
        bodyText: d,
        children: (0, i.jsx)("div", {
            className: r5.v0,
            children: (0, i.jsx)(tA.FD, { icon: r4.ChatIcon, text: eF.intl.string(eF.t["g33r/P"]), onClick: u }),
        }),
    });
}
function sa() {
    let e = (0, nl.Ay)();
    return (0, i.jsx)("div", {
        className: r5.HU,
        children: sn.map((t, n) => {
            let l = eo.A.get(t);
            if (null == l) return null;
            let r = (0, nX.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: r5.gj }, n);
        }),
    });
}
function so(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, r9.openUserSettings)(r8.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, r9.openUserSettings)(r8.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(si, {
        heading: eF.intl.string(eF.t.VB6LWY),
        bodyText: eF.intl.string(eF.t.KpjsU9),
        children: [
            (0, i.jsx)(sa, {}),
            (0, i.jsxs)("div", {
                className: r5.v0,
                children: [
                    (0, i.jsx)(tA.FD, { text: eF.intl.string(eF.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tA.FD, { text: eF.intl.string(eF.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sd = n(131058);
function su(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sd.gN, n), fade: !0, ...r, children: t });
}
var sc = n(587763);
function sg(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: a } = e,
        {
            live: o,
            recent: d,
            stream: u,
            voiceActivityChannel: c,
            isFetching: g,
            isCurrentUser: m,
            hasCurrentActivity: f,
            hasRecentActivity: h,
        } = rZ({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return f || h || !g
        ? f || h || g
            ? (0, i.jsxs)(su, {
                  className: sc.XG,
                  fade: !0,
                  children: [
                      f
                          ? (0, i.jsx)(rb.A, {
                                heading: eF.intl.string(eF.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sc.kR,
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r1.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: u,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(rQ.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r6.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      h
                          ? (0, i.jsx)(rb.A, {
                                heading: eF.intl.string(eF.t.jzgEoL),
                                introText: m
                                    ? eF.intl.format(eF.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tS.Anchor,
                                                  {
                                                      href: eW.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: ru.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sc.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(r0.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : m
              ? (0, i.jsx)(so, { onClose: a })
              : (0, i.jsx)(ss, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sc.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sc.kr,
                          children: [
                              (0, i.jsx)(rJ.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(rJ.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sm = n(163126),
    sf = n(913453),
    sh = n(229187),
    sp = n(100663),
    sx = n(503062),
    sA = n(393213);
function sI(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, J.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, sf.A)(t),
        g = (0, sm.A)();
    return (
        l.useEffect(() => {
            (0, sh.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(su, {
            className: sA.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sA.D$,
                                  children: [
                                      (0, i.jsx)(rJ.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(rJ.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === u.length
                      ? (0, i.jsx)(sl, {})
                      : u.map((e) => {
                            let { key: t, user: l, status: u } = e;
                            return (0, i.jsx)(
                                sx.A,
                                {
                                    user: l,
                                    status: u,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sp.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var sv = n(398590),
    sj = n(345942),
    sb = n(51943);
function sy(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, J.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sf.A)(t);
    return (0, i.jsx)(su, {
        className: sA.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sA.Y7,
                              children: [
                                  (0, i.jsx)(rJ.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(rJ.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sb.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sj.u)(r.id), n(), (0, sv.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sr, {}),
    });
}
var sC = n(885574),
    sE = n(775602),
    sS = n(669815),
    sN = n(331322),
    sk = n(591410),
    sT = n(881116),
    sP = n(506774),
    sO = n(531913),
    sR = n(503275),
    s_ = n(316601),
    sL = n(469958);
let sw = "conjureServerWidgetUpsellDismissals";
var sM = n(763314),
    sD = n(191850);
function sG(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([Y.A], () => Y.A.getGuild(n)),
                s = (0, ed.h)(i),
                o = (0, a.bG)([s_.A], () => s_.A.getProject(i)?.owner_user_id, [i]),
                d = (0, sR.vm)(o),
                u = (0, sO.A)(e, i),
                c = l.useMemo(() => ({ ...u, isLoading: !1, hasIdentity: !0 }), [u]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? d : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: d, application: u, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sN.B, {
        children: (0, i.jsx)(sk.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sk.A.Cta, {
                icon: (0, i.jsx)(i6.Ay, { guild: d, size: i6.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eF.intl.formatToPlainString(sD.default["uIb8U+"], { guildName: d.name }),
                content: eF.intl.formatToPlainString(sD.default.ZZywee, { applicationName: u.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sN.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sT.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rE.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eF.intl.string(eF.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(t2.$, {
                            variant: "primary",
                            size: "sm",
                            text: eF.intl.string(sD.default.j6ztO0),
                            onClick: () => (0, sM.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function sU(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sL.A)(),
                [n, i] = l.useState(() => sP.w.get(sw)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sP.w.get(sw) ?? {}),
                            sP.w.set(sw, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(sG, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function sF() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(sU, { currentUser: e }, e.id) : null;
}
var sB = n(840387),
    sW = n(201718),
    sH = n(615405),
    sV = n(633075),
    sz = n(813832),
    sY = n(600761),
    sK = n(667049);
function sq(e) {
    let t = (0, em.A)(e),
        n = tZ();
    return t && !n;
}
var sX = n(410453);
function sZ(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)(),
        a = l.useCallback(() => {
            (r({ action: "PRESS_ADD_WIDGET" }),
                (0, nV.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r]);
    return (0, i.jsxs)("div", {
        className: s()(sX.w, t),
        children: [
            (0, i.jsx)(eq.E, {
                className: sX.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eF.intl.string(eF.t.OYlggR),
            }),
            (0, i.jsx)(t2.$, {
                icon: tk.PlusSmallIcon,
                text: eF.intl.string(eF.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var s$ = n(192),
    sJ = n(704824),
    sQ = n(382483),
    s0 = n(385113),
    s1 = n(334074),
    s6 = n(657718),
    s2 = n(478016);
function s4(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useMemo(() => new sV.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, ri.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rd.XA)(ru.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sk.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sk.A.Cta, {
            showSuggestedForYou: !0,
            heading: eF.intl.format(eF.t.OIzLCy, { applicationName: n.name }),
            content: eF.intl.format(eF.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tE.m, {
                        text: eF.intl.string(eF.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s6.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tQ.XSmallIcon,
                            "aria-label": eF.intl.string(eF.t.WAI6xu),
                            onClick: () => {
                                r(eU.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tE.m, {
                        text: eF.intl.string(eF.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s6.S, {
                            variant: "primary",
                            size: "sm",
                            icon: s2.CheckmarkSmallIcon,
                            "aria-label": eF.intl.formatToPlainString(eF.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eU.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function s3() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([s0.A], () => s0.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sQ.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, ed.A)(e),
            { tokens: i, fetched: r } = (0, sJ.j)(e),
            s = (0, sK.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sV.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: u, markAsDismissed: c } = (0, s1.hj)({
                applications: d,
                dismissibleContent: eN.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: s1.SH,
            }),
            g = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(s4, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var s8 = n(675816),
    s9 = n(575593),
    s5 = n(44120),
    s7 = n(778705),
    ae = n(87719),
    at = n(317560),
    an = n(306984),
    ai = n(661492);
let al = { sentGifts: {} };
function ar(e, t) {
    return `${e}:${t}`;
}
class as extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((al = e), this.cleanupExpiredGifts());
    }
    getState() {
        return al;
    }
    hasSentGift(e, t) {
        let n = ar(e, t),
            i = al.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = ar(e, t),
            i = al.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(al.sentGifts)) new Date(n.expiresAt) < e && delete al.sentGifts[t];
    }
}
let aa = new as(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = ar(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        al.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var ao = n(88940),
    ad = n(146423),
    au = n(590180),
    ac = n(301198),
    ag = n(349031),
    am = n(124557),
    af = n(471505),
    ah = n(376932);
function ap(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function ax(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lX.default], () => lX.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, af.G)({ userId: o, sku: n, location: l, onError: r }),
        m = ay();
    return (0, i.jsx)("div", {
        className: ah.U,
        style: ap(t),
        children: (0, i.jsx)(ac._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function aA(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lX.default], () => lX.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, am.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = ay();
    return (0, i.jsx)("div", {
        className: ah.U,
        style: ap(t),
        children: (0, i.jsx)(ac._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function aI(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lX.default], () => lX.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, am.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = ay();
    return (0, i.jsx)("div", {
        className: ah.U,
        style: ap(t),
        children: (0, i.jsx)(ac._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function av(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lX.default], () => lX.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, ag.z)({ userId: o, product: n, location: l, onError: r }),
        h = (0, ai.q)(m),
        p = f && !d,
        x = !h || p,
        A = ay(h && p ? eF.intl.string(eF.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: ah.U,
        style: ap(t),
        children: (0, i.jsx)(ac._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: x,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: A,
            ...s,
        }),
    });
}
function aj(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([au.A], () => au.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ax, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(aA, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(av, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aI, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function ab(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aj, { location: t, ...n });
}
function ay(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eF.intl.string(eF.t["5B3F2W"]),
            add: eF.intl.string(eF.t.Hcgz2S),
            remove: eF.intl.string(eF.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var aC = n(460442),
    aE = n(662349),
    aS = n(802290),
    aN = n(479026),
    ak = n(636374),
    aT = n(699976),
    aP = n(181554),
    aO = n(880465);
let aR = aT.Z.SIZE_133;
function a_(e) {
    var t;
    let n,
        {
            item: r,
            wishlistOwner: a,
            guildId: o,
            currentUser: d,
            style: u,
            isDragging: c,
            dragHandle: g,
            skuPreviewStyle: m,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: p,
            setIsHoveringOrFocusing: x,
            onDetailsClick: A,
            onPurchaseClick: I,
            wishlistId: v,
            isItemOwned: j,
            cardBackdrop: b,
            isNew: y,
            onClick: C,
            showShopUnpublishLabel: E,
        } = e,
        S = l.useRef(null),
        N = l.useId(),
        k = (0, ao.A)(E ? r.shopUnpublishedAt : void 0),
        T = l.useRef(x);
    (l.useEffect(() => {
        T.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = S.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                T.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, J.NJ)(),
        O = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: ru.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, P, C]),
        R = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: ru.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        _ = l.useCallback(() => {
            ((0, rd.XA)(ru.jM.SOMETHING_WENT_WRONG), ni.O.announce(eF.intl.string(eF.t.F8FvUy)));
        }, []),
        L = null != g ? (0, i.jsx)("div", { ref: S, className: aP.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: M,
            showOverlayButton: D,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, ak.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: O, onPurchaseClick: R }),
        B = p && D;
    return (0, i.jsxs)("div", {
        className: aP.kL,
        children: [
            (0, i.jsxs)(ad.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aR,
                cardStyle: s()(aP.Nr, u),
                skuPreviewStyle: s()(aP.ev, { [aP.go]: j && !p }, m, B ? f : void 0),
                skuAssetClassName: B ? h : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, ai.T)(t) : eF.intl.formatToPlainString(eF.t.ZBB4Ty, { productName: (0, ai.T)(t) })),
                    !0 === y ? eF.intl.formatToPlainString(eF.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                topLeftContent: null != k ? (0, i.jsx)(aS.A, { id: N, countdown: k, variant: "profile" }) : void 0,
                children: [
                    !0 === y && (0, i.jsx)(rw.N, { className: aP.Pf }),
                    b,
                    D && (0, i.jsx)(aE.A, { spec: aR, onClick: M, isHoveringOrFocusing: p, label: U, icon: F }),
                    j && (0, i.jsx)(aC.gS, { isHoveringOrFocusing: p }),
                    a.id === d.id &&
                        null != v &&
                        (0, i.jsx)(ab, {
                            sku: r.sku,
                            isCardHovered: p,
                            spec: aR,
                            onError: _,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function aL(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        d = l.useCallback(() => {
            (0, at.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        u = l.useCallback(() => {
            let e = r.id === s.id;
            (0, an.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(a_, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: a,
        currentUser: s,
        ...o,
    });
}
function aw(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        c = (0, aN.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, s5.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        m = t.sku.tenantMetadata?.collectibles?.type,
        f = m === s9.R.AVATAR_DECORATION || m === s9.R.PROFILE_FRAME;
    return (0, i.jsx)(a_, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: d,
        skuPreviewHoverStyle: s()({ [aP.mn]: f }),
        analyticsLocations: a,
        ...u,
    });
}
function aM(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: r,
            currentUser: s,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        u = l.useCallback(() => {
            if (n) return void (0, ae.x)(iP.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, s7.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(a_, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aO.MO,
        skuAssetHoverClassName: aO.iR,
        analyticsLocations: a,
        ...d,
    });
}
function aD(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: d } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        u = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        m = (0, a.bG)([aa], () => aa.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || m),
            [t.isOwned, t.skuProductLine, m],
        );
    if (null == t.sku || null == u) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aL, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(aw, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aM, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        default:
            return null;
    }
}
var aG = n(788593),
    aU = n(132085),
    aF = n(741934),
    aB = n(766529),
    aW = n(998556);
function aH(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, s8.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        d = (0, lK.VU)(),
        u = l.useMemo(
            () =>
                null == o || null == r
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: r } = e;
                          if ("WIDGET" === l && r?.widget != null) {
                              let { widget: e, getWidth: n } = r,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: aW.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aB.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && r?.gameName != null) {
                              let { imageSrc: e, iconSrc: l, gameName: s, getWidth: a } = r,
                                  o = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: o },
                                  children: (0, i.jsx)(aG.A, {
                                      className: aW.XJ,
                                      imageSrc: e,
                                      iconSrc: l,
                                      gameName: s,
                                      gameId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && r?.game != null && r?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = r,
                                  s = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: aW.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aU.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && r?.item != null) {
                              let { item: e, getWidth: t } = r,
                                  n = t?.() ?? 96;
                              return (0, i.jsx)("div", {
                                  className: aW.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aF.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aW.Xm,
                                  children: (0, i.jsx)(aD, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(r, o),
            [r, o],
        ),
        c = l.useRef(null),
        g = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            c.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                c.current = null;
                return;
            }
            null == c.current && g();
        }, [n, g]),
        !0 !== n || null == s || null == u)
    )
        return null;
    null == c.current && g();
    let { x: m, y: f } = c.current ?? { x: 0, y: 0 },
        h = s.x - m - 60 * !!d,
        p = s.y - f;
    return (0, i.jsx)("div", { className: aW.kL, style: { transform: `translate3d(${h}px, ${p}px, 0)` }, children: u });
}
var aV = n(151869);
n(839272);
var az = n(540185);
function aY(e) {
    let t,
        { addableWidgets: n, applicationAffinityData: i, hasClips: l } = e,
        r = [],
        s = new Set();
    function a(e) {
        s.has(e.getUniqueKey()) || (r.push(e), s.add(e.getUniqueKey()));
    }
    function o(e) {
        let t = n.find((t) => t.type === e);
        null != t && a(t);
    }
    function d(e) {
        let t = n.find((t) => (0, sV.E)(t, e));
        null != t && a(t);
    }
    return (
        ((t = Date.now()),
        i
            .filter((e) => {
                let { isConnected: n, lastPlayedAt: i } = e;
                return n || (null != i && t - i < 7776e6);
            })
            .toSorted((e, t) => {
                if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                let n = t.totalPlayDuration - e.totalPlayDuration;
                return 0 !== n ? n : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
            })
            .slice(0, 2)
            .map((e) => {
                let { applicationId: t } = e;
                return t;
            })).forEach(d),
        l && o(az.x.CLIPS_GALLERY),
        o(az.x.FAVORITE_GAMES),
        o(az.x.PLAYED_GAMES),
        d("1346069614634864772"),
        o(az.x.CURRENT_GAMES),
        o(az.x.WANT_TO_PLAY_GAMES),
        d("1323482066758930452"),
        r.slice(0, 6)
    );
}
let aK = (0, rM.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var aq = n(116281),
    aX = n(661439),
    aZ = n(90165);
function a$(e) {
    let t = (0, a.bG)([s0.A], () => s0.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sV.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ed.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, sJ.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, aX.X)();
    }, [o]);
    let d = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        u = (0, a.yK)([aZ.A], () => d.map((e) => (null != e ? aZ.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([aZ.A], () => d.map((e) => (null != e ? aZ.A.getLastPlayedDateTime(e) : null)));
    return l.useMemo(() => {
        let e = new Set(s.map((e) => e.application.id)),
            t = [];
        for (let i = 0; i < n.length; i++)
            t.push({
                applicationId: n[i],
                isConnected: e.has(r[i]),
                totalPlayDuration: u[i] ?? 0,
                lastPlayedAt: c[i] ?? null,
            });
        return t;
    }, [n, r, c, s, u]);
}
var aJ = n(224360),
    aQ = n(942742),
    a0 = n(843393);
function a1(e) {
    return e.getUniqueKey();
}
function a6(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, aq.A)(),
        s = a$(r),
        o = (0, a.bG)([rr.Ay], () => rr.Ay.hasClips()),
        d = l.useMemo(() => aY({ addableWidgets: r, applicationAffinityData: s, hasClips: o }), [r, s, o]),
        u = d.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u && (0, i.jsx)(a2, { suggestions: d, suggestionsLocation: "above" }),
            t,
            u && (0, i.jsx)(a2, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function a2(e) {
    let t = aK.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(a4, { ...e }) : null;
}
function a4(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, J.NJ)(),
        { focusAddedWidget: o } = (0, s$.r)(),
        [d, u] = (0, eG.kn)([eN.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(aQ.A, {
                    widget: e,
                    size: "small",
                    compact: !0,
                    listItemProps: t,
                    onAddWidget: () => {
                        (o(e.getUniqueKey()), r?.());
                    },
                    trackUserProfileEditAction: a,
                }),
            [o, r, a],
        );
    return d !== eN.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(aJ.A, {
              className: s()(a0.uW, "above" === n && a0.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => u(eU.i.USER_DISMISS),
              children: (0, i.jsx)(aV.A, {
                  items: t,
                  getItemKey: a1,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: a0.Dk,
                  scrollerClassName: a0.jv,
                  itemClassName: a0.Vs,
                  actionsClassName: a0.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eF.intl.string(eF.t["+EIBSA"]),
              }),
          });
}
var a3 = n(269507);
function a8(e) {
    let { widgets: t, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("ul", {
        className: a3.ZW,
        "aria-label": eF.intl.string(eF.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(aQ.A, { widget: e, size: "small", trackUserProfileEditAction: n }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function a9(e) {
    let { trackUserProfileEditAction: t } = e,
        r = (0, aq.A)(),
        s = a$(r),
        o = aY({ addableWidgets: r, applicationAffinityData: s, hasClips: (0, a.bG)([rr.Ay], () => rr.Ay.hasClips()) }),
        d = l.useCallback(() => {
            (t({ action: "PRESS_ADD_WIDGET" }),
                (0, nV.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a8, { widgets: o, trackUserProfileEditAction: t }),
            (0, i.jsx)(t2.$, { text: eF.intl.string(eF.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: d }),
        ],
    });
}
function a5(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, J.NJ)(),
        s = l.useRef(!1),
        o = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]);
    return (
        l.useEffect(() => {
            s.current || o || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [o, n]),
        (0, i.jsxs)("div", {
            className: a3.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: a3.FS,
                    children: [
                        (0, i.jsx)(t0.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eF.intl.string(eF.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: o ? eF.intl.string(eF.t["+W59o5"]) : eF.intl.string(eF.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sF, {}), (0, i.jsx)(a9, { trackUserProfileEditAction: r })],
                    }),
            ],
        })
    );
}
var a7 = n(366209);
function oe() {
    return (0, i.jsxs)("div", {
        className: a7.mJ,
        children: [
            (0, i.jsx)(sC.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eq.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eF.intl.string(eF.t["7blcz6"]),
            }),
        ],
    });
}
function ot(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, sK.A)(t.id),
        d = sq(t.id),
        u = (function () {
            let [e, t] = (0, a.yK)([sH.A], () => [sH.A.ipCountryCode, sH.A.ipCountryCodeRequest]),
                n = (0, sB.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sS.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && d,
        g = l.useMemo(() => o.filter(re.fu), [o]),
        m = l.useMemo(() => o.filter((e) => e instanceof sV.R), [o]);
    function f() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aB.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: d, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                d &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(sZ, { className: a7.cG }),
                            u && (0, i.jsx)(oe, {}),
                            (0, i.jsx)(s3, {}),
                            (0, i.jsx)(sF, {}),
                        ],
                    }),
                d ? (0, i.jsx)(a6, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, sz.Y)(d, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ed.A)(n);
        let { data: i, refetch: r } = (0, sW.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, m),
    c)
        ? (0, i.jsx)(a5, { userId: t.id })
        : d
          ? (0, i.jsx)(s$.D, { children: f() })
          : f();
}
function on(e) {
    var t;
    let n,
        r,
        { user: o, ...d } = e,
        u = l.useRef(null);
    (0, sY.i)({ containerRef: u });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                u.current?.scrollTo({ top: 0, behavior: sE.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([lX.default], () => lX.default.getId() === t)), (r = rf()), n && null != r);
    return (0, i.jsxs)(su, {
        "data-scroller": !0,
        scrollerRef: u,
        className: s()(a7.XG, { [a7.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(aH, { scrollerRef: u }), (0, i.jsx)(ot, { user: o, onWidgetAddedFromBelow: c, ...d })],
    });
}
var oi = n(115560),
    ol = n(777480),
    or = n(825484),
    os = n(952270),
    oa = n(444927),
    oo = n(895360),
    od = n(267102),
    ou = n(521440),
    oc = n(721932),
    og = n(832163),
    om = n(501838),
    of = n(44724),
    oh = n(808247),
    op = n(673843),
    ox = n(855052),
    oA = n(342442),
    oI = n(658946),
    ov = n(535089),
    oj = n(698253),
    ob = n(174947),
    oy = n(840411),
    oC = n(387325),
    oE = n(416415),
    oS = n(419731),
    oN = n(451395),
    ok = n(823016),
    oT = n(100741);
function oP(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, ok.r)();
    return (0, i.jsx)(oN.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eF.intl.formatToPlainString(eF.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oT.C,
        dropBeforeClassName: oT.A,
        dropAfterClassName: oT.Ze,
        draggingClassName: oT.Id,
        children: (0, i.jsx)("div", { className: oT.An, children: s }),
    });
}
let oO = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: r,
            guildId: s,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: u,
            isNew: c,
            onClick: g,
            showShopUnpublishLabel: m,
        } = e,
        { registerDragHandleRef: f } = (0, ok.r)(),
        h = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oN.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oT.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(aD, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: p,
                    isNew: c,
                    onClick: h,
                    showShopUnpublishLabel: m,
                }),
            [t, r, s, d, p, o, c, h, m],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(oP, { item: t, index: n, wishlistId: o, onReorder: u, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function oR(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        d = C.default.getCurrentUser(),
        { labelsEnabled: u, reorderEnabled: c } = (0, oC.Zf)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(() => t.filter(ob.xZ).map((e) => e.shopUnpublishedAt), [t]),
        m = (0, ao.N)(g),
        { defaultWishlistId: f } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        h = (0, oE.Ay)(t, c && null != d && d.id !== n.id),
        { isDragging: p } = (0, s8.V)((e) => ({ isDragging: e.isDragging() })),
        [x, A] = l.useState([]),
        I = l.useCallback((e) => {
            A((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        v = l.useCallback(
            (e, t) => {
                if (e === t || null == f || 0 === h.length || e < 0 || e >= h.length || t < 0 || t >= h.length) return;
                let n = rV.A.getWishlist(f);
                if (null == n) return;
                let i = h[e],
                    { newWishlistData: l, previousSkuId: r, nextSkuId: s } = (0, oy.Ap)(n, h, e, t);
                oh.A.reorderWishlistItem(f, i.skuId, { previousSkuId: r, nextSkuId: s, newWishlistData: l });
            },
            [f, h],
        );
    if (null == d || null == f) return null;
    let j = (0, i.jsxs)(i.Fragment, {
        children: [
            m && (0, i.jsx)(oC.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oT.Vg,
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        oO,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: p,
                            onReorder: v,
                            isNew: (0, oS.f3)(e.addedAt, o) && !x.includes(e.skuId),
                            onClick: I,
                            showShopUnpublishLabel: u,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(ok.B, { emptyListFallbackRef: null, children: j }) : j;
}
function o_(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oj.P, { isGifting: n, children: (0, i.jsx)(oR, { ...e }) });
}
var oL = n(815021),
    ow = n(299679),
    oM = n(820847);
n(667532);
var oD = n(802494),
    oG = n(172218),
    oU = n(858899),
    oF = n(2157),
    oB = n(95817),
    oW = n(74135),
    oH = n(964164);
let oV = aT.Z.SIZE_90;
function oz(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: r,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: u,
            "aria-label": c,
            wishlistId: g,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, J.NJ)(),
        h = (0, ow.Ar)(),
        p = (0, oa.A)(() => (0, oi.A)()),
        { handleVisibilityChange: x } = (0, oB.G)(p),
        A = (0, oG.K)(x, 0.5, h?.surface != null),
        I = l.useCallback(() => {
            (f({
                wishlistId: g,
                action: ru.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tR.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: g,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                u());
        }, [u, t.id, t.productLine, f, g, h, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(ad.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oV,
            cardStyle: s()(oH.Nr, a),
            skuPreviewStyle: s()(oH.ev, o),
            onHoverOrFocusChange: d,
            onClick: I,
            "aria-label": c,
            children: m,
        }),
    });
}
function oY(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: r,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: u,
            promotion: c,
            ...g
        } = e,
        [m, f] = l.useState(!1),
        h = l.useCallback(async () => {
            if (!m) {
                f(!0);
                try {
                    (await oh.A.addSkuToWishlist(t.id, n), u?.(), a?.({ tabSection: ru.RP.WISHLIST }));
                } catch (e) {
                    ((0, oU.P0)({ text: eF.intl.string(eF.t.F8FvUy), variant: "critical" }),
                        ni.O.announce(eF.intl.string(eF.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, m, a, u]),
        p = l.useMemo(() => s()({ [oH.zW]: r || m }, o), [r, m, o]);
    return (0, i.jsxs)(oz, {
        "aria-label": eF.intl.formatToPlainString(eF.t.xRjJBe, { productName: (0, ai.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: p,
        onClick: h,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(aC.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function oK(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, oF.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(oY, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oW.s, { spec: oV, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oq(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case s9.R.PROFILE_EFFECT:
                case s9.R.NAMEPLATE:
                case s9.R.BUNDLE:
                case s9.R.PROFILE_FRAME:
                    return;
                case s9.R.AVATAR_DECORATION:
                    return oH.ML;
                default:
                    return s()(oH.ML, oH.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(oY, { sku: t, skuPreviewStyle: r, ...n });
}
function oX(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(oY, { sku: t, skuPreviewStyle: aO.MO, ...n });
}
function oZ(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oK, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(oq, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(oX, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var o$ = n(609965);
function oJ(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: d } = e,
        u = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(o$.Vg, o),
        children: d.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                ow.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oZ, {
                        sku: a,
                        wishlistId: t?.id,
                        wishlistOwner: u,
                        guildId: n,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: r,
                    }),
                },
                a.id,
            );
        }),
    });
}
var oQ = n(927813);
let o0 = 90 * oQ.A.Millis.DAY,
    o1 = 90 * oQ.A.Millis.DAY;
var o6 = n(469364);
function o2(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            hasFetchedWishlist: s = !1,
            analyticsLocations: o,
            impressionSessionId: d,
            className: u,
        } = e,
        {
            isVisible: c,
            isDismissible: g,
            markAsDismissed: m,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                r = (n?.items.length ?? 0) >= 3,
                [s, o] = l.useState(!1);
            !i || r || s || o(!0);
            let d = (0, a.bG)(
                    [ee.A],
                    () => (null != n ? new Date(ee.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [u, c] = (0, eG.Wl)(
                    eN.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + o1, cooldownDurationMs: o0 },
                    void 0,
                    !0,
                ),
                g = u === eN.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eU.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(o4, {
              user: t,
              guildId: n,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: d,
              className: u,
              isDismissible: g,
              markAsDismissed: m,
          })
        : null;
}
function o4(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
            isDismissible: u,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: r = i,
                    source: s,
                } = e,
                { recommendations: a, status: o } = (0, oD.Ul)({ userId: t, numItems: i, source: s }),
                d = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                u = "success" === o && !d.has(iL.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (u && e.unshift({ sku: (0, oy.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, d, u, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oM.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(o6.kL, d),
              children: [
                  (0, i.jsxs)("div", {
                      className: o6.wx,
                      children: [
                          (0, i.jsx)(eq.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eF.intl.string(eF.t["+GB8Kt"]),
                          }),
                          u &&
                              (0, i.jsx)("div", {
                                  className: o6.b,
                                  children: (0, i.jsx)(oL.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(ow.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oJ, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(o6.Vg, o6.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var o3 = n(477782),
    o8 = n(165862),
    o9 = n(431194);
function o5(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: r,
            handleOpenGameShop: s,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [u, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(ec.Vq).map((e) => {
                        let t = t_.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: o9.I, src: t, alt: "" }) : tp.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tp.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ed.A)(o), handleOpenGameShop: s }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(o3.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(o3.Dr, {
                                id: "browse-collectibles-shop",
                                label: eF.intl.string(eF.t["5upuqx"]),
                                iconLeft: tp.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tp.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(o3.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eF.intl.string(eF.t.lG6a5x),
                                iconLeft: t1.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: t1.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    o3.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nf.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o8.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eF.intl.string(eF.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(t2.$, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: u ? tQ.XSmallIcon : i0.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var o7 = n(365199);
let de = eW.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function dt(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(o3.rX, {
                          children: [
                              (0, i.jsx)(o3.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eF.intl.string(eF.t.b2nFyA),
                                  subtext: eF.intl.string(eF.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(o3.bX, {}),
                              (0, i.jsx)(o3.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eF.intl.string(eF.t.hvVgAZ),
                                  icon: tN.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tN.LinkExternalSmallIcon },
                                  action: () => window.open(de),
                              }),
                          ],
                      })
                    : null,
            [t, n, r],
        );
    return null == o
        ? null
        : (0, i.jsx)(b.f5, {
              value: a,
              children: (0, i.jsx)(nf.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(o8.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eF.intl.string(eF.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tA.q3, {
                          buttonRef: s,
                          icon: o7.MoreHorizontalIcon,
                          tooltipText: eF.intl.string(eF.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var dn = n(526725);
function di(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(o5, {
              title: eF.intl.string(eF.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(t2.$, {
              variant: "secondary",
              size: "sm",
              icon: tp.ShopIcon,
              text: eF.intl.string(eF.t["i/yzHs"]),
              onClick: n,
          });
}
function dl(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: r,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: dn.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(o5, {
                          title: eF.intl.string(eF.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(t2.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tk.PlusSmallIcon,
                          text: eF.intl.string(eF.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(dt, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function dr(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(t2.$, {
        variant: "primary",
        size: "sm",
        icon: tp.ShopIcon,
        text: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function ds(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, od.Us)() === T.BRT.OVERLAY,
        d = (0, ed.A)(n),
        u = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(dr, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(o5, {
                title: eF.intl.string(eF.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, d, a]);
    return (0, i.jsxs)("div", {
        className: dn.y7,
        children: [
            (0, i.jsxs)("div", {
                className: dn.q6,
                children: [
                    (0, i.jsx)(t0.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eF.intl.string(eF.t.HGnLLT),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eF.intl.string(eF.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != u) &&
                (0, i.jsxs)(or.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(t2.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tp.ShopIcon,
                                text: eF.intl.string(eF.t.ZbS4QB),
                                onClick: r,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function da(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: r,
            wishlist: s,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: d,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: c,
        } = e,
        g = s.id,
        m = (0, a.bG)([ee.A], () => ee.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, J.NJ)(),
        h = !1 === r.nsfwAllowed,
        [p, x] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && x(m.visibility === ol.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        I = (0, ov.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, ox.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = p ? ol.a.PRIVATE : ol.a.PUBLIC;
            (x(!p),
                oh.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: p ? ru.Mq.WISHLIST_TOGGLE_PRIVATE : ru.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, ox.y9)(s) : void 0,
                }));
        }, [g, p, f, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: dn.lm,
                    children: [
                        (0, i.jsx)(os.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: dn.lm,
                    children: [
                        (0, i.jsx)(sC.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: dn.U1,
                children: [
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eF.intl.format(eF.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(dl, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: p,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(di, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function dd(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sY.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: d } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, b.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, rW.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, oA.o.WISHLIST) : null),
                    [t],
                ),
                [o, d] = l.useState(void 0);
            (i || void 0 === o || d(void 0), i && null != t && null != r && void 0 === o && d(r.enabled ? s : null));
            let u = (0, a.bG)([rV.A, ee.A], () => null != t && (0, oI.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && u && null != t && (0, oI.U)(t);
                }, [i, c, u, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = sq(t.id),
        { wishlist: m, wasFetched: f, error: h } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [p, x] = l.useState(!1);
    (f && !p && x(!0), (0, op.A)(m));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([og.A], () => og.A.getDetectableIdsToApplicationIds()),
                d = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, oc.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                u = (0, om.w)({ userIds: s }),
                c = (0, om.mn)({ userIds: s }),
                g = (0, om.tR)(s),
                m = (0, om.rY)(),
                f = (0, om.qx)(),
                h = (0, om.px)();
            return l.useMemo(
                () => (0, r2.uniq)([...d, ...u, ...c, ...g, ...(r ? [...m, ...f, ...h] : [])].filter(ec.Vq)),
                [d, u, c, g, m, f, h, r],
            );
        })({ wishlist: m, profileOwner: t, currentUser: d }),
        I = (0, oa.A)(() => (0, oi.A)()),
        v = l.useCallback(() => {
            (0, tx.Cz)({ analyticsLocations: u, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [u]),
        y = l.useCallback((e) => {
            (0, of.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iP.M)(), (0, of.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, am.c)({
            userId: d?.id,
            skuId: iL.pe.TIER_2,
            nuxGraphic: ou.g,
            onNuxShow: oo.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == d || null != h) return null;
    let N = null == m || 0 === m.items.length;
    return (0, i.jsxs)(su, {
        scrollerRef: r,
        className: s()({ [dn.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(ds, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(aH, { scrollerRef: r }),
                          (0, i.jsx)(da, {
                              isOwner: d?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, ox.C3)(m, iL.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(o_, {
                              items: m.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(o2, {
                    user: t,
                    guildId: n,
                    wishlist: m,
                    hasFetchedWishlist: p,
                    analyticsLocations: u,
                    impressionSessionId: I,
                    className: N ? dn._E : dn.HZ,
                }),
        ],
    });
}
function du(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === ru.RP.ACTIVITY
        ? (0, i.jsx)(sg, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === ru.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sI, { user: t, guildId: s, channelId: a, onClose: o })
          : l === ru.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sy, { user: t, onClose: o })
            : l === ru.RP.WIDGETS
              ? (0, i.jsx)(on, { user: t, guildId: s, channelId: a })
              : l === ru.RP.WISHLIST
                ? (0, i.jsx)(dd, { profileOwner: t, guildId: s })
                : null;
}
function dc(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: s,
            channelId: o,
            items: d,
            initialSection: u,
            onClose: g,
        } = e,
        { trackUserProfileAction: h } = (0, J.NJ)(),
        { shouldLogExposure: p } = (0, rH.A)(t),
        { primaryColor: x } = (0, r$.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = d.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), h({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, h]);
    let [j, b] = l.useState(() => (d.find((e) => e.section === u) ?? d[0]).section),
        y = (0, a.bG)([lX.default, rD.A], () => {
            let e = rD.A.getAssignment("user", lX.default.getId(), rF.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (rU[e.variantId] ?? rG);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: d,
                    hasRecentActivity: u,
                } = rZ({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, rV.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = rV.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && rV.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === ru.RP.WIDGETS) &&
                      r.some((e) => e.section === ru.RP.WISHLIST) &&
                      !d &&
                      !u)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: d }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == u && C;
        (S(e), e && y.enabled && b(ru.RP.WISHLIST));
    }
    let N = d.find((e) => e.section === j) ?? d[0];
    return (
        N.section !== j && b(N.section),
        (0, i.jsxs)("div", {
            className: sd.kL,
            children: [
                p && (0, i.jsx)(rW.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(rB, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sd.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rL.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            rn.A.hasUnsavedChanges() && N.section === ru.RP.WIDGETS
                                ? (0, no.VQ)()
                                : (h({ action: "PRESS_SECTION", section: e }), b(e), S((e) => e ?? !1));
                        },
                        children: d.map((e) =>
                            (0, i.jsxs)(
                                rL.V.Item,
                                {
                                    className: sd.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eF.intl.formatToPlainString(eF.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(rw.N, { variant: A, className: sd.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rL.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: sd.NM,
                    children: (0, i.jsx)(f.F, {
                        component: (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: N.text }) }),
                        children: (0, i.jsx)(du, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: N.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var dg = n(933832),
    dm = n(972213);
let df = {
        [ru.jM.WIDGET_ADDED]: {
            message: eF.intl.string(eF.t.fFP1Uy),
            icon: (0, i.jsx)(dg.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [ru.jM.WIDGET_REMOVED]: {
            message: eF.intl.string(eF.t.zzsK7h),
            icon: (0, i.jsx)(dg.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [ru.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eF.intl.string(eF.t["84MExs"]),
            icon: (0, i.jsx)(dm.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [ru.jM.SOMETHING_WENT_WRONG]: {
            message: eF.intl.string(eF.t.F8FvUy),
            icon: (0, i.jsx)(dm.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    dh = (e) => {
        let { className: t } = e,
            n = (0, rd.fu)(),
            r = (0, a.bG)([sE.Ay], () => sE.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [d, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(df[n]), ni.O.announce(df[n].message)) : o(!1);
        }, [n]);
        let g = (0, u.p)(
            s,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            l.useEffect(() => () => (0, rd.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rd.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, i.jsx)(lT.animated.div, { className: t, style: e, children: (0, i.jsx)(rN, { ...d }) }),
                ),
            })
        );
    };
var dp = n(297413),
    dx = n(465829),
    dA = n(826673),
    dI = n(73392),
    dv = n(81400),
    dj = n(576705),
    db = n(997394);
function dy(e) {
    return null == e || "" === e ? void 0 : e;
}
function dC(e) {
    let t,
        n,
        r,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: h, displayProfile: x } = e,
        { analyticsLocations: A } = (0, b.Ay)(),
        I = x?.guildId != null,
        v = x?.guildId ?? void 0,
        j = $.Ay.canUsePremiumProfileCustomization(h),
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([dj.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: dj.A.can(T.xBc.CHANGE_NICKNAME, e) || dj.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !y && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: O,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([eI.Ay], () => (null != t ? (eI.Ay.getMember(t, h.id)?.nick ?? null) : null))),
        (d = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(t).pendingNickname)),
        (m = (g = void 0 !== (c = n ? u : d) ? c : n ? o : r) ?? ""),
        (f = n ? (dy(r) ?? h.username) : h.username),
        {
            value: m,
            previewValue: dy(g) ?? f,
            fallbackDisplayName: f,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, nx.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, nx.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        R = (0, a.bG)([ev.A], () => ev.A.getErrors(v ?? null)),
        _ = (0, dv.EC)(v ?? null),
        L = I ? R.nick?.[0] : R.global_name?.[0],
        w = _?.nick?.[0],
        M = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(v).pendingDisplayNameStyles),
        D = (0, t9.A)({ userId: h.id, guildId: v, pendingDisplayNameStyles: M }),
        G = (0, dI.a)({ displayNameStyles: D, compensateForSafari: !1 }),
        U = eF.intl.string(I ? eF.t.mq6Cg9 : eF.t.XuZU7A),
        F = I ? eF.intl.string(eF.t.YcDKr8) : h.username,
        B = l.useRef(null),
        W = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, dA.Dr)(eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eU.i.INDIRECT_ACTION,
                    }),
                    (0, nT.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: B }));
            },
            [A, v],
        ),
        H = {
            icon: tH.PaintbrushThinIcon,
            tooltip: eF.intl.string(eF.t.lqKKI2),
            "aria-label": eF.intl.string(eF.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        V = S
            ? (0, i.jsx)("span", {
                  className: db.Cs,
                  children: (0, i.jsx)(tJ.LockIcon, { size: "refresh_sm", color: p.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: rI.kL,
        children: (0, i.jsx)(eq.E, {
            variant: dx.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rp.w, {
                value: N,
                onCommit: O,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, t) => {
                    let { focused: n } = t;
                    return (0, i.jsx)(dx.c$, {
                        user: h,
                        guildId: v,
                        displayName: n ? (dy(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(db.dt, { [db.jW]: n && "" === e }),
                        displayNameTrailing: V,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: y && j ? H : void 0,
                error: L,
                helperText: S ? eF.intl.string(eF.t.gzjxQi) : w,
                disabled: !y,
            }),
        }),
    });
}
var dE = n(628072);
function dS(e) {
    let t,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: l.useCallback(
                (e) => {
                    (0, nx.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = u?.guildId != null,
        h = null != g && g.length > 0,
        p = eF.intl.string(f ? eF.t.AXiE0i : eF.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(rI.kL, rI.oE, dE.k),
        children: (0, i.jsx)(rp.w, {
            value: c,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: h ? (0, i.jsx)(dx.n2, { pronouns: g }) : null,
            label: eF.intl.string(eF.t["rniRE+"]),
            placeholder: p,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var dN = n(873200),
    dk = n(305866),
    dT = n(145497),
    dP = n(685073),
    dO = n(2967),
    dR = n(318785),
    d_ = n(534400),
    dL = n(152313),
    dw = n(830543),
    dM = n(415916),
    dD = n(743981),
    dG = n(295930),
    dU = n(594615);
let dF = "no-server-tag";
function dB(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e5.D, {
        innerRef: t,
        className: s()(dG.qJ, { [dG.wK]: o }),
        "aria-label": o ? eF.intl.string(eF.t.Pdd1nd) : eF.intl.formatToPlainString(eF.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eq.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: dG.W3,
            tag: "span",
            children: [
                o
                    ? eF.intl.string(eF.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  d_.Z9,
                                  {
                                      src: (0, dP.gC)(n, r, dD.Sl.SIZE_14),
                                      size: dD.Sl.SIZE_14,
                                      className: dG.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, dP.gC)(n, r, dD.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i0.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: dG.u4 }),
            ],
        }),
    });
}
function dW() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, dR.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, dO.Z)("UserProfileModalV2GuildTagSelect"),
        d = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        u = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, dP.Zo)(e?.primaryGuild);
        }),
        c = u.guildId ?? null,
        g = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingPrimaryGuildId),
        m = void 0 !== g ? g : c,
        f = null != m ? (d.get(m) ?? null) : null,
        h = null == f && m === c,
        p = f?.profile?.tag ?? (h ? (u.tag ?? null) : null),
        x = f?.profile?.badge ?? (h ? u.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === dF
                    ? (0, i.jsx)("div", {
                          className: dU.uN,
                          children: (0, i.jsx)(eq.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: dG.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(i7.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: dF, label: eF.intl.string(eF.t.VxdWWH), value: dF },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(dT.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(d_.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [n],
        ),
        v = 0 === n.length && null == c;
    if (v && !o) return null;
    function b(e) {
        (e(),
            (0, dM.A)(!0, () => {
                ((0, iP.M)(), (0, dw.default)(), (0, dL.A)(r, j.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(dN.a3, {
        label: eF.intl.string(eF.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eF.intl.string(eF.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nf.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(dk.l, {
                className: s()(dG.yt, { [dG.R4]: o && !v, [dG.Lo]: v }),
                "aria-label": eF.intl.string(eF.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: dG.p$,
                          children: [
                              (0, i.jsx)(eq.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eF.intl.string(eF.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(t2.$, {
                                  text: eF.intl.string(eF.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => b(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(dN.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, nx.p)({ primaryGuildId: e === dF ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: dG.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(t2.$, {
                                                text: eF.intl.string(eF.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => b(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(dN.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(dB, { buttonRef: e, guildId: m, guildTag: p, guildBadge: x, ...t }),
    });
}
var dH = n(956495);
function dV(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(dx.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function dz(e) {
    let t = (0, a.bG)([ev.A], () => ev.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(dV, { ...e, displayNameStylesOverride: t });
}
function dY(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(dp.A, {
                  user: t,
                  forceUsername: !0,
                  className: dH.a1,
                  usernameClass: dH.eb,
                  discriminatorClass: dH.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(dC, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(dH.AK, dH.j6),
                children: [r, (0, i.jsx)(dx.Ce, {}), (0, i.jsx)(dS, { displayProfile: n }), (0, i.jsx)(dW, {}), l],
            }),
        ],
    });
}
function dK(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(dV, { ...n });
        case "try-it-out":
            return (0, i.jsx)(dz, { ...n });
        case "edit":
            return (0, i.jsx)(dY, { ...n });
        default:
            return (0, ec.xb)(t);
    }
}
var dq = n(97808),
    dX = n(22231),
    dZ = n(601255),
    d$ = n(562819),
    dJ = n(253400),
    dQ = n(339984),
    d0 = n(329801),
    d1 = n(884362);
let d6 = dJ.Ay.getEnableHardwareAcceleration() ? dq.Js : dq.eu;
function d2(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function d4(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(o8.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.YAgq3W),
        children: (0, i.jsx)(o3.rX, { children: n }),
    });
}
function d3(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eV.V)(e),
        [d, u] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        m = l.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = null != n,
                c = (0, a.bG)([eI.Ay], () => (null != n ? eI.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : t.avatar,
                f = (0, ex.z5)(g, m),
                h = u && null != t.avatar,
                p = $.Ay.canUsePremiumProfileCustomization(t),
                x = p || null == n,
                A = p || null == n,
                I = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
                v = (0, ex.a4)({ user: t }),
                j = (0, ex.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, ex.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, dZ.A)(C ? y : j) && (C ? null != y : null != j),
                S = u && null != v,
                N = l.useCallback(() => {
                    (r(),
                        d2(() =>
                            (0, nt.XD)({
                                uploadType: dQ.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        d2(() =>
                            (0, d$.L)({
                                analyticsLocations: d,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, d, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nt.rM)(null, m, (e) => (0, nx.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ex.WU)(h ? "reset" : "remove"));
                }, [r, n, m, h]),
                P = l.useCallback(() => {
                    (r(), (0, nx.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                o3.Dr,
                                { id: "change-avatar", label: eF.intl.string(eF.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                o3.Dr,
                                { id: "change-decoration", label: eF.intl.string(eF.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            h
                                ? (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["9rx5GO"]),
                                          action: P,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [h, x, A, S, f, E, N, k, T, P]);
        })({ user: t, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, i.jsx)(eV.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(d0.my, d0.vk, d1.kL, { [d1.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, i.jsx)(d6, { ...r, imageClassName: s()(d0.Lw, d1.HU) }),
                  (0, i.jsx)(nf.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: nf.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, i.jsx)(d4, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: d1.r9,
                              children: (0, i.jsx)(tV.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dX.PencilIcon,
                                  "aria-label": eF.intl.string(eF.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var d8 = n(514905);
function d9(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(o8.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.FzU73A),
        children: (0, i.jsx)(o3.rX, { children: n }),
    });
}
function d5(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        d = l.useRef(null),
        u = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = (0, ex.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, ex.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, ex.Xf)({ user: t, guildId: void 0 }),
                m = $.Ay.canUsePremiumProfileCustomization(t),
                f = null == n,
                h = f || m,
                p = f || m,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([ee.A], () =>
                    null != n ? ee.A.getGuildMemberProfile(t.id, n)?.banner : ee.A.getUserProfile(t.id)?.banner,
                ),
                y = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, ex.Ac)(A, j),
                k = x && y,
                T = x && E,
                P = x && S,
                O = void 0 === I ? null != u : null != I,
                R = void 0 === v ? null != c : null != v,
                _ = (0, ex.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, L.A)(_?.skuId),
                M = l.useCallback(() => {
                    (r(),
                        (0, nt.XD)({
                            uploadType: dQ.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                D = l.useCallback(() => {
                    (r(),
                        (0, n$.W)({
                            analyticsLocations: d,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, n, u, s]),
                G = l.useCallback(() => {
                    (r(), (0, nt.rM)(null, j, (e) => (0, nx.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, nx.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, ir.w)({
                            analyticsLocations: d,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, n, w, s]),
                B = l.useCallback(() => {
                    (r(), (0, nx.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, i.jsx)(
                                o3.Dr,
                                { id: "change-banner", label: eF.intl.string(eF.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                o3.Dr,
                                { id: "change-effect", label: eF.intl.string(eF.t["/6nv6N"]), action: D },
                                "change-effect",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                o3.Dr,
                                { id: "change-frame", label: eF.intl.string(eF.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    m &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      o3.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, h, p, T, P, N, O, R, M, D, F, G, U, B]);
        })({ user: t, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, i.jsx)(eY.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(d8.kL, { [d8.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eY.A, { ...e, className: d8.Pr }),
                  (0, i.jsx)(nf.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: nf.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(d9, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: d,
                              className: d8.r9,
                              children: (0, i.jsx)(tV.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dX.PencilIcon,
                                  "aria-label": eF.intl.string(eF.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var d7 = n(419341),
    ue = n(776879),
    ut = n(837531),
    un = n(186272),
    ui = n(447538);
let ul = (e) => e * (2 - e),
    ur = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function us(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function ua(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, es.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: ui.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function uo(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n0.add(e), () => n0.delete(e)),
            () => n1,
        );
    return null == s ? null : (0, i.jsx)(R.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function ud(e) {
    var t;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: h,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: v,
            onCreateTag: j,
            avatarDecorationOverride: b,
            avatarOverride: C,
            bannerOverride: E,
            accentColorOverride: S,
            profileEffectOverride: N,
            profileFrame: k,
            fadeInProfileFrame: P,
            editingMode: O,
            isLoading: R = !1,
        } = e,
        _ = o.id === d.id,
        L = "edit" === O,
        w = l.useRef(null),
        D = l.useRef(null),
        G = l.useRef(null);
    l.useEffect(() => {
        if (_) return () => y.A.setState({ isOpen: !1 });
    }, [_]);
    let { isHoveringOrFocusing: H } = (0, U.A)(w),
        [z, Y] = l.useState(),
        X = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, X, [], { fireOnMount: !0 });
    let $ = null != z ? ur[z] : void 0,
        J = l.useMemo(() => A ?? (0, F.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, en.bG)([el.default], () => el.default.locale)),
            (r = (0, en.bG)([K.A], () => (K.A.getRelationshipType(t) === T.eA$.FRIEND ? K.A.getSince(t) : null), [t])),
            (0, ei.An)(r, n)),
        er = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        es = (0, W.q)({ userId: o.id }),
        em = (0, B.fi)(o.id),
        { appIdentities: ef, connections: eh } = (function (e) {
            let { filteredAppIdentities: t } = (0, eu.A)(e),
                n = (0, eg.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, ed.A)([...i]).filter(ec.Vq);
            return {
                appIdentities: l.useMemo(
                    () =>
                        t
                            .map((e) => ({ identity: e, application: r.find((t) => t.id === e.application_id) }))
                            .filter((e) => {
                                let { application: t } = e;
                                return null != t;
                            }),
                    [t, r],
                ),
                connections: l.useMemo(
                    () =>
                        n.filter((e) => {
                            let t = eo.A.get(e.type);
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        ep = (0, ea.A)(o.id),
        ex = eh.length > 0 || ef.length > 0,
        eA = ep.length > 0,
        eI = L ? d5 : eY.A,
        ev = h?.guildId ?? u,
        ey = {
            user: o,
            displayProfile: h,
            guildId: u,
            channelId: f,
            avatarSize: $?.avatarSize ?? eb.T[ej.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: b,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e8.A)({ user: o, guildId: ev, alt: p });
        }, [p, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(ui.profile, null != z && ui[z]),
        ref: w,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: ui.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: ui.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: h,
                            guildId: u,
                            themeType: ej.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    L
                        ? (0, i.jsx)(d3, { ...ey })
                        : (0, i.jsx)(eV.A, {
                              ...ey,
                              onOpenAvatar: "read-only" === O ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === O && null == C ? iz.$T : void 0,
                          }),
                    (0, i.jsx)(e4.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: x,
                        prompt: _ ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: ui.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(dK, {
                                user: o,
                                displayProfile: h,
                                nickname: p,
                                trailing: (0, i.jsx)(ez.A, {
                                    displayProfile: h,
                                    themeType: ej.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: _,
                                    popoutAnchorRef: x ? D : void 0,
                                    containerRef: G,
                                }),
                                onClose: v,
                                onCreateTag: j,
                                editingMode: O,
                            }),
                            (0, i.jsx)("div", { ref: D }),
                            _ &&
                                x &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eH, { targetElementRef: G }),
                                        (0, i.jsx)(eB, { targetElementRef: G }),
                                    ],
                                }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: ui.profileOverlay,
                            children: (0, i.jsx)(e$.A, {
                                user: o,
                                applicationId: ee,
                                guildId: h?.guildId ?? void 0,
                                channelId: f,
                                className: ui.profileBanner,
                            }),
                        }),
                    em.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e2.A.Overlay,
                            {
                                className: ui.profileOverlay,
                                children: (0, i.jsx)(e$.A, {
                                    user: o,
                                    guildId: h?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: ui.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: ui.profileOverlay,
                            children: (0, i.jsx)(rb.A, {
                                heading: eF.intl.string(eF.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: ui.profileBanner,
                                children: (0, i.jsx)(V.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e6.A, { user: o, className: ui.profileBanner }),
                    h?.private &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: ui.profileOverlay,
                            children: (0, i.jsx)(e1.A, { username: p }),
                        }),
                    (0, i.jsx)("div", {
                        className: ui.profileButtons,
                        children: (0, i.jsx)(ty, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: h,
                            relationshipType: Q,
                            onClose: v,
                        }),
                    }),
                    _ && "try-it-out" !== O && (0, i.jsx)(eK.A, { isPremiumUser: (0, Z.ki)(d) }),
                    !er && (0, i.jsx)(td.A, { currentUser: d, displayProfile: h, canEditInPlace: L }),
                    es.length > 0 &&
                        (0, i.jsx)(rb.A, {
                            heading: eF.intl.string(eF.t["Uv/eTx"]),
                            children: (0, i.jsx)(eZ.A, { applicationIds: es }),
                        }),
                    (0, i.jsx)(rb.A, {
                        heading: eF.intl.string(eF.t.a6XYD9),
                        children: (0, i.jsx)(eQ.A, { userId: o.id, guildId: h?.guildId, tooltipDelay: 300 }),
                    }),
                    null != et &&
                        (0, i.jsx)(rb.A, {
                            heading: eF.intl.string(eF.t.wlTO8v),
                            children: (0, i.jsx)(eX, { friendsSinceDate: et }),
                        }),
                    h?.guildId != null &&
                        (0, i.jsx)(e3.A, {
                            userId: o.id,
                            guildId: h.guildId,
                            className: ui.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !er &&
                        (L || ex) &&
                        (0, i.jsx)(rb.A, {
                            heading: eF.intl.string(eF.t["3fe7U5"]),
                            scrollTargetId: ru.bk.CONNECTIONS,
                            children: (0, i.jsx)(tW, {
                                applicationIdentities: ef,
                                connections: eh,
                                userId: o.id,
                                allowEditing: L,
                                className: ui.profileAppConnections,
                            }),
                        }),
                    !er &&
                        eA &&
                        (0, i.jsx)(rb.A, {
                            heading: eF.intl.string(eF.t.PHjkRE),
                            scrollTargetId: ru.bk.APPS,
                            children: (0, i.jsx)(to, {
                                applicationRoleConnections: ep,
                                onClose: v,
                                className: ui.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rC, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(uo, { displayProfile: h, profileEffectOverride: N, isHovering: H }),
            null != k && (0, i.jsx)(M.A, { frame: k, filterLayer: us, fadeIn: P }),
        ],
    });
}
function uu(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: d,
        } = (0, er.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eh.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, i.jsx)("div", { className: c, style: u, children: s });
}
function uc(e) {
    let t,
        n,
        r,
        {
            user: d,
            currentUser: c,
            guildId: g,
            originGuildId: I,
            channelId: y,
            messageId: R,
            roleId: M,
            sessionId: U,
            initialTabSection: F,
            initialScrollTarget: B,
            transitionState: W,
            customStatusPrompt: V,
            openedAt: K,
            onClose: Z,
            sourceAnalyticsLocations: en = [],
            themeContainerClassName: ei,
        } = e,
        el = d.id === c.id,
        er = l.useCallback(() => (0, dM.A)(el, Z), [el, Z]),
        es = l.useCallback(
            (e) =>
                (0, dM.A)(el, () => {
                    (Z(), e());
                }),
            [el, Z],
        ),
        {
            guildId: ea,
            pendingGuildId: eo,
            isFetching: ed,
            handleSelectUserProfile: eu,
            handleRetry: ec,
            hasError: eg,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [d, u] = l.useState("idle"),
                [c, g] = l.useState(0),
                m = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
                f = l.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                h = l.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                l.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ep.A)(t, void 0, {
                            type: "modal",
                            guildId: i,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(i), u("idle"));
                            },
                            () => {
                                e || (o(i), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [i, t, c]),
                {
                    guildId: s,
                    pendingGuildId: i,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: h,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: d.id, initialGuildId: g }),
        eh = l.useMemo(() => (null != ea ? { [ea]: [d.id] } : {}), [ea, d.id]);
    (0, v.Eq)(eh, "UserProfileModalV2");
    let eb = tZ(),
        eN = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        ek = (0, em.A)(d.id),
        eT = (0, ef.W)(d.id),
        eP = eg && !eT,
        eO = ek && !eN && !eg && !eb,
        eR = eb ? "try-it-out" : eO ? "edit" : "read-only",
        {
            pendingThemeColors: e_,
            avatarDecorationOverride: eL,
            avatarOverride: ew,
            bannerOverride: eM,
            accentColorOverride: eD,
            profileEffectOverride: eG,
            profileFrameOverride: eU,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [ev.A, C.default, eI.Ay, ee.A],
                () => {
                    if ("read-only" === i) return eC;
                    let e = C.default.getUser(t);
                    if (null == e) return eC;
                    let l = ev.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === i
                                ? {
                                      pendingThemeColors: l.tryItOutThemeColors,
                                      pendingAvatar: l.tryItOutAvatar,
                                      pendingBanner: l.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : ev.A.getPendingChanges(n),
                        s = null != n ? eI.Ay.getMember(n, t) : null,
                        a = ee.A.getUserProfile(t),
                        o = null != n ? ee.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ex.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, eA.V7)({ userId: t, image: r.pendingAvatar, size: ey }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ex.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, ex.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: d.id, guildId: ea, editingMode: eR }),
        {
            isExpanded: eB,
            isAnimating: eW,
            transition: eH,
            handleExpand: eV,
            handleCollapse: ez,
            refs: { expandIconButtonRef: eY, expandTabButtonRef: eK, collapseButtonRef: eq },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ul },
                    onRest: () => i(!1),
                }),
                s = (0, A.A)("(min-width: 929px) and (min-height: 550px)"),
                a = l.useRef(null),
                o = l.useRef(null),
                d = l.useRef(null),
                c = l.useRef(null),
                g = l.useCallback(() => {
                    ((c.current = "collapse"), i(!0), t(!0));
                }, []),
                m = l.useCallback(() => {
                    ((c.current = "expand"), i(!0), t(!1));
                }, []);
            return (
                l.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, n, s]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eX = ek && !eB,
        eZ = ek && (!eB || eW),
        { defaultWishlistId: e$ } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(d.id) }));
    ((0, z.fw)({ wishlistId: e$, userId: d.id }),
        (t = (0, O.D)("edit_profile_preload")),
        (n = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([P.A], () => P.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t &&
                null != n &&
                r &&
                (async function () {
                    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
                    try {
                        let e = await E.Bo.get({
                            url: "/storefront/recommended-items",
                            query: { application_ids: [T.FYj], limit: 100 },
                            rejectWithError: !0,
                        });
                        S.h.dispatch({
                            type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS",
                            recommendation: {
                                skuIds: e.body.recommended_items.map((e) => {
                                    let { sku_id: t } = e;
                                    return t;
                                }),
                            },
                        });
                    } catch (t) {
                        let e = new N.LG(t);
                        ((0, k.o)(e), S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" }));
                    }
                })();
        }, [t, n, r]));
    let eQ = (0, eS.fC)(),
        e1 = eP && (!ek || !ed),
        e6 = ek && eg,
        e4 = eo !== ea || e6 || null != eQ.interactionType,
        e3 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sf.A)(t),
                r = l?.length,
                s = (0, ue.A)(t),
                a = (0, sK.A)(t.id),
                o = (0, d7.A)(t),
                { hasNewWishlistItems: d } = (0, rH.A)(t),
                u = [],
                c = t.id === n?.id,
                g = sq(t.id),
                m = a.length > 0;
            return (
                (g || m) && u.push({ text: eF.intl.string(eF.t.laViwx), section: ru.RP.WIDGETS }),
                u.push({ text: eF.intl.string(eF.t.chq59f), section: ru.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eF.intl.string(eF.t["7lZ31J"]), section: ru.RP.WISHLIST, showNewContentDot: d }),
                t.id !== n?.id &&
                    s &&
                    (u.push({ text: (0, ut.A)(i), section: ru.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, un.A)(r), section: ru.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: d, currentUser: c }),
        { analyticsLocations: e8 } = (0, b.Ay)([...en, j.A.USER_PROFILE_MODAL_V2]),
        e9 = (0, J.pb)({
            layout: "MODAL_V2",
            userId: d.id,
            sourceSessionId: U,
            guildId: ea,
            channelId: y,
            messageId: R,
            roleId: M,
        }),
        e5 = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e8, ...e9, action: ru.pt.SHOW_STYLES_PANEL }), eV());
        }, [e8, e9, eV]),
        e7 = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e8, ...e9, action: ru.pt.HIDE_STYLES_PANEL }), ez());
        }, [e8, e9, ez]),
        te = (0, et.Ay)(d.id, ea);
    (0, H.A)(e8, te, ru.R7.MODAL_V2);
    let tt = void 0 !== eU ? eU?.skuId : te?.profileFrame?.skuId,
        tn = (0, L.A)(tt),
        ti = (0, _.A)(tt),
        { profileFrameStyle: tl, profileFrameClassName: tr } = (0, D.A)(tn);
    (0, w.A)({ skuId: te?.profileFrame?.skuId, openedAt: K, context: e9, analyticsLocations: e8 });
    let ts = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        ta = eb || (el && null != te && ts),
        to = X.Ay.useName(te?.guildId, y, d),
        td = (0, G.GV)(),
        tu = (0, a.bG)([Y.A], () => (null != ea ? Y.A.getGuild(ea) : null)),
        tc = el
            ? null != tu
                ? eF.intl.formatToPlainString(eF.t.M7OhOF, { guildName: tu.name })
                : eF.intl.string(eF.t.egQPgM)
            : eF.intl.format(eF.t.KRe1Fk, { name: to });
    return (0, i.jsx)(b.f5, {
        value: e8,
        children: (0, i.jsx)(J.of, {
            value: e9,
            openedAt: K,
            fetchStartedAt: te?.fetchStartedAt,
            fetchEndedAt: te?.fetchEndedAt,
            isLoaded: te?.isLoaded,
            children: (0, i.jsx)(eS.Hl, {
                value: eQ,
                children: (0, i.jsx)(eE.N, {
                    value: B,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iz.zr, { [iz.QF]: te?.private === !0 }),
                        transitionState: W,
                        "aria-labelledby": td,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(r_, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(ui.layoutContainer, tr, {
                                        [ui.editingPanelEnabled]: ek,
                                        [ui.editingPanelExpanded]: ek && eB,
                                        [ui.isAnimating]: eW,
                                    }),
                                    style: tl,
                                    children: [
                                        (0, i.jsxs)(uu, {
                                            user: d,
                                            displayProfile: te,
                                            pendingThemeColors: e_,
                                            forceShowPremium: ta,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iz.Oo,
                                                    children: [
                                                        (0, i.jsx)(tC.A, { onClose: er }),
                                                        (0, i.jsx)(m.A, {
                                                            children: (0, i.jsx)(f.H, { id: td, children: tc }),
                                                        }),
                                                        eZ &&
                                                            (0, i.jsx)(lz, {
                                                                buttonRef: eY,
                                                                onClick: e5,
                                                                className: ui.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eX &&
                                                    (0, i.jsx)("div", {
                                                        className: ui.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lV, {
                                                            innerRef: eK,
                                                            onClick: e5,
                                                            className: ui.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(f.F, {
                                            children: [
                                                ek &&
                                                    eH((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lY, {
                                                                  className: s()(ui.editingPanel, {
                                                                      [ui.isExpanded]: eB,
                                                                  }),
                                                                  selectedGuildId: eo,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: eu,
                                                                  onClose: e7,
                                                                  collapseButtonRef: eq,
                                                                  isLoading: ed,
                                                                  isEditingDisabled: eg,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e2.A, {
                                                    className: s()(ei, iz.A7, ui.profileContentOuter),
                                                    innerClassName: ui.profileContentInner,
                                                    user: d,
                                                    displayProfile: te,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: e_,
                                                    isPrivate: te?.private === !0,
                                                    forceShowPremium: ta,
                                                    children: [
                                                        (0, i.jsx)(ua, { displayProfile: te, pendingBanner: eM }),
                                                        te?.private === !0 && (0, i.jsx)(e0.A, {}),
                                                        !eP && (0, i.jsx)(dh, { className: ui.noticeContainer }),
                                                        e1 &&
                                                            (0, i.jsx)("div", {
                                                                className: ui.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rN, {
                                                                    icon: (0, i.jsx)(h.WarningIcon, {
                                                                        size: "sm",
                                                                        color: p.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eF.intl.string(eF.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ec
                                                                            ? eF.intl.string(eF.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ec,
                                                                    actionDisabled: !ek && ed,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: ui.profileCardToastContainer,
                                                            children: (0, i.jsx)(eJ.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rO, {
                                                            showScrim: e4,
                                                            showLoadingSpinner: ed,
                                                            className: ui.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(ud, {
                                                                    user: d,
                                                                    currentUser: c,
                                                                    guildId: ea,
                                                                    channelId: y,
                                                                    displayProfile: te,
                                                                    nickname: to,
                                                                    originGuildId: I,
                                                                    hasEntered: W === x.ip.ENTERED,
                                                                    customStatusPrompt: V,
                                                                    onClose: er,
                                                                    onCreateTag: es,
                                                                    avatarDecorationOverride: eL,
                                                                    avatarOverride: ew,
                                                                    bannerOverride: eM,
                                                                    accentColorOverride: eD,
                                                                    profileEffectOverride: eG,
                                                                    profileFrame: tn,
                                                                    fadeInProfileFrame: ti,
                                                                    editingMode: eR,
                                                                    isLoading: ed,
                                                                }),
                                                                (0, i.jsx)(dc, {
                                                                    user: d,
                                                                    currentUser: c,
                                                                    displayProfile: te,
                                                                    guildId: ea,
                                                                    channelId: y,
                                                                    items: e3,
                                                                    initialSection: F,
                                                                    onClose: er,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(rh, { userId: d.id, guildId: ea, className: ui.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ug(e) {
    return (0, i.jsx)(tX, { children: (0, i.jsx)(uc, { ...e }) });
}
