n.d(t, { s: () => o });
var i = n(735438),
    l = n(353640),
    a = n(540185),
    r = n(282435);
let s = (0, i.sampleSize)(r.cG, r.cG.length),
    o = (0, l.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let r = new Set(l.map((e) => e.applicationId));
            for (let l of (e({
                stack: [...n.filter((e) => !r.has(e)), ...s],
                wishlistStack: [...i.filter((e) => !r.has(e)), ...s],
            }),
            Object.values(a.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                r = i.slice(e);
            return t()._setStack(n, r), l;
        },
        peekNext: (e, n) => (n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let a = [...i];
            a.splice(l, 1);
            let r = t().getNext(1, n),
                s = t().peekNext(7, n);
            t()._setGameIds(n, [...a, ...r]), t()._setPeekedGameIds(n, [...s, ...r]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                a = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...a, ...l]);
        },
        remove: (e, n) => {
            let i = (n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === a.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
