n.d(t, {
    S: () => u,
    Y: () => d,
}),
    n(896048),
    n(864466),
    n(443073);
var r = n(64700),
    l = n(311907),
    i = n(544420),
    a = n(524799),
    s = n(958805),
    o = n(61881),
    c = n(911498);
function u(e) {
    let { bump: t, bumpMultiple: n, gameIds: s } = (0, c.s)();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = (0, c.s)(),
            s = r.useMemo(() => {
                var t;
                return null != (t = n[e]) ? t : [];
            }, [n, e]);
        r.useEffect(() => {
            let e = s.filter((e) => a.A.canFetch(e));
            e.length > 0 && i.A.getDetectableGamesSupplemental(e);
        }, [s]);
        let o = (0, l.yK)([a.A], () => s.map((e) => a.A.isFetching(e)));
        r.useEffect(() => {
            for (let n of s) {
                let r = !a.A.canFetch(n) && !a.A.isFetching(n),
                    l = null != a.A.getCoverImageUrl(n);
                r && !l && t(n, e);
            }
        }, [s, t, e, o]);
    })(e);
    let o = r.useMemo(() => {
            var t;
            return null != (t = s[e]) ? t : [];
        }, [s, e]),
        u = r.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        d = (0, l.yK)([a.A], () => o.map((e) => a.A.isFetching(e)));
    r.useEffect(() => {
        let t = o.filter((e) => {
            let t = !a.A.canFetch(e) && !a.A.isFetching(e),
                n = null != a.A.getCoverImageUrl(e);
            return t && !n;
        });
        t.length > 0 && n(t, e);
    }, [o, e, n, d]);
    let f = r.useMemo(() => o.map((e) => ({ applicationId: e })), [o]);
    return {
        applicationIds: o,
        games: f,
        onAddGame: u,
    };
}
function d(e, t) {
    let [n, i, a, u] = (0, l.yK)([o.A], () => [
            o.A.suggestedFetchAttempted,
            o.A.suggestedFetchError,
            o.A.suggestedGameIds,
            o.A.suggestedFetchIsLoading,
        ]),
        { onLoad: d } = (0, c.s)();
    r.useEffect(() => {
        !n && e && s.A.fetchSuggestedGames();
    }, [n, e]);
    let f = n && !u;
    r.useEffect(() => {
        var e, n;
        if (!f) return;
        let r = t.map((e) => e.games).flat();
        i || d(null != (e = a.suggestedGamesIds) ? e : [], null != (n = a.suggestedWishlistGamesIds) ? n : [], r);
    }, [f]);
}
