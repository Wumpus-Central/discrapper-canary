n.d(t, { Ay: () => g, T2: () => v, r$: () => T });
var r = n(627968),
    i = n(64700),
    l = n(681154),
    o = n(17928),
    u = n(975460),
    s = n(587895),
    a = n(429913),
    d = n(201718),
    c = n(339580),
    y = n(207803),
    p = n(633075),
    A = n(841595),
    E = n(576622),
    f = n(403362),
    I = n(369374),
    _ = n(850046),
    h = n(385771);
let C = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function T(e) {
    let { enabled: t } = I.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, r.jsx)(m, { children: e.children });
}
function m(e) {
    let [t, n] = i.useState(new Set()),
        I = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(C.Provider, {
        value: {
            markAsVisible: I,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, h.A)(),
                        { data: r, isLoading: I } = (0, y.FY)(),
                        C = i.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
                        T = i.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === l.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        m = i.useMemo(() => [...new Set(T.map((e) => e.extra.application_id))], [T]),
                        g = (0, o.bG)(
                            [s.A],
                            () =>
                                m.length > 0 &&
                                m.some(
                                    (e) =>
                                        s.A.isFetchingApplication(e) ||
                                        (null == s.A.getApplication(e) && !s.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        v = (0, a.A)(m),
                        P = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    v
                                        .filter(f.Vq)
                                        .map((e) => [e.id, (0, u.t)(e)])
                                        .filter(f.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return C.has(n.id);
                                        }),
                                ),
                            [C, v],
                        ),
                        S = i.useMemo(
                            () => [...new Set(T.filter((e) => e.extra.application_id in P).map((e) => e.author_id))],
                            [T, P],
                        ),
                        M = (0, o.cf)([c.A], () =>
                            Object.fromEntries(S.map((e) => [e, c.A.getUserIdentities(e)]).filter(f.QE)),
                        ),
                        D = (0, o.yK)([c.A], () => S.filter((e) => c.A.getFetchState(e) === c.e.NOT_FETCHED)),
                        x = (0, o.bG)([c.A], () => S.some((e) => c.A.isFetchingUser(e)));
                    i.useEffect(() => {
                        if (D.length > 0) for (let e of D) d.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [D]);
                    let j = (0, o.cf)([A.A], () =>
                            Object.fromEntries(S.map((e) => [e, A.A.getUserProfile(e) ?? null]).filter(f.QE)),
                        ),
                        w = (0, o.yK)([A.A], () =>
                            S.filter((e) => null == A.A.getUserProfile(e) && !A.A.isFetchingProfile(e)),
                        ),
                        b = (0, o.bG)([A.A], () => S.some((e) => A.A.isFetchingProfile(e)));
                    i.useEffect(() => {
                        if (w.length > 0) for (let e of w) (0, E.A)(e);
                    }, [w]);
                    let G = i.useMemo(
                            () => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null),
                            [r],
                        ),
                        L = I || g || D.length > 0 || x || w.length > 0 || b,
                        O = i.useMemo(() => {
                            if (!L && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== l.ContentInventoryEntryType.PLAYED_GAME || null == G)
                                        return e;
                                    let t = e.extra.application_id in P ? P[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let r = t.id in G ? G[t.id] : null;
                                    if (null == r) return e;
                                    let i =
                                        e.author_id in M
                                            ? M[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == i || null == i.profile) return e;
                                    let o = (0, _.M)(r, t, i.profile, n);
                                    if (null == o) return e;
                                    let u =
                                        j[e.author_id]?.widgets?.some(
                                            (e) => e instanceof p.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: o, hasWidget: u } };
                                });
                        }, [L, e, P, G, M, j, n]),
                        [R, N] = i.useState(O);
                    return (
                        i.useEffect(() => {
                            L || N(O);
                        }, [L, O, R]),
                        R
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function g(e) {
    return i.useContext(C).useInjectEntriesWithPreviewData(e);
}
function v(e) {
    let { markAsVisible: t } = i.useContext(C);
    i.useEffect(() => t(e), [t, e]);
}
