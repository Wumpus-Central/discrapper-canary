n.r(t),
    n.d(t, {
        default: () => t_,
    }),
    n(747238),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(492462),
    a = n(960488),
    s = n(311907),
    o = n(397927),
    c = n(830215),
    u = n(258057),
    d = n(869038),
    p = n(686956),
    h = n(956793),
    g = n(271866),
    f = n(18422),
    m = n(159084),
    A = n(775602),
    _ = n(502229),
    b = n(836753),
    E = n(196492),
    O = n(869003),
    y = n(315206),
    I = n(844358),
    v = n(828430),
    S = n(79746),
    C = n(861638),
    N = n(793574),
    T = n(114716),
    j = n(752412),
    x = n(105220),
    P = n(778830),
    w = n(619036),
    L = n(131876),
    R = n(5591),
    D = n(746793),
    M = n(272613),
    k = n(855371),
    U = n(874059),
    G = n(963169),
    V = n(789105),
    B = n(636805),
    H = n(293495),
    F = n(811917),
    Y = n(746094),
    K = n(257402),
    W = n(216954),
    q = n(735831),
    z = n(913953),
    Q = n(142120),
    X = n(507263),
    Z = n(998345),
    J = n(435875),
    $ = n(707592),
    ee = n(997509),
    et = n(268313),
    en = n(998654),
    er = n(986880),
    ei = n(438998),
    el = n(509099),
    ea = n(114714),
    es = n(341383),
    eo = n(768841),
    ec = n(862658),
    eu = n(813160),
    ed = n(942614),
    ep = n(950067),
    eh = n(682492),
    eg = n(584257),
    ef = n(64585),
    em = n(281913),
    eA = n(334116),
    e_ = n(194970),
    eb = n(414967),
    eE = n(499454),
    eO = n(580960),
    ey = n(968930),
    eI = n(265367),
    ev = n(77509),
    eS = n(463347),
    eC = n(976860),
    eN = n(569745),
    eT = n(985986),
    ej = n(874959),
    ex = n(138298),
    eP = n(940382),
    ew = n(194045),
    eL = n(212371),
    eR = n(882991),
    eD = n(863922),
    eM = n(353202),
    ek = n(823162),
    eU = n(657331),
    eG = n(403777),
    eV = n(791767),
    eB = n(780964),
    eH = n(452379),
    eF = n(849823),
    eY = n(840065),
    eK = n(32294),
    eW = n(639823),
    eq = n(961350),
    ez = n(761640),
    eQ = n(734057),
    eX = n(650048),
    eZ = n(71393),
    eJ = n(186111),
    e$ = n(189081),
    e0 = n(309010),
    e1 = n(967198),
    e6 = n(147964),
    e9 = n(237631),
    e7 = n(194871),
    e5 = n(856588),
    e8 = n(612181),
    e2 = n(723702),
    e4 = n(837921),
    e3 = n(715671),
    te = n(652215),
    tt = n(746080),
    tn = n(771016),
    tr = n(613057);

function ti(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function tl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ti(e, t, n[t]);
            });
    }
    return e;
}
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
    n(833336),
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(972937),
    n(279061),
    n(750128),
    n(921955);
let ta = !1;
(0, C.as)(),
    s.Ay.initialize(),
    eT.A.loadServer(),
    e2.isPlatformEmbedded &&
        (e4.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
            eJ.A.getLayers().includes(te.zgK.USER_SETTINGS) || (0, eY.openUserSettings)();
        }),
        e4.Ay.on("LAUNCH_APPLICATION", (e, t) => {
            let n = e$.A.getActiveLibraryApplication(t);
            e3.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: te.liQ.DIRECT,
                        object: te.ZSU.WEB_URL,
                    },
                },
            });
        }));
let ts = (0, m.z)((e) => {
        let { location: t } = e,
            n = (0, eF.default)(t.pathname);
        return (
            null != n &&
                (0, X.B)(() => {
                    (0, eY.openUserSettingsFromParsedUrl)({
                        match: n,
                        urlOrigin: "deeplink",
                    });
                }),
            (0, r.jsx)(f.A, {
                deepLinkType: tr.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e, t, n) {
                    let [, , r, i] = e.split("/");
                    return {
                        path: e,
                        section: r,
                        subsection: i,
                        fingerprint: t,
                        search: n,
                    };
                },
                children: (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                }),
            })
        );
    }),
    to = (0, m.z)((e) => {
        let { location: t } = e,
            i = (0, eh.parsePlaygroundUrl)(t.pathname);
        return (
            (0, X.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({
                    match: i,
                });
            }),
            (0, r.jsx)(f.A, {
                deepLinkType: tr.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e, t) {
                    let { collection: n, story: r } = (0, eh.parsePlaygroundUrl)(e);
                    return {
                        path: e,
                        collection: n,
                        story: r,
                        fingerprint: t,
                    };
                },
                children: (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                }),
            })
        );
    }),
    tc = s.Ay.connectStores([Q.A, eX.A, eq.default], () => ({
        isConnected: Q.A.isConnected(),
        defaultRoute: eX.A.defaultRoute,
        defaultRouteFallback: eX.A.fallbackRoute,
        token: eq.default.getToken(),
    }))(
        class extends i.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e &&
                    null != e.params.inviteCode &&
                    (0, J.q)({
                        code: e.params.inviteCode,
                    });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n)
                    return (0, r.jsx)(a.rd, {
                        to: te.BVt.DEFAULT_LOGGED_OUT,
                    });
                if (e) {
                    let e = tf(t);
                    return null == e ||
                        ((e.params.guildId === te.ME || null != eZ.A.getGuild(e.params.guildId)) &&
                            null != eQ.A.getChannel(e.params.channelId))
                        ? (0, r.jsx)(a.rd, {
                              to: t,
                          })
                        : (0, r.jsx)(a.rd, {
                              to: i,
                          });
                }
                return null;
            }
        },
    ),
    tu = (0, m.z)(
        (0, T.C)(x.A, null, {
            passProps: !1,
        }),
    ),
    td = (0, T.C)(Z.default, null, {
        passProps: !1,
    }),
    tp = [
        te.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
        ...Array.from(tt.qW).map((e) => te.BVt.CHANNEL(eS.pv.guildId(), e)),
    ];

function th(e) {
    let { guildId: t, channelId: n = null, messageId: r = null, threadId: i = null } = e.params;
    return {
        guildId: null != t ? t : te.ME,
        channelId: n,
        messageId: r,
        threadId: i,
    };
}
let tg = [
    {
        path: [te.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, e8.wR)() ||
                eq.default.getLoginStatus() === te.aUe.LOGGING_IN ||
                !eq.default.allowLogoutRedirect()
                ? tu(e)
                : (0, r.jsx)(I.A, {
                      applicationId: e.match.params.applicationId,
                  });
        },
    },
    {
        path: [te.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render(e) {
            let { match: t } = e;
            return (0, r.jsx)(tc, {
                match: t,
            });
        },
    },
    {
        path: [te.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, X.B)(() => {
                    (0, d.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t &&
                            (0, eE.h)({
                                processedCode: t.code,
                            });
                    });
                }),
                (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                })
            );
        },
    },
    {
        path: [te.BVt.APP],
        render: () => (0, r.jsx)(tc, {}),
    },
    {
        path: [te.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, X.B)(() =>
                    (0, eU.openUserProfileModal)({
                        userId: n,
                        sourceAnalyticsLocations: [N.A.URI_SCHEME],
                    }),
                ),
                (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                })
            );
        },
    },
    {
        path: [te.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: i } = t.params;
            return (
                e7.A.whenInitialized(() => {
                    e$.A.whenInitialized(() => {
                        switch (i) {
                            case "launch": {
                                let e = e$.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                e3.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: te.liQ.DIRECT,
                                            object: te.ZSU.WEB_URL,
                                        },
                                    },
                                });
                                break;
                            }
                            case "test-mode":
                                e6.A.whenInitialized(() => g.q1(n));
                                break;
                            case "uninstall": {
                                let e = e$.A.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, u.z)(e.id, e.branchId, te.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, r.jsx)(a.rd, {
                    to: te.BVt.APPLICATION_LIBRARY,
                })
            );
        },
    },
    {
        path: [te.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, X.B)(() =>
                    M.A.openCreateGuildModal({
                        location: "External link",
                    }),
                ),
                (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                })
            );
        },
    },
    {
        path: [te.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: i } = t.params,
                s = (0, l.parse)(location.search).feature;
            return (
                (0, X.B)(() =>
                    en.w({
                        section: (0, et.A)(te.BEX, n),
                        subsection: (0, et.A)(te.nd0, i),
                        feature: s,
                    }),
                ),
                (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                })
            );
        },
    },
    {
        path: [te.BVt.SETTINGS(":section", ":subsection?")],
        render: ts,
    },
    {
        path: [te.BVt.PLAYGROUND(":collection?", ":story?")],
        render: to,
    },
    {
        path: [te.BVt.USER_GUILD_NOTIFICATION_SETTINGS(eS.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, X.B)(() => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("64992"), n.e("67208")]).then(n.bind(n, 401539));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = tl({}, t)),
                                (l = l =
                                    {
                                        guildId: i,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        };
                    });
                }),
                (0, r.jsx)(a.rd, {
                    to: te.BVt.CHANNEL(i),
                })
            );
        },
    },
    {
        path: [te.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, X.B)(() =>
                    (0, eY.openUserSettings)(eB.X.GIFT_PANEL, {
                        section: te.nc_.INVENTORY,
                    }),
                ),
                (0, r.jsx)(a.rd, {
                    to: eX.A.defaultRoute,
                })
            );
        },
    },
    {
        path: [
            te.BVt.WELCOME(
                eS.pv.guildId({
                    optional: !0,
                }),
                eS.pv.channelId({
                    optional: !0,
                }),
            ),
        ],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, ed.C)(tn.zY.MARKETING_UNCLAIMED);
            let l = te.BVt.CHANNEL(n, i);
            return (0, r.jsx)(a.rd, {
                to: l,
            });
        },
    },
    {
        path: [
            te.BVt.GUILD_EVENT_DETAILS(
                eS.pv.guildId({
                    optional: !0,
                }),
                ":guildEventId",
            ),
        ],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, X.B)(() => {
                    (0, $.uR)({
                        eventId: i,
                    });
                }),
                (0, r.jsx)(a.rd, {
                    to: te.BVt.CHANNEL(n),
                })
            );
        },
    },
    {
        path: [te.BVt.GUILD_SETTINGS(eS.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: l } = t.params;
            return (
                (0, X.B)(() => {
                    ee.A.open(n, (0, et.A)(te.BEX, i), void 0, (0, et.A)(te.nd0, l));
                }),
                (0, r.jsx)(a.rd, {
                    to: te.BVt.CHANNEL(n),
                })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            te.BVt.CHANNEL_THREAD_VIEW(eS.pv.guildId(), eS.pv.channelId(), ":threadId", ":messageId?"),
            te.BVt.CHANNEL(
                eS.pv.guildId(),
                eS.pv.channelId({
                    optional: !0,
                }),
                ":messageId?",
            ),
            te.BVt.ACTIVITY,
            te.BVt.ACTIVITIES,
            te.BVt.ACTIVITIES_HAPPENING_NOW,
            te.BVt.APPLICATION_LIBRARY,
            te.BVt.APPLICATION_STORE,
            te.BVt.MESSAGE_REQUESTS,
            te.BVt.COLLECTIBLES_SHOP,
            te.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            te.BVt.GUILD_DISCOVERY,
            te.BVt.QUEST_HOME,
            te.BVt.QUEST_HOME_V2,
            te.BVt.ICYMI,
            te.BVt.GLOBAL_DISCOVERY,
            te.BVt.GUILD_MEMBER_VERIFICATION(eS.pv.guildId()),
            te.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(eS.pv.guildId(), ":inviteCode?"),
            te.BVt.GUILD_BOOSTING_MARKETING(eS.pv.guildId()),
            te.BVt.GUILD_FEATURE(":feature", eS.pv.guildId()),
            te.BVt.FEATURE(":feature"),
            te.BVt.FAMILY_CENTER,
        ],
        render: tu,
        isChatRoute: !0,
    },
    {
        path: [te.BVt.APPLICATION_DIRECTORY],
        render: td,
    },
    {
        path: [te.BVt.GAME_SHOP(eS.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: l } = t.params;
            return (0, r.jsx)(a.rd, {
                to: te.BVt.CHANNELS_GAME_SHOP(n, 0, i, l),
            });
        },
    },
];

function tf(e) {
    for (let { path: t, isChatRoute: n } of tg) {
        if (!n) continue;
        let r = (0, a.B6)(e, {
            path: t,
        });
        if (null != r) return r;
    }
    return null;
}

function tm(e) {
    let { channelId: t, guildId: n, pathname: r } = e;
    if (!Q.A.isConnected()) return;
    let { location: i } = (0, eC.JK)();
    i.pathname === r && (null == eQ.A.getChannel(t) ? (0, eC.bG)(te.BVt.CHANNEL(n)) : (0, eC.bG)(r));
}
class tA extends i.PureComponent {
    componentDidMount() {
        e4.Ay.setZoomFactor(A.A.zoom),
            eT.A.init(),
            j.A.initialize(),
            e_.A.initialize(),
            K.A.initialize(),
            eW.A.initialize(),
            W.A.initialize(),
            eO.A.initialize(),
            U.A.initialize(),
            es.A.initialize(),
            _.A.init(),
            z.A.init(),
            q.A.init(),
            ep.A.initialize(),
            v.A.initialize(),
            B.A.initialize(),
            ey.A.initialize(),
            y.Ay.initialize(),
            H.Ay.initialize(),
            eK.A.initialize(),
            er.Ay.initialize(),
            eA.A.initialize(),
            O.A.initialize(),
            ei.A.init(),
            w.A.init(),
            e5.A.init(),
            E.A.initialize(),
            ek.A.init(),
            e9.A.init(),
            eV.A.init(),
            eL.A.initialize(),
            eR.A.initialize(),
            eG.A.initialize(),
            eH.A.init(),
            V.A.initialize(),
            b.A.initialize(),
            ej.A.initialize(),
            ew.A.initialize(),
            ef.A.initialize(),
            eg.A.initialize(),
            em.A.initialize(),
            L.A.initialize(),
            R.A.initialize(),
            Y.A.initialize(),
            ea.A.initialize(),
            el.A.init({
                hasModalOpen: o.ueM,
                openModal: () =>
                    (0, o.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
                        return (t) => (0, r.jsx)(e, tl({}, t));
                    }),
            }),
            eo.A.initialize(),
            eI.A.initialize(),
            eb.A.initialize(),
            k.A.initialize(),
            P.A.initialize(),
            S.A.initialize(),
            (this.rewriterUnlisten = ev.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = ev.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eT.A.terminate(),
            eW.A.terminate(),
            eO.A.terminate(),
            e_.A.terminate(),
            j.A.terminate(),
            y.Ay.terminate(),
            H.Ay.terminate(),
            eK.A.terminate(),
            O.A.terminate(),
            ey.A.terminate(),
            eA.A.terminate(),
            eG.A.terminate(),
            E.A.terminate(),
            V.A.terminate(),
            eo.A.terminate(),
            b.A.terminate(),
            eI.A.terminate(),
            ej.A.terminate(),
            ew.A.terminate(),
            ef.A.terminate(),
            eg.A.terminate(),
            em.A.terminate(),
            L.A.terminate(),
            R.A.terminate(),
            eb.A.terminate(),
            k.A.terminate(),
            F.A.terminate(),
            P.A.terminate(),
            S.A.terminate(),
            Y.A.terminate(),
            ea.A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e, t) {
        let { pathname: n, search: r } = e;
        !(function (e) {
            if (Q.A.isConnected() || Q.A.isTryingToConnect()) return;
            let t = eq.default.getToken();
            null == t || ((0, eN.Q)(e) && c.A.startSession(t));
        })(n),
            (function (e, t) {
                let n = tf(e);
                if (null == n) return;
                let { guildId: r, channelId: i, messageId: s, threadId: o } = th(n),
                    c = (0, eS.nn)(r),
                    u = (0, eS.ts)(i),
                    d = (0, eS.ts)(o),
                    g = e1.A.getGuildId(),
                    f = g !== r;
                if ((c && f && p.A.selectGuild(r), c && u)) {
                    let n = e0.A.getChannelId(g),
                        a = n !== i,
                        c = null != ez.Ay.getGuildSidebarState(r);
                    if (!ta || f || a || null != s) {
                        (ta = !0),
                            h.default.selectChannel({
                                guildId: r,
                                channelId: i,
                                messageId: s,
                            });
                        let { summaryId: e } = (0, l.parse)(t);
                        null != e && eD.Ay.setSelectedSummary(i, e);
                    }
                    if (
                        (c &&
                            a &&
                            null != i &&
                            null != ez.Ay.getCurrentSidebarChannelId(i) &&
                            ex.A.closeChannelSidebar(i),
                        null != o && d)
                    ) {
                        let e = ez.Ay.getCurrentSidebarChannelId(n),
                            t = e !== o;
                        if (null != i && null != o && t)
                            if (c) (0, eC.bG)(te.BVt.CHANNEL(r, o, s));
                            else {
                                let e = {
                                    type: eP.LU.THREAD,
                                };
                                null != s && (e.initialMessageId = s),
                                    ex.A.openThreadAsSidebar({
                                        guildId: r,
                                        baseChannelId: i,
                                        channelId: o,
                                        details: e,
                                    });
                            }
                        else c && null != e && null != i && ex.A.closeChannelSidebar(i);
                    } else null == i || a || ex.A.closeChannelSidebar(i);
                    let u = eu.A.getIsOpen();
                    if (i === tt.VV.ROLE_SUBSCRIPTIONS) ec.A.closeSidebar();
                    else if (f && u) {
                        let t = null == g && r === te.ME,
                            n = e === te.BVt.GUILD_DISCOVERY;
                        t || n ? ec.A.closeSidebar() : ec.A.openSidebar();
                    } else ((a && u) || (!f && !a)) && ec.A.closeSidebar();
                } else
                    tp.some((t) => {
                        var n;
                        return (null == (n = (0, a.B6)(e, t)) ? void 0 : n.isExact) === !0;
                    }) || (0, eC.bG)(eX.A.fallbackRoute);
            })(n, r),
            (0, G.MS)(
                {
                    pathname: n,
                    source: e.source,
                },
                t,
            );
    }
    ensureChannelMatchesGuild(e) {
        if (!Q.A.isConnected()) return null;
        let { pathname: t } = e,
            n = tf(t);
        if (null == n) return null;
        let { guildId: r, channelId: i, threadId: l } = th(n),
            a = (0, eS.nn)(r) && r !== te.ME && r !== te.YYv;
        if (null != i && (0, eS.ts)(i) && !(0, tt.jq)(i) && a) {
            let n = eQ.A.getChannel(i);
            if (null == n)
                eM.A.loadThread(i).then(() =>
                    tm({
                        channelId: i,
                        guildId: r,
                        pathname: t,
                    }),
                );
            else if (n.guild_id !== r && r !== te.gNP)
                return {
                    path: te.BVt.CHANNEL(r),
                    state: e.state,
                };
            if (null != l) {
                if (!((0, eS.ts)(l) && !(0, tt.jq)(i))) return null;
                let n = eQ.A.getChannel(l);
                if (null == n)
                    eM.A.loadThread(l).then(() =>
                        tm({
                            channelId: l,
                            guildId: r,
                            pathname: t,
                        }),
                    );
                else if ((null == n ? void 0 : n.parent_id) !== i)
                    return (
                        ex.A.closeChannelSidebar(i),
                        {
                            path: te.BVt.CHANNEL(r, i),
                            state: e.state,
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsxs)(a.dO, {
                    children: [
                        (0, r.jsx)(a.rd, {
                            exact: !0,
                            from: "/channels",
                            to: "/",
                        }),
                        tg.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, r.jsx)(
                                a.qh,
                                {
                                    path: t,
                                    render: n,
                                },
                                t[0],
                            );
                        }),
                        (0, r.jsx)(a.rd, {
                            to: "/",
                        }),
                    ],
                }),
                (0, r.jsx)(D.A, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e), ti(this, "historyUnlisten", () => {}), ti(this, "rewriterUnlisten", () => {});
    }
}
let t_ = tA;
