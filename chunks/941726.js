"use strict";
n.d(t, { Ay: () => y, T2: () => N, r$: () => T });
var i = n(627968),
    r = n(64700),
    s = n(681154),
    a = n(17928),
    o = n(975460),
    l = n(587895),
    u = n(429913),
    c = n(201718),
    d = n(339580),
    _ = n(207803),
    h = n(633075),
    f = n(841595),
    p = n(903209),
    E = n(403362),
    m = n(369374),
    g = n(850046),
    A = n(385771);
let I = r.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function T(e) {
    let { enabled: t } = m.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, i.jsx)(S, { children: e.children });
}
function S(e) {
    let [t, n] = r.useState(new Set()),
        m = r.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, i.jsx)(I.Provider, {
        value: {
            markAsVisible: m,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, A.A)(),
                        { data: i, isLoading: m } = (0, _.FY)(),
                        I = r.useMemo(() => new Set(i?.map((e) => e.applicationId) ?? []), [i]),
                        T = r.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === s.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        S = r.useMemo(() => [...new Set(T.map((e) => e.extra.application_id))], [T]),
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
                        v = r.useMemo(
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
                        C = r.useMemo(
                            () => [...new Set(T.filter((e) => e.extra.application_id in v).map((e) => e.author_id))],
                            [T, v],
                        ),
                        R = (0, a.cf)([d.A], () =>
                            Object.fromEntries(C.map((e) => [e, d.A.getUserIdentities(e)]).filter(E.QE)),
                        ),
                        O = (0, a.yK)([d.A], () => C.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
                        b = (0, a.bG)([d.A], () => C.some((e) => d.A.isFetchingUser(e)));
                    r.useEffect(() => {
                        if (O.length > 0) for (let e of O) c.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [O]);
                    let D = (0, a.cf)([f.A], () =>
                            Object.fromEntries(C.map((e) => [e, f.A.getUserProfile(e) ?? null]).filter(E.QE)),
                        ),
                        L = (0, a.yK)([f.A], () =>
                            C.filter((e) => null == f.A.getUserProfile(e) && !f.A.isFetchingProfile(e)),
                        ),
                        w = (0, a.bG)([f.A], () => C.some((e) => f.A.isFetchingProfile(e)));
                    r.useEffect(() => {
                        if (L.length > 0) for (let e of L) (0, p.A)(e);
                    }, [L]);
                    let M = r.useMemo(
                            () => (null != i ? Object.fromEntries(i.map((e) => [e.applicationId, e])) : null),
                            [i],
                        ),
                        P = m || y || O.length > 0 || b || L.length > 0 || w,
                        x = r.useMemo(() => {
                            if (!P && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== s.ContentInventoryEntryType.PLAYED_GAME || null == M)
                                        return e;
                                    let t = e.extra.application_id in v ? v[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let i = t.id in M ? M[t.id] : null;
                                    if (null == i) return e;
                                    let r =
                                        e.author_id in R
                                            ? R[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == r || null == r.profile) return e;
                                    let a = (0, g.M)(i, t, r.profile, n);
                                    if (null == a) return e;
                                    let o =
                                        D[e.author_id]?.widgets?.some(
                                            (e) => e instanceof h.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: a, hasWidget: o } };
                                });
                        }, [P, e, v, M, R, D, n]),
                        [k, U] = r.useState(x);
                    return (
                        r.useEffect(() => {
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
    return r.useContext(I).useInjectEntriesWithPreviewData(e);
}
function N(e) {
    let { markAsVisible: t } = r.useContext(I);
    r.useEffect(() => t(e), [t, e]);
}
