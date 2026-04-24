n.d(t, { Ay: () => S, T2: () => T, r$: () => _ });
var r = n(627968),
    i = n(64700),
    l = n(681154),
    a = n(17928),
    s = n(975460),
    u = n(587895),
    o = n(429913),
    d = n(201718),
    c = n(339580),
    p = n(207803),
    A = n(633075),
    f = n(841595),
    m = n(576622),
    I = n(403362),
    y = n(369374),
    h = n(850046),
    g = n(385771);
let E = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function _(e) {
    let { enabled: t } = y.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, r.jsx)(v, { children: e.children });
}
function v(e) {
    let [t, n] = i.useState(new Set()),
        y = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(E.Provider, {
        value: {
            markAsVisible: y,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, g.A)(),
                        { data: r, isLoading: y } = (0, p.FY)(),
                        E = i.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
                        _ = i.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === l.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        v = i.useMemo(() => [...new Set(_.map((e) => e.extra.application_id))], [_]),
                        S = (0, a.bG)(
                            [u.A],
                            () =>
                                v.length > 0 &&
                                v.some(
                                    (e) =>
                                        u.A.isFetchingApplication(e) ||
                                        (null == u.A.getApplication(e) && !u.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        T = (0, o.A)(v),
                        b = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    T.filter(I.Vq)
                                        .map((e) => [e.id, (0, s.t)(e)])
                                        .filter(I.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return E.has(n.id);
                                        }),
                                ),
                            [E, T],
                        ),
                        C = i.useMemo(
                            () => [...new Set(_.filter((e) => e.extra.application_id in b).map((e) => e.author_id))],
                            [_, b],
                        ),
                        N = (0, a.cf)([c.A], () =>
                            Object.fromEntries(C.map((e) => [e, c.A.getUserIdentities(e)]).filter(I.QE)),
                        ),
                        x = (0, a.yK)([c.A], () => C.filter((e) => c.A.getFetchState(e) === c.e.NOT_FETCHED)),
                        P = (0, a.bG)([c.A], () => C.some((e) => c.A.isFetchingUser(e)));
                    i.useEffect(() => {
                        if (x.length > 0) for (let e of x) d.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [x]);
                    let R = (0, a.cf)([f.A], () =>
                            Object.fromEntries(C.map((e) => [e, f.A.getUserProfile(e) ?? null]).filter(I.QE)),
                        ),
                        M = (0, a.yK)([f.A], () =>
                            C.filter((e) => null == f.A.getUserProfile(e) && !f.A.isFetchingProfile(e)),
                        ),
                        D = (0, a.bG)([f.A], () => C.some((e) => f.A.isFetchingProfile(e)));
                    i.useEffect(() => {
                        if (M.length > 0) for (let e of M) (0, m.A)(e);
                    }, [M]);
                    let L = i.useMemo(
                            () => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null),
                            [r],
                        ),
                        O = y || S || x.length > 0 || P || M.length > 0 || D,
                        j = i.useMemo(() => {
                            if (!O && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== l.ContentInventoryEntryType.PLAYED_GAME || null == L)
                                        return e;
                                    let t = e.extra.application_id in b ? b[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let r = t.id in L ? L[t.id] : null;
                                    if (null == r) return e;
                                    let i =
                                        e.author_id in N
                                            ? N[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == i || null == i.profile) return e;
                                    let a = (0, h.M)(r, t, i.profile, n);
                                    if (null == a) return e;
                                    let s =
                                        R[e.author_id]?.widgets?.some(
                                            (e) => e instanceof A.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: a, hasWidget: s } };
                                });
                        }, [O, e, b, L, N, R, n]),
                        [F, G] = i.useState(j);
                    return (
                        i.useEffect(() => {
                            O || G(j);
                        }, [O, j, F]),
                        F
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function S(e) {
    return i.useContext(E).useInjectEntriesWithPreviewData(e);
}
function T(e) {
    let { markAsVisible: t } = i.useContext(E);
    i.useEffect(() => t(e), [t, e]);
}
