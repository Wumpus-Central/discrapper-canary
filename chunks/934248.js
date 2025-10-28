r.d(t, { D: () => a });
var n = r(951288),
    l = r(647438),
    o = r(709014);
let u = {
        earn: {
            name: "earn",
            start: 0,
            duration: 180,
        },
        spend: {
            name: "spend",
            start: 240,
            duration: 180,
        },
    },
    a = (e) => {
        let t = l.useRef(null),
            a = l.useRef(e);
        a.current = e;
        let c = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            i = l.useCallback((e) => {
                var l, c;
                return (0, n.jsx)(
                    o.L,
                    ((l = (function (e) {
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
                    })({}, e)),
                    (c = c =
                        {
                            src: () => r.e("75535").then(r.t.bind(r, 405115, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: u,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    l),
                );
            }, []);
        return {
            events: {},
            play: c,
            getDuration: l.useCallback(() => {
                var e;
                return null == (e = t.current) ? void 0 : e.getDuration();
            }, []),
            getCurrentFrame: l.useCallback(() => {
                var e, r;
                return null != (r = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? r : null;
            }, []),
            Component: i,
        };
    };
