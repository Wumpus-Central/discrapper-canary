n.d(t, { A: () => tr });
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
    m = n(686956),
    p = n(843472),
    g = n(816015),
    E = n(183994),
    I = n(153244),
    f = n(772614),
    C = n(18422),
    T = n(761929),
    N = n(458518),
    S = n(107361),
    x = n(389405),
    v = n(549711),
    b = n(313961),
    y = n(264140),
    O = n(72800),
    L = n(30747),
    R = n(811736),
    P = n(696086),
    D = n(500831),
    M = n(920814),
    j = n(475419),
    w = n(287344),
    U = n(969043),
    G = n(91242),
    k = n(478071),
    V = n(351466),
    B = n(184453),
    H = n(386467),
    F = n(490358),
    Y = n(961973),
    W = n(917973),
    K = n(440293),
    q = n(551036),
    z = n(46533),
    $ = n(467627),
    Q = n(379610),
    X = n(920113),
    Z = n(164956),
    J = n(209700),
    ee = n(9588),
    et = n(939846),
    en = n(862658),
    ei = n(813160),
    el = n(916768),
    ea = n(851109),
    er = n(667429),
    es = n(480680),
    eo = n(767060),
    ed = n(18635),
    ec = n(488803),
    eu = n(969117),
    eA = n(176031),
    eh = n(710969),
    e_ = n(570763),
    em = n(376708),
    ep = n(272720),
    eg = n(366811),
    eE = n(77509),
    eI = n(463347),
    ef = n(334465),
    eC = n(976860),
    eT = n(97469),
    eN = n(734057),
    eS = n(650048),
    ex = n(696451),
    ev = n(71393),
    eb = n(309010),
    ey = n(519057),
    eO = n(954571),
    eL = n(403362),
    eR = n(661191),
    eP = n(349320),
    eD = n(652215),
    eM = n(746080),
    ej = n(758836),
    ew = n(539916),
    eU = n(613057),
    eG = n(373838);
let ek = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eV = () => (0, i.jsx)("div", { className: eG.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eB = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eV,
    }),
    eH = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eV,
    }),
    eF = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eV,
    }),
    eY = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eV,
    }),
    eW = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eV,
    }),
    eK = (0, c.Fe)({
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
        renderLoader: eV,
    }),
    eq = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eV,
    }),
    ez = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eV,
    }),
    e$ = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eV,
    }),
    eQ = (e) => {
        let { match: t } = e,
            n = (0, N.o)(),
            a = (0, A.bG)([eN.A, eb.A], () => {
                let e = eb.A.getChannelId();
                return eN.A.getChannel(e);
            }),
            { guildId: r, channelId: s, messageId: d, threadId: c } = t.params,
            u = s ?? void 0;
        null == u && null != t.params.gameShopPageIndex && (u = eM.VV.GAME_SHOP);
        let h = (0, A.bG)([ev.A], () => ev.A.getGuild(r)),
            _ = (0, A.bG)([ex.Ay], () => (null == r ? null : ex.Ay.getSelfMember(r))),
            p = (0, ec.C$)(r, "ChannelRenderer"),
            E = (0, eu.N)("ChannelRenderer"),
            I = h?.features.has(eD.GuildFeatures.GAME_SERVERS) ?? !1,
            f = (0, A.bG)([Z.A], () => {
                if (null == r) return;
                let e = Z.A.getData(r);
                if (e?.type === J._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return M.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return M.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            C = (0, A.bG)([U.A], () => (0, em.C$)(u) && (0, em.C$)(c), [u, c]);
        l.useEffect(() => {
            C || (null != h && (0, eC.pX)(eD.BVt.CHANNEL(h.id, (0, ep.A)(h))), (0, ee.E)());
        }, [C, h]);
        let T = null != h,
            S = l.useRef(null);
        l.useEffect(() => {
            T ||
                null == r ||
                S.current === r ||
                ((S.current = r), m.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [T, r]);
        let x = (0, K.$)(r);
        if (null != r && null != u && (0, eM.jq)(u))
            switch (u) {
                case eM.VV.ROLE_SUBSCRIPTIONS:
                    return x
                        ? (0, i.jsx)(eB, { guildId: r, initialTab: M.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(q.A, { guildId: r });
                case eM.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eF, { guildId: r });
                case eM.VV.GAME_SHOP:
                    return (0, i.jsx)(eH, { ...e });
                case eM.VV.GUILD_SHOP:
                    return (0, i.jsx)(eB, { guildId: r, productId: d, initialTab: f });
                case eM.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eD.BVt.CHANNEL(r, eM.VV.MEMBER_SAFETY) });
                case eM.VV.GUILD_HOME:
                    return (0, i.jsx)(eY, { guildId: r });
                case eM.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eK, { guildId: r, selectedSection: ew.qC.BROWSE });
                case eM.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eq, { guildId: r });
                case eM.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eK, { guildId: r, selectedSection: ew.qC.CUSTOMIZE });
                case eM.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eW, { guildId: r });
                case eM.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(ez, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eM.VV.GAME_SERVERS:
                    if (!p || (!I && !E)) return (0, i.jsx)(o.rd, { to: eD.BVt.CHANNEL(r) });
                    return (0, i.jsx)(e$, { guildId: r });
                case eM.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(y.A, {});
                default:
                    (0, eL.xb)(u);
            }
        if ((0, Y.$Y)(h, _)) return (0, i.jsx)(W.A, { guildId: r, channelId: u });
        if (a?.type === eD.rbe.GUILD_STORE) {
            let e = eR.default.cast(t.params.messageId);
            return (0, i.jsx)(g.A, { channel: a, inputSkuId: e }, a.id);
        }
        return (0, i.jsx)(y.A, {});
    },
    eX = l.memo(function () {
        let { guildId: e, channelId: t } = (0, eg.A)(),
            { notificationCenterVariant: n } = (0, ea.X8)({ location: "Sidebar" }),
            l = (0, A.bG)([eb.A], () => t ?? eb.A.getChannelId(e));
        return window.location.pathname.startsWith(eD.BVt.CHANNEL(eD.gNP))
            ? ("sidebar" !== n && (0, eC.bG)(eS.A.defaultRoute), (0, i.jsx)(es.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eD.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eD.BVt.GUILD_DISCOVERY) ||
                (0, eh.r$)()
              ? (0, i.jsx)(B.A, {})
              : null != e
                ? (0, i.jsx)(z.A, { selectedChannelId: l, guildId: e }, e)
                : (0, i.jsx)(eA.A, {});
    }),
    eZ = (e) => (0, i.jsx)(eQ, { ...e }),
    eJ = () => (0, i.jsx)(V.A, {}),
    e0 = (e) => (0, i.jsx)(e1, { ...e }),
    e1 = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (l.useEffect(() => {
            null != t &&
                null != n &&
                p.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(er.A, {})
            : eZ(e);
    },
    e7 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(F.A, { guildId: t.params.guildId }) : null;
    },
    e6 = (e) => {
        let { match: t } = e;
        return (0, eC.pX)(eD.BVt.ME), (0, Q.A)(t.params.inviteCode), null;
    },
    e9 = () => (0, i.jsx)(I.A, {}),
    e5 = () => (0, i.jsx)(f.A, {}),
    e2 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ej.G2).includes(t) ? (0, i.jsx)(R.A, { tab: t, ...e }) : (0, i.jsx)(R.A, { ...e });
        };
function e3() {
    return (0, i.jsx)(e_.A, { topLevelRoute: !0 });
}
let e4 = (e) => (0, i.jsx)(x.A, { ...e }),
    e8 = () => (0, i.jsx)(ed.A, {}),
    te = () => (0, i.jsx)(X.A, {}),
    tt = () => (0, i.jsx)(et.A, {}),
    tn = () => (0, i.jsx)(eo.A, {}),
    ti = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(C.A, {
            deepLinkType: eU.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(ed.A, { initialSection: eD.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(ed.A, { initialSection: eD.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(ed.A, { initialSection: eD.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.SETTINGS("sessions") });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: eD.BVt.SETTINGS("connections"), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.SETTINGS("account", "account-standing") });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.SETTINGS("authorized-apps") });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(ej.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eD.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eD.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, { to: { pathname: eD.BVt.SETTINGS("profile-customization") } });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eD.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.SETTINGS("content-and-social", "connected-games") });
                    case "boost":
                        let l = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eD.BVt.POWERUP_STORE(l) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: eD.BVt.SETTINGS("guild-boosting") });
                    default:
                        return (0, i.jsx)(o.rd, { to: eD.BVt.ME });
                }
            })(e),
        });
    };
function tl(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function ta(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: a, hideChannelList: s, isSidebarOpen: o } = e,
        d = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        c = (0, j.D)("ChannelSidebar"),
        m = (0, D.useAppSidebarState)((e) => !e.isOpen) && c;
    l.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(E.o) ?? "");
            Number.isNaN(e) && (e = 375), tl((e = Math.min(Math.max(e, 264), 432)));
            let t = (e) => {
                e.metaKey && "b" === e.key && D.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (m) tl(76);
            else {
                let e = parseInt(h.w.get(E.o) ?? "");
                Number.isNaN(e) && (e = 375), tl(e);
            }
        }, [m]);
    let p = l.useRef(null),
        g = l.useCallback(
            (e, t) => {
                tl(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(eG._A) : document.body.classList.remove(eG._A),
                    t >= 432 ? document.body.classList.add(eG.uN) : document.body.classList.remove(eG.uN);
                let i = t - e;
                p.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (D.useAppSidebarState.setState({ isOpen: !n }), n && tl(76));
            },
            [c],
        ),
        I = l.useCallback(() => {
            document.body.classList.add(eG.cB);
        }, []),
        f = l.useCallback((e) => {
            document.body.classList.remove(eG.cB),
                document.body.classList.remove(eG._A),
                document.body.classList.remove(eG.uN),
                document.body.classList.remove(eG.l4),
                p.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(E.o, e),
                eO.default.track(eD.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        C = (0, T.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: p,
            onElementResize: g,
            onElementResizeStart: I,
            onElementResizeEnd: f,
            orientation: T.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        N = l.useCallback(() => {
            D.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (l.useLayoutEffect(() => {
            m && tl(76);
        }, [m]),
        a)
    )
        return null;
    let S = { className: r()(eG.th, { [eG.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: p,
                "data-collapsed": m,
                className: r()(eG.pz, e, { [eG.Ij]: u.Fr, [eG.R]: d, [eG.WG]: s }),
                children: [
                    o && (0, i.jsx)($.A, { className: eG.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...S, children: (0, i.jsx)(eX, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: eG.tq,
                                    onMouseDown: C,
                                }),
                                (0, i.jsx)(eP.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function tr() {
    let e,
        t = (0, A.bG)([ey.Ay], () => ey.Ay.hasNotice()),
        n = (0, eT.NC)(),
        a = (function () {
            let [e, t] = l.useState(() => window.location.pathname.startsWith(eD.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                l.useEffect(
                    () =>
                        eE.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eD.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r =
            ((e = (0, o.zy)()),
            (0, ef.B)(e.pathname, eD.BVt.GUILD_BOOSTING_MARKETING(eI.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([ei.A], () => ei.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, ea.X8)({ location: "Sidebar" }),
        h = (0, w.f)("AppView"),
        _ = (0, o.W5)([
            eD.BVt.CHANNEL(eD.ME, eI.pv.channelId()),
            eD.BVt.CHANNEL(eI.pv.guildId(), eI.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eM.VV.GUILD_ONBOARDING,
        p = l.useCallback(() => en.A.openSidebar(), []),
        g = (0, j.D)("AppView"),
        E = (0, D.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        f = (0, A.bG)([G.A], () => G.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: eG.kL,
        children: (0, i.jsx)(H.A.Provider, {
            value: _?.params.guildId === eD.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: eG.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(ek, {}),
                    u.Fr ? null : (0, i.jsx)(el.A, {}),
                    (0, i.jsxs)("div", {
                        className: eG.Qs,
                        children: [
                            (0, i.jsx)(O.A, {}),
                            (0, i.jsx)(ta, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: a || r || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: eG.MY,
                                "data-collapsed": !!g && E,
                                children: (0, i.jsxs)(S.A.Provider, {
                                    value: p,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eD.BVt.ME }),
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e4,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.APPLICATION_LIBRARY,
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.APPLICATION_STORE,
                                                    render: e5,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eD.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: l } = t.params;
                                                            return null == l || "" === l
                                                                ? (0, i.jsx)(R.A, { ...n })
                                                                : (0, i.jsx)(P.A, { layoutId: l, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                h &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eD.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                            ":collectionId",
                                                        ),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { collectionId: l } = t.params;
                                                            return null == l || "" === l
                                                                ? (0, i.jsx)(R.A, { ...n })
                                                                : (0, i.jsx)(L.A, { collectionId: l, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.COLLECTIBLES_SHOP,
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e2(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, { path: eD.BVt.ICYMI, render: te, disableTrack: !0 }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.MESSAGE_REQUESTS,
                                                    render: tt,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.FAMILY_CENTER,
                                                    render: tn,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.ME,
                                                    exact: !0,
                                                    render: e8,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === ea.U5.SIDEBAR &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eD.BVt.CHANNEL(
                                                            eD.gNP,
                                                            eI.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e0,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: [
                                                        eD.BVt.CHANNEL_THREAD_VIEW(
                                                            eI.pv.guildId(),
                                                            eI.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eD.BVt.CHANNELS_GAME_SHOP(
                                                            eI.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eD.BVt.CHANNEL(eD.ME, eI.pv.channelId()),
                                                        eD.BVt.CHANNEL(
                                                            eI.pv.guildId(),
                                                            eI.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: eZ,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GLOBAL_DISCOVERY,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.QUEST_HOME_DEPRECATED,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.QUEST_HOME,
                                                    render: e3,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GUILD_DISCOVERY,
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GUILD_MEMBER_VERIFICATION(eI.pv.guildId()),
                                                    render: e7,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eI.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e6,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.GUILD_FEATURE(":feature", eI.pv.guildId()),
                                                    exact: !0,
                                                    render: ti,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eD.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: ti,
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
