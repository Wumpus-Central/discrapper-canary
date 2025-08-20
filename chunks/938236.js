r.d(t, { b: () => u }), r(388685);
var n = r(392711),
    l = r(879690),
    i = r(296009),
    a = r(570911);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let s = (0, n.sampleSize)(a.J6, a.J6.length),
    u = (0, l.U)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (r, n, l) => {
            let a = new Set(l.map((e) => e.applicationId));
            for (let l of (e({
                stack: [...r.filter((e) => !a.has(e)), ...s],
                wishlistStack: [...n.filter((e) => !a.has(e)), ...s],
            }),
            Object.values(i.l)))
                t().setNext(6, l);
        },
        setNext: (e, r) => {
            let n = t().getNext(e, r);
            t()._setGameIds(r, n);
            let l = t().peekNext(7, r);
            t()._setPeekedGameIds(r, l);
        },
        getNext: (e, r) => {
            let n = r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                a = n.slice(e);
            return t()._setStack(r, a), l;
        },
        peekNext: (e, r) => (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, r) => {
            var n;
            let l = null != (n = t().gameIds[r]) ? n : [],
                i = l.indexOf(e);
            if (-1 === i) return;
            let a = [...l];
            a.splice(i, 1);
            let o = t().getNext(1, r),
                c = t().peekNext(7, r);
            t()._setGameIds(r, [...a, ...o]), t()._setPeekedGameIds(r, [...c, ...o]);
        },
        bumpMultiple: (e, r) => {
            var n;
            let l = (null != (n = t().gameIds[r]) ? n : []).filter((t) => !e.includes(t)),
                i = t().getNext(6 - l.length, r),
                a = t().peekNext(7, r);
            t()._setGameIds(r, [...l, ...i]), t()._setPeekedGameIds(r, [...a, ...i]);
        },
        remove: (e, r) => {
            let n = (r === i.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(r, n), t()._setPeekedGameIds(r, t().peekNext(7, r));
        },
        _setGameIds: (t, r) => {
            e((e) => ({ gameIds: c(o({}, e.gameIds), { [t]: r }) }));
        },
        _setStack: (t, r) => {
            t === i.l.WANT_TO_PLAY_GAMES ? e({ wishlistStack: r }) : e({ stack: r });
        },
        _setPeekedGameIds: (t, r) => {
            e((e) => ({ peekedGameIds: c(o({}, e.peekedGameIds), { [t]: r }) }));
        },
    }));
