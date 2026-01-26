n.d(t, {
    Ay: () => T,
    T2: () => C,
    r$: () => I,
}),
    n(896048),
    n(446912);
var r = n(627968),
    i = n(64700),
    a = n(681154),
    s = n(311907),
    o = n(975460),
    l = n(587895),
    c = n(429913),
    u = n(201718),
    d = n(339580),
    f = n(207803),
    p = n(633075),
    _ = n(622543),
    h = n(576622),
    m = n(403362),
    g = n(850046),
    E = n(385771);

function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = i.createContext({
    markAsVisible: () => {},
    useInjectEntriesWithPreviewData: (e) => e,
});

function I(e) {
    let [t, n] = i.useState(new Set()),
        a = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(A.Provider, {
        value: {
            markAsVisible: a,
            useInjectEntriesWithPreviewData: (e) => S(e, t),
        },
        children: e.children,
    });
}

function S(e, t) {
    let n = (0, E.A)(),
        { data: r, isLoading: y } = (0, f.FY)(),
        O = i.useMemo(() => {
            var e;
            return new Set(null != (e = null == r ? void 0 : r.map((e) => e.applicationId)) ? e : []);
        }, [r]),
        A = i.useMemo(() => {
            var n;
            return null !=
                (n =
                    null == e ? void 0 : e.filter((e) => e.content_type === a.I.PLAYED_GAME).filter((e) => t.has(e.id)))
                ? n
                : [];
        }, [e, t]),
        I = i.useMemo(() => [...new Set(A.map((e) => e.extra.application_id))], [A]),
        S = (0, s.bG)(
            [l.A],
            () =>
                I.length > 0 &&
                I.some(
                    (e) =>
                        l.A.isFetchingApplication(e) ||
                        (null == l.A.getApplication(e) && !l.A.didFetchingApplicationFail(e)),
                ),
        ),
        T = (0, c.A)(I),
        C = i.useMemo(
            () =>
                Object.fromEntries(
                    T.filter(m.Vq)
                        .map((e) => [e.id, (0, o.t)(e)])
                        .filter(m.QE)
                        .filter((e) => {
                            let [t, n] = e;
                            return O.has(n.id);
                        }),
                ),
            [O, T],
        ),
        N = i.useMemo(() => [...new Set(A.filter((e) => e.extra.application_id in C).map((e) => e.author_id))], [A, C]),
        w = (0, s.cf)([d.A], () => Object.fromEntries(N.map((e) => [e, d.A.getUserIdentities(e)]).filter(m.QE))),
        R = (0, s.yK)([d.A], () => N.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
        P = (0, s.bG)([d.A], () => N.some((e) => d.A.isFetchingUser(e)));
    i.useEffect(() => {
        if (R.length > 0) for (let e of R) u.A.fetchUserApplicationIdentitiesWithProfiles(e);
    }, [R]);
    let D = (0, s.cf)([_.A], () =>
            Object.fromEntries(
                N.map((e) => {
                    var t;
                    return [e, null != (t = _.A.getUserProfile(e)) ? t : null];
                }).filter(m.QE),
            ),
        ),
        x = (0, s.yK)([_.A], () => N.filter((e) => null == _.A.getUserProfile(e) && !_.A.isFetchingProfile(e))),
        L = (0, s.bG)([_.A], () => N.some((e) => _.A.isFetchingProfile(e)));
    i.useEffect(() => {
        if (x.length > 0) for (let e of x) (0, h.A)(e);
    }, [x]);
    let j = i.useMemo(() => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null), [r]),
        M = y || S || R.length > 0 || P || x.length > 0 || L,
        k = i.useMemo(() => {
            if (!M && void 0 !== e)
                return e.map((e) => {
                    var t, r, i, s;
                    if (e.content_type !== a.I.PLAYED_GAME || null == j) return e;
                    let o = e.extra.application_id in C ? C[e.extra.application_id] : null;
                    if (null == o) return e;
                    let l = o.id in j ? j[o.id] : null;
                    if (null == l) return e;
                    let c =
                        e.author_id in w
                            ? null == (r = w[e.author_id])
                                ? void 0
                                : r.find((e) => e.application_id === o.id)
                            : null;
                    if (null == c || null == c.profile) return e;
                    let u = (0, g.M)(l, o, c.profile, n);
                    if (null == u) return e;
                    let d =
                        null !=
                            (t =
                                null == (s = D[e.author_id]) || null == (i = s.widgets)
                                    ? void 0
                                    : i.some((e) => e instanceof p.R && e.applicationId === o.id)) && t;
                    return v(b({}, e), {
                        applicationWidgetPreview: {
                            previewData: u,
                            hasWidget: d,
                        },
                    });
                });
        }, [M, e, C, j, w, D, n]),
        [U, G] = i.useState(k);
    return (
        i.useEffect(() => {
            M || G(k);
        }, [M, k, U]),
        U
    );
}

function T(e) {
    return i.useContext(A).useInjectEntriesWithPreviewData(e);
}

function C(e) {
    let { markAsVisible: t } = i.useContext(A);
    i.useEffect(() => t(e), [t, e]);
}
