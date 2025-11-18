n.d(t, {
    Z: () => eL,
    d: () => ew,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(828700),
    o = n(55160),
    c = n(990547),
    u = n(91192),
    d = n(873546),
    p = n(442837),
    f = n(704215),
    h = n(970683),
    g = n(952265),
    m = n(194983),
    _ = n(681715),
    b = n(481060),
    E = n(493683),
    O = n(529103),
    y = n(515753),
    v = n(831218),
    I = n(339149),
    C = n(607070),
    S = n(557968),
    T = n(213609),
    N = n(463119),
    j = n(377171),
    P = n(211644),
    x = n(426032),
    A = n(243778),
    Z = n(702456),
    w = n(882579),
    L = n(518311),
    R = n(518929),
    D = n(488634),
    M = n(899740),
    k = n(28476),
    U = n(880257),
    G = n(631885),
    B = n(365113),
    H = n(849862),
    V = n(522558),
    F = n(441623),
    z = n(382834),
    Y = n(675957),
    W = n(93237),
    q = n(138176),
    K = n(457396),
    Q = n(108989),
    J = n(362870),
    X = n(51596),
    $ = n(905423),
    ee = n(155409),
    et = n(210887),
    en = n(695346),
    er = n(283595),
    ei = n(923834),
    el = n(55563),
    ea = n(774343),
    es = n(974042),
    eo = n(626135),
    ec = n(814225),
    eu = n(981631),
    ed = n(675654),
    ep = n(921944),
    ef = n(474936),
    eh = n(388032),
    eg = n(597754),
    em = n(443226);
function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eO = (e) => {
        var { selected: t } = e,
            n = eE(e, ["selected"]);
        let i = (0, R.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: em.friendsButtonContainer,
                  children: (0, r.jsx)(
                      y.Qj,
                      e_(
                          {
                              selected: t,
                              route: eu.Z5c.ICYMI,
                              icon: b.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      eh.intl.string(eh.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: em.preAlphaText,
                                          children: eh.intl.string(eh.t.Ac2OZA),
                                      }),
                                  ],
                              }),
                          },
                          n,
                          l,
                      ),
                  ),
              })
            : null;
    },
    ey = (e) => {
        var { selected: t } = e,
            n = eE(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, H.If)(),
            s = (0, p.e7)([F.Z], () => F.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([C.Z], () => C.Z.useReducedMotion),
            { enabled: d } = V.w.useConfig({ location: "Friends Tab" }),
            [g, m] = (0, x.bf)(s && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: F.n }),
            E = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            E &&
                (0, T.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ef.hX.FRIEND_ANNIVERSARY },
                });
        }, [E]);
        let v = () => {
                let e;
                E
                    ? (eo.default.track(eu.rMx.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: ef.hX.FRIEND_ANNIVERSARY,
                      }),
                      (e = eu.pJs.ALL),
                      O.Z.setSection(eu.pJs.ALL),
                      m(ep.L.TAKE_ACTION))
                    : (e = es.ZP.getState().section),
                    (0, S.Z)({ tab_opened: e });
            },
            [I, N] = i.useState(!1),
            j = () => {
                N(!1);
            },
            P = () => {
                N(!0);
            },
            A = () =>
                (0, r.jsx)(
                    y.Qj,
                    eb(
                        e_(
                            {
                                onClick: v,
                                interactiveClassName: E ? em.friendsBadge : void 0,
                                selected: t,
                                route: eu.Z5c.FRIENDS,
                                icon: b.iFz,
                                text: eh.intl.string(eh.t.TdEu5X),
                                onMouseEnter: P,
                                onMouseLeave: j,
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(b.mAB, { count: a }) : null },
                    ),
                );
        return (0, r.jsx)("div", {
            className: em.friendsButtonContainer,
            children: E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(_.i_, {
                              title: eh.intl.string(eh.t.Thb5MO),
                              body: eh.intl.string(eh.t.kGvgwS),
                              position: "left",
                              asset: (0, r.jsx)(h.$K, {
                                  size: 32,
                                  alt: eh.intl.string(eh.t["4LohBA"]),
                              }),
                              children: A(),
                          }),
                          !o &&
                              (0, r.jsx)(Q.Z, {
                                  className: em.confetti,
                                  wind: 0,
                                  sprites: ed.CA,
                                  spriteColors: ed.Br,
                                  firing: I,
                                  confettiConfig: {
                                      opacity: {
                                          type: "static",
                                          value: 1,
                                      },
                                      dragCoefficient: {
                                          type: "static",
                                          value: {
                                              x: 100,
                                              y: 100,
                                          },
                                      },
                                  },
                              }),
                      ],
                  })
                : A(),
        });
    },
    ev = (e) => {
        var { selected: t } = e,
            n = eE(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: em.friendsButtonContainer,
            children: (0, r.jsx)(
                y.Qj,
                e_(
                    {
                        selected: t,
                        route: eu.Z5c.ME_ACTIVITY,
                        icon: b.g8d,
                        text: eh.intl.string(eh.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    eI = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eE(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            y.Qj,
            eb(
                e_(
                    {
                        selected: t,
                        route: eu.Z5c.APPLICATION_LIBRARY,
                        icon: b.vqy,
                        text: eh.intl.string(eh.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(I.Z, {
                        className: a()(em.downloadProgressCircle, { [em.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eC = () =>
        (0, r.jsx)("li", {
            className: em.createDMButtonContainer,
            children: (0, r.jsx)(L.l, {
                fullWidth: !0,
                text: eh.intl.string(eh.t["6Urw1t"]),
                icon: b.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eS = () => {
        let e = (0, M.q)();
        return e > 0 ? (0, r.jsx)(b.mAB, { count: e }) : null;
    },
    eT = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, D._)();
        if (!(0, k.a)()) return null;
        let l = null == i ? void 0 : () => E.Z.preload(eu.ME, i);
        return (0, r.jsx)(
            y.Qj,
            eb(
                e_(
                    {
                        selected: t,
                        route: eu.Z5c.MESSAGE_REQUESTS,
                        icon: b._XJ,
                        text: eh.intl.string(eh.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eS, {}) },
            ),
        );
    },
    eN = (e) => {
        let { selected: t } = e,
            n = eh.intl.string(eg.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            y.Qj,
            eb(
                e_(
                    {
                        selected: t,
                        route: eu.Z5c.FAMILY_CENTER,
                        icon: b.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: em.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(ej, { isParentHovered: a }) },
            ),
        );
    },
    ej = (e) => {
        let { isParentHovered: t } = e,
            i = (0, G.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: em.familyCenterButtonContainer,
                  children: (0, r.jsx)(y.bU, {
                      onClick: () => {
                          (0, g.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, e_({}, t));
                          });
                      },
                      "aria-label": eh.intl.string(eh.t.cpT0Cq),
                      icon: b.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(em.familyCenterButtonContainer, em.withPadding),
                    children: (0, r.jsx)(b.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: em.familyCenterButtonContainer,
                    children: (0, r.jsx)(A.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(b.IGR, {
                                      text: eh.intl.string(eh.t.y2b7CA),
                                      color: j.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eP = () =>
        (0, r.jsxs)("div", {
            className: em.directMessagesHeader,
            children: [
                (0, r.jsx)(b.Text, {
                    variant: "text-md/semibold",
                    children: eh.intl.string(eh.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: em.directMessagesButton,
                    children: (0, r.jsx)(L.Z, {
                        tooltip: eh.intl.string(eh.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    ex = () => (0, X.$Z)("DM_SEARCH");
function eA(e) {
    switch (e) {
        case eu.Z5c.APPLICATION_LIBRARY:
            return eu.ZY5.LIBRARY;
        case eu.Z5c.FRIENDS:
            return eu.ZY5.FRIENDS_LIST;
        case eu.Z5c.COLLECTIBLES_SHOP:
            return eu.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(eu.Z5c.APPLICATION_STORE)
        ? e === eu.Z5c.APPLICATION_STORE
            ? eu.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(eu.Z5c.APPLICATION_STORE)
              ? eu.ZY5.STORE_DIRECTORY_BROWSE
              : eu.ZY5.STORE_LISTING
        : eu.ZY5.DM_CHANNEL;
}
let eZ = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: s,
            shouldShowNitroTab: o,
            showReferralProgramPopover: c,
            showRecurring3PPopover: u,
            shouldShowMessageRequestsRow: p,
            shouldShowFamilyCenterRow: f,
            createDMButtonVariant: h,
            selectedChannelId: g,
            path: _,
            onlyShowDMs: E,
            hideAllDMs: O,
        } = e,
        y = i.useRef(null),
        I = i.useRef(null),
        C = i.useRef(null),
        S = i.useRef(null),
        T = B.o.useConfig({ location: "privatechannels" }).friendsTab,
        j = (0, R.b5)("PrivateChannels"),
        P = null;
    return (
        c ? (P = (0, r.jsx)(q.F, { targetElementRef: S })) : u && (P = (0, r.jsx)(z.d, { targetElementRef: S })),
        (0, r.jsxs)("nav", {
            className: em.privateChannels,
            "aria-label": eh.intl.string(eh.t.ZH9aP4),
            children: [
                E
                    ? (0, r.jsx)(eP, {})
                    : (0, r.jsx)(ee.Z, {
                          childRef: y,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: y,
                              className: a()(em.searchBar, { [em.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(b.Button, {
                                  fullWidth: !0,
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: ex,
                                  text: eh.intl.format(eh.t.fH9FBy, {
                                      tooltipHook: (e, t) => (0, r.jsx)(m.Z, { children: e }, t),
                                  }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    v.Z,
                    eb(e_({}, e), {
                        version: _,
                        selectedChannelId: g,
                        showDMHeader: !O && !E,
                        hideAllDMs: O,
                        listScrollerRef: C,
                        createDMCTAButtonVariant: h,
                        children: [
                            T && !E
                                ? (0, r.jsx)(
                                      ev,
                                      { selected: null != _ ? _ === eu.Z5c.ME_ACTIVITY : l === eu.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      ey,
                                      { selected: null != _ ? _ === eu.Z5c.FRIENDS : l === eu.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !E && j
                                ? (0, r.jsx)(
                                      eO,
                                      { selected: null != _ ? _ === eu.Z5c.ICYMI : l === eu.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !E
                                ? (0, r.jsx)(
                                      eI,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.APPLICATION_LIBRARY)
                                                  : _.startsWith(eu.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === eu.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !E
                                ? (0, r.jsx)(
                                      eT,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.MESSAGE_REQUESTS)
                                                  : _ === eu.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            o && !E
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(K.g, {
                                                  nitroTabButtonRef: S,
                                                  selected: null == _ ? s : _.startsWith(eu.Z5c.APPLICATION_STORE),
                                                  route: eu.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: eA(l),
                                                          section: eu.jXE.NAVIGATION,
                                                          object: eu.qAy.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              P,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      N.i,
                                      {
                                          selected:
                                              _ === eu.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(eu.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: I,
                                          locationState: {
                                              analyticsSource: {
                                                  page: eA(l),
                                                  section: eu.jXE.NAVIGATION,
                                                  object: eu.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !E
                                ? (0, r.jsx)(
                                      eN,
                                      {
                                          selected:
                                              (null != l && l.startsWith(eu.Z5c.FAMILY_CENTER)) ||
                                              (null != _ && _.startsWith(eu.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      J.Z,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(eu.Z5c.QUEST_HOME_V2)
                                                  : _ === eu.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            E || O ? null : (0, r.jsx)(ew, {}, "section-divider-top"),
                            O ? null : (0, r.jsx)(Z.Z, {}, "frequent-friends"),
                            "full-width" !== h || O || E ? null : (0, r.jsx)(eC, {}, "create-dm"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function ew() {
    return (0, r.jsx)("div", { className: em.sectionDivider });
}
function eL() {
    let e = (0, p.e7)([ea.Z], () => ea.Z.getHomeLink()),
        t = (0, p.e7)([el.Z], () => {
            if (e === eu.Z5c.APPLICATION_STORE) return !0;
            let t = (0, ec.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = el.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !en.bm.useSetting(),
        { theme: i } = (0, p.cj)([et.Z], () => ({ theme: et.Z.theme })),
        l = (0, p.e7)([er.Z], () => er.Z.hasLibraryApplication()),
        a = (0, p.e7)([ei.Z], () => ei.Z.getCurrentPath()),
        [c, u] = (0, $.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        d = (0, K.i)({ selected: null == u ? t : u.startsWith(eu.Z5c.APPLICATION_STORE) }),
        h = (0, W.eW)(),
        g = (0, Y._h)(),
        m = [];
    (0, P.Kl)() && (h && m.push(f.z.REFERRAL_PROGRAM_POPOVER), g && m.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, x.US)(m, void 0, !0),
        E = (0, k.a)(),
        O = (function () {
            let e = en.Ex.useSetting(),
                t = (0, U.Z)();
            return !0 === e && !0 === t;
        })(),
        y = (0, w.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: v } = (0, s.TH)(),
        I = v.startsWith(eu.Z5c.CHANNEL(eu.ME)) && v !== eu.Z5c.CHANNEL(eu.ME) && v !== eu.Z5c.ME_ACTIVITY,
        C = B.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eZ, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: d,
        showReferralProgramPopover: _ === f.z.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: _ === f.z.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: E,
        shouldShowFamilyCenterRow: O,
        createDMButtonVariant: y,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: I && C,
        hideAllDMs: !I && C,
    });
}
