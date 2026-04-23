n(323874), n(14289), n(35956), n(142703);
var i,
    r = n(627968);
n(486107);
var a = n(64700),
    s = n(507240),
    _ = n(284009),
    l = n.n(_),
    o = n(965830),
    E = n(481613),
    d = n.n(E),
    c = n(422998),
    u = n(17928),
    I = n(838677),
    A = n(112834),
    T = n(821609),
    S = n(565645),
    N = n(503698),
    O = n.n(N),
    R = n(939249),
    f = n(43990),
    C = n(942857),
    p = n(77729),
    m = n(313961),
    L = n(267102),
    D = n(85563),
    h = n(908031),
    g = n(953727);
function b(e) {
    let { width: t = 12, height: n = 12, color: i = "currentColor", foreground: a, ...s } = e;
    return (0, r.jsx)("svg", {
        ...(0, g.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, r.jsx)("path", {
            stroke: i,
            className: a,
            fill: "none",
            d: "M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z",
        }),
    });
}
var U = n(155545),
    P = n(797820),
    M = n(561155),
    y = n(803102),
    G = n(723702),
    v = n(19575),
    B = n(985018),
    w = n(964837);
let F = (e, t) => {
        (0, G.isMac)() && !t.altKey ? v.Ay.fullscreen(e) : v.Ay.maximize(e);
    },
    V = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: a } = e,
            s = (0, r.jsx)(R.D, {
                className: w.d1,
                onClick: () => v.Ay.close(n),
                "aria-label": B.intl.string(B.t.ZdNUj2),
                tabIndex: -1,
                children: (0, r.jsx)(h.A, {}),
            }),
            _ = (0, r.jsx)(R.D, {
                className: w.T0,
                onClick: (e) => F(n, e),
                "aria-label": B.intl.string(B.t.G1u0hK),
                tabIndex: -1,
                children: (0, r.jsx)(U.A, {}),
            }),
            l = (0, r.jsx)(R.D, {
                className: w.T0,
                onClick: () => v.Ay.minimize(n),
                "aria-label": B.intl.string(B.t.CxOC4U),
                tabIndex: -1,
                children: (0, r.jsx)(M.A, {}),
            }),
            o = (0, r.jsxs)(r.Fragment, { children: [s, _, l] });
        return (0, r.jsx)(f.N, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: O()(w._B, e, { [w.N_]: !a }),
                    children: [(0, r.jsx)("div", { className: w.X1, children: (0, r.jsx)(D.A, {}) }), t, o],
                }),
        });
    },
    H = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: a, hasOpenLayer: s, children: _ } = e;
        return (0, r.jsx)(f.N, {
            theme: a,
            children: (e) =>
                (0, r.jsxs)(R.D, {
                    className: O()(i ? w.zY : w.kE, t ? w.in : w.Vn, e, { [w.N_]: !s }),
                    onDoubleClick: () => v.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        p.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? _
                            : (0, r.jsxs)("div", {
                                  className: w.lY,
                                  children: [
                                      (0, r.jsx)(R.D, {
                                          className: w.gV,
                                          onClick: () => v.Ay.close(n),
                                          "aria-label": B.intl.string(B.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(b, { color: "#4c0000" }),
                                      }),
                                      (0, r.jsx)(R.D, {
                                          className: w.wv,
                                          onClick: () => v.Ay.minimize(n),
                                          "aria-label": B.intl.string(B.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(y.A, { color: "#975500" }),
                                      }),
                                      (0, r.jsx)(R.D, {
                                          className: w.KH,
                                          onClick: (e) => F(n, e),
                                          "aria-label": B.intl.string(B.t["2nM3Pk"]),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(P.A, { color: "#006500" }),
                                      }),
                                  ],
                              }),
                        i
                            ? (0, r.jsx)("div", { className: w.Th, children: (0, r.jsx)(D.A, { color: "#ffffff" }) })
                            : null,
                    ],
                }),
        });
    };
var k = n(531685),
    x = n(690521),
    W = n(975571),
    Y = n(721668),
    j = n(652215);
let K = u.Ay.connectStores([k.A], () => ({ focused: k.A.isFocused() }))(function (e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: s } = e,
        _ = (0, L.Us)(),
        l = (0, u.bG)([m.A], () => m.A.isFullscreenInContext(_)),
        o = (0, C.A)();
    if (l) return null;
    switch (n) {
        case G.PlatformTypes.WINDOWS:
            return (0, r.jsx)(V, { windowKey: i, themeOverride: s, hasOpenLayer: o });
        case G.PlatformTypes.OSX:
            return (0, r.jsx)(H, { focused: t, windowKey: i, frame: a, themeOverride: s, hasOpenLayer: o });
        default:
            return null;
    }
});
class $ extends a.PureComponent {
    handleDownload = () => {
        window.open(
            this.getPlatform() === G.PlatformTypes.WINDOWS
                ? W.A.getArticleURL(j.MVz.CORRUPT_INSTALLATION)
                : j.X7G.DOWNLOAD,
        );
    };
    getPlatform() {
        let e = d().os?.family;
        return null != e && /^win/i.test(e)
            ? G.PlatformTypes.WINDOWS
            : null != e && /darwin|os x/i.test(e)
              ? G.PlatformTypes.OSX
              : G.PlatformTypes.LINUX;
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
        let e = (0, r.jsx)("div", {
            children: (0, r.jsxs)("p", {
                children: [
                    B.intl.string(B.t["4tRjHC"]),
                    " ",
                    (0, r.jsx)(S.A, {
                        src: x.Ay.getURL(I.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(c.mg, { children: (0, r.jsx)("html", { className: (0, A.m)(j.NJ8.DARK) }) }),
                (0, r.jsx)(K, { type: this.getPlatform() }),
                (0, r.jsx)(Y.A, {
                    title: B.intl.string(B.t["3h+n+8"]),
                    note: e,
                    action: (0, r.jsx)(T.$, {
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
    z = n(279194),
    J = n(742821),
    Z = n(80703),
    ee = n(506774),
    et = n(736056),
    en = n(495544);
let ei = u.Ay.connectStores([et.A, en.default], () => {
    let e = en.default.getToken();
    return { token: e, hasLoadedExperiments: null != e || et.A.hasLoadedExperiments };
})((e) => {
    let { hasLoadedExperiments: t, token: n } = e;
    return null != n
        ? (0, r.jsx)(q.rd, { to: j.BVt.APP })
        : t
          ? (0, r.jsx)(q.rd, { to: j.BVt.DEFAULT_LOGGED_OUT })
          : null;
});
var er = n(549711),
    ea = n(268218),
    es = n(276267),
    e_ = n(228366),
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
let ed = new eE(e_.h, {
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
        a.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== ee.w.get(z.qx) &&
                v.Ay.supportsFeature(j.BYE.USER_DATA_CACHE) &&
                (e_.h.wait(() => e_.h.dispatch({ type: "DOMAIN_MIGRATION_START" })),
                p.A.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        e_.h.dispatch({ type: "DOMAIN_MIGRATION_FAILURE" }),
                            ec.default.track(j.HAw.DOMAIN_MIGRATED, { success: !1, has_data: !1 }, { flush: !0 });
                        return;
                    }
                    let t = Object.keys(e),
                        n = 0 !== t.length,
                        i = null != e.token,
                        r = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        a = null == r || null == eu(r) || eu(r) <= eu(ee.w.get("RTCRegionStore"));
                    n &&
                        i &&
                        !a &&
                        (ee.w.clear(),
                        t.forEach((t) => {
                            let n = e[t];
                            try {
                                ee.w.set(t, JSON.parse(n));
                            } catch (e) {}
                        })),
                        ec.default.track(
                            j.HAw.DOMAIN_MIGRATED,
                            { success: !0, current_is_newer: a, has_data: n },
                            { flush: !0 },
                        ),
                        ee.w.set(z.qx, !0),
                        p.A.userDataCache.deleteCache(),
                        window.location.reload();
                }));
        }, []),
        null
    );
}
var eA = n(247775),
    eT = n(272355);
class eS extends eT.A {
    _initialize() {
        e_.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    _terminate() {
        e_.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleConnectionOpen = (e) => {
        ((0, G.isWindows)() || (0, G.isMac)()) && eA.encryptAndStoreTokens();
    };
}
let eN = new eS();
var eO = n(463347),
    eR = n(334465),
    ef = n(464578),
    eC = n(53505),
    ep = n(492462),
    em = n(998218);
let eL = (e) => {
    if (null == e || "" === e) return null;
    try {
        let t = new URL(e);
        return em.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
    } catch (e) {
        return null;
    }
};
n(436317);
var eD = n(396574);
n(869146), n(507263), n(967347);
let eh = (0, ea.Fe)({
        createPromise: () => n.e("22062").then(n.bind(n, 224116)),
        webpackId: 224116,
        name: "UnsupportedBrowser",
    }),
    eg = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482)),
        webpackId: 987482,
        name: "DownloadApps",
    }),
    eb = (0, ea.Fe)({
        createPromise: () => n.e("84809").then(n.bind(n, 312625)),
        webpackId: 312625,
        name: "InviteProxy",
    }),
    eU = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("46391")]).then(n.bind(n, 29599)),
        webpackId: 29599,
        name: "VerifyConnectedAccount",
    }),
    eP = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("63832")]).then(n.bind(n, 744185)),
        webpackId: 744185,
        name: "VerifyConnectedAccountSuccess",
    }),
    eM = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("50033")]).then(n.bind(n, 885338)),
        webpackId: 885338,
        name: "VerifyConnectedAccountError",
    }),
    ey = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("52986")]).then(n.bind(n, 97649)),
        webpackId: 97649,
        name: "LinkConnectedAccount",
    }),
    eG = (0, ea.Fe)({
        createPromise: () => n.e("65893").then(n.bind(n, 209086)),
        webpackId: 209086,
        name: "LinkAuthorize",
    }),
    ev = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("53242"), n.e("16864")]).then(n.bind(n, 627318)),
        webpackId: 627318,
        name: "ActivateDevice",
    }),
    eB = (0, ea.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("62731"),
                n.e("34786"),
                n.e("38939"),
                n.e("93812"),
                n.e("19343"),
                n.e("11548"),
                n.e("93103"),
                n.e("24170"),
                n.e("53635"),
                n.e("44575"),
                n.e("97278"),
                n.e("8555"),
                n.e("35313"),
                n.e("49328"),
                n.e("34268"),
                n.e("69295"),
                n.e("43768"),
                n.e("98765"),
                n.e("68883"),
                n.e("44236"),
                n.e("97386"),
                n.e("92414"),
                n.e("65437"),
                n.e("84812"),
                n.e("92803"),
                n.e("99011"),
                n.e("17637"),
                n.e("43765"),
                n.e("25979"),
                n.e("33297"),
                n.e("23297"),
                n.e("95752"),
                n.e("92754"),
                n.e("51440"),
                n.e("62092"),
                n.e("27752"),
                n.e("52338"),
                n.e("49319"),
                n.e("9931"),
                n.e("35614"),
                n.e("46277"),
                n.e("93764"),
                n.e("65848"),
                n.e("21420"),
                n.e("42282"),
                n.e("81297"),
                n.e("80388"),
                n.e("67925"),
                n.e("64879"),
                n.e("8018"),
                n.e("79149"),
                n.e("77259"),
                n.e("51299"),
                n.e("49862"),
                n.e("6214"),
                n.e("92847"),
                n.e("66512"),
                n.e("51873"),
                n.e("2806"),
                n.e("10730"),
                n.e("92867"),
                n.e("89993"),
                n.e("54792"),
                n.e("28499"),
                n.e("78467"),
                n.e("41706"),
                n.e("15307"),
                n.e("90266"),
                n.e("33064"),
                n.e("60467"),
                n.e("94989"),
                n.e("76053"),
                n.e("80119"),
                n.e("12867"),
                n.e("67196"),
                n.e("29919"),
                n.e("5536"),
                n.e("17436"),
                n.e("50783"),
                n.e("44030"),
                n.e("84042"),
                n.e("75260"),
                n.e("56423"),
                n.e("77764"),
                n.e("20873"),
                n.e("31302"),
                n.e("38951"),
                n.e("1823"),
                n.e("21738"),
            ]).then(n.bind(n, 966509)),
        webpackId: 966509,
        name: "ViewsWithMainInterface",
        memo: !0,
        id: 966509,
    }),
    ew = (0, ea.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("53242"),
                n.e("93103"),
                n.e("82486"),
                n.e("84812"),
                n.e("17637"),
                n.e("33297"),
                n.e("90966"),
                n.e("16198"),
                n.e("57993"),
                n.e("47886"),
                n.e("16539"),
                n.e("1823"),
                n.e("86142"),
            ]).then(n.bind(n, 656901)),
        webpackId: 656901,
        name: "ViewsWithAuth",
    }),
    eF = (0, ea.Fe)({
        createPromise: () => n.e("13419").then(n.bind(n, 234260)),
        webpackId: 234260,
        name: "ViewsWithOAuth2",
    }),
    eV = (0, ea.Fe)({
        createPromise: () => n.e("30514").then(n.bind(n, 146088)),
        webpackId: 146088,
        name: "BrowserHandoff",
    }),
    eH = (0, ea.Fe)({
        createPromise: () => n.e("74272").then(n.bind(n, 569710)),
        webpackId: 569710,
        name: "MobileWebHandoffFallback",
    }),
    ek = (0, ea.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("62731"),
                n.e("34786"),
                n.e("38939"),
                n.e("93812"),
                n.e("19343"),
                n.e("98668"),
                n.e("93103"),
                n.e("24170"),
                n.e("53635"),
                n.e("44575"),
                n.e("97278"),
                n.e("8555"),
                n.e("35313"),
                n.e("49328"),
                n.e("34268"),
                n.e("69295"),
                n.e("43768"),
                n.e("98765"),
                n.e("68883"),
                n.e("44236"),
                n.e("97386"),
                n.e("92414"),
                n.e("65437"),
                n.e("84812"),
                n.e("92803"),
                n.e("99011"),
                n.e("17637"),
                n.e("43765"),
                n.e("25979"),
                n.e("33297"),
                n.e("23297"),
                n.e("95752"),
                n.e("92754"),
                n.e("51440"),
                n.e("62092"),
                n.e("27752"),
                n.e("52338"),
                n.e("49319"),
                n.e("9931"),
                n.e("35614"),
                n.e("46277"),
                n.e("93764"),
                n.e("65848"),
                n.e("21420"),
                n.e("42282"),
                n.e("81297"),
                n.e("80388"),
                n.e("67925"),
                n.e("64879"),
                n.e("8018"),
                n.e("77259"),
                n.e("51299"),
                n.e("49862"),
                n.e("92847"),
                n.e("66512"),
                n.e("51873"),
                n.e("2806"),
                n.e("10730"),
                n.e("92867"),
                n.e("89993"),
                n.e("54792"),
                n.e("28499"),
                n.e("41706"),
                n.e("15307"),
                n.e("90266"),
                n.e("60467"),
                n.e("94989"),
                n.e("76053"),
                n.e("80119"),
                n.e("12867"),
                n.e("83438"),
                n.e("29919"),
                n.e("17436"),
                n.e("50783"),
                n.e("44030"),
                n.e("84042"),
                n.e("77764"),
                n.e("41343"),
                n.e("84018"),
            ]).then(n.bind(n, 436405)),
        webpackId: 436405,
        name: "Overlay",
    }),
    ex = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("83518"), n.e("85216"), n.e("66708")]).then(n.bind(n, 303174)),
        webpackId: 303174,
        name: "SuspendedUserSafetyHubPage",
    }),
    eW = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("91227"), n.e("71791")]).then(n.bind(n, 125820)),
        webpackId: 125820,
        name: "QuestsLandingPage",
    }),
    eY = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("91227"), n.e("44900")]).then(n.bind(n, 589877)),
        webpackId: 589877,
        name: "QuestPreviewLandingPage",
    }),
    ej = (0, ea.Fe)({
        createPromise: () => Promise.all([n.e("34917"), n.e("81881")]).then(n.bind(n, 519716)),
        webpackId: 519716,
        name: "ConnectionsAuthorizeContinue",
    }),
    eK = (0, ea.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
    }),
    e$ = (0, ea.Fe)({
        createPromise: () => n.e("38217").then(n.bind(n, 149755)),
        webpackId: 149755,
        name: "ApplicationDirectoryGlobalDiscoveryRoutes",
    }),
    eQ = () => (0, r.jsx)(eB, {}),
    eq = new Set([
        j.BVt.LOGIN,
        j.BVt.LOGIN_HANDOFF,
        j.BVt.INVITE_LOGIN(":inviteCode"),
        j.BVt.GIFT_CODE_LOGIN(":giftCode"),
        j.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
    ]);
function eX(e, t) {
    return t ? e.filter((e) => !eq.has(e)) : e;
}
class ez extends a.Component {
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
                    : eD.VP
                      ? G.isPlatformEmbedded
                          ? (0, r.jsxs)(q.dO, {
                                children: [
                                    t ? null : (0, r.jsx)(q.qh, { path: j.BVt.ACCOUNT_STANDING, component: ex }),
                                    (0, r.jsx)(q.qh, {
                                        exact: !0,
                                        path: j.BVt.INDEX,
                                        render: () => (0, r.jsx)(ei, {}),
                                    }),
                                    (0, r.jsx)(er.A, { exact: !0, path: j.BVt.APPS, component: eg }),
                                    (0, r.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                j.BVt.LOGIN,
                                                j.BVt.REGISTER,
                                                j.BVt.INVITE(":inviteCode"),
                                                j.BVt.INVITE_LOGIN(":inviteCode"),
                                                j.BVt.GIFT_CODE(":giftCode"),
                                                j.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                j.BVt.RESET,
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    (0, r.jsx)(er.A, { path: j.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, r.jsx)(q.rd, { from: j.BVt.INVITE(""), to: j.BVt.LOGIN }),
                                    (0, r.jsx)(q.rd, { from: j.BVt.GIFT_CODE(""), to: j.BVt.LOGIN }),
                                    (0, r.jsx)(q.qh, { render: eQ }),
                                ],
                            })
                          : (0, r.jsxs)(q.dO, {
                                children: [
                                    (0, r.jsx)(er.A, {
                                        exact: !0,
                                        path: j.BVt.INDEX,
                                        render: () => (0, r.jsx)(ei, {}),
                                    }),
                                    (0, r.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                j.BVt.LOGIN_ONE_TIME,
                                                j.BVt.LOGIN,
                                                j.BVt.LOGIN_HANDOFF,
                                                j.BVt.REGISTER,
                                                j.BVt.BILLING_PREFIX,
                                                j.BVt.BILLING_PROMOTION_REDEMPTION(":code"),
                                                j.BVt.INVITE(":inviteCode"),
                                                j.BVt.INVITE_LOGIN(":inviteCode"),
                                                j.BVt.GIFT_CODE(":giftCode"),
                                                j.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                j.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                                                j.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                                                j.BVt.DISABLE_EMAIL_NOTIFICATIONS,
                                                j.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                                j.BVt.RESET,
                                                j.BVt.REPORT,
                                                j.BVt.REPORT_SECOND_LOOK,
                                                j.BVt.ACCOUNT_REVERT(":token"),
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    t
                                        ? null
                                        : (0, r.jsx)(q.qh, {
                                              path: j.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                              component: ew,
                                          }),
                                    t
                                        ? null
                                        : (0, r.jsx)(q.qh, {
                                              path: j.BVt.CHANNEL(
                                                  eO.pv.guildId(),
                                                  eO.pv.channelId({ optional: !0 }),
                                                  ":messageId?",
                                              ),
                                              component: ew,
                                          }),
                                    (0, r.jsx)(q.rd, { from: j.BVt.INVITE(""), to: j.BVt.LOGIN }),
                                    (0, r.jsx)(er.A, { path: j.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, r.jsx)(q.rd, { from: j.BVt.GIFT_CODE(""), to: j.BVt.LOGIN }),
                                    (0, r.jsx)(er.A, {
                                        path: j.BVt.QUESTS(":questId"),
                                        component: eW,
                                        impressionName: X.ImpressionNames.QUESTS_LANDING_PAGE,
                                        impressionProperties: (e) => {
                                            let { match: t } = e;
                                            return {
                                                quest_id: t?.params.questId != null ? Number(t.params.questId) : void 0,
                                            };
                                        },
                                    }),
                                    (0, r.jsx)(er.A, { path: j.BVt.QUEST_PREVIEW(":questId"), component: eY }),
                                    (0, r.jsx)(er.A, { path: j.BVt.HANDOFF, component: eV }),
                                    (0, r.jsx)(er.A, { path: j.BVt.MOBILE_WEB_HANDOFF, component: eH }),
                                    (0, r.jsx)(er.A, { path: j.BVt.CONNECTION_LINK(":type"), component: ey }),
                                    (0, r.jsx)(er.A, { path: j.BVt.CONNECTION_LINK_AUTHORIZE(":type"), component: eG }),
                                    (0, r.jsx)(er.A, { path: j.BVt.ACTIVATE, component: ev }),
                                    (0, r.jsx)(er.A, { path: j.BVt.ACTIVATE_HANDOFF, component: ev }),
                                    (0, r.jsx)(er.A, {
                                        path: j.BVt.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                        component: ej,
                                    }),
                                    (0, r.jsx)(er.A, { path: j.BVt.CONNECTIONS_SUCCESS(":type"), component: eP }),
                                    (0, r.jsx)(er.A, { path: j.BVt.CONNECTIONS_ERROR(":type"), component: eM }),
                                    (0, r.jsx)(er.A, { path: j.BVt.CONNECTIONS(":type"), component: eU }),
                                    (0, r.jsx)(er.A, {
                                        path: j.BVt.DOWNLOAD_QR_CODE_REDIRECT,
                                        render: () => {
                                            let e = ec.default.getSuperProperties()?.os,
                                                t = (0, Q.parse)((window.location.search ?? "").substr(1)),
                                                n = t.referring_location?.toString();
                                            return (
                                                ("iOS" === e || "Android" === e) &&
                                                    ec.default.track(j.HAw.DOWNLOAD_APP, {
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
                                    (0, r.jsx)(er.A, {
                                        path: j.BVt.OPEN_APP_FROM_EMAIL,
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
                                                return (0, r.jsx)(q.rd, {
                                                    to:
                                                        null != i.desktop
                                                            ? `${i.desktop.pathname}${i.desktop.search}`
                                                            : j.BVt.APP,
                                                });
                                            {
                                                let e = (0, eC.b$)("app_open_from_email", n, i.mobile),
                                                    t = (0, J.X7)(e);
                                                null != t &&
                                                    ec.default.track(j.HAw.DEEP_LINK_CLICKED, {
                                                        fingerprint: (0, Z.v)(t.fingerprint),
                                                        attempt_id: t.attemptId,
                                                        source: t.utmSource,
                                                        destination: null != i.mobile ? i.mobile.toString() : null,
                                                    }),
                                                    (window.location.href = e);
                                            }
                                        },
                                    }),
                                    (0, r.jsx)(q.rd, {
                                        from: j.BVt.CONNECT_AUTHORIZE,
                                        to: { ...location, pathname: j.BVt.OAUTH2_AUTHORIZE },
                                    }),
                                    (0, r.jsx)(q.qh, {
                                        path: [
                                            j.BVt.OAUTH2_AUTHORIZED,
                                            j.BVt.OAUTH2_AUTHORIZE,
                                            j.BVt.OAUTH2_ERROR,
                                            j.BVt.OAUTH2_WHITELIST_ACCEPT,
                                        ],
                                        component: eF,
                                    }),
                                    t ? null : (0, r.jsx)(q.qh, { path: [j.BVt.ACCOUNT_STANDING], component: ex }),
                                    t ? null : (0, r.jsx)(q.qh, { path: [j.BVt.APPLICATION_DIRECTORY], component: eK }),
                                    t ? null : (0, r.jsx)(q.qh, { path: [j.BVt.GLOBAL_DISCOVERY_APPS], component: e$ }),
                                    (0, r.jsx)(q.qh, { render: eQ }),
                                    (0, r.jsx)(q.rd, { from: j.BVt.ACCOUNT_REVERT(""), to: j.BVt.LOGIN }),
                                ],
                            })
                      : (0, r.jsx)(q.dO, { children: (0, r.jsx)(er.A, { component: eh }) })),
            (0, r.jsxs)(es.A, {
                skipsSettingDefaultPageTitle: i,
                children: [
                    e,
                    G.isPlatformEmbedded && (n === el.NOT_STARTED || n === el.IN_PROGRESS) && !0 !== ee.w.get(z.qx)
                        ? (0, r.jsx)(eI, {})
                        : null,
                ],
            })
        );
    }
}
let eJ = u.Ay.connectStores(
    [en.default, ed],
    () => ({ isAuthenticated: en.default.isAuthenticated(), migrationStatus: ed.getMigrationStatus() }),
    { forwardRef: !0 },
)(function (e) {
    let t = (function () {
        let { pathname: e } = (0, q.zy)();
        return null != (0, eR.B)(e, { path: j.BVt.APPLICATION_DIRECTORY });
    })();
    return (0, r.jsx)(ez, { ...e, skipsSettingDefaultPageTitle: t });
});
class eZ extends eT.A {
    _initialize() {
        G.isPlatformEmbedded &&
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
                    ? e.name === j.HAw.CDM_LOAD_STATUS || e.name === j.HAw.CDM_READY_COMPLETE
                        ? ec.default.track(e.name, e.data)
                        : console.log(`[analytics] received unknown cdm analytic event ${e.name}`)
                    : "desktop_tti" === e.type
                      ? e.name === j.HAw.DESKTOP_TTI
                          ? ec.default.track(e.name, e.data)
                          : console.log(`[analytics] received unknown desktop_tti analytic event ${e.name}`)
                      : "desktop_tti_v2" === e.type &&
                        (e.name === j.HAw.DESKTOP_TTI_V2
                            ? ec.default.track(e.name, e.data)
                            : console.log(`[analytics] received unknown desktop_tti_v2 analytic event ${e.name}`));
            });
    }
}
let e0 = new eZ();
var e1 = n(125318),
    e2 = n(579872);
class e3 extends eT.A {
    _initialize() {
        e_.h.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    _terminate() {
        e_.h.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission);
    }
    handlePermission = (e) => {
        let { kind: t, granted: n } = e,
            i = "Firefox" === d().name ? j.MVz.ENABLE_MIC_FIREFOX : j.MVz.ENABLE_MIC_CHROME;
        if (!n) {
            let e = "audio" !== t;
            e2.A.show({
                title: e ? B.intl.string(B.t.OqloH8) : B.intl.string(B.t["kI+OOV"]),
                body: e ? B.intl.string(B.t.l3P7K0) : B.intl.string(B.t.l3jwOd),
                onConfirm: () => window.open(W.A.getArticleURL(i), "_blank"),
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
function e8(e) {
    return "host" === e;
}
class e4 {
    _installingModules = {};
    _downloadingModules = {};
    _report;
    constructor() {
        this._report = e5();
    }
    handleDownloadingModule(e) {
        if (!e8(e.name)) {
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
        if (e8(e.name)) return;
        let t = this._downloadingModules[e.name];
        if (null == t)
            return void console.warn("Downloaded complete without corresponding downloading event for module ", e.name);
        let n = t.foreground ? "foreground" : "background",
            i = `${n}_download_ms_${e.name}`,
            r = `${n}_bytes_${e.name}`,
            a = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6)),
            s = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        t.foreground
            ? ((this._report.foreground_download_ms_total += a), (this._report.foreground_bytes_total += s))
            : ((this._report.background_download_ms_total += a), (this._report.background_bytes_total += s)),
            this.incrementReportField(i, a),
            this.incrementReportField(r, s),
            delete this._downloadingModules[e.name];
    }
    handleInstallingModule(e) {
        if (!e8(e.name)) {
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
        if (e8(e.name)) return;
        let t = this._installingModules[e.name];
        if (null == t) return;
        let n = t.foreground ? "foreground" : "background",
            i = `${n}_install_ms_${e.name}`,
            r = `min_version_${e.name}`,
            a = `max_version_${e.name}`,
            s = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1e6));
        t.foreground
            ? (this._report.foreground_install_ms_total += s)
            : (this._report.background_install_ms_total += s),
            this.incrementReportField(i, s),
            this.setReportFieldMinimum(r, t.oldVersion),
            e.succeeded
                ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++,
                  this.setReportFieldMaximum(a, t.newVersion))
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
class e7 extends eT.A {
    _tracker = new e4();
    _initialize() {
        G.isPlatformEmbedded &&
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
                ? e.name === j.HAw.UPDATER_METRICS_DOWNLOAD ||
                  e.name === j.HAw.UPDATER_METRICS_INSTALL ||
                  e.name === j.HAw.UPDATER_METRICS_COMBINED ||
                  e.name === j.HAw.UPDATER_METRICS_TRANSITION_STATUS
                    ? t && ec.default.track(e.name, e.data)
                    : console.warn(`Unknown updater analytic event ${e.name}`)
                : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() &&
                (ec.default.track(j.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
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
    tr = n(309010);
n(977997), n(536194), n(321034), n(574172);
var ta = n(8917),
    ts = n(38405),
    t_ = n(963169),
    tl = n(532624),
    to = n(650583);
function tE(e, t) {
    return !(e === j.TGd.BROWSER && tl.Ay.hasKeybind(to.zY.MOUSE_BUTTON, t));
}
let td = new (class {
    initialize() {
        (0, G.isDesktop)() &&
            (v.Ay.on("NAVIGATE_BACK", (e, t) => {
                tE(t, to.RX.Back) && (0, t_.OE)("native");
            }),
            v.Ay.on("NAVIGATE_FORWARD", (e, t) => {
                tE(t, to.RX.Forward) && (0, t_.Qb)("native");
            }));
    }
})();
var tc = n(812729),
    tu = n.n(tc),
    tI = n(735438),
    tA = n.n(tI),
    tT = n(141931),
    tS = n(827343),
    tN = n(405018),
    tO = n(704877),
    tR = n(675991),
    tf = n(442353);
class tC extends eT.A {
    callbackActions = {
        [tT.dv.VIDEO]: () => {
            ti.Ay.isVideoEnabled() ? tS.A.setVideoEnabled(!1) : (0, tf.A)(() => tS.A.setVideoEnabled(!0), j.BRT.APP);
        },
        [tT.dv.MUTE]: () => tS.A.toggleSelfMute({ location: "Thumbar" }),
        [tT.dv.DEAFEN]: () => tS.A.toggleSelfDeaf({ location: "Thumbar" }),
        [tT.dv.DISCONNECT]: () => te.default.disconnect(),
    };
    isSupported = (0, G.isMac)() || (0, G.isWindows)();
    prevButtons = [];
    _initialize() {
        this.isSupported &&
            (e_.h.subscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            e_.h.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            e_.h.subscribe("START_SESSION", this.handleViewUpdate),
            e_.h.subscribe("CONNECTION_OPEN", this.handleViewUpdate),
            e_.h.subscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            e_.h.subscribe("CALL_CREATE", this.handleViewUpdate),
            e_.h.subscribe("CALL_UPDATE", this.handleViewUpdate),
            e_.h.subscribe("CALL_DELETE", this.handleViewUpdate),
            e_.h.subscribe("CHANNEL_DELETE", this.handleViewUpdate),
            e_.h.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            e_.h.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            e_.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            e_.h.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            e_.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate),
            v.Ay.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)));
    }
    _terminate() {
        this.isSupported &&
            (e_.h.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate),
            e_.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate),
            e_.h.unsubscribe("START_SESSION", this.handleViewUpdate),
            e_.h.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate),
            e_.h.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate),
            e_.h.unsubscribe("CALL_CREATE", this.handleViewUpdate),
            e_.h.unsubscribe("CALL_UPDATE", this.handleViewUpdate),
            e_.h.unsubscribe("CALL_DELETE", this.handleViewUpdate),
            e_.h.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate),
            e_.h.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate),
            e_.h.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate),
            e_.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate),
            e_.h.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate),
            e_.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate));
    }
    buttonClicked = (e) => {
        e.buttonName in this.callbackActions
            ? this.callbackActions[e.buttonName]()
            : console.error(`ThumbarButtonsManager: Unknown callback eventName: "${e.buttonName}"`, e);
    };
    handleViewUpdate = tA().debounce(() => {
        let e = tr.A.getVoiceChannelId();
        if (null == e) return void this.setThumbarButtons([]);
        let t = ti.Ay.isSelfMute(),
            n = ti.Ay.isSelfDeaf(),
            i = ti.Ay.isVideoEnabled(),
            r = ti.Ay.isVideoAvailable(),
            a = tn.A.getChannel(e),
            s = null == a || (0, tO.r)(a),
            { reachedLimit: _, limit: l } = null != a ? (0, tN.M)(a) : { reachedLimit: void 0, limit: void 0 },
            o = (0, tR.Q)({
                enabled: i,
                join: !1,
                channel: a,
                cameraUnavailable: !r,
                hasPermission: s,
                channelLimit: l,
                channelLimitReached: _,
            });
        this.setThumbarButtons([
            { name: tT.dv.VIDEO, active: !i, tooltip: o, flags: r ? [] : ["disabled"] },
            { name: tT.dv.MUTE, active: t, tooltip: t ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945) },
            { name: tT.dv.DEAFEN, active: n, tooltip: n ? B.intl.string(B.t["2US872"]) : B.intl.string(B.t.wjcRFX) },
            { name: tT.dv.DISCONNECT, active: !0, tooltip: B.intl.string(B.t["6vrfgt"]) },
        ]);
    }, 100);
    setThumbarButtons(e) {
        tu()(this.prevButtons, e) || ((this.prevButtons = e), v.Ay.setThumbarButtons(e));
    }
}
let tp = new tC();
var tm = n(200330),
    tL = n(350723),
    tD = n(346142),
    th = n(451988),
    tg = n(664932),
    tb = n(320989);
function tU(e) {
    let { children: t } = e;
    return (
        a.useEffect(() => (tb.A.initialize(), () => tb.A.cleanup()), []),
        (0, r.jsx)(c.vd, {
            children: (0, r.jsx)(q.Ix, { history: (0, tt.JK)(), children: (0, r.jsx)(tg.Kl, { children: t }) }),
        })
    );
}
var tP = n(164942);
n(321073);
var tM = n(306173),
    ty = n(279234),
    tG = n(626584),
    tv = n(548965);
let tB = new tG.A("libdiscore"),
    tw = !1;
async function tF() {
    if (!tw) {
        try {
            let e;
            await (0, ty.P)();
            let t = (0, tM.t7)(6, 7);
            tB.info("The answer for life the universe and everything is:", t),
                (e = []),
                tv.ML.forEach((t) => {
                    let n = t.getEnabledFeatureName();
                    null != n && e.push(n);
                }),
                ec.default.track(j.HAw.LIBDISCORE_LOADED, { success: !0, experimental_features: e });
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
                ec.default.track(j.HAw.LIBDISCORE_LOADED, { success: !1, error: i });
            })(e);
        }
        tw = !0;
    }
}
var tV = n(111162),
    tH = n(343166),
    tk = n(621466),
    tx = n(625494),
    tW = n(654108),
    tY = n(927813),
    tj = n(316501),
    tK = n(708281);
tV.default.cssDebuggingEnabled && n.e("7473").then(n.t.bind(n, 17960, 19)), (0, tj.pF)();
let t$ = 5 * tY.A.Millis.MINUTE,
    tQ = document.getElementById("app-mount");
l()(null != tQ, "Could not find app-mount"), (tQ.className = __OVERLAY__ ? "" : tH.l);
let tq = (0, s.createRoot)(tQ),
    tX = {
        "/oauth2/authorize": function (e) {
            let t = e?.get("client_id"),
                n = e?.get("scope")?.split(" "),
                i = e?.get("state"),
                r = e?.get("redirect_uri"),
                a = e?.get("response_type"),
                s = e?.get("nonce") ?? void 0,
                _ = e?.get("code_challenge") ?? void 0,
                l = e?.get("code_challenge_method") ?? void 0;
            return (
                null == t ||
                null == n ||
                null == r ||
                null == a ||
                ((0, tm.openOAuth2Modal)({
                    clientId: t,
                    scopes: n,
                    redirectUri: r,
                    state: i ?? void 0,
                    responseType: a,
                    nonce: s,
                    codeChallenge: _,
                    codeChallengeMethod: l,
                }),
                !0)
            );
        },
        "/one-time": function (e) {
            let t = e?.get("token");
            return null != t && ((0, tK.N)({ token: t }), !0);
        },
    },
    tz = (e) => tq.render((0, r.jsx)(tP.e, { children: (0, r.jsx)(tU, { children: (0, r.jsx)(e, {}) }) }));
if (null != p.A) {
    p.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (ts.A.captureCrash(e), e);
        });
    }),
        v.Ay.appLoaded();
    let e = p.A.app.getVersion(),
        t = p.A.app.getBuildNumber(),
        n = p.A.app.getModuleVersions();
    ts.A.setExtra({ hostVersion: e, moduleVersions: n }), ts.A.setTags({ nativeBuildNumber: t?.toString() ?? "" });
    let i = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => `${e}: ${n[e]}`)
        .join(", ");
    new tG.A().log(`[NATIVE INFO] host ${e}, modules: ${i}, build: ${t}`),
        v.Ay.pauseFrameEvictor(),
        v.Ay.initializeExitHook(),
        v.Ay.initializeWERHandler();
}
if (((0, tD.M)(window), __OVERLAY__)) tz(() => (0, r.jsx)(o.W, { children: (0, r.jsx)(ek, {}) }));
else if (null != window.require && null == window.DiscordNative) tz($);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), G.isPlatformEmbedded)) {
        (window.onbeforeunload = () => v.Ay.beforeUnload()),
            v.Ay.on("HELP_OPEN", () => window.open(W.A.getCommunityURL()));
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
        ta.A.init(),
        {
            init() {
                document.addEventListener("paste", (e) => {
                    (0, tW.A)((0, tk.BF)(e)) ||
                        tx._.dispatchToLastSubscribed(j.jej.GLOBAL_CLIPBOARD_PASTE, { event: e });
                });
            },
        }.init(),
        e6.initialize(),
        td.initialize(),
        tp.initialize(),
        tF(),
        tz(() => (0, r.jsx)(o.W, { children: (0, r.jsx)(eJ, {}) }));
}
