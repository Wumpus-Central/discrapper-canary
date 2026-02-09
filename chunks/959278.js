n.d(t, { A: () => tn });
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
    C = n(16099),
    N = n(761929),
    T = n(458518),
    S = n(107361),
    x = n(389405),
    v = n(549711),
    b = n(313961),
    y = n(264140),
    L = n(72800),
    O = n(811736),
    R = n(696086),
    P = n(500831),
    j = n(491026),
    D = n(920814),
    w = n(475419),
    M = n(287344),
    U = n(91242),
    G = n(478071),
    k = n(351466),
    V = n(184453),
    B = n(386467),
    H = n(490358),
    F = n(961973),
    Y = n(140354),
    W = n(551036),
    q = n(46533),
    z = n(467627),
    K = n(379610),
    $ = n(920113),
    Q = n(164956),
    X = n(209700),
    Z = n(9588),
    J = n(939846),
    ee = n(862658),
    et = n(813160),
    en = n(916768),
    ei = n(851109),
    er = n(667429),
    ea = n(480680),
    el = n(767060),
    es = n(18635),
    eo = n(488803),
    ed = n(176031),
    ec = n(710969),
    eu = n(570763),
    eA = n(376708),
    eh = n(272720),
    e_ = n(366811),
    em = n(77509),
    ep = n(463347),
    eg = n(976860),
    eE = n(97469),
    eI = n(734057),
    ef = n(650048),
    eC = n(696451),
    eN = n(71393),
    eT = n(309010),
    eS = n(519057),
    ex = n(954571),
    ev = n(403362),
    eb = n(661191),
    ey = n(349320),
    eL = n(652215),
    eO = n(746080),
    eR = n(758836),
    eP = n(539916),
    ej = n(613057),
    eD = n(933460);
let ew = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eM = () => (0, i.jsx)("div", { className: eD.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eU = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eM,
    }),
    eG = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eM,
    }),
    ek = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eM,
    }),
    eV = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eM,
    }),
    eB = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eM,
    }),
    eH = (0, c.Fe)({
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
    eF = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eM,
    }),
    eY = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eM,
    }),
    eW = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eM,
    }),
    eq = (e) => {
        let { match: t } = e,
            n = (0, T.o)(),
            r = (0, A.bG)([eI.A, eT.A], () => {
                let e = eT.A.getChannelId();
                return eI.A.getChannel(e);
            }),
            { guildId: a, channelId: l, messageId: s, threadId: d } = t.params,
            c = l ?? void 0;
        null == c && null != t.params.gameShopPageIndex && (c = eO.VV.GAME_SHOP);
        let u = (0, A.bG)([eN.A], () => eN.A.getGuild(a)),
            h = (0, A.bG)([eC.Ay], () => (null == a ? null : eC.Ay.getSelfMember(a))),
            _ = (0, eo.C$)(a, "ChannelRenderer"),
            m = u?.features?.has(eL.GuildFeatures.GAME_SERVERS) === !0,
            g = (0, A.bG)([Q.A], () => {
                if (null == a) return;
                let e = Q.A.getData(a);
                if (e?.type === X._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return D.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return D.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, eA.C$)(c) && (0, eA.C$)(d)) || (null != u && (0, eg.pX)(eL.BVt.CHANNEL(u.id, (0, eh.A)(u))), (0, Z.E)());
        let E = (0, j.p9)(a, "channel_renderer");
        if (null != a && null != c && (0, eO.jq)(c))
            switch (c) {
                case eO.VV.ROLE_SUBSCRIPTIONS:
                    return E
                        ? (0, i.jsx)(eU, { guildId: a, initialTab: D.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(W.A, { guildId: a });
                case eO.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(ek, { guildId: a });
                case eO.VV.GAME_SHOP:
                    return (0, i.jsx)(eG, { ...e });
                case eO.VV.GUILD_SHOP:
                    return (0, i.jsx)(eU, { guildId: a, productId: s, initialTab: g });
                case eO.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eL.BVt.CHANNEL(a, eO.VV.MEMBER_SAFETY) });
                case eO.VV.GUILD_HOME:
                    return (0, i.jsx)(eV, { guildId: a });
                case eO.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eH, { guildId: a, selectedSection: eP.qC.BROWSE });
                case eO.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eF, { guildId: a });
                case eO.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eH, { guildId: a, selectedSection: eP.qC.CUSTOMIZE });
                case eO.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eB, { guildId: a });
                case eO.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eY, {
                        guildId: a,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eO.VV.GAME_SERVERS:
                    if (!_ || !m) return (0, i.jsx)(o.rd, { to: eL.BVt.CHANNEL(a) });
                    return (0, i.jsx)(eW, { guildId: a });
                case eO.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(y.A, {});
                default:
                    (0, ev.xb)(c);
            }
        if ((0, F.$Y)(u, h)) return (0, i.jsx)(Y.A, { guildId: a, channelId: c });
        if (r?.type === eL.rbe.GUILD_STORE) {
            let e = eb.default.cast(t.params.messageId);
            return (0, i.jsx)(p.A, { channel: r, inputSkuId: e }, r.id);
        }
        return (0, i.jsx)(y.A, {});
    },
    ez = r.memo(function () {
        let { guildId: e, channelId: t } = (0, e_.A)(),
            { notificationCenterVariant: n } = (0, ei.X8)({ location: "Sidebar" }),
            r = (0, A.bG)([eT.A], () => t ?? eT.A.getChannelId(e));
        return window.location.pathname.startsWith(eL.BVt.CHANNEL(eL.gNP))
            ? ("sidebar" !== n && (0, eg.bG)(ef.A.defaultRoute), (0, i.jsx)(ea.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eL.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eL.BVt.GUILD_DISCOVERY) ||
                (0, ec.r$)()
              ? (0, i.jsx)(V.A, {})
              : null != e
                ? (0, i.jsx)(q.A, { selectedChannelId: r, guildId: e }, e)
                : (0, i.jsx)(ed.A, {});
    }),
    eK = (e) => (0, i.jsx)(eq, { ...e }),
    e$ = () => (0, i.jsx)(k.A, {}),
    eQ = (e) => (0, i.jsx)(eX, { ...e }),
    eX = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (r.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(er.A, {})
            : eK(e);
    },
    eZ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(H.A, { guildId: t.params.guildId }) : null;
    },
    eJ = (e) => {
        let { match: t } = e;
        return (0, eg.pX)(eL.BVt.ME), (0, K.A)(t.params.inviteCode), null;
    },
    e0 = () => (0, i.jsx)(E.A, {}),
    e1 = () => (0, i.jsx)(I.A, {}),
    e7 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eR.G2).includes(t) ? (0, i.jsx)(O.A, { tab: t, ...e }) : (0, i.jsx)(O.A, { ...e });
        };
function e6() {
    return (0, i.jsx)(eu.A, { topLevelRoute: !0 });
}
let e9 = (e) => (0, i.jsx)(x.A, { ...e }),
    e5 = () => (0, i.jsx)(es.A, {}),
    e2 = () => (0, i.jsx)($.A, {}),
    e3 = () => (0, i.jsx)(J.A, {}),
    e4 = () => (0, i.jsx)(el.A, {}),
    e8 = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(f.A, {
            deepLinkType: ej.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(es.A, { initialSection: eL.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(es.A, { initialSection: eL.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(es.A, { initialSection: eL.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: eL.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(eR.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eL.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eL.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: eL.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eL.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let r = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eL.BVt.POWERUP_STORE(r) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: eL.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: eL.BVt.ME });
                }
            })(e),
        });
    };
function te(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function tt(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: a, hideChannelList: s, isSidebarOpen: o } = e;
    (0, C.q)(!0);
    let d = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        c = (0, w.D)("ChannelSidebar"),
        m = (0, P.useAppSidebarState)((e) => !e.isOpen) && c;
    r.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(g.o) ?? "");
            Number.isNaN(e) && (e = 375), (e = Math.min(Math.max(e, 264), 432)), !c && e <= 76 && (e = 375), te(e);
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
    }, [c]),
        r.useLayoutEffect(() => {
            if (m) te(76);
            else {
                let e = parseInt(h.w.get(g.o) ?? "");
                Number.isNaN(e) && (e = 375), te(e);
            }
        }, [m]);
    let p = r.useRef(null),
        E = r.useCallback(
            (e, t) => {
                te(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(eD._A) : document.body.classList.remove(eD._A),
                    t >= 432 ? document.body.classList.add(eD.uN) : document.body.classList.remove(eD.uN);
                let i = t - e;
                p.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (P.useAppSidebarState.setState({ isOpen: !n }), n && te(76));
            },
            [c],
        ),
        I = r.useCallback(() => {
            document.body.classList.add(eD.cB);
        }, []),
        f = r.useCallback((e) => {
            document.body.classList.remove(eD.cB),
                document.body.classList.remove(eD._A),
                document.body.classList.remove(eD.uN),
                document.body.classList.remove(eD.l4),
                p.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(g.o, e),
                ex.default.track(eL.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, N.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: p,
            onElementResize: E,
            onElementResizeStart: I,
            onElementResizeEnd: f,
            orientation: N.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        S = r.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            m && te(76);
        }, [m]),
        a)
    )
        return null;
    let x = { className: l()(eD.th, { [eD.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: p,
                "data-collapsed": m,
                className: l()(eD.pz, e, { [eD.Ij]: u.Fr, [eD.R]: d, [eD.WG]: s }),
                children: [
                    o && (0, i.jsx)(z.A, { className: eD.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...x, children: (0, i.jsx)(ez, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: S,
                                    "aria-label": "Resize Sidebar",
                                    className: eD.tq,
                                    onMouseDown: T,
                                }),
                                (0, i.jsx)(ey.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function tn() {
    let e,
        t = (0, A.bG)([eS.Ay], () => eS.Ay.hasNotice()),
        n = (0, eE.NC)(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eL.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                r.useEffect(
                    () =>
                        em.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eL.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        l =
            ((e = (0, o.zy)()),
            (0, o.B6)(e.pathname, eL.BVt.GUILD_BOOSTING_MARKETING(ep.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([et.A], () => et.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, ei.X8)({ location: "Sidebar" }),
        h = (0, M.f)("AppView"),
        _ = (0, o.W5)([
            eL.BVt.CHANNEL(eL.ME, ep.pv.channelId()),
            eL.BVt.CHANNEL(ep.pv.guildId(), ep.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eO.VV.GUILD_ONBOARDING,
        p = r.useCallback(() => ee.A.openSidebar(), []),
        g = (0, w.D)("AppView"),
        E = (0, P.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        f = (0, A.bG)([U.A], () => U.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: eD.kL,
        children: (0, i.jsx)(B.A.Provider, {
            value: _?.params.guildId === eL.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: eD.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(ew, {}),
                    u.Fr ? null : (0, i.jsx)(en.A, {}),
                    (0, i.jsxs)("div", {
                        className: eD.Qs,
                        children: [
                            (0, i.jsx)(L.A, {}),
                            (0, i.jsx)(tt, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: a || l || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: eD.MY,
                                "data-collapsed": !!g && E,
                                children: (0, i.jsxs)(S.A.Provider, {
                                    value: p,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eL.BVt.ME }),
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.APPLICATION_LIBRARY,
                                                    render: e0,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.APPLICATION_STORE,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e7(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eL.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: r } = t.params;
                                                            return null == r || "" === r
                                                                ? (0, i.jsx)(O.A, { ...n })
                                                                : (0, i.jsx)(R.A, { layoutId: r, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP,
                                                    render: e7(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e7(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, { path: eL.BVt.ICYMI, render: e2, disableTrack: !0 }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.MESSAGE_REQUESTS,
                                                    render: e3,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.FAMILY_CENTER,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.ME,
                                                    exact: !0,
                                                    render: e5,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === ei.U5.SIDEBAR &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eL.BVt.CHANNEL(
                                                            eL.gNP,
                                                            ep.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eQ,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: [
                                                        eL.BVt.CHANNEL_THREAD_VIEW(
                                                            ep.pv.guildId(),
                                                            ep.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eL.BVt.CHANNELS_GAME_SHOP(
                                                            ep.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eL.BVt.CHANNEL(eL.ME, ep.pv.channelId()),
                                                        eL.BVt.CHANNEL(
                                                            ep.pv.guildId(),
                                                            ep.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eK,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY,
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.QUEST_HOME,
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.QUEST_HOME_V2,
                                                    render: e6,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GUILD_DISCOVERY,
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GUILD_MEMBER_VERIFICATION(ep.pv.guildId()),
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        ep.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: eJ,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.GUILD_FEATURE(":feature", ep.pv.guildId()),
                                                    exact: !0,
                                                    render: e8,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eL.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: e8,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        f && (0, i.jsx)(G.A, {}),
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
