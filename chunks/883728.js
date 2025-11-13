n.d(t, { Z: () => r });
var a = n(951288);
n(647438);
var l = n(374470),
    s = n(239091);
let r = (e) => {
    let { facepileRef: t, goToThread: r, channel: i } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, l.kK)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target))) || r(i, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("89250"), n.e("24864")]).then(n.bind(n, 422200));
                return (t) => {
                    var n, l;
                    return (0, a.jsx)(
                        e,
                        ((n = (function (e) {
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
                        (l = l = { channel: i }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
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
