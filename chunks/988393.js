n.d(t, {
    N: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(92674),
    o = n(397927),
    s = n(857250),
    l = n(691540),
    c = n(97483),
    u = n(17069);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        duration: 300,
        friction: 24,
        tension: 280,
    },
    m = {
        [c.xJ.TOP]: {
            styles: u.N,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: h,
                },
                enter: {
                    transform: "translate3d(0, -0px, 0)",
                    opacity: 1,
                    config: h,
                },
                leave: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: _(f({}, h), {
                        friction: 40,
                        clamp: !0,
                    }),
                },
            },
        },
        [c.xJ.BOTTOM]: {
            styles: u.H,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: h,
                },
                enter: {
                    transform: "translate3d(0, 0px, 0)",
                    opacity: 1,
                    config: h,
                },
                leave: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: _(f({}, h), {
                        friction: 40,
                        clamp: !0,
                    }),
                },
            },
        },
    };

function g(e) {
    var t, n, u, d;
    let { appContext: p } = e,
        _ = (0, l.WE)((e) => e.currentToastMap.get(p)),
        h = i.useRef(null != (t = null == _ || null == (u = _.options) ? void 0 : u.position) ? t : c.jg.position),
        g = i.useRef(null != (n = null == _ || null == (d = _.options) ? void 0 : d.duration) ? n : c.jg.duration);
    i.useEffect(() => {
        if (null != _) {
            var e, t, n, r;
            (h.current = null != (e = null == (n = _.options) ? void 0 : n.position) ? e : c.jg.position),
                (g.current = null != (t = null == (r = _.options) ? void 0 : r.duration) ? t : c.jg.duration);
        }
    }, [_]);
    let E = i.useMemo(() => {
            var e, t;
            return m[null != (e = null == _ || null == (t = _.options) ? void 0 : t.position) ? e : h.current];
        }, [_]),
        y = (0, o.pnh)(
            _,
            f(
                {
                    keys: (e) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.id) ? t : "";
                    },
                },
                E.transition,
            ),
        );
    return (
        i.useEffect(() => {
            null != _ &&
                setTimeout(() => {
                    (0, l.VD)(p);
                }, g.current);
        }, [_, p]),
        (0, r.jsx)("div", {
            className: E.styles,
            children: y((e, t) =>
                null == t
                    ? null
                    : (0, r.jsx)(
                          a.animated.div,
                          {
                              style: e,
                              children: (0, r.jsx)(s.y, f({}, t)),
                          },
                          t.id,
                      ),
            ),
        })
    );
}
