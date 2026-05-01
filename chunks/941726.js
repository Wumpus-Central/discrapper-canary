n.d(t, { Ay: () => O, T2: () => C, r$: () => p });
var i = n(627968),
    a = n(64700),
    r = n(681154),
    s = n(17928),
    l = n(975460),
    o = n(587895),
    d = n(429913),
    c = n(201718),
    _ = n(339580),
    E = n(207803),
    u = n(633075),
    A = n(841595),
    I = n(576622),
    T = n(403362),
    h = n(369374),
    S = n(850046),
    N = n(385771);
let f = a.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function p(e) {
    let { enabled: t } = h.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, i.jsx)(m, { children: e.children });
}
function m(e) {
    let [t, n] = a.useState(new Set()),
        h = a.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, i.jsx)(f.Provider, {
        value: {
            markAsVisible: h,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, N.A)(),
                        { data: i, isLoading: h } = (0, E.FY)(),
                        f = a.useMemo(() => new Set(i?.map((e) => e.applicationId) ?? []), [i]),
                        p = a.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === r.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        m = a.useMemo(() => [...new Set(p.map((e) => e.extra.application_id))], [p]),
                        O = (0, s.bG)(
                            [o.A],
                            () =>
                                m.length > 0 &&
                                m.some(
                                    (e) =>
                                        o.A.isFetchingApplication(e) ||
                                        (null == o.A.getApplication(e) && !o.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        C = (0, d.A)(m),
                        R = a.useMemo(
                            () =>
                                Object.fromEntries(
                                    C.filter(T.Vq)
                                        .map((e) => [e.id, (0, l.t)(e)])
                                        .filter(T.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return f.has(n.id);
                                        }),
                                ),
                            [f, C],
                        ),
                        g = a.useMemo(
                            () => [...new Set(p.filter((e) => e.extra.application_id in R).map((e) => e.author_id))],
                            [p, R],
                        ),
                        L = (0, s.cf)([_.A], () =>
                            Object.fromEntries(g.map((e) => [e, _.A.getUserIdentities(e)]).filter(T.QE)),
                        ),
                        D = (0, s.yK)([_.A], () => g.filter((e) => _.A.getFetchState(e) === _.e.NOT_FETCHED)),
                        b = (0, s.bG)([_.A], () => g.some((e) => _.A.isFetchingUser(e)));
                    a.useEffect(() => {
                        if (D.length > 0) for (let e of D) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [D]);
                    let M = (0, s.cf)([A.A], () =>
                            Object.fromEntries(g.map((e) => [e, A.A.getUserProfile(e) ?? null]).filter(T.QE)),
                        ),
                        P = (0, s.yK)([A.A], () =>
                            g.filter((e) => null == A.A.getUserProfile(e) && !A.A.isFetchingProfile(e)),
                        ),
                        U = (0, s.bG)([A.A], () => g.some((e) => A.A.isFetchingProfile(e)));
                    a.useEffect(() => {
                        if (P.length > 0) for (let e of P) (0, I.A)(e);
                    }, [P]);
                    let v = a.useMemo(
                            () => (null != i ? Object.fromEntries(i.map((e) => [e.applicationId, e])) : null),
                            [i],
                        ),
                        y = h || O || D.length > 0 || b || P.length > 0 || U,
                        G = a.useMemo(() => {
                            if (!y && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== r.ContentInventoryEntryType.PLAYED_GAME || null == v)
                                        return e;
                                    let t = e.extra.application_id in R ? R[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let i = t.id in v ? v[t.id] : null;
                                    if (null == i) return e;
                                    let a =
                                        e.author_id in L
                                            ? L[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == a || null == a.profile) return e;
                                    let s = (0, S.M)(i, t, a.profile, n);
                                    if (null == s) return e;
                                    let l =
                                        M[e.author_id]?.widgets?.some(
                                            (e) => e instanceof u.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: s, hasWidget: l } };
                                });
                        }, [y, e, R, v, L, M, n]),
                        [w, x] = a.useState(G);
                    return (
                        a.useEffect(() => {
                            y || x(G);
                        }, [y, G, w]),
                        w
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function O(e) {
    return a.useContext(f).useInjectEntriesWithPreviewData(e);
}
function C(e) {
    let { markAsVisible: t } = a.useContext(f);
    a.useEffect(() => t(e), [t, e]);
}
