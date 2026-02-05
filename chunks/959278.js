n.d(t, { A: () => tt });
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
    f = n(772614),
    I = n(18422),
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
    P = n(500831),
    j = n(491026),
    D = n(920814),
    w = n(475419),
    M = n(91242),
    U = n(478071),
    G = n(351466),
    k = n(184453),
    V = n(386467),
    B = n(490358),
    H = n(961973),
    F = n(140354),
    Y = n(551036),
    W = n(46533),
    q = n(467627),
    z = n(379610),
    K = n(920113),
    $ = n(164956),
    Q = n(209700),
    X = n(9588),
    Z = n(939846),
    J = n(862658),
    ee = n(813160),
    et = n(916768),
    en = n(851109),
    ei = n(667429),
    er = n(480680),
    ea = n(767060),
    el = n(18635),
    es = n(488803),
    eo = n(176031),
    ed = n(710969),
    ec = n(570763),
    eu = n(376708),
    eA = n(272720),
    eh = n(366811),
    e_ = n(77509),
    em = n(463347),
    ep = n(976860),
    eg = n(97469),
    eE = n(734057),
    ef = n(650048),
    eI = n(696451),
    eC = n(71393),
    eN = n(309010),
    eT = n(519057),
    eS = n(954571),
    ex = n(403362),
    ev = n(661191),
    eb = n(349320),
    ey = n(652215),
    eL = n(746080),
    eO = n(758836),
    eR = n(539916),
    eP = n(613057),
    ej = n(933460);
let eD = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    ew = () => (0, i.jsx)("div", { className: ej.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eM = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: ew,
    }),
    eU = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: ew,
    }),
    eG = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: ew,
    }),
    ek = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: ew,
    }),
    eV = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: ew,
    }),
    eB = (0, c.Fe)({
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
        renderLoader: ew,
    }),
    eH = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: ew,
    }),
    eF = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: ew,
    }),
    eY = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: ew,
    }),
    eW = (e) => {
        let { match: t } = e,
            n = (0, S.o)(),
            r = (0, A.bG)([eE.A, eN.A], () => {
                let e = eN.A.getChannelId();
                return eE.A.getChannel(e);
            }),
            { guildId: a, channelId: l, messageId: s, threadId: d } = t.params,
            c = l ?? void 0;
        null == c && null != t.params.gameShopPageIndex && (c = eL.VV.GAME_SHOP);
        let u = (0, A.bG)([eC.A], () => eC.A.getGuild(a)),
            h = (0, A.bG)([eI.Ay], () => (null == a ? null : eI.Ay.getSelfMember(a))),
            _ = (0, es.C$)(a, "ChannelRenderer"),
            m = u?.features?.has(ey.GuildFeatures.GAME_SERVERS) === !0,
            g = (0, A.bG)([$.A], () => {
                if (null == a) return;
                let e = $.A.getData(a);
                if (e?.type === Q._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return D.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return D.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, eu.C$)(c) && (0, eu.C$)(d)) || (null != u && (0, ep.pX)(ey.BVt.CHANNEL(u.id, (0, eA.A)(u))), (0, X.E)());
        let E = (0, j.p9)(a, "channel_renderer");
        if (null != a && null != c && (0, eL.jq)(c))
            switch (c) {
                case eL.VV.ROLE_SUBSCRIPTIONS:
                    return E
                        ? (0, i.jsx)(eM, { guildId: a, initialTab: D.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(Y.A, { guildId: a });
                case eL.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eG, { guildId: a });
                case eL.VV.GAME_SHOP:
                    return (0, i.jsx)(eU, { ...e });
                case eL.VV.GUILD_SHOP:
                    return (0, i.jsx)(eM, { guildId: a, productId: s, initialTab: g });
                case eL.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: ey.BVt.CHANNEL(a, eL.VV.MEMBER_SAFETY) });
                case eL.VV.GUILD_HOME:
                    return (0, i.jsx)(ek, { guildId: a });
                case eL.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eB, { guildId: a, selectedSection: eR.qC.BROWSE });
                case eL.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eH, { guildId: a });
                case eL.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eB, { guildId: a, selectedSection: eR.qC.CUSTOMIZE });
                case eL.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eV, { guildId: a });
                case eL.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eF, {
                        guildId: a,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eL.VV.GAME_SERVERS:
                    if (!_ || !m) return (0, i.jsx)(o.rd, { to: ey.BVt.CHANNEL(a) });
                    return (0, i.jsx)(eY, { guildId: a });
                case eL.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(L.A, {});
                default:
                    (0, ex.xb)(c);
            }
        if ((0, H.$Y)(u, h)) return (0, i.jsx)(F.A, { guildId: a, channelId: c });
        if (r?.type === ey.rbe.GUILD_STORE) {
            let e = ev.default.cast(t.params.messageId);
            return (0, i.jsx)(p.A, { channel: r, inputSkuId: e }, r.id);
        }
        return (0, i.jsx)(L.A, {});
    },
    eq = r.memo(function () {
        let { guildId: e, channelId: t } = (0, eh.A)(),
            { notificationCenterVariant: n } = (0, en.X8)({ location: "Sidebar" }),
            r = (0, A.bG)([eN.A], () => t ?? eN.A.getChannelId(e));
        return window.location.pathname.startsWith(ey.BVt.CHANNEL(ey.gNP))
            ? ("sidebar" !== n && (0, ep.bG)(ef.A.defaultRoute), (0, i.jsx)(er.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(ey.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(ey.BVt.GUILD_DISCOVERY) ||
                (0, ed.r$)()
              ? (0, i.jsx)(k.A, {})
              : null != e
                ? (0, i.jsx)(W.A, { selectedChannelId: r, guildId: e }, e)
                : (0, i.jsx)(eo.A, {});
    }),
    ez = (e) => (0, i.jsx)(eW, { ...e }),
    eK = () => (0, i.jsx)(G.A, {}),
    e$ = (e) => (0, i.jsx)(eQ, { ...e }),
    eQ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (r.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(ei.A, {})
            : ez(e);
    },
    eX = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(B.A, { guildId: t.params.guildId }) : null;
    },
    eZ = (e) => {
        let { match: t } = e;
        return (0, ep.pX)(ey.BVt.ME), (0, z.A)(t.params.inviteCode), null;
    },
    eJ = () => (0, i.jsx)(E.A, {}),
    e0 = () => (0, i.jsx)(f.A, {}),
    e1 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eO.G2).includes(t) ? (0, i.jsx)(R.A, { tab: t, ...e }) : (0, i.jsx)(R.A, { ...e });
        };
function e7() {
    return (0, i.jsx)(ec.A, { topLevelRoute: !0 });
}
let e6 = (e) => (0, i.jsx)(v.A, { ...e }),
    e9 = () => (0, i.jsx)(el.A, {}),
    e5 = () => (0, i.jsx)(K.A, {}),
    e2 = () => (0, i.jsx)(Z.A, {}),
    e3 = () => (0, i.jsx)(ea.A, {}),
    e4 = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(I.A, {
            deepLinkType: eP.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(el.A, { initialSection: ey.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(el.A, { initialSection: ey.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(el.A, { initialSection: ey.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: ey.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(eO.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: ey.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: ey.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: ey.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: ey.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let r = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: ey.BVt.POWERUP_STORE(r) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: ey.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: ey.BVt.ME });
                }
            })(e),
        });
    };
function e8(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function te(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: a, hideChannelList: s, isSidebarOpen: o } = e;
    (0, N.q)(!0);
    let d = "app view user trigger debugging";
    C.tz.useExperiment({ location: d }, { autoTrackExposure: !1 }), C.tz.trackExposure({ location: d });
    let c = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        m = (0, w.D)("ChannelSidebar"),
        p = (0, P.useAppSidebarState)((e) => !e.isOpen) && m;
    r.useLayoutEffect(() => {
        if (m) {
            let e = parseInt(h.w.get(g.o) ?? "");
            Number.isNaN(e) && (e = 375), (e = Math.min(Math.max(e, 264), 432)), !m && e <= 76 && (e = 375), e8(e);
            let t = (e) => {
                e.metaKey && "b" === e.key && P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (p) e8(76);
            else {
                let e = parseInt(h.w.get(g.o) ?? "");
                Number.isNaN(e) && (e = 375), e8(e);
            }
        }, [p]);
    let E = r.useRef(null),
        f = r.useCallback(
            (e, t) => {
                e8(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(ej._A) : document.body.classList.remove(ej._A),
                    t >= 432 ? document.body.classList.add(ej.uN) : document.body.classList.remove(ej.uN);
                let i = t - e;
                E.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    m && (P.useAppSidebarState.setState({ isOpen: !n }), n && e8(76));
            },
            [m],
        ),
        I = r.useCallback(() => {
            document.body.classList.add(ej.cB);
        }, []),
        S = r.useCallback((e) => {
            document.body.classList.remove(ej.cB),
                document.body.classList.remove(ej._A),
                document.body.classList.remove(ej.uN),
                document.body.classList.remove(ej.l4),
                E.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(g.o, e),
                eS.default.track(ey.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        x = (0, T.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: E,
            onElementResize: f,
            onElementResizeStart: I,
            onElementResizeEnd: S,
            orientation: T.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        v = r.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            p && e8(76);
        }, [p]),
        a)
    )
        return null;
    let b = { className: l()(ej.th, { [ej.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: E,
                "data-collapsed": p,
                className: l()(ej.pz, e, { [ej.Ij]: u.Fr, [ej.R]: c, [ej.WG]: s }),
                children: [
                    o && (0, i.jsx)(q.A, { className: ej.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...b, children: (0, i.jsx)(eq, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: v,
                                    "aria-label": "Resize Sidebar",
                                    className: ej.tq,
                                    onMouseDown: x,
                                }),
                                (0, i.jsx)(eb.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function tt() {
    let e,
        t = (0, A.bG)([eT.Ay], () => eT.Ay.hasNotice()),
        n = (0, eg.NC)(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(ey.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                r.useEffect(
                    () =>
                        e_.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(ey.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        l =
            ((e = (0, o.zy)()),
            (0, o.B6)(e.pathname, ey.BVt.GUILD_BOOSTING_MARKETING(em.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([ee.A], () => ee.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, en.X8)({ location: "Sidebar" }),
        h = (0, o.W5)([
            ey.BVt.CHANNEL(ey.ME, em.pv.channelId()),
            ey.BVt.CHANNEL(em.pv.guildId(), em.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        _ = h?.params?.channelId === eL.VV.GUILD_ONBOARDING,
        m = r.useCallback(() => J.A.openSidebar(), []),
        p = (0, w.D)("AppView"),
        g = (0, P.useAppSidebarState)((e) => !e.isOpen),
        E = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        f = (0, A.bG)([M.A], () => M.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: ej.kL,
        children: (0, i.jsx)(V.A.Provider, {
            value: h?.params.guildId === ey.ME ? void 0 : h?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: ej.E3,
                "data-fullscreen": E,
                children: [
                    !E && (0, i.jsx)(eD, {}),
                    u.Fr ? null : (0, i.jsx)(et.A, {}),
                    (0, i.jsxs)("div", {
                        className: ej.Qs,
                        children: [
                            (0, i.jsx)(O.A, {}),
                            (0, i.jsx)(te, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: a || l || _,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: ej.MY,
                                "data-collapsed": !!p && g,
                                children: (0, i.jsxs)(x.A.Provider, {
                                    value: m,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: ey.BVt.ME }),
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e6,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.APPLICATION_LIBRARY,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.APPLICATION_STORE,
                                                    render: e0,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e1(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.COLLECTIBLES_SHOP,
                                                    render: e1(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e1(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, { path: ey.BVt.ICYMI, render: e5, disableTrack: !0 }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.MESSAGE_REQUESTS,
                                                    render: e2,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.FAMILY_CENTER,
                                                    render: e3,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.ME,
                                                    exact: !0,
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === en.U5.SIDEBAR &&
                                                    (0, i.jsx)(b.A, {
                                                        path: ey.BVt.CHANNEL(
                                                            ey.gNP,
                                                            em.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e$,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(b.A, {
                                                    path: [
                                                        ey.BVt.CHANNEL_THREAD_VIEW(
                                                            em.pv.guildId(),
                                                            em.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        ey.BVt.CHANNELS_GAME_SHOP(
                                                            em.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        ey.BVt.CHANNEL(ey.ME, em.pv.channelId()),
                                                        ey.BVt.CHANNEL(
                                                            em.pv.guildId(),
                                                            em.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: ez,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GLOBAL_DISCOVERY,
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.QUEST_HOME,
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.QUEST_HOME_V2,
                                                    render: e7,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GUILD_DISCOVERY,
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GUILD_MEMBER_VERIFICATION(em.pv.guildId()),
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        em.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: eZ,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.GUILD_FEATURE(":feature", em.pv.guildId()),
                                                    exact: !0,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(b.A, {
                                                    path: ey.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        f && (0, i.jsx)(U.A, {}),
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
