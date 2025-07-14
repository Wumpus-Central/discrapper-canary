n.d(t, { N: () => o });
var r = n(97519),
    l = n(296574),
    a = n(731965);
let s = (0, r.U)(
        (0, l.tJ)(
            (e, t) => ({
                channelShowResolvedFlags: {},
                setShowResolvedFlags: (t, n) =>
                    (0, a.j)(() => {
                        e((e) => {
                            var r, l;
                            return {
                                channelShowResolvedFlags:
                                    ((r = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    ((r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r));
                                                }));
                                        }
                                        return e;
                                    })({}, e.channelShowResolvedFlags)),
                                    (l = l = { [t]: n }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    r)
                            };
                        });
                    }),
                getShowResolvedFlags: (e) => {
                    var n;
                    return null == (n = t().channelShowResolvedFlags[e]) || n;
                }
            }),
            {
                name: 'report-to-mod-channel-storage',
                storage: (0, l.FL)(() => localStorage)
            }
        )
    ),
    o = (e) => {
        var t;
        let n = s();
        return null == e
            ? {
                  showResolvedFlags: !0,
                  setShowResolvedFlags: () => {}
              }
            : {
                  showResolvedFlags: null == (t = n.getShowResolvedFlags(e)) || t,
                  setShowResolvedFlags: (t) => n.setShowResolvedFlags(e, t)
              };
    };
