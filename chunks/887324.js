"use strict";
n.d(t, { Kz: () => x, rP: () => f });
var i,
    s = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(830215),
    d = n(803306),
    c = n(49463),
    u = n(17372),
    h = n(369053),
    _ = n(961350),
    p = n(19992),
    g = n(501334),
    m = n(759788),
    A = n(366616);
l.Ay.initialize();
var f = (((i = {}).SELECTION = "selection"), (i.DSA = "dsa"), (i.TIDA = "tida"), i);
let E = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, f] = r.useState(!0),
            [x, I] = r.useState([]),
            [N, v] = r.useState("selection"),
            j = (0, l.bG)([_.default], () => _.default.isAuthenticated()),
            S = (0, l.bG)([c.A], () => c.A.hasLoadedExperiments),
            T = r.useCallback(() => {
                (0, h.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        f(!1), I(t);
                    })
                    .catch(() => {
                        f(!1), I([]);
                    });
            }, []);
        r.useEffect(() => {
            j
                ? (f(!0),
                  d
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => T())
                      .catch(() => f(!1)))
                : T();
        }, [j, T]),
            r.useEffect(() => {
                (async () => {
                    S || (await o.A.getLocationMetadata(), o.A.getExperiments());
                })();
            }, [S]);
        let C = x.filter((e) => e !== u.tY.MEDIA_TAKEDOWN),
            y = x.includes(u.tY.MEDIA_TAKEDOWN),
            b = C.length > 0,
            R = b && y;
        r.useEffect(() => {
            !i && S && !R && (b ? v("dsa") : y && v("tida"));
        }, [i, S, R, b, y]),
            r.useEffect(() => {
                i || !S || b || y || n();
            }, [i, S, b, y, n]);
        let O = r.useCallback((e) => {
                v(e);
            }, []),
            L = r.useCallback(() => {
                v("selection");
            }, []),
            w = r.useCallback(() => {
                (0, a.mMO)(() => Promise.resolve((e) => (0, s.jsx)(E, { ...e })), { dismissable: !1 });
            }, []),
            k = r.useCallback(
                (e) =>
                    null != e ? (0, s.jsx)(a.jlY, { className: A.q, "data-migration-pending": !0, children: e }) : null,
                [],
            );
        return (0, s.jsx)(a.EOs, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, s.jsx)(a.$mQ, {
                className: A.k,
                "data-migration-pending": !0,
                children:
                    !i && S && (b || y)
                        ? (0, s.jsxs)(a.tN_, {
                              width: "100%",
                              activeSlide: N,
                              centered: !1,
                              children: [
                                  (0, s.jsx)(a.q7S, { id: "selection", children: (0, s.jsx)(g.u, { onNavigate: O }) }),
                                  (0, s.jsx)(a.q7S, {
                                      id: "dsa",
                                      children: (0, s.jsx)(p.c, {
                                          showBackButton: R,
                                          onBack: R ? L : void 0,
                                          dsaCapabilities: C,
                                          renderFooter: k,
                                          onClose: n,
                                          onReopen: w,
                                      }),
                                  }),
                                  (0, s.jsx)(a.q7S, {
                                      id: "tida",
                                      children: (0, s.jsx)(m.K, {
                                          showBackButton: R,
                                          onBack: R ? L : void 0,
                                          renderFooter: k,
                                          onClose: n,
                                          onReopen: w,
                                      }),
                                  }),
                              ],
                          })
                        : (0, s.jsx)(a.BJc, {
                              gap: 16,
                              align: "center",
                              justify: "center",
                              style: { minHeight: "200px" },
                              children: (0, s.jsx)(a.y$y, {}),
                          }),
            }),
        });
    },
    x = () => (
        r.useEffect(() => {
            (0, a.mMO)(() => Promise.resolve((e) => (0, s.jsx)(E, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
