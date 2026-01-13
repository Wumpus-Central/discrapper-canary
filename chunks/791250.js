n.d(t, {
    Z: () => eT,
    d: () => eS,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(55160),
    s = n(990547),
    c = n(91192),
    u = n(873546),
    d = n(442837),
    p = n(704215),
    f = n(692547),
    g = n(970683),
    h = n(952265),
    m = n(194983),
    b = n(681715),
    _ = n(481060),
    E = n(493683),
    O = n(529103),
    v = n(515753),
    y = n(831218),
    I = n(339149),
    C = n(607070),
    S = n(557968),
    T = n(213609),
    N = n(463119),
    j = n(211644),
    P = n(243778),
    x = n(702456),
    Z = n(518929),
    A = n(488634),
    w = n(899740),
    L = n(28476),
    R = n(880257),
    D = n(631885),
    M = n(849862),
    k = n(522558),
    U = n(441623),
    G = n(382834),
    H = n(675957),
    B = n(93237),
    V = n(138176),
    F = n(457396),
    z = n(108989),
    Y = n(222850),
    W = n(51596),
    K = n(905423),
    q = n(155409),
    Q = n(210887),
    J = n(695346),
    X = n(283595),
    $ = n(923834),
    ee = n(55563),
    et = n(774343),
    en = n(974042),
    er = n(626135),
    ei = n(814225),
    el = n(981631),
    ea = n(675654),
    eo = n(921944),
    es = n(474936),
    ec = n(388032),
    eu = n(517319),
    ed = n(497725);
function ep(e) {
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
function ef(e, t) {
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
function eg(e, t) {
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
let eh = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let i = (0, Z.b5)("PrivateChannels.ICYMIButton"),
            l = (0, c.JA)("icymi");
        return i
            ? (0, r.jsx)("div", {
                  className: ed.friendsButtonContainer,
                  children: (0, r.jsx)(
                      v.Qj,
                      ep(
                          {
                              selected: t,
                              route: el.Z5c.ICYMI,
                              icon: _.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ec.intl.string(ec.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: ed.preAlphaText,
                                          children: ec.intl.string(ec.t.Ac2OZA),
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
    em = (e) => {
        var { selected: t } = e,
            n = eg(e, ["selected"]);
        let l = (0, c.JA)("friends"),
            a = (0, M.If)(),
            o = (0, d.e7)([U.ZP], () => U.ZP.canShowFriendsTabBadge()),
            u = (0, d.e7)([C.Z], () => C.Z.useReducedMotion),
            { enabled: f } = k.w.useConfig({ location: "Friends Tab" }),
            [h, m] = (0, P.bf)(o && f ? p.z.GIFTING_INTENT_FRIENDS_TAB_BADGE : null, { cooldownDurationMs: U.n3 }),
            E = h === p.z.GIFTING_INTENT_FRIENDS_TAB_BADGE;
        i.useEffect(() => {
            E &&
                (0, T.h)({
                    name: s.ImpressionNames.GIFT_INTENT_BADGE,
                    type: s.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: es.hX.FRIEND_ANNIVERSARY },
                });
        }, [E]);
        let y = () => {
                let e;
                E
                    ? (er.default.track(el.rMx.GIFT_INTENT_BADGE_CLICKED, {
                          gift_intent_type: es.hX.FRIEND_ANNIVERSARY,
                      }),
                      (e = el.pJs.ALL),
                      O.Z.setSection(el.pJs.ALL),
                      m(eo.L.TAKE_ACTION))
                    : (e = en.ZP.getState().section),
                    (0, S.Z)({ tab_opened: e });
            },
            [I, N] = i.useState(!1),
            j = () => {
                N(!1);
            },
            x = () => {
                N(!0);
            },
            Z = () =>
                (0, r.jsx)(
                    v.Qj,
                    ef(
                        ep(
                            {
                                onClick: y,
                                interactiveClassName: E ? ed.friendsBadge : void 0,
                                selected: t,
                                route: el.Z5c.FRIENDS,
                                icon: _.iFz,
                                text: ec.intl.string(ec.t.TdEu5X),
                                onMouseEnter: x,
                                onMouseLeave: j,
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(_.mAB, { count: a }) : null },
                    ),
                );
        return (0, r.jsx)("div", {
            className: ed.friendsButtonContainer,
            children: E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.i_, {
                              title: ec.intl.string(ec.t.Thb5MO),
                              body: ec.intl.string(ec.t.kGvgwS),
                              position: "left",
                              asset: (0, r.jsx)(g._N_, {
                                  size: 32,
                                  alt: ec.intl.string(ec.t["4LohBA"]),
                              }),
                              children: Z(),
                          }),
                          !u &&
                              (0, r.jsx)(z.Z, {
                                  className: ed.confetti,
                                  wind: 0,
                                  sprites: ea.CA,
                                  spriteColors: ea.Br,
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
                : Z(),
        });
    },
    eb = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eg(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, c.JA)("library");
        return (0, r.jsx)(
            v.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.Z5c.APPLICATION_LIBRARY,
                        icon: _.vqy,
                        text: ec.intl.string(ec.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(I.Z, {
                        className: a()(ed.downloadProgressCircle, { [ed.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    e_ = () => {
        let e = (0, w.q)();
        return e > 0 ? (0, r.jsx)(_.mAB, { count: e }) : null;
    },
    eE = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)("messageRequests"),
            { channelId: i } = (0, A._)();
        if (!(0, L.a)()) return null;
        let l = null == i ? void 0 : () => E.Z.preload(el.ME, i);
        return (0, r.jsx)(
            v.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.Z5c.MESSAGE_REQUESTS,
                        icon: _._XJ,
                        text: ec.intl.string(ec.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(e_, {}) },
            ),
        );
    },
    eO = (e) => {
        let { selected: t } = e,
            n = ec.intl.string(eu.default.Rkdixs),
            l = (0, c.JA)("family-center"),
            [a, o] = i.useState(!0);
        return (0, r.jsx)(
            v.Qj,
            ef(
                ep(
                    {
                        selected: t,
                        route: el.Z5c.FAMILY_CENTER,
                        icon: _.BFJ,
                        text: n,
                        onMouseEnter: () => {
                            o(!0);
                        },
                        onMouseLeave: () => {
                            o(!1);
                        },
                        interactiveClassName: ed.familyCenterLinkButton,
                    },
                    l,
                ),
                { children: (0, r.jsx)(ev, { isParentHovered: a }) },
            ),
        );
    },
    ev = (e) => {
        let { isParentHovered: t } = e,
            i = (0, D.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: ed.familyCenterButtonContainer,
                  children: (0, r.jsx)(v.bU, {
                      onClick: () => {
                          (0, h.openModalLazy)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, ep({}, t));
                          });
                      },
                      "aria-label": ec.intl.string(ec.t.cpT0Cq),
                      icon: _.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(ed.familyCenterButtonContainer, ed.withPadding),
                    children: (0, r.jsx)(_.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: ed.familyCenterButtonContainer,
                    children: (0, r.jsx)(P.ZP, {
                        contentTypes: [p.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === p.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(_.IGR, {
                                      text: ec.intl.string(ec.t.y2b7CA),
                                      color: f.Z.colors.BACKGROUND_BRAND.css,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ey = () => (0, W.$Z)("DM_SEARCH");
function eI(e) {
    switch (e) {
        case el.Z5c.APPLICATION_LIBRARY:
            return el.ZY5.LIBRARY;
        case el.Z5c.FRIENDS:
            return el.ZY5.FRIENDS_LIST;
        case el.Z5c.COLLECTIBLES_SHOP:
            return el.ZY5.COLLECTIBLES_SHOP;
    }
    return e.startsWith(el.Z5c.APPLICATION_STORE)
        ? e === el.Z5c.APPLICATION_STORE
            ? el.ZY5.STORE_DIRECTORY_HOME
            : e.startsWith(el.Z5c.APPLICATION_STORE)
              ? el.ZY5.STORE_DIRECTORY_BROWSE
              : el.ZY5.STORE_LISTING
        : el.ZY5.DM_CHANNEL;
}
let eC = i.memo(function (e) {
    let {
            showLibrary: t,
            hasLibraryApplication: n,
            homeLink: l,
            premiumTabSelected: o,
            shouldShowNitroTab: s,
            showReferralProgramPopover: c,
            showRecurring3PPopover: d,
            shouldShowMessageRequestsRow: p,
            shouldShowFamilyCenterRow: f,
            selectedChannelId: g,
            path: h,
        } = e,
        b = i.useRef(null),
        E = i.useRef(null),
        O = i.useRef(null),
        v = i.useRef(null),
        I = (0, Z.b5)("PrivateChannels"),
        C = null;
    return (
        c ? (C = (0, r.jsx)(V.F, { targetElementRef: v })) : d && (C = (0, r.jsx)(G.d, { targetElementRef: v })),
        (0, r.jsxs)("nav", {
            className: ed.privateChannels,
            "aria-label": ec.intl.string(ec.t.ZH9aP4),
            children: [
                (0, r.jsx)(q.Z, {
                    childRef: b,
                    tutorialId: "direct-messages",
                    position: "right",
                    offsetX: -52,
                    children: (0, r.jsx)("div", {
                        ref: b,
                        className: a()(ed.searchBar, { [ed.themedHeaderMobile]: u.tq }),
                        children: (0, r.jsx)(_.Button, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "sm",
                            onClick: ey,
                            text: ec.intl.format(ec.t.fH9FBy, {
                                tooltipHook: (e, t) => (0, r.jsx)(m.Z, { children: e }, t),
                            }),
                        }),
                    }),
                }),
                (0, r.jsxs)(
                    y.Z,
                    ef(ep({}, e), {
                        version: h,
                        selectedChannelId: g,
                        listScrollerRef: O,
                        children: [
                            (0, r.jsx)(
                                em,
                                { selected: null != h ? h === el.Z5c.FRIENDS : l === el.Z5c.FRIENDS },
                                "friends",
                            ),
                            I
                                ? (0, r.jsx)(
                                      eh,
                                      { selected: null != h ? h === el.Z5c.ICYMI : l === el.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t
                                ? (0, r.jsx)(
                                      eb,
                                      {
                                          selected:
                                              null == h
                                                  ? null != l && l.startsWith(el.Z5c.APPLICATION_LIBRARY)
                                                  : h.startsWith(el.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === el.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p
                                ? (0, r.jsx)(
                                      eE,
                                      {
                                          selected:
                                              null == h
                                                  ? null != l && l.startsWith(el.Z5c.MESSAGE_REQUESTS)
                                                  : h === el.Z5c.MESSAGE_REQUESTS,
                                      },
                                      "message-requests",
                                  )
                                : null,
                            s
                                ? (0, r.jsxs)(
                                      "div",
                                      {
                                          children: [
                                              (0, r.jsx)(F.g, {
                                                  nitroTabButtonRef: v,
                                                  selected: null == h ? o : h.startsWith(el.Z5c.APPLICATION_STORE),
                                                  route: el.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: eI(l),
                                                          section: el.jXE.NAVIGATION,
                                                          object: el.qAy.NAVIGATION_LINK,
                                                      },
                                                  },
                                              }),
                                              C,
                                          ],
                                      },
                                      "nitro-tab-group",
                                  )
                                : null,
                            (0, r.jsx)(
                                N.i,
                                {
                                    selected:
                                        h === el.Z5c.COLLECTIBLES_SHOP ||
                                        (null == l ? void 0 : l.startsWith(el.Z5c.COLLECTIBLES_SHOP)),
                                    listItemRef: E,
                                    locationState: {
                                        analyticsSource: {
                                            page: eI(l),
                                            section: el.jXE.NAVIGATION,
                                            object: el.qAy.NAVIGATION_LINK,
                                        },
                                    },
                                },
                                "discord-shop",
                            ),
                            f
                                ? (0, r.jsx)(
                                      eO,
                                      {
                                          selected:
                                              (null != l && l.startsWith(el.Z5c.FAMILY_CENTER)) ||
                                              (null != h && h.startsWith(el.Z5c.FAMILY_CENTER)),
                                      },
                                      "family-center",
                                  )
                                : null,
                            (0, r.jsx)(
                                Y.Z,
                                {
                                    selected:
                                        null == h
                                            ? null != l && l.startsWith(el.Z5c.QUEST_HOME_V2)
                                            : h === el.Z5c.QUEST_HOME_V2,
                                },
                                "quests",
                            ),
                            (0, r.jsx)(eS, {}, "section-divider-top"),
                            (0, r.jsx)(x.Z, {}, "frequent-friends"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function eS() {
    return (0, r.jsx)("div", { className: ed.sectionDivider });
}
function eT() {
    let e = (0, d.e7)([et.Z], () => et.Z.getHomeLink()),
        t = (0, d.e7)([ee.Z], () => {
            if (e === el.Z5c.APPLICATION_STORE) return !0;
            let t = (0, ei.ZK)(e);
            if (null != t) {
                var n, r;
                return null != (r = null == (n = ee.Z.get(t)) ? void 0 : n.premium) && r;
            }
            return !1;
        }, [e]),
        n = !J.bm.useSetting(),
        { theme: i } = (0, d.cj)([Q.Z], () => ({ theme: Q.Z.theme })),
        l = (0, d.e7)([X.Z], () => X.Z.hasLibraryApplication()),
        a = (0, d.e7)([$.Z], () => $.Z.getCurrentPath()),
        [s, c] = (0, K.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, o.X),
        u = (0, F.i)({ selected: null == c ? t : c.startsWith(el.Z5c.APPLICATION_STORE) }),
        f = (0, B.eW)(),
        g = (0, H._h)(),
        h = [];
    (0, j.Kl)() && (f && h.push(p.z.REFERRAL_PROGRAM_POPOVER), g && h.push(p.z.RECURRING_3P_PROMOTION_POPOVER));
    let [m, b] = (0, P.US)(h, void 0, !0),
        _ = (0, L.a)(),
        E = (function () {
            let e = J.Ex.useSetting(),
                t = (0, R.Z)();
            return !0 === e && !0 === t;
        })();
    return (0, r.jsx)(eC, {
        theme: i,
        showLibrary: n,
        hasLibraryApplication: l,
        storeLink: a,
        homeLink: e,
        premiumTabSelected: t,
        shouldShowNitroTab: u,
        showReferralProgramPopover: m === p.z.REFERRAL_PROGRAM_POPOVER,
        showRecurring3PPopover: m === p.z.RECURRING_3P_PROMOTION_POPOVER,
        shouldShowMessageRequestsRow: _,
        shouldShowFamilyCenterRow: E,
        selectedChannelId: s,
        path: c,
    });
}
