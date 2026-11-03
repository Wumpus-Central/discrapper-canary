i.d(a, { R: () => h });
var l = i(582128),
    t = i(435558),
    o = i.n(t),
    r = i(651188),
    s = i(929396),
    u = i(471677),
    m = i(17928),
    n = i(311043),
    d = i(321108),
    p = i(735321),
    f = i(403362),
    c = i(282435);
let v = [];
function b(e) {
    return c.jN.get(e) ?? 0;
}
function h(e) {
    let { surface: a, query: i, selectedGameIds: t } = e,
        h = l.useMemo(() => [...new Set([...c.sx, ...(t ?? v)])], [t]),
        A = (0, d.A)(h),
        M = (0, m.bG)(
            [n.A],
            () => h.some((e) => null == n.A.getGame(e) && !n.A.hasNoData(e) && !n.A.didFetchingFail(e)),
            [h],
        ),
        g = l.useMemo(() => new Map(A.map((e) => [e.id, e])), [A]),
        k = l.useMemo(
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
        y = l.useCallback((e, a) => b(a.item.value) - b(e.item.value), []),
        w = l.useMemo(() => ({ baseSort: y, keys: ["label"] }), [y]),
        C = (i?.trim().length ?? 0) > 0,
        {
            results: S,
            isLoading: F,
            onSelect: G,
            endSession: q,
        } = (0, u.J$)(i ?? null, { surface: a, filterGroup: r.m.DEFAULT }),
        x = l.useMemo(() => new Set((S ?? []).filter((e) => (0, s.qS)(e)).map((e) => e.id)), [S]),
        D = l.useMemo(
            () => [
                ...(S ?? []).filter((e) => x.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? v).filter((e) => !x.has(e)).map((e) => ({ id: e, value: e, label: g.get(e)?.name ?? "" })),
            ],
            [S, x, t, g],
        ),
        L = l.useMemo(() => {
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
        N = l.useCallback((e) => e.filter((e) => x.has(e.value)), [x]);
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
