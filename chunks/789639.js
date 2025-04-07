n.d(t, { i: () => l });
var r = n(200651),
    i = n(192379),
    s = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    l = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []),
            c = i.useCallback((t) => {
                var i, l;
                return (0, r.jsx)(
                    s.L,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, t)),
                    (l = l =
                        {
                            src: () => n.e('2199').then(n.t.bind(n, 71307, 19)),
                            ref: e,
                            markers: a
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i)
                );
            }, []);
        return {
            events: {
                onMouseEnter: l,
                onMouseLeave: o
            },
            play: t,
            getDuration: i.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            Component: c
        };
    };
