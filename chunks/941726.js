"use strict";
n.d(t, { Ay: () => S, T2: () => y, r$: () => I });
var r = n(627968),
    i = n(64700),
    s = n(681154),
    a = n(311907),
    o = n(975460),
    l = n(587895),
    u = n(429913),
    c = n(201718),
    d = n(339580),
    _ = n(207803),
    f = n(633075),
    p = n(622543),
    h = n(576622),
    m = n(403362),
    E = n(850046),
    g = n(385771);
let A = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let [t, n] = i.useState(new Set()),
        s = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(A.Provider, {
        value: { markAsVisible: s, useInjectEntriesWithPreviewData: (e) => T(e, t) },
        children: e.children,
    });
}
function T(e, t) {
    let n = (0, g.A)(),
        { data: r, isLoading: A } = (0, _.FY)(),
        I = i.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
        T = i.useMemo(
            () =>
                e
                    ?.filter((e) => e.content_type === s.ContentInventoryEntryType.PLAYED_GAME)
                    .filter((e) => t.has(e.id)) ?? [],
            [e, t],
        ),
        S = i.useMemo(() => [...new Set(T.map((e) => e.extra.application_id))], [T]),
        y = (0, a.bG)(
            [l.A],
            () =>
                S.length > 0 &&
                S.some(
                    (e) =>
                        l.A.isFetchingApplication(e) ||
                        (null == l.A.getApplication(e) && !l.A.didFetchingApplicationFail(e)),
                ),
        ),
        v = (0, u.A)(S),
        N = i.useMemo(
            () =>
                Object.fromEntries(
                    v
                        .filter(m.Vq)
                        .map((e) => [e.id, (0, o.t)(e)])
                        .filter(m.QE)
                        .filter((e) => {
                            let [t, n] = e;
                            return I.has(n.id);
                        }),
                ),
            [I, v],
        ),
        C = i.useMemo(() => [...new Set(T.filter((e) => e.extra.application_id in N).map((e) => e.author_id))], [T, N]),
        b = (0, a.cf)([d.A], () => Object.fromEntries(C.map((e) => [e, d.A.getUserIdentities(e)]).filter(m.QE))),
        R = (0, a.yK)([d.A], () => C.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
        O = (0, a.bG)([d.A], () => C.some((e) => d.A.isFetchingUser(e)));
    i.useEffect(() => {
        if (R.length > 0) for (let e of R) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
    }, [R]);
    let D = (0, a.cf)([p.A], () => Object.fromEntries(C.map((e) => [e, p.A.getUserProfile(e) ?? null]).filter(m.QE))),
        L = (0, a.yK)([p.A], () => C.filter((e) => null == p.A.getUserProfile(e) && !p.A.isFetchingProfile(e))),
        w = (0, a.bG)([p.A], () => C.some((e) => p.A.isFetchingProfile(e)));
    i.useEffect(() => {
        if (L.length > 0) for (let e of L) (0, h.A)(e);
    }, [L]);
    let x = i.useMemo(() => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null), [r]),
        M = A || y || R.length > 0 || O || L.length > 0 || w,
        P = i.useMemo(() => {
            if (!M && void 0 !== e)
                return e.map((e) => {
                    if (e.content_type !== s.ContentInventoryEntryType.PLAYED_GAME || null == x) return e;
                    let t = e.extra.application_id in N ? N[e.extra.application_id] : null;
                    if (null == t) return e;
                    let r = t.id in x ? x[t.id] : null;
                    if (null == r) return e;
                    let i = e.author_id in b ? b[e.author_id]?.find((e) => e.application_id === t.id) : null;
                    if (null == i || null == i.profile) return e;
                    let a = (0, E.M)(r, t, i.profile, n);
                    if (null == a) return e;
                    let o = D[e.author_id]?.widgets?.some((e) => e instanceof f.R && e.applicationId === t.id) ?? !1;
                    return { ...e, applicationWidgetPreview: { previewData: a, hasWidget: o } };
                });
        }, [M, e, N, x, b, D, n]),
        [k, U] = i.useState(P);
    return (
        i.useEffect(() => {
            M || U(P);
        }, [M, P, k]),
        k
    );
}
function S(e) {
    return i.useContext(A).useInjectEntriesWithPreviewData(e);
}
function y(e) {
    let { markAsVisible: t } = i.useContext(A);
    i.useEffect(() => t(e), [t, e]);
}
