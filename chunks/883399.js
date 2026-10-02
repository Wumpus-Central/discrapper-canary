l.d(e, { A: () => W });
var s,
    i = l(477900),
    a = l(582128),
    n = l(503698),
    h = l.n(n),
    c = l(17928);
if (221552 == l.j) var r = l(939249);
if (221552 == l.j) var o = l(366010);
if (221552 == l.j) var v = l(376357);
if (221552 == l.j) var d = l(857250);
if (221552 == l.j) var A = l(97483);
if (221552 == l.j) var g = l(834730);
if (221552 == l.j) var E = l(926268);
if (221552 == l.j) var p = l(346411);
var m = l(271866),
    I = l(736653),
    f = l(793574),
    w = l(688810),
    u = l(885386),
    T = l(636537),
    C = l(73153),
    N = l(652215);
async function x() {
    C.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_START" });
    try {
        let t = await T.Bo.get({
            url: N.Rsh.APPLICATIONS,
            query: { with_team_applications: !0 },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        C.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_SUCCESS", applicationIds: t.body.map((t) => t.id) });
    } catch (t) {
        C.h.dispatch({ type: "DEVELOPER_APPLICATIONS_FETCH_FAIL" });
    }
}
var _ =
    (((s = {}).INITIALIZED = "INITIALIZED"), (s.LOADING = "LOADING"), (s.LOADED = "LOADED"), (s.ERROR = "ERROR"), s);
let Z = _.INITIALIZED,
    L = new Set();
class j extends c.Ay.Store {
    static displayName = "DeveloperApplicationsStore";
    getFetchState() {
        return Z;
    }
    isDeveloperOfApplication(t) {
        return null != t && L.has(t);
    }
}
let O = new j(C.h, {
    LOGOUT: function () {
        ((Z = _.INITIALIZED), (L = new Set()));
    },
    DEVELOPER_APPLICATIONS_FETCH_START() {
        Z = _.LOADING;
    },
    DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { applicationIds: e } = t;
        ((Z = _.LOADED), (L = new Set(e)));
    },
    DEVELOPER_APPLICATIONS_FETCH_FAIL() {
        Z = _.ERROR;
    },
});
var V = l(793943),
    R = l(742589),
    M = l(402860),
    S = l(287809),
    D = l(147964),
    y = l(174459),
    H = l(975571),
    F = l(371794),
    P = l(439303),
    b = l(353281);
let U = (0, l(945810).mj)({
        name: "2026-09-application-test-mode-quick-access",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    k = 221552 == l.j ? U : null;
var B = l(676924),
    J = l(995393),
    G = l(616633),
    Y = l(518477),
    q = l(375708),
    Q = l(859425);
function z(t) {
    let { content: e, onClick: l, ariaLabel: s, className: a } = t;
    return (0, i.jsx)(r.D, { className: h()(Q.gb, a), onClick: l, "aria-label": s, children: e });
}
function W(t) {
    var e;
    let l,
        s,
        n,
        { storefront: T, selectedPageIndex: C } = t,
        Z = (0, o.M)((0, I.Ay)()),
        L = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        j = (0, P.jM)(),
        { analyticsLocations: U } = (0, w.Ay)(),
        { navigateToStorefrontPage: W } = (0, b.H)(),
        $ = T?.applicationId,
        { enabled: K } = k.useConfig({ location: "SocialLayerStorefrontHeader" }),
        X =
            ((e = K ? $ : null),
            (l = u.Q_.useSetting()),
            (s = (0, c.bG)([O], () => O.getFetchState())),
            (n = (0, c.bG)([O], () => O.isDeveloperOfApplication(e))),
            a.useEffect(() => {
                null != e && l && s === _.INITIALIZED && x();
            }, [e, l, s]),
            n),
        tt = (0, c.bG)([D.A], () => null != $ && D.A.inTestModeForApplication($)),
        te = a.useCallback(() => {
            L?.id != null &&
                (0, M.openUserProfileModal)({
                    userId: L.id,
                    tabSection: Y.RP.WISHLIST,
                    sourceAnalyticsLocations: [f.A.SOCIAL_LAYER_STOREFRONT],
                });
        }, [L]),
        tl = a.useCallback(() => {
            (y.default.track(N.HAw.SLAYER_STOREFRONT_PAGE_ELEMENT_CLICKED, {
                slayer_storefront_session_id: j?.sessionId,
                cta_type: J.ST.LEARN_MORE,
                location_stack: U,
            }),
                window.open(H.A.getArticleURL(N.MVz.SOCIAL_LAYER_STOREFRONT)));
        }, [j, U]),
        ts = a.useCallback(() => {
            null != $ &&
                (0, m.q1)($).then((t) => {
                    null == t
                        ? (0, v.P)((0, d.o)(D.A.error ?? q.intl.string(q.t.SDP0vo), A.Ck.FAILURE))
                        : (0, V.nf)(V.HP.APPLICATION_TEST_MODE_DEBUG, {
                              shouldAutoOpenGameProfile: !1,
                              initialTabId: G.t.STOREFRONT,
                          });
                });
        }, [$]),
        ti = a.useCallback(() => {
            W?.(0);
        }, [W]);
    if (null == T) return null;
    let ta = null != T.logoAssetId ? (0, F.YE)(T.applicationId, T.logoAssetId, 128) : null,
        tn = null != T.lightThemeLogoAssetId ? (0, F.YE)(T.applicationId, T.lightThemeLogoAssetId, 128) : null,
        th = null;
    return (
        (th = Z ? (ta ?? tn) : (tn ?? ta)),
        (0, i.jsxs)(R.A, {
            disableDoubleClick: !0,
            className: Q.N1,
            children: [
                (0, i.jsxs)(r.D, {
                    onClick: ti,
                    className: Q.gn,
                    children: [
                        null != th && (0, i.jsx)("img", { className: Q.wm, src: th, alt: T.title }),
                        (0, i.jsx)(R.A.Title, { children: T.title }),
                    ],
                }),
                T.pages.length > 1 &&
                    (0, i.jsx)("div", {
                        className: Q.YC,
                        children: T.pages.map((t, e) =>
                            (0, i.jsx)(
                                R.A.Title,
                                {
                                    onClick: () => W?.(e),
                                    wrapperClassName: Q.oB,
                                    className: h()(Q.xT, { [Q.ys]: C === e }),
                                    children: (0, i.jsx)(g.E, { variant: "text-sm/medium", children: t.title }),
                                },
                                `${t.title}-${e}`,
                            ),
                        ),
                    }),
                (0, i.jsxs)("div", {
                    className: Q.sZ,
                    children: [
                        (0, i.jsx)(z, {
                            content: (0, i.jsx)(E.HeartIcon, { size: "xs", color: "currentColor" }),
                            onClick: te,
                            ariaLabel: q.intl.string(q.t["7lZ31J"]),
                            className: Q.ij,
                        }),
                        (0, i.jsx)(B.A, { location: f.A.SOCIAL_LAYER_STOREFRONT }),
                        (0, i.jsx)(z, {
                            onClick: tl,
                            ariaLabel: q.intl.string(q.t.hvVgAZ),
                            content: (0, i.jsx)(g.E, {
                                variant: "text-sm/medium",
                                children: q.intl.string(q.t.hvVgAZ),
                            }),
                            className: Q.AJ,
                        }),
                        X &&
                            !tt &&
                            (0, i.jsx)(z, {
                                onClick: ts,
                                ariaLabel: q.intl.string(q.t.QexSCe),
                                content: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(p.WrenchIcon, { size: "xs", color: "currentColor" }),
                                        (0, i.jsx)(g.E, {
                                            variant: "text-sm/medium",
                                            children: q.intl.string(q.t.QexSCe),
                                        }),
                                    ],
                                }),
                                className: Q.pL,
                            }),
                    ],
                }),
            ],
        })
    );
}
