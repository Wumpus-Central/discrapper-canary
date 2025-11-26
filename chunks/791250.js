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
    B = n(522558),
    H = n(441623),
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
    es = n(814225),
    eo = n(981631),
    ec = n(675654),
    eu = n(921944),
    ed = n(474936),
    ep = n(388032),
    ef = n(744038),
    eh = n(443226);
function eg(e) {
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
function e_(e, t) {
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
let eb = (e) => {
        var { selected: t } = e,
            n = e_(e, ["selected"]);
        let i = (0, w.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: eh.friendsButtonContainer,
                  children: (0, r.jsx)(
                      y.Qj,
                      eg(
                          {
                              selected: t,
                              route: eo.Z5c.ICYMI,
                              icon: b.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ep.intl.string(ep.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: eh.preAlphaText,
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
            n = e_(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, G.If)(),
            s = (0, p.e7)([H.ZP], () => H.ZP.canShowFriendsTabBadge()),
            o = (0, p.e7)([C.Z], () => C.Z.useReducedMotion),
            { enabled: d } = B.w.useConfig({ location: "Friends Tab" }),
            [g, m] = (0, x.bf)(s && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: H.n3 }),
            E = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            E &&
                (0, T.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ed.hX.FRIEND_ANNIVERSARY },
                });
        }, [E]);
        let v = () => {
                let e;
                E
                    ? (ea.default.track(eo.rMx.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: ed.hX.FRIEND_ANNIVERSARY,
                      }),
                      (e = eo.pJs.ALL),
                      O.Z.setSection(eo.pJs.ALL),
                      m(eu.L.TAKE_ACTION))
                    : (e = el.ZP.getState().section),
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
                    em(
                        eg(
                            {
                                onClick: v,
                                interactiveClassName: E ? eh.friendsBadge : void 0,
                                selected: t,
                                route: eo.Z5c.FRIENDS,
                                icon: b.iFz,
                                text: ep.intl.string(ep.t.TdEu5X),
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
            className: eh.friendsButtonContainer,
            children: E
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
                          !o &&
                              (0, r.jsx)(q.Z, {
                                  className: eh.confetti,
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
            n = e_(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: eh.friendsButtonContainer,
            children: (0, r.jsx)(
                y.Qj,
                eg(
                    {
                        selected: t,
                        route: eo.Z5c.ME_ACTIVITY,
                        icon: b.g8d,
                        text: ep.intl.string(ep.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    ey = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = e_(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            y.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: eo.Z5c.APPLICATION_LIBRARY,
                        icon: b.vqy,
                        text: ep.intl.string(ep.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(I.Z, {
                        className: a()(eh.downloadProgressCircle, { [eh.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    ev = () => {
        let e = (0, R.q)();
        return e > 0 ? (0, r.jsx)(b.mAB, { count: e }) : null;
    },
    eI = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, L._)();
        if (!(0, D.a)()) return null;
        let l = null == i ? void 0 : () => E.Z.preload(eo.ME, i);
        return (0, r.jsx)(
            y.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: eo.Z5c.MESSAGE_REQUESTS,
                        icon: b._XJ,
                        text: ep.intl.string(ep.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(ev, {}) },
            ),
        );
    },
    eC = (e) => {
        let { selected: t } = e,
            n = ep.intl.string(ef.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            y.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: eo.Z5c.FAMILY_CENTER,
                        icon: b.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: eh.familyCenterLinkButton,
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
                  className: eh.familyCenterButtonContainer,
                  children: (0, r.jsx)(y.bU, {
                      onClick: () => {
                          (0, g.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eg({}, t));
                          });
                      },
                      "aria-label": ep.intl.string(ep.t.cpT0Cq),
                      icon: b.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eh.familyCenterButtonContainer, eh.withPadding),
                    children: (0, r.jsx)(b.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eh.familyCenterButtonContainer,
                    children: (0, r.jsx)(x.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(b.IGR, {
                                      text: ep.intl.string(ep.t.y2b7CA),
                                      color: j.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eT = () =>
        (0, r.jsxs)("div", {
            className: eh.directMessagesHeader,
            children: [
                (0, r.jsx)(b.Text, {
                    variant: "text-md/semibold",
                    children: ep.intl.string(ep.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: eh.directMessagesButton,
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
        case eo.Z5c.APPLICATION_LIBRARY:
            return eo.ZY5.LIBRARY;
        case eo.Z5c.FRIENDS:
            return eo.ZY5.FRIENDS_LIST;
        case eo.Z5c.COLLECTIBLES_SHOP:
            return eo.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(eo.Z5c.APPLICATION_STORE)
        ? e === eo.Z5c.APPLICATION_STORE
            ? eo.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(eo.Z5c.APPLICATION_STORE)
              ? eo.ZY5.STORE_DIRECTORY_BROWSE
              : eo.ZY5.STORE_LISTING
        : eo.ZY5.DM_CHANNEL;
}
let eP = i.memo(function (e) {
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
            selectedChannelId: h,
            path: g,
            onlyShowDMs: _,
            hideAllDMs: E,
        } = e,
        O = i.useRef(null),
        y = i.useRef(null),
        I = i.useRef(null),
        C = i.useRef(null),
        S = U.o.useConfig({ location: "privatechannels" }).friendsTab,
        T = (0, w.b5)("PrivateChannels"),
        j = null;
    return (
        c ? (j = (0, r.jsx)(Y.F, { targetElementRef: C })) : u && (j = (0, r.jsx)(V.d, { targetElementRef: C })),
        (0, r.jsxs)("nav", {
            className: eh.privateChannels,
            "aria-label": ep.intl.string(ep.t.ZH9aP4),
            children: [
                _
                    ? (0, r.jsx)(eT, {})
                    : (0, r.jsx)(X.Z, {
                          childRef: O,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: O,
                              className: a()(eh.searchBar, { [eh.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(b.Button, {
                                  fullWidth: !0,
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: eN,
                                  text: ep.intl.format(ep.t.fH9FBy, {
                                      tooltipHook: (e, t) => (0, r.jsx)(m.Z, { children: e }, t),
                                  }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    v.Z,
                    em(eg({}, e), {
                        version: g,
                        selectedChannelId: h,
                        showDMHeader: !E && !_,
                        hideAllDMs: E,
                        listScrollerRef: I,
                        children: [
                            S && !_
                                ? (0, r.jsx)(
                                      eO,
                                      { selected: null != g ? g === eo.Z5c.ME_ACTIVITY : l === eo.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            _
                                ? null
                                : (0, r.jsx)(
                                      eE,
                                      { selected: null != g ? g === eo.Z5c.FRIENDS : l === eo.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !_ && T
                                ? (0, r.jsx)(
                                      eb,
                                      { selected: null != g ? g === eo.Z5c.ICYMI : l === eo.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !_
                                ? (0, r.jsx)(
                                      ey,
                                      {
                                          selected:
                                              null == g
                                                  ? null != l && l.startsWith(eo.Z5c.APPLICATION_LIBRARY)
                                                  : g.startsWith(eo.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === eo.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !_
                                ? (0, r.jsx)(
                                      eI,
                                      {
                                          selected:
                                              null == g
                                                  ? null != l && l.startsWith(eo.Z5c.MESSAGE_REQUESTS)
                                                  : g === eo.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            o && !_
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(W.g, {
                                                  nitroTabButtonRef: C,
                                                  selected: null == g ? s : g.startsWith(eo.Z5c.APPLICATION_STORE),
                                                  route: eo.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: ej(l),
                                                          section: eo.jXE.NAVIGATION,
                                                          object: eo.qAy.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              j,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            _
                                ? null
                                : (0, r.jsx)(
                                      N.i,
                                      {
                                          selected:
                                              g === eo.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(eo.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: y,
                                          locationState: {
                                              analyticsSource: {
                                                  page: ej(l),
                                                  section: eo.jXE.NAVIGATION,
                                                  object: eo.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !_
                                ? (0, r.jsx)(
                                      eC,
                                      {
                                          selected:
                                              (null != l && l.startsWith(eo.Z5c.FAMILY_CENTER)) ||
                                              (null != g && g.startsWith(eo.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            _
                                ? null
                                : (0, r.jsx)(
                                      K.Z,
                                      {
                                          selected:
                                              null == g
                                                  ? null != l && l.startsWith(eo.Z5c.QUEST_HOME_V2)
                                                  : g === eo.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            _ || E ? null : (0, r.jsx)(ex, {}, "section-divider-top"),
                            E ? null : (0, r.jsx)(A.Z, {}, "frequent-friends"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function ex() {
    return (0, r.jsx)("div", { className: eh.sectionDivider });
}
function eA() {
    let e = (0, p.e7)([ei.Z], () => ei.Z.getHomeLink()),
        t = (0, p.e7)([er.Z], () => {
            if (e === eo.Z5c.APPLICATION_STORE) return !0;
            let t = (0, es.ZK)(e);
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
        }, o.X),
        d = (0, W.i)({ selected: null == u ? t : u.startsWith(eo.Z5c.APPLICATION_STORE) }),
        h = (0, z.eW)(),
        g = (0, F._h)(),
        m = [];
    (0, P.Kl)() && (h && m.push(f.z.REFERRAL_PROGRAM_POPOVER), g && m.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, x.US)(m, void 0, !0),
        E = (0, D.a)(),
        O = (function () {
            let e = ee.Ex.useSetting(),
                t = (0, M.Z)();
            return !0 === e && !0 === t;
        })(),
        { pathname: y } = (0, s.TH)(),
        v = y.startsWith(eo.Z5c.CHANNEL(eo.ME)) && y !== eo.Z5c.CHANNEL(eo.ME) && y !== eo.Z5c.ME_ACTIVITY,
        I = U.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eP, {
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
        selectedChannelId: c,
        path: u,
        onlyShowDMs: v && I,
        hideAllDMs: !v && I,
    });
}
