n.d(t, { Ay: () => p, T2: () => m, r$: () => f });
var i = n(627968),
    r = n(64700),
    a = n(681154),
    s = n(17928),
    _ = n(975460),
    l = n(587895),
    o = n(429913),
    E = n(201718),
    d = n(339580),
    c = n(207803),
    u = n(633075),
    I = n(841595),
    A = n(576622),
    T = n(403362),
    S = n(369374),
    N = n(850046),
    O = n(385771);
let R = r.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function f(e) {
    let { enabled: t } = S.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, i.jsx)(C, { children: e.children });
}
function C(e) {
    let [t, n] = r.useState(new Set()),
        S = r.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, i.jsx)(R.Provider, {
        value: {
            markAsVisible: S,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, O.A)(),
                        { data: i, isLoading: S } = (0, c.FY)(),
                        R = r.useMemo(() => new Set(i?.map((e) => e.applicationId) ?? []), [i]),
                        f = r.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === a.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        C = r.useMemo(() => [...new Set(f.map((e) => e.extra.application_id))], [f]),
                        p = (0, s.bG)(
                            [l.A],
                            () =>
                                C.length > 0 &&
                                C.some(
                                    (e) =>
                                        l.A.isFetchingApplication(e) ||
                                        (null == l.A.getApplication(e) && !l.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        m = (0, o.A)(C),
                        L = r.useMemo(
                            () =>
                                Object.fromEntries(
                                    m
                                        .filter(T.Vq)
                                        .map((e) => [e.id, (0, _.t)(e)])
                                        .filter(T.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return R.has(n.id);
                                        }),
                                ),
                            [R, m],
                        ),
                        D = r.useMemo(
                            () => [...new Set(f.filter((e) => e.extra.application_id in L).map((e) => e.author_id))],
                            [f, L],
                        ),
                        h = (0, s.cf)([d.A], () =>
                            Object.fromEntries(D.map((e) => [e, d.A.getUserIdentities(e)]).filter(T.QE)),
                        ),
                        g = (0, s.yK)([d.A], () => D.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
                        b = (0, s.bG)([d.A], () => D.some((e) => d.A.isFetchingUser(e)));
                    r.useEffect(() => {
                        if (g.length > 0) for (let e of g) E.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [g]);
                    let U = (0, s.cf)([I.A], () =>
                            Object.fromEntries(D.map((e) => [e, I.A.getUserProfile(e) ?? null]).filter(T.QE)),
                        ),
                        P = (0, s.yK)([I.A], () =>
                            D.filter((e) => null == I.A.getUserProfile(e) && !I.A.isFetchingProfile(e)),
                        ),
                        M = (0, s.bG)([I.A], () => D.some((e) => I.A.isFetchingProfile(e)));
                    r.useEffect(() => {
                        if (P.length > 0) for (let e of P) (0, A.A)(e);
                    }, [P]);
                    let y = r.useMemo(
                            () => (null != i ? Object.fromEntries(i.map((e) => [e.applicationId, e])) : null),
                            [i],
                        ),
                        G = S || p || g.length > 0 || b || P.length > 0 || M,
                        v = r.useMemo(() => {
                            if (!G && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== a.ContentInventoryEntryType.PLAYED_GAME || null == y)
                                        return e;
                                    let t = e.extra.application_id in L ? L[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let i = t.id in y ? y[t.id] : null;
                                    if (null == i) return e;
                                    let r =
                                        e.author_id in h
                                            ? h[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == r || null == r.profile) return e;
                                    let s = (0, N.M)(i, t, r.profile, n);
                                    if (null == s) return e;
                                    let _ =
                                        U[e.author_id]?.widgets?.some(
                                            (e) => e instanceof u.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: s, hasWidget: _ } };
                                });
                        }, [G, e, L, y, h, U, n]),
                        [B, w] = r.useState(v);
                    return (
                        r.useEffect(() => {
                            G || w(v);
                        }, [G, v, B]),
                        B
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function p(e) {
    return r.useContext(R).useInjectEntriesWithPreviewData(e);
}
function m(e) {
    let { markAsVisible: t } = r.useContext(R);
    r.useEffect(() => t(e), [t, e]);
}
