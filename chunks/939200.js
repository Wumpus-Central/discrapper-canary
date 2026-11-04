i.d(a, { R: () => h });
var t = i(582128),
    l = i(435558),
    o = i.n(l),
    r = i(651188),
    s = i(929396),
    u = i(518805),
    n = i(855986),
    m = i(311043),
    d = i(321108),
    p = i(735321),
    f = i(403362),
    c = i(282435);
let v = [];
function b(e) {
    return c.jN.get(e) ?? 0;
}
function h(e) {
    let { surface: a, query: i, selectedGameIds: l } = e,
        h = t.useMemo(() => [...new Set([...c.sx, ...(l ?? v)])], [l]),
        A = (0, d.A)(h),
        M = (0, n.bG)(
            [m.A],
            () => h.some((e) => null == m.A.getGame(e) && !m.A.hasNoData(e) && !m.A.didFetchingFail(e)),
            [h],
        ),
        g = t.useMemo(() => new Map(A.map((e) => [e.id, e])), [A]),
        k = t.useMemo(
            () =>
                o()(c.sx)
                    .map((e) => g.get(e))
                    .filter(f.Vq)
                    .filter((e) => (0, p.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return b(a);
                    })
                    .reverse()
                    .value(),
            [g],
        ),
        y = t.useCallback((e, a) => b(a.item.value) - b(e.item.value), []),
        w = t.useMemo(() => ({ baseSort: y, keys: ["label"] }), [y]),
        C = (i?.trim().length ?? 0) > 0,
        {
            results: S,
            isLoading: F,
            onSelect: G,
            endSession: q,
        } = (0, u.J)(i ?? null, { surface: a, filterGroup: r.m.DEFAULT }),
        x = t.useMemo(() => new Set((S ?? []).filter((e) => (0, s.qS)(e)).map((e) => e.id)), [S]),
        D = t.useMemo(() => {
            let e = (S ?? []).filter((e) => x.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                a = (l ?? v).filter((e) => !x.has(e)).map((e) => ({ id: e, value: e, label: g.get(e)?.name ?? "" }));
            return [...e, ...a];
        }, [S, x, l, g]),
        L = t.useMemo(() => {
            let e = new Map();
            for (let a of A) e.set(a.id, { icon: a.media?.icon, platformAvailability: a.platformAvailability });
            for (let a of S ?? []) {
                let i = e.get(a.id);
                e.set(a.id, {
                    icon: a.icon ?? i?.icon,
                    platformAvailability: a.platformAvailability ?? i?.platformAvailability,
                });
            }
            return e;
        }, [A, S]),
        N = t.useCallback((e) => e.filter((e) => x.has(e.value)), [x]);
    return {
        options: C ? D : k,
        matchSorterOptions: w,
        customMatchSorter: C ? N : void 0,
        metadataByGameId: L,
        isLoading: C ? F : M,
        onSelect: G,
        endSession: q,
    };
}
