n.d(t, {
    Z: () => eA,
    d: () => ex,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(828700),
    s = n(55160),
    c = n(990547),
    u = n(91192),
    d = n(873546),
    p = n(442837),
    f = n(704215),
    g = n(692547),
    h = n(970683),
    m = n(952265),
    b = n(194983),
    _ = n(681715),
    E = n(481060),
    O = n(493683),
    v = n(529103),
    y = n(515753),
    I = n(831218),
    C = n(339149),
    S = n(607070),
    T = n(557968),
    N = n(213609),
    j = n(463119),
    P = n(211644),
    x = n(243778),
    A = n(702456),
    Z = n(518311),
    w = n(518929),
    L = n(488634),
    R = n(899740),
    D = n(28476),
    M = n(880257),
    k = n(631885),
    U = n(365113),
    G = n(849862),
    H = n(522558),
    B = n(441623),
    V = n(382834),
    F = n(675957),
    z = n(93237),
    Y = n(138176),
    W = n(457396),
    q = n(108989),
    K = n(222850),
    Q = n(51596),
    J = n(905423),
    X = n(155409),
    $ = n(210887),
    ee = n(695346),
    et = n(283595),
    en = n(923834),
    er = n(55563),
    ei = n(774343),
    el = n(974042),
    ea = n(626135),
    eo = n(814225),
    es = n(981631),
    ec = n(675654),
    eu = n(921944),
    ed = n(474936),
    ep = n(388032),
    ef = n(517319),
    eg = n(497725);
function eh(e) {
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
function em(e, t) {
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
function eb(e, t) {
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
let e_ = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, w.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: eg.friendsButtonContainer,
                  children: (0, r.jsx)(
                      y.Qj,
                      eh(
                          {
                              selected: t,
                              route: es.Z5c.ICYMI,
                              icon: E.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ep.intl.string(ep.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: eg.preAlphaText,
                                          children: ep.intl.string(ep.t.Ac2OZA),
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
    eE = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, G.If)(),
            o = (0, p.e7)([B.ZP], () => B.ZP.canShowFriendsTabBadge()),
            s = (0, p.e7)([S.Z], () => S.Z.useReducedMotion),
            { enabled: d } = H.w.useConfig({ location: "Friends Tab" }),
            [g, m] = (0, x.bf)(o && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: B.n3 }),
            b = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            b &&
                (0, N.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ed.hX.FRIEND_ANNIVERSARY },
                });
        }, [b]);
        let O = () => {
                let e;
                b
                    ? (ea.default.track(es.rMx.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: ed.hX.FRIEND_ANNIVERSARY,
                      }),
                      (e = es.pJs.ALL),
                      v.Z.setSection(es.pJs.ALL),
                      m(eu.L.TAKE_ACTION))
                    : (e = el.ZP.getState().section),
                    (0, T.Z)({ tab_opened: e });
            },
            [I, C] = i.useState(!1),
            j = () => {
                C(!1);
            },
            P = () => {
                C(!0);
            },
            A = () =>
                (0, r.jsx)(
                    y.Qj,
                    em(
                        eh(
                            {
                                onClick: O,
                                interactiveClassName: b ? eg.friendsBadge : void 0,
                                selected: t,
                                route: es.Z5c.FRIENDS,
                                icon: E.iFz,
                                text: ep.intl.string(ep.t.TdEu5X),
                                onMouseEnter: P,
                                onMouseLeave: j,
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(E.mAB, { count: a }) : null },
                    ),
                );
        return (0, r.jsx)("div", {
            className: eg.friendsButtonContainer,
            children: b
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(_.i_, {
                              title: ep.intl.string(ep.t.Thb5MO),
                              body: ep.intl.string(ep.t.kGvgwS),
                              position: "left",
                              asset: (0, r.jsx)(h._N, {
                                  size: 32,
                                  alt: ep.intl.string(ep.t["4LohBA"]),
                              }),
                              children: A(),
                          }),
                          !s &&
                              (0, r.jsx)(q.Z, {
                                  className: eg.confetti,
                                  wind: 0,
                                  sprites: ec.CA,
                                  spriteColors: ec.Br,
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
    eO = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: eg.friendsButtonContainer,
            children: (0, r.jsx)(
                y.Qj,
                eh(
                    {
                        selected: t,
                        route: es.Z5c.ME_ACTIVITY,
                        icon: E.g8d,
                        text: ep.intl.string(ep.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    ev = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eb(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            y.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.APPLICATION_LIBRARY,
                        icon: E.vqy,
                        text: ep.intl.string(ep.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(C.Z, {
                        className: a()(eg.downloadProgressCircle, { [eg.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    ey = () => {
        let e = (0, R.q)();
        return e > 0 ? (0, r.jsx)(E.mAB, { count: e }) : null;
    },
    eI = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, L._)();
        if (!(0, D.a)()) return null;
        let l = null == i ? void 0 : () => O.Z.preload(es.ME, i);
        return (0, r.jsx)(
            y.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.MESSAGE_REQUESTS,
                        icon: E._XJ,
                        text: ep.intl.string(ep.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(ey, {}) },
            ),
        );
    },
    eC = (e) => {
        let { selected: t } = e,
            n = ep.intl.string(ef.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            y.Qj,
            em(
                eh(
                    {
                        selected: t,
                        route: es.Z5c.FAMILY_CENTER,
                        icon: E.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: eg.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eS, { isParentHovered: a }) },
            ),
        );
    },
    eS = (e) => {
        let { isParentHovered: t } = e,
            i = (0, k.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: eg.familyCenterButtonContainer,
                  children: (0, r.jsx)(y.bU, {
                      onClick: () => {
                          (0, m.openModalLazy)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eh({}, t));
                          });
                      },
                      "aria-label": ep.intl.string(ep.t.cpT0Cq),
                      icon: E.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eg.familyCenterButtonContainer, eg.withPadding),
                    children: (0, r.jsx)(E.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eg.familyCenterButtonContainer,
                    children: (0, r.jsx)(x.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(E.IGR, {
                                      text: ep.intl.string(ep.t.y2b7CA),
                                      color: g.Z.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eT = () =>
        (0, r.jsxs)("div", {
            className: eg.directMessagesHeader,
            children: [
                (0, r.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    children: ep.intl.string(ep.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: eg.directMessagesButton,
                    children: (0, r.jsx)(Z.Z, {
                        tooltip: ep.intl.string(ep.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eN = () => (0, Q.$Z)("DM_SEARCH");
function ej(e) {
    switch (e) {
        case es.Z5c.APPLICATION_LIBRARY:
            return es.ZY5.LIBRARY;
        case es.Z5c.FRIENDS:
            return es.ZY5.FRIENDS_LIST;
        case es.Z5c.COLLECTIBLES_SHOP:
            return es.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(es.Z5c.APPLICATION_STORE)
        ? e === es.Z5c.APPLICATION_STORE
            ? es.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(es.Z5c.APPLICATION_STORE)
              ? es.ZY5.STORE_DIRECTORY_BROWSE
              : es.ZY5.STORE_LISTING
        : es.ZY5.DM_CHANNEL;
}
let eP = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            showReferralProgramPopover: c,
            showRecurring3PPopover: u,
            shouldShowMessageRequestsRow: p,
            shouldShowFamilyCenterRow: f,
            selectedChannelId: g,
            path: h,
            onlyShowDMs: m,
            hideAllDMs: _,
        } = e,
        O = i.useRef(null),
        v = i.useRef(null),
        y = i.useRef(null),
        C = i.useRef(null),
        S = U.o.useConfig({ location: "privatechannels" }).friendsTab,
        T = (0, w.b5)("PrivateChannels"),
        N = null;
    return (
        c ? (N = (0, r.jsx)(Y.F, { targetElementRef: C })) : u && (N = (0, r.jsx)(V.d, { targetElementRef: C })),
        (0, r.jsxs)("nav", {
            className: eg.privateChannels,
            "aria-label": ep.intl.string(ep.t.ZH9aP4),
            children: [
                m
                    ? (0, r.jsx)(eT, {})
                    : (0, r.jsx)(X.Z, {
                          childRef: O,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: O,
                              className: a()(eg.searchBar, { [eg.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(E.Button, {
                                  fullWidth: !0,
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: eN,
                                  text: ep.intl.format(ep.t.fH9FBy, {
                                      tooltipHook: (e, t) => (0, r.jsx)(b.Z, { children: e }, t),
                                  }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    I.Z,
                    em(eh({}, e), {
                        version: h,
                        selectedChannelId: g,
                        showDMHeader: !_ && !m,
                        hideAllDMs: _,
                        listScrollerRef: y,
                        children: [
                            S && !m
                                ? (0, r.jsx)(
                                      eO,
                                      { selected: null != h ? h === es.Z5c.ME_ACTIVITY : l === es.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            m
                                ? null
                                : (0, r.jsx)(
                                      eE,
                                      { selected: null != h ? h === es.Z5c.FRIENDS : l === es.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !m && T
                                ? (0, r.jsx)(
                                      e_,
                                      { selected: null != h ? h === es.Z5c.ICYMI : l === es.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !m
                                ? (0, r.jsx)(
                                      ev,
                                      {
                                          selected:
                                              null == h
                                                  ? null != l && l.startsWith(es.Z5c.APPLICATION_LIBRARY)
                                                  : h.startsWith(es.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === es.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !m
                                ? (0, r.jsx)(
                                      eI,
                                      {
                                          selected:
                                              null == h
                                                  ? null != l && l.startsWith(es.Z5c.MESSAGE_REQUESTS)
                                                  : h === es.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            s && !m
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(W.g, {
                                                  nitroTabButtonRef: C,
                                                  selected: null == h ? o : h.startsWith(es.Z5c.APPLICATION_STORE),
                                                  route: es.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: ej(l),
                                                          section: es.jXE.NAVIGATION,
                                                          object: es.qAy.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              N,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            m
                                ? null
                                : (0, r.jsx)(
                                      j.i,
                                      {
                                          selected:
                                              h === es.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(es.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: v,
                                          locationState: {
                                              analyticsSource: {
                                                  page: ej(l),
                                                  section: es.jXE.NAVIGATION,
                                                  object: es.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !m
                                ? (0, r.jsx)(
                                      eC,
                                      {
                                          selected:
                                              (null != l && l.startsWith(es.Z5c.FAMILY_CENTER)) ||
                                              (null != h && h.startsWith(es.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            m
                                ? null
                                : (0, r.jsx)(
                                      K.Z,
                                      {
                                          selected:
                                              null == h
                                                  ? null != l && l.startsWith(es.Z5c.QUEST_HOME_V2)
                                                  : h === es.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            m || _ ? null : (0, r.jsx)(ex, {}, "section-divider-top"),
                            _ ? null : (0, r.jsx)(A.Z, {}, "frequent-friends"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function ex() {
    return (0, r.jsx)("div", { className: eg.sectionDivider });
}
function eA() {
    let e = (0, p.e7)([ei.Z], () => ei.Z.getHomeLink()),
        t = (0, p.e7)([er.Z], () => {
            if (e === es.Z5c.APPLICATION_STORE) return !0;
            let t = (0, eo.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = er.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !ee.bm.useSetting(),
        { theme: i } = (0, p.cj)([$.Z], () => ({ theme: $.Z.theme })),
        l = (0, p.e7)([et.Z], () => et.Z.hasLibraryApplication()),
        a = (0, p.e7)([en.Z], () => en.Z.getCurrentPath()),
        [c, u] = (0, J.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, s.X),
        d = (0, W.i)({ selected: null == u ? t : u.startsWith(es.Z5c.APPLICATION_STORE) }),
        g = (0, z.eW)(),
        h = (0, F._h)(),
        m = [];
    (0, P.Kl)() && (g && m.push(f.z.REFERRAL_PROGRAM_POPOVER), h && m.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [b, _] = (0, x.US)(m, void 0, !0),
        E = (0, D.a)(),
        O = (function () {
            let e = ee.Ex.useSetting(),
                t = (0, M.Z)();
            return !0 === e && !0 === t;
        })(),
        { pathname: v } = (0, o.TH)(),
        y = v.startsWith(es.Z5c.CHANNEL(es.ME)) && v !== es.Z5c.CHANNEL(es.ME) && v !== es.Z5c.ME_ACTIVITY,
        I = U.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eP, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: d,
        showReferralProgramPopover: b === f.z.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: b === f.z.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: E,
        shouldShowFamilyCenterRow: O,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: y && I,
        hideAllDMs: !y && I,
    });
}
