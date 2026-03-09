n.r(t), n.d(t, { default: () => t_ });
var i = n(627968),
    r = n(64700),
    l = n(492462),
    a = n(873263),
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
    y = n(793574),
    b = n(114716),
    O = n(752412),
    L = n(105220),
    R = n(778830),
    P = n(619036),
    j = n(131876),
    D = n(5591),
    M = n(746793),
    w = n(272613),
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
    K = n(735831),
    z = n(136334),
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
    eg = n(334116),
    ep = n(194970),
    eE = n(414967),
    eI = n(499454),
    ef = n(580960),
    eC = n(968930),
    eT = n(265367),
    eN = n(77509),
    eS = n(463347),
    ex = n(334465),
    ev = n(976860),
    ey = n(569745),
    eb = n(985986),
    eO = n(138298),
    eL = n(940382),
    eR = n(194045),
    eP = n(212371),
    ej = n(882991),
    eD = n(863922),
    eM = n(353202),
    ew = n(823162),
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
    eK = n(761640),
    ez = n(734057),
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
let ti = (0, g.z)((e) => {
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
                children: (0, i.jsx)(a.rd, { to: e$.A.defaultRoute }),
            })
        );
    }),
    tr = (0, g.z)((e) => {
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
                children: (0, i.jsx)(a.rd, { to: e$.A.defaultRoute }),
            })
        );
    }),
    tl = s.Ay.connectStores([$.A, e$.A, eq.default], () => ({
        isConnected: $.A.isConnected(),
        defaultRoute: e$.A.defaultRoute,
        defaultRouteFallback: e$.A.fallbackRoute,
        token: eq.default.getToken(),
    }))(
        class extends r.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: r } = this.props;
                if (null == n) return (0, i.jsx)(a.rd, { to: e4.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = tu(t);
                    return null == e ||
                        ((e.params.guildId === e4.ME || null != eQ.A.getGuild(e.params.guildId)) &&
                            null != ez.A.getChannel(e.params.channelId))
                        ? (0, i.jsx)(a.rd, { to: t })
                        : (0, i.jsx)(a.rd, { to: r });
                }
                return null;
            }
        },
    ),
    ta = (0, g.z)((0, b.C)(L.A, null, { passProps: !1 })),
    ts = (0, b.C)(X.default, null, { passProps: !1 }),
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
                ? ta(e)
                : (0, i.jsx)(N.A, { applicationId: e.match.params.applicationId });
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
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
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
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    { path: [e4.BVt.APP], render: () => (0, i.jsx)(tl, {}) },
    {
        path: [e4.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, Q.B)(() => (0, eU.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [y.A.URI_SCHEME] })),
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
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
                (0, i.jsx)(a.rd, { to: e4.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [e4.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, Q.B)(() => w.A.openCreateGuildModal({ location: "External link" })),
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: r } = t.params,
                s = (0, l.parse)(location.search).feature;
            return (
                (0, Q.B)(() => en.w({ section: (0, et.A)(e4.BEX, n), subsection: (0, et.A)(e4.nd0, r), feature: s })),
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
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
                        let { default: e } = await Promise.all([n.e("64992"), n.e("6356")]).then(n.bind(n, 401539));
                        return (t) => (0, i.jsx)(e, { ...t, guildId: r });
                    });
                }),
                (0, i.jsx)(a.rd, { to: e4.BVt.CHANNEL(r) })
            );
        },
    },
    {
        path: [e4.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, Q.B)(() => (0, eF.openUserSettings)(eV.X.GIFT_PANEL, { section: e4.nc_.INVENTORY })),
                (0, i.jsx)(a.rd, { to: e$.A.defaultRoute })
            );
        },
    },
    {
        path: [e4.BVt.WELCOME(eS.pv.guildId({ optional: !0 }), eS.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: r } = t.params;
            (0, ec.C)(te.zY.MARKETING_UNCLAIMED);
            let l = e4.BVt.CHANNEL(n, r);
            return (0, i.jsx)(a.rd, { to: l });
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
                (0, i.jsx)(a.rd, { to: e4.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [e4.BVt.GUILD_SETTINGS(eS.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: r, subsection: l } = t.params;
            return (
                (0, Q.B)(() => {
                    ee.A.open(n, (0, et.A)(e4.BEX, r), void 0, (0, et.A)(e4.nd0, l));
                }),
                (0, i.jsx)(a.rd, { to: e4.BVt.CHANNEL(n) })
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
            e4.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            e4.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            e4.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            e4.BVt.GUILD_DISCOVERY,
            e4.BVt.QUEST_HOME_DEPRECATED,
            e4.BVt.QUEST_HOME,
            e4.BVt.ICYMI,
            e4.BVt.GLOBAL_DISCOVERY,
            e4.BVt.GUILD_MEMBER_VERIFICATION(eS.pv.guildId()),
            e4.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.pv.guildId(), ":inviteCode?"),
            e4.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
            e4.BVt.GUILD_FEATURE(":feature", eS.pv.guildId()),
            e4.BVt.FEATURE(":feature"),
            e4.BVt.FAMILY_CENTER,
        ],
        render: ta,
        isChatRoute: !0,
    },
    { path: [e4.BVt.APPLICATION_DIRECTORY], render: ts },
    {
        path: [e4.BVt.GAME_SHOP(eS.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: r, shopSlug: l } = t.params;
            return (0, i.jsx)(a.rd, { to: e4.BVt.CHANNELS_GAME_SHOP(n, 0, r, l) });
        },
    },
];
function tu(e) {
    for (let { path: t, isChatRoute: n } of tc) {
        if (!n) continue;
        let i = (0, ex.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function tA(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!$.A.isConnected()) return;
    let { location: r } = (0, ev.JK)();
    r.pathname === i && (null == ez.A.getChannel(t) ? (0, ev.bG)(e4.BVt.CHANNEL(n)) : (0, ev.bG)(i));
}
class th extends r.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e2.Ay.setZoomFactor(p.A.zoom),
            eb.A.init(),
            O.A.initialize(),
            ep.A.initialize(),
            W.A.initialize(),
            eW.A.initialize(),
            q.A.initialize(),
            ef.A.initialize(),
            G.A.initialize(),
            ea.A.initialize(),
            E.A.init(),
            z.A.init(),
            K.A.init(),
            eu.A.initialize(),
            S.A.initialize(),
            B.A.initialize(),
            eC.A.initialize(),
            T.Ay.initialize(),
            H.Ay.initialize(),
            eY.A.initialize(),
            ei.Ay.initialize(),
            eg.A.initialize(),
            C.A.initialize(),
            er.A.init(),
            P.A.init(),
            e6.A.init(),
            f.A.initialize(),
            ew.A.init(),
            e1.A.init(),
            ek.A.init(),
            eP.A.initialize(),
            ej.A.initialize(),
            eG.A.initialize(),
            eB.A.init(),
            V.A.initialize(),
            I.A.initialize(),
            eR.A.initialize(),
            e_.A.initialize(),
            eh.A.initialize(),
            em.A.initialize(),
            j.A.initialize(),
            D.A.initialize(),
            Y.A.initialize(),
            el.A.initialize(),
            es.A.initialize(),
            eT.A.initialize(),
            eE.A.initialize(),
            U.A.initialize(),
            R.A.initialize(),
            x.A.initialize(),
            (this.rewriterUnlisten = eN.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eN.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eb.A.terminate(),
            eW.A.terminate(),
            ef.A.terminate(),
            ep.A.terminate(),
            O.A.terminate(),
            T.Ay.terminate(),
            H.Ay.terminate(),
            eY.A.terminate(),
            C.A.terminate(),
            eC.A.terminate(),
            eg.A.terminate(),
            eG.A.terminate(),
            f.A.terminate(),
            V.A.terminate(),
            es.A.terminate(),
            I.A.terminate(),
            eT.A.terminate(),
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
            el.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if ($.A.isConnected() || $.A.isTryingToConnect()) return;
            let t = eq.default.getToken();
            null == t || ((0, ey.Q)(e) && d.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = tu(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: a, threadId: s } = td(n),
                    o = (0, eS.nn)(i),
                    d = (0, eS.ts)(r),
                    c = (0, eS.ts)(s),
                    u = eJ.A.getGuildId(),
                    _ = u !== i;
                if ((o && _ && A.A.selectGuild(i), o && d)) {
                    let n = eZ.A.getChannelId(u),
                        o = n !== r,
                        d = null != eK.Ay.getGuildSidebarState(i);
                    if (!tn || _ || o || null != a) {
                        (tn = !0), h.default.selectChannel({ guildId: i, channelId: r, messageId: a });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eD.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (d &&
                            o &&
                            null != r &&
                            null != eK.Ay.getCurrentSidebarChannelId(r) &&
                            eO.A.closeChannelSidebar(r),
                        null != s && c)
                    ) {
                        let e = eK.Ay.getCurrentSidebarChannelId(n),
                            t = e !== s;
                        if (null != r && null != s && t)
                            if (d) (0, ev.bG)(e4.BVt.CHANNEL(i, s, a));
                            else {
                                let e = { type: eL.LU.THREAD };
                                null != a && (e.initialMessageId = a),
                                    eO.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: s,
                                        details: e,
                                    });
                            }
                        else d && null != e && null != r && eO.A.closeChannelSidebar(r);
                    } else null == r || o || eO.A.closeChannelSidebar(r);
                    let A = ed.A.getIsOpen();
                    if (r === e8.VV.ROLE_SUBSCRIPTIONS) eo.A.closeSidebar();
                    else if (_ && A) {
                        let t = null == u && i === e4.ME,
                            n = e === e4.BVt.GUILD_DISCOVERY;
                        t || n ? eo.A.closeSidebar() : eo.A.openSidebar();
                    } else ((o && A) || (!_ && !o)) && eo.A.closeSidebar();
                } else to.some((t) => (0, ex.B)(e, t)?.isExact === !0) || (0, ev.bG)(e$.A.fallbackRoute);
            })(t, n),
            (0, k.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!$.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tu(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: l } = td(n),
            a = (0, eS.nn)(i) && i !== e4.ME && i !== e4.YYv;
        if (null != r && (0, eS.ts)(r) && !(0, e8.jq)(r) && a) {
            let n = ez.A.getChannel(r);
            if (null == n) eM.A.loadThread(r).then(() => tA({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== e4.gNP) return { path: e4.BVt.CHANNEL(i), state: e.state };
            if (null != l) {
                if (!((0, eS.ts)(l) && !(0, e8.jq)(r))) return null;
                let n = ez.A.getChannel(l);
                if (null == n) eM.A.loadThread(l).then(() => tA({ channelId: l, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return eO.A.closeChannelSidebar(r), { path: e4.BVt.CHANNEL(i, r), state: e.state };
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
                        tc.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(a.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, i.jsx)(a.rd, { to: "/" }),
                    ],
                }),
                (0, i.jsx)(M.A, {}),
            ],
        });
    }
}
let t_ = th;
