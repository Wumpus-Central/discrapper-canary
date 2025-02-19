r.d(t, { E: () => u });
var n = r(200651),
    i = r(192379),
    o = r(120356),
    l = r.n(o),
    a = r(481060),
    c = r(807126);
let u = i.memo(function (e) {
    let { emptyText: t, icon: r, absolute: i = !1 } = e;
    return (0, n.jsx)('div', {
        className: l()(c.emptyWidgetContainer, i && c.absolute),
        children: (0, n.jsx)(a.ua7, {
            text: t,
            children: (e) => {
                var t, i;
                return (0, n.jsx)(
                    'div',
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            children: (0, n.jsx)(r, {
                                size: 'md',
                                color: a.TVs.colors.WHITE,
                                className: c.emptyWidgetIcon
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t)
                );
            }
        })
    });
});
