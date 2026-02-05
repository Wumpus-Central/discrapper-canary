n.r(t), n.d(t, { default: () => tm });
var i = n(627968),
    r = n(64700),
    a = n(492462),
    l = n(960488),
    s = n(311907),
    o = n(397927),
    d = n(830215),
    c = n(258057),
    u = n(869038),
    A = n(686956),
    h = n(956793),
    _ = n(271866),
    m = n(18422),
    p = n(159084),
    g = n(775602),
    E = n(502229),
    f = n(836753),
    I = n(196492),
    C = n(869003),
    N = n(315206),
    T = n(844358),
    S = n(828430),
    x = n(79746),
    v = n(861638),
    b = n(793574),
    y = n(114716),
    L = n(752412),
    O = n(105220),
    R = n(778830),
    P = n(619036),
    j = n(131876),
    D = n(5591),
    w = n(746793),
    M = n(272613),
    U = n(855371),
    G = n(874059),
    k = n(963169),
    V = n(789105),
    B = n(636805),
    H = n(293495),
    F = n(811917),
    Y = n(746094),
    W = n(257402),
    q = n(216954),
    z = n(735831),
    K = n(913953),
    $ = n(142120),
    Q = n(507263),
    X = n(998345),
    Z = n(435875),
    J = n(707592),
    ee = n(997509),
    et = n(268313),
    en = n(998654),
    ei = n(986880),
    er = n(438998),
    ea = n(509099),
    el = n(114714),
    es = n(341383),
    eo = n(768841),
    ed = n(862658),
    ec = n(813160),
    eu = n(942614),
    eA = n(950067),
    eh = n(682492),
    e_ = n(584257),
    em = n(64585),
    ep = n(281913),
    eg = n(334116),
    eE = n(194970),
    ef = n(414967),
    eI = n(499454),
    eC = n(580960),
    eN = n(968930),
    eT = n(265367),
    eS = n(77509),
    ex = n(463347),
    ev = n(976860),
    eb = n(569745),
    ey = n(985986),
    eL = n(874959),
    eO = n(138298),
    eR = n(940382),
    eP = n(194045),
    ej = n(212371),
    eD = n(882991),
    ew = n(863922),
    eM = n(353202),
    eU = n(823162),
    eG = n(657331),
    ek = n(403777),
    eV = n(791767),
    eB = n(780964),
    eH = n(452379),
    eF = n(849823),
    eY = n(840065),
    eW = n(32294),
    eq = n(639823),
    ez = n(961350),
    eK = n(761640),
    e$ = n(734057),
    eQ = n(650048),
    eX = n(71393),
    eZ = n(189081),
    eJ = n(309010),
    e0 = n(967198),
    e1 = n(147964),
    e7 = n(237631),
    e6 = n(194871),
    e9 = n(856588),
    e5 = n(612181),
    e2 = n(723702),
    e3 = n(837921),
    e4 = n(715671),
    e8 = n(652215),
    te = n(746080),
    tt = n(771016),
    tn = n(613057);
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
    n(836602),
    n(833336),
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(972937),
    n(279061),
    n(750128),
    n(921955);
let ti = !1;
(0, v.as)(),
    s.Ay.initialize(),
    ey.A.loadServer(),
    e2.isPlatformEmbedded &&
        (e3.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eY.openUserSettings)();
        }),
        e3.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eZ.A.getActiveLibraryApplication(t);
            e4.playApplication(t, n, {
                analyticsParams: { location: { page: e8.liQ.DIRECT, object: e8.ZSU.WEB_URL } },
            });
        }));
let tr = (0, p.z)((e) => {
        let { location: t } = e,
            n = (0, eF.default)(t.pathname);
        return (
            null != n &&
                (0, Q.B)(() => {
                    (0, eY.openUserSettingsFromParsedUrl)({ match: n, urlOrigin: "deeplink" });
                }),
            (0, i.jsx)(m.A, {
                deepLinkType: tn.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e, t, n) {
                    let [, , i, r] = e.split("/");
                    return { path: e, section: i, subsection: r, fingerprint: t, search: n };
                },
                children: (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute }),
            })
        );
    }),
    ta = (0, p.z)((e) => {
        let { location: t } = e,
            r = (0, eh.parsePlaygroundUrl)(t.pathname);
        return (
            (0, Q.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: r });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tn.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let { collection: n, story: i } = (0, eh.parsePlaygroundUrl)(e);
                    return { path: e, collection: n, story: i, fingerprint: t };
                },
                children: (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute }),
            })
        );
    }),
    tl = s.Ay.connectStores([$.A, eQ.A, ez.default], () => ({
        isConnected: $.A.isConnected(),
        defaultRoute: eQ.A.defaultRoute,
        defaultRouteFallback: eQ.A.fallbackRoute,
        token: ez.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(l.rd, { to: e8.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tA(t);
                    return null == e ||
                        ((e.params.guildId === e8.ME || null != eX.A.getGuild(e.params.guildId)) &&
                            null != e$.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(l.rd, { to: t })
                        : (0, i.jsx)(l.rd, { to: r });
                }
                return null;
            }
        },
    ),
    ts = (0, p.z)((0, y.C)(O.A, null, { passProps: !1 })),
    to = (0, y.C)(X.default, null, { passProps: !1 }),
    td = [
        e8.BVt.GUILD_BOOSTING_MARKETING(ex.pv.guildId()),
        ...Array.from(te.qW).map((e) => e8.BVt.CHANNEL(ex.pv.guildId(), e)),
    ];
function tc(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? e8.ME, channelId: n, messageId: i, threadId: r };
}
let tu = [
    {
        path: [e8.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e5.wR)() ||
                ez.default.getLoginStatus() === e8.aUe.LOGGING_IN ||
                !ez.default.allowLogoutRedirect()
                ? ts(e)
                : (0, i.jsx)(T.A, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [e8.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, Z.q)({ code: n });
                }),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, u.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eI.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    { path: [e8.BVt.APP], render: () => (0, i.jsx)(tl, {}) },
    {
        path: [e8.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.B)(() => (0, eG.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [b.A.URI_SCHEME] })),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: r } = t.params;
            return (
                e6.A.whenInitialized(() => {
                    eZ.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = eZ.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e4.playApplication(e.id, e, {
                                    analyticsParams: { location: { page: e8.liQ.DIRECT, object: e8.ZSU.WEB_URL } },
                                });
                                break;
                            }
                            case "test-mode":
                                e1.A.whenInitialized(() => _.q1(n));
                                break;
                            case "uninstall": {
                                let e = eZ.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, c.z)(e.id, e.branchId, e8.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(l.rd, { to: e8.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e8.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.B)(() => M.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, Q.B)(() => en.w({ section: (0, et.A)(e8.BEX, n), subsection: (0, et.A)(e8.nd0, r), feature: s })),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    { path: [e8.BVt.SETTINGS(":section", ":subsection?")], render: tr },
    { path: [e8.BVt.PLAYGROUND(":collection?", ":story?")], render: ta },
    {
        path: [e8.BVt.USER_GUILD_NOTIFICATION_SETTINGS(ex.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: r } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("67208")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: r });
                    });
                }),
                (0, i.jsx)(l.rd, { to: e8.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [e8.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.B)(() => (0, eY.openUserSettings)(eB.X.GIFT_PANEL, { section: e8.nc_.INVENTORY })),
                (0, i.jsx)(l.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.WELCOME(ex.pv.guildId({ optional: !0 }), ex.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, eu.C)(tt.zY.MARKETING_UNCLAIMED);
            let a = e8.BVt.CHANNEL(n, r);
            return (0, i.jsx)(l.rd, { to: a });
        },
    },
    {
        path: [e8.BVt.GUILD_EVENT_DETAILS(ex.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, J.uR)({ eventId: r });
                }),
                (0, i.jsx)(l.rd, { to: e8.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [e8.BVt.GUILD_SETTINGS(ex.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: a } = t.params;
            return (
                (0, Q.B)(() => {
                    ee.A.open(n, (0, et.A)(e8.BEX, r), void 0, (0, et.A)(e8.nd0, a));
                }),
                (0, i.jsx)(l.rd, { to: e8.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            e8.BVt.CHANNEL_THREAD_VIEW(ex.pv.guildId(), ex.pv.channelId(), ":threadId", ":messageId?"),
            e8.BVt.CHANNEL(ex.pv.guildId(), ex.pv.channelId({ optional: !0 }), ":messageId?"),
            e8.BVt.ACTIVITY,
            e8.BVt.ACTIVITIES,
            e8.BVt.ACTIVITIES_HAPPENING_NOW,
            e8.BVt.APPLICATION_LIBRARY,
            e8.BVt.APPLICATION_STORE,
            e8.BVt.MESSAGE_REQUESTS,
            e8.BVt.COLLECTIBLES_SHOP,
            e8.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e8.BVt.GUILD_DISCOVERY,
            e8.BVt.QUEST_HOME,
            e8.BVt.QUEST_HOME_V2,
            e8.BVt.ICYMI,
            e8.BVt.GLOBAL_DISCOVERY,
            e8.BVt.GUILD_MEMBER_VERIFICATION(ex.pv.guildId()),
            e8.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(ex.pv.guildId(), ":inviteCode?"),
            e8.BVt.GUILD_BOOSTING_MARKETING(ex.pv.guildId()),
            e8.BVt.GUILD_FEATURE(":feature", ex.pv.guildId()),
            e8.BVt.FEATURE(":feature"),
            e8.BVt.FAMILY_CENTER,
        ],
        render: ts,
        isChatRoute: !0,
    },
    { path: [e8.BVt.APPLICATION_DIRECTORY], render: to },
    {
        path: [e8.BVt.GAME_SHOP(ex.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: a } = t.params;
            return (0, i.jsx)(l.rd, { to: e8.BVt.CHANNELS_GAME_SHOP(n, 0, r, a) });
        },
    },
];
function tA(e) {
    for (let { path: t, isChatRoute: n } of tu) {
        if (!n) continue;
        let i = (0, l.B6)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function th(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!$.A.isConnected()) return;
    let { location: r } = (0, ev.JK)();
    r.pathname === i && (null == e$.A.getChannel(t) ? (0, ev.bG)(e8.BVt.CHANNEL(n)) : (0, ev.bG)(i));
}
class t_ extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e3.Ay.setZoomFactor(g.A.zoom),
            ey.A.init(),
            L.A.initialize(),
            eE.A.initialize(),
            W.A.initialize(),
            eq.A.initialize(),
            q.A.initialize(),
            eC.A.initialize(),
            G.A.initialize(),
            es.A.initialize(),
            E.A.init(),
            K.A.init(),
            z.A.init(),
            eA.A.initialize(),
            S.A.initialize(),
            B.A.initialize(),
            eN.A.initialize(),
            N.Ay.initialize(),
            H.Ay.initialize(),
            eW.A.initialize(),
            ei.Ay.initialize(),
            eg.A.initialize(),
            C.A.initialize(),
            er.A.init(),
            P.A.init(),
            e9.A.init(),
            I.A.initialize(),
            eU.A.init(),
            e7.A.init(),
            eV.A.init(),
            ej.A.initialize(),
            eD.A.initialize(),
            ek.A.initialize(),
            eH.A.init(),
            V.A.initialize(),
            f.A.initialize(),
            eL.A.initialize(),
            eP.A.initialize(),
            em.A.initialize(),
            e_.A.initialize(),
            ep.A.initialize(),
            j.A.initialize(),
            D.A.initialize(),
            Y.A.initialize(),
            el.A.initialize(),
            ea.A.init({
                hasModalOpen: o.ueM,
                openModal: () =>
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            }),
            eo.A.initialize(),
            eT.A.initialize(),
            ef.A.initialize(),
            U.A.initialize(),
            R.A.initialize(),
            x.A.initialize(),
            (this.rewriterUnlisten = eS.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eS.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ey.A.terminate(),
            eq.A.terminate(),
            eC.A.terminate(),
            eE.A.terminate(),
            L.A.terminate(),
            N.Ay.terminate(),
            H.Ay.terminate(),
            eW.A.terminate(),
            C.A.terminate(),
            eN.A.terminate(),
            eg.A.terminate(),
            ek.A.terminate(),
            I.A.terminate(),
            V.A.terminate(),
            eo.A.terminate(),
            f.A.terminate(),
            eT.A.terminate(),
            eL.A.terminate(),
            eP.A.terminate(),
            em.A.terminate(),
            e_.A.terminate(),
            ep.A.terminate(),
            j.A.terminate(),
            D.A.terminate(),
            ef.A.terminate(),
            U.A.terminate(),
            F.A.terminate(),
            R.A.terminate(),
            x.A.terminate(),
            Y.A.terminate(),
            el.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: i } = e;
        !(function (e) {
            if ($.A.isConnected() || $.A.isTryingToConnect()) return;
            let t = ez.default.getToken();
            null == t || ((0, eb.Q)(e) && d.A.startSession(t));
        })(n),
            (function (e, t) {
                let n = tA(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: s, threadId: o } = tc(n),
                    d = (0, ex.nn)(i),
                    c = (0, ex.ts)(r),
                    u = (0, ex.ts)(o),
                    _ = e0.A.getGuildId(),
                    m = _ !== i;
                if ((d && m && A.A.selectGuild(i), d && c)) {
                    let n = eJ.A.getChannelId(_),
                        l = n !== r,
                        d = null != eK.Ay.getGuildSidebarState(i);
                    if (!ti || m || l || null != s) {
                        (ti = !0), h.default.selectChannel({ guildId: i, channelId: r, messageId: s });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && ew.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            l &&
                            null != r &&
                            null != eK.Ay.getCurrentSidebarChannelId(r) &&
                            eO.A.closeChannelSidebar(r),
                        null != o && u)
                    ) {
                        let e = eK.Ay.getCurrentSidebarChannelId(n),
                            t = e !== o;
                        if (null != r && null != o && t)
                            if (d) (0, ev.bG)(e8.BVt.CHANNEL(i, o, s));
                            else {
                                let e = { type: eR.LU.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eO.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: o,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eO.A.closeChannelSidebar(r);
                    } else null == r || l || eO.A.closeChannelSidebar(r);
                    let c = ec.A.getIsOpen();
                    if (r === te.VV.ROLE_SUBSCRIPTIONS) ed.A.closeSidebar();
                    else if (m && c) {
                        let t = null == _ && i === e8.ME,
                            n = e === e8.BVt.GUILD_DISCOVERY;
                        t || n ? ed.A.closeSidebar() : ed.A.openSidebar();
                    } else ((l && c) || (!m && !l)) && ed.A.closeSidebar();
                } else td.some((t) => (0, l.B6)(e, t)?.isExact === !0) || (0, ev.bG)(eQ.A.fallbackRoute);
            })(n, i),
            (0, k.MS)({ pathname: n, source: e.source }, t);
    }
    ensureChannelMatchesGuild(e) {
        if (!$.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tA(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = tc(n),
            l = (0, ex.nn)(i) && i !== e8.ME && i !== e8.YYv;
        if (null != r && (0, ex.ts)(r) && !(0, te.jq)(r) && l) {
            let n = e$.A.getChannel(r);
            if (null == n) eM.A.loadThread(r).then(() => th({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e8.gNP) return { path: e8.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, ex.ts)(a) && !(0, te.jq)(r))) return null;
                let n = e$.A.getChannel(a);
                if (null == n) eM.A.loadThread(a).then(() => th({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eO.A.closeChannelSidebar(r), { path: e8.BVt.CHANNEL(i, r), state: e.state };
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
                        tu.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(l.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(l.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(w.A, {}),
            ],
        });
    }
}
let tm = t_;
