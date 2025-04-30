n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(216419);
function o(e) {
    let { icon: t, tooltip: n, onClick: r, className: o } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), r(e);
        };
    return (0, i.jsx)(l.ua7, {
        text: n,
        children: (e) => {
            var r, d;
            return (0, i.jsx)(
                l.P3F,
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
                })({}, e)),
                (d = d =
                    {
                        'aria-label': n,
                        onClick: c,
                        className: s()(a.actionButton, o),
                        children: (0, i.jsx)(t, {
                            className: a.icon,
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(d)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(d, e));
                      }),
                r)
            );
        }
    });
}
