n.d(t, {
    Z: () => ew,
    d: () => eZ,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(843611),
    o = n(574583),
    c = n(990547),
    u = n(91192),
    d = n(873546),
    p = n(442837),
    f = n(704215),
    m = n(952265),
    h = n(194983),
    g = n(755721),
    _ = n(481060),
    b = n(493683),
    E = n(529103),
    O = n(515753),
    I = n(831218),
    y = n(339149),
    v = n(607070),
    C = n(557968),
    S = n(213609),
    T = n(463119),
    N = n(377171),
    j = n(211644),
    P = n(426032),
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
    V = n(795448),
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
    ep = n(474936),
    ef = n(388032),
    em = n(602698),
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
                  className: eh.friendsButtonContainer,
                  children: (0, r.jsx)(
                      O.Qj,
                      eg(
                          {
                              selected: t,
                              route: eu.Z5c.ICYMI,
                              icon: _.qOE,
                              text: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      ef.intl.string(ef.t["jnXV/V"]),
                                      (0, r.jsx)("span", {
                                          className: eh.preAlphaText,
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
            s = (0, p.e7)([F.Z], () => F.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
            { enabled: d } = H.w.useExperiment({ location: "Friends Tab" }, { autoTrackExposure: !1 }),
            f = s && d;
        i.useEffect(() => {
            f &&
                (0, S.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ep.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [m, h] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: eh.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    O.Qj,
                    e_(
                        eg(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (eo.default.track(eu.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ep.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = eu.pJs.ALL),
                                          E.Z.setSection(eu.pJs.ALL),
                                          (0, V.Gk)())
                                        : (e = es.ZP.getState().section),
                                        (0, C.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? eh.friendsBadge : void 0,
                                selected: t,
                                route: eu.Z5c.FRIENDS,
                                icon: _.iFz,
                                text: ef.intl.string(ef.t.TdEu5X),
                                onMouseEnter: () => {
                                    h(!0);
                                },
                                onMouseLeave: () => {
                                    h(!1);
                                },
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(_.mAB, { count: a }) : null },
                    ),
                ),
                f &&
                    !o &&
                    (0, r.jsx)(Q.Z, {
                        className: eh.confetti,
                        wind: 0,
                        sprites: ed.CA,
                        spriteColors: ed.Br,
                        firing: m,
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
        });
    },
    eI = (e) => {
        var { selected: t } = e,
            n = eb(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: eh.friendsButtonContainer,
            children: (0, r.jsx)(
                O.Qj,
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.ME_ACTIVITY,
                        icon: _.g8d,
                        text: ef.intl.string(ef.t.IC5Ann),
                    },
                    n,
                    i,
                ),
            ),
        });
    },
    ey = (e) => {
        var { selected: t, hideGameUpdateProgressIndicator: n } = e,
            i = eb(e, ["selected", "hideGameUpdateProgressIndicator"]);
        let l = (0, u.JA)("library");
        return (0, r.jsx)(
            O.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.APPLICATION_LIBRARY,
                        icon: _.vqy,
                        text: ef.intl.string(ef.t.cw57ar),
                    },
                    i,
                    l,
                ),
                {
                    children: (0, r.jsx)(y.Z, {
                        className: a()(eh.downloadProgressCircle, { [eh.hideGameUpdateProgressIndicator]: n }),
                    }),
                },
            ),
        );
    },
    ev = () =>
        (0, r.jsx)("li", {
            className: eh.createDMButtonContainer,
            children: (0, r.jsx)(w.l, {
                fullWidth: !0,
                text: ef.intl.string(ef.t["6Urw1t"]),
                icon: _.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eC = () => {
        let e = (0, D.q)();
        return e > 0 ? (0, r.jsx)(_.mAB, { count: e }) : null;
    },
    eS = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, R._)();
        if (!(0, M.a)()) return null;
        let l = null == i ? void 0 : () => b.Z.preload(eu.ME, i);
        return (0, r.jsx)(
            O.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.MESSAGE_REQUESTS,
                        icon: _._XJ,
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
            n = ef.intl.string(em.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            O.Qj,
            e_(
                eg(
                    {
                        selected: t,
                        route: eu.Z5c.FAMILY_CENTER,
                        icon: _.BFJ,
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
                { children: (0, r.jsx)(eN, { isParentHovered: a }) },
            ),
        );
    },
    eN = (e) => {
        let { isParentHovered: t } = e,
            i = (0, U.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: eh.familyCenterButtonContainer,
                  children: (0, r.jsx)(O.bU, {
                      onClick: () => {
                          (0, m.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eg({}, t));
                          });
                      },
                      "aria-label": ef.intl.string(ef.t.cpT0Cq),
                      icon: _.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eh.familyCenterButtonContainer, eh.withPadding),
                    children: (0, r.jsx)(_.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eh.familyCenterButtonContainer,
                    children: (0, r.jsx)(x.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(_.IGR, {
                                      text: ef.intl.string(ef.t.y2b7CA),
                                      color: N.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    ej = () =>
        (0, r.jsxs)("div", {
            className: eh.directMessagesHeader,
            children: [
                (0, r.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    children: ef.intl.string(ef.t.YUU0RF),
                }),
                (0, r.jsx)("div", {
                    className: eh.directMessagesButton,
                    children: (0, r.jsx)(w.Z, {
                        tooltip: ef.intl.string(ef.t["6Urw1t"]),
                        location: "DirectMessagesHeader-CreateDMButton",
                    }),
                }),
            ],
        }),
    eP = () => (0, X.$Z)("DM_SEARCH");
function ex(e) {
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
            createDMButtonVariant: m,
            selectedChannelId: _,
            path: b,
            onlyShowDMs: E,
            hideAllDMs: O,
        } = e,
        y = i.useRef(null),
        v = i.useRef(null),
        C = i.useRef(null),
        S = i.useRef(null),
        N = G.o.useConfig({ location: "privatechannels" }).friendsTab,
        j = (0, L.b5)("PrivateChannels"),
        P = null;
    return (
        c ? (P = (0, r.jsx)(q.F, { targetElementRef: S })) : u && (P = (0, r.jsx)(z.d, { targetElementRef: S })),
        (0, r.jsxs)("nav", {
            className: eh.privateChannels,
            "aria-label": ef.intl.string(ef.t.ZH9aP4),
            children: [
                E
                    ? (0, r.jsx)(ej, {})
                    : (0, r.jsx)(ee.Z, {
                          childRef: y,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: y,
                              className: a()(eh.searchBar, { [eh.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(g.zx, {
                                  grow: !0,
                                  color: g.zx.Colors.PRIMARY,
                                  size: g.zx.Sizes.SMALL,
                                  fullWidth: !0,
                                  onClick: eP,
                                  children: (0, r.jsx)(h.Z, { children: ef.intl.string(ef.t.LzcpeZ) }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    I.Z,
                    e_(eg({}, e), {
                        version: b,
                        selectedChannelId: _,
                        showDMHeader: !O && !E,
                        hideAllDMs: O,
                        listScrollerRef: C,
                        createDMCTAButtonVariant: m,
                        children: [
                            N && !E
                                ? (0, r.jsx)(
                                      eI,
                                      { selected: null != b ? b === eu.Z5c.ME_ACTIVITY : l === eu.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      eO,
                                      { selected: null != b ? b === eu.Z5c.FRIENDS : l === eu.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !E && j
                                ? (0, r.jsx)(
                                      eE,
                                      { selected: null != b ? b === eu.Z5c.ICYMI : l === eu.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !E
                                ? (0, r.jsx)(
                                      ey,
                                      {
                                          selected:
                                              null == b
                                                  ? null != l && l.startsWith(eu.Z5c.APPLICATION_LIBRARY)
                                                  : b.startsWith(eu.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === eu.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !E
                                ? (0, r.jsx)(
                                      eS,
                                      {
                                          selected:
                                              null == b
                                                  ? null != l && l.startsWith(eu.Z5c.MESSAGE_REQUESTS)
                                                  : b === eu.Z5c.MESSAGE_REQUESTS,
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
                                                  selected: null == b ? s : b.startsWith(eu.Z5c.APPLICATION_STORE),
                                                  route: eu.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: ex(l),
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
                                      T.i,
                                      {
                                          selected:
                                              b === eu.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(eu.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: v,
                                          locationState: {
                                              analyticsSource: {
                                                  page: ex(l),
                                                  section: eu.jXE.NAVIGATION,
                                                  object: eu.qAy.NAVIGATION_LINK,
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
                                              (null != l && l.startsWith(eu.Z5c.FAMILY_CENTER)) ||
                                              (null != b && b.startsWith(eu.Z5c.FAMILY_CENTER)),
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
                                              null == b
                                                  ? null != l && l.startsWith(eu.Z5c.QUEST_HOME_V2)
                                                  : b === eu.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            E || O ? null : (0, r.jsx)(eZ, {}, "section-divider-top"),
                            O ? null : (0, r.jsx)(A.Z, {}, "frequent-friends"),
                            "full-width" !== m || O || E ? null : (0, r.jsx)(ev, {}, "create-dm"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function eZ() {
    return (0, r.jsx)("div", { className: eh.sectionDivider });
}
function ew() {
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
        m = (0, W.eW)(),
        h = (0, Y._h)(),
        g = [];
    (0, j.Kl)() && (m && g.push(f.z.REFERRAL_PROGRAM_POPOVER), h && g.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, P.US)(g, void 0, !0),
        E = (0, M.a)(),
        O = (function () {
            let e = en.Ex.useSetting(),
                t = (0, k.Z)();
            return !0 === e && !0 === t;
        })(),
        I = (0, Z.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: y } = (0, s.TH)(),
        v = y.startsWith(eu.Z5c.CHANNEL(eu.ME)) && y !== eu.Z5c.CHANNEL(eu.ME) && y !== eu.Z5c.ME_ACTIVITY,
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
        createDMButtonVariant: I,
        selectedChannelId: c,
        path: u,
        onlyShowDMs: v && C,
        hideAllDMs: !v && C,
    });
}
