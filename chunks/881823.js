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
    _ = n(835473),
    p = n(669764),
    h = n(810568),
    m = n(89285),
    g = n(307741),
    E = n(518587);
function b(e) {
    let { applicationId: t, name: n, setPopoutRef: a, onClose: b, source: y } = e,
        O = (0, _.q)(t),
        v = (0, s.e7)([p.Z], () => p.Z.getGame(t)),
        {
            isFetching: I,
            fetchFailed: T,
            isFetchingDetectable: S,
            detectableFetchFailed: A,
        } = (0, s.cj)([f.Z, p.Z], () => ({
            isFetching: f.Z.isFetchingApplication(t),
            fetchFailed: f.Z.didFetchingApplicationFail(t),
            isFetchingDetectable: p.Z.isFetching(t),
            detectableFetchFailed: p.Z.didFetchingFail(t),
        })),
        C = i.useRef(null),
        N = i.useMemo(() => (0, h.fP)(), []);
    i.useEffect(() => {
        c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    let R = i.useCallback(() => {
        d.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    i.useEffect(() => {
        null == a || a(null == C ? void 0 : C.current);
    }, [C, a]),
        (0, u.ZP)(() => {
            var e;
            (0, h.IS)({
                source: y,
                viewId: N,
                applicationId: t,
                gameName: null != (e = null == v ? void 0 : v.name) ? e : "",
                profileType: h.j7.MiniProfile,
            });
        });
    let P = i.useMemo(
        () =>
            I || S
                ? (0, r.jsx)("div", {
                      className: o()(E.container, E.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : T || A || null == O || null == v
                  ? (0, r.jsx)("div", {
                        className: E.container,
                        children: (0, r.jsx)(m.Z, {
                            name: n,
                            onRetry: R,
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
        [I, S, T, A, O, v, n, R, b],
    );
    return (0, r.jsx)(l.VqE, {
        ref: C,
        "aria-label": null == O ? void 0 : O.name,
        children: P,
    });
}
