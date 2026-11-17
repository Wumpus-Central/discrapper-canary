n.d(t, { Y: () => h, S: () => f });
var l = n(582128),
    i = n(855986),
    a = n(311043),
    s = n(454908),
    r = n(958805),
    d = n(61881),
    o = n(435558),
    c = n(196765),
    u = n(540185),
    g = n(282435);
let m = (0, o.sampleSize)(g.sx, g.sx.length),
    x = (0, c.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, l, i) => {
            let a = new Set(i.map((e) => e.gameId)),
                s = n.filter((e) => !a.has(e)),
                r = l.filter((e) => !a.has(e));
            for (let n of (e({ stack: [...s, ...m], wishlistStack: [...r, ...m] }), Object.values(u.x)))
                t().setNext(6, n);
        },
        setNext: (e, n) => {
            let l = t().getNext(e, n);
            t()._setGameIds(n, l);
            let i = t().peekNext(7, n);
            t()._setPeekedGameIds(n, i);
        },
        getNext: (e, n) => {
            let l = n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                i = l.slice(0, e),
                a = l.slice(e);
            return (t()._setStack(n, a), i);
        },
        peekNext: (e, n) => (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let l = t().gameIds[n] ?? [],
                i = l.indexOf(e);
            if (-1 === i) return;
            let a = [...l];
            a.splice(i, 1);
            let s = t().getNext(1, n),
                r = t().peekNext(7, n);
            (t()._setGameIds(n, [...a, ...s]), t()._setPeekedGameIds(n, [...r, ...s]));
        },
        bumpMultiple: (e, n) => {
            let l = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                i = t().getNext(6 - l.length, n),
                a = t().peekNext(7, n);
            (t()._setGameIds(n, [...l, ...i]), t()._setPeekedGameIds(n, [...a, ...i]));
        },
        remove: (e, n) => {
            let l = (n === u.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(n, l), t()._setPeekedGameIds(n, t().peekNext(7, n)));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === u.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function f(e) {
    let { bump: t, bumpMultiple: n, gameIds: r } = x();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = x(),
            r = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, s.x)(r);
        let d = (0, i.yK)([a.A], () => r.map((e) => a.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of r) {
                let l = a.A.didFetchingFail(n),
                    i = a.A.hasNoData(n),
                    s = !!a.A.getGame(n),
                    r = null != a.A.getCoverImageUrl(n);
                (l || i || (s && !r)) && t(n, e);
            }
        }, [r, t, e, d]);
    })(e);
    let d = l.useMemo(() => r[e] ?? [], [r, e]),
        o = l.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        c = (0, i.yK)([a.A], () => d.map((e) => a.A.isFetching(e)));
    l.useEffect(() => {
        let t = d.filter((e) => {
            let t = a.A.didFetchingFail(e),
                n = a.A.hasNoData(e),
                l = !!a.A.getGame(e),
                i = null != a.A.getCoverImageUrl(e);
            return t || n || (l && !i);
        });
        t.length > 0 && n(t, e);
    }, [d, e, n, c]);
    let u = l.useMemo(() => d.map((e) => ({ gameId: e })), [d]);
    return { gameIds: d, games: u, onAddGame: o };
}
function h(e, t) {
    let [n, a, s, o] = (0, i.yK)([d.A], () => [
            d.A.suggestedFetchAttempted,
            d.A.suggestedFetchError,
            d.A.suggestedGameIds,
            d.A.suggestedFetchIsLoading,
        ]),
        { onLoad: c } = x();
    l.useEffect(() => {
        !n && e && r.A.fetchSuggestedGames();
    }, [n, e]);
    let u = n && !o;
    l.useEffect(() => {
        if (!u) return;
        let e = t.map((e) => e.games).flat();
        a || c(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
    }, [u]);
}
