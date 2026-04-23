n.d(t, { S: () => d, Y: () => u });
var i = n(64700),
    a = n(311907),
    l = n(311043),
    s = n(454908),
    r = n(958805),
    o = n(61881),
    c = n(911498);
function d(e) {
    let { bump: t, bumpMultiple: n, gameIds: r } = (0, c.s)();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = (0, c.s)(),
            r = i.useMemo(() => n[e] ?? [], [n, e]);
        (0, s.x)(r);
        let o = (0, a.yK)([l.A], () => r.map((e) => l.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of r) {
                let i = l.A.didFetchingFail(n),
                    a = l.A.hasNoData(n),
                    s = !!l.A.getGame(n),
                    r = null != l.A.getCoverImageUrl(n);
                (i || a || (s && !r)) && t(n, e);
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
        u = (0, a.yK)([l.A], () => o.map((e) => l.A.isFetching(e)));
    i.useEffect(() => {
        let t = o.filter((e) => {
            let t = l.A.didFetchingFail(e),
                n = l.A.hasNoData(e),
                i = !!l.A.getGame(e),
                a = null != l.A.getCoverImageUrl(e);
            return t || n || (i && !a);
        });
        t.length > 0 && n(t, e);
    }, [o, e, n, u]);
    let g = i.useMemo(() => o.map((e) => ({ applicationId: e })), [o]);
    return { applicationIds: o, games: g, onAddGame: d };
}
function u(e, t) {
    let [n, l, s, d] = (0, a.yK)([o.A], () => [
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
        l || u(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
    }, [g]);
}
