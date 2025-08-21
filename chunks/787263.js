t.d(n, { w: () => l });
var i = t(951288);
t(647438);
var r = t(481060);
function l(e, n) {
    return (0, r.ZDy)(async () => {
        let { default: r } = await t.e("79521").then(t.bind(t, 207540));
        return (t) => {
            var l, a;
            return (0, i.jsx)(
                r,
                ((l = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, t)),
                (a = a =
                    {
                        onConfirm: () => {
                            t.onClose(), n();
                        },
                        channel: e,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, i);
                          }
                          return t;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                l),
            );
        };
    });
}
