r.d(t, { b: () => u }), r(388685);
var n = r(392711),
    i = r(879690),
    a = r(296009),
    l = r(570911);
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
let s = (0, n.sampleSize)(l.J6, l.J6.length),
    u = (0, i.U)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (r, n, i) => {
            let l = new Set(i.map((e) => e.applicationId));
            for (let i of (e({
                stack: [...r.filter((e) => !l.has(e)), ...s],
                wishlistStack: [...n.filter((e) => !l.has(e)), ...s],
            }),
            Object.values(a.l)))
                t().setNext(6, i);
        },
        setNext: (e, r) => {
            let n = t().getNext(e, r);
            t()._setGameIds(r, n);
            let i = t().peekNext(7, r);
            t()._setPeekedGameIds(r, i);
        },
        getNext: (e, r) => {
            let n = r === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                i = n.slice(0, e),
                l = n.slice(e);
            return t()._setStack(r, l), i;
        },
        peekNext: (e, r) => (r === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, r) => {
            var n;
            let i = null != (n = t().gameIds[r]) ? n : [],
                a = i.indexOf(e);
            if (-1 === a) return;
            let l = [...i];
            l.splice(a, 1);
            let o = t().getNext(1, r),
                c = t().peekNext(7, r);
            t()._setGameIds(r, [...l, ...o]), t()._setPeekedGameIds(r, [...c, ...o]);
        },
        bumpMultiple: (e, r) => {
            var n;
            let i = (null != (n = t().gameIds[r]) ? n : []).filter((t) => !e.includes(t)),
                a = t().getNext(6 - i.length, r),
                l = t().peekNext(7, r);
            t()._setGameIds(r, [...i, ...a]), t()._setPeekedGameIds(r, [...l, ...a]);
        },
        remove: (e, r) => {
            let n = (r === a.l.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(r, n), t()._setPeekedGameIds(r, t().peekNext(7, r));
        },
        _setGameIds: (t, r) => {
            e((e) => ({ gameIds: c(o({}, e.gameIds), { [t]: r }) }));
        },
        _setStack: (t, r) => {
            t === a.l.WANT_TO_PLAY_GAMES ? e({ wishlistStack: r }) : e({ stack: r });
        },
        _setPeekedGameIds: (t, r) => {
            e((e) => ({ peekedGameIds: c(o({}, e.peekedGameIds), { [t]: r }) }));
        },
    }));
