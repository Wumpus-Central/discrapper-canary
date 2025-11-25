n.d(t, {
    Z: () => ew,
    d: () => eZ,
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
    Z = n(882579),
    w = n(518311),
    L = n(518929),
    R = n(488634),
    D = n(899740),
    M = n(28476),
    k = n(880257),
    U = n(631885),
    G = n(365113),
    B = n(849862),
    H = n(522558),
    V = n(441623),
    F = n(382834),
    z = n(675957),
    Y = n(93237),
    W = n(138176),
    q = n(457396),
    K = n(108989),
    Q = n(222850),
    J = n(51596),
    X = n(905423),
    $ = n(155409),
    ee = n(210887),
    et = n(695346),
    en = n(283595),
    er = n(923834),
    ei = n(55563),
    el = n(774343),
    ea = n(974042),
    es = n(626135),
    eo = n(814225),
    ec = n(981631),
    eu = n(675654),
    ed = n(921944),
    ep = n(474936),
    ef = n(388032),
    eh = n(744038),
    eg = n(443226);
function em(e) {
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
function e_(e, t) {
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
let eE = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, L.b5)("PrivateChannels.ICYMIButton"),
            l = (0, u.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: eg.friendsButtonContainer,
                  children: (0, r.jsx)(
                      y.Qj,
                      em(
                          {
                              selected: t,
                              route: ec.Z5c.ICYMI,
                              icon: b.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ef.intl.string(ef.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: eg.preAlphaText,
                                          children: ef.intl.string(ef.t.Ac2OZA),
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
    eO = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let l = (0, u.JA)("friends"),
            a = (0, B.If)(),
            s = (0, p.e7)([V.Z], () => V.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([C.Z], () => C.Z.useReducedMotion),
            { enabled: d } = H.w.useConfig({ location: "Friends Tab" }),
            [g, m] = (0, x.bf)(s && d ? f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: V.n }),
            E = g === f.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            E &&
                (0, T.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ep.hX.FRIEND_ANNIVERSARY },
                });
        }, [E]);
        let v = () => {
                let e;
                E
                    ? (es.default.track(ec.rMx.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: ep.hX.FRIEND_ANNIVERSARY,
                      }),
                      (e = ec.pJs.ALL),
                      O.Z.setSection(ec.pJs.ALL),
                      m(ed.L.TAKE_ACTION))
                    : (e = ea.ZP.getState().section),
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
                    e_(
                        em(
                            {
                                onClick: v,
                                interactiveClassName: E ? eg.friendsBadge : void 0,
                                selected: t,
                                route: ec.Z5c.FRIENDS,
                                icon: b.iFz,
                                text: ef.intl.string(ef.t.TdEu5X),
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
            className: eg.friendsButtonContainer,
            children: E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(_.i_, {
                              title: ef.intl.string(ef.t.Thb5MO),
                              body: ef.intl.string(ef.t.kGvgwS),
                              position: "left",
                              asset: (0, r.jsx)(h._N, {
                                  size: 32,
                                  alt: ef.intl.string(ef.t["4LohBA"]),
                              }),
                              children: A(),
                          }),
                          !o &&
                              (0, r.jsx)(K.Z, {
                                  className: eg.confetti,
                                  wind: 0,
                                  sprites: eu.CA,
                                  spriteColors: eu.Br,
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
    ey = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: eg.friendsButtonContainer,
            children: (0, r.jsx)(
                y.Qj,
                em(
                    {
                        selected: t,
                        route: ec.Z5c.ME_ACTIVITY,
                        icon: b.g8d,
                        text: ef.intl.string(ef.t.IC5Ann),
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
            e_(
                em(
                    {
                        selected: t,
                        route: ec.Z5c.APPLICATION_LIBRARY,
                        icon: b.vqy,
                        text: ef.intl.string(ef.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(I.Z, {
                        className: a()(eg.downloadProgressCircle, { [eg.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    eI = () =>
        (0, r.jsx)("li", {
            className: eg.createDMButtonContainer,
            children: (0, r.jsx)(w.l, {
                fullWidth: !0,
                text: ef.intl.string(ef.t["6Urw1t"]),
                icon: b.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eC = () => {
        let e = (0, D.q)();
        return e > 0 ? (0, r.jsx)(b.mAB, { count: e }) : null;
    },
    eS = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, R._)();
        if (!(0, M.a)()) return null;
        let l = null == i ? void 0 : () => E.Z.preload(ec.ME, i);
        return (0, r.jsx)(
            y.Qj,
            e_(
                em(
                    {
                        selected: t,
                        route: ec.Z5c.MESSAGE_REQUESTS,
                        icon: b._XJ,
                        text: ef.intl.string(ef.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eC, {}) },
            ),
        );
    },
    eT = (e) => {
        let { selected: t } = e,
            n = ef.intl.string(eh.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            y.Qj,
            e_(
                em(
                    {
                        selected: t,
                        route: ec.Z5c.FAMILY_CENTER,
                        icon: b.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            s(!0);
                        },
                        onMouseLeave: () => {
                            s(!1);
                        },
                        interactiveClassName: eg.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(eN, { isParentHovered: a }) },
            ),
        );
    },
    eN = (e) => {
        let { isParentHovered: t } = e,
            i = (0, U.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: eg.familyCenterButtonContainer,
                  children: (0, r.jsx)(y.bU, {
                      onClick: () => {
                          (0, g.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, em({}, t));
                          });
                      },
                      "aria-label": ef.intl.string(ef.t.cpT0Cq),
                      icon: b.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eg.familyCenterButtonContainer, eg.withPadding),
                    children: (0, r.jsx)(b.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eg.familyCenterButtonContainer,
                    children: (0, r.jsx)(x.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(b.IGR, {
                                      text: ef.intl.string(ef.t.y2b7CA),
                                      color: j.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ej = () =>
        (0, r.jsxs)("div", {
            className: eg.directMessagesHeader,
            children: [
                (0, r.jsx)(b.Text, {
                    variant: "text-md/semibold",
                    children: ef.intl.string(ef.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: eg.directMessagesButton,
                    children: (0, r.jsx)(w.Z, {
                        tooltip: ef.intl.string(ef.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eP = () => (0, J.$Z)("DM_SEARCH");
function ex(e) {
    switch (e) {
        case ec.Z5c.APPLICATION_LIBRARY:
            return ec.ZY5.LIBRARY;
        case ec.Z5c.FRIENDS:
            return ec.ZY5.FRIENDS_LIST;
        case ec.Z5c.COLLECTIBLES_SHOP:
            return ec.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(ec.Z5c.APPLICATION_STORE)
        ? e === ec.Z5c.APPLICATION_STORE
            ? ec.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(ec.Z5c.APPLICATION_STORE)
              ? ec.ZY5.STORE_DIRECTORY_BROWSE
              : ec.ZY5.STORE_LISTING
        : ec.ZY5.DM_CHANNEL;
}
let eA = i.memo(function (e) {
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
        T = G.o.useConfig({ location: "privatechannels" }).friendsTab,
        j = (0, L.b5)("PrivateChannels"),
        P = null;
    return (
        c ? (P = (0, r.jsx)(W.F, { targetElementRef: S })) : u && (P = (0, r.jsx)(F.d, { targetElementRef: S })),
        (0, r.jsxs)("nav", {
            className: eg.privateChannels,
            "aria-label": ef.intl.string(ef.t.ZH9aP4),
            children: [
                E
                    ? (0, r.jsx)(ej, {})
                    : (0, r.jsx)($.Z, {
                          childRef: y,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: y,
                              className: a()(eg.searchBar, { [eg.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(b.Button, {
                                  fullWidth: !0,
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: eP,
                                  text: ef.intl.format(ef.t.fH9FBy, {
                                      tooltipHook: (e, t) => (0, r.jsx)(m.Z, { children: e }, t),
                                  }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    v.Z,
                    e_(em({}, e), {
                        version: _,
                        selectedChannelId: g,
                        showDMHeader: !O && !E,
                        hideAllDMs: O,
                        listScrollerRef: C,
                        createDMCTAButtonVariant: h,
                        children: [
                            T && !E
                                ? (0, r.jsx)(
                                      ey,
                                      { selected: null != _ ? _ === ec.Z5c.ME_ACTIVITY : l === ec.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      eO,
                                      { selected: null != _ ? _ === ec.Z5c.FRIENDS : l === ec.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !E && j
                                ? (0, r.jsx)(
                                      eE,
                                      { selected: null != _ ? _ === ec.Z5c.ICYMI : l === ec.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !E
                                ? (0, r.jsx)(
                                      ev,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(ec.Z5c.APPLICATION_LIBRARY)
                                                  : _.startsWith(ec.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === ec.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !E
                                ? (0, r.jsx)(
                                      eS,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(ec.Z5c.MESSAGE_REQUESTS)
                                                  : _ === ec.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            o && !E
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(q.g, {
                                                  nitroTabButtonRef: S,
                                                  selected: null == _ ? s : _.startsWith(ec.Z5c.APPLICATION_STORE),
                                                  route: ec.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: ex(l),
                                                          section: ec.jXE.NAVIGATION,
                                                          object: ec.qAy.NAVIGATION_LINK,
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
                                              _ === ec.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(ec.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: I,
                                          locationState: {
                                              analyticsSource: {
                                                  page: ex(l),
                                                  section: ec.jXE.NAVIGATION,
                                                  object: ec.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !E
                                ? (0, r.jsx)(
                                      eT,
                                      {
                                          selected:
                                              (null != l && l.startsWith(ec.Z5c.FAMILY_CENTER)) ||
                                              (null != _ && _.startsWith(ec.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      Q.Z,
                                      {
                                          selected:
                                              null == _
                                                  ? null != l && l.startsWith(ec.Z5c.QUEST_HOME_V2)
                                                  : _ === ec.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            E || O ? null : (0, r.jsx)(eZ, {}, "section-divider-top"),
                            O ? null : (0, r.jsx)(A.Z, {}, "frequent-friends"),
                            "full-width" !== h || O || E ? null : (0, r.jsx)(eI, {}, "create-dm"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function eZ() {
    return (0, r.jsx)("div", { className: eg.sectionDivider });
}
function ew() {
    let e = (0, p.e7)([el.Z], () => el.Z.getHomeLink()),
        t = (0, p.e7)([ei.Z], () => {
            if (e === ec.Z5c.APPLICATION_STORE) return !0;
            let t = (0, eo.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = ei.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !et.bm.useSetting(),
        { theme: i } = (0, p.cj)([ee.Z], () => ({ theme: ee.Z.theme })),
        l = (0, p.e7)([en.Z], () => en.Z.hasLibraryApplication()),
        a = (0, p.e7)([er.Z], () => er.Z.getCurrentPath()),
        [c, u] = (0, X.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        d = (0, q.i)({ selected: null == u ? t : u.startsWith(ec.Z5c.APPLICATION_STORE) }),
        h = (0, Y.eW)(),
        g = (0, z._h)(),
        m = [];
    (0, P.Kl)() && (h && m.push(f.z.REFERRAL_PROGRAM_POPOVER), g && m.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, x.US)(m, void 0, !0),
        E = (0, M.a)(),
        O = (function () {
            let e = et.Ex.useSetting(),
                t = (0, k.Z)();
            return !0 === e && !0 === t;
        })(),
        y = (0, Z.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: v } = (0, s.TH)(),
        I = v.startsWith(ec.Z5c.CHANNEL(ec.ME)) && v !== ec.Z5c.CHANNEL(ec.ME) && v !== ec.Z5c.ME_ACTIVITY,
        C = G.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(eA, {
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
