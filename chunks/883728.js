n.d(t, { Z: () => r });
var s = n(54381);
n(473749);
var l = n(374470),
    a = n(239091);
let r = (e) => {
    let { facepileRef: t, goToThread: r, channel: i } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, l.kK)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target))) || r(i, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("89250"), n.e("98414")]).then(n.bind(n, 422200));
                return (t) => {
                    var n, l;
                    return (0, s.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (l = l = { channel: i }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, s);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            }),
    };
};
