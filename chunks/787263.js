e.d(n, { w: () => l });
var i = e(255367);
e(73800);
var r = e(481060);
function l(t, n) {
    return (0, r.ZDy)(async () => {
        let { default: r } = await Promise.all([e.e('42743'), e.e('30557')]).then(e.bind(e, 207540));
        return (e) => {
            var l, a;
            return (0, i.jsx)(
                r,
                ((l = (function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(e);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(e).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })
                            )),
                            i.forEach(function (n) {
                                var i;
                                ((i = e[n]),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[n] = i));
                            }));
                    }
                    return t;
                })({}, e)),
                (a = a =
                    {
                        onConfirm: () => {
                            (e.onClose(), n());
                        },
                        channel: t
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                    : (function (t, n) {
                          var e = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              e.push.apply(e, i);
                          }
                          return e;
                      })(Object(a)).forEach(function (t) {
                          Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(a, t));
                      }),
                l)
            );
        };
    });
}
