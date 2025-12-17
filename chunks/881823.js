n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(493773),
    d = n(728345),
    f = n(812206),
    p = n(835473),
    _ = n(669764),
    m = n(810568),
    h = n(89285),
    g = n(307741),
    E = n(293159);
function b(e) {
    let { applicationId: t, name: n, setPopoutRef: a, onClose: b, source: y } = e,
        O = (0, p.q)(t),
        v = (0, s.e7)([_.Z], () => _.Z.getGame(t)),
        {
            isFetching: S,
            fetchFailed: I,
            isFetchingDetectable: T,
            detectableFetchFailed: C,
        } = (0, s.cj)([f.Z, _.Z], () => ({
            isFetching: f.Z.isFetchingApplication(t),
            fetchFailed: f.Z.didFetchingApplicationFail(t),
            isFetchingDetectable: _.Z.isFetching(t),
            detectableFetchFailed: _.Z.didFetchingFail(t),
        })),
        A = i.useRef(null),
        N = i.useMemo(() => (0, m.fP)(), []);
    i.useEffect(() => {
        c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    let P = i.useCallback(() => {
        d.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    i.useEffect(() => {
        null == a || a(null == A ? void 0 : A.current);
    }, [A, a]),
        (0, u.ZP)(() => {
            var e;
            (0, m.IS)({
                source: y,
                viewId: N,
                applicationId: t,
                gameName: null != (e = null == v ? void 0 : v.name) ? e : "",
                profileType: m.j7.MiniProfile,
            });
        });
    let R = i.useMemo(
        () =>
            S || T
                ? (0, r.jsx)("div", {
                      className: o()(E.container, E.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : I || C || null == O || null == v
                  ? (0, r.jsx)("div", {
                        className: E.container,
                        children: (0, r.jsx)(h.Z, {
                            name: n,
                            onRetry: P,
                        }),
                    })
                  : (0, r.jsx)("div", {
                        className: E.container,
                        children: (0, r.jsx)(g.ZP, {
                            application: O,
                            detectedGame: v,
                            onClose: b,
                        }),
                    }),
        [S, T, I, C, O, v, n, P, b],
    );
    return (0, r.jsx)(l.VqE, {
        ref: A,
        "aria-label": null == O ? void 0 : O.name,
        children: R,
    });
}
