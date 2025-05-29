t.d(e, { w: () => a });
var i = t(255367);
t(73800);
var r = t(481060);
function a(n, e) {
    return (0, r.ZDy)(async () => {
        let { default: r } = await Promise.all([t.e('42743'), t.e('30557')]).then(t.bind(t, 207540));
        return (t) => {
            var a, l;
            return (0, i.jsx)(
                r,
                ((a = (function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = t[e]),
                                    e in n
                                        ? Object.defineProperty(n, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (n[e] = i);
                            });
                    }
                    return n;
                })({}, t)),
                (l = l =
                    {
                        onConfirm: () => {
                            t.onClose(), e();
                        },
                        channel: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                    : (function (n, e) {
                          var t = Object.keys(n);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(n);
                              t.push.apply(t, i);
                          }
                          return t;
                      })(Object(l)).forEach(function (n) {
                          Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(l, n));
                      }),
                a)
            );
        };
    });
}
