n.r(t), n.d(t, { default: () => th });
var i = n(627968),
    r = n(64700),
    l = n(492462),
    a = n(960488),
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
    I = n(836753),
    f = n(196492),
    C = n(869003),
    N = n(315206),
    T = n(844358),
    S = n(828430),
    x = n(79746),
    v = n(861638),
    y = n(793574),
    b = n(114716),
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
    el = n(114714),
    ea = n(341383),
    es = n(768841),
    eo = n(862658),
    ed = n(813160),
    ec = n(942614),
    eu = n(950067),
    eA = n(682492),
    eh = n(584257),
    e_ = n(64585),
    em = n(281913),
    ep = n(334116),
    eg = n(194970),
    eE = n(414967),
    eI = n(499454),
    ef = n(580960),
    eC = n(968930),
    eN = n(265367),
    eT = n(77509),
    eS = n(463347),
    ex = n(976860),
    ev = n(569745),
    ey = n(985986),
    eb = n(138298),
    eL = n(940382),
    eO = n(194045),
    eR = n(212371),
    eP = n(882991),
    ej = n(863922),
    eD = n(353202),
    ew = n(823162),
    eM = n(657331),
    eU = n(403777),
    eG = n(791767),
    ek = n(780964),
    eV = n(452379),
    eB = n(849823),
    eH = n(840065),
    eF = n(32294),
    eY = n(639823),
    eW = n(961350),
    eq = n(761640),
    ez = n(734057),
    eK = n(650048),
    e$ = n(71393),
    eQ = n(189081),
    eX = n(309010),
    eZ = n(967198),
    eJ = n(147964),
    e0 = n(237631),
    e1 = n(194871),
    e7 = n(856588),
    e6 = n(612181),
    e9 = n(723702),
    e5 = n(837921),
    e2 = n(715671),
    e3 = n(652215),
    e4 = n(746080),
    e8 = n(771016),
    te = n(613057);
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
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(972937),
    n(279061),
    n(750128),
    n(921955);
let tt = !1;
(0, v.as)(),
    s.Ay.initialize(),
    ey.A.loadServer(),
    e9.isPlatformEmbedded &&
        (e5.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eH.openUserSettings)();
        }),
        e5.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eQ.A.getActiveLibraryApplication(t);
            e2.playApplication(t, n, {
                analyticsParams: { location: { page: e3.liQ.DIRECT, object: e3.ZSU.WEB_URL } },
            });
        }));
let tn = (0, p.z)((e) => {
        let { location: t } = e,
            n = (0, eB.default)(t.pathname);
        return (
            null != n &&
                (0, Q.B)(() => {
                    (0, eH.openUserSettingsFromParsedUrl)({ match: n, urlOrigin: "deeplink" });
                }),
            (0, i.jsx)(m.A, {
                deepLinkType: te.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e, t, n) {
                    let [, , i, r] = e.split("/");
                    return { path: e, section: i, subsection: r, fingerprint: t, search: n };
                },
                children: (0, i.jsx)(a.rd, { to: eK.A.defaultRoute }),
            })
        );
    }),
    ti = (0, p.z)((e) => {
        let { location: t } = e,
            r = (0, eA.parsePlaygroundUrl)(t.pathname);
        return (
            (0, Q.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: r });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: te.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let { collection: n, story: i } = (0, eA.parsePlaygroundUrl)(e);
                    return { path: e, collection: n, story: i, fingerprint: t };
                },
                children: (0, i.jsx)(a.rd, { to: eK.A.defaultRoute }),
            })
        );
    }),
    tr = s.Ay.connectStores([$.A, eK.A, eW.default], () => ({
        isConnected: $.A.isConnected(),
        defaultRoute: eK.A.defaultRoute,
        defaultRouteFallback: eK.A.fallbackRoute,
        token: eW.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(a.rd, { to: e3.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tc(t);
                    return null == e ||
                        ((e.params.guildId === e3.ME || null != e$.A.getGuild(e.params.guildId)) &&
                            null != ez.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(a.rd, { to: t })
                        : (0, i.jsx)(a.rd, { to: r });
                }
                return null;
            }
        },
    ),
    tl = (0, p.z)((0, b.C)(O.A, null, { passProps: !1 })),
    ta = (0, b.C)(X.default, null, { passProps: !1 }),
    ts = [
        e3.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
        ...Array.from(e4.qW).map((e) => e3.BVt.CHANNEL(eS.pv.guildId(), e)),
    ];
function to(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? e3.ME, channelId: n, messageId: i, threadId: r };
}
let td = [
    {
        path: [e3.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e6.wR)() ||
                eW.default.getLoginStatus() === e3.aUe.LOGGING_IN ||
                !eW.default.allowLogoutRedirect()
                ? tl(e)
                : (0, i.jsx)(T.A, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [e3.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, Z.q)({ code: n });
                }),
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    {
        path: [e3.BVt.APP_WITH_GIFT_CODE(":giftCode")],
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
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    { path: [e3.BVt.APP], render: () => (0, i.jsx)(tr, {}) },
    {
        path: [e3.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.B)(() => (0, eM.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [y.A.URI_SCHEME] })),
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    {
        path: [e3.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: r } = t.params;
            return (
                e1.A.whenInitialized(() => {
                    eQ.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = eQ.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e2.playApplication(e.id, e, {
                                    analyticsParams: { location: { page: e3.liQ.DIRECT, object: e3.ZSU.WEB_URL } },
                                });
                                break;
                            }
                            case "test-mode":
                                eJ.A.whenInitialized(() => _.q1(n));
                                break;
                            case "uninstall": {
                                let e = eQ.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, c.z)(e.id, e.branchId, e3.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(a.rd, { to: e3.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e3.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.B)(() => M.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    {
        path: [e3.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, l.parse)(location.search).feature;
            return (
                (0, Q.B)(() => en.w({ section: (0, et.A)(e3.BEX, n), subsection: (0, et.A)(e3.nd0, r), feature: s })),
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    { path: [e3.BVt.SETTINGS(":section", ":subsection?")], render: tn },
    { path: [e3.BVt.PLAYGROUND(":collection?", ":story?")], render: ti },
    {
        path: [e3.BVt.USER_GUILD_NOTIFICATION_SETTINGS(eS.pv.guildId())],
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
                (0, i.jsx)(a.rd, { to: e3.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [e3.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.B)(() => (0, eH.openUserSettings)(ek.X.GIFT_PANEL, { section: e3.nc_.INVENTORY })),
                (0, i.jsx)(a.rd, { to: eK.A.defaultRoute })
            );
        },
    },
    {
        path: [e3.BVt.WELCOME(eS.pv.guildId({ optional: !0 }), eS.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, ec.C)(e8.zY.MARKETING_UNCLAIMED);
            let l = e3.BVt.CHANNEL(n, r);
            return (0, i.jsx)(a.rd, { to: l });
        },
    },
    {
        path: [e3.BVt.GUILD_EVENT_DETAILS(eS.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, Q.B)(() => {
                    (0, J.uR)({ eventId: r });
                }),
                (0, i.jsx)(a.rd, { to: e3.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [e3.BVt.GUILD_SETTINGS(eS.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: l } = t.params;
            return (
                (0, Q.B)(() => {
                    ee.A.open(n, (0, et.A)(e3.BEX, r), void 0, (0, et.A)(e3.nd0, l));
                }),
                (0, i.jsx)(a.rd, { to: e3.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            e3.BVt.CHANNEL_THREAD_VIEW(eS.pv.guildId(), eS.pv.channelId(), ":threadId", ":messageId?"),
            e3.BVt.CHANNEL(eS.pv.guildId(), eS.pv.channelId({ optional: !0 }), ":messageId?"),
            e3.BVt.ACTIVITY,
            e3.BVt.ACTIVITIES,
            e3.BVt.ACTIVITIES_HAPPENING_NOW,
            e3.BVt.APPLICATION_LIBRARY,
            e3.BVt.APPLICATION_STORE,
            e3.BVt.MESSAGE_REQUESTS,
            e3.BVt.COLLECTIBLES_SHOP,
            e3.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e3.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            e3.BVt.GUILD_DISCOVERY,
            e3.BVt.QUEST_HOME,
            e3.BVt.QUEST_HOME_V2,
            e3.BVt.ICYMI,
            e3.BVt.GLOBAL_DISCOVERY,
            e3.BVt.GUILD_MEMBER_VERIFICATION(eS.pv.guildId()),
            e3.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.pv.guildId(), ":inviteCode?"),
            e3.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
            e3.BVt.GUILD_FEATURE(":feature", eS.pv.guildId()),
            e3.BVt.FEATURE(":feature"),
            e3.BVt.FAMILY_CENTER,
        ],
        render: tl,
        isChatRoute: !0,
    },
    { path: [e3.BVt.APPLICATION_DIRECTORY], render: ta },
    {
        path: [e3.BVt.GAME_SHOP(eS.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: l } = t.params;
            return (0, i.jsx)(a.rd, { to: e3.BVt.CHANNELS_GAME_SHOP(n, 0, r, l) });
        },
    },
];
function tc(e) {
    for (let { path: t, isChatRoute: n } of td) {
        if (!n) continue;
        let i = (0, a.B6)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function tu(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!$.A.isConnected()) return;
    let { location: r } = (0, ex.JK)();
    r.pathname === i && (null == ez.A.getChannel(t) ? (0, ex.bG)(e3.BVt.CHANNEL(n)) : (0, ex.bG)(i));
}
class tA extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e5.Ay.setZoomFactor(g.A.zoom),
            ey.A.init(),
            L.A.initialize(),
            eg.A.initialize(),
            W.A.initialize(),
            eY.A.initialize(),
            q.A.initialize(),
            ef.A.initialize(),
            G.A.initialize(),
            ea.A.initialize(),
            E.A.init(),
            K.A.init(),
            z.A.init(),
            eu.A.initialize(),
            S.A.initialize(),
            B.A.initialize(),
            eC.A.initialize(),
            N.Ay.initialize(),
            H.Ay.initialize(),
            eF.A.initialize(),
            ei.Ay.initialize(),
            ep.A.initialize(),
            C.A.initialize(),
            er.A.init(),
            P.A.init(),
            e7.A.init(),
            f.A.initialize(),
            ew.A.init(),
            e0.A.init(),
            eG.A.init(),
            eR.A.initialize(),
            eP.A.initialize(),
            eU.A.initialize(),
            eV.A.init(),
            V.A.initialize(),
            I.A.initialize(),
            eO.A.initialize(),
            e_.A.initialize(),
            eh.A.initialize(),
            em.A.initialize(),
            j.A.initialize(),
            D.A.initialize(),
            Y.A.initialize(),
            el.A.initialize(),
            es.A.initialize(),
            eN.A.initialize(),
            eE.A.initialize(),
            U.A.initialize(),
            R.A.initialize(),
            x.A.initialize(),
            (this.rewriterUnlisten = eT.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eT.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        ey.A.terminate(),
            eY.A.terminate(),
            ef.A.terminate(),
            eg.A.terminate(),
            L.A.terminate(),
            N.Ay.terminate(),
            H.Ay.terminate(),
            eF.A.terminate(),
            C.A.terminate(),
            eC.A.terminate(),
            ep.A.terminate(),
            eU.A.terminate(),
            f.A.terminate(),
            V.A.terminate(),
            es.A.terminate(),
            I.A.terminate(),
            eN.A.terminate(),
            eO.A.terminate(),
            e_.A.terminate(),
            eh.A.terminate(),
            em.A.terminate(),
            j.A.terminate(),
            D.A.terminate(),
            eE.A.terminate(),
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
            let t = eW.default.getToken();
            null == t || ((0, ev.Q)(e) && d.A.startSession(t));
        })(n),
            (function (e, t) {
                let n = tc(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: s, threadId: o } = to(n),
                    d = (0, eS.nn)(i),
                    c = (0, eS.ts)(r),
                    u = (0, eS.ts)(o),
                    _ = eZ.A.getGuildId(),
                    m = _ !== i;
                if ((d && m && A.A.selectGuild(i), d && c)) {
                    let n = eX.A.getChannelId(_),
                        a = n !== r,
                        d = null != eq.Ay.getGuildSidebarState(i);
                    if (!tt || m || a || null != s) {
                        (tt = !0), h.default.selectChannel({ guildId: i, channelId: r, messageId: s });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && ej.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            a &&
                            null != r &&
                            null != eq.Ay.getCurrentSidebarChannelId(r) &&
                            eb.A.closeChannelSidebar(r),
                        null != o && u)
                    ) {
                        let e = eq.Ay.getCurrentSidebarChannelId(n),
                            t = e !== o;
                        if (null != r && null != o && t)
                            if (d) (0, ex.bG)(e3.BVt.CHANNEL(i, o, s));
                            else {
                                let e = { type: eL.LU.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eb.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: o,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eb.A.closeChannelSidebar(r);
                    } else null == r || a || eb.A.closeChannelSidebar(r);
                    let c = ed.A.getIsOpen();
                    if (r === e4.VV.ROLE_SUBSCRIPTIONS) eo.A.closeSidebar();
                    else if (m && c) {
                        let t = null == _ && i === e3.ME,
                            n = e === e3.BVt.GUILD_DISCOVERY;
                        t || n ? eo.A.closeSidebar() : eo.A.openSidebar();
                    } else ((a && c) || (!m && !a)) && eo.A.closeSidebar();
                } else ts.some((t) => (0, a.B6)(e, t)?.isExact === !0) || (0, ex.bG)(eK.A.fallbackRoute);
            })(n, i),
            (0, k.MS)({ pathname: n, source: e.source }, t);
    }
    ensureChannelMatchesGuild(e) {
        if (!$.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tc(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: l } = to(n),
            a = (0, eS.nn)(i) && i !== e3.ME && i !== e3.YYv;
        if (null != r && (0, eS.ts)(r) && !(0, e4.jq)(r) && a) {
            let n = ez.A.getChannel(r);
            if (null == n) eD.A.loadThread(r).then(() => tu({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e3.gNP) return { path: e3.BVt.CHANNEL(i), state: e.state };
            if (null != l) {
                if (!((0, eS.ts)(l) && !(0, e4.jq)(r))) return null;
                let n = ez.A.getChannel(l);
                if (null == n) eD.A.loadThread(l).then(() => tu({ channelId: l, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eb.A.closeChannelSidebar(r), { path: e3.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(a.dO, {
                    children: [
                        (0, i.jsx)(a.rd, { exact: !0, from: "/channels", to: "/" }),
                        td.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(a.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(a.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(w.A, {}),
            ],
        });
    }
}
let th = tA;
