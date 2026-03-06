n.d(t, { A: () => ti });
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
    O = n(811736),
    L = n(696086),
    R = n(500831),
    P = n(491026),
    j = n(920814),
    D = n(475419),
    M = n(287344),
    w = n(91242),
    U = n(478071),
    G = n(351466),
    k = n(184453),
    V = n(386467),
    B = n(490358),
    H = n(961973),
    F = n(917973),
    Y = n(551036),
    W = n(46533),
    q = n(467627),
    K = n(379610),
    z = n(920113),
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
    el = n(767060),
    ea = n(18635),
    es = n(488803),
    eo = n(969117),
    ed = n(176031),
    ec = n(710969),
    eu = n(570763),
    eA = n(376708),
    eh = n(272720),
    e_ = n(366811),
    em = n(77509),
    eg = n(463347),
    ep = n(334465),
    eE = n(976860),
    eI = n(97469),
    ef = n(734057),
    eC = n(650048),
    eT = n(696451),
    eN = n(71393),
    eS = n(309010),
    ex = n(519057),
    ev = n(954571),
    ey = n(403362),
    eb = n(661191),
    eO = n(349320),
    eL = n(652215),
    eR = n(746080),
    eP = n(758836),
    ej = n(539916),
    eD = n(613057),
    eM = n(913022);
let ew = (0, c.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 500831)), webpackId: 500831 }),
    eU = () => (0, i.jsx)("div", { className: eM.wG, children: (0, i.jsx)(_.y$y, {}) }),
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
    eK = (e) => {
        let { match: t } = e,
            n = (0, T.o)(),
            r = (0, A.bG)([ef.A, eS.A], () => {
                let e = eS.A.getChannelId();
                return ef.A.getChannel(e);
            }),
            { guildId: l, channelId: a, messageId: s, threadId: d } = t.params,
            c = a ?? void 0;
        null == c && null != t.params.gameShopPageIndex && (c = eR.VV.GAME_SHOP);
        let u = (0, A.bG)([eN.A], () => eN.A.getGuild(l)),
            h = (0, A.bG)([eT.Ay], () => (null == l ? null : eT.Ay.getSelfMember(l))),
            _ = (0, es.C$)(l, "ChannelRenderer"),
            m = (0, eo.N)("ChannelRenderer"),
            p = u?.features.has(eL.GuildFeatures.GAME_SERVERS) ?? !1,
            E = (0, A.bG)([$.A], () => {
                if (null == l) return;
                let e = $.A.getData(l);
                if (e?.type === Q._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return j.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return j.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            });
        ((0, eA.C$)(c) && (0, eA.C$)(d)) || (null != u && (0, eE.pX)(eL.BVt.CHANNEL(u.id, (0, eh.A)(u))), (0, X.E)());
        let I = (0, P.p9)(l, "channel_renderer");
        if (null != l && null != c && (0, eR.jq)(c))
            switch (c) {
                case eR.VV.ROLE_SUBSCRIPTIONS:
                    return I
                        ? (0, i.jsx)(eG, { guildId: l, initialTab: j.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, i.jsx)(Y.A, { guildId: l });
                case eR.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, i.jsx)(eV, { guildId: l });
                case eR.VV.GAME_SHOP:
                    return (0, i.jsx)(ek, { ...e });
                case eR.VV.GUILD_SHOP:
                    return (0, i.jsx)(eG, { guildId: l, productId: s, initialTab: E });
                case eR.VV.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(o.rd, { to: eL.BVt.CHANNEL(l, eR.VV.MEMBER_SAFETY) });
                case eR.VV.GUILD_HOME:
                    return (0, i.jsx)(eB, { guildId: l });
                case eR.VV.CHANNEL_BROWSER:
                    return (0, i.jsx)(eF, { guildId: l, selectedSection: ej.qC.BROWSE });
                case eR.VV.GUILD_ONBOARDING:
                    return (0, i.jsx)(eY, { guildId: l });
                case eR.VV.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eF, { guildId: l, selectedSection: ej.qC.CUSTOMIZE });
                case eR.VV.MEMBER_SAFETY:
                    return (0, i.jsx)(eH, { guildId: l });
                case eR.VV.GUILD_BOOSTS:
                    return (0, i.jsx)(eW, {
                        guildId: l,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case eR.VV.GAME_SERVERS:
                    if (!_ || (!p && !m)) return (0, i.jsx)(o.rd, { to: eL.BVt.CHANNEL(l) });
                    return (0, i.jsx)(eq, { guildId: l });
                case eR.VV.REPORT_TO_MOD:
                    return (0, i.jsx)(y.A, {});
                default:
                    (0, ey.xb)(c);
            }
        if ((0, H.$Y)(u, h)) return (0, i.jsx)(F.A, { guildId: l, channelId: c });
        if (r?.type === eL.rbe.GUILD_STORE) {
            let e = eb.default.cast(t.params.messageId);
            return (0, i.jsx)(g.A, { channel: r, inputSkuId: e }, r.id);
        }
        return (0, i.jsx)(y.A, {});
    },
    ez = r.memo(function () {
        let { guildId: e, channelId: t } = (0, e_.A)(),
            { notificationCenterVariant: n } = (0, en.X8)({ location: "Sidebar" }),
            r = (0, A.bG)([eS.A], () => t ?? eS.A.getChannelId(e));
        return window.location.pathname.startsWith(eL.BVt.CHANNEL(eL.gNP))
            ? ("sidebar" !== n && (0, eE.bG)(eC.A.defaultRoute), (0, i.jsx)(er.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(eL.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(eL.BVt.GUILD_DISCOVERY) ||
                (0, ec.r$)()
              ? (0, i.jsx)(k.A, {})
              : null != e
                ? (0, i.jsx)(W.A, { selectedChannelId: r, guildId: e }, e)
                : (0, i.jsx)(ed.A, {});
    }),
    e$ = (e) => (0, i.jsx)(eK, { ...e }),
    eQ = () => (0, i.jsx)(G.A, {}),
    eX = (e) => (0, i.jsx)(eZ, { ...e }),
    eZ = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (r.useEffect(() => {
            null != t &&
                null != n &&
                m.A.jumpToMessage({ channelId: t, messageId: n, flash: !0, context: "notification_center_navigation" });
        }, [t, n]),
        null == t)
            ? (0, i.jsx)(ei.A, {})
            : e$(e);
    },
    eJ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, i.jsx)(B.A, { guildId: t.params.guildId }) : null;
    },
    e0 = (e) => {
        let { match: t } = e;
        return (0, eE.pX)(eL.BVt.ME), (0, K.A)(t.params.inviteCode), null;
    },
    e1 = () => (0, i.jsx)(E.A, {}),
    e7 = () => (0, i.jsx)(I.A, {}),
    e6 = () =>
        function (e) {
            let { tab: t } = (0, s.parse)(e.location.search);
            return Object.values(eP.G2).includes(t) ? (0, i.jsx)(O.A, { tab: t, ...e }) : (0, i.jsx)(O.A, { ...e });
        };
function e9() {
    return (0, i.jsx)(eu.A, { topLevelRoute: !0 });
}
let e5 = (e) => (0, i.jsx)(S.A, { ...e }),
    e2 = () => (0, i.jsx)(ea.A, {}),
    e3 = () => (0, i.jsx)(z.A, {}),
    e4 = () => (0, i.jsx)(Z.A, {}),
    e8 = () => (0, i.jsx)(el.A, {}),
    te = (e) => {
        let t = e.location.pathname;
        return (0, i.jsx)(f.A, {
            deepLinkType: eD.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, i.jsx)(ea.A, { initialSection: eL.m3P.ONLINE });
                    case "addFriends":
                        return (0, i.jsx)(ea.A, { initialSection: eL.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, i.jsx)(ea.A, { initialSection: eL.m3P.PENDING });
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
                        if (Object.values(eP.G2).includes(n))
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
function tt(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function tn(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, hideChannelList: s, isSidebarOpen: o } = e,
        d = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        c = (0, D.D)("ChannelSidebar"),
        m = (0, R.useAppSidebarState)((e) => !e.isOpen) && c;
    r.useLayoutEffect(() => {
        if (c) {
            let e = parseInt(h.w.get(p.o) ?? "");
            Number.isNaN(e) && (e = 375), (e = Math.min(Math.max(e, 264), 432)), !c && e <= 76 && (e = 375), tt(e);
            let t = (e) => {
                e.metaKey && "b" === e.key && R.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (m) tt(76);
            else {
                let e = parseInt(h.w.get(p.o) ?? "");
                Number.isNaN(e) && (e = 375), tt(e);
            }
        }, [m]);
    let g = r.useRef(null),
        E = r.useCallback(
            (e, t) => {
                tt(e);
                let n = t < 88;
                t <= 264 ? document.body.classList.add(eM._A) : document.body.classList.remove(eM._A),
                    t >= 432 ? document.body.classList.add(eM.uN) : document.body.classList.remove(eM.uN);
                let i = t - e;
                g.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(i / 76), 0.25)}`),
                    c && (R.useAppSidebarState.setState({ isOpen: !n }), n && tt(76));
            },
            [c],
        ),
        I = r.useCallback(() => {
            document.body.classList.add(eM.cB);
        }, []),
        f = r.useCallback((e) => {
            document.body.classList.remove(eM.cB),
                document.body.classList.remove(eM._A),
                document.body.classList.remove(eM.uN),
                document.body.classList.remove(eM.l4),
                g.current?.style.setProperty("--custom-overdrag", "0px"),
                h.w.set(p.o, e),
                ev.default.track(eL.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
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
            R.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            m && tt(76);
        }, [m]),
        l)
    )
        return null;
    let S = { className: a()(eM.th, { [eM.Qd]: !t }) };
    return (0, i.jsx)(_.NPJ, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: g,
                "data-collapsed": m,
                className: a()(eM.pz, e, { [eM.Ij]: u.Fr, [eM.R]: d, [eM.WG]: s }),
                children: [
                    o && (0, i.jsx)(q.A, { className: eM.Pl, themeOverride: n }),
                    !s &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { ...S, children: (0, i.jsx)(ez, {}) }),
                                (0, i.jsx)(_.DUT, {
                                    onClick: N,
                                    "aria-label": "Resize Sidebar",
                                    className: eM.tq,
                                    onMouseDown: T,
                                }),
                                (0, i.jsx)(eO.L, {}),
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
        l = (function () {
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
        a =
            ((e = (0, o.zy)()),
            (0, ep.B)(e.pathname, eL.BVt.GUILD_BOOSTING_MARKETING(eg.pv.guildId()))?.isExact === !0),
        s = (0, A.bG)([ee.A], () => ee.A.getIsOpen()),
        { notificationCenterVariant: c } = (0, en.X8)({ location: "Sidebar" }),
        h = (0, M.f)("AppView"),
        _ = (0, o.W5)([
            eL.BVt.CHANNEL(eL.ME, eg.pv.channelId()),
            eL.BVt.CHANNEL(eg.pv.guildId(), eg.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        m = _?.params?.channelId === eR.VV.GUILD_ONBOARDING,
        g = r.useCallback(() => J.A.openSidebar(), []),
        p = (0, D.D)("AppView"),
        E = (0, R.useAppSidebarState)((e) => !e.isOpen),
        I = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        f = (0, A.bG)([w.A], () => w.A.isFrameActive());
    return (0, i.jsx)("div", {
        className: eM.kL,
        children: (0, i.jsx)(V.A.Provider, {
            value: _?.params.guildId === eL.ME ? void 0 : _?.params.guildId,
            children: (0, i.jsxs)("div", {
                className: eM.E3,
                "data-fullscreen": I,
                children: [
                    !I && (0, i.jsx)(ew, {}),
                    u.Fr ? null : (0, i.jsx)(et.A, {}),
                    (0, i.jsxs)("div", {
                        className: eM.Qs,
                        children: [
                            (0, i.jsx)(b.A, {}),
                            (0, i.jsx)(tn, {
                                isSidebarOpen: s,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: l || a || m,
                                hideSidebar: !s,
                            }),
                            (0, i.jsx)("div", {
                                className: eM.MY,
                                "data-collapsed": !!p && E,
                                children: (0, i.jsxs)(N.A.Provider, {
                                    value: g,
                                    children: [
                                        (0, i.jsxs)(o.dO, {
                                            children: [
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(o.rd, { to: eL.BVt.ME }),
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: e5,
                                                    impressionName: d.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.APPLICATION_LIBRARY,
                                                    render: e1,
                                                    impressionName: d.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.APPLICATION_STORE,
                                                    render: e7,
                                                    impressionName: d.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                h &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eL.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: r } = t.params;
                                                            return null == r || "" === r
                                                                ? (0, i.jsx)(O.A, { ...n })
                                                                : (0, i.jsx)(L.A, { layoutId: r, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP,
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: e6(),
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, { path: eL.BVt.ICYMI, render: e3, disableTrack: !0 }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.MESSAGE_REQUESTS,
                                                    render: e4,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.FAMILY_CENTER,
                                                    render: e8,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.ME,
                                                    exact: !0,
                                                    render: e2,
                                                    impressionName: d.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                c === en.U5.SIDEBAR &&
                                                    (0, i.jsx)(x.A, {
                                                        path: eL.BVt.CHANNEL(
                                                            eL.gNP,
                                                            eg.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: eX,
                                                        disableTrack: !0,
                                                    }),
                                                (0, i.jsx)(x.A, {
                                                    path: [
                                                        eL.BVt.CHANNEL_THREAD_VIEW(
                                                            eg.pv.guildId(),
                                                            eg.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        eL.BVt.CHANNELS_GAME_SHOP(
                                                            eg.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        eL.BVt.CHANNEL(eL.ME, eg.pv.channelId()),
                                                        eL.BVt.CHANNEL(
                                                            eg.pv.guildId(),
                                                            eg.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: e$,
                                                    impressionName: d.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.QUEST_HOME_DEPRECATED,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.QUEST_HOME,
                                                    render: e9,
                                                    impressionName: d.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GUILD_DISCOVERY,
                                                    render: eQ,
                                                    impressionName: d.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GUILD_MEMBER_VERIFICATION(eg.pv.guildId()),
                                                    render: eJ,
                                                    impressionName: d.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        eg.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: e0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.GUILD_FEATURE(":feature", eg.pv.guildId()),
                                                    exact: !0,
                                                    render: te,
                                                    disableTrack: !0,
                                                }),
                                                (0, i.jsx)(x.A, {
                                                    path: eL.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: te,
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
