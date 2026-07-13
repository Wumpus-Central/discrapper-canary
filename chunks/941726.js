"use strict";
n.d(t, { Ay: () => S, T2: () => N, r$: () => g });
var i = n(627968),
    r = n(64700),
    a = n(598748),
    s = n(681154),
    l = n(17928),
    o = n(975460),
    d = n(587895),
    c = n(429913),
    u = n(201718),
    _ = n(339580),
    E = n(633075),
    A = n(321191),
    h = n(903209),
    I = n(885386),
    f = n(403362),
    p = n(382483),
    T = n(385113);
let m = r.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function g(e) {
    let [t, n] = r.useState(new Set()),
        g = r.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, i.jsx)(m.Provider, {
        value: {
            markAsVisible: g,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n,
                        i,
                        m,
                        g,
                        S,
                        N,
                        C,
                        O,
                        R,
                        L,
                        D,
                        y,
                        v,
                        b,
                        M,
                        P,
                        { appsWithConfigs: U, isLoadingConfigs: w } =
                            ((n = I.Q_.useSetting()),
                            r.useEffect(() => {
                                (0, p.Wq)().catch(() => {});
                            }, []),
                            r.useEffect(() => {
                                n && (0, p.i$)().catch(() => {});
                            }, [n]),
                            (i = (0, l.bG)([T.A], () => T.A.getFeaturedFetchState())),
                            (m = (0, l.bG)([T.A], () => T.A.getDeveloperFetchState())),
                            (g = (0, l.yK)([T.A], () => T.A.getFeaturedApplicationIds())),
                            (S = (0, l.yK)([T.A], () => T.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: r.useMemo(() => new Set([...g, ...S]), [g, S]),
                                isLoadingConfigs:
                                    i === T.e.NOT_FETCHED ||
                                    i === T.e.FETCHING ||
                                    (n && (m === T.e.NOT_FETCHED || m === T.e.FETCHING)),
                            }),
                        {
                            widgetApps: G,
                            userIdsWhoMightHaveWidgetData: x,
                            isFetchingApplications: k,
                        } = ((N = r.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === s.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        )),
                        (C = r.useMemo(() => [...new Set(N.map((e) => e.extra.application_id))], [N])),
                        (O = (0, l.bG)(
                            [d.A],
                            () =>
                                C.length > 0 &&
                                C.some(
                                    (e) =>
                                        d.A.isFetchingApplication(e) ||
                                        (null == d.A.getApplication(e) && !d.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (R = (0, c.A)(C)),
                        (L = r.useMemo(
                            () =>
                                Object.fromEntries(
                                    R.filter(f.Vq)
                                        .map((e) => [e.id, (0, o.t)(e)])
                                        .filter(f.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return U.has(n.id);
                                        }),
                                ),
                            [U, R],
                        )),
                        (D = r.useMemo(
                            () => [...new Set(N.filter((e) => e.extra.application_id in L).map((e) => e.author_id))],
                            [N, L],
                        )),
                        { widgetApps: L, userIdsWhoMightHaveWidgetData: D, isFetchingApplications: O }),
                        { identitiesByUserId: F, isLoadingIdentities: V } =
                            ((y = (0, l.cf)([_.A], () =>
                                Object.fromEntries(x.map((e) => [e, _.A.getUserIdentities(e)]).filter(f.QE)),
                            )),
                            (v = (0, l.bG)([_.A], () =>
                                x.some((e) => _.A.getFetchState(e) === _.e.NOT_FETCHED || _.A.isFetchingUser(e)),
                            )),
                            r.useEffect(() => {
                                x.length > 0 && u.P.fetchMany(...x.map((e) => [e]));
                            }, [x]),
                            { identitiesByUserId: y, isLoadingIdentities: v }),
                        { profilesByUserId: B, isLoadingProfiles: H } =
                            ((b = (0, l.cf)([A.A], () =>
                                Object.fromEntries(x.map((e) => [e, A.A.getUserProfile(e) ?? null]).filter(f.QE)),
                            )),
                            (M = (0, l.yK)([A.A], () =>
                                x.filter((e) => null == A.A.getUserProfile(e) && !A.A.isFetchingProfile(e)),
                            )),
                            (P = (0, l.bG)([A.A], () => x.some((e) => A.A.isFetchingProfile(e)))),
                            r.useEffect(() => {
                                for (let e of M) (0, h.A)(e);
                            }, [M]),
                            { profilesByUserId: b, isLoadingProfiles: M.length > 0 || P }),
                        j = (0, l.cf)(
                            [T.A],
                            () => Object.fromEntries([...U].map((e) => [e, T.A.getConfig(e)]).filter(f.QE)),
                            [U],
                        ),
                        W = w || k || V || H,
                        Y = r.useMemo(() => {
                            if (!W && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== s.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let t = G[e.extra.application_id] ?? null;
                                    if (null == t) return e;
                                    let n = j[t.id] ?? null;
                                    if (null == n || null == n.surfaces[a.m.ACTIVITY_ACCESSORY]) return e;
                                    let i = F[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                    if (i?.profile == null) return e;
                                    let r = B[e.author_id]?.widgets?.some((e) => (0, E.E)(e, t.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: r },
                                    };
                                });
                        }, [W, e, G, j, F, B]),
                        [K, $] = r.useState(Y);
                    return (
                        r.useEffect(() => {
                            W || $(Y);
                        }, [W, Y]),
                        K
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function S(e) {
    return r.useContext(m).useInjectEntriesWithPreviewData(e);
}
function N(e) {
    let { markAsVisible: t } = r.useContext(m);
    r.useEffect(() => t(e), [t, e]);
}
