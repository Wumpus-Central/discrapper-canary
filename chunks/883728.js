t.d(n, { Z: () => r });
var s = t(54381);
t(473749);
var l = t(374470),
    a = t(239091);
let r = (e) => {
    let { facepileRef: n, goToThread: r, channel: i } = e;
    return {
        handleLeftClick: (e) => {
            var t;
            ((0, l.kK)(e.target) && (null == (t = n.current) ? void 0 : t.contains(e.target))) || r(i, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e("89250"), t.e("18808")]).then(t.bind(t, 422200));
                return (n) => {
                    var t, l;
                    return (0, s.jsx)(
                        e,
                        ((t = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    s = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    s.forEach(function (n) {
                                        var s;
                                        (s = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = s);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l = { channel: i }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, s);
                                  }
                                  return t;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        t),
                    );
                };
            }),
    };
};
