n.d(t, { w: () => l });
var i = n(200651);
n(192379);
var r = n(481060);
function l(e, t) {
    return (0, r.ZDy)(async () => {
        let { default: r } = await Promise.all([n.e('42743'), n.e('30557')]).then(n.bind(n, 207540));
        return (n) => {
            var l, a;
            return (0, i.jsx)(
                r,
                ((l = (function (e) {
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
                })({}, n)),
                (a = a =
                    {
                        onConfirm: () => {
                            n.onClose(), t();
                        },
                        channel: e
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                l)
            );
        };
    });
}
