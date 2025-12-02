n.d(t, { w: () => l });
var r = n(54381);
n(473749);
var i = n(481060);
function l(e, t) {
    return (0, i.ZDy)(async () => {
        let { default: i } = await n.e("79521").then(n.bind(n, 207540));
        return (n) => {
            var l, u;
            return (0, r.jsx)(
                i,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (u = u =
                    {
                        onConfirm: () => {
                            n.onClose(), t();
                        },
                        channel: e,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(u))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(u)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(u, e));
                      }),
                l),
            );
        };
    });
}
