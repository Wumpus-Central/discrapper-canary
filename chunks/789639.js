n.d(t, { i: () => a });
var i = n(200651),
    r = n(192379),
    s = n(709014);
let l = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    a = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            a = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []),
            c = r.useCallback((t) => {
                var r, a;
                return (0, i.jsx)(
                    s.L,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t)),
                    (a = a =
                        {
                            src: () => n.e('2199').then(n.t.bind(n, 71307, 19)),
                            ref: e,
                            markers: l
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    r)
                );
            }, []);
        return {
            events: {
                onMouseEnter: a,
                onMouseLeave: o
            },
            play: t,
            getDuration: r.useCallback(() => {
                var t;
                return null == (t = e.current) ? void 0 : t.getDuration();
            }, []),
            getCurrentFrame: r.useCallback(() => {
                var t, n;
                return null != (n = null == (t = e.current) ? void 0 : t.getCurrentFrame()) ? n : null;
            }, []),
            Component: c
        };
    };
