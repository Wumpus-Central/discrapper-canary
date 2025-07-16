n.d(e, { w: () => a });
var i = n(255367);
n(73800);
var l = n(481060);
function a(t, e) {
    return (0, l.ZDy)(async () => {
        let { default: l } = await Promise.all([n.e('42743'), n.e('30557')]).then(n.bind(n, 207540));
        return (n) => {
            var a, s;
            return (0, i.jsx)(
                l,
                ((a = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                ((i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i));
                            }));
                    }
                    return t;
                })({}, n)),
                (s = s =
                    {
                        onConfirm: () => {
                            (n.onClose(), e());
                        },
                        channel: t
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(s)).forEach(function (t) {
                          Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(s, t));
                      }),
                a)
            );
        };
    });
}
