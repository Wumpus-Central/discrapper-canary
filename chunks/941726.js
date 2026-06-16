"use strict";
n.d(t, { Ay: () => S, T2: () => v, r$: () => I });
var l = n(627968),
    i = n(64700),
    s = n(681154),
    r = n(17928),
    a = n(975460),
    o = n(587895),
    c = n(429913),
    u = n(201718),
    d = n(339580),
    h = n(207803),
    m = n(633075),
    p = n(841595),
    f = n(903209),
    g = n(403362),
    x = n(369374),
    A = n(850046),
    E = n(385771);
let C = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let { enabled: t } = x.A.useConfig({ location: "ContentInventoryApplicationWidgetPreviewDataProvider" });
    return t ? e.children : (0, l.jsx)(y, { children: e.children });
}
function y(e) {
    let [t, n] = i.useState(new Set()),
        x = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(C.Provider, {
        value: {
            markAsVisible: x,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n = (0, E.A)(),
                        { data: l, isLoading: x } = (0, h.FY)(),
                        C = i.useMemo(() => new Set(l?.map((e) => e.applicationId) ?? []), [l]),
                        I = i.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === s.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        ),
                        y = i.useMemo(() => [...new Set(I.map((e) => e.extra.application_id))], [I]),
                        S = (0, r.bG)(
                            [o.A],
                            () =>
                                y.length > 0 &&
                                y.some(
                                    (e) =>
                                        o.A.isFetchingApplication(e) ||
                                        (null == o.A.getApplication(e) && !o.A.didFetchingApplicationFail(e)),
                                ),
                        ),
                        v = (0, c.A)(y),
                        N = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    v
                                        .filter(g.Vq)
                                        .map((e) => [e.id, (0, a.t)(e)])
                                        .filter(g.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return C.has(n.id);
                                        }),
                                ),
                            [C, v],
                        ),
                        _ = i.useMemo(
                            () => [...new Set(I.filter((e) => e.extra.application_id in N).map((e) => e.author_id))],
                            [I, N],
                        ),
                        T = (0, r.cf)([d.A], () =>
                            Object.fromEntries(_.map((e) => [e, d.A.getUserIdentities(e)]).filter(g.QE)),
                        ),
                        j = (0, r.yK)([d.A], () => _.filter((e) => d.A.getFetchState(e) === d.e.NOT_FETCHED)),
                        b = (0, r.bG)([d.A], () => _.some((e) => d.A.isFetchingUser(e)));
                    i.useEffect(() => {
                        if (j.length > 0) for (let e of j) u.A.fetchUserApplicationIdentitiesWithProfiles(e);
                    }, [j]);
                    let R = (0, r.cf)([p.A], () =>
                            Object.fromEntries(_.map((e) => [e, p.A.getUserProfile(e) ?? null]).filter(g.QE)),
                        ),
                        O = (0, r.yK)([p.A], () =>
                            _.filter((e) => null == p.A.getUserProfile(e) && !p.A.isFetchingProfile(e)),
                        ),
                        M = (0, r.bG)([p.A], () => _.some((e) => p.A.isFetchingProfile(e)));
                    i.useEffect(() => {
                        if (O.length > 0) for (let e of O) (0, f.A)(e);
                    }, [O]);
                    let w = i.useMemo(
                            () => (null != l ? Object.fromEntries(l.map((e) => [e.applicationId, e])) : null),
                            [l],
                        ),
                        L = x || S || j.length > 0 || b || O.length > 0 || M,
                        k = i.useMemo(() => {
                            if (!L && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== s.ContentInventoryEntryType.PLAYED_GAME || null == w)
                                        return e;
                                    let t = e.extra.application_id in N ? N[e.extra.application_id] : null;
                                    if (null == t) return e;
                                    let l = t.id in w ? w[t.id] : null;
                                    if (null == l) return e;
                                    let i =
                                        e.author_id in T
                                            ? T[e.author_id]?.find((e) => e.application_id === t.id)
                                            : null;
                                    if (null == i || null == i.profile) return e;
                                    let r = (0, A.M)(l, t, i.profile, n);
                                    if (null == r) return e;
                                    let a =
                                        R[e.author_id]?.widgets?.some(
                                            (e) => e instanceof m.R && e.applicationId === t.id,
                                        ) ?? !1;
                                    return { ...e, applicationWidgetPreview: { previewData: r, hasWidget: a } };
                                });
                        }, [L, e, N, w, T, R, n]),
                        [P, D] = i.useState(k);
                    return (
                        i.useEffect(() => {
                            L || D(k);
                        }, [L, k, P]),
                        P
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function S(e) {
    return i.useContext(C).useInjectEntriesWithPreviewData(e);
}
function v(e) {
    let { markAsVisible: t } = i.useContext(C);
    i.useEffect(() => t(e), [t, e]);
}
