n.d(t, { A: () => to });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
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
    W = n(140354),
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
    ea = n(916768),
    el = n(851109),
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
    eN = n(718446),
    eS = n(734057),
    ex = n(650048),
    ev = n(696451),
    eb = n(71393),
    ey = n(309010),
    eO = n(519057),
    eL = n(954571),
    eR = n(403362),
    eP = n(661191),
    eD = n(349320),
    eM = n(652215),
    ej = n(746080),
    ew = n(758836),
    eU = n(539916),
    eG = n(613057),
    ek = n(355097),
    eV = n(325593);
let eB = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eH = () => (0, i.jsx)("div", { className: eV.wG, children: (0, i.jsx)(_.y$y, {}) }),
    eF = (0, c.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 256467)),
        webpackId: 256467,
        name: "GuildShopPage",
        renderLoader: eH,
    }),
    eY = (0, c.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 854721)),
        webpackId: 854721,
        name: "SocialLayerStorefront",
        renderLoader: eH,
    }),
    eW = (0, c.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: eH,
    }),
    eK = (0, c.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 702035)),
        webpackId: 702035,
        name: "GuildHomePage",
        renderLoader: eH,
    }),
    eq = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("35894"), n.e("99583")]).then(n.bind(n, 756154)),
        webpackId: 756154,
        name: "MemberSafetyPage",
        renderLoader: eH,
    }),
    ez = (0, c.Fe)({
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
        renderLoader: eH,
    }),
    e$ = (0, c.Fe)({
        createPromise: () =>
            Promise.all([n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("16939"), n.e("39579")]).then(
                n.bind(n, 57858),
            ),
        webpackId: 57858,
        name: "GuildOnboardingPage",
        renderLoader: eH,
    }),
    eQ = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("63379"), n.e("88615")]).then(n.bind(n, 126076)),
        webpackId: 126076,
        name: "GuildPowerupsPage",
        renderLoader: eH,
    }),
    eX = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("91284"), n.e("19750")]).then(n.bind(n, 692150)),
        webpackId: 692150,
        name: "GameServerPage",
        renderLoader: eH,
    }),
    eZ = (e) => {
        let { match: t } = e,
            n = (0, N.o)(),
            l = (0, A.bG)([eS.A, ey.A], () => {
                let e = ey.A.getChannelId();
                return eS.A.getChannel(e);
            }),
            { guildId: r, channelId: s, messageId: d, threadId: c } = t.params,
            u = s ?? void 0;
        null == u && null != t.params.gameShopPageIndex && (u = ej.VV.GAME_SHOP);
        let h = (0, A.bG)([eb.A], () => eb.A.getGuild(r)),
            _ = (0, A.bG)([ev.Ay], () => (null == r ? null : ev.Ay.getSelfMember(r))),
            p = (0, ec.C$)(r, "ChannelRenderer"),
            E = (0, eu.N)("ChannelRenderer"),
            I = h?.features.has(eM.GuildFeatures.GAME_SERVERS) ?? !1,
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
        a.useEffect(() => {
            C || (null != h && (0, eC.pX)(eM.BVt.CHANNEL(h.id, (0, ep.A)(h))), (0, ee.E)());
        }, [C, h]);
        let T = null != h,
            S = a.useRef(null);
        a.useEffect(() => {
            T ||
                null == r ||
                S.current === r ||
                ((S.current = r), m.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [T, r]);
        let x = (0, K.$)(r);
        if (null != r && null != u && (0, ej.jq)(u))
            switch (u) {
                case ej.VV.ROLE_SUBSCRIPTIONS:
                    return x
                        ? (0, i.jsx)(eF, { guildId: r, initialTab: M.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(q.A, { guildId: r });
                case ej.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eW, { guildId: r });
                case ej.VV.GAME_SHOP:
                    return (0, i.jsx)(eY, { ...e });
                case ej.VV.GUILD_SHOP:
                    return (0, i.jsx)(eF, { guildId: r, productId: d, initialTab: f });
                case ej.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eM.BVt.CHANNEL(r, ej.VV.MEMBER_SAFETY) });
                case ej.VV.GUILD_HOME:
                    return (0, i.jsx)(eK, { guildId: r });
                case ej.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(ez, { guildId: r, selectedSection: eU.qC.BROWSE });
                case ej.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(e$, { guildId: r });
                case ej.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(ez, { guildId: r, selectedSection: eU.qC.CUSTOMIZE });
                case ej.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eq, { guildId: r });
                case ej.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eQ, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case ej.VV.GAME_SERVERS:
                    if (!p || (!I && !E)) return (0, i.jsx)(o.rd, { to: eM.BVt.CHANNEL(r) });
                    return (0, i.jsx)(eX, { guildId: r });
                case ej.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(y.A, {});
                default:
                    (0, eR.xb)(u);
            }
        if ((0, Y.$Y)(h, _)) return (0, i.jsx)(W.A, { guildId: r, channelId: u });
        if (l?.type === eM.rbe.GUILD_STORE) {
            let e = eP.default.cast(t.params.messageId);
            return (0, i.jsx)(g.A, { channel: l, inputSkuId: e }, l.id);
        }
        return (0, i.jsx)(y.A, {});
    },
    eJ = a.memo(function () {
        let { guildId: e, channelId: t } = (0, eg.A)(),
            { notificationCenterVariant: n } = (0, el.X8)({ location: "Sidebar" }),
            a = (0, A.bG)([ey.A], () => t ?? ey.A.getChannelId(e));
        return window.location.pathname.startsWith(eM.BVt.CHANNEL(eM.gNP))
            ? ("sidebar" !== n && (0, eC.bG)(ex.A.defaultRoute), (0, i.jsx)(es.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eM.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eM.BVt.GUILD_DISCOVERY) ||
                (0, eh.r$)()
              ? (0, i.jsx)(B.A, {})
              : null != e
                ? (0, i.jsx)(z.A, { selectedChannelId: a, guildId: e }, e)
                : (0, i.jsx)(eA.A, {});
    }),
    e0 = (e) => (0, i.jsx)(eZ, { ...e }),
    e1 = () => (0, i.jsx)(V.A, {}),
    e7 = (e) => (0, i.jsx)(e6, { ...e }),
    e6 = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (a.useEffect(() => {
            null != t &&
                null != n &&
                p.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(er.A, {})
            : e0(e);
    },
    e9 = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(F.A, { guildId: t.params.guildId }) : null;
    },
    e5 = (e) => {
        let { match: t } = e;
        return (0, eC.pX)(eM.BVt.ME), (0, Q.A)(t.params.inviteCode), null;
    },
    e2 = () => (0, i.jsx)(I.A, {}),
    e3 = () => (0, i.jsx)(f.A, {}),
    e4 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(ew.G2).includes(t) ? (0, i.jsx)(R.A, { tab: t, ...e }) : (0, i.jsx)(R.A, { ...e });
        };
function e8() {
    return (0, i.jsx)(e_.A, { topLevelRoute: !0 });
}
let te = (e) => (0, i.jsx)(x.A, { ...e }),
    tt = () => (0, i.jsx)(ed.A, {}),
    tn = () => (0, i.jsx)(X.A, {}),
    ti = () => (0, i.jsx)(et.A, {}),
    ta = () => (0, i.jsx)(eo.A, {}),
    tl = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(C.A, {
            deepLinkType: eG.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(ed.A, { initialSection: eM.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(ed.A, { initialSection: eM.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(ed.A, { initialSection: eM.m3P.PENDING });
                    case "sessionManagement":
                        return (0, i.jsx)(o.rd, { to: (0, eN.settingsPathToRoute)(ek.od.SESSIONS) });
                    case "connections":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: (0, eN.settingsPathToRoute)(ek.od.CONNECTIONS), search: e.location.search },
                        });
                    case "family-center":
                        return (0, i.jsx)(o.rd, { to: eM.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, i.jsx)(o.rd, { to: (0, eN.settingsPathToRoute)(ek.od.ACCOUNT_ACCOUNT_STANDING) });
                    case "authorized-apps":
                        return (0, i.jsx)(o.rd, { to: (0, eN.settingsPathToRoute)(ek.od.AUTHORIZED_APPS) });
                    case "open-shop":
                        let { tab: n } = (0, s.parse)(e.location.search);
                        if (Object.values(ew.G2).includes(n))
                            return (0, i.jsx)(o.rd, { to: eM.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, i.jsx)(o.rd, { to: eM.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, i.jsx)(o.rd, {
                            to: { pathname: (0, eN.settingsPathToRoute)(ek.od.PROFILE_CUSTOMIZATION) },
                        });
                    case "gift":
                    case "store":
                        return (0, i.jsx)(o.rd, { to: { pathname: eM.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, i.jsx)(o.rd, {
                            to: (0, eN.settingsPathToRoute)(ek.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES),
                        });
                    case "boost":
                        let a = t.params.guildId;
                        return (0, i.jsx)(o.rd, { to: eM.BVt.POWERUP_STORE(a) });
                    case "boost-settings":
                        return (0, i.jsx)(o.rd, { to: (0, eN.settingsPathToRoute)(ek.od.GUILD_BOOSTING) });
                    default:
                        return (0, i.jsx)(o.rd, { to: eM.BVt.ME });
                }
            })(e),
        });
    };
function tr(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function ts(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e,
        d = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        c = (0, j.D)("ChannelSidebar"),
        m = (0, D.useAppSidebarState)((e) => !e.isOpen) && c;
    a.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(E.o) ?? "");
            Number.isNaN(e) && (e = 375), tr((e = Math.min(Math.max(e, 264), 432)));
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
        a.useLayoutEffect(() => {
            if (m) tr(76);
            else {
                let e = parseInt(h.w.get(E.o) ?? "");
                Number.isNaN(e) && (e = 375), tr(e);
            }
        }, [m]);
    let p = a.useRef(null),
        g = a.useCallback(
            (e, t) => {
                tr(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(eV._A) : document.body.classList.remove(eV._A),
                    t >= 432 ? document.body.classList.add(eV.uN) : document.body.classList.remove(eV.uN);
                let i = t - e;
                p.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (D.useAppSidebarState.setState({ isOpen: !n }), n && tr(76));
            },
            [c],
        ),
        I = a.useCallback(() => {
            document.body.classList.add(eV.cB);
        }, []),
        f = a.useCallback((e) => {
            document.body.classList.remove(eV.cB),
                document.body.classList.remove(eV._A),
                document.body.classList.remove(eV.uN),
                document.body.classList.remove(eV.l4),
                p.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(E.o, e),
                eL.default.track(eM.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
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
        N = a.useCallback(() => {
            D.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (a.useLayoutEffect(() => {
            m && tr(76);
        }, [m]),
        l)
    )
        return null;
    let S = { className: r()(eV.th, { [eV.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: p,
                "data-collapsed": m,
                className: r()(eV.pz, e, { [eV.Ij]: u.Fr, [eV.R]: d, [eV.WG]: s }),
                children: [
                    o && (0, i.jsx)($.A, { className: eV.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...S, children: (0, i.jsx)(eJ, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: eV.tq,
                                    onMouseDown: C,
                                }),
                                (0, i.jsx)(eD.L, {}),
                            ],
                        }),
                ],
            }),
    });
}
function to() {
    let e,
        t = (0, A.bG)([eO.Ay], () => eO.Ay.hasNotice()),
        n = (0, eT.NC)(),
        l = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eM.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                a.useEffect(
                    () =>
                        eE.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eM.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r =
            ((e = (0, o.zy)()),
            (0, ef.B)(e.pathname, eM.BVt.GUILD_BOOSTING_MARKETING(eI.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([ei.A], () => ei.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, el.X8)({ location: "Sidebar" }),
        h = (0, w.f)("AppView"),
        _ = (0, o.W5)([
            eM.BVt.CHANNEL(eM.ME, eI.pv.channelId()),
            eM.BVt.CHANNEL(eI.pv.guildId(), eI.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === ej.VV.GUILD_ONBOARDING,
        p = a.useCallback(() => en.A.openSidebar(), []),
        g = (0, j.D)("AppView"),
        E = (0, D.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([b.A], () => b.A.isFullscreenInContext()),
        f = (0, A.bG)([G.A], () => G.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: eV.kL,
        children: (0, i.jsx)(H.A.Provider, {
            value: _?.params.guildId === eM.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: eV.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(eB, {}),
                    u.Fr ? null : (0, i.jsx)(ea.A, {}),
                    (0, i.jsxs)("div", {
                        className: eV.Qs,
                        children: [
                            (0, i.jsx)(O.A, {}),
                            (0, i.jsx)(ts, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || r || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: eV.MY,
                                "data-collapsed": !!g && E,
                                children: (0, i.jsxs)(S.A.Provider, {
                                    value: p,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eM.BVt.ME }),
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: te,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.APPLICATION_LIBRARY,
                                                    render: e2,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.APPLICATION_STORE,
                                                    render: e3,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eM.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: a } = t.params;
                                                            return null == a || "" === a
                                                                ? (0, i.jsx)(R.A, { ...n })
                                                                : (0, i.jsx)(P.A, { layoutId: a, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                h &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eM.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                            ":collectionId",
                                                        ),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { collectionId: a } = t.params;
                                                            return null == a || "" === a
                                                                ? (0, i.jsx)(R.A, { ...n })
                                                                : (0, i.jsx)(L.A, { collectionId: a, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.COLLECTIBLES_SHOP,
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e4(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, { path: eM.BVt.ICYMI, render: tn, disableTrack: !0 }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.MESSAGE_REQUESTS,
                                                    render: ti,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.FAMILY_CENTER,
                                                    render: ta,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.ME,
                                                    exact: !0,
                                                    render: tt,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === el.U5.SIDEBAR &&
                                                    (0, i.jsx)(v.A, {
                                                        path: eM.BVt.CHANNEL(
                                                            eM.gNP,
                                                            eI.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: e7,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(v.A, {
                                                    path: [
                                                        eM.BVt.CHANNEL_THREAD_VIEW(
                                                            eI.pv.guildId(),
                                                            eI.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eM.BVt.CHANNELS_GAME_SHOP(
                                                            eI.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eM.BVt.CHANNEL(eM.ME, eI.pv.channelId()),
                                                        eM.BVt.CHANNEL(
                                                            eI.pv.guildId(),
                                                            eI.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: e0,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GLOBAL_DISCOVERY,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.QUEST_HOME_DEPRECATED,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.QUEST_HOME,
                                                    render: e8,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GUILD_DISCOVERY,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GUILD_MEMBER_VERIFICATION(eI.pv.guildId()),
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eI.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e5,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.GUILD_FEATURE(":feature", eI.pv.guildId()),
                                                    exact: !0,
                                                    render: tl,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(v.A, {
                                                    path: eM.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: tl,
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
