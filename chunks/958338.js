n.d(t, { S: () => c, Y: () => u });
var i = n(64700),
    l = n(311907),
    a = n(544420),
    r = n(524799),
    s = n(958805),
    o = n(61881),
    d = n(911498);
function c(e) {
    let { bump: t, bumpMultiple: n, gameIds: s } = (0, d.s)();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = (0, d.s)(),
            s = i.useMemo(() => n[e] ?? [], [n, e]);
        i.useEffect(() => {
            let e = s.filter((e) => r.A.canFetch(e));
            e.length > 0 && a.A.getDetectableGamesSupplemental(e);
        }, [s]);
        let o = (0, l.yK)([r.A], () => s.map((e) => r.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of s) {
                let i = !r.A.canFetch(n) && !r.A.isFetching(n),
                    l = null != r.A.getCoverImageUrl(n);
                i && !l && t(n, e);
            }
        }, [s, t, e, o]);
    })(e);
    let o = i.useMemo(() => s[e] ?? [], [s, e]),
        c = i.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        u = (0, l.yK)([r.A], () => o.map((e) => r.A.isFetching(e)));
    i.useEffect(() => {
        let t = o.filter((e) => {
            let t = !r.A.canFetch(e) && !r.A.isFetching(e),
                n = null != r.A.getCoverImageUrl(e);
            return t && !n;
        });
        t.length > 0 && n(t, e);
    }, [o, e, n, u]);
    let g = i.useMemo(() => o.map((e) => ({ applicationId: e })), [o]);
    return { applicationIds: o, games: g, onAddGame: c };
}
function u(e, t) {
    let [n, a, r, c] = (0, l.yK)([o.A], () => [
            o.A.suggestedFetchAttempted,
            o.A.suggestedFetchError,
            o.A.suggestedGameIds,
            o.A.suggestedFetchIsLoading,
        ]),
        { onLoad: u } = (0, d.s)();
    i.useEffect(() => {
        !n && e && s.A.fetchSuggestedGames();
    }, [n, e]);
    let g = n && !c;
    i.useEffect(() => {
        if (!g) return;
        let e = t.map((e) => e.games).flat();
        a || u(r.suggestedGamesIds ?? [], r.suggestedWishlistGamesIds ?? [], e);
    }, [g]);
}
