n.d(t, { w: () => r });
var i = n(200651);
n(192379);
var a = n(481060);
function r(e, t) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await Promise.all([n.e('42743'), n.e('30557')]).then(n.bind(n, 207540));
        return (n) => {
            var r, l;
            return (0, i.jsx)(
                a,
                ((r = (function (e) {
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
                (l = l =
                    {
                        onConfirm: () => {
                            n.onClose(), t();
                        },
                        channel: e
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r)
            );
        };
    });
}
