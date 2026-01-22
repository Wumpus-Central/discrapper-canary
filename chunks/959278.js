n.d(t, { A: () => tn }), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(492462),
    o = n(960488),
    c = n(110259),
    u = n(156828),
    d = n(607399),
    p = n(311907),
    f = n(506774),
    h = n(397927),
    A = n(843472),
    g = n(816015),
    m = n(183994),
    b = n(153244),
    _ = n(772614),
    E = n(18422),
    O = n(512155),
    y = n(16099),
    I = n(761929),
    v = n(458518),
    S = n(107361),
    C = n(389405),
    N = n(549711),
    T = n(313961),
    j = n(264140),
    x = n(72800),
    P = n(811736),
    w = n(500831),
    L = n(491026),
    R = n(920814),
    D = n(475419),
    M = n(91242),
    k = n(478071),
    U = n(351466),
    G = n(184453),
    V = n(386467),
    B = n(490358),
    H = n(961973),
    F = n(140354),
    Y = n(551036),
    K = n(46533),
    z = n(467627),
    W = n(379610),
    q = n(920113),
    Q = n(164956),
    X = n(209700),
    Z = n(9588),
    J = n(939846),
    $ = n(862658),
    ee = n(813160),
    et = n(916768),
    en = n(851109),
    er = n(667429),
    ei = n(480680),
    el = n(767060),
    ea = n(18635),
    es = n(488803),
    eo = n(176031),
    ec = n(710969),
    eu = n(570763),
    ed = n(376708),
    ep = n(272720),
    ef = n(366811),
    eh = n(77509),
    eA = n(463347),
    eg = n(976860),
    em = n(97469),
    eb = n(734057),
    e_ = n(650048),
    eE = n(696451),
    eO = n(71393),
    ey = n(309010),
    eI = n(519057),
    ev = n(954571),
    eS = n(403362),
    eC = n(661191),
    eN = n(349320),
    eT = n(652215),
    ej = n(746080),
    ex = n(758836),
    eP = n(539916),
    ew = n(613057),
    eL = n(933460);
function eR(e) {
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
let eD = (0, u.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 500831)),
        webpackId: 500831,
    }),
    eM = () =>
        (0, r.jsx)("div", {
            className: eL.wG,
            children: (0, r.jsx)(h.y$y, {}),
        }),
    ek = (0, u.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eM,
    }),
    eU = (0, u.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eM,
    }),
    eG = (0, u.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eM,
    }),
    eV = (0, u.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eM,
    }),
    eB = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eM,
    }),
    eH = (0, u.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("50796"),
                n.e("16939"),
                n.e("72165"),
            ]).then(n.bind(n, 963878)),
        webpackId: 963878,
        name: "ChannelsAndRolesPage",
        renderLoader: eM,
    }),
    eF = (0, u.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eM,
    }),
    eY = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eM,
    }),
    eK = (0, u.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eM,
    }),
    ez = (e) => {
        var t, n;
        let { match: i } = e,
            l = (0, v.o)(),
            a = (0, p.bG)([eb.A, ey.A], () => {
                let e = ey.A.getChannelId();
                return eb.A.getChannel(e);
            }),
            { guildId: s, channelId: c, messageId: u, threadId: d } = i.params,
            f = null != c ? c : void 0;
        null == f && null != i.params.gameShopPageIndex && (f = ej.VV.GAME_SHOP);
        let h = (0, p.bG)([eO.A], () => eO.A.getGuild(s)),
            A = (0, p.bG)([eE.Ay], () => (null == s ? null : eE.Ay.getSelfMember(s))),
            m = (0, es.C$)(s, "ChannelRenderer"),
            b = (null == h || null == (t = h.features) ? void 0 : t.has(eT.GuildFeatures.GAME_SERVERS)) === !0,
            _ = (0, p.bG)([Q.A], () => {
                if (null == s) return;
                let e = Q.A.getData(s);
                if ((null == e ? void 0 : e.type) === X._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return R.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return R.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, ed.C$)(f) && (0, ed.C$)(d)) || (null != h && (0, eg.pX)(eT.BVt.CHANNEL(h.id, (0, ep.A)(h))), (0, Z.E)());
        let E = (0, L.p9)(s, "channel_renderer");
        if (null != s && null != f && (0, ej.jq)(f))
            switch (f) {
                case ej.VV.ROLE_SUBSCRIPTIONS:
                    return E
                        ? (0, r.jsx)(ek, {
                              guildId: s,
                              initialTab: R.B.GUILD_ROLE_SUBSCRIPTIONS,
                          })
                        : (0, r.jsx)(Y.A, { guildId: s });
                case ej.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, r.jsx)(eG, { guildId: s });
                case ej.VV.GAME_SHOP:
                    return (0, r.jsx)(eU, eR({}, e));
                case ej.VV.GUILD_SHOP:
                    return (0, r.jsx)(ek, {
                        guildId: s,
                        productId: u,
                        initialTab: _,
                    });
                case ej.VV.MEMBER_APPLICATIONS:
                    return (0, r.jsx)(o.rd, { to: eT.BVt.CHANNEL(s, ej.VV.MEMBER_SAFETY) });
                case ej.VV.GUILD_HOME:
                    return (0, r.jsx)(eV, { guildId: s });
                case ej.VV.CHANNEL_BROWSER:
                    return (0, r.jsx)(eH, {
                        guildId: s,
                        selectedSection: eP.qC.BROWSE,
                    });
                case ej.VV.GUILD_ONBOARDING:
                    return (0, r.jsx)(eF, { guildId: s });
                case ej.VV.CUSTOMIZE_COMMUNITY:
                    return (0, r.jsx)(eH, {
                        guildId: s,
                        selectedSection: eP.qC.CUSTOMIZE,
                    });
                case ej.VV.MEMBER_SAFETY:
                    return (0, r.jsx)(eB, { guildId: s });
                case ej.VV.GUILD_BOOSTS:
                    return (0, r.jsx)(eY, {
                        guildId: s,
                        powerupListingId: null != (n = l.get("powerupId")) ? n : l.get("powerupSkuId"),
                    });
                case ej.VV.GAME_SERVERS:
                    if (!m || !b) return (0, r.jsx)(o.rd, { to: eT.BVt.CHANNEL(s) });
                    return (0, r.jsx)(eK, { guildId: s });
                case ej.VV.REPORT_TO_MOD:
                    return (0, r.jsx)(j.A, {});
                default:
                    (0, eS.xb)(f);
            }
        if ((0, H.$Y)(h, A))
            return (0, r.jsx)(F.A, {
                guildId: s,
                channelId: f,
            });
        if ((null == a ? void 0 : a.type) === eT.rbe.GUILD_STORE) {
            let e = eC.default.cast(i.params.messageId);
            return (0, r.jsx)(
                g.A,
                {
                    channel: a,
                    inputSkuId: e,
                },
                a.id,
            );
        }
        return (0, r.jsx)(j.A, {});
    },
    eW = i.memo(function () {
        let { guildId: e, channelId: t } = (0, ef.A)(),
            { notificationCenterVariant: n } = (0, en.X8)({ location: "Sidebar" }),
            i = (0, p.bG)([ey.A], () => (null != t ? t : ey.A.getChannelId(e)));
        return window.location.pathname.startsWith(eT.BVt.CHANNEL(eT.gNP))
            ? ("sidebar" !== n && (0, eg.bG)(e_.A.defaultRoute), (0, r.jsx)(ei.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eT.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eT.BVt.GUILD_DISCOVERY) ||
                (0, ec.r$)()
              ? (0, r.jsx)(G.A, {})
              : null != e
                ? (0, r.jsx)(
                      K.A,
                      {
                          selectedChannelId: i,
                          guildId: e,
                      },
                      e,
                  )
                : (0, r.jsx)(eo.A, {});
    }),
    eq = (e) => (0, r.jsx)(ez, eR({}, e)),
    eQ = () => (0, r.jsx)(U.A, {}),
    eX = (e) => (0, r.jsx)(eZ, eR({}, e)),
    eZ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (i.useEffect(() => {
            null != t &&
                null != n &&
                A.A.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, r.jsx)(er.A, {})
            : eq(e);
    },
    eJ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, r.jsx)(B.A, { guildId: t.params.guildId }) : null;
    },
    e$ = (e) => {
        let { match: t } = e;
        return (0, eg.pX)(eT.BVt.ME), (0, W.A)(t.params.inviteCode), null;
    },
    e0 = () => (0, r.jsx)(b.A, {}),
    e1 = () => (0, r.jsx)(_.A, {}),
    e6 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ex.G2).includes(t) ? (0, r.jsx)(P.A, eR({ tab: t }, e)) : (0, r.jsx)(P.A, eR({}, e));
        };
function e9() {
    return (0, r.jsx)(eu.A, { topLevelRoute: !0 });
}
let e7 = (e) => (0, r.jsx)(C.A, eR({}, e)),
    e8 = () => (0, r.jsx)(ea.A, {}),
    e5 = () => (0, r.jsx)(q.A, {}),
    e2 = () => (0, r.jsx)(J.A, {}),
    e3 = () => (0, r.jsx)(el.A, {}),
    e4 = (e) => {
        let t = e.location.pathname;
        return (0, r.jsx)(E.A, {
            deepLinkType: ew.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, r.jsx)(ea.A, { initialSection: eT.m3P.ONLINE });
                    case "addFriends":
                        return (0, r.jsx)(ea.A, { initialSection: eT.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, r.jsx)(ea.A, { initialSection: eT.m3P.PENDING });
                    case "sessionManagement":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, r.jsx)(o.rd, {
                            to: {
                                pathname: eT.BVt.SETTINGS("connections"),
                                search: e.location.search,
                            },
                        });
                    case "family-center":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(ex.G2).includes(n))
                            return (0, r.jsx)(o.rd, { to: eT.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, r.jsx)(o.rd, { to: eT.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, r.jsx)(o.rd, { to: { pathname: eT.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, r.jsx)(o.rd, { to: { pathname: eT.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, r.jsx)(o.rd, { to: eT.BVt.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, r.jsx)(o.rd, { to: eT.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, r.jsx)(o.rd, { to: eT.BVt.ME });
                }
            })(e),
        });
    };
function te(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", "".concat(e, "px"));
}
function tt(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e;
    (0, y.q)(!0);
    let c = "app view user trigger debugging";
    O.tz.useExperiment({ location: c }, { autoTrackExposure: !1 }), O.tz.trackExposure({ location: c });
    let u = (0, p.bG)([T.A], () => T.A.isFullscreenInContext()),
        A = (0, D.D)("ChannelSidebar"),
        g = (0, w.useAppSidebarState)((e) => !e.isOpen) && A;
    i.useLayoutEffect(() => {
        if (A) {
            var e;
            let t = parseInt(null != (e = f.w.get(m.o)) ? e : "");
            Number.isNaN(t) && (t = 375), (t = Math.min(Math.max(t, 264), 432)), !A && t <= 76 && (t = 375), te(t);
            let n = (e) => {
                e.metaKey && "b" === e.key && w.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener("keydown", n),
                () => {
                    document.removeEventListener("keydown", n);
                }
            );
        }
    }, [A]),
        i.useLayoutEffect(() => {
            if (g) te(76);
            else {
                var e;
                let t = parseInt(null != (e = f.w.get(m.o)) ? e : "");
                Number.isNaN(t) && (t = 375), te(t);
            }
        }, [g]);
    let b = i.useRef(null),
        _ = i.useCallback(
            (e, t) => {
                var n;
                te(e);
                let r = t < 88;
                t <= 264 ? document.body.classList.add(eL._A) : document.body.classList.remove(eL._A),
                    t >= 432 ? document.body.classList.add(eL.uN) : document.body.classList.remove(eL.uN);
                let i = t - e;
                null == (n = b.current) ||
                    n.style.setProperty("--custom-overdrag", "".concat(1 + Math.min(Math.abs(i / 76), 0.25))),
                    A && (w.useAppSidebarState.setState({ isOpen: !r }), r && te(76));
            },
            [A],
        ),
        E = i.useCallback(() => {
            document.body.classList.add(eL.cB);
        }, []),
        v = i.useCallback((e) => {
            var t;
            document.body.classList.remove(eL.cB),
                document.body.classList.remove(eL._A),
                document.body.classList.remove(eL.uN),
                document.body.classList.remove(eL.l4),
                null == (t = b.current) || t.style.setProperty("--custom-overdrag", "0px"),
                f.w.set(m.o, e),
                ev.default.track(eT.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        S = (0, I.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: b,
            onElementResize: _,
            onElementResizeStart: E,
            onElementResizeEnd: v,
            orientation: I.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        C = i.useCallback(() => {
            w.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (i.useLayoutEffect(() => {
            g && te(76);
        }, [g]),
        l)
    )
        return null;
    let N = { className: a()(eL.th, { [eL.Qd]: !t }) };
    return (0, r.jsx)(h.NPJ, {
        theme: n,
        children: (e) => {
            var t, i;
            return (0, r.jsxs)("div", {
                ref: b,
                "data-collapsed": g,
                className: a()(eL.pz, e, {
                    [eL.Ij]: d.Fr,
                    [eL.R]: u,
                    [eL.WG]: s,
                }),
                children: [
                    o &&
                        (0, r.jsx)(z.A, {
                            className: eL.Pl,
                            themeOverride: n,
                        }),
                    !s &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    "div",
                                    ((t = eR({}, N)),
                                    (i = i = { children: (0, r.jsx)(eW, {}) }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    t),
                                ),
                                (0, r.jsx)(h.DUT, {
                                    onClick: C,
                                    "aria-label": "Resize Sidebar",
                                    className: eL.tq,
                                    onMouseDown: S,
                                }),
                                (0, r.jsx)(eN.L, {}),
                            ],
                        }),
                ],
            });
        },
    });
}
function tn() {
    var e, t;
    let n,
        l = (0, p.bG)([eI.Ay], () => eI.Ay.hasNotice()),
        a = (0, em.NC)(),
        s = (function () {
            let [e, t] = i.useState(() => window.location.pathname.startsWith(eT.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                i.useEffect(
                    () =>
                        eh.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eT.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        u =
            ((n = (0, o.zy)()),
            (null == (t = (0, o.B6)(n.pathname, eT.BVt.GUILD_BOOSTING_MARKETING(eA.pv.guildId())))
                ? void 0
                : t.isExact) === !0),
        f = (0, p.bG)([ee.A], () => ee.A.getIsOpen()),
        { notificationCenterVariant: h } = (0, en.X8)({ location: "Sidebar" }),
        A = (0, o.W5)([
            eT.BVt.CHANNEL(eT.ME, eA.pv.channelId()),
            eT.BVt.CHANNEL(eA.pv.guildId(), eA.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        g = (null == A || null == (e = A.params) ? void 0 : e.channelId) === ej.VV.GUILD_ONBOARDING,
        m = i.useCallback(() => $.A.openSidebar(), []),
        b = (0, D.D)("AppView"),
        _ = (0, w.useAppSidebarState)((e) => !e.isOpen),
        E = (0, p.bG)([T.A], () => T.A.isFullscreenInContext()),
        O = (0, p.bG)([M.A], () => M.A.isFrameActive());
    return (0, r.jsx)("div", {
        className: eL.kL,
        children: (0, r.jsx)(V.A.Provider, {
            value: (null == A ? void 0 : A.params.guildId) === eT.ME || null == A ? void 0 : A.params.guildId,
            children: (0, r.jsxs)("div", {
                className: eL.E3,
                "data-fullscreen": E,
                children: [
                    !E && (0, r.jsx)(eD, {}),
                    d.Fr ? null : (0, r.jsx)(et.A, {}),
                    (0, r.jsxs)("div", {
                        className: eL.Qs,
                        children: [
                            (0, r.jsx)(x.A, {}),
                            (0, r.jsx)(tt, {
                                isSidebarOpen: f,
                                hasNotice: l,
                                sidebarTheme: a,
                                hideChannelList: s || u || g,
                                hideSidebar: !f,
                            }),
                            (0, r.jsx)("div", {
                                className: eL.MY,
                                "data-collapsed": !!b && _,
                                children: (0, r.jsxs)(S.A.Provider, {
                                    value: m,
                                    children: [
                                        (0, r.jsxs)(o.dO, {
                                            children: [
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, r.jsx)(o.rd, { to: eT.BVt.ME }),
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e7,
                                                    impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.APPLICATION_LIBRARY,
                                                    render: e0,
                                                    impressionName: c.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.APPLICATION_STORE,
                                                    render: e1,
                                                    impressionName: c.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.COLLECTIBLES_SHOP,
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.ICYMI,
                                                    render: e5,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.MESSAGE_REQUESTS,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.FAMILY_CENTER,
                                                    render: e3,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.ME,
                                                    exact: !0,
                                                    render: e8,
                                                    impressionName: c.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                h === en.U5.SIDEBAR &&
                                                    (0, r.jsx)(N.A, {
                                                        path: eT.BVt.CHANNEL(
                                                            eT.gNP,
                                                            eA.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eX,
                                                        disableTrack: !0,
                                                    }),
                                                (0, r.jsx)(N.A, {
                                                    path: [
                                                        eT.BVt.CHANNEL_THREAD_VIEW(
                                                            eA.pv.guildId(),
                                                            eA.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eT.BVt.CHANNELS_GAME_SHOP(
                                                            eA.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eT.BVt.CHANNEL(eT.ME, eA.pv.channelId()),
                                                        eT.BVt.CHANNEL(
                                                            eA.pv.guildId(),
                                                            eA.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eq,
                                                    impressionName: c.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GLOBAL_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.QUEST_HOME,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.QUEST_HOME_V2,
                                                    render: e9,
                                                    impressionName: c.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GUILD_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: c.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GUILD_MEMBER_VERIFICATION(eA.pv.guildId()),
                                                    render: eJ,
                                                    impressionName: c.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eA.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e$,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.GUILD_FEATURE(":feature", eA.pv.guildId()),
                                                    exact: !0,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                                (0, r.jsx)(N.A, {
                                                    path: eT.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        O && (0, r.jsx)(k.A, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
