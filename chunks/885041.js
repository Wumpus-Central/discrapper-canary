n.r(t), n.d(t, { default: () => tp });
var i = n(627968),
    r = n(64700),
    a = n(492462),
    l = n(873263),
    s = n(156828),
    o = n(311907),
    d = n(192308),
    u = n(830215),
    c = n(258057),
    A = n(869038),
    h = n(686956),
    _ = n(956793),
    E = n(271866),
    p = n(18422),
    m = n(159084),
    g = n(775602),
    I = n(502229),
    C = n(836753),
    f = n(196492),
    T = n(869003),
    S = n(315206),
    N = n(828430),
    O = n(857365),
    L = n(861638),
    y = n(793574),
    v = n(114716),
    b = n(752412),
    D = n(105220),
    R = n(10088),
    P = n(778830),
    w = n(619036),
    M = n(131876),
    U = n(227972),
    x = n(793943),
    G = n(746793),
    k = n(272613),
    j = n(874059),
    V = n(963169),
    H = n(789105),
    B = n(636805),
    F = n(293495),
    Y = n(811917),
    K = n(746094),
    z = n(257402),
    W = n(216954),
    $ = n(735831),
    q = n(913953),
    X = n(142120),
    Q = n(507263),
    Z = n(435875),
    J = n(707592),
    ee = n(997509),
    et = n(268313),
    en = n(998654),
    ei = n(986880),
    er = n(438998),
    ea = n(114714),
    el = n(341383),
    es = n(768841),
    eo = n(959278),
    ed = n(862658),
    eu = n(813160),
    ec = n(942614),
    eA = n(950067),
    eh = n(682492),
    e_ = n(584257),
    eE = n(64585),
    ep = n(281913),
    em = n(334116),
    eg = n(194970),
    eI = n(414967),
    eC = n(499454),
    ef = n(580960),
    eT = n(968930),
    eS = n(265367),
    eN = n(77509),
    eO = n(463347),
    eL = n(334465),
    ey = n(976860),
    ev = n(569745),
    eb = n(985986),
    eD = n(138298),
    eR = n(940382),
    eP = n(194045),
    ew = n(212371),
    eM = n(882991),
    eU = n(863922),
    ex = n(353202),
    eG = n(823162),
    ek = n(657331),
    ej = n(403777),
    eV = n(791767),
    eH = n(780964),
    eB = n(452379),
    eF = n(718446),
    eY = n(858897),
    eK = n(32294),
    ez = n(639823),
    eW = n(961350),
    e$ = n(761640),
    eq = n(734057),
    eX = n(650048),
    eQ = n(71393),
    eZ = n(189081),
    eJ = n(309010),
    e0 = n(967198),
    e1 = n(147964),
    e5 = n(237631),
    e6 = n(194871),
    e2 = n(856588),
    e3 = n(612181),
    e7 = n(723702),
    e9 = n(837921),
    e4 = n(652215),
    e8 = n(746080),
    te = n(771016),
    tt = n(613057);
n(115036),
    n(943577),
    n(131319),
    n(794383),
    n(845618),
    n(712687),
    n(328968),
    n(67480),
    n(874486),
    n(162605),
    n(2866),
    n(628965),
    n(752319),
    n(836602),
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(972937),
    n(279061),
    n(750128),
    n(921955);
let tn = !1;
(0, L.as)(), o.Ay.initialize(), eb.A.loadServer();
let ti = (0, s.Fe)({
        createPromise: () => n.e("11415").then(n.bind(n, 844358)),
        webpackId: 844358,
        name: "UnauthenticatedDeepLinkActivity",
        renderLoader: eo.c,
    }),
    tr = (0, s.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 998345)),
        webpackId: 998345,
        name: "ApplicationDirectoryRoutes",
        renderLoader: eo.c,
    });
e7.isPlatformEmbedded &&
    (e9.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
        (0, eY.openUserSettings)();
    }),
    e9.Ay.on("LAUNCH_APPLICATION", async (e, t) => {
        let i = eZ.A.getActiveLibraryApplication(t);
        (await Promise.resolve().then(n.bind(n, 715671))).playApplication(t, i, {
            analyticsParams: { location: { page: e4.liQ.DIRECT, object: e4.ZSU.WEB_URL } },
        });
    }));
let ta = (0, m.z)((e) => {
        let { location: t } = e;
        return (
            (0, Q.B)(() => {
                let e = R.A.getHighestState();
                if (e === e4.fAW.OPEN || e === e4.fAW.OPENING) return;
                let n = (0, eF.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, eF.trackParseSettingsUrl)(n, "deeplink"),
                    (0, eY.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, i.jsx)(p.A, {
                deepLinkType: tt.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, i.jsx)(l.rd, { to: eX.A.defaultRoute }),
            })
        );
    }),
    tl = (0, m.z)((e) => {
        let { location: t } = e,
            r = (0, eh.parsePlaygroundUrl)(t.pathname);
        return (
            (0, Q.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: r });
            }),
            (0, i.jsx)(p.A, {
                deepLinkType: tt.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, eh.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, i.jsx)(l.rd, { to: eX.A.defaultRoute }),
            })
        );
    }),
    ts = o.Ay.connectStores([X.A, eX.A, eW.default], () => ({
        isConnected: X.A.isConnected(),
        defaultRoute: eX.A.defaultRoute,
        defaultRouteFallback: eX.A.fallbackRoute,
        token: eW.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(l.rd, { to: e4.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = th(t);
                    return null == e ||
                        ((e.params.guildId === e4.ME || null != eQ.A.getGuild(e.params.guildId)) &&
                            null != eq.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(l.rd, { to: t })
                        : (0, i.jsx)(l.rd, { to: r });
                }
                return null;
            }
        },
    ),
    to = (0, m.z)((0, v.C)(D.A, null, { passProps: !1 })),
    td = (0, v.C)(tr, null, { passProps: !1 }),
    tu = [
        e4.BVt.GUILD_BOOSTING_MARKETING(eO.pv.guildId()),
        ...Array.from(e8.qW).map((e) => e4.BVt.CHANNEL(eO.pv.guildId(), e)),
    ];
function tc(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? e4.ME, channelId: n, messageId: i, threadId: r };
}
let tA = [
    {
        path: [e4.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e3.wR)() ||
                eW.default.getLoginStatus() === e4.aUe.LOGGING_IN ||
                !eW.default.allowLogoutRedirect()
                ? to(e)
                : (0, i.jsx)(ti, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [e4.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, Z.q)({ code: n });
                }),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, A.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eC.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    { path: [e4.BVt.APP], render: () => (0, i.jsx)(ts, {}) },
    {
        path: [e4.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.B)(() => (0, ek.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [y.A.URI_SCHEME] })),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: r, action: a } = t.params;
            return (
                e6.A.whenInitialized(() => {
                    eZ.A.whenInitialized(() => {
                        switch (a) {
                            case "launch": {
                                let e = eZ.A.getActiveLibraryApplication(r);
                                if (null == e) return;
                                Promise.resolve()
                                    .then(n.bind(n, 715671))
                                    .then((t) => {
                                        t.playApplication(e.id, e, {
                                            analyticsParams: {
                                                location: { page: e4.liQ.DIRECT, object: e4.ZSU.WEB_URL },
                                            },
                                        });
                                    });
                                break;
                            }
                            case "test-mode":
                                e1.A.whenInitialized(() => E.q1(r));
                                break;
                            case "uninstall": {
                                let e = eZ.A.getActiveLibraryApplication(r);
                                if (null == e) return;
                                (0, c.z)(e.id, e.branchId, e4.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(l.rd, { to: e4.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e4.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.B)(() => k.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, Q.B)(() => en.w({ section: (0, et.A)(e4.BEX, n), subsection: (0, et.A)(e4.nd0, r), feature: s })),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, a.parse)(t.search),
                r = "string" == typeof n.applicationId ? n.applicationId : null,
                s = "true" === n.openGameProfile;
            return (
                (0, Q.B)(() => {
                    null != r &&
                        E.q1(r).then((e) => {
                            null != e && (0, x.nf)(x.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: s });
                        });
                }),
                (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    { path: [e4.BVt.SETTINGS(":section", ":subsection?")], render: ta },
    { path: [e4.BVt.PLAYGROUND(":collection?", ":story?")], render: tl },
    {
        path: [e4.BVt.USER_GUILD_NOTIFICATION_SETTINGS(eO.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: r } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("50893")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: r });
                    });
                }),
                (0, i.jsx)(l.rd, { to: e4.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [e4.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.B)(() => (0, eY.openUserSettings)(eH.X.GIFT_PANEL)), (0, i.jsx)(l.rd, { to: eX.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.WELCOME(eO.pv.guildId({ optional: !0 }), eO.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, ec.C)(te.zY.MARKETING_UNCLAIMED);
            let a = e4.BVt.CHANNEL(n, r);
            return (0, i.jsx)(l.rd, { to: a });
        },
    },
    {
        path: [e4.BVt.GUILD_EVENT_DETAILS(eO.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, J.uR)({ eventId: r });
                }),
                (0, i.jsx)(l.rd, { to: e4.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [e4.BVt.GUILD_SETTINGS(eO.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: a } = t.params;
            return (
                (0, Q.B)(() => {
                    ee.A.open(n, (0, et.A)(e4.BEX, r), void 0, (0, et.A)(e4.nd0, a));
                }),
                (0, i.jsx)(l.rd, { to: e4.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            e4.BVt.CHANNEL_THREAD_VIEW(eO.pv.guildId(), eO.pv.channelId(), ":threadId", ":messageId?"),
            e4.BVt.CHANNEL(eO.pv.guildId(), eO.pv.channelId({ optional: !0 }), ":messageId?"),
            e4.BVt.ACTIVITY,
            e4.BVt.ACTIVITIES,
            e4.BVt.ACTIVITIES_HAPPENING_NOW,
            e4.BVt.APPLICATION_LIBRARY,
            e4.BVt.APPLICATION_STORE,
            e4.BVt.MESSAGE_REQUESTS,
            e4.BVt.COLLECTIBLES_SHOP,
            e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            e4.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e4.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            e4.BVt.GUILD_DISCOVERY,
            e4.BVt.QUEST_HOME_DEPRECATED,
            e4.BVt.QUEST_HOME,
            e4.BVt.ICYMI,
            e4.BVt.GLOBAL_DISCOVERY,
            e4.BVt.GUILD_MEMBER_VERIFICATION(eO.pv.guildId()),
            e4.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(eO.pv.guildId(), ":inviteCode?"),
            e4.BVt.GUILD_BOOSTING_MARKETING(eO.pv.guildId()),
            e4.BVt.GUILD_FEATURE(":feature", eO.pv.guildId()),
            e4.BVt.FEATURE(":feature"),
            e4.BVt.FAMILY_CENTER,
        ],
        render: to,
        isChatRoute: !0,
    },
    { path: [e4.BVt.APPLICATION_DIRECTORY], render: td },
    {
        path: [e4.BVt.GAME_SHOP(eO.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: a } = t.params;
            return (0, i.jsx)(l.rd, { to: e4.BVt.CHANNELS_GAME_SHOP(n, 0, r, a) });
        },
    },
];
function th(e) {
    for (let { path: t, isChatRoute: n } of tA) {
        if (!n) continue;
        let i = (0, eL.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function t_(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!X.A.isConnected()) return;
    let { location: r } = (0, ey.JK)();
    r.pathname === i && (null == eq.A.getChannel(t) ? (0, ey.bG)(e4.BVt.CHANNEL(n)) : (0, ey.bG)(i));
}
class tE extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e9.Ay.setZoomFactor(g.A.zoom),
            eb.A.init(),
            b.A.initialize(),
            eg.A.initialize(),
            z.A.initialize(),
            ez.A.initialize(),
            W.A.initialize(),
            ef.A.initialize(),
            j.A.initialize(),
            el.A.initialize(),
            I.A.init(),
            q.A.init(),
            $.A.init(),
            eA.A.initialize(),
            N.A.initialize(),
            B.A.initialize(),
            eT.A.initialize(),
            S.Ay.initialize(),
            F.Ay.initialize(),
            eK.A.initialize(),
            ei.Ay.initialize(),
            em.A.initialize(),
            T.A.initialize(),
            er.A.init(),
            w.A.init(),
            e2.A.init(),
            f.A.initialize(),
            eG.A.init(),
            e5.A.init(),
            eV.A.init(),
            ew.A.initialize(),
            eM.A.initialize(),
            ej.A.initialize(),
            eB.A.init(),
            H.A.initialize(),
            C.A.initialize(),
            eP.A.initialize(),
            eE.A.initialize(),
            e_.A.initialize(),
            ep.A.initialize(),
            M.A.initialize(),
            U.A.initialize(),
            K.A.initialize(),
            ea.A.initialize(),
            es.A.initialize(),
            eS.A.initialize(),
            eI.A.initialize(),
            P.A.initialize(),
            O.A.initialize(),
            (this.rewriterUnlisten = eN.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eN.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eb.A.terminate(),
            ez.A.terminate(),
            ef.A.terminate(),
            eg.A.terminate(),
            b.A.terminate(),
            S.Ay.terminate(),
            F.Ay.terminate(),
            eK.A.terminate(),
            T.A.terminate(),
            eT.A.terminate(),
            em.A.terminate(),
            ej.A.terminate(),
            f.A.terminate(),
            H.A.terminate(),
            es.A.terminate(),
            C.A.terminate(),
            eS.A.terminate(),
            eP.A.terminate(),
            eE.A.terminate(),
            e_.A.terminate(),
            ep.A.terminate(),
            M.A.terminate(),
            U.A.terminate(),
            eI.A.terminate(),
            Y.A.terminate(),
            P.A.terminate(),
            O.A.terminate(),
            K.A.terminate(),
            ea.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (X.A.isConnected() || X.A.isTryingToConnect()) return;
            let t = eW.default.getToken();
            null == t || ((0, ev.Q)(e) && u.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = th(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: l, threadId: s } = tc(n),
                    o = (0, eO.nn)(i),
                    d = (0, eO.ts)(r),
                    u = (0, eO.ts)(s),
                    c = e0.A.getGuildId(),
                    A = c !== i;
                if ((o && A && h.A.selectGuild(i), o && d)) {
                    let n = eJ.A.getChannelId(c),
                        o = n !== r,
                        d = null != e$.Ay.getGuildSidebarState(i);
                    if (!tn || A || o || null != l) {
                        (tn = !0), _.default.selectChannel({ guildId: i, channelId: r, messageId: l });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eU.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            o &&
                            null != r &&
                            null != e$.Ay.getCurrentSidebarChannelId(r) &&
                            eD.A.closeChannelSidebar(r),
                        null != s && u)
                    ) {
                        let e = e$.Ay.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != r && null != s && t)
                            if (d) (0, ey.bG)(e4.BVt.CHANNEL(i, s, l));
                            else {
                                let e = { type: eR.LU.THREAD };
                                null != l && (e.initialMessageId = l),
                                    eD.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eD.A.closeChannelSidebar(r);
                    } else null == r || o || eD.A.closeChannelSidebar(r);
                    let h = eu.A.getIsOpen();
                    if (r === e8.VV.ROLE_SUBSCRIPTIONS) ed.A.closeSidebar();
                    else if (A && h) {
                        let t = null == c && i === e4.ME,
                            n = e === e4.BVt.GUILD_DISCOVERY;
                        t || n ? ed.A.closeSidebar() : ed.A.openSidebar();
                    } else ((o && h) || (!A && !o)) && ed.A.closeSidebar();
                } else tu.some((t) => (0, eL.B)(e, t)?.isExact === !0) || (0, ey.bG)(eX.A.fallbackRoute);
            })(t, n),
            (0, V.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!X.A.isConnected()) return null;
        let { pathname: t } = e,
            n = th(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = tc(n),
            l = (0, eO.nn)(i) && i !== e4.ME && i !== e4.YYv;
        if (null != r && (0, eO.ts)(r) && !(0, e8.jq)(r) && l) {
            let n = eq.A.getChannel(r);
            if (null == n) ex.A.loadThread(r).then(() => t_({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e4.gNP) return { path: e4.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, eO.ts)(a) && !(0, e8.jq)(r))) return null;
                let n = eq.A.getChannel(a);
                if (null == n) ex.A.loadThread(a).then(() => t_({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eD.A.closeChannelSidebar(r), { path: e4.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(l.dO, {
                    children: [
                        (0, i.jsx)(l.rd, { exact: !0, from: "/channels", to: "/" }),
                        tA.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(l.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(l.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(G.A, {}),
            ],
        });
    }
}
let tp = tE;
