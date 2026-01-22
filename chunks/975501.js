n.d(t, {
    A: () => p,
});
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    a = n(835245),
    s = n(451988),
    o = n(318937),
    c = n(134753);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(824217);
let f = i().debounce(o.W9, 500, {
    maxWait: 500,
});

function p(e, t, n) {
    let r = l.useRef((0, a.A)()),
        i = l.useRef(new s.IX()),
        p = l.useCallback(
            (l) => {
                (l.lastUpdatedAt = Date.now()), (0, o.Rl)(l, e, n), (0, o.W9)(t, n, l);
            },
            [t, n, e],
        ),
        b = l.useCallback(
            (l, s, f) => {
                r.current = (0, a.A)();
                let b = d(u({}, l), {
                    id: r.current,
                    x: s,
                    y: f,
                    userId: e,
                    state: c.B.START,
                    lastUpdatedAt: Date.now(),
                });
                (0, o.W9)(t, n, b), (0, o.Rl)(b, e, n), i.current.start(5e3, () => p(b));
            },
            [e, t, n, p],
        ),
        g = l.useCallback(
            (l, a, s) => {
                let b = d(u({}, l), {
                    id: r.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: c.B.START,
                    lastUpdatedAt: Date.now(),
                });
                f(t, n, b), (0, o.Rl)(b, e, n), i.current.start(5e3, () => p(b));
            },
            [e, t, n, p],
        ),
        m = l.useCallback(
            (l, a, s) => {
                f.cancel(),
                    (0, o.MH)(t, n, r.current),
                    (0, o.Rl)(
                        d(u({}, l), {
                            id: r.current,
                            x: a,
                            y: s,
                            userId: e,
                            state: c.B.STOP,
                            lastUpdatedAt: Date.now(),
                        }),
                        e,
                        n,
                    ),
                    i.current.stop();
            },
            [t, n, e],
        ),
        h = l.useCallback((e, t, n) => g(e, t, n), [g]);
    return l.useMemo(
        () => ({
            handleMouseDown: b,
            handleMouseMove: g,
            handleMouseUp: m,
            handleMouseEnter: h,
        }),
        [b, h, g, m],
    );
}
