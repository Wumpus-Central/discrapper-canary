n.d(t, { S: () => d, Y: () => u });
var i = n(64700),
    l = n(311907),
    a = n(136086),
    s = n(885151),
    r = n(958805),
    o = n(61881),
    c = n(911498);
function d(e) {
    let { bump: t, bumpMultiple: n, gameIds: r } = (0, c.s)();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = (0, c.s)(),
            r = i.useMemo(() => n[e] ?? [], [n, e]);
        (0, s.W)(r);
        let o = (0, l.yK)([a.A], () => r.map((e) => a.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of r) {
                let i = a.A.didFetchingFail(n),
                    l = a.A.hasNoData(n),
                    s = !!a.A.getGame(n),
                    r = null != a.A.getCoverImageUrl(n);
                (i || l || (s && !r)) && t(n, e);
            }
        }, [r, t, e, o]);
    })(e);
    let o = i.useMemo(() => r[e] ?? [], [r, e]),
        d = i.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        u = (0, l.yK)([a.A], () => o.map((e) => a.A.isFetching(e)));
    i.useEffect(() => {
        let t = o.filter((e) => {
            let t = a.A.didFetchingFail(e),
                n = a.A.hasNoData(e),
                i = !!a.A.getGame(e),
                l = null != a.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [o, e, n, u]);
    let g = i.useMemo(() => o.map((e) => ({ applicationId: e })), [o]);
    return { applicationIds: o, games: g, onAddGame: d };
}
function u(e, t) {
    let [n, a, s, d] = (0, l.yK)([o.A], () => [
            o.A.suggestedFetchAttempted,
            o.A.suggestedFetchError,
            o.A.suggestedGameIds,
            o.A.suggestedFetchIsLoading,
        ]),
        { onLoad: u } = (0, c.s)();
    i.useEffect(() => {
        !n && e && r.A.fetchSuggestedGames();
    }, [n, e]);
    let g = n && !d;
    i.useEffect(() => {
        if (!g) return;
        let e = t.map((e) => e.games).flat();
        a || u(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
    }, [g]);
}
