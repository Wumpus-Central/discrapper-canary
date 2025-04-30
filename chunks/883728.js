n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(374470),
    o = n(239091);
let a = (e) => {
    let { facepileRef: t, goToThread: a, channel: s } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, r.k)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target))) || a(s, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('22356'), n.e('86797')]).then(n.bind(n, 422200));
                return (t) => {
                    var n, r;
                    return (0, i.jsx)(
                        e,
                        ((n = (function (e) {
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
                        (r = r = { channel: s }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    );
                };
            })
    };
};
