n.r(t), n.d(t, { default: () => tm });
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
    g = n(159084),
    p = n(775602),
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
    j = n(131876),
    M = n(227972),
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
    J = n(435875),
    ee = n(707592),
    et = n(997509),
    en = n(268313),
    ei = n(998654),
    el = n(986880),
    ea = n(438998),
    er = n(114714),
    es = n(341383),
    eo = n(768841),
    ed = n(862658),
    ec = n(813160),
    eu = n(942614),
    eA = n(950067),
    eh = n(682492),
    e_ = n(584257),
    em = n(64585),
    eg = n(281913),
    ep = n(334116),
    eE = n(194970),
    eI = n(414967),
    ef = n(499454),
    eC = n(580960),
    eT = n(968930),
    eN = n(265367),
    eS = n(77509),
    ex = n(463347),
    ev = n(334465),
    eb = n(976860),
    ey = n(569745),
    eO = n(985986),
    eL = n(138298),
    eR = n(940382),
    eP = n(194045),
    eD = n(212371),
    ej = n(882991),
    eM = n(863922),
    ew = n(353202),
    eU = n(823162),
    eG = n(657331),
    ek = n(403777),
    eV = n(791767),
    eB = n(780964),
    eH = n(452379),
    eF = n(718446),
    eY = n(858897),
    eW = n(32294),
    eK = n(639823),
    eq = n(961350),
    ez = n(761640),
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
    e3 = n(723702),
    e2 = n(837921),
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
let ti = !1;
(0, v.as)(),
    s.Ay.initialize(),
    eO.A.loadServer(),
    e3.isPlatformEmbedded &&
        (e2.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            (0, eY.openUserSettings)();
        }),
        e2.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = eZ.A.getActiveLibraryApplication(t);
            e4.playApplication(t, n, {
                analyticsParams: { location: { page: e8.liQ.DIRECT, object: e8.ZSU.WEB_URL } },
            });
        }));
let tl = (0, g.z)((e) => {
        let { location: t } = e;
        return (
            (0, X.B)(() => {
                let e = R.A.getHighestState();
                if (e === e8.fAW.OPEN || e === e8.fAW.OPENING) return;
                let n = (0, eF.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, eF.trackParseSettingsUrl)(n, "deeplink"),
                    (0, eY.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tn.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: l } = e,
                        [, , a, r] = t.split("/");
                    return { path: t, section: a, subsection: r, fingerprint: n, installationId: l, search: i };
                },
                children: (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute }),
            })
        );
    }),
    ta = (0, g.z)((e) => {
        let { location: t } = e,
            l = (0, eh.parsePlaygroundUrl)(t.pathname);
        return (
            (0, X.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: l });
            }),
            (0, i.jsx)(m.A, {
                deepLinkType: tn.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: l, story: a } = (0, eh.parsePlaygroundUrl)(t);
                    return { path: t, collection: l, story: a, fingerprint: n, installationId: i };
                },
                children: (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute }),
            })
        );
    }),
    tr = s.Ay.connectStores([Q.A, eQ.A, eq.default], () => ({
        isConnected: Q.A.isConnected(),
        defaultRoute: eQ.A.defaultRoute,
        defaultRouteFallback: eQ.A.fallbackRoute,
        token: eq.default.getToken(),
    }))(
        class extends l.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: l } = this.props;
                if (null == n) return (0, i.jsx)(r.rd, { to: e8.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tA(t);
                    return null == e ||
                        ((e.params.guildId === e8.ME || null != eX.A.getGuild(e.params.guildId)) &&
                            null != e$.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(r.rd, { to: t })
                        : (0, i.jsx)(r.rd, { to: l });
                }
                return null;
            }
        },
    ),
    ts = (0, g.z)((0, y.C)(L.A, null, { passProps: !1 })),
    to = (0, y.C)(Z.default, null, { passProps: !1 }),
    td = [
        e8.BVt.GUILD_BOOSTING_MARKETING(ex.pv.guildId()),
        ...Array.from(te.qW).map((e) => e8.BVt.CHANNEL(ex.pv.guildId(), e)),
    ];
function tc(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: l = null } = e.params;
    return { guildId: t ?? e8.ME, channelId: n, messageId: i, threadId: l };
}
let tu = [
    {
        path: [e8.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e5.wR)() ||
                eq.default.getLoginStatus() === e8.aUe.LOGGING_IN ||
                !eq.default.allowLogoutRedirect()
                ? ts(e)
                : (0, i.jsx)(N.A, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [e8.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, X.B)(() => {
                    (0, J.q)({ code: n });
                }),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, X.B)(() => {
                    (0, u.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, ef.h)({ processedCode: t.code });
                    });
                }),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    { path: [e8.BVt.APP], render: () => (0, i.jsx)(tr, {}) },
    {
        path: [e8.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, X.B)(() => (0, eG.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [b.A.URI_SCHEME] })),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: l } = t.params;
            return (
                e6.A.whenInitialized(() => {
                    eZ.A.whenInitialized(() => {
                        switch (l) {
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
                (0, i.jsx)(r.rd, { to: e8.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e8.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, X.B)(() => G.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: l } = t.params,
                s = (0, a.parse)(location.search).feature;
            return (
                (0, X.B)(() => ei.w({ section: (0, en.A)(e8.BEX, n), subsection: (0, en.A)(e8.nd0, l), feature: s })),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, a.parse)(t.search),
                l = "string" == typeof n.applicationId ? n.applicationId : null,
                s = "true" === n.openGameProfile;
            return (
                (0, X.B)(() => {
                    null != l &&
                        _.q1(l).then((e) => {
                            null != e && (0, w.nf)(w.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: s });
                        });
                }),
                (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    { path: [e8.BVt.SETTINGS(":section", ":subsection?")], render: tl },
    { path: [e8.BVt.PLAYGROUND(":collection?", ":story?")], render: ta },
    {
        path: [e8.BVt.USER_GUILD_NOTIFICATION_SETTINGS(ex.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: l } = t.params;
            return (
                (0, X.B)(() => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("8214")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: l });
                    });
                }),
                (0, i.jsx)(r.rd, { to: e8.BVt.CHANNEL(l) })
            );
        },
    },
    {
        path: [e8.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, X.B)(() => (0, eY.openUserSettings)(eB.X.GIFT_PANEL)), (0, i.jsx)(r.rd, { to: eQ.A.defaultRoute })
            );
        },
    },
    {
        path: [e8.BVt.WELCOME(ex.pv.guildId({ optional: !0 }), ex.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: l } = t.params;
            (0, eu.C)(tt.zY.MARKETING_UNCLAIMED);
            let a = e8.BVt.CHANNEL(n, l);
            return (0, i.jsx)(r.rd, { to: a });
        },
    },
    {
        path: [e8.BVt.GUILD_EVENT_DETAILS(ex.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: l } = t.params;
            return (
                (0, X.B)(() => {
                    (0, ee.uR)({ eventId: l });
                }),
                (0, i.jsx)(r.rd, { to: e8.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [e8.BVt.GUILD_SETTINGS(ex.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: l, subsection: a } = t.params;
            return (
                (0, X.B)(() => {
                    et.A.open(n, (0, en.A)(e8.BEX, l), void 0, (0, en.A)(e8.nd0, a));
                }),
                (0, i.jsx)(r.rd, { to: e8.BVt.CHANNEL(n) })
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
            e8.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            e8.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e8.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            e8.BVt.GUILD_DISCOVERY,
            e8.BVt.QUEST_HOME_DEPRECATED,
            e8.BVt.QUEST_HOME,
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
                { guildId: n, shopSkuId: l, shopSlug: a } = t.params;
            return (0, i.jsx)(r.rd, { to: e8.BVt.CHANNELS_GAME_SHOP(n, 0, l, a) });
        },
    },
];
function tA(e) {
    for (let { path: t, isChatRoute: n } of tu) {
        if (!n) continue;
        let i = (0, ev.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function th(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!Q.A.isConnected()) return;
    let { location: l } = (0, eb.JK)();
    l.pathname === i && (null == e$.A.getChannel(t) ? (0, eb.bG)(e8.BVt.CHANNEL(n)) : (0, eb.bG)(i));
}
class t_ extends l.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e2.Ay.setZoomFactor(p.A.zoom),
            eO.A.init(),
            O.A.initialize(),
            eE.A.initialize(),
            K.A.initialize(),
            eK.A.initialize(),
            q.A.initialize(),
            eC.A.initialize(),
            k.A.initialize(),
            es.A.initialize(),
            E.A.init(),
            $.A.init(),
            z.A.init(),
            eA.A.initialize(),
            S.A.initialize(),
            H.A.initialize(),
            eT.A.initialize(),
            T.Ay.initialize(),
            F.Ay.initialize(),
            eW.A.initialize(),
            el.Ay.initialize(),
            ep.A.initialize(),
            C.A.initialize(),
            ea.A.init(),
            D.A.init(),
            e9.A.init(),
            f.A.initialize(),
            eU.A.init(),
            e7.A.init(),
            eV.A.init(),
            eD.A.initialize(),
            ej.A.initialize(),
            ek.A.initialize(),
            eH.A.init(),
            B.A.initialize(),
            I.A.initialize(),
            eP.A.initialize(),
            em.A.initialize(),
            e_.A.initialize(),
            eg.A.initialize(),
            j.A.initialize(),
            M.A.initialize(),
            W.A.initialize(),
            er.A.initialize(),
            eo.A.initialize(),
            eN.A.initialize(),
            eI.A.initialize(),
            P.A.initialize(),
            x.A.initialize(),
            (this.rewriterUnlisten = eS.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eS.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eO.A.terminate(),
            eK.A.terminate(),
            eC.A.terminate(),
            eE.A.terminate(),
            O.A.terminate(),
            T.Ay.terminate(),
            F.Ay.terminate(),
            eW.A.terminate(),
            C.A.terminate(),
            eT.A.terminate(),
            ep.A.terminate(),
            ek.A.terminate(),
            f.A.terminate(),
            B.A.terminate(),
            eo.A.terminate(),
            I.A.terminate(),
            eN.A.terminate(),
            eP.A.terminate(),
            em.A.terminate(),
            e_.A.terminate(),
            eg.A.terminate(),
            j.A.terminate(),
            M.A.terminate(),
            eI.A.terminate(),
            Y.A.terminate(),
            P.A.terminate(),
            x.A.terminate(),
            W.A.terminate(),
            er.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (Q.A.isConnected() || Q.A.isTryingToConnect()) return;
            let t = eq.default.getToken();
            null == t || ((0, ey.Q)(e) && d.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = tA(e);
                if (null == n) return;
                let { guildId: i, channelId: l, messageId: r, threadId: s } = tc(n),
                    o = (0, ex.nn)(i),
                    d = (0, ex.ts)(l),
                    c = (0, ex.ts)(s),
                    u = e0.A.getGuildId(),
                    _ = u !== i;
                if ((o && _ && A.A.selectGuild(i), o && d)) {
                    let n = eJ.A.getChannelId(u),
                        o = n !== l,
                        d = null != ez.Ay.getGuildSidebarState(i);
                    if (!ti || _ || o || null != r) {
                        (ti = !0), h.default.selectChannel({ guildId: i, channelId: l, messageId: r });
                        let { summaryId: e } = (0, a.parse)(t);
                        null != e && eM.Ay.setSelectedSummary(l, e);
                    }
                    if (
                        (d &&
                            o &&
                            null != l &&
                            null != ez.Ay.getCurrentSidebarChannelId(l) &&
                            eL.A.closeChannelSidebar(l),
                        null != s && c)
                    ) {
                        let e = ez.Ay.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != l && null != s && t)
                            if (d) (0, eb.bG)(e8.BVt.CHANNEL(i, s, r));
                            else {
                                let e = { type: eR.LU.THREAD };
                                null != r && (e.initialMessageId = r),
                                    eL.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: l,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != l && eL.A.closeChannelSidebar(l);
                    } else null == l || o || eL.A.closeChannelSidebar(l);
                    let A = ec.A.getIsOpen();
                    if (l === te.VV.ROLE_SUBSCRIPTIONS) ed.A.closeSidebar();
                    else if (_ && A) {
                        let t = null == u && i === e8.ME,
                            n = e === e8.BVt.GUILD_DISCOVERY;
                        t || n ? ed.A.closeSidebar() : ed.A.openSidebar();
                    } else ((o && A) || (!_ && !o)) && ed.A.closeSidebar();
                } else td.some((t) => (0, ev.B)(e, t)?.isExact === !0) || (0, eb.bG)(eQ.A.fallbackRoute);
            })(t, n),
            (0, V.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tA(t);
        if (null == n) return null;
        let { guildId: i, channelId: l, threadId: a } = tc(n),
            r = (0, ex.nn)(i) && i !== e8.ME && i !== e8.YYv;
        if (null != l && (0, ex.ts)(l) && !(0, te.jq)(l) && r) {
            let n = e$.A.getChannel(l);
            if (null == n) ew.A.loadThread(l).then(() => th({ channelId: l, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e8.gNP) return { path: e8.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, ex.ts)(a) && !(0, te.jq)(l))) return null;
                let n = e$.A.getChannel(a);
                if (null == n) ew.A.loadThread(a).then(() => th({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== l)
                    return eL.A.closeChannelSidebar(l), { path: e8.BVt.CHANNEL(i, l), state: e.state };
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
                        tu.map((e) => {
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
let tm = t_;
