n(323874), n(14289), n(35956), n(142703);
var i,
    a = n(627968);
n(366093);
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
    f = n(939249),
    R = n(43990),
    C = n(942857),
    D = n(77729),
    p = n(313961),
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
            _ = (0, a.jsx)(f.D, {
                className: w.d1,
                onClick: () => v.Ay.close(n),
                "aria-label": B.intl.string(B.t.ZdNUj2),
                tabIndex: -1,
                children: (0, a.jsx)(h.A, {}),
            }),
            s = (0, a.jsx)(f.D, {
                className: w.T0,
                onClick: (e) => F(n, e),
                "aria-label": B.intl.string(B.t.G1u0hK),
                tabIndex: -1,
                children: (0, a.jsx)(U.A, {}),
            }),
            l = (0, a.jsx)(f.D, {
                className: w.T0,
                onClick: () => v.Ay.minimize(n),
                "aria-label": B.intl.string(B.t.CxOC4U),
                tabIndex: -1,
                children: (0, a.jsx)(M.A, {}),
            }),
            o = (0, a.jsxs)(a.Fragment, { children: [_, s, l] });
        return (0, a.jsx)(R.N, {
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
        return (0, a.jsx)(R.N, {
            theme: r,
            children: (e) =>
                (0, a.jsxs)(f.D, {
                    className: O()(i ? w.zY : w.kE, t ? w.in : w.Vn, e, { [w.N_]: !_ }),
                    onDoubleClick: () => v.Ay.maximize(n),
                    tabIndex: -1,
                    children: [
                        D.A.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? s
                            : (0, a.jsxs)("div", {
                                  className: w.lY,
                                  children: [
                                      (0, a.jsx)(f.D, {
                                          className: w.gV,
                                          onClick: () => v.Ay.close(n),
                                          "aria-label": B.intl.string(B.t.ZdNUj2),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(b, { color: "#4c0000" }),
                                      }),
                                      (0, a.jsx)(f.D, {
                                          className: w.wv,
                                          onClick: () => v.Ay.minimize(n),
                                          "aria-label": B.intl.string(B.t.CxOC4U),
                                          tabIndex: -1,
                                          children: (0, a.jsx)(G.A, { color: "#975500" }),
                                      }),
                                      (0, a.jsx)(f.D, {
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
    j = n(690521),
    Y = n(975571),
    W = n(721668),
    x = n(652215);
let K = u.Ay.connectStores([k.A], () => ({ focused: k.A.isFocused() }))(function (e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: r = !1, themeOverride: _ } = e,
        s = (0, L.Us)(),
        l = (0, u.bG)([p.A], () => p.A.isFullscreenInContext(s)),
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
                ? Y.A.getArticleURL(x.MVz.CORRUPT_INSTALLATION)
                : x.X7G.DOWNLOAD,
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
                        src: j.Ay.getURL(I.A.convert.fromCodePoint("1f44c")),
                        emojiName: ":ok_hand:",
                        animated: !1,
                    }),
                ],
            }),
        });
        return (0, a.jsxs)(r.Fragment, {
            children: [
                (0, a.jsx)(c.mg, { children: (0, a.jsx)("html", { className: (0, T.m)(x.NJ8.DARK) }) }),
                (0, a.jsx)(K, { type: this.getPlatform() }),
                (0, a.jsx)(W.A, {
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
    z = n(279194),
    Z = n(742821),
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
        ? (0, a.jsx)(q.rd, { to: x.BVt.APP })
        : t
          ? (0, a.jsx)(q.rd, { to: x.BVt.DEFAULT_LOGGED_OUT })
          : null;
});
var ea = n(549711),
    er = n(268218),
    e_ = n(144491),
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
                !0 !== ee.w.get(z.qx) &&
                v.Ay.supportsFeature(x.BYE.USER_DATA_CACHE) &&
                (es.h.wait(() => es.h.dispatch({ type: "DOMAIN_MIGRATION_START" })),
                D.A.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        es.h.dispatch({ type: "DOMAIN_MIGRATION_FAILURE" }),
                            ec.default.track(x.HAw.DOMAIN_MIGRATED, { success: !1, has_data: !1 }, { flush: !0 });
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
                            x.HAw.DOMAIN_MIGRATED,
                            { success: !0, current_is_newer: r, has_data: n },
                            { flush: !0 },
                        ),
                        ee.w.set(z.qx, !0),
                        D.A.userDataCache.deleteCache(),
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
    ef = n(334465),
    eR = n(464578),
    eC = n(53505),
    eD = n(492462),
    ep = n(998218);
let eL = (e) => {
    if (null == e || "" === e) return null;
    try {
        let t = new URL(e);
        return ep.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
    } catch (e) {
        return null;
    }
};
n(436317);
var em = n(396574);
n(869146), n(507263), n(967347);
let eh = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("14076"), n.e("22062")]).then(n.bind(n, 224116)),
        webpackId: 224116,
        name: "UnsupportedBrowser",
    }),
    eg = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("75058"), n.e("44602"), n.e("25280")]).then(n.bind(n, 987482)),
        webpackId: 987482,
        name: "DownloadApps",
    }),
    eb = (0, er.Fe)({
        createPromise: () => n.e("84809").then(n.bind(n, 312625)),
        webpackId: 312625,
        name: "InviteProxy",
    }),
    eU = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("22323"), n.e("34917"), n.e("96891"), n.e("79259"), n.e("20705"), n.e("46391")]).then(
                n.bind(n, 29599),
            ),
        webpackId: 29599,
        name: "VerifyConnectedAccount",
    }),
    eP = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("22323"), n.e("34917"), n.e("96891"), n.e("63832")]).then(n.bind(n, 744185)),
        webpackId: 744185,
        name: "VerifyConnectedAccountSuccess",
    }),
    eM = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("22323"), n.e("34917"), n.e("96891"), n.e("79259"), n.e("72414")]).then(n.bind(n, 885338)),
        webpackId: 885338,
        name: "VerifyConnectedAccountError",
    }),
    eG = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("22323"),
                n.e("34917"),
                n.e("36335"),
                n.e("96891"),
                n.e("79259"),
                n.e("20705"),
                n.e("46391"),
                n.e("52986"),
            ]).then(n.bind(n, 97649)),
        webpackId: 97649,
        name: "LinkConnectedAccount",
    }),
    ey = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("98965"), n.e("36335"), n.e("68518"), n.e("71821"), n.e("65893")]).then(n.bind(n, 209086)),
        webpackId: 209086,
        name: "LinkAuthorize",
    }),
    ev = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("23740"),
                n.e("9351"),
                n.e("40841"),
                n.e("13836"),
                n.e("95429"),
                n.e("29835"),
                n.e("98965"),
                n.e("48370"),
                n.e("38589"),
                n.e("36335"),
                n.e("29624"),
                n.e("68518"),
                n.e("64610"),
                n.e("44861"),
                n.e("71821"),
                n.e("16864"),
            ]).then(n.bind(n, 627318)),
        webpackId: 627318,
        name: "ActivateDevice",
    }),
    eB = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("25738"),
                n.e("22604"),
                n.e("40841"),
                n.e("75058"),
                n.e("3424"),
                n.e("54333"),
                n.e("45235"),
                n.e("19415"),
                n.e("7276"),
                n.e("92652"),
                n.e("78029"),
                n.e("81788"),
                n.e("57948"),
                n.e("13709"),
                n.e("77044"),
                n.e("63397"),
                n.e("59204"),
                n.e("97023"),
                n.e("64911"),
                n.e("43407"),
                n.e("35392"),
                n.e("22810"),
                n.e("14326"),
                n.e("81280"),
                n.e("72838"),
                n.e("60049"),
                n.e("23313"),
                n.e("24211"),
                n.e("41475"),
                n.e("79542"),
                n.e("13044"),
                n.e("84615"),
                n.e("54718"),
                n.e("5036"),
                n.e("97271"),
                n.e("22513"),
                n.e("32442"),
                n.e("71934"),
                n.e("86483"),
                n.e("31632"),
                n.e("86821"),
                n.e("25568"),
                n.e("32260"),
                n.e("79249"),
                n.e("5432"),
                n.e("51402"),
                n.e("38123"),
                n.e("97137"),
                n.e("20524"),
                n.e("92164"),
                n.e("40792"),
                n.e("50971"),
                n.e("92510"),
                n.e("83919"),
                n.e("8672"),
                n.e("89262"),
                n.e("52370"),
                n.e("81579"),
                n.e("45733"),
                n.e("82679"),
                n.e("48476"),
                n.e("37777"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("15380"),
                n.e("62731"),
                n.e("34786"),
                n.e("41567"),
                n.e("73924"),
                n.e("65658"),
                n.e("44392"),
                n.e("22588"),
                n.e("87440"),
                n.e("88941"),
                n.e("34530"),
                n.e("61379"),
                n.e("62680"),
                n.e("43039"),
                n.e("98125"),
                n.e("18441"),
                n.e("21825"),
                n.e("69354"),
                n.e("28154"),
                n.e("48804"),
                n.e("88077"),
                n.e("80527"),
                n.e("85502"),
                n.e("18401"),
                n.e("13681"),
                n.e("53729"),
                n.e("21690"),
                n.e("32551"),
                n.e("31644"),
                n.e("52367"),
                n.e("23353"),
                n.e("36561"),
                n.e("86949"),
                n.e("50015"),
                n.e("77998"),
                n.e("31145"),
                n.e("11523"),
                n.e("66900"),
                n.e("44695"),
                n.e("10004"),
                n.e("55314"),
                n.e("29177"),
                n.e("44376"),
                n.e("9915"),
                n.e("83429"),
                n.e("96905"),
                n.e("33902"),
                n.e("70653"),
                n.e("31825"),
                n.e("54527"),
                n.e("72535"),
                n.e("76195"),
                n.e("51485"),
                n.e("1177"),
                n.e("26490"),
                n.e("76170"),
                n.e("32817"),
                n.e("51243"),
                n.e("18943"),
                n.e("89094"),
                n.e("84103"),
                n.e("99999"),
                n.e("5501"),
                n.e("28561"),
                n.e("96123"),
                n.e("27168"),
                n.e("39038"),
                n.e("36320"),
                n.e("77245"),
                n.e("8891"),
                n.e("31549"),
                n.e("20320"),
                n.e("43919"),
                n.e("31390"),
                n.e("57906"),
                n.e("37622"),
                n.e("45421"),
                n.e("44265"),
                n.e("99141"),
                n.e("21435"),
                n.e("98793"),
                n.e("92731"),
                n.e("25990"),
                n.e("33584"),
                n.e("63095"),
                n.e("68647"),
                n.e("67657"),
                n.e("64615"),
                n.e("88017"),
                n.e("87225"),
                n.e("12373"),
                n.e("75134"),
                n.e("84967"),
                n.e("23216"),
                n.e("30770"),
                n.e("56212"),
                n.e("3458"),
                n.e("62827"),
                n.e("73547"),
                n.e("32823"),
                n.e("34691"),
                n.e("99593"),
                n.e("61935"),
                n.e("54975"),
                n.e("62168"),
                n.e("55602"),
                n.e("52463"),
                n.e("13499"),
                n.e("91381"),
                n.e("93158"),
                n.e("10034"),
                n.e("72832"),
                n.e("95183"),
                n.e("73500"),
                n.e("21570"),
                n.e("35403"),
                n.e("53526"),
                n.e("29375"),
                n.e("48778"),
                n.e("5895"),
                n.e("62355"),
                n.e("93708"),
                n.e("71482"),
                n.e("80565"),
                n.e("49697"),
                n.e("10745"),
                n.e("77265"),
                n.e("71133"),
                n.e("77084"),
                n.e("96565"),
                n.e("37687"),
                n.e("95093"),
                n.e("62615"),
                n.e("48900"),
                n.e("60177"),
                n.e("21976"),
                n.e("1006"),
                n.e("79707"),
                n.e("99518"),
                n.e("55577"),
                n.e("59880"),
                n.e("78412"),
                n.e("9662"),
                n.e("80239"),
                n.e("54791"),
                n.e("61268"),
                n.e("255"),
                n.e("68479"),
                n.e("39286"),
                n.e("31445"),
                n.e("19871"),
                n.e("24170"),
                n.e("33134"),
                n.e("14461"),
                n.e("25486"),
                n.e("18024"),
                n.e("25279"),
                n.e("20858"),
                n.e("77473"),
                n.e("28152"),
                n.e("14224"),
                n.e("72883"),
                n.e("49644"),
                n.e("35996"),
                n.e("18997"),
                n.e("49520"),
                n.e("65826"),
                n.e("63618"),
                n.e("42204"),
                n.e("96553"),
                n.e("78195"),
                n.e("32326"),
                n.e("16916"),
                n.e("83972"),
                n.e("36149"),
                n.e("72877"),
                n.e("80007"),
                n.e("24240"),
                n.e("21856"),
                n.e("49205"),
                n.e("72963"),
                n.e("22261"),
                n.e("65617"),
                n.e("27323"),
                n.e("49181"),
                n.e("83420"),
                n.e("78050"),
                n.e("72072"),
                n.e("20382"),
                n.e("21060"),
                n.e("74021"),
                n.e("74907"),
                n.e("967"),
                n.e("71217"),
                n.e("81328"),
                n.e("98725"),
                n.e("97069"),
                n.e("47018"),
                n.e("20973"),
                n.e("40175"),
                n.e("607"),
                n.e("63333"),
                n.e("43746"),
                n.e("86467"),
                n.e("78434"),
                n.e("34967"),
                n.e("34268"),
                n.e("93461"),
                n.e("90554"),
                n.e("8480"),
                n.e("19475"),
                n.e("31638"),
                n.e("37588"),
                n.e("36150"),
                n.e("44385"),
                n.e("94138"),
                n.e("99011"),
                n.e("64072"),
                n.e("6809"),
                n.e("38042"),
                n.e("28752"),
                n.e("2329"),
                n.e("6142"),
                n.e("49345"),
                n.e("11471"),
                n.e("40248"),
                n.e("49333"),
                n.e("11295"),
                n.e("14396"),
                n.e("22067"),
                n.e("30474"),
                n.e("55266"),
                n.e("60178"),
                n.e("14479"),
                n.e("21574"),
                n.e("65065"),
                n.e("29961"),
                n.e("84820"),
                n.e("25241"),
                n.e("14728"),
                n.e("49490"),
                n.e("90779"),
                n.e("10142"),
                n.e("44912"),
                n.e("18792"),
                n.e("61437"),
                n.e("36674"),
                n.e("29852"),
                n.e("70008"),
                n.e("61099"),
                n.e("98254"),
                n.e("2412"),
                n.e("4551"),
                n.e("27752"),
                n.e("82456"),
                n.e("20134"),
                n.e("45724"),
                n.e("59791"),
                n.e("96680"),
                n.e("36163"),
                n.e("24689"),
                n.e("83799"),
                n.e("63874"),
                n.e("68214"),
                n.e("98425"),
                n.e("88881"),
                n.e("3168"),
                n.e("33973"),
                n.e("86779"),
                n.e("93513"),
                n.e("91139"),
                n.e("25660"),
                n.e("95841"),
                n.e("42865"),
                n.e("37801"),
                n.e("72239"),
                n.e("53203"),
                n.e("20491"),
                n.e("39353"),
                n.e("9793"),
                n.e("2098"),
                n.e("84794"),
                n.e("17859"),
                n.e("17810"),
                n.e("21750"),
                n.e("37479"),
                n.e("48725"),
                n.e("95067"),
                n.e("97116"),
                n.e("79149"),
                n.e("15086"),
                n.e("6996"),
                n.e("78"),
                n.e("6339"),
                n.e("1719"),
                n.e("28916"),
                n.e("93421"),
                n.e("19623"),
                n.e("55552"),
                n.e("72238"),
                n.e("24553"),
                n.e("12755"),
                n.e("58838"),
                n.e("19346"),
                n.e("4098"),
                n.e("47339"),
                n.e("69638"),
                n.e("58289"),
                n.e("57060"),
                n.e("43267"),
                n.e("17487"),
                n.e("42455"),
                n.e("91589"),
                n.e("80112"),
                n.e("35653"),
                n.e("37715"),
                n.e("4727"),
                n.e("9763"),
                n.e("53969"),
                n.e("20346"),
                n.e("21041"),
                n.e("61849"),
                n.e("30066"),
                n.e("38589"),
                n.e("78814"),
                n.e("54792"),
                n.e("58581"),
                n.e("73084"),
                n.e("98321"),
                n.e("64526"),
                n.e("92097"),
                n.e("63360"),
                n.e("76237"),
                n.e("13337"),
                n.e("17583"),
                n.e("71939"),
                n.e("10711"),
                n.e("80559"),
                n.e("65088"),
                n.e("53229"),
                n.e("34418"),
                n.e("76953"),
                n.e("10480"),
                n.e("35445"),
                n.e("14940"),
                n.e("70152"),
                n.e("72163"),
                n.e("60439"),
                n.e("98279"),
                n.e("62393"),
                n.e("86197"),
                n.e("18126"),
                n.e("42664"),
                n.e("68208"),
                n.e("25717"),
                n.e("7926"),
                n.e("44602"),
                n.e("63309"),
                n.e("20516"),
                n.e("93609"),
                n.e("88379"),
                n.e("15046"),
                n.e("98357"),
                n.e("23707"),
                n.e("68518"),
                n.e("71180"),
                n.e("85160"),
                n.e("43750"),
                n.e("70841"),
                n.e("3370"),
                n.e("93368"),
                n.e("99487"),
                n.e("61772"),
                n.e("5536"),
                n.e("87477"),
                n.e("13596"),
                n.e("48734"),
                n.e("55458"),
                n.e("84846"),
                n.e("86256"),
                n.e("8694"),
                n.e("78778"),
                n.e("73746"),
                n.e("19705"),
                n.e("71821"),
                n.e("21489"),
                n.e("12091"),
                n.e("36166"),
                n.e("82911"),
                n.e("13085"),
                n.e("90797"),
                n.e("58469"),
                n.e("79259"),
                n.e("30295"),
                n.e("29880"),
                n.e("44030"),
                n.e("63238"),
                n.e("25280"),
                n.e("37068"),
                n.e("20891"),
                n.e("98006"),
                n.e("27774"),
                n.e("48672"),
                n.e("99126"),
                n.e("51778"),
                n.e("86456"),
                n.e("50163"),
                n.e("93016"),
                n.e("78658"),
                n.e("93265"),
                n.e("21226"),
                n.e("7242"),
                n.e("20578"),
                n.e("42486"),
                n.e("31302"),
                n.e("25281"),
                n.e("92837"),
                n.e("72780"),
                n.e("22220"),
                n.e("28529"),
                n.e("67497"),
                n.e("52906"),
                n.e("87313"),
                n.e("80959"),
                n.e("64523"),
                n.e("51776"),
                n.e("73169"),
                n.e("21738"),
            ]).then(n.bind(n, 399233)),
        webpackId: 399233,
        name: "ViewsWithMainInterface",
        memo: !0,
        id: 399233,
    }),
    ew = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("80413"),
                n.e("45235"),
                n.e("63397"),
                n.e("60049"),
                n.e("61207"),
                n.e("80760"),
                n.e("40841"),
                n.e("27724"),
                n.e("28127"),
                n.e("25738"),
                n.e("84580"),
                n.e("22810"),
                n.e("5036"),
                n.e("54333"),
                n.e("97271"),
                n.e("22513"),
                n.e("13709"),
                n.e("32442"),
                n.e("75058"),
                n.e("54718"),
                n.e("71934"),
                n.e("92652"),
                n.e("86483"),
                n.e("31632"),
                n.e("86821"),
                n.e("25568"),
                n.e("32260"),
                n.e("7276"),
                n.e("72823"),
                n.e("57948"),
                n.e("74275"),
                n.e("23740"),
                n.e("56888"),
                n.e("20969"),
                n.e("84027"),
                n.e("99430"),
                n.e("53843"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("15380"),
                n.e("207"),
                n.e("95429"),
                n.e("29835"),
                n.e("34304"),
                n.e("10368"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("23808"),
                n.e("60235"),
                n.e("88941"),
                n.e("55411"),
                n.e("93103"),
                n.e("34530"),
                n.e("61379"),
                n.e("62680"),
                n.e("43039"),
                n.e("98125"),
                n.e("18441"),
                n.e("21825"),
                n.e("69354"),
                n.e("28154"),
                n.e("48804"),
                n.e("88077"),
                n.e("80527"),
                n.e("85502"),
                n.e("18401"),
                n.e("13681"),
                n.e("53729"),
                n.e("21690"),
                n.e("32551"),
                n.e("31644"),
                n.e("52367"),
                n.e("23353"),
                n.e("36561"),
                n.e("86949"),
                n.e("50015"),
                n.e("71470"),
                n.e("77998"),
                n.e("31145"),
                n.e("11523"),
                n.e("66900"),
                n.e("44695"),
                n.e("10004"),
                n.e("55314"),
                n.e("29177"),
                n.e("44376"),
                n.e("9915"),
                n.e("83429"),
                n.e("96905"),
                n.e("33902"),
                n.e("70653"),
                n.e("31825"),
                n.e("54527"),
                n.e("72535"),
                n.e("76195"),
                n.e("51485"),
                n.e("1177"),
                n.e("26490"),
                n.e("76170"),
                n.e("32817"),
                n.e("51243"),
                n.e("18943"),
                n.e("89094"),
                n.e("84103"),
                n.e("99999"),
                n.e("5501"),
                n.e("96123"),
                n.e("27168"),
                n.e("39038"),
                n.e("36320"),
                n.e("77245"),
                n.e("31549"),
                n.e("20320"),
                n.e("43919"),
                n.e("31390"),
                n.e("57906"),
                n.e("37622"),
                n.e("22584"),
                n.e("45421"),
                n.e("44265"),
                n.e("99141"),
                n.e("21435"),
                n.e("98793"),
                n.e("92731"),
                n.e("25990"),
                n.e("33584"),
                n.e("63095"),
                n.e("68647"),
                n.e("67657"),
                n.e("64615"),
                n.e("88017"),
                n.e("87225"),
                n.e("12373"),
                n.e("75134"),
                n.e("84967"),
                n.e("23216"),
                n.e("30770"),
                n.e("56212"),
                n.e("47017"),
                n.e("43437"),
                n.e("36498"),
                n.e("3458"),
                n.e("62827"),
                n.e("1555"),
                n.e("73547"),
                n.e("32823"),
                n.e("34691"),
                n.e("99593"),
                n.e("61935"),
                n.e("54975"),
                n.e("62168"),
                n.e("55602"),
                n.e("52463"),
                n.e("13499"),
                n.e("993"),
                n.e("91381"),
                n.e("93158"),
                n.e("10034"),
                n.e("72832"),
                n.e("95183"),
                n.e("73500"),
                n.e("35403"),
                n.e("53526"),
                n.e("17286"),
                n.e("11527"),
                n.e("29375"),
                n.e("6223"),
                n.e("48778"),
                n.e("5895"),
                n.e("90889"),
                n.e("2537"),
                n.e("78777"),
                n.e("62355"),
                n.e("93708"),
                n.e("71482"),
                n.e("72727"),
                n.e("36126"),
                n.e("9640"),
                n.e("80565"),
                n.e("26295"),
                n.e("58765"),
                n.e("88599"),
                n.e("19452"),
                n.e("65881"),
                n.e("10745"),
                n.e("84113"),
                n.e("51391"),
                n.e("91942"),
                n.e("89465"),
                n.e("37187"),
                n.e("51130"),
                n.e("1827"),
                n.e("55973"),
                n.e("63235"),
                n.e("74810"),
                n.e("64480"),
                n.e("59414"),
                n.e("14041"),
                n.e("78651"),
                n.e("72401"),
                n.e("22855"),
                n.e("46568"),
                n.e("39406"),
                n.e("78100"),
                n.e("78453"),
                n.e("33297"),
                n.e("61268"),
                n.e("63645"),
                n.e("33134"),
                n.e("74610"),
                n.e("90213"),
                n.e("80007"),
                n.e("58164"),
                n.e("37490"),
                n.e("82486"),
                n.e("49345"),
                n.e("11471"),
                n.e("40248"),
                n.e("73122"),
                n.e("15275"),
                n.e("14396"),
                n.e("8979"),
                n.e("60178"),
                n.e("36163"),
                n.e("91643"),
                n.e("4736"),
                n.e("83827"),
                n.e("74821"),
                n.e("19580"),
                n.e("89545"),
                n.e("63497"),
                n.e("37479"),
                n.e("48370"),
                n.e("19623"),
                n.e("72238"),
                n.e("82758"),
                n.e("38589"),
                n.e("82721"),
                n.e("63360"),
                n.e("15537"),
                n.e("14334"),
                n.e("26185"),
                n.e("34418"),
                n.e("90966"),
                n.e("14940"),
                n.e("98279"),
                n.e("40247"),
                n.e("62393"),
                n.e("7265"),
                n.e("68518"),
                n.e("71180"),
                n.e("81079"),
                n.e("35383"),
                n.e("48734"),
                n.e("44861"),
                n.e("63820"),
                n.e("19705"),
                n.e("21489"),
                n.e("12091"),
                n.e("57993"),
                n.e("61659"),
                n.e("20429"),
                n.e("46658"),
                n.e("79582"),
                n.e("97641"),
                n.e("89913"),
                n.e("57641"),
                n.e("93265"),
                n.e("7242"),
                n.e("49356"),
                n.e("57335"),
                n.e("37475"),
                n.e("87313"),
                n.e("17321"),
                n.e("86142"),
            ]).then(n.bind(n, 656901)),
        webpackId: 656901,
        name: "ViewsWithAuth",
    }),
    eF = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("23740"),
                n.e("15275"),
                n.e("74821"),
                n.e("38589"),
                n.e("15537"),
                n.e("71180"),
                n.e("44861"),
                n.e("63820"),
                n.e("61659"),
                n.e("13419"),
            ]).then(n.bind(n, 234260)),
        webpackId: 234260,
        name: "ViewsWithOAuth2",
    }),
    eV = (0, er.Fe)({
        createPromise: () => Promise.all([n.e("54333"), n.e("81334"), n.e("30514")]).then(n.bind(n, 146088)),
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
                n.e("50672"),
                n.e("45235"),
                n.e("75058"),
                n.e("92652"),
                n.e("63397"),
                n.e("86821"),
                n.e("25568"),
                n.e("48476"),
                n.e("21977"),
                n.e("25738"),
                n.e("40841"),
                n.e("22810"),
                n.e("5036"),
                n.e("54333"),
                n.e("97271"),
                n.e("22513"),
                n.e("13709"),
                n.e("32442"),
                n.e("54718"),
                n.e("71934"),
                n.e("60049"),
                n.e("86483"),
                n.e("31632"),
                n.e("32260"),
                n.e("7276"),
                n.e("27383"),
                n.e("19415"),
                n.e("51529"),
                n.e("44651"),
                n.e("40792"),
                n.e("3377"),
                n.e("13044"),
                n.e("63635"),
                n.e("52204"),
                n.e("11491"),
                n.e("5432"),
                n.e("10373"),
                n.e("81154"),
                n.e("92164"),
                n.e("57948"),
                n.e("24211"),
                n.e("25652"),
                n.e("17049"),
                n.e("72823"),
                n.e("2332"),
                n.e("3424"),
                n.e("81788"),
                n.e("78029"),
                n.e("77044"),
                n.e("69273"),
                n.e("63941"),
                n.e("63009"),
                n.e("84580"),
                n.e("45650"),
                n.e("97189"),
                n.e("24059"),
                n.e("51402"),
                n.e("27660"),
                n.e("85484"),
                n.e("89516"),
                n.e("73679"),
                n.e("84615"),
                n.e("27755"),
                n.e("41475"),
                n.e("79705"),
                n.e("55658"),
                n.e("76032"),
                n.e("78220"),
                n.e("43763"),
                n.e("33957"),
                n.e("59204"),
                n.e("23574"),
                n.e("5007"),
                n.e("66346"),
                n.e("53773"),
                n.e("79093"),
                n.e("28510"),
                n.e("98042"),
                n.e("90673"),
                n.e("36613"),
                n.e("3840"),
                n.e("81579"),
                n.e("47206"),
                n.e("75681"),
                n.e("17270"),
                n.e("97023"),
                n.e("23967"),
                n.e("85611"),
                n.e("27796"),
                n.e("98197"),
                n.e("77948"),
                n.e("79249"),
                n.e("97137"),
                n.e("38123"),
                n.e("20524"),
                n.e("86921"),
                n.e("97046"),
                n.e("50971"),
                n.e("83919"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("24199"),
                n.e("57036"),
                n.e("88394"),
                n.e("15380"),
                n.e("19402"),
                n.e("13111"),
                n.e("62731"),
                n.e("34786"),
                n.e("63202"),
                n.e("41567"),
                n.e("74968"),
                n.e("73924"),
                n.e("92436"),
                n.e("44392"),
                n.e("22588"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("88941"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("34530"),
                n.e("58337"),
                n.e("61379"),
                n.e("62680"),
                n.e("43039"),
                n.e("26437"),
                n.e("91763"),
                n.e("98125"),
                n.e("13708"),
                n.e("18441"),
                n.e("8757"),
                n.e("76602"),
                n.e("21825"),
                n.e("69354"),
                n.e("28154"),
                n.e("48804"),
                n.e("88077"),
                n.e("80527"),
                n.e("85502"),
                n.e("18401"),
                n.e("13681"),
                n.e("53729"),
                n.e("21690"),
                n.e("32551"),
                n.e("31644"),
                n.e("52367"),
                n.e("23353"),
                n.e("36561"),
                n.e("28229"),
                n.e("86949"),
                n.e("50015"),
                n.e("71470"),
                n.e("77998"),
                n.e("31145"),
                n.e("11523"),
                n.e("66900"),
                n.e("44695"),
                n.e("10004"),
                n.e("55314"),
                n.e("29177"),
                n.e("44376"),
                n.e("9915"),
                n.e("83429"),
                n.e("91007"),
                n.e("68403"),
                n.e("96905"),
                n.e("33902"),
                n.e("70653"),
                n.e("31825"),
                n.e("54527"),
                n.e("72535"),
                n.e("76195"),
                n.e("85968"),
                n.e("51485"),
                n.e("1177"),
                n.e("26490"),
                n.e("76170"),
                n.e("32817"),
                n.e("76418"),
                n.e("51243"),
                n.e("18943"),
                n.e("89094"),
                n.e("84103"),
                n.e("21921"),
                n.e("99999"),
                n.e("5501"),
                n.e("28561"),
                n.e("9233"),
                n.e("96123"),
                n.e("27168"),
                n.e("39038"),
                n.e("88342"),
                n.e("36320"),
                n.e("77245"),
                n.e("8891"),
                n.e("31549"),
                n.e("20320"),
                n.e("43919"),
                n.e("31390"),
                n.e("57906"),
                n.e("69747"),
                n.e("37622"),
                n.e("40258"),
                n.e("45421"),
                n.e("44265"),
                n.e("99141"),
                n.e("20683"),
                n.e("66495"),
                n.e("21435"),
                n.e("98793"),
                n.e("92731"),
                n.e("25990"),
                n.e("29787"),
                n.e("33584"),
                n.e("91146"),
                n.e("63095"),
                n.e("68647"),
                n.e("67657"),
                n.e("64615"),
                n.e("88017"),
                n.e("87225"),
                n.e("12373"),
                n.e("75134"),
                n.e("84967"),
                n.e("23216"),
                n.e("30770"),
                n.e("56212"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("3458"),
                n.e("42451"),
                n.e("62827"),
                n.e("73547"),
                n.e("30221"),
                n.e("32823"),
                n.e("34691"),
                n.e("99593"),
                n.e("8371"),
                n.e("61935"),
                n.e("54975"),
                n.e("62168"),
                n.e("55602"),
                n.e("52463"),
                n.e("8555"),
                n.e("13499"),
                n.e("91381"),
                n.e("93158"),
                n.e("10034"),
                n.e("72832"),
                n.e("86127"),
                n.e("95183"),
                n.e("73500"),
                n.e("21570"),
                n.e("6174"),
                n.e("39851"),
                n.e("35403"),
                n.e("53526"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("29375"),
                n.e("48778"),
                n.e("5895"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("62355"),
                n.e("93708"),
                n.e("71482"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("80565"),
                n.e("15423"),
                n.e("26295"),
                n.e("49697"),
                n.e("88599"),
                n.e("36863"),
                n.e("67861"),
                n.e("1518"),
                n.e("15186"),
                n.e("10745"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("77265"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("71133"),
                n.e("10957"),
                n.e("55973"),
                n.e("77084"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("96565"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("37687"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("76273"),
                n.e("95093"),
                n.e("8362"),
                n.e("62615"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("34654"),
                n.e("12542"),
                n.e("48900"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("82783"),
                n.e("7833"),
                n.e("86243"),
                n.e("32209"),
                n.e("60177"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21976"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("1006"),
                n.e("36564"),
                n.e("44571"),
                n.e("79707"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("99518"),
                n.e("55577"),
                n.e("97784"),
                n.e("50033"),
                n.e("59880"),
                n.e("78412"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("9662"),
                n.e("80239"),
                n.e("33416"),
                n.e("54791"),
                n.e("83952"),
                n.e("61268"),
                n.e("255"),
                n.e("68479"),
                n.e("37752"),
                n.e("3217"),
                n.e("39286"),
                n.e("47678"),
                n.e("5557"),
                n.e("31445"),
                n.e("44780"),
                n.e("19871"),
                n.e("95340"),
                n.e("62718"),
                n.e("24170"),
                n.e("33134"),
                n.e("14461"),
                n.e("93907"),
                n.e("3998"),
                n.e("25486"),
                n.e("18024"),
                n.e("25279"),
                n.e("89916"),
                n.e("90301"),
                n.e("49145"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("20858"),
                n.e("15109"),
                n.e("18489"),
                n.e("43266"),
                n.e("77473"),
                n.e("91671"),
                n.e("28152"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("14224"),
                n.e("16767"),
                n.e("72883"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("49644"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("35996"),
                n.e("79211"),
                n.e("63071"),
                n.e("88990"),
                n.e("16988"),
                n.e("18997"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("49520"),
                n.e("65826"),
                n.e("86697"),
                n.e("63618"),
                n.e("42204"),
                n.e("12255"),
                n.e("20379"),
                n.e("69765"),
                n.e("40959"),
                n.e("76413"),
                n.e("78195"),
                n.e("3303"),
                n.e("1243"),
                n.e("32326"),
                n.e("16916"),
                n.e("62304"),
                n.e("83972"),
                n.e("36149"),
                n.e("72877"),
                n.e("19193"),
                n.e("80945"),
                n.e("80007"),
                n.e("18265"),
                n.e("21856"),
                n.e("49205"),
                n.e("75859"),
                n.e("72963"),
                n.e("29080"),
                n.e("22261"),
                n.e("96804"),
                n.e("65617"),
                n.e("49181"),
                n.e("83420"),
                n.e("95998"),
                n.e("87317"),
                n.e("78050"),
                n.e("27659"),
                n.e("36419"),
                n.e("80262"),
                n.e("15920"),
                n.e("68530"),
                n.e("42234"),
                n.e("66783"),
                n.e("20131"),
                n.e("72072"),
                n.e("78046"),
                n.e("20382"),
                n.e("21060"),
                n.e("28850"),
                n.e("74021"),
                n.e("11617"),
                n.e("74907"),
                n.e("74678"),
                n.e("20045"),
                n.e("967"),
                n.e("71217"),
                n.e("81328"),
                n.e("98725"),
                n.e("81189"),
                n.e("92077"),
                n.e("97069"),
                n.e("47018"),
                n.e("20973"),
                n.e("80093"),
                n.e("10520"),
                n.e("12965"),
                n.e("40175"),
                n.e("79724"),
                n.e("203"),
                n.e("607"),
                n.e("63333"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("43746"),
                n.e("77663"),
                n.e("86467"),
                n.e("41701"),
                n.e("78434"),
                n.e("40204"),
                n.e("77467"),
                n.e("39894"),
                n.e("34967"),
                n.e("47057"),
                n.e("34268"),
                n.e("60989"),
                n.e("86902"),
                n.e("90554"),
                n.e("68083"),
                n.e("2855"),
                n.e("8480"),
                n.e("19475"),
                n.e("19815"),
                n.e("31638"),
                n.e("48730"),
                n.e("37588"),
                n.e("71467"),
                n.e("36150"),
                n.e("51892"),
                n.e("20965"),
                n.e("44385"),
                n.e("41838"),
                n.e("46045"),
                n.e("94138"),
                n.e("99011"),
                n.e("64072"),
                n.e("3707"),
                n.e("33448"),
                n.e("6809"),
                n.e("38042"),
                n.e("28752"),
                n.e("2329"),
                n.e("6142"),
                n.e("49345"),
                n.e("11471"),
                n.e("60003"),
                n.e("40248"),
                n.e("73122"),
                n.e("49333"),
                n.e("11295"),
                n.e("42324"),
                n.e("14396"),
                n.e("22067"),
                n.e("30474"),
                n.e("16054"),
                n.e("55266"),
                n.e("26516"),
                n.e("33869"),
                n.e("60178"),
                n.e("14479"),
                n.e("21574"),
                n.e("65065"),
                n.e("29961"),
                n.e("84820"),
                n.e("14728"),
                n.e("14020"),
                n.e("49490"),
                n.e("90779"),
                n.e("10142"),
                n.e("44912"),
                n.e("18792"),
                n.e("61437"),
                n.e("36674"),
                n.e("29852"),
                n.e("70008"),
                n.e("61099"),
                n.e("98254"),
                n.e("2412"),
                n.e("4551"),
                n.e("27752"),
                n.e("82456"),
                n.e("20134"),
                n.e("96480"),
                n.e("45724"),
                n.e("59791"),
                n.e("96680"),
                n.e("36163"),
                n.e("24689"),
                n.e("83799"),
                n.e("63874"),
                n.e("89638"),
                n.e("68214"),
                n.e("85802"),
                n.e("98425"),
                n.e("88881"),
                n.e("3168"),
                n.e("33973"),
                n.e("86300"),
                n.e("86779"),
                n.e("91139"),
                n.e("25660"),
                n.e("95841"),
                n.e("42865"),
                n.e("37801"),
                n.e("72239"),
                n.e("53203"),
                n.e("20491"),
                n.e("65200"),
                n.e("39353"),
                n.e("2098"),
                n.e("84794"),
                n.e("17859"),
                n.e("79593"),
                n.e("17810"),
                n.e("41706"),
                n.e("50068"),
                n.e("94888"),
                n.e("61347"),
                n.e("21750"),
                n.e("90804"),
                n.e("37479"),
                n.e("48725"),
                n.e("93917"),
                n.e("95067"),
                n.e("21883"),
                n.e("97116"),
                n.e("52695"),
                n.e("6996"),
                n.e("6339"),
                n.e("1719"),
                n.e("53275"),
                n.e("28916"),
                n.e("93421"),
                n.e("78047"),
                n.e("55552"),
                n.e("12755"),
                n.e("19346"),
                n.e("30313"),
                n.e("69638"),
                n.e("57060"),
                n.e("43267"),
                n.e("55895"),
                n.e("17487"),
                n.e("28011"),
                n.e("42455"),
                n.e("70698"),
                n.e("91589"),
                n.e("1485"),
                n.e("32429"),
                n.e("37715"),
                n.e("4727"),
                n.e("9763"),
                n.e("26250"),
                n.e("37065"),
                n.e("21041"),
                n.e("61849"),
                n.e("30066"),
                n.e("50541"),
                n.e("78814"),
                n.e("54792"),
                n.e("37698"),
                n.e("22511"),
                n.e("26223"),
                n.e("51212"),
                n.e("67827"),
                n.e("73084"),
                n.e("64526"),
                n.e("63360"),
                n.e("41348"),
                n.e("39721"),
                n.e("17583"),
                n.e("71939"),
                n.e("10711"),
                n.e("84601"),
                n.e("53229"),
                n.e("34418"),
                n.e("92539"),
                n.e("76953"),
                n.e("2529"),
                n.e("51743"),
                n.e("10480"),
                n.e("14940"),
                n.e("8624"),
                n.e("86470"),
                n.e("70152"),
                n.e("60439"),
                n.e("98279"),
                n.e("62393"),
                n.e("86861"),
                n.e("59228"),
                n.e("5235"),
                n.e("58932"),
                n.e("18126"),
                n.e("42664"),
                n.e("68208"),
                n.e("50695"),
                n.e("24107"),
                n.e("25717"),
                n.e("36999"),
                n.e("44602"),
                n.e("63309"),
                n.e("20516"),
                n.e("93609"),
                n.e("88379"),
                n.e("23707"),
                n.e("68708"),
                n.e("70841"),
                n.e("83438"),
                n.e("93368"),
                n.e("31189"),
                n.e("61772"),
                n.e("84042"),
                n.e("27880"),
                n.e("35895"),
                n.e("70961"),
                n.e("3345"),
                n.e("82830"),
                n.e("55458"),
                n.e("46855"),
                n.e("86256"),
                n.e("69201"),
                n.e("8032"),
                n.e("77970"),
                n.e("8694"),
                n.e("88563"),
                n.e("12091"),
                n.e("97934"),
                n.e("36166"),
                n.e("90797"),
                n.e("58469"),
                n.e("54588"),
                n.e("30295"),
                n.e("92313"),
                n.e("59447"),
                n.e("29880"),
                n.e("44030"),
                n.e("7521"),
                n.e("80782"),
                n.e("20891"),
                n.e("60206"),
                n.e("48672"),
                n.e("86336"),
                n.e("59991"),
                n.e("99126"),
                n.e("85681"),
                n.e("49111"),
                n.e("42270"),
                n.e("87791"),
                n.e("50163"),
                n.e("97585"),
                n.e("78658"),
                n.e("87634"),
                n.e("7242"),
                n.e("20578"),
                n.e("92461"),
                n.e("90879"),
                n.e("94329"),
                n.e("81104"),
                n.e("84018"),
            ]).then(n.bind(n, 436405)),
        webpackId: 436405,
        name: "Overlay",
    }),
    ej = (0, er.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("92652"),
                n.e("40841"),
                n.e("87208"),
                n.e("24806"),
                n.e("23924"),
                n.e("13554"),
                n.e("83429"),
                n.e("54975"),
                n.e("95183"),
                n.e("35403"),
                n.e("83799"),
                n.e("61137"),
                n.e("85216"),
                n.e("66708"),
            ]).then(n.bind(n, 303174)),
        webpackId: 303174,
        name: "SuspendedUserSafetyHubPage",
    }),
    eY = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("68030"), n.e("21489"), n.e("96970"), n.e("71791")]).then(n.bind(n, 125820)),
        webpackId: 125820,
        name: "QuestsLandingPage",
    }),
    eW = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("68030"), n.e("21489"), n.e("96970"), n.e("44900")]).then(n.bind(n, 589877)),
        webpackId: 589877,
        name: "QuestPreviewLandingPage",
    }),
    ex = (0, er.Fe)({
        createPromise: () =>
            Promise.all([n.e("22323"), n.e("34917"), n.e("96891"), n.e("68518"), n.e("71821"), n.e("81881")]).then(
                n.bind(n, 519716),
            ),
        webpackId: 519716,
        name: "ConnectionsAuthorizeContinue",
    }),
    eK = (0, er.Fe)({
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
        x.BVt.LOGIN,
        x.BVt.LOGIN_HANDOFF,
        x.BVt.INVITE_LOGIN(":inviteCode"),
        x.BVt.GIFT_CODE_LOGIN(":giftCode"),
        x.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
    ]);
function eX(e, t) {
    return t ? e.filter((e) => !eq.has(e)) : e;
}
class ez extends r.Component {
    componentDidMount() {
        let { isAuthenticated: e } = this.props;
        v.Ay.cleanupDisplaySleep(), eN.initialize(), (eR.A.wasAuthenticated = e);
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
                                    t ? null : (0, a.jsx)(q.qh, { path: x.BVt.ACCOUNT_STANDING, component: ej }),
                                    (0, a.jsx)(q.qh, {
                                        exact: !0,
                                        path: x.BVt.INDEX,
                                        render: () => (0, a.jsx)(ei, {}),
                                    }),
                                    (0, a.jsx)(ea.A, { exact: !0, path: x.BVt.APPS, component: eg }),
                                    (0, a.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                x.BVt.LOGIN,
                                                x.BVt.REGISTER,
                                                x.BVt.INVITE(":inviteCode"),
                                                x.BVt.INVITE_LOGIN(":inviteCode"),
                                                x.BVt.GIFT_CODE(":giftCode"),
                                                x.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                x.BVt.RESET,
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, a.jsx)(q.rd, { from: x.BVt.INVITE(""), to: x.BVt.LOGIN }),
                                    (0, a.jsx)(q.rd, { from: x.BVt.GIFT_CODE(""), to: x.BVt.LOGIN }),
                                    (0, a.jsx)(q.qh, { render: eQ }),
                                ],
                            })
                          : (0, a.jsxs)(q.dO, {
                                children: [
                                    (0, a.jsx)(ea.A, {
                                        exact: !0,
                                        path: x.BVt.INDEX,
                                        render: () => (0, a.jsx)(ei, {}),
                                    }),
                                    (0, a.jsx)(q.qh, {
                                        path: eX(
                                            [
                                                x.BVt.LOGIN_ONE_TIME,
                                                x.BVt.LOGIN,
                                                x.BVt.LOGIN_HANDOFF,
                                                x.BVt.REGISTER,
                                                x.BVt.BILLING_PREFIX,
                                                x.BVt.BILLING_PROMOTION_REDEMPTION(":code"),
                                                x.BVt.INVITE(":inviteCode"),
                                                x.BVt.INVITE_LOGIN(":inviteCode"),
                                                x.BVt.GIFT_CODE(":giftCode"),
                                                x.BVt.GIFT_CODE_LOGIN(":giftCode"),
                                                x.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                                                x.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                                                x.BVt.DISABLE_EMAIL_NOTIFICATIONS,
                                                x.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                                                x.BVt.RESET,
                                                x.BVt.REPORT,
                                                x.BVt.REPORT_SECOND_LOOK,
                                                x.BVt.ACCOUNT_REVERT(":token"),
                                            ],
                                            !1,
                                        ),
                                        component: ew,
                                    }),
                                    t
                                        ? null
                                        : (0, a.jsx)(q.qh, {
                                              path: x.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                                              component: ew,
                                          }),
                                    t
                                        ? null
                                        : (0, a.jsx)(q.qh, {
                                              path: x.BVt.CHANNEL(
                                                  eO.pv.guildId(),
                                                  eO.pv.channelId({ optional: !0 }),
                                                  ":messageId?",
                                              ),
                                              component: ew,
                                          }),
                                    (0, a.jsx)(q.rd, { from: x.BVt.INVITE(""), to: x.BVt.LOGIN }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.INVITE_PROXY(eO.pv.channelId()), component: eb }),
                                    (0, a.jsx)(q.rd, { from: x.BVt.GIFT_CODE(""), to: x.BVt.LOGIN }),
                                    (0, a.jsx)(ea.A, {
                                        path: x.BVt.QUESTS(":questId"),
                                        component: eY,
                                        impressionName: X.ImpressionNames.QUESTS_LANDING_PAGE,
                                        impressionProperties: (e) => {
                                            let { match: t } = e;
                                            return {
                                                quest_id: t?.params.questId != null ? Number(t.params.questId) : void 0,
                                            };
                                        },
                                    }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.QUEST_PREVIEW(":questId"), component: eW }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.HANDOFF, component: eV }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.MOBILE_WEB_HANDOFF, component: eH }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.CONNECTION_LINK(":type"), component: eG }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.CONNECTION_LINK_AUTHORIZE(":type"), component: ey }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.ACTIVATE, component: ev }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.ACTIVATE_HANDOFF, component: ev }),
                                    (0, a.jsx)(ea.A, {
                                        path: x.BVt.CONNECTIONS_AUTHORIZE_CONTINUE(":type"),
                                        component: ex,
                                    }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.CONNECTIONS_SUCCESS(":type"), component: eP }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.CONNECTIONS_ERROR(":type"), component: eM }),
                                    (0, a.jsx)(ea.A, { path: x.BVt.CONNECTIONS(":type"), component: eU }),
                                    (0, a.jsx)(ea.A, {
                                        path: x.BVt.DOWNLOAD_QR_CODE_REDIRECT,
                                        render: () => {
                                            let e = ec.default.getSuperProperties()?.os,
                                                t = (0, Q.parse)((window.location.search ?? "").substr(1)),
                                                n = t.referring_location?.toString();
                                            return (
                                                ("iOS" === e || "Android" === e) &&
                                                    ec.default.track(x.HAw.DOWNLOAD_APP, {
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
                                        path: x.BVt.OPEN_APP_FROM_EMAIL,
                                        render: () => {
                                            var e;
                                            let t,
                                                n = ec.default.getSuperProperties()?.os,
                                                i =
                                                    ((e = window.location.search ?? ""),
                                                    {
                                                        desktop: eL((t = (0, eD.parse)(e)).desktop_link),
                                                        mobile: eL(t.mobile_link),
                                                    });
                                            if ("iOS" !== n && "Android" !== n)
                                                return (0, a.jsx)(q.rd, {
                                                    to:
                                                        null != i.desktop
                                                            ? `${i.desktop.pathname}${i.desktop.search}`
                                                            : x.BVt.APP,
                                                });
                                            {
                                                let e = (0, eC.b$)("app_open_from_email", n, i.mobile),
                                                    t = (0, Z.X7)(e);
                                                null != t &&
                                                    ec.default.track(x.HAw.DEEP_LINK_CLICKED, {
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
                                        from: x.BVt.CONNECT_AUTHORIZE,
                                        to: { ...location, pathname: x.BVt.OAUTH2_AUTHORIZE },
                                    }),
                                    (0, a.jsx)(q.qh, {
                                        path: [
                                            x.BVt.OAUTH2_AUTHORIZED,
                                            x.BVt.OAUTH2_AUTHORIZE,
                                            x.BVt.OAUTH2_ERROR,
                                            x.BVt.OAUTH2_WHITELIST_ACCEPT,
                                        ],
                                        component: eF,
                                    }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [x.BVt.ACCOUNT_STANDING], component: ej }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [x.BVt.APPLICATION_DIRECTORY], component: eK }),
                                    t ? null : (0, a.jsx)(q.qh, { path: [x.BVt.GLOBAL_DISCOVERY_APPS], component: e$ }),
                                    (0, a.jsx)(q.qh, { render: eQ }),
                                    (0, a.jsx)(q.rd, { from: x.BVt.ACCOUNT_REVERT(""), to: x.BVt.LOGIN }),
                                ],
                            })
                      : (0, a.jsx)(q.dO, { children: (0, a.jsx)(ea.A, { component: eh }) })),
            (0, a.jsxs)(e_.A, {
                skipsSettingDefaultPageTitle: i,
                children: [
                    e,
                    y.isPlatformEmbedded && (n === el.NOT_STARTED || n === el.IN_PROGRESS) && !0 !== ee.w.get(z.qx)
                        ? (0, a.jsx)(eI, {})
                        : null,
                ],
            })
        );
    }
}
let eZ = u.Ay.connectStores(
    [en.default, ed],
    () => ({ isAuthenticated: en.default.isAuthenticated(), migrationStatus: ed.getMigrationStatus() }),
    { forwardRef: !0 },
)(function (e) {
    let t = (function () {
        let { pathname: e } = (0, q.zy)();
        return null != (0, ef.B)(e, { path: x.BVt.APPLICATION_DIRECTORY });
    })();
    return (0, a.jsx)(ez, { ...e, skipsSettingDefaultPageTitle: t });
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
                    ? e.name === x.HAw.CDM_LOAD_STATUS || e.name === x.HAw.CDM_READY_COMPLETE
                        ? ec.default.track(e.name, e.data)
                        : console.log(`[analytics] received unknown cdm analytic event ${e.name}`)
                    : "desktop_tti" === e.type
                      ? e.name === x.HAw.DESKTOP_TTI
                          ? ec.default.track(e.name, e.data)
                          : console.log(`[analytics] received unknown desktop_tti analytic event ${e.name}`)
                      : "desktop_tti_v2" === e.type &&
                        (e.name === x.HAw.DESKTOP_TTI_V2
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
            i = "Firefox" === d().name ? x.MVz.ENABLE_MIC_FIREFOX : x.MVz.ENABLE_MIC_CHROME;
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
let e5 = new e3();
function e6() {
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
class e7 {
    _installingModules = {};
    _downloadingModules = {};
    _report;
    constructor() {
        this._report = e6();
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
        this._report = e6();
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
class e4 extends eA.A {
    _tracker = new e7();
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
                ? e.name === x.HAw.UPDATER_METRICS_DOWNLOAD ||
                  e.name === x.HAw.UPDATER_METRICS_INSTALL ||
                  e.name === x.HAw.UPDATER_METRICS_COMBINED ||
                  e.name === x.HAw.UPDATER_METRICS_TRANSITION_STATUS
                    ? t && ec.default.track(e.name, e.data)
                    : console.warn(`Unknown updater analytic event ${e.name}`)
                : this._tracker.trackEvent(e);
        }),
            this._tracker.submissionReady() &&
                (ec.default.track(x.HAw.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset());
    }
}
let e9 = new e4();
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
    return !(e === x.TGd.BROWSER && tl.Ay.hasKeybind(to.zY.MOUSE_BUTTON, t));
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
    tf = n(675991),
    tR = n(442353);
class tC extends eA.A {
    callbackActions = {
        [tA.dv.VIDEO]: () => {
            ti.Ay.isVideoEnabled() ? tS.A.setVideoEnabled(!1) : (0, tR.A)(() => tS.A.setVideoEnabled(!0), x.BRT.APP);
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
            o = (0, tf.Q)({
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
let tD = new tC();
var tp = n(200330),
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
                ec.default.track(x.HAw.LIBDISCORE_LOADED, { success: !0, experimental_features: e });
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
                ec.default.track(x.HAw.LIBDISCORE_LOADED, { success: !1, error: i });
            })(e);
        }
        tw = !0;
    }
}
var tV = n(111162),
    tH = n(343166),
    tk = n(621466),
    tj = n(625494),
    tY = n(654108),
    tW = n(927813),
    tx = n(316501),
    tK = n(708281);
tV.default.cssDebuggingEnabled && n.e("7473").then(n.t.bind(n, 17960, 19)), (0, tx.pF)();
let t$ = 5 * tW.A.Millis.MINUTE,
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
                ((0, tp.openOAuth2Modal)({
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
            return null != t && ((0, tK.N)({ token: t }), !0);
        },
    },
    tz = (e) => tq.render((0, a.jsx)(tP.e, { children: (0, a.jsx)(tU, { children: (0, a.jsx)(e, {}) }) }));
if (null != D.A) {
    D.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (t_.A.captureCrash(e), e);
        });
    }),
        v.Ay.appLoaded();
    let e = D.A.app.getVersion(),
        t = D.A.app.getBuildNumber(),
        n = D.A.app.getModuleVersions();
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
if (((0, tm.M)(window), __OVERLAY__)) tz(() => (0, a.jsx)(o.W, { children: (0, a.jsx)(ek, {}) }));
else if (null != window.require && null == window.DiscordNative) tz($);
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
                        tj._.dispatchToLastSubscribed(x.jej.GLOBAL_CLIPBOARD_PASTE, { event: e });
                });
            },
        }.init(),
        e5.initialize(),
        td.initialize(),
        tD.initialize(),
        tF(),
        tz(() => (0, a.jsx)(o.W, { children: (0, a.jsx)(eZ, {}) }));
}
