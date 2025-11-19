n.d(t, { i: () => s });
var a = n(54381),
    l = n(473749),
    i = n(709014);
let r = {
        all: {
            name: "all",
            start: 0,
            duration: 66,
        },
    },
    s = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            s = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            c = l.useCallback((t) => {
                var l, s;
                return (0, a.jsx)(
                    i.L,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({}, t)),
                    (s = s =
                        {
                            src: () => n.e("2199").then(n.t.bind(n, 71307, 19)),
                            ref: e,
                            markers: r,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    l),
                );
            }, []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: o,
            },
            play: t,
            getDuration: l.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: l.useCallback(() => {
                var t, n;
                return null != (n = null == (t = e.current) ? void 0 : t.getCurrentFrame()) ? n : null;
            }, []),
            Component: c,
        };
    };
