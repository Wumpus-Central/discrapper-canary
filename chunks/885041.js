n.r(t), n.d(t, { default: () => t_ });
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
    I = n(836753),
    f = n(196492),
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
    ea = n(114714),
    el = n(341383),
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
    eb = n(985986),
    ey = n(874959),
    eL = n(138298),
    eO = n(940382),
    eR = n(194045),
    eP = n(212371),
    ej = n(882991),
    eD = n(863922),
    ew = n(353202),
    eM = n(823162),
    eU = n(657331),
    eG = n(403777),
    ek = n(791767),
    eV = n(780964),
    eB = n(452379),
    eH = n(849823),
    eF = n(840065),
    eY = n(32294),
    eW = n(639823),
    eq = n(961350),
    ez = n(761640),
    eK = n(734057),
    e$ = n(650048),
    eQ = n(71393),
    eX = n(189081),
    eZ = n(309010),
    eJ = n(967198),
    e0 = n(147964),
    e1 = n(237631),
    e7 = n(194871),
    e6 = n(856588),
    e9 = n(612181),
    e5 = n(723702),
    e2 = n(837921),
    e3 = n(715671),
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
let tn = !1;
(0, v.as)(),
    s.Ay.initialize(),
    eb.A.loadServer(),
    e5.isPlatformEmbedded &&
        (e2.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eF.openUserSettings)();
        }),
        e2.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eX.A.getActiveLibraryApplication(t);
            e3.playApplication(t, n, {
                analyticsParams: { location: { page: e4.liQ.DIRECT, object: e4.ZSU.WEB_URL } },
            });
        }));
let ti = (0, p.z)((e) => {
        let { location: t } = e,
            n = (0, eH.default)(t.pathname);
        return (
            null != n &&
                (0, Q.B)(() => {
                    (0, eF.openUserSettingsFromParsedUrl)({ match: n, urlOrigin: "deeplink" });
                }),
            (0, i.jsx)(m.A, {
                deepLinkType: tt.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e, t, n) {
                    let [, , i, r] = e.split("/");
                    return { path: e, section: i, subsection: r, fingerprint: t, search: n };
                },
                children: (0, i.jsx)(l.rd, { to: e$.A.defaultRoute }),
            })
        );
    }),
    tr = (0, p.z)((e) => {
        let { location: t } = e,
            r = (0, eA.parsePlaygroundUrl)(t.pathname);
        return (
            (0, Q.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: r });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tt.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let { collection: n, story: i } = (0, eA.parsePlaygroundUrl)(e);
                    return { path: e, collection: n, story: i, fingerprint: t };
                },
                children: (0, i.jsx)(l.rd, { to: e$.A.defaultRoute }),
            })
        );
    }),
    ta = s.Ay.connectStores([$.A, e$.A, eq.default], () => ({
        isConnected: $.A.isConnected(),
        defaultRoute: e$.A.defaultRoute,
        defaultRouteFallback: e$.A.fallbackRoute,
        token: eq.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(l.rd, { to: e4.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tu(t);
                    return null == e ||
                        ((e.params.guildId === e4.ME || null != eQ.A.getGuild(e.params.guildId)) &&
                            null != eK.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(l.rd, { to: t })
                        : (0, i.jsx)(l.rd, { to: r });
                }
                return null;
            }
        },
    ),
    tl = (0, p.z)((0, y.C)(O.A, null, { passProps: !1 })),
    ts = (0, y.C)(X.default, null, { passProps: !1 }),
    to = [
        e4.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
        ...Array.from(e8.qW).map((e) => e4.BVt.CHANNEL(eS.pv.guildId(), e)),
    ];
function td(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? e4.ME, channelId: n, messageId: i, threadId: r };
}
let tc = [
    {
        path: [e4.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e9.wR)() ||
                eq.default.getLoginStatus() === e4.aUe.LOGGING_IN ||
                !eq.default.allowLogoutRedirect()
                ? tl(e)
                : (0, i.jsx)(T.A, { applicationId: e.match.params.applicationId });
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
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
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
                    (0, u.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eI.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    { path: [e4.BVt.APP], render: () => (0, i.jsx)(ta, {}) },
    {
        path: [e4.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.B)(() => (0, eU.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [b.A.URI_SCHEME] })),
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: r } = t.params;
            return (
                e7.A.whenInitialized(() => {
                    eX.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = eX.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e3.playApplication(e.id, e, {
                                    analyticsParams: { location: { page: e4.liQ.DIRECT, object: e4.ZSU.WEB_URL } },
                                });
                                break;
                            }
                            case "test-mode":
                                e0.A.whenInitialized(() => _.q1(n));
                                break;
                            case "uninstall": {
                                let e = eX.A.getActiveLibraryApplication(n);
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
                (0, Q.B)(() => M.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
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
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    { path: [e4.BVt.SETTINGS(":section", ":subsection?")], render: ti },
    { path: [e4.BVt.PLAYGROUND(":collection?", ":story?")], render: tr },
    {
        path: [e4.BVt.USER_GUILD_NOTIFICATION_SETTINGS(eS.pv.guildId())],
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
                (0, i.jsx)(l.rd, { to: e4.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [e4.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.B)(() => (0, eF.openUserSettings)(eV.X.GIFT_PANEL, { section: e4.nc_.INVENTORY })),
                (0, i.jsx)(l.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.WELCOME(eS.pv.guildId({ optional: !0 }), eS.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, ec.C)(te.zY.MARKETING_UNCLAIMED);
            let a = e4.BVt.CHANNEL(n, r);
            return (0, i.jsx)(l.rd, { to: a });
        },
    },
    {
        path: [e4.BVt.GUILD_EVENT_DETAILS(eS.pv.guildId({ optional: !0 }), ":guildEventId")],
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
        path: [e4.BVt.GUILD_SETTINGS(eS.pv.guildId(), ":section?", ":subsection?")],
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
            e4.BVt.CHANNEL_THREAD_VIEW(eS.pv.guildId(), eS.pv.channelId(), ":threadId", ":messageId?"),
            e4.BVt.CHANNEL(eS.pv.guildId(), eS.pv.channelId({ optional: !0 }), ":messageId?"),
            e4.BVt.ACTIVITY,
            e4.BVt.ACTIVITIES,
            e4.BVt.ACTIVITIES_HAPPENING_NOW,
            e4.BVt.APPLICATION_LIBRARY,
            e4.BVt.APPLICATION_STORE,
            e4.BVt.MESSAGE_REQUESTS,
            e4.BVt.COLLECTIBLES_SHOP,
            e4.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e4.BVt.GUILD_DISCOVERY,
            e4.BVt.QUEST_HOME,
            e4.BVt.QUEST_HOME_V2,
            e4.BVt.ICYMI,
            e4.BVt.GLOBAL_DISCOVERY,
            e4.BVt.GUILD_MEMBER_VERIFICATION(eS.pv.guildId()),
            e4.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.pv.guildId(), ":inviteCode?"),
            e4.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
            e4.BVt.GUILD_FEATURE(":feature", eS.pv.guildId()),
            e4.BVt.FEATURE(":feature"),
            e4.BVt.FAMILY_CENTER,
        ],
        render: tl,
        isChatRoute: !0,
    },
    { path: [e4.BVt.APPLICATION_DIRECTORY], render: ts },
    {
        path: [e4.BVt.GAME_SHOP(eS.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: a } = t.params;
            return (0, i.jsx)(l.rd, { to: e4.BVt.CHANNELS_GAME_SHOP(n, 0, r, a) });
        },
    },
];
function tu(e) {
    for (let { path: t, isChatRoute: n } of tc) {
        if (!n) continue;
        let i = (0, l.B6)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function tA(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!$.A.isConnected()) return;
    let { location: r } = (0, ex.JK)();
    r.pathname === i && (null == eK.A.getChannel(t) ? (0, ex.bG)(e4.BVt.CHANNEL(n)) : (0, ex.bG)(i));
}
class th extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e2.Ay.setZoomFactor(g.A.zoom),
            eb.A.init(),
            L.A.initialize(),
            eg.A.initialize(),
            W.A.initialize(),
            eW.A.initialize(),
            q.A.initialize(),
            ef.A.initialize(),
            G.A.initialize(),
            el.A.initialize(),
            E.A.init(),
            K.A.init(),
            z.A.init(),
            eu.A.initialize(),
            S.A.initialize(),
            B.A.initialize(),
            eC.A.initialize(),
            N.Ay.initialize(),
            H.Ay.initialize(),
            eY.A.initialize(),
            ei.Ay.initialize(),
            ep.A.initialize(),
            C.A.initialize(),
            er.A.init(),
            P.A.init(),
            e6.A.init(),
            f.A.initialize(),
            eM.A.init(),
            e1.A.init(),
            ek.A.init(),
            eP.A.initialize(),
            ej.A.initialize(),
            eG.A.initialize(),
            eB.A.init(),
            V.A.initialize(),
            I.A.initialize(),
            ey.A.initialize(),
            eR.A.initialize(),
            e_.A.initialize(),
            eh.A.initialize(),
            em.A.initialize(),
            j.A.initialize(),
            D.A.initialize(),
            Y.A.initialize(),
            ea.A.initialize(),
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
        eb.A.terminate(),
            eW.A.terminate(),
            ef.A.terminate(),
            eg.A.terminate(),
            L.A.terminate(),
            N.Ay.terminate(),
            H.Ay.terminate(),
            eY.A.terminate(),
            C.A.terminate(),
            eC.A.terminate(),
            ep.A.terminate(),
            eG.A.terminate(),
            f.A.terminate(),
            V.A.terminate(),
            es.A.terminate(),
            I.A.terminate(),
            eN.A.terminate(),
            ey.A.terminate(),
            eR.A.terminate(),
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
            ea.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: i } = e;
        !(function (e) {
            if ($.A.isConnected() || $.A.isTryingToConnect()) return;
            let t = eq.default.getToken();
            null == t || ((0, ev.Q)(e) && d.A.startSession(t));
        })(n),
            (function (e, t) {
                let n = tu(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: s, threadId: o } = td(n),
                    d = (0, eS.nn)(i),
                    c = (0, eS.ts)(r),
                    u = (0, eS.ts)(o),
                    _ = eJ.A.getGuildId(),
                    m = _ !== i;
                if ((d && m && A.A.selectGuild(i), d && c)) {
                    let n = eZ.A.getChannelId(_),
                        l = n !== r,
                        d = null != ez.Ay.getGuildSidebarState(i);
                    if (!tn || m || l || null != s) {
                        (tn = !0), h.default.selectChannel({ guildId: i, channelId: r, messageId: s });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eD.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            l &&
                            null != r &&
                            null != ez.Ay.getCurrentSidebarChannelId(r) &&
                            eL.A.closeChannelSidebar(r),
                        null != o && u)
                    ) {
                        let e = ez.Ay.getCurrentSidebarChannelId(n),
                            t = e !== o;
                        if (null != r && null != o && t)
                            if (d) (0, ex.bG)(e4.BVt.CHANNEL(i, o, s));
                            else {
                                let e = { type: eO.LU.THREAD };
                                null != s && (e.initialMessageId = s),
                                    eL.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: o,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eL.A.closeChannelSidebar(r);
                    } else null == r || l || eL.A.closeChannelSidebar(r);
                    let c = ed.A.getIsOpen();
                    if (r === e8.VV.ROLE_SUBSCRIPTIONS) eo.A.closeSidebar();
                    else if (m && c) {
                        let t = null == _ && i === e4.ME,
                            n = e === e4.BVt.GUILD_DISCOVERY;
                        t || n ? eo.A.closeSidebar() : eo.A.openSidebar();
                    } else ((l && c) || (!m && !l)) && eo.A.closeSidebar();
                } else to.some((t) => (0, l.B6)(e, t)?.isExact === !0) || (0, ex.bG)(e$.A.fallbackRoute);
            })(n, i),
            (0, k.MS)({ pathname: n, source: e.source }, t);
    }
    ensureChannelMatchesGuild(e) {
        if (!$.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tu(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = td(n),
            l = (0, eS.nn)(i) && i !== e4.ME && i !== e4.YYv;
        if (null != r && (0, eS.ts)(r) && !(0, e8.jq)(r) && l) {
            let n = eK.A.getChannel(r);
            if (null == n) ew.A.loadThread(r).then(() => tA({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e4.gNP) return { path: e4.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, eS.ts)(a) && !(0, e8.jq)(r))) return null;
                let n = eK.A.getChannel(a);
                if (null == n) ew.A.loadThread(a).then(() => tA({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eL.A.closeChannelSidebar(r), { path: e4.BVt.CHANNEL(i, r), state: e.state };
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
                        tc.map((e) => {
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
let t_ = th;
