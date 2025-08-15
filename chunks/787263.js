n.d(e, { w: () => r });
var i = n(255367);
n(73800);
var a = n(481060);
function r(t, e) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await n.e("79521").then(n.bind(n, 207540));
        return (n) => {
            var r, l;
            return (0, i.jsx)(
                a,
                ((r = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({}, n)),
                (l = l =
                    {
                        onConfirm: () => {
                            n.onClose(), e();
                        },
                        channel: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (t) {
                          Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t));
                      }),
                r),
            );
        };
    });
}
