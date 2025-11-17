n.d(t, {
    Z: () => eZ,
    d: () => eA,
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
    h = n(952265),
    g = n(194983),
    m = n(481060),
    _ = n(493683),
    b = n(529103),
    E = n(515753),
    O = n(831218),
    y = n(339149),
    v = n(607070),
    I = n(557968),
    C = n(213609),
    S = n(463119),
    T = n(377171),
    N = n(211644),
    j = n(426032),
    P = n(243778),
    x = n(702456),
    A = n(882579),
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
    H = n(795448),
    V = n(441623),
    F = n(382834),
    z = n(675957),
    Y = n(93237),
    W = n(138176),
    q = n(457396),
    K = n(108989),
    Q = n(362870),
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
    ed = n(474936),
    ep = n(388032),
    ef = n(597754),
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
                      E.Qj,
                      eg(
                          {
                              selected: t,
                              route: ec.Z5c.ICYMI,
                              icon: m.qOE,
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
            s = (0, p.e7)([V.Z], () => V.Z.canShowFriendsTabBadge()),
            o = (0, p.e7)([v.Z], () => v.Z.useReducedMotion),
            { enabled: d } = B.w.getConfig({ location: "Friends Tab" }),
            f = s && d;
        i.useEffect(() => {
            f &&
                (0, C.h)({
                    name: c.ImpressionNames.GIFT_INTENT_BADGE,
                    type: c.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: ed.hX.FRIEND_ANNIVERSARY },
                });
        }, [f]);
        let [h, g] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: eh.friendsButtonContainer,
            children: [
                (0, r.jsx)(
                    E.Qj,
                    em(
                        eg(
                            {
                                onClick: () => {
                                    let e;
                                    f
                                        ? (es.default.track(ec.rMx.GIFT_INTENT_BADGE_CLICKED, {
                                              gift_intent_type: ed.hX.FRIEND_ANNIVERSARY,
                                          }),
                                          (e = ec.pJs.ALL),
                                          b.Z.setSection(ec.pJs.ALL),
                                          (0, H.Gk)())
                                        : (e = ea.ZP.getState().section),
                                        (0, I.Z)({ tab_opened: e });
                                },
                                interactiveClassName: f ? eh.friendsBadge : void 0,
                                selected: t,
                                route: ec.Z5c.FRIENDS,
                                icon: m.iFz,
                                text: ep.intl.string(ep.t.TdEu5X),
                                onMouseEnter: () => {
                                    g(!0);
                                },
                                onMouseLeave: () => {
                                    g(!1);
                                },
                            },
                            n,
                            l,
                        ),
                        { children: a > 0 ? (0, r.jsx)(m.mAB, { count: a }) : null },
                    ),
                ),
                f &&
                    !o &&
                    (0, r.jsx)(K.Z, {
                        className: eh.confetti,
                        wind: 0,
                        sprites: eu.CA,
                        spriteColors: eu.Br,
                        firing: h,
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
    eO = (e) => {
        var { selected: t } = e,
            n = e_(e, ["selected"]);
        let i = (0, u.JA)("activity");
        return (0, r.jsx)("div", {
            className: eh.friendsButtonContainer,
            children: (0, r.jsx)(
                E.Qj,
                eg(
                    {
                        selected: t,
                        route: ec.Z5c.ME_ACTIVITY,
                        icon: m.g8d,
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
            E.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: ec.Z5c.APPLICATION_LIBRARY,
                        icon: m.vqy,
                        text: ep.intl.string(ep.t.cw57ar),
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
            children: (0, r.jsx)(Z.l, {
                fullWidth: !0,
                text: ep.intl.string(ep.t["6Urw1t"]),
                icon: m.kL_,
                size: "sm",
                subscribeToGlobalHotkey: !0,
            }),
        }),
    eI = () => {
        let e = (0, R.q)();
        return e > 0 ? (0, r.jsx)(m.mAB, { count: e }) : null;
    },
    eC = (e) => {
        let { selected: t } = e,
            n = (0, u.JA)("messageRequests"),
            { channelId: i } = (0, L._)();
        if (!(0, D.a)()) return null;
        let l = null == i ? void 0 : () => _.Z.preload(ec.ME, i);
        return (0, r.jsx)(
            E.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: ec.Z5c.MESSAGE_REQUESTS,
                        icon: m._XJ,
                        text: ep.intl.string(ep.t.e7GWjQ),
                        onClick: l,
                    },
                    n,
                ),
                { children: (0, r.jsx)(eI, {}) },
            ),
        );
    },
    eS = (e) => {
        let { selected: t } = e,
            n = ep.intl.string(ef.default.Rkdixs),
            l = (0, u.JA)("family-center"),
            [a, s] = i.useState(!0);
        return (0, r.jsx)(
            E.Qj,
            em(
                eg(
                    {
                        selected: t,
                        route: ec.Z5c.FAMILY_CENTER,
                        icon: m.BFJ,
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
                { children: (0, r.jsx)(eT, { isParentHovered: a }) },
            ),
        );
    },
    eT = (e) => {
        let { isParentHovered: t } = e,
            i = (0, k.gU)();
        return t
            ? (0, r.jsx)("div", {
                  className: eh.familyCenterButtonContainer,
                  children: (0, r.jsx)(E.bU, {
                      onClick: () => {
                          (0, h.ZD)(async () => {
                              let { default: e } = await n.e("44153").then(n.bind(n, 760949));
                              return (t) => (0, r.jsx)(e, eg({}, t));
                          });
                      },
                      "aria-label": ep.intl.string(ep.t.cpT0Cq),
                      icon: m.Dio,
                  }),
              })
            : i > 0
              ? (0, r.jsx)("div", {
                    className: a()(eh.familyCenterButtonContainer, eh.withPadding),
                    children: (0, r.jsx)(m.mAB, { count: i }),
                })
              : (0, r.jsx)("div", {
                    className: eh.familyCenterButtonContainer,
                    children: (0, r.jsx)(P.ZP, {
                        contentTypes: [f.z.FAMILY_CENTER_NEW_BADGE],
                        children: (e) => {
                            let { visibleContent: t } = e;
                            return t === f.z.FAMILY_CENTER_NEW_BADGE
                                ? (0, r.jsx)(m.IGR, {
                                      text: ep.intl.string(ep.t.y2b7CA),
                                      color: T.Z.BG_BRAND,
                                  })
                                : null;
                        },
                    }),
                });
    },
    eN = () =>
        (0, r.jsxs)("div", {
            className: eh.directMessagesHeader,
            children: [
                (0, r.jsx)(m.Text, {
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
    ej = () => (0, J.$Z)("DM_SEARCH");
function eP(e) {
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
let ex = i.memo(function (e) {
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
            selectedChannelId: _,
            path: b,
            onlyShowDMs: E,
            hideAllDMs: y,
        } = e,
        v = i.useRef(null),
        I = i.useRef(null),
        C = i.useRef(null),
        T = i.useRef(null),
        N = U.o.useConfig({ location: "privatechannels" }).friendsTab,
        j = (0, w.b5)("PrivateChannels"),
        P = null;
    return (
        c ? (P = (0, r.jsx)(W.F, { targetElementRef: T })) : u && (P = (0, r.jsx)(F.d, { targetElementRef: T })),
        (0, r.jsxs)("nav", {
            className: eh.privateChannels,
            "aria-label": ep.intl.string(ep.t.ZH9aP4),
            children: [
                E
                    ? (0, r.jsx)(eN, {})
                    : (0, r.jsx)($.Z, {
                          childRef: v,
                          tutorialId: "direct-messages",
                          position: "right",
                          offsetX: -52,
                          children: (0, r.jsx)("div", {
                              ref: v,
                              className: a()(eh.searchBar, { [eh.themedHeaderMobile]: d.tq }),
                              children: (0, r.jsx)(m.Button, {
                                  fullWidth: !0,
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: ej,
                                  text: ep.intl.format(ep.t.fH9FBy, {
                                      tooltipHook: (e, t) => (0, r.jsx)(g.Z, { children: e }, t),
                                  }),
                              }),
                          }),
                      }),
                (0, r.jsxs)(
                    O.Z,
                    em(eg({}, e), {
                        version: b,
                        selectedChannelId: _,
                        showDMHeader: !y && !E,
                        hideAllDMs: y,
                        listScrollerRef: C,
                        createDMCTAButtonVariant: h,
                        children: [
                            N && !E
                                ? (0, r.jsx)(
                                      eO,
                                      { selected: null != b ? b === ec.Z5c.ME_ACTIVITY : l === ec.Z5c.ME_ACTIVITY },
                                      "activity_experimental",
                                  )
                                : null,
                            E
                                ? null
                                : (0, r.jsx)(
                                      eE,
                                      { selected: null != b ? b === ec.Z5c.FRIENDS : l === ec.Z5c.FRIENDS },
                                      "friends",
                                  ),
                            !E && j
                                ? (0, r.jsx)(
                                      eb,
                                      { selected: null != b ? b === ec.Z5c.ICYMI : l === ec.Z5c.ICYMI },
                                      "icymi",
                                  )
                                : null,
                            n && t && !E
                                ? (0, r.jsx)(
                                      ey,
                                      {
                                          selected:
                                              null == b
                                                  ? null != l && l.startsWith(ec.Z5c.APPLICATION_LIBRARY)
                                                  : b.startsWith(ec.Z5c.APPLICATION_LIBRARY),
                                          hideGameUpdateProgressIndicator: l === ec.Z5c.APPLICATION_LIBRARY,
                                      },
                                      "library",
                                  )
                                : null,
                            p && !E
                                ? (0, r.jsx)(
                                      eC,
                                      {
                                          selected:
                                              null == b
                                                  ? null != l && l.startsWith(ec.Z5c.MESSAGE_REQUESTS)
                                                  : b === ec.Z5c.MESSAGE_REQUESTS,
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
                                                  nitroTabButtonRef: T,
                                                  selected: null == b ? s : b.startsWith(ec.Z5c.APPLICATION_STORE),
                                                  route: ec.Z5c.APPLICATION_STORE,
                                                  locationState: {
                                                      analyticsSource: {
                                                          page: eP(l),
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
                                      S.i,
                                      {
                                          selected:
                                              b === ec.Z5c.COLLECTIBLES_SHOP ||
                                              (null == l ? void 0 : l.startsWith(ec.Z5c.COLLECTIBLES_SHOP)),
                                          listItemRef: I,
                                          locationState: {
                                              analyticsSource: {
                                                  page: eP(l),
                                                  section: ec.jXE.NAVIGATION,
                                                  object: ec.qAy.NAVIGATION_LINK,
                                              },
                                          },
                                      },
                                      "discord-shop",
                                  ),
                            f && !E
                                ? (0, r.jsx)(
                                      eS,
                                      {
                                          selected:
                                              (null != l && l.startsWith(ec.Z5c.FAMILY_CENTER)) ||
                                              (null != b && b.startsWith(ec.Z5c.FAMILY_CENTER)),
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
                                              null == b
                                                  ? null != l && l.startsWith(ec.Z5c.QUEST_HOME_V2)
                                                  : b === ec.Z5c.QUEST_HOME_V2,
                                      },
                                      "quests",
                                  ),
                            E || y ? null : (0, r.jsx)(eA, {}, "section-divider-top"),
                            y ? null : (0, r.jsx)(x.Z, {}, "frequent-friends"),
                            "full-width" !== h || y || E ? null : (0, r.jsx)(ev, {}, "create-dm"),
                        ],
                    }),
                ),
            ],
        })
    );
});
function eA() {
    return (0, r.jsx)("div", { className: eh.sectionDivider });
}
function eZ() {
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
    (0, N.Kl)() && (h && m.push(f.z.REFERRAL_PROGRAM_POPOVER), g && m.push(f.z.RECURRING_3P_PROMOTION_POPOVER));
    let [_, b] = (0, j.US)(m, void 0, !0),
        E = (0, D.a)(),
        O = (function () {
            let e = et.Ex.useSetting(),
                t = (0, M.Z)();
            return !0 === e && !0 === t;
        })(),
        y = (0, A.U)("PrivateChannels", { autoTrackExposure: !0 }),
        { pathname: v } = (0, s.TH)(),
        I = v.startsWith(ec.Z5c.CHANNEL(ec.ME)) && v !== ec.Z5c.CHANNEL(ec.ME) && v !== ec.Z5c.ME_ACTIVITY,
        C = U.o.useConfig({ location: "privatechannels" }).dmsTab;
    return (0, r.jsx)(ex, {
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
