"use strict";
n.d(t, { Ay: () => y, T2: () => S, r$: () => I });
var r = n(627968),
    i = n(64700),
    a = n(681154),
    s = n(311907),
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
    g = n(850046),
    E = n(385771);
let A = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let [t, n] = i.useState(new Set()),
        a = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(A.Provider, {
        value: { markAsVisible: a, useInjectEntriesWithPreviewData: (e) => T(e, t) },
        children: e.children,
    });
}
function T(e, t) {
    let n = (0, E.A)(),
        { data: r, isLoading: A } = (0, _.FY)(),
        I = i.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
        T = i.useMemo(
            () =>
                e
                    ?.filter((e) => e.content_type === a.ContentInventoryEntryType.PLAYED_GAME)
                    .filter((e) => t.has(e.id)) ?? [],
            [e, t],
        ),
        y = i.useMemo(() => [...new Set(T.map((e) => e.extra.application_id))], [T]),
        S = (0, s.bG)(
            [l.A],
            () =>
                y.length > 0 &&
                y.some(
                    (e) =>
                        l.A.isFetchingApplication(e) ||
                        (null == l.A.getApplication(e) && !l.A.didFetchingApplicationFail(e)),
                ),
        ),
        v = (0, u.A)(y),
        C = i.useMemo(
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
        b = i.useMemo(() => [...new Set(T.filter((e) => e.extra.application_id in C).map((e) => e.author_id))], [T, C]),
        N = (0, s.cf)([d.A], () => Object.fromEntries(b.map((e) => [e, d.A.getUserIdentities(e)]).filter(m.QE))),
        R = (0, s.yK)([d.A], () => b.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
        O = (0, s.bG)([d.A], () => b.some((e) => d.A.isFetchingUser(e)));
    i.useEffect(() => {
        if (R.length > 0) for (let e of R) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
    }, [R]);
    let D = (0, s.cf)([p.A], () => Object.fromEntries(b.map((e) => [e, p.A.getUserProfile(e) ?? null]).filter(m.QE))),
        L = (0, s.yK)([p.A], () => b.filter((e) => null == p.A.getUserProfile(e) && !p.A.isFetchingProfile(e))),
        w = (0, s.bG)([p.A], () => b.some((e) => p.A.isFetchingProfile(e)));
    i.useEffect(() => {
        if (L.length > 0) for (let e of L) (0, h.A)(e);
    }, [L]);
    let x = i.useMemo(() => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null), [r]),
        P = A || S || R.length > 0 || O || L.length > 0 || w,
        M = i.useMemo(() => {
            if (!P && void 0 !== e)
                return e.map((e) => {
                    if (e.content_type !== a.ContentInventoryEntryType.PLAYED_GAME || null == x) return e;
                    let t = e.extra.application_id in C ? C[e.extra.application_id] : null;
                    if (null == t) return e;
                    let r = t.id in x ? x[t.id] : null;
                    if (null == r) return e;
                    let i = e.author_id in N ? N[e.author_id]?.find((e) => e.application_id === t.id) : null;
                    if (null == i || null == i.profile) return e;
                    let s = (0, g.M)(r, t, i.profile, n);
                    if (null == s) return e;
                    let o = D[e.author_id]?.widgets?.some((e) => e instanceof f.R && e.applicationId === t.id) ?? !1;
                    return { ...e, applicationWidgetPreview: { previewData: s, hasWidget: o } };
                });
        }, [P, e, C, x, N, D, n]),
        [k, U] = i.useState(M);
    return (
        i.useEffect(() => {
            P || U(M);
        }, [P, M, k]),
        k
    );
}
function y(e) {
    return i.useContext(A).useInjectEntriesWithPreviewData(e);
}
function S(e) {
    let { markAsVisible: t } = i.useContext(A);
    i.useEffect(() => t(e), [t, e]);
}
