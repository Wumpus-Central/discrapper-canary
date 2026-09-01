"use strict";
n.d(t, { Ay: () => y, T2: () => S, r$: () => I });
var l = n(477900),
    i = n(582128),
    s = n(598748),
    r = n(681154),
    a = n(17928),
    o = n(975460),
    u = n(587895),
    c = n(429913),
    d = n(201718),
    h = n(339580),
    m = n(633075),
    f = n(321191),
    p = n(903209),
    g = n(885386),
    x = n(403362),
    A = n(382483),
    E = n(385113);
let C = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let [t, n] = i.useState(new Set()),
        I = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(C.Provider, {
        value: {
            markAsVisible: I,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n,
                        l,
                        C,
                        I,
                        y,
                        S,
                        N,
                        v,
                        _,
                        T,
                        j,
                        b,
                        R,
                        O,
                        M,
                        L,
                        { appsWithConfigs: k, isLoadingConfigs: w } =
                            ((n = g.Q_.useSetting()),
                            i.useEffect(() => {
                                (0, A.Wq)().catch(() => {});
                            }, []),
                            i.useEffect(() => {
                                n && (0, A.i$)().catch(() => {});
                            }, [n]),
                            (l = (0, a.bG)([E.A], () => E.A.getFeaturedFetchState())),
                            (C = (0, a.bG)([E.A], () => E.A.getDeveloperFetchState())),
                            (I = (0, a.yK)([E.A], () => E.A.getFeaturedApplicationIds())),
                            (y = (0, a.yK)([E.A], () => E.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: i.useMemo(() => new Set([...I, ...y]), [I, y]),
                                isLoadingConfigs:
                                    l === E.e.NOT_FETCHED ||
                                    l === E.e.FETCHING ||
                                    (n && (C === E.e.NOT_FETCHED || C === E.e.FETCHING)),
                            }),
                        {
                            widgetApps: P,
                            userIdsWhoMightHaveWidgetData: D,
                            isFetchingApplications: U,
                        } = ((S = i.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === r.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        )),
                        (N = i.useMemo(() => [...new Set(S.map((e) => e.extra.application_id))], [S])),
                        (v = (0, a.bG)(
                            [u.A],
                            () =>
                                N.length > 0 &&
                                N.some(
                                    (e) =>
                                        u.A.isFetchingApplication(e) ||
                                        (null == u.A.getApplication(e) && !u.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (_ = (0, c.A)(N)),
                        (T = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    _.filter(x.Vq)
                                        .map((e) => [e.id, (0, o.t)(e)])
                                        .filter(x.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return k.has(n.id);
                                        }),
                                ),
                            [k, _],
                        )),
                        (j = i.useMemo(
                            () => [...new Set(S.filter((e) => e.extra.application_id in T).map((e) => e.author_id))],
                            [S, T],
                        )),
                        { widgetApps: T, userIdsWhoMightHaveWidgetData: j, isFetchingApplications: v }),
                        { identitiesByUserId: G, isLoadingIdentities: V } =
                            ((b = (0, a.cf)([h.A], () =>
                                Object.fromEntries(D.map((e) => [e, h.A.getUserIdentities(e)]).filter(x.QE)),
                            )),
                            (R = (0, a.bG)([h.A], () =>
                                D.some((e) => h.A.getFetchState(e) === h.e.NOT_FETCHED || h.A.isFetchingUser(e)),
                            )),
                            i.useEffect(() => {
                                D.length > 0 && d.P.fetchMany(...D.map((e) => [e]));
                            }, [D]),
                            { identitiesByUserId: b, isLoadingIdentities: R }),
                        { profilesByUserId: F, isLoadingProfiles: H } =
                            ((O = (0, a.cf)([f.A], () =>
                                Object.fromEntries(D.map((e) => [e, f.A.getUserProfile(e) ?? null]).filter(x.QE)),
                            )),
                            (M = (0, a.yK)([f.A], () =>
                                D.filter((e) => null == f.A.getUserProfile(e) && !f.A.isFetchingProfile(e)),
                            )),
                            (L = (0, a.bG)([f.A], () => D.some((e) => f.A.isFetchingProfile(e)))),
                            i.useEffect(() => {
                                for (let e of M) (0, p.A)(e);
                            }, [M]),
                            { profilesByUserId: O, isLoadingProfiles: M.length > 0 || L }),
                        B = (0, a.cf)(
                            [E.A],
                            () => Object.fromEntries([...k].map((e) => [e, E.A.getConfig(e)]).filter(x.QE)),
                            [k],
                        ),
                        W = w || U || V || H,
                        K = i.useMemo(() => {
                            if (!W && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== r.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let t = P[e.extra.application_id] ?? null;
                                    if (null == t) return e;
                                    let n = B[t.id] ?? null;
                                    if (null == n || null == n.surfaces[s.m.ACTIVITY_ACCESSORY]) return e;
                                    let l = G[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                    if (l?.profile == null) return e;
                                    let i = F[e.author_id]?.widgets?.some((e) => (0, m.E)(e, t.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: i },
                                    };
                                });
                        }, [W, e, P, B, G, F]),
                        [z, Z] = i.useState(K);
                    return (
                        i.useEffect(() => {
                            W || Z(K);
                        }, [W, K]),
                        z
                    );
                })(e, t),
        },
        children: e.children,
    });
}
function y(e) {
    return i.useContext(C).useInjectEntriesWithPreviewData(e);
}
function S(e) {
    let { markAsVisible: t } = i.useContext(C);
    i.useEffect(() => t(e), [t, e]);
}
