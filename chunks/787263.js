e.d(n, { w: () => l });
var i = e(54381);
e(473749);
var a = e(481060);
function l(t, n) {
    return (0, a.ZDy)(async () => {
        let { default: a } = await e.e("79521").then(e.bind(e, 207540));
        return (e) => {
            var l, r;
            return (0, i.jsx)(
                a,
                ((l = (function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(e).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = e[n]),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[n] = i);
                            });
                    }
                    return t;
                })({}, e)),
                (r = r =
                    {
                        onConfirm: () => {
                            e.onClose(), n();
                        },
                        channel: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                    : (function (t, n) {
                          var e = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              e.push.apply(e, i);
                          }
                          return e;
                      })(Object(r)).forEach(function (t) {
                          Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(r, t));
                      }),
                l),
            );
        };
    });
}
