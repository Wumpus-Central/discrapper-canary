n.d(t, { w: () => l });
var i = n(951288);
n(647438);
var a = n(481060);
function l(e, t) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await n.e("79521").then(n.bind(n, 207540));
        return (n) => {
            var l, r;
            return (0, i.jsx)(
                a,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, n)),
                (r = r =
                    {
                        onConfirm: () => {
                            n.onClose(), t();
                        },
                        channel: e,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                l),
            );
        };
    });
}
