n.d(t, { A: () => ta });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(492462),
    o = n(873263),
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
    C = n(761929),
    T = n(458518),
    N = n(107361),
    S = n(389405),
    x = n(549711),
    v = n(313961),
    b = n(264140),
    y = n(72800),
    O = n(30747),
    L = n(811736),
    R = n(696086),
    P = n(500831),
    D = n(920814),
    M = n(475419),
    j = n(287344),
    w = n(969043),
    U = n(91242),
    G = n(478071),
    k = n(351466),
    V = n(184453),
    B = n(386467),
    H = n(490358),
    F = n(961973),
    Y = n(140354),
    W = n(440293),
    K = n(551036),
    q = n(46533),
    z = n(467627),
    $ = n(379610),
    Q = n(920113),
    X = n(164956),
    Z = n(209700),
    J = n(9588),
    ee = n(939846),
    et = n(862658),
    en = n(813160),
    ei = n(916768),
    el = n(851109),
    ea = n(667429),
    er = n(480680),
    es = n(767060),
    eo = n(18635),
    ed = n(488803),
    ec = n(969117),
    eu = n(176031),
    eA = n(710969),
    eh = n(570763),
    e_ = n(376708),
    em = n(272720),
    ep = n(366811),
    eg = n(77509),
    eE = n(463347),
    eI = n(334465),
    ef = n(976860),
    eC = n(97469),
    eT = n(734057),
    eN = n(650048),
    eS = n(696451),
    ex = n(71393),
    ev = n(309010),
    eb = n(519057),
    ey = n(954571),
    eO = n(403362),
    eL = n(661191),
    eR = n(349320),
    eP = n(652215),
    eD = n(746080),
    eM = n(758836),
    ej = n(539916),
    ew = n(613057),
    eU = n(325593);
let eG = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    ek = () => (0, i.jsx)("div", { className: eU.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eV = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: ek,
    }),
    eB = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: ek,
    }),
    eH = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: ek,
    }),
    eF = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: ek,
    }),
    eY = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: ek,
    }),
    eW = (0, c.Fe)({
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
        renderLoader: ek,
    }),
    eK = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: ek,
    }),
    eq = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: ek,
    }),
    ez = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: ek,
    }),
    e$ = (e) => {
        let { match: t } = e,
            n = (0, T.o)(),
            a = (0, A.bG)([eT.A, ev.A], () => {
                let e = ev.A.getChannelId();
                return eT.A.getChannel(e);
            }),
            { guildId: r, channelId: s, messageId: d, threadId: c } = t.params,
            u = s ?? void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eD.VV.GAME_SHOP);
        let h = (0, A.bG)([ex.A], () => ex.A.getGuild(r)),
            _ = (0, A.bG)([eS.Ay], () => (null == r ? null : eS.Ay.getSelfMember(r))),
            m = (0, ed.C$)(r, "ChannelRenderer"),
            g = (0, ec.N)("ChannelRenderer"),
            E = h?.features.has(eP.GuildFeatures.GAME_SERVERS) ?? !1,
            I = (0, A.bG)([X.A], () => {
                if (null == r) return;
                let e = X.A.getData(r);
                if (e?.type === Z._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return D.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return D.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            f = (0, A.bG)([w.A], () => (0, e_.C$)(u) && (0, e_.C$)(c), [u, c]);
        l.useEffect(() => {
            f || (null != h && (0, ef.pX)(eP.BVt.CHANNEL(h.id, (0, em.A)(h))), (0, J.E)());
        }, [f, h]);
        let C = (0, W.$)(r);
        if (null != r && null != u && (0, eD.jq)(u))
            switch (u) {
                case eD.VV.ROLE_SUBSCRIPTIONS:
                    return C
                        ? (0, i.jsx)(eV, { guildId: r, initialTab: D.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(K.A, { guildId: r });
                case eD.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eH, { guildId: r });
                case eD.VV.GAME_SHOP:
                    return (0, i.jsx)(eB, { ...e });
                case eD.VV.GUILD_SHOP:
                    return (0, i.jsx)(eV, { guildId: r, productId: d, initialTab: I });
                case eD.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eP.BVt.CHANNEL(r, eD.VV.MEMBER_SAFETY) });
                case eD.VV.GUILD_HOME:
                    return (0, i.jsx)(eF, { guildId: r });
                case eD.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eW, { guildId: r, selectedSection: ej.qC.BROWSE });
                case eD.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eK, { guildId: r });
                case eD.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eW, { guildId: r, selectedSection: ej.qC.CUSTOMIZE });
                case eD.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eY, { guildId: r });
                case eD.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eq, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eD.VV.GAME_SERVERS:
                    if (!m || (!E && !g)) return (0, i.jsx)(o.rd, { to: eP.BVt.CHANNEL(r) });
                    return (0, i.jsx)(ez, { guildId: r });
                case eD.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(b.A, {});
                default:
                    (0, eO.xb)(u);
            }
        if ((0, F.$Y)(h, _)) return (0, i.jsx)(Y.A, { guildId: r, channelId: u });
        if (a?.type === eP.rbe.GUILD_STORE) {
            let e = eL.default.cast(t.params.messageId);
            return (0, i.jsx)(p.A, { channel: a, inputSkuId: e }, a.id);
        }
        return (0, i.jsx)(b.A, {});
    },
    eQ = l.memo(function () {
        let { guildId: e, channelId: t } = (0, ep.A)(),
            { notificationCenterVariant: n } = (0, el.X8)({ location: "Sidebar" }),
            l = (0, A.bG)([ev.A], () => t ?? ev.A.getChannelId(e));
        return window.location.pathname.startsWith(eP.BVt.CHANNEL(eP.gNP))
            ? ("sidebar" !== n && (0, ef.bG)(eN.A.defaultRoute), (0, i.jsx)(er.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eP.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eP.BVt.GUILD_DISCOVERY) ||
                (0, eA.r$)()
              ? (0, i.jsx)(V.A, {})
              : null != e
                ? (0, i.jsx)(q.A, { selectedChannelId: l, guildId: e }, e)
                : (0, i.jsx)(eu.A, {});
    }),
    eX = (e) => (0, i.jsx)(e$, { ...e }),
    eZ = () => (0, i.jsx)(k.A, {}),
    eJ = (e) => (0, i.jsx)(e0, { ...e }),
    e0 = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (l.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(ea.A, {})
            : eX(e);
    },
    e1 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(H.A, { guildId: t.params.guildId }) : null;
    },
    e7 = (e) => {
        let { match: t } = e;
        return (0, ef.pX)(eP.BVt.ME), (0, $.A)(t.params.inviteCode), null;
    },
    e6 = () => (0, i.jsx)(E.A, {}),
    e9 = () => (0, i.jsx)(I.A, {}),
    e5 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eM.G2).includes(t) ? (0, i.jsx)(L.A, { tab: t, ...e }) : (0, i.jsx)(L.A, { ...e });
        };
function e2() {
    return (0, i.jsx)(eh.A, { topLevelRoute: !0 });
}
let e3 = (e) => (0, i.jsx)(S.A, { ...e }),
    e4 = () => (0, i.jsx)(eo.A, {}),
    e8 = () => (0, i.jsx)(Q.A, {}),
    te = () => (0, i.jsx)(ee.A, {}),
    tt = () => (0, i.jsx)(es.A, {}),
    tn = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(f.A, {
            deepLinkType: ew.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(eo.A, { initialSection: eP.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(eo.A, { initialSection: eP.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(eo.A, { initialSection: eP.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: eP.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(eM.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eP.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eP.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: eP.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eP.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let l = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eP.BVt.POWERUP_STORE(l) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: eP.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: eP.BVt.ME });
                }
            })(e),
        });
    };
function ti(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function tl(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: a, hideChannelList: s, isSidebarOpen: o } = e,
        d = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        c = (0, M.D)("ChannelSidebar"),
        m = (0, P.useAppSidebarState)((e) => !e.isOpen) && c;
    l.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(g.o) ?? "");
            Number.isNaN(e) && (e = 375), ti((e = Math.min(Math.max(e, 264), 432)));
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
        l.useLayoutEffect(() => {
            if (m) ti(76);
            else {
                let e = parseInt(h.w.get(g.o) ?? "");
                Number.isNaN(e) && (e = 375), ti(e);
            }
        }, [m]);
    let p = l.useRef(null),
        E = l.useCallback(
            (e, t) => {
                ti(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(eU._A) : document.body.classList.remove(eU._A),
                    t >= 432 ? document.body.classList.add(eU.uN) : document.body.classList.remove(eU.uN);
                let i = t - e;
                p.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (P.useAppSidebarState.setState({ isOpen: !n }), n && ti(76));
            },
            [c],
        ),
        I = l.useCallback(() => {
            document.body.classList.add(eU.cB);
        }, []),
        f = l.useCallback((e) => {
            document.body.classList.remove(eU.cB),
                document.body.classList.remove(eU._A),
                document.body.classList.remove(eU.uN),
                document.body.classList.remove(eU.l4),
                p.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(g.o, e),
                ey.default.track(eP.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        T = (0, C.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: p,
            onElementResize: E,
            onElementResizeStart: I,
            onElementResizeEnd: f,
            orientation: C.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        N = l.useCallback(() => {
            P.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            m && ti(76);
        }, [m]),
        a)
    )
        return null;
    let S = { className: r()(eU.th, { [eU.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: p,
                "data-collapsed": m,
                className: r()(eU.pz, e, { [eU.Ij]: u.Fr, [eU.R]: d, [eU.WG]: s }),
                children: [
                    o && (0, i.jsx)(z.A, { className: eU.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...S, children: (0, i.jsx)(eQ, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: eU.tq,
                                    onMouseDown: T,
                                }),
                                (0, i.jsx)(eR.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function ta() {
    let e,
        t = (0, A.bG)([eb.Ay], () => eb.Ay.hasNotice()),
        n = (0, eC.NC)(),
        a = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eP.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                l.useEffect(
                    () =>
                        eg.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eP.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r =
            ((e = (0, o.zy)()),
            (0, eI.B)(e.pathname, eP.BVt.GUILD_BOOSTING_MARKETING(eE.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([en.A], () => en.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, el.X8)({ location: "Sidebar" }),
        h = (0, j.f)("AppView"),
        _ = (0, o.W5)([
            eP.BVt.CHANNEL(eP.ME, eE.pv.channelId()),
            eP.BVt.CHANNEL(eE.pv.guildId(), eE.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eD.VV.GUILD_ONBOARDING,
        p = l.useCallback(() => et.A.openSidebar(), []),
        g = (0, M.D)("AppView"),
        E = (0, P.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        f = (0, A.bG)([U.A], () => U.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: eU.kL,
        children: (0, i.jsx)(B.A.Provider, {
            value: _?.params.guildId === eP.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: eU.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(eG, {}),
                    u.Fr ? null : (0, i.jsx)(ei.A, {}),
                    (0, i.jsxs)("div", {
                        className: eU.Qs,
                        children: [
                            (0, i.jsx)(y.A, {}),
                            (0, i.jsx)(tl, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: a || r || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: eU.MY,
                                "data-collapsed": !!g && E,
                                children: (0, i.jsxs)(N.A.Provider, {
                                    value: p,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eP.BVt.ME }),
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e3,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.APPLICATION_LIBRARY,
                                                    render: e6,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.APPLICATION_STORE,
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eP.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: l } = t.params;
                                                            return null == l || "" === l
                                                                ? (0, i.jsx)(L.A, { ...n })
                                                                : (0, i.jsx)(R.A, { layoutId: l, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                h &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eP.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                            ":collectionId",
                                                        ),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { collectionId: l } = t.params;
                                                            return null == l || "" === l
                                                                ? (0, i.jsx)(L.A, { ...n })
                                                                : (0, i.jsx)(O.A, { collectionId: l, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.COLLECTIBLES_SHOP,
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e5(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, { path: eP.BVt.ICYMI, render: e8, disableTrack: !0 }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.MESSAGE_REQUESTS,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.FAMILY_CENTER,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.ME,
                                                    exact: !0,
                                                    render: e4,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === el.U5.SIDEBAR &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eP.BVt.CHANNEL(
                                                            eP.gNP,
                                                            eE.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eJ,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: [
                                                        eP.BVt.CHANNEL_THREAD_VIEW(
                                                            eE.pv.guildId(),
                                                            eE.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eP.BVt.CHANNELS_GAME_SHOP(
                                                            eE.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eP.BVt.CHANNEL(eP.ME, eE.pv.channelId()),
                                                        eP.BVt.CHANNEL(
                                                            eE.pv.guildId(),
                                                            eE.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eX,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GLOBAL_DISCOVERY,
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.QUEST_HOME_DEPRECATED,
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.QUEST_HOME,
                                                    render: e2,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GUILD_DISCOVERY,
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GUILD_MEMBER_VERIFICATION(eE.pv.guildId()),
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eE.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e7,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.GUILD_FEATURE(":feature", eE.pv.guildId()),
                                                    exact: !0,
                                                    render: tn,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eP.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tn,
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
