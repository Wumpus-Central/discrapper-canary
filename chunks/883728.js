n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var s = n(374470),
    l = n(239091);
let a = (e) => {
    let { facepileRef: t, goToThread: a, channel: i } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, s.k)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target))) || a(i, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, l.jW)(e, async () => {
                let { default: e } = await n.e('78650').then(n.bind(n, 422200));
                return (t) => {
                    var n, s;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        (s = s = { channel: i }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        n)
                    );
                };
            })
    };
};
