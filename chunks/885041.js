n.r(t), n.d(t, { default: () => tI });
var i = n(627968),
    l = n(64700),
    a = n(492462),
    r = n(873263),
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
    T = n(315206),
    N = n(844358),
    S = n(828430),
    x = n(857365),
    v = n(861638),
    b = n(793574),
    y = n(114716),
    O = n(752412),
    L = n(105220),
    R = n(10088),
    P = n(778830),
    D = n(619036),
    M = n(131876),
    j = n(227972),
    w = n(793943),
    U = n(746793),
    G = n(272613),
    k = n(855371),
    V = n(874059),
    B = n(963169),
    H = n(789105),
    F = n(636805),
    Y = n(293495),
    W = n(811917),
    K = n(746094),
    q = n(257402),
    z = n(216954),
    $ = n(735831),
    Q = n(913953),
    X = n(142120),
    Z = n(507263),
    J = n(998345),
    ee = n(352306),
    et = n(829203),
    en = n(435875),
    ei = n(707592),
    el = n(997509),
    ea = n(268313),
    er = n(998654),
    es = n(986880),
    eo = n(438998),
    ed = n(114714),
    ec = n(341383),
    eu = n(768841),
    eA = n(862658),
    eh = n(813160),
    e_ = n(942614),
    em = n(172448),
    ep = n(682492),
    eg = n(584257),
    eE = n(64585),
    eI = n(281913),
    ef = n(334116),
    eC = n(194970),
    eT = n(414967),
    eN = n(499454),
    eS = n(580960),
    ex = n(968930),
    ev = n(265367),
    eb = n(77509),
    ey = n(463347),
    eO = n(334465),
    eL = n(976860),
    eR = n(569745),
    eP = n(985986),
    eD = n(138298),
    eM = n(940382),
    ej = n(194045),
    ew = n(212371),
    eU = n(882991),
    eG = n(863922),
    ek = n(353202),
    eV = n(823162),
    eB = n(657331),
    eH = n(403777),
    eF = n(791767),
    eY = n(780964),
    eW = n(452379),
    eK = n(849823),
    eq = n(858897),
    ez = n(32294),
    e$ = n(639823),
    eQ = n(961350),
    eX = n(761640),
    eZ = n(734057),
    eJ = n(650048),
    e0 = n(71393),
    e1 = n(189081),
    e7 = n(309010),
    e9 = n(967198),
    e6 = n(147964),
    e5 = n(237631),
    e2 = n(194871),
    e3 = n(856588),
    e4 = n(612181),
    e8 = n(723702),
    te = n(837921),
    tt = n(715671),
    tn = n(652215),
    ti = n(746080),
    tl = n(771016),
    ta = n(613057);
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
let tr = !1;
(0, v.as)(),
    s.Ay.initialize(),
    eP.A.loadServer(),
    e8.isPlatformEmbedded &&
        (te.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eq.openUserSettings)();
        }),
        te.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = e1.A.getActiveLibraryApplication(t);
            tt.playApplication(t, n, {
                analyticsParams: { location: { page: tn.liQ.DIRECT, object: tn.ZSU.WEB_URL } },
            });
        }));
let ts = (0, p.z)((e) => {
        let { location: t } = e;
        return (
            (0, Z.B)(() => {
                let e = R.A.getHighestState();
                e === tn.fAW.OPEN ||
                    e === tn.fAW.OPENING ||
                    (ee.s.getConfig({ location: "deeplink" }).enabled && (0, et.A)({ source: "deeplink" }));
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: ta.XK.GORILLA,
                path: t.pathname,
                search: t.search,
                paramsBuilder: (e) => {
                    let { path: t, fingerprint: n, search: i, installationId: l } = e;
                    return { path: t, fingerprint: n, installationId: l, search: i };
                },
                children: (0, i.jsx)(r.rd, { to: tn.BVt.ME }),
            })
        );
    }),
    to = (0, p.z)((e) => {
        let { location: t } = e;
        return (
            (0, Z.B)(() => {
                let e = R.A.getHighestState();
                if (e === tn.fAW.OPEN || e === tn.fAW.OPENING) return;
                let n = (0, eK.default)({ path: t.pathname, search: t.search });
                (0, eK.trackParseSettingsUrl)(n, "deeplink"),
                    (0, eq.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: ta.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: l } = e,
                        [, , a, r] = t.split("/");
                    return { path: t, section: a, subsection: r, fingerprint: n, installationId: l, search: i };
                },
                children: (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute }),
            })
        );
    }),
    td = (0, p.z)((e) => {
        let { location: t } = e,
            l = (0, ep.parsePlaygroundUrl)(t.pathname);
        return (
            (0, Z.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: l });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: ta.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: l, story: a } = (0, ep.parsePlaygroundUrl)(t);
                    return { path: t, collection: l, story: a, fingerprint: n, installationId: i };
                },
                children: (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute }),
            })
        );
    }),
    tc = s.Ay.connectStores([X.A, eJ.A, eQ.default], () => ({
        isConnected: X.A.isConnected(),
        defaultRoute: eJ.A.defaultRoute,
        defaultRouteFallback: eJ.A.fallbackRoute,
        token: eQ.default.getToken(),
    }))(
        class extends l.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: l } = this.props;
                if (null == n) return (0, i.jsx)(r.rd, { to: tn.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tp(t);
                    return null == e ||
                        ((e.params.guildId === tn.ME || null != e0.A.getGuild(e.params.guildId)) &&
                            null != eZ.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(r.rd, { to: t })
                        : (0, i.jsx)(r.rd, { to: l });
                }
                return null;
            }
        },
    ),
    tu = (0, p.z)((0, y.C)(L.A, null, { passProps: !1 })),
    tA = (0, y.C)(J.default, null, { passProps: !1 }),
    th = [
        tn.BVt.GUILD_BOOSTING_MARKETING(ey.pv.guildId()),
        ...Array.from(ti.qW).map((e) => tn.BVt.CHANNEL(ey.pv.guildId(), e)),
    ];
function t_(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: l = null } = e.params;
    return { guildId: t ?? tn.ME, channelId: n, messageId: i, threadId: l };
}
let tm = [
    {
        path: [tn.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e4.wR)() ||
                eQ.default.getLoginStatus() === tn.aUe.LOGGING_IN ||
                !eQ.default.allowLogoutRedirect()
                ? tu(e)
                : (0, i.jsx)(N.A, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [tn.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, Z.B)(() => {
                    (0, en.q)({ code: n });
                }),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    {
        path: [tn.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, Z.B)(() => {
                    (0, u.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eN.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    { path: [tn.BVt.APP], render: () => (0, i.jsx)(tc, {}) },
    {
        path: [tn.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Z.B)(() => (0, eB.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [b.A.URI_SCHEME] })),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    {
        path: [tn.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: l } = t.params;
            return (
                e2.A.whenInitialized(() => {
                    e1.A.whenInitialized(() => {
                        switch (l) {
                            case "launch": {
                                let e = e1.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                tt.playApplication(e.id, e, {
                                    analyticsParams: { location: { page: tn.liQ.DIRECT, object: tn.ZSU.WEB_URL } },
                                });
                                break;
                            }
                            case "test-mode":
                                e6.A.whenInitialized(() => _.q1(n));
                                break;
                            case "uninstall": {
                                let e = e1.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, c.z)(e.id, e.branchId, tn.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(r.rd, { to: tn.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [tn.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, Z.B)(() => G.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    {
        path: [tn.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: l } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, Z.B)(() => er.w({ section: (0, ea.A)(tn.BEX, n), subsection: (0, ea.A)(tn.nd0, l), feature: s })),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    {
        path: [tn.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, a.parse)(t.search),
                l = "string" == typeof n.applicationId ? n.applicationId : null,
                s = "true" === n.openGameProfile;
            return (
                (0, Z.B)(() => {
                    null != l &&
                        _.q1(l).then((e) => {
                            null != e && (0, w.nf)(w.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: s });
                        });
                }),
                (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    { path: [tn.BVt.SETTINGS(":section", ":subsection?")], render: to },
    { path: [tn.BVt.PLAYGROUND(":collection?", ":story?")], render: td },
    {
        path: [tn.BVt.USER_GUILD_NOTIFICATION_SETTINGS(ey.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: l } = t.params;
            return (
                (0, Z.B)(() => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("96878")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                    });
                }),
                (0, i.jsx)(r.rd, { to: tn.BVt.CHANNEL(l) })
            );
        },
    },
    {
        path: [tn.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Z.B)(() => (0, eq.openUserSettings)(eY.X.GIFT_PANEL)), (0, i.jsx)(r.rd, { to: eJ.A.defaultRoute })
            );
        },
    },
    {
        path: [tn.BVt.WELCOME(ey.pv.guildId({ optional: !0 }), ey.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: l } = t.params;
            (0, e_.C)(tl.zY.MARKETING_UNCLAIMED);
            let a = tn.BVt.CHANNEL(n, l);
            return (0, i.jsx)(r.rd, { to: a });
        },
    },
    {
        path: [tn.BVt.GUILD_EVENT_DETAILS(ey.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: l } = t.params;
            return (
                (0, Z.B)(() => {
                    (0, ei.uR)({ eventId: l });
                }),
                (0, i.jsx)(r.rd, { to: tn.BVt.CHANNEL(n) })
            );
        },
    },
    { path: [tn.BVt.GORILLA], render: ts },
    {
        path: [tn.BVt.GUILD_SETTINGS(ey.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: l, subsection: a } = t.params;
            return (
                (0, Z.B)(() => {
                    el.A.open(n, (0, ea.A)(tn.BEX, l), void 0, (0, ea.A)(tn.nd0, a));
                }),
                (0, i.jsx)(r.rd, { to: tn.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            tn.BVt.CHANNEL_THREAD_VIEW(ey.pv.guildId(), ey.pv.channelId(), ":threadId", ":messageId?"),
            tn.BVt.CHANNEL(ey.pv.guildId(), ey.pv.channelId({ optional: !0 }), ":messageId?"),
            tn.BVt.ACTIVITY,
            tn.BVt.ACTIVITIES,
            tn.BVt.ACTIVITIES_HAPPENING_NOW,
            tn.BVt.APPLICATION_LIBRARY,
            tn.BVt.APPLICATION_STORE,
            tn.BVt.MESSAGE_REQUESTS,
            tn.BVt.COLLECTIBLES_SHOP,
            tn.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            tn.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            tn.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            tn.BVt.GUILD_DISCOVERY,
            tn.BVt.QUEST_HOME_DEPRECATED,
            tn.BVt.QUEST_HOME,
            tn.BVt.ICYMI,
            tn.BVt.GLOBAL_DISCOVERY,
            tn.BVt.GUILD_MEMBER_VERIFICATION(ey.pv.guildId()),
            tn.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(ey.pv.guildId(), ":inviteCode?"),
            tn.BVt.GUILD_BOOSTING_MARKETING(ey.pv.guildId()),
            tn.BVt.GUILD_FEATURE(":feature", ey.pv.guildId()),
            tn.BVt.FEATURE(":feature"),
            tn.BVt.FAMILY_CENTER,
        ],
        render: tu,
        isChatRoute: !0,
    },
    { path: [tn.BVt.APPLICATION_DIRECTORY], render: tA },
    {
        path: [tn.BVt.GAME_SHOP(ey.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: l, shopSlug: a } = t.params;
            return (0, i.jsx)(r.rd, { to: tn.BVt.CHANNELS_GAME_SHOP(n, 0, l, a) });
        },
    },
];
function tp(e) {
    for (let { path: t, isChatRoute: n } of tm) {
        if (!n) continue;
        let i = (0, eO.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function tg(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!X.A.isConnected()) return;
    let { location: l } = (0, eL.JK)();
    l.pathname === i && (null == eZ.A.getChannel(t) ? (0, eL.bG)(tn.BVt.CHANNEL(n)) : (0, eL.bG)(i));
}
class tE extends l.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        te.Ay.setZoomFactor(g.A.zoom),
            eP.A.init(),
            O.A.initialize(),
            eC.A.initialize(),
            q.A.initialize(),
            e$.A.initialize(),
            z.A.initialize(),
            eS.A.initialize(),
            V.A.initialize(),
            ec.A.initialize(),
            E.A.init(),
            Q.A.init(),
            $.A.init(),
            em.A.initialize(),
            S.A.initialize(),
            F.A.initialize(),
            ex.A.initialize(),
            T.Ay.initialize(),
            Y.Ay.initialize(),
            ez.A.initialize(),
            es.Ay.initialize(),
            ef.A.initialize(),
            C.A.initialize(),
            eo.A.init(),
            D.A.init(),
            e3.A.init(),
            f.A.initialize(),
            eV.A.init(),
            e5.A.init(),
            eF.A.init(),
            ew.A.initialize(),
            eU.A.initialize(),
            eH.A.initialize(),
            eW.A.init(),
            H.A.initialize(),
            I.A.initialize(),
            ej.A.initialize(),
            eE.A.initialize(),
            eg.A.initialize(),
            eI.A.initialize(),
            M.A.initialize(),
            j.A.initialize(),
            K.A.initialize(),
            ed.A.initialize(),
            eu.A.initialize(),
            ev.A.initialize(),
            eT.A.initialize(),
            k.A.initialize(),
            P.A.initialize(),
            x.A.initialize(),
            (this.rewriterUnlisten = eb.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eb.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eP.A.terminate(),
            e$.A.terminate(),
            eS.A.terminate(),
            eC.A.terminate(),
            O.A.terminate(),
            T.Ay.terminate(),
            Y.Ay.terminate(),
            ez.A.terminate(),
            C.A.terminate(),
            ex.A.terminate(),
            ef.A.terminate(),
            eH.A.terminate(),
            f.A.terminate(),
            H.A.terminate(),
            eu.A.terminate(),
            I.A.terminate(),
            ev.A.terminate(),
            ej.A.terminate(),
            eE.A.terminate(),
            eg.A.terminate(),
            eI.A.terminate(),
            M.A.terminate(),
            j.A.terminate(),
            eT.A.terminate(),
            k.A.terminate(),
            W.A.terminate(),
            P.A.terminate(),
            x.A.terminate(),
            K.A.terminate(),
            ed.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (X.A.isConnected() || X.A.isTryingToConnect()) return;
            let t = eQ.default.getToken();
            null == t || ((0, eR.Q)(e) && d.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = tp(e);
                if (null == n) return;
                let { guildId: i, channelId: l, messageId: r, threadId: s } = t_(n),
                    o = (0, ey.nn)(i),
                    d = (0, ey.ts)(l),
                    c = (0, ey.ts)(s),
                    u = e9.A.getGuildId(),
                    _ = u !== i;
                if ((o && _ && A.A.selectGuild(i), o && d)) {
                    let n = e7.A.getChannelId(u),
                        o = n !== l,
                        d = null != eX.Ay.getGuildSidebarState(i);
                    if (!tr || _ || o || null != r) {
                        (tr = !0), h.default.selectChannel({ guildId: i, channelId: l, messageId: r });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eG.Ay.setSelectedSummary(l, e);
                    }
                    if (
                        (d &&
                            o &&
                            null != l &&
                            null != eX.Ay.getCurrentSidebarChannelId(l) &&
                            eD.A.closeChannelSidebar(l),
                        null != s && c)
                    ) {
                        let e = eX.Ay.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != l && null != s && t)
                            if (d) (0, eL.bG)(tn.BVt.CHANNEL(i, s, r));
                            else {
                                let e = { type: eM.LU.THREAD };
                                null != r && (e.initialMessageId = r),
                                    eD.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: l,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != l && eD.A.closeChannelSidebar(l);
                    } else null == l || o || eD.A.closeChannelSidebar(l);
                    let A = eh.A.getIsOpen();
                    if (l === ti.VV.ROLE_SUBSCRIPTIONS) eA.A.closeSidebar();
                    else if (_ && A) {
                        let t = null == u && i === tn.ME,
                            n = e === tn.BVt.GUILD_DISCOVERY;
                        t || n ? eA.A.closeSidebar() : eA.A.openSidebar();
                    } else ((o && A) || (!_ && !o)) && eA.A.closeSidebar();
                } else th.some((t) => (0, eO.B)(e, t)?.isExact === !0) || (0, eL.bG)(eJ.A.fallbackRoute);
            })(t, n),
            (0, B.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!X.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tp(t);
        if (null == n) return null;
        let { guildId: i, channelId: l, threadId: a } = t_(n),
            r = (0, ey.nn)(i) && i !== tn.ME && i !== tn.YYv;
        if (null != l && (0, ey.ts)(l) && !(0, ti.jq)(l) && r) {
            let n = eZ.A.getChannel(l);
            if (null == n) ek.A.loadThread(l).then(() => tg({ channelId: l, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== tn.gNP) return { path: tn.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, ey.ts)(a) && !(0, ti.jq)(l))) return null;
                let n = eZ.A.getChannel(a);
                if (null == n) ek.A.loadThread(a).then(() => tg({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== l)
                    return eD.A.closeChannelSidebar(l), { path: tn.BVt.CHANNEL(i, l), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsxs)(r.dO, {
                    children: [
                        (0, i.jsx)(r.rd, { exact: !0, from: "/channels", to: "/" }),
                        tm.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(r.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(r.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(U.A, {}),
            ],
        });
    }
}
let tI = tE;
