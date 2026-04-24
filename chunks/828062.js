n(323874), n(14289), n(35956), n(142703);
var i,
    a = n(627968);
n(486107);
var r = n(64700),
    _ = n(507240),
    s = n(284009),
    l = n.n(s),
    o = n(965830),
    E = n(481613),
    d = n.n(E),
    c = n(422998),
    u = n(17928),
    I = n(838677),
    T = n(112834),
    A = n(821609),
    S = n(565645),
    N = n(503698),
    O = n.n(N),
    R = n(939249),
    f = n(43990),
    C = n(942857),
    p = n(77729),
    D = n(313961),
    L = n(267102),
    m = n(85563),
    h = n(908031),
    g = n(953727);
function b(e) {
    let { width: t = 12, height: n = 12, color: i = "currentColor", foreground: r, ..._ } = e;
    return (0, a.jsx)("svg", {
        ...(0, g.A)(_),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, a.jsx)("path", {
            stroke: i,
            className: r,
            fill: "none",
            d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z",
        }),
    });
}
var U = n(155545),
    P = n(797820),
    M = n(561155),
    G = n(803102),
    y = n(723702),
    v = n(19575),
    B = n(985018),
    w = n(964837);
let F = (e, t) => {
        (0, y.isMac)() && !t.altKey ? v.Ay.fullscreen(e) : v.Ay.maximize(e);
    },
    V = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: r } = e,
            _ = (0, a.jsx)(R.D, {
                className: w.d1,
                onClick: () => v.Ay.close(n),
                "aria-label": B.intl.string(B.t.ZdNUj2),
                tabIndex: -1,
                children: (0, a.jsx)(h.A, {}),
            }),
            s = (0, a.jsx)(R.D, {
                className: w.T0,
                onClick: (e) => F(n, e),
                "aria-label": B.intl.string(B.t.G1u0hK),
                tabIndex: -1,
                children: (0, a.jsx)(U.A, {}),
            }),
            l = (0, a.jsx)(R.D, {
                className: w.T0,
                onClick: () => v.Ay.minimize(n),
                "aria-label": B.intl.string(B.t.CxOC4U),
                tabIndex: -1,
                children: (0, a.jsx)(M.A, {}),
            }),
            o = (0, a.jsxs)(a.Fragment, { children: [_, s, l] });
        return (0, a.jsx)(f.N, {
            theme: i,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: O()(w._B, e, { [w.N_]: !r }),
                    children: [(0, a.jsx)("div", { className: w.X1, children: (0, a.jsx)(m.A, {}) }), t, o],
                }),
        });
    },
    H = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: r, hasOpenLayer: _, children: s } = e;
        return (0, a.jsx)(f.N, {
            theme: r,
            children: (e) =>
                (0, a.jsxs)(R.D, {
                    className: O()(i ? w.zY : w.kE, t ? w.in : w.Vn, e, { [w.N_]: !_ }),
                    onDoubleClick: () => v.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        p.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? s
                            : (0, a.jsxs)("div", {
                                  className: w.lY,
                                  children: [
                                      (0, a.jsx)(R.D, {
                                          className: w.gV,
                                          onClick: () => v.Ay.close(n),
                                          "aria-label": B.intl.string(B.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(b, { color: "#4c0000" }),
                                      }),
                                      (0, a.jsx)(R.D, {
                                          className: w.wv,
                                          onClick: () => v.Ay.minimize(n),
                                          "aria-label": B.intl.string(B.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(G.A, { color: "#975500" }),
                                      }),
                                      (0, a.jsx)(R.D, {
                                          className: w.KH,
                                          onClick: (e) => F(n, e),
                                          "aria-label": B.intl.string(B.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(P.A, { color: "#006500" }),
                                      }),
                                  ],
                              }),
                        i
                            ? (0, a.jsx)("div", { className: w.Th, children: (0, a.jsx)(m.A, { color: "#ffffff" }) })
                            : null,
                    ],
                }),
        });
    };
var k = n(531685),
    W = n(690521),
    Y = n(975571),
    x = n(721668),
    K = n(652215);
let j = u.Ay.connectStores([k.A], () => ({ focused: k.A.isFocused() }))(function (e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: r = !1, themeOverride: _ } = e,
        s = (0, L.Us)(),
        l = (0, u.bG)([D.A], () => D.A.isFullscreenInContext(s)),
        o = (0, C.A)();
    if (l) return null;
    switch (n) {
        case y.PlatformTypes.WINDOWS:
            return (0, a.jsx)(V, { windowKey: i, themeOverride: _, hasOpenLayer: o });
        case y.PlatformTypes.OSX:
            return (0, a.jsx)(H, { focused: t, windowKey: i, frame: r, themeOverride: _, hasOpenLayer: o });
        default:
            return null;
    }
});
class $ extends r.PureComponent {
    handleDownload = () => {
        window.open(
            this.getPlatform() === y.PlatformTypes.WINDOWS
                ? Y.A.getArticleURL(K.MVz.CORRUPT_INSTALLATION)
                : K.X7G.DOWNLOAD,
        );
    };
    getPlatform() {
        let e = d().os?.family;
        return null != e && /^win/i.test(e)
            ? y.PlatformTypes.WINDOWS
            : null != e && /darwin|os x/i.test(e)
              ? y.PlatformTypes.OSX
              : y.PlatformTypes.LINUX;
    }
    componentDidMount() {
        let e;
        (e = window.require("electron").remote.getCurrentWindow()),
            (v.Ay.minimize = () => e.minimize()),
            (v.Ay.maximize = () => {
                e.isMaximized() ? e.unmaximize() : e.maximize();
            }),
            (v.Ay.close = () => e.close());
    }
    render() {
        let e = (0, a.jsx)("div", {
            children: (0, a.jsxs)("p", {
                children: [
                    B.intl.string(B.t["4tRjHC"]),
                    " ",
                    (0, a.jsx)(S.A, {
                        src: W.Ay.getURL(I.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, a.jsxs)(r.Fragment, {
            children: [
                (0, a.jsx)(c.mg, { children: (0, a.jsx)("html", { className: (0, T.m)(K.NJ8.DARK) }) }),
                (0, a.jsx)(j, { type: this.getPlatform() }),
                (0, a.jsx)(x.A, {
                    title: B.intl.string(B.t["3h+n+8"]),
                    note: e,
                    action: (0, a.jsx)(A.$, {
                        size: "md",
                        variant: "primary",
                        text: B.intl.string(B.t["1WjMbC"]),
                        onClick: this.handleDownload,
                    }),
                }),
            ],
        });
    }
}
var Q = n(488428),
    q = n(873263),
    X = n(110259),
    Z = n(279194),
    z = n(742821),
    J = n(80703),
    ee = n(506774),
    et = n(736056),
    en = n(495544);
let ei = u.Ay.connectStores([et.A, en.default], () => {
    let e = en.default.getToken();
    return { token: e, hasLoadedExperiments: null != e || et.A.hasLoadedExperiments };
})((e) => {
    let { hasLoadedExperiments: t, token: n } = e;
    return null != n
        ? (0, a.jsx)(q.rd, { to: K.BVt.APP })
        : t
          ? (0, a.jsx)(q.rd, { to: K.BVt.DEFAULT_LOGGED_OUT })
          : null;
});
var ea = n(549711),
    er = n(268218),
    e_ = n(276267),
    es = n(228366),
    el =
        (((i = {})[(i.NOT_STARTED = 0)] = "NOT_STARTED"),
        (i[(i.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (i[(i.FAILED = 2)] = "FAILED"),
        (i[(i.SKIPPED = 3)] = "SKIPPED"),
        i);
let eo = 0;
class eE extends u.Ay.Store {
    static displayName = "DomainMigrationStore";
    getMigrationStatus() {
        return eo;
    }
}
let ed = new eE(es.h, {
    DOMAIN_MIGRATION_START: function () {
        eo = 1;
    },
    DOMAIN_MIGRATION_FAILURE: function () {
        eo = 2;
    },
    DOMAIN_MIGRATION_SKIP: function () {
        eo = 3;
    },
});
var ec = n(954571);
function eu(e) {
    return e?._state?.lastTestTimestamp;
}
function eI() {
    return (
        r.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== ee.w.get(Z.qx) &&
                v.Ay.supportsFeature(K.BYE.USER_DATA_CACHE) &&
                (es.h.wait(() => es.h.dispatch({ type: "DOMAIN_MIGRATION_START" })),
                p.A.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        es.h.dispatch({ type: "DOMAIN_MIGRATION_FAILURE" }),
                            ec.default.track(K.HAw.DOMAIN_MIGRATED, { success: !1, has_data: !1 }, { flush: !0 });
                        return;
                    }
                    let t = Object.keys(e),
                        n = 0 !== t.length,
                        i = null != e.token,
                        a = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        r = null == a || null == eu(a) || eu(a) <= eu(ee.w.get("RTCRegionStore"));
                    n &&
                        i &&
                        !r &&
                        (ee.w.clear(),
                        t.forEach((t) => {
                            let n = e[t];
                            try {
                                ee.w.set(t, JSON.parse(n));
                            } catch (e) {}
                        })),
                        ec.default.track(
                            K.HAw.DOMAIN_MIGRATED,
                            { success: !0, current_is_newer: r, has_data: n },
                            { flush: !0 },
                        ),
                        ee.w.set(Z.qx, !0),
                        p.A.userDataCache.deleteCache(),
                        window.location.reload();
                }));
        }, []),
        null
    );
}
var eT = n(247775),
    eA = n(272355);
class eS extends eA.A {
    _initialize() {
        es.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    _terminate() {
        es.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleConnectionOpen = (e) => {
        ((0, y.isWindows)() || (0, y.isMac)()) && eT.encryptAndStoreTokens();
    };
}
let eN = new eS();
var eO = n(463347),
    eR = n(334465),
    ef = n(464578),
    eC = n(53505),
    ep = n(492462),
    eD = n(998218);
let eL = (e) => {
    if (null == e || "" === e) return null;
    try {
        let t = new URL(e);
        return eD.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
    } catch (e) {
        return null;
    }
};
n(436317);
var em = n(396574);
n(869146), n(507263), n(967347);
let eh = (0, er.Fe)({
        createPromise: () => n.e("22062").then(n.bind(n, 224116)),
        webpackId: 224116,
        name: "UnsupportedBrowser",
    }),
    eg = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482)),
        webpackId: 987482,
        name: "DownloadApps",
    }),
    eb = (0, er.Fe)({
        createPromise: () => n.e("84809").then(n.bind(n, 312625)),
        webpackId: 312625,
        name: "InviteProxy",
    }),
    eU = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("46391")]).then(n.bind(n, 29599)),
        webpackId: 29599,
        name: "VerifyConnectedAccount",
    }),
    eP = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("63832")]).then(n.bind(n, 744185)),
        webpackId: 744185,
        name: "VerifyConnectedAccountSuccess",
    }),
    eM = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("50033")]).then(n.bind(n, 885338)),
        webpackId: 885338,
        name: "VerifyConnectedAccountError",
    }),
    eG = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("52986")]).then(n.bind(n, 97649)),
        webpackId: 97649,
        name: "LinkConnectedAccount",
    }),
    ey = (0, er.Fe)({
        createPromise: () => n.e("65893").then(n.bind(n, 209086)),
        webpackId: 209086,
        name: "LinkAuthorize",
    }),
    ev = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("53242"), n.e("16864")]).then(n.bind(n, 627318)),
        webpackId: 627318,
        name: "ActivateDevice",
    }),
    eB = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("62731"),
                n.e("34786"),
                n.e("2035"),
                n.e("98248"),
                n.e("80527"),
                n.e("58710"),
                n.e("31825"),
                n.e("23353"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("85071"),
                n.e("88017"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("66950"),
                n.e("58164"),
                n.e("38229"),
                n.e("36682"),
                n.e("56871"),
                n.e("69601"),
                n.e("47511"),
                n.e("48900"),
                n.e("20735"),
                n.e("27846"),
                n.e("8306"),
                n.e("24170"),
                n.e("44575"),
                n.e("34268"),
                n.e("35327"),
                n.e("99011"),
                n.e("62092"),
                n.e("27752"),
                n.e("3441"),
                n.e("24431"),
                n.e("7679"),
                n.e("98970"),
                n.e("99789"),
                n.e("91139"),
                n.e("47568"),
                n.e("91749"),
                n.e("17422"),
                n.e("79149"),
                n.e("26297"),
                n.e("77058"),
                n.e("22646"),
                n.e("16310"),
                n.e("49448"),
                n.e("55811"),
                n.e("95176"),
                n.e("56686"),
                n.e("90895"),
                n.e("66636"),
                n.e("78467"),
                n.e("34418"),
                n.e("76953"),
                n.e("6044"),
                n.e("18294"),
                n.e("55514"),
                n.e("92083"),
                n.e("64919"),
                n.e("5536"),
                n.e("37786"),
                n.e("77894"),
                n.e("44846"),
                n.e("84989"),
                n.e("56423"),
                n.e("6531"),
                n.e("46454"),
                n.e("31302"),
                n.e("21738"),
            ]).then(n.bind(n, 826323)),
        webpackId: 826323,
        name: "ViewsWithMainInterface",
        memo: !0,
        id: 826323,
    }),
    ew = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("53242"),
                n.e("28367"),
                n.e("93103"),
                n.e("80527"),
                n.e("58710"),
                n.e("31825"),
                n.e("23353"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("85071"),
                n.e("88017"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("66950"),
                n.e("58164"),
                n.e("38229"),
                n.e("20861"),
                n.e("36682"),
                n.e("56871"),
                n.e("69601"),
                n.e("47511"),
                n.e("72401"),
                n.e("51444"),
                n.e("62290"),
                n.e("93312"),
                n.e("80973"),
                n.e("82731"),
                n.e("82486"),
                n.e("17422"),
                n.e("34418"),
                n.e("90966"),
                n.e("16198"),
                n.e("37446"),
                n.e("73076"),
                n.e("37619"),
                n.e("47886"),
                n.e("23224"),
                n.e("37402"),
                n.e("86142"),
            ]).then(n.bind(n, 656901)),
        webpackId: 656901,
        name: "ViewsWithAuth",
    }),
    eF = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("37446"), n.e("13419")]).then(n.bind(n, 234260)),
        webpackId: 234260,
        name: "ViewsWithOAuth2",
    }),
    eV = (0, er.Fe)({
        createPromise: () => n.e("30514").then(n.bind(n, 146088)),
        webpackId: 146088,
        name: "BrowserHandoff",
    }),
    eH = (0, er.Fe)({
        createPromise: () => n.e("74272").then(n.bind(n, 569710)),
        webpackId: 569710,
        name: "MobileWebHandoffFallback",
    }),
    ek = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("62731"),
                n.e("34786"),
                n.e("2035"),
                n.e("74968"),
                n.e("56947"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("87963"),
                n.e("37266"),
                n.e("55057"),
                n.e("76021"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("80527"),
                n.e("88342"),
                n.e("58710"),
                n.e("8555"),
                n.e("31825"),
                n.e("23353"),
                n.e("7175"),
                n.e("37249"),
                n.e("14138"),
                n.e("8971"),
                n.e("85071"),
                n.e("88017"),
                n.e("40142"),
                n.e("1040"),
                n.e("64615"),
                n.e("17239"),
                n.e("66950"),
                n.e("60161"),
                n.e("58164"),
                n.e("38229"),
                n.e("36682"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("56871"),
                n.e("34983"),
                n.e("69601"),
                n.e("47511"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("53142"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("21055"),
                n.e("48900"),
                n.e("31538"),
                n.e("21453"),
                n.e("54436"),
                n.e("98954"),
                n.e("6698"),
                n.e("20735"),
                n.e("227"),
                n.e("90184"),
                n.e("27846"),
                n.e("8306"),
                n.e("62718"),
                n.e("24170"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44575"),
                n.e("80093"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("34268"),
                n.e("49320"),
                n.e("60989"),
                n.e("35327"),
                n.e("75349"),
                n.e("73644"),
                n.e("99011"),
                n.e("54490"),
                n.e("63078"),
                n.e("62092"),
                n.e("27752"),
                n.e("3441"),
                n.e("24431"),
                n.e("7679"),
                n.e("98970"),
                n.e("86300"),
                n.e("99789"),
                n.e("91139"),
                n.e("47568"),
                n.e("91749"),
                n.e("41706"),
                n.e("17422"),
                n.e("26297"),
                n.e("77058"),
                n.e("22646"),
                n.e("53275"),
                n.e("96694"),
                n.e("7121"),
                n.e("49448"),
                n.e("55811"),
                n.e("95176"),
                n.e("56686"),
                n.e("2059"),
                n.e("53267"),
                n.e("94989"),
                n.e("90895"),
                n.e("26223"),
                n.e("66636"),
                n.e("34418"),
                n.e("92539"),
                n.e("76953"),
                n.e("2529"),
                n.e("10247"),
                n.e("51743"),
                n.e("6044"),
                n.e("18294"),
                n.e("83438"),
                n.e("55514"),
                n.e("92083"),
                n.e("37786"),
                n.e("60744"),
                n.e("77894"),
                n.e("97763"),
                n.e("84989"),
                n.e("7521"),
                n.e("45013"),
                n.e("6531"),
                n.e("99510"),
                n.e("41343"),
                n.e("84018"),
            ]).then(n.bind(n, 436405)),
        webpackId: 436405,
        name: "Overlay",
    }),
    eW = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("83518"), n.e("85216"), n.e("66708")]).then(n.bind(n, 303174)),
        webpackId: 303174,
        name: "SuspendedUserSafetyHubPage",
    }),
    eY = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("91227"), n.e("71791")]).then(n.bind(n, 125820)),
        webpackId: 125820,
        name: "QuestsLandingPage",
    }),
    ex = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("91227"), n.e("44900")]).then(n.bind(n, 589877)),
        webpackId: 589877,
        name: "QuestPreviewLandingPage",
    }),
    eK = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("81881")]).then(n.bind(n, 519716)),
        webpackId: 519716,
        name: "ConnectionsAuthorizeContinue",
    }),
    ej = (0, er.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
    }),
    e$ = (0, er.Fe)({
        createPromise: () => n.e("38217").then(n.bind(n, 149755)),
        webpackId: 149755,
        name: "ApplicationDirectoryGlobalDiscoveryRoutes",
    }),
    eQ = () => (0, a.jsx)(eB, {}),
    eq = new Set([
        K.BVt.LOGIN,
        K.BVt.LOGIN_HANDOFF,
        K.BVt.INVITE_LOGIN(":inviteCode"),
        K.BVt.GIFT_CODE_LOGIN(":giftCode"),
        K.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
    ]);
function eX(e, t) {
    return t ? e.filter((e) => !eq.has(e)) : e;
}
class eZ extends r.Component {
    componentDidMount() {
        let { isAuthenticated: e } = this.props;
        v.Ay.cleanupDisplaySleep(), eN.initialize(), (ef.A.wasAuthenticated = e);
    }
    componentWillUnmount() {
        eN.terminate();
    }
    render() {
        let e,
            { isAuthenticated: t, migrationStatus: n, skipsSettingDefaultPageTitle: i } = this.props;
        return (
            (e =
                n === el.IN_PROGRESS
                    ? null
                    : em.VP
                      ? y.isPlatformEmbedded
                          ? (0, a.jsxs)(q.dO, {
                                children: [
                                    t ? null : (0, a.jsx)(q.qh, { path: K.BVt.ACCOUNT_STANDING, component: eW }),
                                    (0, a.jsx)(q.qh, {
                                        exact: !0,
                                        path: K.BVt.INDEX,
                                        render: () => (0, a.jsx)(ei, {}),
                                    }),
                                    (0, a.jsx)(ea.A, { exact: !0, path: K.BVt.APPS, component: eg }),
                                    (0, a.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                K.BVt.LOGIN,
                                                K.BVt.REGISTER,
                                                K.BVt.INVITE(":inviteCode"),
                                                K.BVt.INVITE_LOGIN(":inviteCode"),
                                                K.BVt.GIFT_CODE(":giftCode"),
                                                K.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                K.BVt.RESET,
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, a.jsx)(q.rd, { from: K.BVt.INVITE(""), to: K.BVt.LOGIN }),
                                    (0, a.jsx)(q.rd, { from: K.BVt.GIFT_CODE(""), to: K.BVt.LOGIN }),
                                    (0, a.jsx)(q.qh, { render: eQ }),
                                ],
                            })
                          : (0, a.jsxs)(q.dO, {
                                children: [
                                    (0, a.jsx)(ea.A, {
                                        exact: !0,
                                        path: K.BVt.INDEX,
                                        render: () => (0, a.jsx)(ei, {}),
                                    }),
                                    (0, a.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                K.BVt.LOGIN_ONE_TIME,
                                                K.BVt.LOGIN,
                                                K.BVt.LOGIN_HANDOFF,
                                                K.BVt.REGISTER,
                                                K.BVt.BILLING_PREFIX,
                                                K.BVt.BILLING_PROMOTION_REDEMPTION(":code"),
                                                K.BVt.INVITE(":inviteCode"),
                                                K.BVt.INVITE_LOGIN(":inviteCode"),
                                                K.BVt.GIFT_CODE(":giftCode"),
                                                K.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                K.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                                                K.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                                                K.BVt.DISABLE_EMAIL_NOTIFICATIONS,
                                                K.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                                K.BVt.RESET,
                                                K.BVt.REPORT,
                                                K.BVt.REPORT_SECOND_LOOK,
                                                K.BVt.ACCOUNT_REVERT(":token"),
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    t
                                        ? null
                                        : (0, a.jsx)(q.qh, {
                                              path: K.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                              component: ew,
                                          }),
                                    t
                                        ? null
                                        : (0, a.jsx)(q.qh, {
                                              path: K.BVt.CHANNEL(
                                                  eO.pv.guildId(),
                                                  eO.pv.channelId({ optional: !0 }),
                                                  ":messageId?",
                                              ),
                                              component: ew,
                                          }),
                                    (0, a.jsx)(q.rd, { from: K.BVt.INVITE(""), to: K.BVt.LOGIN }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, a.jsx)(q.rd, { from: K.BVt.GIFT_CODE(""), to: K.BVt.LOGIN }),
                                    (0, a.jsx)(ea.A, {
                                        path: K.BVt.QUESTS(":questId"),
                                        component: eY,
                                        impressionName: X.ImpressionNames.QUESTS_LANDING_PAGE,
                                        impressionProperties: (e) => {
                                            let { match: t } = e;
                                            return {
                                                quest_id: t?.params.questId != null ? Number(t.params.questId) : void 0,
                                            };
                                        },
                                    }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.QUEST_PREVIEW(":questId"), component: ex }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.HANDOFF, component: eV }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.MOBILE_WEB_HANDOFF, component: eH }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.CONNECTION_LINK(":type"), component: eG }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.CONNECTION_LINK_AUTHORIZE(":type"), component: ey }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.ACTIVATE, component: ev }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.ACTIVATE_HANDOFF, component: ev }),
                                    (0, a.jsx)(ea.A, {
                                        path: K.BVt.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                        component: eK,
                                    }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.CONNECTIONS_SUCCESS(":type"), component: eP }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.CONNECTIONS_ERROR(":type"), component: eM }),
                                    (0, a.jsx)(ea.A, { path: K.BVt.CONNECTIONS(":type"), component: eU }),
                                    (0, a.jsx)(ea.A, {
                                        path: K.BVt.DOWNLOAD_QR_CODE_REDIRECT,
                                        render: () => {
                                            let e = ec.default.getSuperProperties()?.os,
                                                t = (0, Q.parse)((window.location.search ?? "").substr(1)),
                                                n = t.referring_location?.toString();
                                            return (
                                                ("iOS" === e || "Android" === e) &&
                                                    ec.default.track(K.HAw.DOWNLOAD_APP, {
                                                        platform: e,
                                                        ptb: !1,
                                                        released: !0,
                                                        has_e_mail: "true" === t.has_e_mail,
                                                        referring_location: n,
                                                        qr_code: !0,
                                                    }),
                                                (window.location.href = (0, eC.b$)(
                                                    null != n && "" !== n ? n : "qr_code",
                                                    e,
                                                )),
                                                null
                                            );
                                        },
                                    }),
                                    (0, a.jsx)(ea.A, {
                                        path: K.BVt.OPEN_APP_FROM_EMAIL,
                                        render: () => {
                                            var e;
                                            let t,
                                                n = ec.default.getSuperProperties()?.os,
                                                i =
                                                    ((e = window.location.search ?? ""),
                                                    {
                                                        desktop: eL((t = (0, ep.parse)(e)).desktop_link),
                                                        mobile: eL(t.mobile_link),
                                                    });
                                            if ("iOS" !== n && "Android" !== n)
                                                return (0, a.jsx)(q.rd, {
                                                    to:
                                                        null != i.desktop
                                                            ? `${i.desktop.pathname}${i.desktop.search}`
                                                            : K.BVt.APP,
                                                });
                                            {
                                                let e = (0, eC.b$)("app_open_from_email", n, i.mobile),
                                                    t = (0, z.X7)(e);
                                                null != t &&
                                                    ec.default.track(K.HAw.DEEP_LINK_CLICKED, {
                                                        fingerprint: (0, J.v)(t.fingerprint),
                                                        attempt_id: t.attemptId,
                                                        source: t.utmSource,
                                                        destination: null != i.mobile ? i.mobile.toString() : null,
                                                    }),
                                                    (window.location.href = e);
                                            }
                                        },
                                    }),
                                    (0, a.jsx)(q.rd, {
                                        from: K.BVt.CONNECT_AUTHORIZE,
                                        to: { ...location, pathname: K.BVt.OAUTH2_AUTHORIZE },
                                    }),
                                    (0, a.jsx)(q.qh, {
                                        path: [
                                            K.BVt.OAUTH2_AUTHORIZED,
                                            K.BVt.OAUTH2_AUTHORIZE,
                                            K.BVt.OAUTH2_ERROR,
                                            K.BVt.OAUTH2_WHITELIST_ACCEPT,
                                        ],
                                        component: eF,
                                    }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [K.BVt.ACCOUNT_STANDING], component: eW }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [K.BVt.APPLICATION_DIRECTORY], component: ej }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [K.BVt.GLOBAL_DISCOVERY_APPS], component: e$ }),
                                    (0, a.jsx)(q.qh, { render: eQ }),
                                    (0, a.jsx)(q.rd, { from: K.BVt.ACCOUNT_REVERT(""), to: K.BVt.LOGIN }),
                                ],
                            })
                      : (0, a.jsx)(q.dO, { children: (0, a.jsx)(ea.A, { component: eh }) })),
            (0, a.jsxs)(e_.A, {
                skipsSettingDefaultPageTitle: i,
                children: [
                    e,
                    y.isPlatformEmbedded && (n === el.NOT_STARTED || n === el.IN_PROGRESS) && !0 !== ee.w.get(Z.qx)
                        ? (0, a.jsx)(eI, {})
                        : null,
                ],
            })
        );
    }
}
let ez = u.Ay.connectStores(
    [en.default, ed],
    () => ({ isAuthenticated: en.default.isAuthenticated(), migrationStatus: ed.getMigrationStatus() }),
    { forwardRef: !0 },
)(function (e) {
    let t = (function () {
        let { pathname: e } = (0, q.zy)();
        return null != (0, eR.B)(e, { path: K.BVt.APPLICATION_DIRECTORY });
    })();
    return (0, a.jsx)(eZ, { ...e, skipsSettingDefaultPageTitle: t });
});
class eJ extends eA.A {
    _initialize() {
        y.isPlatformEmbedded &&
            (v.Ay.on("APP_PUSH_ANALYTICS", (e, t) => {
                this._handleEventResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        try {
            v.Ay.send("APP_GET_ANALYTICS_EVENTS");
        } catch (e) {
            console.error(`[analytics] failed to send analytics events query: ${e}`);
        }
    }
    _handleEventResponse(e) {
        null != e &&
            e.forEach((e) => {
                "cdm" === e.type
                    ? e.name === K.HAw.CDM_LOAD_STATUS || e.name === K.HAw.CDM_READY_COMPLETE
                        ? ec.default.track(e.name, e.data)
                        : console.log(`[analytics] received unknown cdm analytic event ${e.name}`)
                    : "desktop_tti" === e.type
                      ? e.name === K.HAw.DESKTOP_TTI
                          ? ec.default.track(e.name, e.data)
                          : console.log(`[analytics] received unknown desktop_tti analytic event ${e.name}`)
                      : "desktop_tti_v2" === e.type &&
                        (e.name === K.HAw.DESKTOP_TTI_V2
                            ? ec.default.track(e.name, e.data)
                            : console.log(`[analytics] received unknown desktop_tti_v2 analytic event ${e.name}`));
            });
    }
}
let e0 = new eJ();
var e1 = n(125318),
    e2 = n(579872);
class e3 extends eA.A {
    _initialize() {
        es.h.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    _terminate() {
        es.h.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    handlePermission = (e) => {
        let { kind: t, granted: n } = e,
            i = "Firefox" === d().name ? K.MVz.ENABLE_MIC_FIREFOX : K.MVz.ENABLE_MIC_CHROME;
        if (!n) {
            let e = "audio" !== t;
            e2.A.show({
                title: e ? B.intl.string(B.t.OqloH8) : B.intl.string(B.t["kI+OOV"]),
                body: e ? B.intl.string(B.t.l3P7K0) : B.intl.string(B.t.l3jwOd),
                onConfirm: () => window.open(Y.A.getArticleURL(i), "_blank"),
                confirmText: B.intl.string(B.t.psXQHP),
            });
        }
    };
}
let e6 = new e3();
function e5() {
    return {
        num_failed: 0,
        num_delta_installed: 0,
        num_full_installed: 0,
        foreground_bytes_total: 0,
        background_bytes_total: 0,
        foreground_download_ms_total: 0,
        background_download_ms_total: 0,
        foreground_install_ms_total: 0,
        background_install_ms_total: 0,
    };
}
function e4(e) {
    return "host" === e;
}
class e8 {
    _installingModules = {};
    _downloadingModules = {};
    _report;
    constructor() {
        this._report = e5();
    }
    handleDownloadingModule(e) {
        if (!e4(e.name)) {
            if (null != this._downloadingModules[e.name])
                return void console.warn("Duplicate downloading-module event for module ", e.name);
            this._downloadingModules[e.name] = { startTime: BigInt(e.now), foreground: e.foreground };
        }
    }
    _updateReportField(e, t, n) {
        let i = this._report[e];
        null != i ? (this._report[e] = n(i, t)) : (this._report[e] = t);
    }
    incrementReportField(e, t) {
        this._updateReportField(e, t, (e, t) => e + t);
    }
    setReportFieldMinimum(e, t) {
        this._updateReportField(e, t, Math.min);
    }
    setReportFieldMaximum(e, t) {
        this._updateReportField(e, t, Math.max);
    }
    handleDownloadedModule(e) {
        if (e4(e.name)) return;
        let t = this._downloadingModules[e.name];
        if (null == t)
            return void console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
        let n = t.foreground ? "foreground" : "background",
            i = `${n}_download_ms_${e.name}`,
            a = `${n}_bytes_${e.name}`,
            r = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
            _ = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        t.foreground
            ? ((this._report.foreground_download_ms_total += r), (this._report.foreground_bytes_total += _))
            : ((this._report.background_download_ms_total += r), (this._report.background_bytes_total += _)),
            this.incrementReportField(i, r),
            this.incrementReportField(a, _),
            delete this._downloadingModules[e.name];
    }
    handleInstallingModule(e) {
        if (!e4(e.name)) {
            if (null != this._installingModules[e.name])
                return void console.warn("Duplicate installing-module event for module ", e.name);
            this._installingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground,
                oldVersion: e.oldVersion,
                newVersion: e.newVersion,
            };
        }
    }
    handleInstalledModule(e) {
        if (e4(e.name)) return;
        let t = this._installingModules[e.name];
        if (null == t) return;
        let n = t.foreground ? "foreground" : "background",
            i = `${n}_install_ms_${e.name}`,
            a = `min_version_${e.name}`,
            r = `max_version_${e.name}`,
            _ = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
        t.foreground
            ? (this._report.foreground_install_ms_total += _)
            : (this._report.background_install_ms_total += _),
            this.incrementReportField(i, _),
            this.setReportFieldMinimum(a, t.oldVersion),
            e.succeeded
                ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++,
                  this.setReportFieldMaximum(r, t.newVersion))
                : this._report.num_failed++,
            delete this._installingModules[e.name];
    }
    trackEvent(e) {
        switch (e.type) {
            case "installing-module":
                this.handleInstallingModule(e);
                break;
            case "installed-module":
                this.handleInstalledModule(e);
                break;
            case "downloading-module":
                this.handleDownloadingModule(e);
                break;
            case "downloaded-module":
                this.handleDownloadedModule(e);
        }
    }
    getStats() {
        return this._report;
    }
    reset() {
        this._report = e5();
    }
    submissionReady() {
        return (
            this._report.num_full_installed +
                this._report.num_failed +
                this._report.num_delta_installed +
                this._report.foreground_bytes_total +
                this._report.background_bytes_total !==
                0 &&
            !(Object.keys(this._installingModules).length > 0) &&
            !(Object.keys(this._downloadingModules).length > 0)
        );
    }
}
class e7 extends eA.A {
    _tracker = new e8();
    _initialize() {
        y.isPlatformEmbedded &&
            (v.Ay.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()),
            v.Ay.on("MODULE_INSTALLED", (e, t, n) => this.processModuleEvents()),
            v.Ay.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                this._handleHistoryResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        v.Ay.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE");
    }
    _handleHistoryResponse(e) {
        if (null == e) return;
        let t = 0 === Math.floor(500 * Math.random());
        e.forEach((e) => {
            "analytics" === e.type
                ? e.name === K.HAw.UPDATER_METRICS_DOWNLOAD ||
                  e.name === K.HAw.UPDATER_METRICS_INSTALL ||
                  e.name === K.HAw.UPDATER_METRICS_COMBINED ||
                  e.name === K.HAw.UPDATER_METRICS_TRANSITION_STATUS
                    ? t && ec.default.track(e.name, e.data)
                    : console.warn(`Unknown updater analytic event ${e.name}`)
                : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() &&
                (ec.default.track(K.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
}
let e9 = new e7();
n(118356), n(205693), n(742459), n(499979), n(686956);
var te = n(956793);
n(401843), n(652896);
var tt = n(976860);
n(616356);
var tn = n(734057),
    ti = n(969341),
    ta = n(309010);
n(977997), n(536194), n(321034), n(574172);
var tr = n(8917),
    t_ = n(38405),
    ts = n(963169),
    tl = n(532624),
    to = n(650583);
function tE(e, t) {
    return !(e === K.TGd.BROWSER && tl.Ay.hasKeybind(to.zY.MOUSE_BUTTON, t));
}
let td = new (class {
    initialize() {
        (0, y.isDesktop)() &&
            (v.Ay.on("NAVIGATE_BACK", (e, t) => {
                tE(t, to.RX.Back) && (0, ts.OE)("native");
            }),
            v.Ay.on("NAVIGATE_FORWARD", (e, t) => {
                tE(t, to.RX.Forward) && (0, ts.Qb)("native");
            }));
    }
})();
var tc = n(812729),
    tu = n.n(tc),
    tI = n(735438),
    tT = n.n(tI),
    tA = n(141931),
    tS = n(827343),
    tN = n(405018),
    tO = n(704877),
    tR = n(675991),
    tf = n(442353);
class tC extends eA.A {
    callbackActions = {
        [tA.dv.VIDEO]: () => {
            ti.Ay.isVideoEnabled() ? tS.A.setVideoEnabled(!1) : (0, tf.A)(() => tS.A.setVideoEnabled(!0), K.BRT.APP);
        },
        [tA.dv.MUTE]: () => tS.A.toggleSelfMute({ location: "Thumbar" }),
        [tA.dv.DEAFEN]: () => tS.A.toggleSelfDeaf({ location: "Thumbar" }),
        [tA.dv.DISCONNECT]: () => te.default.disconnect(),
    };
    isSupported = (0, y.isMac)() || (0, y.isWindows)();
    prevButtons = [];
    _initialize() {
        this.isSupported &&
            (es.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            es.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            es.h.subscribe("START_SESSION", this.handleViewUpdate),
            es.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate),
            es.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            es.h.subscribe("CALL_CREATE", this.handleViewUpdate),
            es.h.subscribe("CALL_UPDATE", this.handleViewUpdate),
            es.h.subscribe("CALL_DELETE", this.handleViewUpdate),
            es.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate),
            es.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            es.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            es.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            es.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            es.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate),
            v.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported &&
            (es.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            es.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            es.h.unsubscribe("START_SESSION", this.handleViewUpdate),
            es.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate),
            es.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            es.h.unsubscribe("CALL_CREATE", this.handleViewUpdate),
            es.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate),
            es.h.unsubscribe("CALL_DELETE", this.handleViewUpdate),
            es.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate),
            es.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            es.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            es.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            es.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            es.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate));
    }
    buttonClicked = (e) => {
        e.buttonName in this.callbackActions
            ? this.callbackActions[e.buttonName]()
            : console.error(`ThumbarButtonsManager: Unknown callback eventName: "${e.buttonName}"`, e);
    };
    handleViewUpdate = tT().debounce(() => {
        let e = ta.A.getVoiceChannelId();
        if (null == e) return void this.setThumbarButtons([]);
        let t = ti.Ay.isSelfMute(),
            n = ti.Ay.isSelfDeaf(),
            i = ti.Ay.isVideoEnabled(),
            a = ti.Ay.isVideoAvailable(),
            r = tn.A.getChannel(e),
            _ = null == r || (0, tO.r)(r),
            { reachedLimit: s, limit: l } = null != r ? (0, tN.M)(r) : { reachedLimit: void 0, limit: void 0 },
            o = (0, tR.Q)({
                enabled: i,
                join: !1,
                channel: r,
                cameraUnavailable: !a,
                hasPermission: _,
                channelLimit: l,
                channelLimitReached: s,
            });
        this.setThumbarButtons([
            { name: tA.dv.VIDEO, active: !i, tooltip: o, flags: a ? [] : ["disabled"] },
            { name: tA.dv.MUTE, active: t, tooltip: t ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945) },
            { name: tA.dv.DEAFEN, active: n, tooltip: n ? B.intl.string(B.t["2US872"]) : B.intl.string(B.t.wjcRFX) },
            { name: tA.dv.DISCONNECT, active: !0, tooltip: B.intl.string(B.t["6vrfgt"]) },
        ]);
    }, 100);
    setThumbarButtons(e) {
        tu()(this.prevButtons, e) || ((this.prevButtons = e), v.Ay.setThumbarButtons(e));
    }
}
let tp = new tC();
var tD = n(200330),
    tL = n(350723),
    tm = n(346142),
    th = n(451988),
    tg = n(664932),
    tb = n(320989);
function tU(e) {
    let { children: t } = e;
    return (
        r.useEffect(() => (tb.A.initialize(), () => tb.A.cleanup()), []),
        (0, a.jsx)(c.vd, {
            children: (0, a.jsx)(q.Ix, { history: (0, tt.JK)(), children: (0, a.jsx)(tg.Kl, { children: t }) }),
        })
    );
}
var tP = n(164942);
n(321073);
var tM = n(306173),
    tG = n(279234),
    ty = n(626584),
    tv = n(548965);
let tB = new ty.A("libdiscore"),
    tw = !1;
async function tF() {
    if (!tw) {
        try {
            let e;
            await (0, tG.P)();
            let t = (0, tM.t7)(6, 7);
            tB.info("The answer for life the universe and everything is:", t),
                (e = []),
                tv.ML.forEach((t) => {
                    let n = t.getEnabledFeatureName();
                    null != n && e.push(n);
                }),
                ec.default.track(K.HAw.LIBDISCORE_LOADED, { success: !0, experimental_features: e });
        } catch (e) {
            !(function (e) {
                let t, n;
                tB.error("Failed to execute smoke test:", e);
                let i =
                    ((t = ""),
                    (n = null),
                    (e instanceof Error
                        ? ((t = e.message), (n = e.name))
                        : (t = null != e ? String(e) : "Unknown error"),
                    t.length > 1e3 && (t = t.substring(0, 997) + "..."),
                    null != n)
                        ? `${n}: ${t}`
                        : t);
                ec.default.track(K.HAw.LIBDISCORE_LOADED, { success: !1, error: i });
            })(e);
        }
        tw = !0;
    }
}
var tV = n(111162),
    tH = n(343166),
    tk = n(621466),
    tW = n(625494),
    tY = n(654108),
    tx = n(927813),
    tK = n(316501),
    tj = n(708281);
tV.default.cssDebuggingEnabled && n.e("7473").then(n.t.bind(n, 17960, 19)), (0, tK.pF)();
let t$ = 5 * tx.A.Millis.MINUTE,
    tQ = document.getElementById("app-mount");
l()(null != tQ, "Could not find app-mount"), (tQ.className = __OVERLAY__ ? "" : tH.l);
let tq = (0, _.createRoot)(tQ),
    tX = {
        "/oauth2/authorize": function (e) {
            let t = e?.get("client_id"),
                n = e?.get("scope")?.split(" "),
                i = e?.get("state"),
                a = e?.get("redirect_uri"),
                r = e?.get("response_type"),
                _ = e?.get("nonce") ?? void 0,
                s = e?.get("code_challenge") ?? void 0,
                l = e?.get("code_challenge_method") ?? void 0;
            return (
                null == t ||
                null == n ||
                null == a ||
                null == r ||
                ((0, tD.openOAuth2Modal)({
                    clientId: t,
                    scopes: n,
                    redirectUri: a,
                    state: i ?? void 0,
                    responseType: r,
                    nonce: _,
                    codeChallenge: s,
                    codeChallengeMethod: l,
                }),
                !0)
            );
        },
        "/one-time": function (e) {
            let t = e?.get("token");
            return null != t && ((0, tj.N)({ token: t }), !0);
        },
    },
    tZ = (e) => tq.render((0, a.jsx)(tP.e, { children: (0, a.jsx)(tU, { children: (0, a.jsx)(e, {}) }) }));
if (null != p.A) {
    p.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (t_.A.captureCrash(e), e);
        });
    }),
        v.Ay.appLoaded();
    let e = p.A.app.getVersion(),
        t = p.A.app.getBuildNumber(),
        n = p.A.app.getModuleVersions();
    t_.A.setExtra({ hostVersion: e, moduleVersions: n }), t_.A.setTags({ nativeBuildNumber: t?.toString() ?? "" });
    let i = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => `${e}: ${n[e]}`)
        .join(", ");
    new ty.A().log(`[NATIVE INFO] host ${e}, modules: ${i}, build: ${t}`),
        v.Ay.pauseFrameEvictor(),
        v.Ay.initializeExitHook(),
        v.Ay.initializeWERHandler();
}
if (((0, tm.M)(window), __OVERLAY__)) tZ(() => (0, a.jsx)(o.W, { children: (0, a.jsx)(ek, {}) }));
else if (null != window.require && null == window.DiscordNative) tZ($);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), y.isPlatformEmbedded)) {
        (window.onbeforeunload = () => v.Ay.beforeUnload()),
            v.Ay.on("HELP_OPEN", () => window.open(Y.A.getCommunityURL()));
        let e = new th.J_(t$, () => v.Ay.purgeMemory());
        v.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), v.Ay.setFocused(!1), (0, tL.XC)(window, !1);
        }),
            v.Ay.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), v.Ay.setFocused(!0), (0, tL.XC)(window, !0);
            }),
            v.Ay.on("MAIN_WINDOW_PATH", function (e, t, n) {
                let i = null != n ? new URLSearchParams(n) : null;
                tX[t]?.(i) || (0, tt.pX)(t);
            }),
            v.Ay.on("MAIN_WINDOW_HIDDEN", () => {
                (0, tL.R)(window);
            });
    }
    e9.initialize(),
        e0.initialize(),
        e1.A.init(),
        tr.A.init(),
        {
            init() {
                document.addEventListener("paste", (e) => {
                    (0, tY.A)((0, tk.BF)(e)) ||
                        tW._.dispatchToLastSubscribed(K.jej.GLOBAL_CLIPBOARD_PASTE, { event: e });
                });
            },
        }.init(),
        e6.initialize(),
        td.initialize(),
        tp.initialize(),
        tF(),
        tZ(() => (0, a.jsx)(o.W, { children: (0, a.jsx)(ez, {}) }));
}
