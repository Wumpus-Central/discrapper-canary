n.r(t), n.d(t, { default: () => tE });
var i = n(627968),
    r = n(64700),
    a = n(492462),
    l = n(873263),
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
    v = n(857365),
    x = n(861638),
    y = n(793574),
    b = n(114716),
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
    k = n(874059),
    V = n(963169),
    B = n(789105),
    H = n(636805),
    F = n(293495),
    Y = n(811917),
    W = n(746094),
    K = n(257402),
    q = n(216954),
    z = n(735831),
    $ = n(913953),
    Q = n(142120),
    X = n(507263),
    Z = n(998345),
    J = n(352306),
    ee = n(829203),
    et = n(435875),
    en = n(707592),
    ei = n(997509),
    er = n(268313),
    ea = n(998654),
    el = n(986880),
    es = n(438998),
    eo = n(114714),
    ed = n(341383),
    ec = n(768841),
    eu = n(862658),
    eA = n(813160),
    eh = n(942614),
    e_ = n(950067),
    em = n(682492),
    ep = n(584257),
    eg = n(64585),
    eE = n(281913),
    eI = n(334116),
    ef = n(194970),
    eC = n(414967),
    eT = n(499454),
    eN = n(580960),
    eS = n(968930),
    ev = n(265367),
    ex = n(77509),
    ey = n(463347),
    eb = n(334465),
    eO = n(976860),
    eL = n(569745),
    eR = n(985986),
    eP = n(138298),
    eD = n(940382),
    eM = n(194045),
    ej = n(212371),
    ew = n(882991),
    eU = n(863922),
    eG = n(353202),
    ek = n(823162),
    eV = n(657331),
    eB = n(403777),
    eH = n(791767),
    eF = n(780964),
    eY = n(452379),
    eW = n(718446),
    eK = n(858897),
    eq = n(32294),
    ez = n(639823),
    e$ = n(961350),
    eQ = n(761640),
    eX = n(734057),
    eZ = n(650048),
    eJ = n(71393),
    e0 = n(189081),
    e1 = n(309010),
    e7 = n(967198),
    e9 = n(147964),
    e6 = n(237631),
    e5 = n(194871),
    e2 = n(856588),
    e3 = n(612181),
    e4 = n(723702),
    e8 = n(837921),
    te = n(715671),
    tt = n(652215),
    tn = n(746080),
    ti = n(771016),
    tr = n(613057);
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
let ta = !1;
(0, x.as)(),
    s.Ay.initialize(),
    eR.A.loadServer(),
    e4.isPlatformEmbedded &&
        (e8.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eK.openUserSettings)();
        }),
        e8.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = e0.A.getActiveLibraryApplication(t);
            te.playApplication(t, n, {
                analyticsParams: { location: { page: tt.liQ.DIRECT, object: tt.ZSU.WEB_URL } },
            });
        }));
let tl = (0, p.z)((e) => {
        let { location: t } = e;
        return (
            (0, X.B)(() => {
                let e = R.A.getHighestState();
                e === tt.fAW.OPEN ||
                    e === tt.fAW.OPENING ||
                    (J.s.getConfig({ location: "deeplink" }).enabled && (0, ee.A)({ source: "deeplink" }));
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tr.XK.GORILLA,
                path: t.pathname,
                search: t.search,
                paramsBuilder: (e) => {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e;
                    return { path: t, fingerprint: n, installationId: r, search: i };
                },
                children: (0, i.jsx)(l.rd, { to: tt.BVt.ME }),
            })
        );
    }),
    ts = (0, p.z)((e) => {
        let { location: t } = e;
        return (
            (0, X.B)(() => {
                let e = R.A.getHighestState();
                if (e === tt.fAW.OPEN || e === tt.fAW.OPENING) return;
                let n = (0, eW.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, eW.trackParseSettingsUrl)(n, "deeplink"),
                    (0, eK.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tr.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute }),
            })
        );
    }),
    to = (0, p.z)((e) => {
        let { location: t } = e,
            r = (0, em.parsePlaygroundUrl)(t.pathname);
        return (
            (0, X.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: r });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tr.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, em.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute }),
            })
        );
    }),
    td = s.Ay.connectStores([Q.A, eZ.A, e$.default], () => ({
        isConnected: Q.A.isConnected(),
        defaultRoute: eZ.A.defaultRoute,
        defaultRouteFallback: eZ.A.fallbackRoute,
        token: e$.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(l.rd, { to: tt.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tm(t);
                    return null == e ||
                        ((e.params.guildId === tt.ME || null != eJ.A.getGuild(e.params.guildId)) &&
                            null != eX.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(l.rd, { to: t })
                        : (0, i.jsx)(l.rd, { to: r });
                }
                return null;
            }
        },
    ),
    tc = (0, p.z)((0, b.C)(L.A, null, { passProps: !1 })),
    tu = (0, b.C)(Z.default, null, { passProps: !1 }),
    tA = [
        tt.BVt.GUILD_BOOSTING_MARKETING(ey.pv.guildId()),
        ...Array.from(tn.qW).map((e) => tt.BVt.CHANNEL(ey.pv.guildId(), e)),
    ];
function th(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? tt.ME, channelId: n, messageId: i, threadId: r };
}
let t_ = [
    {
        path: [tt.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e3.wR)() ||
                e$.default.getLoginStatus() === tt.aUe.LOGGING_IN ||
                !e$.default.allowLogoutRedirect()
                ? tc(e)
                : (0, i.jsx)(N.A, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [tt.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, X.B)(() => {
                    (0, et.q)({ code: n });
                }),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    {
        path: [tt.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, X.B)(() => {
                    (0, u.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, eT.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    { path: [tt.BVt.APP], render: () => (0, i.jsx)(td, {}) },
    {
        path: [tt.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, X.B)(() => (0, eV.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [y.A.URI_SCHEME] })),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    {
        path: [tt.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: r } = t.params;
            return (
                e5.A.whenInitialized(() => {
                    e0.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = e0.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                te.playApplication(e.id, e, {
                                    analyticsParams: { location: { page: tt.liQ.DIRECT, object: tt.ZSU.WEB_URL } },
                                });
                                break;
                            }
                            case "test-mode":
                                e9.A.whenInitialized(() => _.q1(n));
                                break;
                            case "uninstall": {
                                let e = e0.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, c.z)(e.id, e.branchId, tt.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(l.rd, { to: tt.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [tt.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, X.B)(() => G.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    {
        path: [tt.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, X.B)(() => ea.w({ section: (0, er.A)(tt.BEX, n), subsection: (0, er.A)(tt.nd0, r), feature: s })),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    {
        path: [tt.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, a.parse)(t.search),
                r = "string" == typeof n.applicationId ? n.applicationId : null,
                s = "true" === n.openGameProfile;
            return (
                (0, X.B)(() => {
                    null != r &&
                        _.q1(r).then((e) => {
                            null != e && (0, w.nf)(w.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: s });
                        });
                }),
                (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    { path: [tt.BVt.SETTINGS(":section", ":subsection?")], render: ts },
    { path: [tt.BVt.PLAYGROUND(":collection?", ":story?")], render: to },
    {
        path: [tt.BVt.USER_GUILD_NOTIFICATION_SETTINGS(ey.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: r } = t.params;
            return (
                (0, X.B)(() => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("88488")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: r });
                    });
                }),
                (0, i.jsx)(l.rd, { to: tt.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [tt.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, X.B)(() => (0, eK.openUserSettings)(eF.X.GIFT_PANEL)), (0, i.jsx)(l.rd, { to: eZ.A.defaultRoute })
            );
        },
    },
    {
        path: [tt.BVt.WELCOME(ey.pv.guildId({ optional: !0 }), ey.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, eh.C)(ti.zY.MARKETING_UNCLAIMED);
            let a = tt.BVt.CHANNEL(n, r);
            return (0, i.jsx)(l.rd, { to: a });
        },
    },
    {
        path: [tt.BVt.GUILD_EVENT_DETAILS(ey.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: r } = t.params;
            return (
                (0, X.B)(() => {
                    (0, en.uR)({ eventId: r });
                }),
                (0, i.jsx)(l.rd, { to: tt.BVt.CHANNEL(n) })
            );
        },
    },
    { path: [tt.BVt.GORILLA], render: tl },
    {
        path: [tt.BVt.GUILD_SETTINGS(ey.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: a } = t.params;
            return (
                (0, X.B)(() => {
                    ei.A.open(n, (0, er.A)(tt.BEX, r), void 0, (0, er.A)(tt.nd0, a));
                }),
                (0, i.jsx)(l.rd, { to: tt.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            tt.BVt.CHANNEL_THREAD_VIEW(ey.pv.guildId(), ey.pv.channelId(), ":threadId", ":messageId?"),
            tt.BVt.CHANNEL(ey.pv.guildId(), ey.pv.channelId({ optional: !0 }), ":messageId?"),
            tt.BVt.ACTIVITY,
            tt.BVt.ACTIVITIES,
            tt.BVt.ACTIVITIES_HAPPENING_NOW,
            tt.BVt.APPLICATION_LIBRARY,
            tt.BVt.APPLICATION_STORE,
            tt.BVt.MESSAGE_REQUESTS,
            tt.BVt.COLLECTIBLES_SHOP,
            tt.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            tt.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            tt.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            tt.BVt.GUILD_DISCOVERY,
            tt.BVt.QUEST_HOME_DEPRECATED,
            tt.BVt.QUEST_HOME,
            tt.BVt.ICYMI,
            tt.BVt.GLOBAL_DISCOVERY,
            tt.BVt.GUILD_MEMBER_VERIFICATION(ey.pv.guildId()),
            tt.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(ey.pv.guildId(), ":inviteCode?"),
            tt.BVt.GUILD_BOOSTING_MARKETING(ey.pv.guildId()),
            tt.BVt.GUILD_FEATURE(":feature", ey.pv.guildId()),
            tt.BVt.FEATURE(":feature"),
            tt.BVt.FAMILY_CENTER,
        ],
        render: tc,
        isChatRoute: !0,
    },
    { path: [tt.BVt.APPLICATION_DIRECTORY], render: tu },
    {
        path: [tt.BVt.GAME_SHOP(ey.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: a } = t.params;
            return (0, i.jsx)(l.rd, { to: tt.BVt.CHANNELS_GAME_SHOP(n, 0, r, a) });
        },
    },
];
function tm(e) {
    for (let { path: t, isChatRoute: n } of t_) {
        if (!n) continue;
        let i = (0, eb.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function tp(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!Q.A.isConnected()) return;
    let { location: r } = (0, eO.JK)();
    r.pathname === i && (null == eX.A.getChannel(t) ? (0, eO.bG)(tt.BVt.CHANNEL(n)) : (0, eO.bG)(i));
}
class tg extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e8.Ay.setZoomFactor(g.A.zoom),
            eR.A.init(),
            O.A.initialize(),
            ef.A.initialize(),
            K.A.initialize(),
            ez.A.initialize(),
            q.A.initialize(),
            eN.A.initialize(),
            k.A.initialize(),
            ed.A.initialize(),
            E.A.init(),
            $.A.init(),
            z.A.init(),
            e_.A.initialize(),
            S.A.initialize(),
            H.A.initialize(),
            eS.A.initialize(),
            T.Ay.initialize(),
            F.Ay.initialize(),
            eq.A.initialize(),
            el.Ay.initialize(),
            eI.A.initialize(),
            C.A.initialize(),
            es.A.init(),
            D.A.init(),
            e2.A.init(),
            f.A.initialize(),
            ek.A.init(),
            e6.A.init(),
            eH.A.init(),
            ej.A.initialize(),
            ew.A.initialize(),
            eB.A.initialize(),
            eY.A.init(),
            B.A.initialize(),
            I.A.initialize(),
            eM.A.initialize(),
            eg.A.initialize(),
            ep.A.initialize(),
            eE.A.initialize(),
            M.A.initialize(),
            j.A.initialize(),
            W.A.initialize(),
            eo.A.initialize(),
            ec.A.initialize(),
            ev.A.initialize(),
            eC.A.initialize(),
            P.A.initialize(),
            v.A.initialize(),
            (this.rewriterUnlisten = ex.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ex.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eR.A.terminate(),
            ez.A.terminate(),
            eN.A.terminate(),
            ef.A.terminate(),
            O.A.terminate(),
            T.Ay.terminate(),
            F.Ay.terminate(),
            eq.A.terminate(),
            C.A.terminate(),
            eS.A.terminate(),
            eI.A.terminate(),
            eB.A.terminate(),
            f.A.terminate(),
            B.A.terminate(),
            ec.A.terminate(),
            I.A.terminate(),
            ev.A.terminate(),
            eM.A.terminate(),
            eg.A.terminate(),
            ep.A.terminate(),
            eE.A.terminate(),
            M.A.terminate(),
            j.A.terminate(),
            eC.A.terminate(),
            Y.A.terminate(),
            P.A.terminate(),
            v.A.terminate(),
            W.A.terminate(),
            eo.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (Q.A.isConnected() || Q.A.isTryingToConnect()) return;
            let t = e$.default.getToken();
            null == t || ((0, eL.Q)(e) && d.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = tm(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: l, threadId: s } = th(n),
                    o = (0, ey.nn)(i),
                    d = (0, ey.ts)(r),
                    c = (0, ey.ts)(s),
                    u = e7.A.getGuildId(),
                    _ = u !== i;
                if ((o && _ && A.A.selectGuild(i), o && d)) {
                    let n = e1.A.getChannelId(u),
                        o = n !== r,
                        d = null != eQ.Ay.getGuildSidebarState(i);
                    if (!ta || _ || o || null != l) {
                        (ta = !0), h.default.selectChannel({ guildId: i, channelId: r, messageId: l });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eU.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            o &&
                            null != r &&
                            null != eQ.Ay.getCurrentSidebarChannelId(r) &&
                            eP.A.closeChannelSidebar(r),
                        null != s && c)
                    ) {
                        let e = eQ.Ay.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != r && null != s && t)
                            if (d) (0, eO.bG)(tt.BVt.CHANNEL(i, s, l));
                            else {
                                let e = { type: eD.LU.THREAD };
                                null != l && (e.initialMessageId = l),
                                    eP.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eP.A.closeChannelSidebar(r);
                    } else null == r || o || eP.A.closeChannelSidebar(r);
                    let A = eA.A.getIsOpen();
                    if (r === tn.VV.ROLE_SUBSCRIPTIONS) eu.A.closeSidebar();
                    else if (_ && A) {
                        let t = null == u && i === tt.ME,
                            n = e === tt.BVt.GUILD_DISCOVERY;
                        t || n ? eu.A.closeSidebar() : eu.A.openSidebar();
                    } else ((o && A) || (!_ && !o)) && eu.A.closeSidebar();
                } else tA.some((t) => (0, eb.B)(e, t)?.isExact === !0) || (0, eO.bG)(eZ.A.fallbackRoute);
            })(t, n),
            (0, V.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tm(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = th(n),
            l = (0, ey.nn)(i) && i !== tt.ME && i !== tt.YYv;
        if (null != r && (0, ey.ts)(r) && !(0, tn.jq)(r) && l) {
            let n = eX.A.getChannel(r);
            if (null == n) eG.A.loadThread(r).then(() => tp({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== tt.gNP) return { path: tt.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, ey.ts)(a) && !(0, tn.jq)(r))) return null;
                let n = eX.A.getChannel(a);
                if (null == n) eG.A.loadThread(a).then(() => tp({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eP.A.closeChannelSidebar(r), { path: tt.BVt.CHANNEL(i, r), state: e.state };
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
                        t_.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(l.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(l.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(U.A, {}),
            ],
        });
    }
}
let tE = tg;
