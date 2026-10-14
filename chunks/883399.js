l.d(e, { A: () => Q });
var s,
    i = l(477900),
    a = l(582128),
    n = l(503698),
    h = l.n(n),
    c = l(17928);
if (221552 == l.j) var r = l(939249);
if (221552 == l.j) var o = l(366010);
if (221552 == l.j) var v = l(858899);
if (221552 == l.j) var d = l(834730);
if (221552 == l.j) var A = l(926268);
if (221552 == l.j) var g = l(346411);
var E = l(271866),
    p = l(736653),
    m = l(793574),
    I = l(688810),
    f = l(885386),
    u = l(636537),
    w = l(73153),
    T = l(652215);
async function C() {
    w.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let t = await u.Bo.get({
            url: T.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        w.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: t.body.map((t) => t.id) });
    } catch (t) {
        w.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var N =
    (((s = {}).INITIALIZED = "INITIALIZED"), (s.LOADING = "LOADING"), (s.LOADED = "LOADED"), (s.ERROR = "ERROR"), s);
let x = N.INITIALIZED,
    _ = new Set();
class Z extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return x;
    }
    isDeveloperOfApplication(t) {
        return null != t && _.has(t);
    }
}
let L = new Z(w.h, {
    LOGOUT: function () {
        ((x = N.INITIALIZED), (_ = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        x = N.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e } = t;
        ((x = N.LOADED), (_ = new Set(e)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        x = N.ERROR;
    },
});
var O = l(793943),
    V = l(742589),
    j = l(402860),
    M = l(287809),
    R = l(147964),
    S = l(174459),
    D = l(975571),
    y = l(371794),
    H = l(439303),
    P = l(353281);
let F = (0, l(945810).mj)({
        name: "2026-09-application-test-mode-quick-access",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    b = 221552 == l.j ? F : null;
var k = l(676924),
    U = l(995393),
    B = l(616633),
    J = l(518477),
    G = l(660183),
    Y = l(859425);
function q(t) {
    let { content: e, onClick: l, ariaLabel: s, className: a } = t;
    return (0, i.jsx)(r.D, { className: h()(Y.gb, a), onClick: l, "aria-label": s, children: e });
}
function Q(t) {
    var e;
    let l,
        s,
        n,
        { storefront: u, selectedPageIndex: w } = t,
        x = (0, o.M)((0, p.Ay)()),
        _ = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
        Z = (0, H.jM)(),
        { analyticsLocations: F } = (0, I.Ay)(),
        { navigateToStorefrontPage: Q } = (0, P.H)(),
        z = u?.applicationId,
        { enabled: W } = b.useConfig({ location: "SocialLayerStorefrontHeader" }),
        $ =
            ((e = W ? z : null),
            (l = f.Q_.useSetting()),
            (s = (0, c.bG)([L], () => L.getFetchState())),
            (n = (0, c.bG)([L], () => L.isDeveloperOfApplication(e))),
            a.useEffect(() => {
                null != e && l && s === N.INITIALIZED && C();
            }, [e, l, s]),
            n),
        K = (0, c.bG)([R.A], () => null != z && R.A.inTestModeForApplication(z)),
        X = a.useCallback(() => {
            _?.id != null &&
                (0, j.openUserProfileModal)({
                    userId: _.id,
                    tabSection: J.RP.WISHLIST,
                    sourceAnalyticsLocations: [m.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [_]),
        tt = a.useCallback(() => {
            (S.default.track(T.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: Z?.sessionId,
                cta_type: U.ST.LEARN_MORE,
                location_stack: F,
            }),
                window.open(D.A.getArticleURL(T.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [Z, F]),
        te = a.useCallback(() => {
            null != z &&
                (0, E.q1)(z).then((t) => {
                    null == t
                        ? (0, v.P0)({ text: R.A.error ?? G.intl.string(G.t.SDP0vo), variant: "critical" })
                        : (0, O.nf)(O.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: B.t.STOREFRONT,
                          });
                });
        }, [z]),
        tl = a.useCallback(() => {
            Q?.(0);
        }, [Q]);
    if (null == u) return null;
    let ts = null != u.logoAssetId ? (0, y.YE)(u.applicationId, u.logoAssetId, 128) : null,
        ti = null != u.lightThemeLogoAssetId ? (0, y.YE)(u.applicationId, u.lightThemeLogoAssetId, 128) : null,
        ta = null;
    return (
        (ta = x ? (ts ?? ti) : (ti ?? ts)),
        (0, i.jsxs)(V.A, {
            disableDoubleClick: !0,
            className: Y.N1,
            children: [
                (0, i.jsxs)(r.D, {
                    onClick: tl,
                    className: Y.gn,
                    children: [
                        null != ta && (0, i.jsx)("img", { className: Y.wm, src: ta, alt: u.title }),
                        (0, i.jsx)(V.A.Title, { children: u.title }),
                    ],
                }),
                u.pages.length > 1 &&
                    (0, i.jsx)("div", {
                        className: Y.YC,
                        children: u.pages.map((t, e) =>
                            (0, i.jsx)(
                                V.A.Title,
                                {
                                    onClick: () => Q?.(e),
                                    wrapperClassName: Y.oB,
                                    className: h()(Y.xT, { [Y.ys]: w === e }),
                                    children: (0, i.jsx)(d.E, { variant: "text-sm/medium", children: t.title }),
                                },
                                `${t.title}-${e}`,
                            ),
                        ),
                    }),
                (0, i.jsxs)("div", {
                    className: Y.sZ,
                    children: [
                        (0, i.jsx)(q, {
                            content: (0, i.jsx)(A.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: X,
                            ariaLabel: G.intl.string(G.t["7lZ31J"]),
                            className: Y.ij,
                        }),
                        (0, i.jsx)(k.A, { location: m.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, i.jsx)(q, {
                            onClick: tt,
                            ariaLabel: G.intl.string(G.t.hvVgAZ),
                            content: (0, i.jsx)(d.E, {
                                variant: "text-sm/medium",
                                children: G.intl.string(G.t.hvVgAZ),
                            }),
                            className: Y.AJ,
                        }),
                        $ &&
                            !K &&
                            (0, i.jsx)(q, {
                                onClick: te,
                                ariaLabel: G.intl.string(G.t.QexSCe),
                                content: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(g.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: G.intl.string(G.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: Y.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
