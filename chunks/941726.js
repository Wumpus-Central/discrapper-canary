n.d(t, { Ay: () => y, T2: () => T, r$: () => I });
var r = n(627968),
    l = n(64700),
    i = n(681154),
    a = n(311907),
    s = n(975460),
    o = n(587895),
    u = n(429913),
    c = n(201718),
    d = n(339580),
    _ = n(207803),
    p = n(633075),
    h = n(622543),
    m = n(576622),
    A = n(403362),
    f = n(369374),
    g = n(850046),
    E = n(385771);
let C = l.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let { enabled: t } = f.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, r.jsx)(v, { children: e.children });
}
function v(e) {
    let [t, n] = l.useState(new Set()),
        f = l.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(C.Provider, {
        value: {
            markAsVisible: f,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, E.A)(),
                        { data: r, isLoading: f } = (0, _.FY)(),
                        C = l.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
                        I = l.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === i.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        v = l.useMemo(() => [...new Set(I.map((e) => e.extra.application_id))], [I]),
                        y = (0, a.bG)(
                            [o.A],
                            () =>
                                v.length > 0 &&
                                v.some(
                                    (e) =>
                                        o.A.isFetchingApplication(e) ||
                                        (null == o.A.getApplication(e) && !o.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        T = (0, u.A)(v),
                        x = l.useMemo(
                            () =>
                                Object.fromEntries(
                                    T.filter(A.Vq)
                                        .map((e) => [e.id, (0, s.t)(e)])
                                        .filter(A.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return C.has(n.id);
                                        }),
                                ),
                            [C, T],
                        ),
                        b = l.useMemo(
                            () => [...new Set(I.filter((e) => e.extra.application_id in x).map((e) => e.author_id))],
                            [I, x],
                        ),
                        S = (0, a.cf)([d.A], () =>
                            Object.fromEntries(b.map((e) => [e, d.A.getUserIdentities(e)]).filter(A.QE)),
                        ),
                        N = (0, a.yK)([d.A], () => b.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
                        L = (0, a.bG)([d.A], () => b.some((e) => d.A.isFetchingUser(e)));
                    l.useEffect(() => {
                        if (N.length > 0) for (let e of N) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [N]);
                    let O = (0, a.cf)([h.A], () =>
                            Object.fromEntries(b.map((e) => [e, h.A.getUserProfile(e) ?? null]).filter(A.QE)),
                        ),
                        R = (0, a.yK)([h.A], () =>
                            b.filter((e) => null == h.A.getUserProfile(e) && !h.A.isFetchingProfile(e)),
                        ),
                        j = (0, a.bG)([h.A], () => b.some((e) => h.A.isFetchingProfile(e)));
                    l.useEffect(() => {
                        if (R.length > 0) for (let e of R) (0, m.A)(e);
                    }, [R]);
                    let P = l.useMemo(
                            () => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null),
                            [r],
                        ),
                        D = f || y || N.length > 0 || L || R.length > 0 || j,
                        M = l.useMemo(() => {
                            if (!D && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== i.ContentInventoryEntryType.PLAYED_GAME || null == P)
                                        return e;
                                    let t = e.extra.application_id in x ? x[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let r = t.id in P ? P[t.id] : null;
                                    if (null == r) return e;
                                    let l =
                                        e.author_id in S
                                            ? S[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == l || null == l.profile) return e;
                                    let a = (0, g.M)(r, t, l.profile, n);
                                    if (null == a) return e;
                                    let s =
                                        O[e.author_id]?.widgets?.some(
                                            (e) => e instanceof p.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: a, hasWidget: s } };
                                });
                        }, [D, e, x, P, S, O, n]),
                        [F, G] = l.useState(M);
                    return (
                        l.useEffect(() => {
                            D || G(M);
                        }, [D, M, F]),
                        F
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function y(e) {
    return l.useContext(C).useInjectEntriesWithPreviewData(e);
}
function T(e) {
    let { markAsVisible: t } = l.useContext(C);
    l.useEffect(() => t(e), [t, e]);
}
