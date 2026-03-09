n.d(t, { A: () => tr });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(492462),
    o = n(873263),
    d = n(110259),
    c = n(156828),
    u = n(607399),
    A = n(311907),
    h = n(506774),
    _ = n(397927),
    m = n(843472),
    g = n(816015),
    p = n(183994),
    E = n(153244),
    I = n(772614),
    f = n(18422),
    C = n(761929),
    T = n(458518),
    N = n(107361),
    S = n(389405),
    x = n(549711),
    v = n(313961),
    y = n(264140),
    b = n(72800),
    O = n(30747),
    L = n(811736),
    R = n(696086),
    P = n(500831),
    j = n(491026),
    D = n(920814),
    M = n(475419),
    w = n(287344),
    U = n(91242),
    G = n(478071),
    k = n(351466),
    V = n(184453),
    B = n(386467),
    H = n(490358),
    F = n(961973),
    Y = n(917973),
    W = n(551036),
    q = n(46533),
    K = n(467627),
    z = n(379610),
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
    el = n(480680),
    ea = n(767060),
    es = n(18635),
    eo = n(488803),
    ed = n(969117),
    ec = n(176031),
    eu = n(710969),
    eA = n(570763),
    eh = n(376708),
    e_ = n(272720),
    em = n(366811),
    eg = n(77509),
    ep = n(463347),
    eE = n(334465),
    eI = n(976860),
    ef = n(97469),
    eC = n(734057),
    eT = n(650048),
    eN = n(696451),
    eS = n(71393),
    ex = n(309010),
    ev = n(519057),
    ey = n(954571),
    eb = n(403362),
    eO = n(661191),
    eL = n(349320),
    eR = n(652215),
    eP = n(746080),
    ej = n(758836),
    eD = n(539916),
    eM = n(613057),
    ew = n(913022);
let eU = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eG = () => (0, i.jsx)("div", { className: ew.wG, children: (0, i.jsx)(_.y$y, {}) }),
    ek = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eG,
    }),
    eV = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eG,
    }),
    eB = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eG,
    }),
    eH = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eG,
    }),
    eF = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eG,
    }),
    eY = (0, c.Fe)({
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
        renderLoader: eG,
    }),
    eW = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eG,
    }),
    eq = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eG,
    }),
    eK = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eG,
    }),
    ez = (e) => {
        let { match: t } = e,
            n = (0, T.o)(),
            r = (0, A.bG)([eC.A, ex.A], () => {
                let e = ex.A.getChannelId();
                return eC.A.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: s, threadId: d } = t.params,
            c = a ?? void 0;
        null == c && null != t.params.gameShopPageIndex && (c = eP.VV.GAME_SHOP);
        let u = (0, A.bG)([eS.A], () => eS.A.getGuild(l)),
            h = (0, A.bG)([eN.Ay], () => (null == l ? null : eN.Ay.getSelfMember(l))),
            _ = (0, eo.C$)(l, "ChannelRenderer"),
            m = (0, ed.N)("ChannelRenderer"),
            p = u?.features.has(eR.GuildFeatures.GAME_SERVERS) ?? !1,
            E = (0, A.bG)([Q.A], () => {
                if (null == l) return;
                let e = Q.A.getData(l);
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
        ((0, eh.C$)(c) && (0, eh.C$)(d)) || (null != u && (0, eI.pX)(eR.BVt.CHANNEL(u.id, (0, e_.A)(u))), (0, Z.E)());
        let I = (0, j.p9)(l, "channel_renderer");
        if (null != l && null != c && (0, eP.jq)(c))
            switch (c) {
                case eP.VV.ROLE_SUBSCRIPTIONS:
                    return I
                        ? (0, i.jsx)(ek, { guildId: l, initialTab: D.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(W.A, { guildId: l });
                case eP.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eB, { guildId: l });
                case eP.VV.GAME_SHOP:
                    return (0, i.jsx)(eV, { ...e });
                case eP.VV.GUILD_SHOP:
                    return (0, i.jsx)(ek, { guildId: l, productId: s, initialTab: E });
                case eP.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eR.BVt.CHANNEL(l, eP.VV.MEMBER_SAFETY) });
                case eP.VV.GUILD_HOME:
                    return (0, i.jsx)(eH, { guildId: l });
                case eP.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eY, { guildId: l, selectedSection: eD.qC.BROWSE });
                case eP.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eW, { guildId: l });
                case eP.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eY, { guildId: l, selectedSection: eD.qC.CUSTOMIZE });
                case eP.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eF, { guildId: l });
                case eP.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eq, {
                        guildId: l,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eP.VV.GAME_SERVERS:
                    if (!_ || (!p && !m)) return (0, i.jsx)(o.rd, { to: eR.BVt.CHANNEL(l) });
                    return (0, i.jsx)(eK, { guildId: l });
                case eP.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(y.A, {});
                default:
                    (0, eb.xb)(c);
            }
        if ((0, F.$Y)(u, h)) return (0, i.jsx)(Y.A, { guildId: l, channelId: c });
        if (r?.type === eR.rbe.GUILD_STORE) {
            let e = eO.default.cast(t.params.messageId);
            return (0, i.jsx)(g.A, { channel: r, inputSkuId: e }, r.id);
        }
        return (0, i.jsx)(y.A, {});
    },
    e$ = r.memo(function () {
        let { guildId: e, channelId: t } = (0, em.A)(),
            { notificationCenterVariant: n } = (0, ei.X8)({ location: "Sidebar" }),
            r = (0, A.bG)([ex.A], () => t ?? ex.A.getChannelId(e));
        return window.location.pathname.startsWith(eR.BVt.CHANNEL(eR.gNP))
            ? ("sidebar" !== n && (0, eI.bG)(eT.A.defaultRoute), (0, i.jsx)(el.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eR.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eR.BVt.GUILD_DISCOVERY) ||
                (0, eu.r$)()
              ? (0, i.jsx)(V.A, {})
              : null != e
                ? (0, i.jsx)(q.A, { selectedChannelId: r, guildId: e }, e)
                : (0, i.jsx)(ec.A, {});
    }),
    eQ = (e) => (0, i.jsx)(ez, { ...e }),
    eX = () => (0, i.jsx)(k.A, {}),
    eZ = (e) => (0, i.jsx)(eJ, { ...e }),
    eJ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (r.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(er.A, {})
            : eQ(e);
    },
    e0 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(H.A, { guildId: t.params.guildId }) : null;
    },
    e1 = (e) => {
        let { match: t } = e;
        return (0, eI.pX)(eR.BVt.ME), (0, z.A)(t.params.inviteCode), null;
    },
    e7 = () => (0, i.jsx)(E.A, {}),
    e6 = () => (0, i.jsx)(I.A, {}),
    e9 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ej.G2).includes(t) ? (0, i.jsx)(L.A, { tab: t, ...e }) : (0, i.jsx)(L.A, { ...e });
        };
function e5() {
    return (0, i.jsx)(eA.A, { topLevelRoute: !0 });
}
let e2 = (e) => (0, i.jsx)(S.A, { ...e }),
    e3 = () => (0, i.jsx)(es.A, {}),
    e4 = () => (0, i.jsx)($.A, {}),
    e8 = () => (0, i.jsx)(J.A, {}),
    te = () => (0, i.jsx)(ea.A, {}),
    tt = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(f.A, {
            deepLinkType: eM.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(es.A, { initialSection: eR.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(es.A, { initialSection: eR.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(es.A, { initialSection: eR.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: eR.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(ej.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eR.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eR.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: eR.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eR.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let r = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eR.BVt.POWERUP_STORE(r) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: eR.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: eR.BVt.ME });
                }
            })(e),
        });
    };
function tn(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function ti(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e,
        d = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        c = (0, M.D)("ChannelSidebar"),
        m = (0, P.useAppSidebarState)((e) => !e.isOpen) && c;
    r.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(p.o) ?? "");
            Number.isNaN(e) && (e = 375), tn((e = Math.min(Math.max(e, 264), 432)));
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
            if (m) tn(76);
            else {
                let e = parseInt(h.w.get(p.o) ?? "");
                Number.isNaN(e) && (e = 375), tn(e);
            }
        }, [m]);
    let g = r.useRef(null),
        E = r.useCallback(
            (e, t) => {
                tn(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(ew._A) : document.body.classList.remove(ew._A),
                    t >= 432 ? document.body.classList.add(ew.uN) : document.body.classList.remove(ew.uN);
                let i = t - e;
                g.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (P.useAppSidebarState.setState({ isOpen: !n }), n && tn(76));
            },
            [c],
        ),
        I = r.useCallback(() => {
            document.body.classList.add(ew.cB);
        }, []),
        f = r.useCallback((e) => {
            document.body.classList.remove(ew.cB),
                document.body.classList.remove(ew._A),
                document.body.classList.remove(ew.uN),
                document.body.classList.remove(ew.l4),
                g.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(p.o, e),
                ey.default.track(eR.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, C.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: g,
            onElementResize: E,
            onElementResizeStart: I,
            onElementResizeEnd: f,
            orientation: C.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        N = r.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            m && tn(76);
        }, [m]),
        l)
    )
        return null;
    let S = { className: a()(ew.th, { [ew.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: g,
                "data-collapsed": m,
                className: a()(ew.pz, e, { [ew.Ij]: u.Fr, [ew.R]: d, [ew.WG]: s }),
                children: [
                    o && (0, i.jsx)(K.A, { className: ew.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...S, children: (0, i.jsx)(e$, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: ew.tq,
                                    onMouseDown: T,
                                }),
                                (0, i.jsx)(eL.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function tr() {
    let e,
        t = (0, A.bG)([ev.Ay], () => ev.Ay.hasNotice()),
        n = (0, ef.NC)(),
        l = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eR.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                r.useEffect(
                    () =>
                        eg.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eR.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        a =
            ((e = (0, o.zy)()),
            (0, eE.B)(e.pathname, eR.BVt.GUILD_BOOSTING_MARKETING(ep.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([et.A], () => et.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, ei.X8)({ location: "Sidebar" }),
        h = (0, w.f)("AppView"),
        _ = (0, o.W5)([
            eR.BVt.CHANNEL(eR.ME, ep.pv.channelId()),
            eR.BVt.CHANNEL(ep.pv.guildId(), ep.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eP.VV.GUILD_ONBOARDING,
        g = r.useCallback(() => ee.A.openSidebar(), []),
        p = (0, M.D)("AppView"),
        E = (0, P.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        f = (0, A.bG)([U.A], () => U.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: ew.kL,
        children: (0, i.jsx)(B.A.Provider, {
            value: _?.params.guildId === eR.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: ew.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(eU, {}),
                    u.Fr ? null : (0, i.jsx)(en.A, {}),
                    (0, i.jsxs)("div", {
                        className: ew.Qs,
                        children: [
                            (0, i.jsx)(b.A, {}),
                            (0, i.jsx)(ti, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: ew.MY,
                                "data-collapsed": !!p && E,
                                children: (0, i.jsxs)(N.A.Provider, {
                                    value: g,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eR.BVt.ME }),
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e2,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.APPLICATION_LIBRARY,
                                                    render: e7,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.APPLICATION_STORE,
                                                    render: e6,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e9(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eR.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: r } = t.params;
                                                            return null == r || "" === r
                                                                ? (0, i.jsx)(L.A, { ...n })
                                                                : (0, i.jsx)(R.A, { layoutId: r, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                h &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eR.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                            ":collectionId",
                                                        ),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { collectionId: r } = t.params;
                                                            return null == r || "" === r
                                                                ? (0, i.jsx)(L.A, { ...n })
                                                                : (0, i.jsx)(O.A, { collectionId: r, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.COLLECTIBLES_SHOP,
                                                    render: e9(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e9(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, { path: eR.BVt.ICYMI, render: e4, disableTrack: !0 }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.MESSAGE_REQUESTS,
                                                    render: e8,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.FAMILY_CENTER,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.ME,
                                                    exact: !0,
                                                    render: e3,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === ei.U5.SIDEBAR &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eR.BVt.CHANNEL(
                                                            eR.gNP,
                                                            ep.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eZ,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: [
                                                        eR.BVt.CHANNEL_THREAD_VIEW(
                                                            ep.pv.guildId(),
                                                            ep.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eR.BVt.CHANNELS_GAME_SHOP(
                                                            ep.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eR.BVt.CHANNEL(eR.ME, ep.pv.channelId()),
                                                        eR.BVt.CHANNEL(
                                                            ep.pv.guildId(),
                                                            ep.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GLOBAL_DISCOVERY,
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.QUEST_HOME_DEPRECATED,
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.QUEST_HOME,
                                                    render: e5,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GUILD_DISCOVERY,
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GUILD_MEMBER_VERIFICATION(ep.pv.guildId()),
                                                    render: e0,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        ep.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e1,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.GUILD_FEATURE(":feature", ep.pv.guildId()),
                                                    exact: !0,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eR.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tt,
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
