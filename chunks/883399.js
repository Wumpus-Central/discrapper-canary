l.d(t, { A: () => J });
var a,
    n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    c = l(17928),
    o = l(939249),
    A = l(366010),
    E = l(858899),
    d = l(834730),
    I = l(926268),
    u = l(346411),
    C = l(271866),
    T = l(736653),
    O = l(793574),
    p = l(688810),
    L = l(885386),
    S = l(636537),
    _ = l(73153),
    N = l(652215);
async function h() {
    _.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let e = await S.Bo.get({
            url: N.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: e.body.map((e) => e.id) });
    } catch (e) {
        _.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var R =
    (((a = {}).INITIALIZED = "INITIALIZED"), (a.LOADING = "LOADING"), (a.LOADED = "LOADED"), (a.ERROR = "ERROR"), a);
let m = R.INITIALIZED,
    g = new Set();
class D extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return m;
    }
    isDeveloperOfApplication(e) {
        return null != e && g.has(e);
    }
}
let x = new D(_.h, {
    LOGOUT: function () {
        ((m = R.INITIALIZED), (g = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        m = R.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t } = e;
        ((m = R.LOADED), (g = new Set(t)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        m = R.ERROR;
    },
});
var P = l(793943),
    b = l(742589),
    f = l(402860),
    j = l(287809),
    k = l(147964),
    v = l(174459),
    y = l(975571),
    F = l(371794),
    w = l(439303),
    H = l(353281);
let G = (0, l(945810).mj)({
    name: "2026-09-application-test-mode-quick-access",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var M = l(676924),
    U = l(995393),
    V = l(616633),
    Z = l(518477),
    Y = l(105292),
    B = l(859425);
function q(e) {
    let { content: t, onClick: l, ariaLabel: a, className: i } = e;
    return (0, n.jsx)(o.D, { className: r()(B.gb, i), onClick: l, "aria-label": a, children: t });
}
function J(e) {
    var t;
    let l,
        a,
        s,
        { storefront: S, selectedPageIndex: _ } = e,
        m = (0, A.M)((0, T.Ay)()),
        g = (0, c.bG)([j.default], () => j.default.getCurrentUser()),
        D = (0, w.jM)(),
        { analyticsLocations: J } = (0, p.Ay)(),
        { navigateToStorefrontPage: Q } = (0, H.H)(),
        z = S?.applicationId,
        { enabled: W } = G.useConfig({ location: "SocialLayerStorefrontHeader" }),
        K =
            ((t = W ? z : null),
            (l = L.Q_.useSetting()),
            (a = (0, c.bG)([x], () => x.getFetchState())),
            (s = (0, c.bG)([x], () => x.isDeveloperOfApplication(t))),
            i.useEffect(() => {
                null != t && l && a === R.INITIALIZED && h();
            }, [t, l, a]),
            s),
        $ = (0, c.bG)([k.A], () => null != z && k.A.inTestModeForApplication(z)),
        X = i.useCallback(() => {
            g?.id != null &&
                (0, f.openUserProfileModal)({
                    userId: g.id,
                    tabSection: Z.RP.WISHLIST,
                    sourceAnalyticsLocations: [O.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [g]),
        ee = i.useCallback(() => {
            (v.default.track(N.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: D?.sessionId,
                cta_type: U.ST.LEARN_MORE,
                location_stack: J,
            }),
                window.open(y.A.getArticleURL(N.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [D, J]),
        et = i.useCallback(() => {
            null != z &&
                (0, C.q1)(z).then((e) => {
                    null == e
                        ? (0, E.P0)({ text: k.A.error ?? Y.intl.string(Y.t.SDP0vo), variant: "critical" })
                        : (0, P.nf)(P.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: V.t.STOREFRONT,
                          });
                });
        }, [z]),
        el = i.useCallback(() => {
            Q?.(0);
        }, [Q]);
    if (null == S) return null;
    let ea = null != S.logoAssetId ? (0, F.YE)(S.applicationId, S.logoAssetId, 128) : null,
        en = null != S.lightThemeLogoAssetId ? (0, F.YE)(S.applicationId, S.lightThemeLogoAssetId, 128) : null,
        ei = null;
    return (
        (ei = m ? (ea ?? en) : (en ?? ea)),
        (0, n.jsxs)(b.A, {
            disableDoubleClick: !0,
            className: B.N1,
            children: [
                (0, n.jsxs)(o.D, {
                    onClick: el,
                    className: B.gn,
                    children: [
                        null != ei && (0, n.jsx)("img", { className: B.wm, src: ei, alt: S.title }),
                        (0, n.jsx)(b.A.Title, { children: S.title }),
                    ],
                }),
                S.pages.length > 1 &&
                    (0, n.jsx)("div", {
                        className: B.YC,
                        children: S.pages.map((e, t) =>
                            (0, n.jsx)(
                                b.A.Title,
                                {
                                    onClick: () => Q?.(t),
                                    wrapperClassName: B.oB,
                                    className: r()(B.xT, { [B.ys]: _ === t }),
                                    children: (0, n.jsx)(d.E, { variant: "text-sm/medium", children: e.title }),
                                },
                                `${e.title}-${t}`,
                            ),
                        ),
                    }),
                (0, n.jsxs)("div", {
                    className: B.sZ,
                    children: [
                        (0, n.jsx)(q, {
                            content: (0, n.jsx)(I.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: X,
                            ariaLabel: Y.intl.string(Y.t["7lZ31J"]),
                            className: B.ij,
                        }),
                        (0, n.jsx)(M.A, { location: O.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, n.jsx)(q, {
                            onClick: ee,
                            ariaLabel: Y.intl.string(Y.t.hvVgAZ),
                            content: (0, n.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: Y.intl.string(Y.t.hvVgAZ),
                            }),
                            className: B.AJ,
                        }),
                        K &&
                            !$ &&
                            (0, n.jsx)(q, {
                                onClick: et,
                                ariaLabel: Y.intl.string(Y.t.QexSCe),
                                content: (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, n.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: Y.intl.string(Y.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: B.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
