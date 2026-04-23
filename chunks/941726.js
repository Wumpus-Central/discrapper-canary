"use strict";
n.d(t, { Ay: () => y, T2: () => N, r$: () => T });
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
    E = n(403362),
    m = n(369374),
    g = n(850046),
    A = n(385771);
let I = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function T(e) {
    let { enabled: t } = m.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, r.jsx)(S, { children: e.children });
}
function S(e) {
    let [t, n] = i.useState(new Set()),
        m = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, r.jsx)(I.Provider, {
        value: {
            markAsVisible: m,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, A.A)(),
                        { data: r, isLoading: m } = (0, _.FY)(),
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
                        N = (0, u.A)(S),
                        v = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    N.filter(E.Vq)
                                        .map((e) => [e.id, (0, o.t)(e)])
                                        .filter(E.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return I.has(n.id);
                                        }),
                                ),
                            [I, N],
                        ),
                        C = i.useMemo(
                            () => [...new Set(T.filter((e) => e.extra.application_id in v).map((e) => e.author_id))],
                            [T, v],
                        ),
                        O = (0, a.cf)([d.A], () =>
                            Object.fromEntries(C.map((e) => [e, d.A.getUserIdentities(e)]).filter(E.QE)),
                        ),
                        R = (0, a.yK)([d.A], () => C.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
                        b = (0, a.bG)([d.A], () => C.some((e) => d.A.isFetchingUser(e)));
                    i.useEffect(() => {
                        if (R.length > 0) for (let e of R) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [R]);
                    let D = (0, a.cf)([p.A], () =>
                            Object.fromEntries(C.map((e) => [e, p.A.getUserProfile(e) ?? null]).filter(E.QE)),
                        ),
                        L = (0, a.yK)([p.A], () =>
                            C.filter((e) => null == p.A.getUserProfile(e) && !p.A.isFetchingProfile(e)),
                        ),
                        w = (0, a.bG)([p.A], () => C.some((e) => p.A.isFetchingProfile(e)));
                    i.useEffect(() => {
                        if (L.length > 0) for (let e of L) (0, h.A)(e);
                    }, [L]);
                    let M = i.useMemo(
                            () => (null != r ? Object.fromEntries(r.map((e) => [e.applicationId, e])) : null),
                            [r],
                        ),
                        P = m || y || R.length > 0 || b || L.length > 0 || w,
                        x = i.useMemo(() => {
                            if (!P && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== s.ContentInventoryEntryType.PLAYED_GAME || null == M)
                                        return e;
                                    let t = e.extra.application_id in v ? v[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let r = t.id in M ? M[t.id] : null;
                                    if (null == r) return e;
                                    let i =
                                        e.author_id in O
                                            ? O[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == i || null == i.profile) return e;
                                    let a = (0, g.M)(r, t, i.profile, n);
                                    if (null == a) return e;
                                    let o =
                                        D[e.author_id]?.widgets?.some(
                                            (e) => e instanceof f.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: a, hasWidget: o } };
                                });
                        }, [P, e, v, M, O, D, n]),
                        [k, U] = i.useState(x);
                    return (
                        i.useEffect(() => {
                            P || U(x);
                        }, [P, x, k]),
                        k
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function y(e) {
    return i.useContext(I).useInjectEntriesWithPreviewData(e);
}
function N(e) {
    let { markAsVisible: t } = i.useContext(I);
    i.useEffect(() => t(e), [t, e]);
}
