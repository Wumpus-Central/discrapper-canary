n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(216419);
function o(e) {
    let { icon: t, tooltip: n, onClick: i, className: o } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), i(e);
        };
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) => {
            var i, d;
            return (0, r.jsx)(
                a.P3F,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (d = d =
                    {
                        'aria-label': n,
                        onClick: c,
                        className: s()(l.actionButton, o),
                        children: (0, r.jsx)(t, {
                            className: l.icon,
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(d)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(d, e));
                      }),
                i)
            );
        }
    });
}
