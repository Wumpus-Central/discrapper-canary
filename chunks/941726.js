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
    C = n(385113);
let E = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function I(e) {
    let [t, n] = i.useState(new Set()),
        I = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(E.Provider, {
        value: {
            markAsVisible: I,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n,
                        l,
                        E,
                        I,
                        y,
                        S,
                        v,
                        N,
                        _,
                        j,
                        T,
                        b,
                        R,
                        O,
                        L,
                        M,
                        { appsWithConfigs: k, isLoadingConfigs: w } =
                            ((n = g.Q_.useSetting()),
                            i.useEffect(() => {
                                (0, A.Wq)().catch(() => {});
                            }, []),
                            i.useEffect(() => {
                                n && (0, A.i$)().catch(() => {});
                            }, [n]),
                            (l = (0, a.bG)([C.A], () => C.A.getFeaturedFetchState())),
                            (E = (0, a.bG)([C.A], () => C.A.getDeveloperFetchState())),
                            (I = (0, a.yK)([C.A], () => C.A.getFeaturedApplicationIds())),
                            (y = (0, a.yK)([C.A], () => C.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: i.useMemo(() => new Set([...I, ...y]), [I, y]),
                                isLoadingConfigs:
                                    l === C.e.NOT_FETCHED ||
                                    l === C.e.FETCHING ||
                                    (n && (E === C.e.NOT_FETCHED || E === C.e.FETCHING)),
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
                        (v = i.useMemo(() => [...new Set(S.map((e) => e.extra.application_id))], [S])),
                        (N = (0, a.bG)(
                            [u.A],
                            () =>
                                v.length > 0 &&
                                v.some(
                                    (e) =>
                                        u.A.isFetchingApplication(e) ||
                                        (null == u.A.getApplication(e) && !u.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (_ = (0, c.A)(v)),
                        (j = i.useMemo(
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
                        (T = i.useMemo(
                            () => [...new Set(S.filter((e) => e.extra.application_id in j).map((e) => e.author_id))],
                            [S, j],
                        )),
                        { widgetApps: j, userIdsWhoMightHaveWidgetData: T, isFetchingApplications: N }),
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
                            (L = (0, a.yK)([f.A], () =>
                                D.filter((e) => null == f.A.getUserProfile(e) && !f.A.isFetchingProfile(e)),
                            )),
                            (M = (0, a.bG)([f.A], () => D.some((e) => f.A.isFetchingProfile(e)))),
                            i.useEffect(() => {
                                for (let e of L) (0, p.A)(e);
                            }, [L]),
                            { profilesByUserId: O, isLoadingProfiles: L.length > 0 || M }),
                        B = (0, a.cf)(
                            [C.A],
                            () => Object.fromEntries([...k].map((e) => [e, C.A.getConfig(e)]).filter(x.QE)),
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
    return i.useContext(E).useInjectEntriesWithPreviewData(e);
}
function S(e) {
    let { markAsVisible: t } = i.useContext(E);
    i.useEffect(() => t(e), [t, e]);
}
