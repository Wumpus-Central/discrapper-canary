"use strict";
n.d(t, { Ay: () => S, T2: () => v, r$: () => T });
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
    h = n(622543),
    p = n(576622),
    g = n(403362),
    E = n(850046),
    A = n(385771);
let I = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function T(e) {
    let [t, n] = i.useState(new Set()),
        a = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(I.Provider, {
        value: { markAsVisible: a, useInjectEntriesWithPreviewData: (e) => y(e, t) },
        children: e.children,
    });
}
function y(e, t) {
    let n = (0, A.A)(),
        { data: r, isLoading: I } = (0, _.FY)(),
        T = i.useMemo(() => new Set(r?.map((e) => e.applicationId) ?? []), [r]),
        y = i.useMemo(
            () =>
                e
                    ?.filter((e) => e.content_type === a.ContentInventoryEntryType.PLAYED_GAME)
                    .filter((e) => t.has(e.id)) ?? [],
            [e, t],
        ),
        S = i.useMemo(() => [...new Set(y.map((e) => e.extra.application_id))], [y]),
        v = (0, s.bG)(
            [l.A],
            () =>
                S.length > 0 &&
                S.some(
                    (e) =>
                        l.A.isFetchingApplication(e) ||
                        (null == l.A.getApplication(e) && !l.A.didFetchingApplicationFail(e)),
                ),
        ),
        C = (0, u.A)(S),
        b = i.useMemo(
            () =>
                Object.fromEntries(
                    C.filter(g.Vq)
                        .map((e) => [e.id, (0, o.t)(e)])
                        .filter(g.QE)
                        .filter((e) => {
                            let [t, n] = e;
                            return T.has(n.id);
                        }),
                ),
            [T, C],
        ),
        N = i.useMemo(() => [...new Set(y.filter((e) => e.extra.application_id in b).map((e) => e.author_id))], [y, b]),
        R = (0, s.cf)([d.A], () => Object.fromEntries(N.map((e) => [e, d.A.getUserIdentities(e)]).filter(g.QE))),
        O = (0, s.yK)([d.A], () => N.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
        D = (0, s.bG)([d.A], () => N.some((e) => d.A.isFetchingUser(e)));
    i.useEffect(() => {
        if (O.length > 0) for (let e of O) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
    }, [O]);
    let L = (0, s.cf)([h.A], () => Object.fromEntries(N.map((e) => [e, h.A.getUserProfile(e) ?? null]).filter(g.QE))),
        w = (0, s.yK)([h.A], () => N.filter((e) => null == h.A.getUserProfile(e) && !h.A.isFetchingProfile(e))),
        x = (0, s.bG)([h.A], () => N.some((e) => h.A.isFetchingProfile(e)));
    i.useEffect(() => {
        if (w.length > 0) for (let e of w) (0, p.A)(e);
    }, [w]);
    let P = i.useMemo(() => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null), [r]),
        M = I || v || O.length > 0 || D || w.length > 0 || x,
        k = i.useMemo(() => {
            if (!M && void 0 !== e)
                return e.map((e) => {
                    if (e.content_type !== a.ContentInventoryEntryType.PLAYED_GAME || null == P) return e;
                    let t = e.extra.application_id in b ? b[e.extra.application_id] : null;
                    if (null == t) return e;
                    let r = t.id in P ? P[t.id] : null;
                    if (null == r) return e;
                    let i = e.author_id in R ? R[e.author_id]?.find((e) => e.application_id === t.id) : null;
                    if (null == i || null == i.profile) return e;
                    let s = (0, E.M)(r, t, i.profile, n);
                    if (null == s) return e;
                    let o = L[e.author_id]?.widgets?.some((e) => e instanceof f.R && e.applicationId === t.id) ?? !1;
                    return { ...e, applicationWidgetPreview: { previewData: s, hasWidget: o } };
                });
        }, [M, e, b, P, R, L, n]),
        [U, G] = i.useState(k);
    return (
        i.useEffect(() => {
            M || G(k);
        }, [M, k, U]),
        U
    );
}
function S(e) {
    return i.useContext(I).useInjectEntriesWithPreviewData(e);
}
function v(e) {
    let { markAsVisible: t } = i.useContext(I);
    i.useEffect(() => t(e), [t, e]);
}
