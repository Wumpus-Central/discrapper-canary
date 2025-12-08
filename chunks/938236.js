n.d(t, { b: () => u }), n(388685);
var r = n(392711),
    i = n(663042),
    l = n(296009),
    a = n(570911);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let s = (0, r.sampleSize)(a.J6, a.J6.length),
    u = (0, i.U)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, r, i) => {
            let a = new Set(i.map((e) => e.applicationId));
            for (let i of (e({
                stack: [...n.filter((e) => !a.has(e)), ...s],
                wishlistStack: [...r.filter((e) => !a.has(e)), ...s],
            }),
            Object.values(l.l)))
                t().setNext(6, i);
        },
        setNext: (e, n) => {
            let r = t().getNext(e, n);
            t()._setGameIds(n, r);
            let i = t().peekNext(7, n);
            t()._setPeekedGameIds(n, i);
        },
        getNext: (e, n) => {
            let r = n === l.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                i = r.slice(0, e),
                a = r.slice(e);
            return t()._setStack(n, a), i;
        },
        peekNext: (e, n) => (n === l.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            var r;
            let i = null != (r = t().gameIds[n]) ? r : [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let a = [...i];
            a.splice(l, 1);
            let o = t().getNext(1, n),
                c = t().peekNext(7, n);
            t()._setGameIds(n, [...a, ...o]), t()._setPeekedGameIds(n, [...c, ...o]);
        },
        bumpMultiple: (e, n) => {
            var r;
            let i = (null != (r = t().gameIds[n]) ? r : []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                a = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...a, ...l]);
        },
        remove: (e, n) => {
            let r = (n === l.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, r), t()._setPeekedGameIds(n, t().peekNext(7, n));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: c(o({}, e.gameIds), { [t]: n }) }));
        },
        _setStack: (t, n) => {
            t === l.l.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: c(o({}, e.peekedGameIds), { [t]: n }) }));
        },
    }));
