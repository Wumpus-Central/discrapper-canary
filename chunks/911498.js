n.d(t, { s: () => o });
var i = n(735438),
    a = n(353640),
    l = n(540185),
    s = n(282435);
let r = (0, i.sampleSize)(s.cG, s.cG.length),
    o = (0, a.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, a) => {
            let s = new Set(a.map((e) => e.applicationId));
            for (let a of (e({
                stack: [...n.filter((e) => !s.has(e)), ...r],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...r],
            }),
            Object.values(l.x)))
                t().setNext(6, a);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let a = t().peekNext(7, n);
            t()._setPeekedGameIds(n, a);
        },
        getNext: (e, n) => {
            let i = n === l.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                a = i.slice(0, e),
                s = i.slice(e);
            return t()._setStack(n, s), a;
        },
        peekNext: (e, n) => (n === l.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                a = i.indexOf(e);
            if (-1 === a) return;
            let l = [...i];
            l.splice(a, 1);
            let s = t().getNext(1, n),
                r = t().peekNext(7, n);
            t()._setGameIds(n, [...l, ...s]), t()._setPeekedGameIds(n, [...r, ...s]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                a = t().getNext(6 - i.length, n),
                l = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...a]), t()._setPeekedGameIds(n, [...l, ...a]);
        },
        remove: (e, n) => {
            let i = (n === l.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === l.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
