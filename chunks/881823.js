n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(728345),
    d = n(812206),
    f = n(835473),
    _ = n(669764),
    p = n(89285),
    h = n(307741),
    m = n(50403);
function g(e) {
    let { applicationId: t, name: n, setPopoutRef: o, onClose: g } = e,
        E = (0, f.q)(t),
        b = (0, s.e7)([_.Z], () => _.Z.getGame(t)),
        {
            isFetching: y,
            fetchFailed: O,
            isFetchingDetectable: v,
            detectableFetchFailed: I,
        } = (0, s.cj)([d.Z, _.Z], () => ({
            isFetching: d.Z.isFetchingApplication(t),
            fetchFailed: d.Z.didFetchingApplicationFail(t),
            isFetchingDetectable: _.Z.isFetching(t),
            detectableFetchFailed: _.Z.didFetchingFail(t),
        })),
        T = i.useRef(null);
    i.useEffect(() => {
        c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    let S = i.useCallback(() => {
        u.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t]);
    }, [t]);
    i.useEffect(() => {
        null == o || o(null == T ? void 0 : T.current);
    }, [T, o]);
    let A = i.useMemo(
        () =>
            y || v
                ? (0, r.jsx)("div", {
                      className: a()(m.container, m.spinnerContainer),
                      children: (0, r.jsx)(l.$jN, {}),
                  })
                : O || I || null == E || null == b
                  ? (0, r.jsx)("div", {
                        className: m.container,
                        children: (0, r.jsx)(p.Z, {
                            name: n,
                            onRetry: S,
                        }),
                    })
                  : (0, r.jsx)("div", {
                        className: m.container,
                        children: (0, r.jsx)(h.ZP, {
                            application: E,
                            detectedGame: b,
                            onClose: g,
                        }),
                    }),
        [y, v, O, I, E, b, n, S, g],
    );
    return (0, r.jsx)(l.VqE, {
        ref: T,
        "aria-label": null == E ? void 0 : E.name,
        children: A,
    });
}
