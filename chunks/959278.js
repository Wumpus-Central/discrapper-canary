n.d(t, { A: () => ti });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(492462),
    o = n(960488),
    d = n(110259),
    c = n(156828),
    u = n(607399),
    A = n(311907),
    h = n(506774),
    _ = n(397927),
    m = n(843472),
    p = n(816015),
    g = n(183994),
    E = n(153244),
    I = n(772614),
    f = n(18422),
    C = n(512155),
    N = n(16099),
    T = n(761929),
    S = n(458518),
    x = n(107361),
    v = n(389405),
    b = n(549711),
    y = n(313961),
    L = n(264140),
    O = n(72800),
    R = n(811736),
    P = n(696086),
    j = n(500831),
    D = n(491026),
    w = n(920814),
    M = n(475419),
    U = n(287344),
    G = n(91242),
    k = n(478071),
    V = n(351466),
    B = n(184453),
    H = n(386467),
    F = n(490358),
    Y = n(961973),
    W = n(140354),
    q = n(551036),
    z = n(46533),
    K = n(467627),
    $ = n(379610),
    Q = n(920113),
    X = n(164956),
    Z = n(209700),
    J = n(9588),
    ee = n(939846),
    et = n(862658),
    en = n(813160),
    ei = n(916768),
    er = n(851109),
    ea = n(667429),
    el = n(480680),
    es = n(767060),
    eo = n(18635),
    ed = n(488803),
    ec = n(176031),
    eu = n(710969),
    eA = n(570763),
    eh = n(376708),
    e_ = n(272720),
    em = n(366811),
    ep = n(77509),
    eg = n(463347),
    eE = n(976860),
    eI = n(97469),
    ef = n(734057),
    eC = n(650048),
    eN = n(696451),
    eT = n(71393),
    eS = n(309010),
    ex = n(519057),
    ev = n(954571),
    eb = n(403362),
    ey = n(661191),
    eL = n(349320),
    eO = n(652215),
    eR = n(746080),
    eP = n(758836),
    ej = n(539916),
    eD = n(613057),
    ew = n(933460);
let eM = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eU = () => (0, i.jsx)("div", { className: ew.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eG = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eU,
    }),
    ek = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eU,
    }),
    eV = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eU,
    }),
    eB = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eU,
    }),
    eH = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eU,
    }),
    eF = (0, c.Fe)({
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
        renderLoader: eU,
    }),
    eY = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eU,
    }),
    eW = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eU,
    }),
    eq = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eU,
    }),
    ez = (e) => {
        let { match: t } = e,
            n = (0, S.o)(),
            r = (0, A.bG)([ef.A, eS.A], () => {
                let e = eS.A.getChannelId();
                return ef.A.getChannel(e);
            }),
            { guildId: a, channelId: l, messageId: s, threadId: d } = t.params,
            c = l ?? void 0;
        null == c && null != t.params.gameShopPageIndex && (c = eR.VV.GAME_SHOP);
        let u = (0, A.bG)([eT.A], () => eT.A.getGuild(a)),
            h = (0, A.bG)([eN.Ay], () => (null == a ? null : eN.Ay.getSelfMember(a))),
            _ = (0, ed.C$)(a, "ChannelRenderer"),
            m = u?.features?.has(eO.GuildFeatures.GAME_SERVERS) === !0,
            g = (0, A.bG)([X.A], () => {
                if (null == a) return;
                let e = X.A.getData(a);
                if (e?.type === Z._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return w.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return w.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, eh.C$)(c) && (0, eh.C$)(d)) || (null != u && (0, eE.pX)(eO.BVt.CHANNEL(u.id, (0, e_.A)(u))), (0, J.E)());
        let E = (0, D.p9)(a, "channel_renderer");
        if (null != a && null != c && (0, eR.jq)(c))
            switch (c) {
                case eR.VV.ROLE_SUBSCRIPTIONS:
                    return E
                        ? (0, i.jsx)(eG, { guildId: a, initialTab: w.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(q.A, { guildId: a });
                case eR.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eV, { guildId: a });
                case eR.VV.GAME_SHOP:
                    return (0, i.jsx)(ek, { ...e });
                case eR.VV.GUILD_SHOP:
                    return (0, i.jsx)(eG, { guildId: a, productId: s, initialTab: g });
                case eR.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eO.BVt.CHANNEL(a, eR.VV.MEMBER_SAFETY) });
                case eR.VV.GUILD_HOME:
                    return (0, i.jsx)(eB, { guildId: a });
                case eR.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eF, { guildId: a, selectedSection: ej.qC.BROWSE });
                case eR.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eY, { guildId: a });
                case eR.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eF, { guildId: a, selectedSection: ej.qC.CUSTOMIZE });
                case eR.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eH, { guildId: a });
                case eR.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eW, {
                        guildId: a,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eR.VV.GAME_SERVERS:
                    if (!_ || !m) return (0, i.jsx)(o.rd, { to: eO.BVt.CHANNEL(a) });
                    return (0, i.jsx)(eq, { guildId: a });
                case eR.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(L.A, {});
                default:
                    (0, eb.xb)(c);
            }
        if ((0, Y.$Y)(u, h)) return (0, i.jsx)(W.A, { guildId: a, channelId: c });
        if (r?.type === eO.rbe.GUILD_STORE) {
            let e = ey.default.cast(t.params.messageId);
            return (0, i.jsx)(p.A, { channel: r, inputSkuId: e }, r.id);
        }
        return (0, i.jsx)(L.A, {});
    },
    eK = r.memo(function () {
        let { guildId: e, channelId: t } = (0, em.A)(),
            { notificationCenterVariant: n } = (0, er.X8)({ location: "Sidebar" }),
            r = (0, A.bG)([eS.A], () => t ?? eS.A.getChannelId(e));
        return window.location.pathname.startsWith(eO.BVt.CHANNEL(eO.gNP))
            ? ("sidebar" !== n && (0, eE.bG)(eC.A.defaultRoute), (0, i.jsx)(el.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eO.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eO.BVt.GUILD_DISCOVERY) ||
                (0, eu.r$)()
              ? (0, i.jsx)(B.A, {})
              : null != e
                ? (0, i.jsx)(z.A, { selectedChannelId: r, guildId: e }, e)
                : (0, i.jsx)(ec.A, {});
    }),
    e$ = (e) => (0, i.jsx)(ez, { ...e }),
    eQ = () => (0, i.jsx)(V.A, {}),
    eX = (e) => (0, i.jsx)(eZ, { ...e }),
    eZ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (r.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(ea.A, {})
            : e$(e);
    },
    eJ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(F.A, { guildId: t.params.guildId }) : null;
    },
    e0 = (e) => {
        let { match: t } = e;
        return (0, eE.pX)(eO.BVt.ME), (0, $.A)(t.params.inviteCode), null;
    },
    e1 = () => (0, i.jsx)(E.A, {}),
    e7 = () => (0, i.jsx)(I.A, {}),
    e6 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eP.G2).includes(t) ? (0, i.jsx)(R.A, { tab: t, ...e }) : (0, i.jsx)(R.A, { ...e });
        };
function e9() {
    return (0, i.jsx)(eA.A, { topLevelRoute: !0 });
}
let e5 = (e) => (0, i.jsx)(v.A, { ...e }),
    e2 = () => (0, i.jsx)(eo.A, {}),
    e3 = () => (0, i.jsx)(Q.A, {}),
    e4 = () => (0, i.jsx)(ee.A, {}),
    e8 = () => (0, i.jsx)(es.A, {}),
    te = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(f.A, {
            deepLinkType: eD.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(eo.A, { initialSection: eO.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(eo.A, { initialSection: eO.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(eo.A, { initialSection: eO.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: eO.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(eP.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eO.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eO.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: eO.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eO.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let r = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eO.BVt.POWERUP_STORE(r) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: eO.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: eO.BVt.ME });
                }
            })(e),
        });
    };
function tt(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function tn(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: a, hideChannelList: s, isSidebarOpen: o } = e;
    (0, N.q)(!0);
    let d = "app view user trigger debugging";
    C.tz.useExperiment({ location: d }, { autoTrackExposure: !1 }), C.tz.trackExposure({ location: d });
    let c = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        m = (0, M.D)("ChannelSidebar"),
        p = (0, j.useAppSidebarState)((e) => !e.isOpen) && m;
    r.useLayoutEffect(() => {
        if (m) {
            let e = parseInt(h.w.get(g.o) ?? "");
            Number.isNaN(e) && (e = 375), (e = Math.min(Math.max(e, 264), 432)), !m && e <= 76 && (e = 375), tt(e);
            let t = (e) => {
                e.metaKey && "b" === e.key && j.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener("keydown", t),
                () => {
                    document.removeEventListener("keydown", t);
                }
            );
        }
    }, [m]),
        r.useLayoutEffect(() => {
            if (p) tt(76);
            else {
                let e = parseInt(h.w.get(g.o) ?? "");
                Number.isNaN(e) && (e = 375), tt(e);
            }
        }, [p]);
    let E = r.useRef(null),
        I = r.useCallback(
            (e, t) => {
                tt(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(ew._A) : document.body.classList.remove(ew._A),
                    t >= 432 ? document.body.classList.add(ew.uN) : document.body.classList.remove(ew.uN);
                let i = t - e;
                E.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    m && (j.useAppSidebarState.setState({ isOpen: !n }), n && tt(76));
            },
            [m],
        ),
        f = r.useCallback(() => {
            document.body.classList.add(ew.cB);
        }, []),
        S = r.useCallback((e) => {
            document.body.classList.remove(ew.cB),
                document.body.classList.remove(ew._A),
                document.body.classList.remove(ew.uN),
                document.body.classList.remove(ew.l4),
                E.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(g.o, e),
                ev.default.track(eO.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        x = (0, T.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: E,
            onElementResize: I,
            onElementResizeStart: f,
            onElementResizeEnd: S,
            orientation: T.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        v = r.useCallback(() => {
            j.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            p && tt(76);
        }, [p]),
        a)
    )
        return null;
    let b = { className: l()(ew.th, { [ew.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: E,
                "data-collapsed": p,
                className: l()(ew.pz, e, { [ew.Ij]: u.Fr, [ew.R]: c, [ew.WG]: s }),
                children: [
                    o && (0, i.jsx)(K.A, { className: ew.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...b, children: (0, i.jsx)(eK, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: v,
                                    "aria-label": "Resize Sidebar",
                                    className: ew.tq,
                                    onMouseDown: x,
                                }),
                                (0, i.jsx)(eL.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function ti() {
    let e,
        t = (0, A.bG)([ex.Ay], () => ex.Ay.hasNotice()),
        n = (0, eI.NC)(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eO.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                r.useEffect(
                    () =>
                        ep.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eO.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        l =
            ((e = (0, o.zy)()),
            (0, o.B6)(e.pathname, eO.BVt.GUILD_BOOSTING_MARKETING(eg.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([en.A], () => en.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, er.X8)({ location: "Sidebar" }),
        h = (0, U.f)("AppView"),
        _ = (0, o.W5)([
            eO.BVt.CHANNEL(eO.ME, eg.pv.channelId()),
            eO.BVt.CHANNEL(eg.pv.guildId(), eg.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eR.VV.GUILD_ONBOARDING,
        p = r.useCallback(() => et.A.openSidebar(), []),
        g = (0, M.D)("AppView"),
        E = (0, j.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        f = (0, A.bG)([G.A], () => G.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: ew.kL,
        children: (0, i.jsx)(H.A.Provider, {
            value: _?.params.guildId === eO.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: ew.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(eM, {}),
                    u.Fr ? null : (0, i.jsx)(ei.A, {}),
                    (0, i.jsxs)("div", {
                        className: ew.Qs,
                        children: [
                            (0, i.jsx)(O.A, {}),
                            (0, i.jsx)(tn, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: a || l || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: ew.MY,
                                "data-collapsed": !!g && E,
                                children: (0, i.jsxs)(x.A.Provider, {
                                    value: p,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eO.BVt.ME }),
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e5,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.APPLICATION_LIBRARY,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.APPLICATION_STORE,
                                                    render: e7,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(b.A, {
                                                        path: eO.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: r } = t.params;
                                                            return null == r || "" === r
                                                                ? (0, i.jsx)(R.A, { ...n })
                                                                : (0, i.jsx)(P.A, { layoutId: r, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.COLLECTIBLES_SHOP,
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, { path: eO.BVt.ICYMI, render: e3, disableTrack: !0 }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.MESSAGE_REQUESTS,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.FAMILY_CENTER,
                                                    render: e8,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.ME,
                                                    exact: !0,
                                                    render: e2,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === er.U5.SIDEBAR &&
                                                    (0, i.jsx)(b.A, {
                                                        path: eO.BVt.CHANNEL(
                                                            eO.gNP,
                                                            eg.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eX,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(b.A, {
                                                    path: [
                                                        eO.BVt.CHANNEL_THREAD_VIEW(
                                                            eg.pv.guildId(),
                                                            eg.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eO.BVt.CHANNELS_GAME_SHOP(
                                                            eg.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eO.BVt.CHANNEL(eO.ME, eg.pv.channelId()),
                                                        eO.BVt.CHANNEL(
                                                            eg.pv.guildId(),
                                                            eg.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GLOBAL_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.QUEST_HOME,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.QUEST_HOME_V2,
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GUILD_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GUILD_MEMBER_VERIFICATION(eg.pv.guildId()),
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eg.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.GUILD_FEATURE(":feature", eg.pv.guildId()),
                                                    exact: !0,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: eO.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        f && (0, i.jsx)(k.A, {}),
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
